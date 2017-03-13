import Orders from './orders.js';
import '../css/style.css';

var orders;

document.addEventListener("DOMContentLoaded", function () {
    query()
        .then( (data) => {
            data = JSON.parse(data);
            orders = new Orders(data.orders);
            orders.sortInitialStateDesc();
        })
        .catch ( (error) => {
            console.error(error);
        })

        sortButton.attributes.state = "desc";
        sortButton.addEventListener("click", function () {
            if (this.attributes.state === "desc") {
                this.attributes.state = "asc";
                this.className = "fa fa-sort-asc fa-2x";
                orders.sortFilteredAsc();
            } else {
                this.attributes.state = "desc";
                this.className = "fa fa-sort-desc fa-2x";
                orders.sortFilteredDesc();
            }
        })

        filterById.addEventListener("change", () => orders.showFilteredOrders() );
        filterByCity.addEventListener("change", () => orders.showFilteredOrders() );
})

function query () {
    return new Promise (function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", "orders.json");
        xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
        xhr.send();
        xhr.onload = function() {
            if (xhr.status === 200) { 
                resolve(xhr.responseText) 
            } else { 
                reject(xhr.status) 
            }
        }
    })
}



