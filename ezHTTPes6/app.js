const http = new EasyHTTP;

// get users

// const users = http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// user data 
const data = {
    name: 'Ethan Townsend',
    username: "ethan",
    email: 'ethan@gmail.com'
}

// create user
// http.post('http://jsonplaceholder.typicode.com/users/', data)
// .then( data => console.log(data))
// .catch( err => console.log(err))

// update user
// http.put('http://jsonplaceholder.typicode.com/users/1', data)
// .then( data => console.log(data))
// .catch( err => console.log(err))

//delete user
http.delete('http://jsonplaceholder.typicode.com/users/1')
.then( data => console.log(data))
.catch( err => console.log(err))
