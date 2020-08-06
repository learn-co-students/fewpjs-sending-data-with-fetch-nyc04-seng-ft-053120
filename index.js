const { object } = require("chai-spies");

// Add your code here

function submitData(userName, userEmail) {
    let subData = { name: userName, email: userEmail };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(subData)
    };
    return fetch("http://localhost:3000/users", configObj)
        .then(res => res.json())
        .then(object => {
            document.body.innerHTML = object.id;
        })
        .catch(error => {
            document.body.innerHTML = error.message;
        })
}