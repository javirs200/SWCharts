let options = {
    width: 850,
    height: 400
};

// Ejercicio 1.
// Titulos = results[i].title
// Año = results[i].release_date
let baseURL = "https://swapi.dev/api"
function flims() {
    fetch(baseURL + "/films/")
        .then(response => response.json())
        .then(flims => {
            
            let data = {}
            data["labels"] = []
            data["series"] = [[]]

            for (const f of flims["results"]) {
                data["labels"].push(f['title']);
                data["series"][0].push(String(f["release_date"].split("-")[0]));//solo el year
            }
            
            new Chartist.Line('#chart1', data, options); 

        })
   
}

// Ejercicio 2.
// Personaje = results[i].name
// Apariciones = results[i].films.length 
function characters() {
    fetch(baseURL + "/people/")
        .then(response => response.json())
        .then(characters => {
            
            let data = {}
            data["labels"] = []
            data["series"] = [[]]

            for (const f of characters["results"]) {
                data["labels"].push(f['name']);
                data["series"][0].push(f['films'].length);
            }
           
            new Chartist.Bar('#chart2', data, options); 

        })
   
}


flims() 

characters() 




   



