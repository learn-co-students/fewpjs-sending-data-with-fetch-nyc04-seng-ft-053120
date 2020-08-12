const body = document.querySelector("body")

submitData = (name, email) => {

  const formData = { name: name, email: email }

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  }

  return fetch("http://localhost:3000/users", options)
    .then(res => res.json())
    .then(newUser => {

      const userIdP = document.createElement("p")
      userIdP.innerHTML = newUser.id
      body.append(userIdP)
    })
    .catch(err => {
      const errorP = document.createElement("p")
      errorP.innerHTML = err.message
      body.append(errorP)
    })


}