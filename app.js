"use strict";

let toppings = [];
let combos = [];
let topTwenty = [];

fetch("./pizzas.json")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        function count() {

        data.forEach(pizza => {
            toppings.push(pizza.toppings)
        });
        
            toppings.sort();
        
            var current = toppings[0];
            var cnt = 0;
            for (var i = 0; i < toppings.length; i++) {
                if (i > 0 && toppings[i].join('') != current.join('')) {
                    if (cnt > 0) {
                        // document.write('<h1>' + current + ' has been ordered: ' + cnt + ' times</h1><br>');
                        combos.push({
                            "combo": current,
                            "orderCount" : cnt
                        })
                    }
                    cnt = 1;
                    current = toppings[i];
                } else {
                    cnt++;
                }
            }
            if (cnt > 0) {
                // document.write('<h1>' + current + ' has been ordered: ' + cnt + ' times</h1><br>');
                combos.push({
                    "combo": current,
                    "orderCount" : cnt
                })
            }
            // for(let i = 0; i <= combos.length - 1; i++) {

            // }


            var insert = "";
            for(let i = 0; i <= combos.length - 1; i++) {
                // console.log(combo.combo + ' has been ordered: ' + combo.orderCount + ' times');
                
                insert += (`<tr><td>${i + 1}</td><td>${combos[i].combo}</td><td>${combos[i].orderCount}</td></tr>`);
                // <h3>The combination of:<br>' + combo.combo + '<br>has been ordered: ' + combo.orderCount + ' times<h3>');
            }
                var top = document.getElementById('topTwenty');

                top.innerHTML = insert;

        }

        
        
        count();

    })