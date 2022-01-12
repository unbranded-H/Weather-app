const form = document.getElementById("myForm")
const inputfield = document.getElementById("city-field")
const jumbotron = document.getElementById("information")

form.addEventListener("submit", function(e) {
    e.preventDefault() //this is to make the js file be executed
    const city = inputfield.value
    //study promises in detail
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=13b0996ef7a24f8a9fd173316221201&q=${city}&aqi=no`,)
    
    promise.then(function(response){
        const data = response.json()
        data.then(function(data1){
            if (data1.error) {
                jumbotron.innerHTML= "No Such city exists"
            }
            else {
            jumbotron.innerHTML= "Temperature: " + data1.current.temp_c + " °C"
            }
        })
        data.catch(function(err){
            console.log(err)
        })
    })
    promise.catch(function(err){
        console.log(err)
    })
})