

DROP DATABASE jobly;
CREATE DATABASE jobly;
\connect jobly

\i jobly-schema.sql
\i jobly-seed.sql

\echo 'Delete and recreate jobly_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE jobly_test;
CREATE DATABASE jobly_test;
\connect jobly_test

\i jobly-schema.sql


`select j.id,j.salary,j.equity,j.company_handle from jobs as j 
    LEFT JOIN applications on j.id = applications.job_id`

SELECT u.username, u.first_name AS "firstName", u.last_name AS "lastName", u.email, u.is_admin AS "isAdmin", jobs.id AS "jobId"
FROM users AS u 
LEFT JOIN applications
ON u.username = applications.username
LEFT JOIN jobs 
ON applications.job_id = jobs.id
WHERE u.username = 'Xavier98';