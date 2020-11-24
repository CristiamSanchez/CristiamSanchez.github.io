const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
                    
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let name = document.createElement('h2');
            let year = document.createElement('p');
            let population = document.createElement('p');
            let rainfall = document.createElement('p');
            let img = document.createElement('img');

            
            if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {
                year.textContent = "Year Founded: " + towns[i].yearFounded;
                population.textContent = "Population: " + towns[i].currentPopulation;
                rainfall.textContent = "Annual Rain Fall: " + towns[i].averageRainfall;
                name.textContent = towns[i].name + " ";
                if(towns[i].name== "Preston"){
                    img.setAttribute('src', "images/prestono.jpg");
                    img.setAttribute('alt', "Photograph of: " + name.textContent);
                } else if(towns[i].name== "Fish Haven"){
                    img.setAttribute('src', "images/fisho.jpg");
                    img.setAttribute('alt', "Photograph of: " + name.textContent);
                }else if(towns[i].name == "Soda Springs"){
                    img.setAttribute('src', "images/sodaso.jpg");
                    img.setAttribute('alt', "Photograph of: " + name.textContent);
                }else{}
                
            } else{  } 

            if (i == 1 || i == 6 || i == 5) {
                div.appendChild(name);
                div.appendChild(year);
                div.appendChild(population);
                div.appendChild(rainfall);
                card.appendChild(div);
                card.appendChild(img);

                document.querySelector('div.cities').appendChild(card);
            }
        }
    });