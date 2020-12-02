//const requestURLp = 'https://byui-cit230.github.io/weather/data/towndata.json';
                    
fetch('js/townInfo.js')
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement('section');  
            let div = document.createElement('div');          
            let p = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            

            if (towns[i].name == "Soda Springs") {
                p.textContent =  towns[i].events[0];
                p2.textContent =  towns[i].events[1];
                p3.textContent =  towns[i].events[2];
                console.log(towns[i].events[0]);
            } 
            if (i == 6) {
                div.appendChild(p);
                div.appendChild(p2);
                div.appendChild(p3);
                card.appendChild(div);
                document.querySelector('div.city').appendChild(card);
            }
        }
    });