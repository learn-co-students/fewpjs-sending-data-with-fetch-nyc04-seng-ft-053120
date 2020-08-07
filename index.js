import { appendFile } from "fs";

// Add your code here
// fetch('http://localhost:3000/dogs'), {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify({
//         dogName: "Byron",
//         dogBreed: "Poodle"
//     })
//     // .then(res => res.json())
//     // .then(dogObject) => {
//     //     console.log(dogObject);
//     // }
//     .then(function(response) {
//         return response.json();
//       })
//       .then(function(object) {
//         console.log(object);
//       })
// }

function submitData(username, userEmail){
    let formData = {
        name: username,
        email: userEmail
    };

    let configObj =  {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }

 
    return fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(obj =>document.body.innerHTML= obj.id) 
    .catch(err => document.body.innerHTML = err.message)
}
    


