"use strict";

let pizzaCombos, toppings = [];

fetch("./pizzas.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        function count() {
            pizzaCombos = data;

        pizzaCombos.forEach(pizza => {
            toppings.push(pizza.toppings)
        });
        
            toppings.sort();
        
            var current = toppings[0];
            var cnt = 0;
            for (var i = 0; i < toppings.length; i++) {
                if (i > 0 && toppings[i].join('') != current.join('')) {
                    if (cnt > 0) {
                        document.write(current + ' has been ordered: ' + cnt + ' times<br>');
                    }
                    cnt = 1;
                    current = toppings[i];
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
                document.write(current + ' has been ordered: ' + cnt + ' times');
            }
        
        }
        
        count();
    })