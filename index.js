// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email
        })
      })
        .then(r => r.json())
        .then((newUser) => {
          document.body.innerHTML = newUser["id"]
        })
        .catch((error) => {
            document.body.innerHTML = error.message
        })
}

