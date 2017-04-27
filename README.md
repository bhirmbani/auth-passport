# auth-passport
A simple demonstration of REST API AUTH using ExpressJS, jsonwebtoken, mongoose and passportJS

### Installation
```javascript
npm install
npm start
```

### REST API USERS
Access the API from http://localhost:3000/api/users

List of users routes:

Route | HTTP | Description
----- | ---- | -----------
/api/users/signup| POST | Sign up with new user info
/api/users/login| POST | Sign in while get an access token based on credentials
/api/users | GET | Get all the users info (for authenticated user)
/api/users/delete/:username | DELETE | Delete a user based on its username
/api/users/edit/:username | PUT | Update a user with new info (admin and authenticated user)
/api/users/find | POST | find by username


### REST API BOOKS
Acces the API from http://localhost:3000/api/books

List of books routes:

Route | HTTP | Description
----- | ---- | -----------
/api/books| GET | get all the books
/api/books/add| POST | add new book
/api/books/find | POST | find by ISBN
/api/books/edit/:isbn| PUT | edit a book info based on its ISBN
/api/books/delete/:isbn | DELETE | delete a book based on its ISBN
