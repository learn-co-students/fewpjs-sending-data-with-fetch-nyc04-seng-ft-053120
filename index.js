// Add your code here

function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email : userEmail
  }

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", configObj)
  .then(function(response){
    return response.json()
  })
  .then(function(object){
    // debugger
    document.body.innerHTML = object.id
  })
  .catch(function(error){
    document.body.innerHTML = error.message
  })
}


// fetch("http://localhost:3000/dogs", { 
//   method: "POST", 
//   headers: { 
//     "Content-Type": "application/json", 
//     "Accept": "application/json"
//   }, 
//   body: JSON.stringify({ 
//     dogName: "Byron", 
//     dogBreed: "Poodle"
//   })
// }).then(function(response) {
//   return response.json();
// }).then(function (object) {
//   console.log(object)
// }).catch(function(error){
//   alert("Bad things! Ragnarok!")
//   console.log(error.message)
// })

// also valid:

// let formData = {
//   dogName: "Byron",
//   dogBreed: "Poodle"
// }

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(formData)
// }

// fetch("http://localhost:3000/dogs", configObj)