// Add your code here
function submitData(name, email) {
return fetch(`http://localhost:3000/users`, { 
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json" //optional but lab required this
    },
    body: JSON.stringify({
        name, //call what was passed in function
        email
    })
})
    .then(function (response)  {
        return response.json()
    })
    .then(function(object) {
        document.body.innerHTML = object["id"]
    })
    .catch(function(error) {
      document.body.innerHTML = error.message //handles the unexpected results
    })
}