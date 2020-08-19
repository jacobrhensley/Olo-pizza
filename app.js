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
                combos.push({
                    "combo": current,
                    "orderCount" : cnt
                })
            }

            // PUT COMBOS IN DESCENDING ORDER AND SLICE TOP 20
            combos.sort((a, b) => b.orderCount - a.orderCount);

            combos.forEach((combo) => {
                console.log(`${combo.orderCount}`);
                topTwenty.push(combo);
            });

            topTwenty = topTwenty.slice(0, 20);

            // CREATE HTML TO FORM TABLE
            var insert = "";
            for(let i = 0; i <= topTwenty.length - 1; i++) {
                
                insert += (`<tr><td>${i + 1}</td><td>${topTwenty[i].combo}</td><td>${topTwenty[i].orderCount}</td></tr>`);
            }
                var top = document.getElementById('topTwenty');

                top.innerHTML = insert;

        }

        count();
    })