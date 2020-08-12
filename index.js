// Add your code here

    function submitData(userName, userEmail){
      let submitData = {
        userName: userName,
        userEmail: userEmail
    };
    
    let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(submitData)
      };
       
      return fetch("http://localhost:3000/dogs", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          console.log(object);
        })
        .catch(function(error) {
          alert("Bad things! Ragnarők!");
          console.log(error.message);
        });
    }