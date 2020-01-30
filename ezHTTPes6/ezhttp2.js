class EasyHTTP {

    // async get request
    async get(url){
        const response = await fetch(url);

        const responseData = await response.json();

        return responseData
    }

    async post(url, data){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'applicaiton/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData
    }

    async put(url, data){
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const resData = await response.json();
        return resData
    }

    async delete(url){
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application.json'
            }
        })

        const resData = await 'resource deleted';
        return resData;
    }

    // // http get method
    // get(url){

    //     return new Promise((resolve, reject) => {
    //         fetch(url)
    //         .then(res => res.json())
    //         .then( data => resolve(data))
    //         .catch(err => reject(err))
    //     }
    //     )
    // }

    // // http post request

    // post(url, data) {
    //     return new Promise((resolve, reject) => {
    //       fetch(url, {
    //         method: 'POST',
    //         headers: {
    //           'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(data)
    //       })
    //       .then(res => res.json())
    //       .then(data => resolve(data))
    //       .catch(err => reject(err));
    //     });
    //   }

    //   // http put request
    //   put(url, data){
    //       return new Promise((resolve, reject) => {
    //           fetch(url, {
    //               method: 'PUT',
    //               headers: {
    //                   'Content-type': 'application/json'
    //               },
    //               body: JSON.stringify(data)
    //           })
    //           .then( res => res.json())
    //           .then( data => resolve(data))
    //           .catch( err => reject(err))
    //       })
    //   }

    //   // http delete request
    //   delete(url){
    //       return new Promise((resolve, reject) => {
    //           fetch(url, {
    //               method: 'DELETE',
    //               headers: {
    //                   'Content-type': 'application/json'
    //               }
    //           })
    //           .then( res => res.json())
    //           .then( () => resolve('resource has been delted'))
    //           .catch( err => reject(err))
    //       })
    //   }

}