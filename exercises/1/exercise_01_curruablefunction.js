const item={
    "name":"Avocado",
    "type":"Fruit",
    "category":"Food",
    "price":200

}

function applyCoupon(item){
    return function(discount){
        item.price = item.price - item.price * discount / 100;
        return item;
    }
}
console.log(applyCoupon(item)(10).price);