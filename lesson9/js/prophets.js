const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        //console.table(jsonObject); // temporary checking for valid response and data parsing

        const prophets = jsonObject['prophets'];

        for (let i = 0; i < prophets.length; i++) {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let bd = document.createElement('h3');
        let bp = document.createElement('h3');
        let order = document.createElement('h3');
        let imagen = document.createElement('img');

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        order.textContent = 'Order: ' + prophets[i].order; 
        bd.textContent = 'Birthday: ' + prophets[i].birthdate;
        bp.textContent = 'Bith Place: ' + prophets[i].birthplace; 
        imagen.image =  image.setAttribute('src', prophets[i].imageurl);    


        card.appendChild(h2);
        card.appendChild(order);
        card.appendChild(bd);
        card.appendChild(bp);
        card.appendChild(imagen);
        document.querySelector('div.cards').appendChild(card);
        }
        
        //image.setAttribute('src', prophets[i].imageurl);
    });

        

