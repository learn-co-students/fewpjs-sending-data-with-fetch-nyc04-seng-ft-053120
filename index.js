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
    .then(res => res.json())
    .then(function(userObj) {
        document.body.append(userObj.id)
    })
    .catch(function(error) {
        document.body.append(error.message);
    })
}