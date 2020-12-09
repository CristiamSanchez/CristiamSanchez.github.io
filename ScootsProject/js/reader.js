                    
fetch("js/data/data.js")
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const pack = jsonObject['pack'];
        for (let i = 0; i < pack.length; i++) {
          //console.log(packs);
            
            if(pack[i].name == "Metro"){
                console.log('Entro');
                document.getElementById('Metro').innerHTML = pack[i].name;
                document.getElementById('priceM').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('commentM').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promoM').innerHTML = 'Promo: ' + pack[i].promo;
            }else if(pack[i].name == "ATV"){
                document.getElementById('ATV').innerHTML = pack[i].name;
                document.getElementById('priceA').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('commentA').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promoA').innerHTML = 'Promo: ' + pack[i].promo;
            }else if(pack[i].name == "PCX150"){
                document.getElementById('PCX').innerHTML = pack[i].name;
                document.getElementById('priceP').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('commentP').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promoP').innerHTML = 'Promo: ' + pack[i].promo;
            }else if(pack[i].name == "Dio"){
                document.getElementById('Dio').innerHTML = pack[i].name;
                document.getElementById('priceD').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('commentD').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promoD').innerHTML = 'Promo: ' + pack[i].promo;
            }else if(pack[i].name == "Jeep4"){
                document.getElementById('Jeep4').innerHTML = pack[i].name;
                document.getElementById('price4').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('comment4').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promo4').innerHTML = 'Promo: ' + pack[i].promo;
            }else if(pack[i].name == "Jeep2"){
                document.getElementById('Jeep2').innerHTML = pack[i].name;
                document.getElementById('price2').innerHTML = 'Precio: $' + pack[i].price;
                document.getElementById('comment2').innerHTML = 'Comments: ' + pack[i].comment;
                document.getElementById('promo2').innerHTML = 'Promo: ' + pack[i].promo;
            }else{
                console.log('Exit');
            }
            
        }
    });