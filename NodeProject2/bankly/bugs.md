bug#1
"auth/login" returns a "token" however middleware function "authUser" called by "users/" expects "\_token"
(should be "return res.json(\_token)")

bug#2
Patch route "users/:username" is using middleware "requireAdmin" however the route should allow a normal user to patch their own data
delete middleware requireAdmin for this route

bug#3
Patch route "users/:username" allows a user to change their username howver if the username is changed the tokens payload and req.curr_username is containing an incorrect username

bug#4
middleware "authUser" uses jwt.decode to get the payload however its should be jwt.veryify(token,SECRET_KEY) so that the token can be verified before it is returned

bug#5
when updating password with Patch route "users/:username" it is being saved to the db as shown in request IT IS NOT BEING HASHED
