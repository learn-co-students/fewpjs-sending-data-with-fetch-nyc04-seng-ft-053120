
function submitData (usersName, usersEmail){
   return fetch("http://localhost:3000/users",{
        method: "POST",
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(
            {
                name: usersName,
                email: usersEmail
            }
        )
    })
    .then(response => (response.json()))
    .then(userInfo => {
        document.body.append(userInfo.id)
        
    }).catch(error =>{
        document.body.append(error.message);
    })
}

  submitData("21shield", "email@.com")
//  submitData("21shield", "email@.com")
//  submitData("21shield", "email@.com")