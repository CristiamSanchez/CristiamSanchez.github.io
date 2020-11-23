
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing

        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++) {

        let card = document.createElement('div');
        let h2 = document.createElement('h2');
        let h5 = document.createElement('h5');
        let ar = document.createElement('h7');
        let bd = document.createElement('h6');
        let bp = document.createElement('h9');

        
            if (towns[i].name == "Fish Haven") {
                h2.textContent =  towns[i].name;
                h5.textContent =  towns[i].motto;
                bd.textContent = 'Year Founded: ' + towns[i].yearFounded;
                bp.textContent = 'Current Population: ' + towns[i].currentPopulation ;
                ar.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
                card.appendChild(h2);
                card.appendChild(h5);
                card.appendChild(bd);
                card.appendChild(ar);
                card.appendChild(bp);
                console.log(card);
                
                document.querySelector('#FishH').appendChild(card);
            } else if(towns[i].name == "Preston") {
                h2.textContent =  towns[i].name;
                h5.textContent =  towns[i].motto;
                bd.textContent = 'Year Founded: ' + towns[i].yearFounded;
                bp.textContent = 'Current Population: ' + towns[i].currentPopulation;
                ar.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
                card.appendChild(h2);
                card.appendChild(h5);
                card.appendChild(bd);
                card.appendChild(ar);
                card.appendChild(bp);
                console.log(card);
                document.querySelector('#Preston').appendChild(card);
            } else if(towns[i].name == "Greenville") {
                h2.textContent =  towns[i].name;
                h5.textContent =  towns[i].motto;
                bd.textContent = 'Year Founded: ' + towns[i].yearFounded;
                bp.textContent = 'Current Population: ' + towns[i].currentPopulation;
                ar.textContent = 'Average Rain Fall: ' + towns[i].averageRainfall;
                card.appendChild(h2);
                card.appendChild(h5);
                card.appendChild(bd);
                card.appendChild(ar);
                card.appendChild(bp);
                console.log(card);
                document.querySelector('#SodaS').appendChild(card);
            }else{
                
            }
        }
        
        //image.setAttribute('src', prophets[i].imageurl);
    });

        

