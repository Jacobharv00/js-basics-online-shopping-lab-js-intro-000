var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
// used item arrgument to create a new object representing the item.
// the object should have two key-value pairs
//{itemName: itemPrice}
// the price of each item should be randomly-generated integer between 1 and 100
// updon adding a new itme to cart function should return itemName has been added to your cart.

function addToCart(item) {
  let price = Math.floor(Math.random() * 99)
  cart.push({'itemName': item, 'itemPrice': price})
  return(`${item} has been added to your cart.`)
}


function viewCart() {
  let message = 'In your cart, you have'
  if(cart.length === 0) {
    return 'Your shopping cart is empty.'
  }else{
    if (cart.length === 1 ){
      return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }else{
      if (cart.length === 2) {
        return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
      }else {
        if (cart.length === 3) {
          return `${message} ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}, ${cart[2].itemName} at $${cart[2].itemPrice}.`
      }else{
        var cartList = []
        for (let i = 0; i < cart.length-1; i++) {
          cartList.push(`${cart[i].itemName} at $${cart[i].itemPrice}`)
        }
        return `${message} ${cartList}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
        }
      }
    }
  }
}




function total() {
  let cartTotal = 0
  for(let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice
  }
return cartTotal

}


function removeFromCart(item){
  for (var i = 0; i < cart.length; i++){
      if (item === cart[i].itemName) {
        cart.splice(i, 1)
        return cart
 }
}
    if (item != cart[item]) {
    return 'That item is not in your cart.'
  }
}



function  placeOrder(cardNumber) {
    var message = ""
    if (!cardNumber) {
      return "Sorry, we don't have a credit card on file for you."
    } else {
      message = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
      cart = []
      return message
    }
}
