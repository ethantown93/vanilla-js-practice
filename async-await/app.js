// async function myFunc(){
//     const promise = new Promise((resolve, reject)=> {
//         setTimeout(()=> resolve('hello'), 1000)
//     })

//     const error = false;

//     if(!error){
//         const res = await promise;
//         return res;
//     } else {
//         await Promise.reject(new Error('Ooops'))
//     }
// }

// myFunc()
//     .then( res => console.log(res))
//     .catch( err => console.log(err))

async function getUsers(){

    // await the response of fetch
    const response = await fetch('http://jsonplaceholder.typicode.com/users/');

    // only proceed if promise is resolved
    const data = await response.json();
    // only proceed once second promise is resolved.
    return data
}

getUsers().then(users => console.log(users)).catch(err => console.log(err))