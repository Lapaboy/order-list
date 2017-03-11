"use strict";

function addOrders (data) {
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
            <td>${ formatDate(data[key].checkout_at) }</td>
            <td>${ data[key].amount_payable.split('.')[0] } руб.</td>
        </tr>
        `;
    }
}

function formatDate (text) {
    text = text.split('-');
    let date = new Date(text[0], text[1] - 1, text[2]);
    return `
        ${ date.getDate() }
        ${ date.toLocaleDateString("ru", {month: 'long'}).substr(0,3) }
        ${ date.getFullYear() }
    `
}