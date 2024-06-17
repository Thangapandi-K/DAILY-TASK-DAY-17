


const container = document.createElement("div");
container.setAttribute("class", "container");

const title = document.createElement("h1");
title.setAttribute("id", "title");
title.setAttribute("class", "text-center");
title.innerText = "Countries & Weather Data";

const cardsContainer = document.createElement("div");
cardsContainer.setAttribute("class", "row");

document.body.appendChild(container);
container.append(title, cardsContainer);




let countriesAPI = "https://restcountries.com/v3.1/all";

let countriesData = fetch(countriesAPI)
.then(countriesData => countriesData.json())
.then(countries => {
    countries.forEach(country => { // getting each country details using forEach loop

        const col = document.createElement("div");
        col.setAttribute("class", "col-sm-6 col-md-4 col-lg-4 col-xl-4");

        // creating card
        const card = document.createElement("div");
        card.setAttribute("class", "card h-100");

        // creating card header with country
        const cardHeader = document.createElement("div");
        cardHeader.setAttribute("class", "card-header text-center");
        cardHeader.innerHTML = country.name.official;

        // create card body with country flag, capital, region and population
        const cardBody = document.createElement("div");
        cardBody.setAttribute("class", "card-body d-flex flex-column gap-2 align-items-center justify-content-center card-text");
        cardBody.innerHTML = 
        `
        <img src="${country.flags.png}" alt="Country Flag" class="card-img-top" />
        <div><span>Capital :</span> ${country.capital} </div>
        <div><span>Region :</span> ${country.region} </div>
        <div><span>Population :</span> ${country.population} </div>
        `;

        // create button
        const button = document.createElement("button");
        button.setAttribute("class", "btn btn-primary btn-design");
        button.innerText = "Click for Weather";


        //appending 
        cardsContainer.append(col);
        col.append(card);
        card.append(cardHeader, cardBody, button);

        
        // declaring lattidude & longitude value to fetch weather data

        const lat = country.latlng[0];
        const lon = country.latlng[1];
     
        // getting weather details from weatherAPI and adding event for button to display weather
        button.addEventListener("click", function() {
            
            return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2c92824e1f523a87db662dd63fccf6cf`)
            .then(weatherData => weatherData.json())
            .then(weatherData => {
                alert (
                `
                Country Name: ${country.name.official}
                Weather : ${weatherData.weather[0].main}
                Temperature : ${weatherData.main.temp}
                Min. Temperature : ${weatherData.main.temp_min}
                Max. Temperature : ${weatherData.main.temp_max}
                Humidity : ${weatherData.main.humidity}
                Wind Speed : ${weatherData.wind.speed}
                `
                )            
            })
        })
    });
})

    
    






    
    

    

    

