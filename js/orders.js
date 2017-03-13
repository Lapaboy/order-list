"use strict";

class Orders {
    constructor (data) {
        this.initialState = data;
        this.filtered = data;
    }

    filter () {
        this.filtered = this.initialState.filter( (item) => {
            if (filterById.value !== "" && filterByCity.value !== "") {
                return item.order_id == filterById.value && item.city.toUpperCase() == filterByCity.value.toUpperCase()
            } else if (filterById.value === "" && filterByCity.value !== "") {
                return item.city.toUpperCase() == filterByCity.value.toUpperCase()
            } else if (filterById.value !== "" && filterByCity.value === "") {
                return item.order_id == filterById.value
            } else if (filterById.value === "" && filterByCity.value === "") {
                return true
            }
        })
    }

    sortInitialStateDesc () {
        this.initialState = this.initialState.sort(this.sortDesc);
        this.addOrders(this.initialState)
    }

    sortInitialStateAsc () {
        this.initialState = this.initialState.sort(this.sortAsc);
        this.addOrders(this.initialState)
    }

    sortFilteredDesc () {
        this.filtered = this.filtered.sort(this.sortDesc);
        this.addOrders(this.filtered)
    }

    sortFilteredAsc () {
        this.filtered = this.filtered.sort(this.sortAsc);
        this.addOrders(this.filtered)
    }

    showFilteredOrders() {
        this.filter();
        this.addOrders(this.filtered)
    }

    addOrders (data) {
        itemList.innerHTML = `
        <tr style="border-top: none;">
            <th>ID</th>
            <th>Город</th>
            <th>Выезд</th>
            <th>Цена продажи</th>
        </tr>`;

        for (let key in data ) {
            itemList.innerHTML += `
            <tr>
                <td>${ data[key].order_id }</td>
                <td>${ data[key].city }</td>
                <td>${ this.formatDate(data[key].checkout_at) }</td>
                <td>${ data[key].amount_payable.split('.')[0] } руб.</td>
            </tr>
            `;
        }
    }

    formatDate (text) {
        text = text.split('-');
        let date = new Date(text[0], text[1] - 1, text[2]);
        return `
            ${ date.getDate() }
            ${ date.toLocaleDateString("ru", {month: 'long'}).substr(0,3) }
            ${ date.getFullYear() }
        `;
    }

    sortDesc (date1, date2) {
        date1 = date1.checkout_at.split('-');
        date2 = date2.checkout_at.split('-');

        let date3 =  new Date(date1[0], date1[1] - 1, date1[2]);
        let date4 =  new Date(date2[0], date2[1] - 1, date2[2]);

        return date3 - date4
    }

     sortAsc (date1, date2) {
        date1 = date1.checkout_at.split('-');
        date2 = date2.checkout_at.split('-');

        let date3 =  new Date(date1[0], date1[1] - 1, date1[2]);
        let date4 =  new Date(date2[0], date2[1] - 1, date2[2]);

        return date4 - date3
    }
}

export default Orders;