// Add your code here
function submitData(usersName, usersEmail) {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: usersName,
            email: usersEmail
        })
    })
    .then(function(response) {
        return response.json();
      })
    .then(function(userObj) {
        document.body.append(userObj.id)
    })
    .catch(function(error) {
        document.body.append(error.message);
    })
}
