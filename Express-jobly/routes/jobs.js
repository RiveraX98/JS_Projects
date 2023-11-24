/** Routes for Jobs. */

const jsonschema = require("jsonschema");
const jobNewSchema = require("../schemas/jobNew.json");
const express = require("express");

const { BadRequestError, NotFoundError } = require("../expressError");
const { ensureLoggedIn, isAdmin } = require("../middleware/auth");

const Job = require("../models/job");

const router = new express.Router();

/** GET /  =>
 *   { jobs: [ { id, title, salary, equity, companyHandle }, ...] }
 *
 * Authorization required: none
 *
 */

router.get("/", async function (req, res, next) {
  try {
    if (Object.keys(req.query).length != 0) {
      let filters = [];
      let values = [];
      let idx = 1;

      for (let key in req.query) {
        if (key === "title") {
          filters.push([`title ILIKE $${idx}`]);
          values.push(`%${req.query.title}%`);

          idx += 1;
        } else if (key === "minSalary") {
          filters.push([`salary >= $${idx}`]);
          values.push(req.query[key]);
          idx += 1;
        } else if (key === "hasEquity") {
          if (req.query.hasEquity === "true") {
            filters.push([`equity > $${idx}`]);
            values.push(0);
            idx += 1;
          } else if (req.query.hasEquity === "false") {
            filters.push([`equity = $${idx}`]);
            values.push(0);
            idx += 1;
          }
        } else {
          throw new BadRequestError("Invalid search query");
        }
      }

      const jobs = await Job.search(filters, values);
      return res.json({ jobs });
    }

    const jobs = await Job.findAll();
    return res.json({ jobs });
  } catch (err) {
    return next(err);
  }
});

/** GET /[handle]  =>  { job }
 *
 *  job is { id, title, salary, equity, companyHandle }
 *
 * Authorization required: none
 */

router.get("/:id", async function (req, res, next) {
  try {
    const job = await Job.get(req.params.id);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

/** POST / { job } =>  { job }
 *
 * job should be { title, salary, equity, companyHandle }
 *
 * Returns { id, title, salary, equity, companyHandle }
 *
 * Authorization required: login, isAdmin
 */
router.post("/", ensureLoggedIn, isAdmin, async function (req, res, next) {
  try {
    const validator = jsonschema.validate(req.body, jobNewSchema);
    if (!validator.valid) {
      const errs = validator.errors.map((e) => e.stack);
      throw new BadRequestError(errs);
    }
    const job = await Job.create(req.body);
    return res.status(201).json({ job });
  } catch (err) {
    return next(err);
  }
});
/** Update company data with `data`.
 *
 * This is a "partial update" --- it's fine if data doesn't contain all the
 * fields; this only changes provided ones.
 *
 * Data can include: {title, salary, equity, companyHandle }
 *
 * Returns {id, title, salary, equity, companyHandle }
 *
 * Throws NotFoundError if not found.
 */

router.patch("/:id", ensureLoggedIn, isAdmin, async function (req, res, next) {
  try {
    const job = await Job.update(req.params.id, req.body);
    return res.json({ job });
  } catch (err) {
    return next(err);
  }
});

/** DELETE /[handle]  =>  { deleted: handle }
 *
 * Authorization: login, isAdmin
 */

router.delete("/:id", ensureLoggedIn, isAdmin, async function (req, res, next) {
  try {
    await Job.remove(req.params.id);
    return res.json({ deleted: req.params.id });
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
