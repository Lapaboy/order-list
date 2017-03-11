function sortDesc (date1, date2) {
    date1 = date1.checkout_at.split('-');
    date2 = date2.checkout_at.split('-');

    let date3 =  new Date(date1[0], date1[1] - 1, date1[2]);
    let date4 =  new Date(date2[0], date2[1] - 1, date2[2]);

    return date3 - date4
}

function sortAsc (date1, date2) {
    date1 = date1.checkout_at.split('-');
    date2 = date2.checkout_at.split('-');

    let date3 =  new Date(date1[0], date1[1] - 1, date1[2]);
    let date4 =  new Date(date2[0], date2[1] - 1, date2[2]);

    return date4 - date3
}

function filter () {
    //Говнокод, не получилось придумать ничего лучше.
    //Если количество фильтруемых полей увеличится, то нужно будет искать другой подход.
    //Но на двух полях работает.
    store.filtered = store.state.filter( (item) => {
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
    addOrders(store.filtered.sort(sortDesc));
}