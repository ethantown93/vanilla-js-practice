const http = new ezHTTP;

// get posts 

// http.get('http://jsonplaceholder.typicode.com/posts', function(err, response){

//     if(err){
//         console.log(err)
//     } else {
//         console.log(response);
//     }

//     console.log(response)
// });

//get single post
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, response){

//     if(err){
//         console.log(err)
//     } else {
//         console.log(response);
//     }

//     console.log(response)
// });

// create post

const data = {
    title: "New post",
    body: 'this is the body of my new post',
    userID: '1007'
}

// http.post('http://jsonplaceholder.typicode.com/posts', data, function(error, post){
//     if(error){
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// })

// put request

http.delete('http://jsonplaceholder.typicode.com/posts/1', data, function(error, post){
    if(error){
        console.log(error);
    } else {
        console.log(post);
    }
})

http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response){

    if(err){
        console.log(err)
    } else {
        console.log(response);
    }
});