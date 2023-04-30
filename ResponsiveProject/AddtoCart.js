const product = [
    {
        id: 0,
        image: 'html.png',
        title: 'HTML Fully Course',
        price: 600,
    },
    {
        id: 1,
        image: 'CSS.png',
        title: 'CSS Fully Course',
        price: 800,
    },
    {
        id: 2,
        image: 'download.png',
        title: 'JAVASCRIPT  Fully Course',
        price: 900,
    },
    {
        id: 3,
        image: 'react1.png',
        title: 'REACT Fully Course',
        price: 1200
    }
]
console.log('hello ia m')
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;

document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class='box'>
        <div class='img-box'>
            <img class='images' src='${image}'/>
        </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00 </h2>` +
        "<button onclick='addtoCart(" + (i++) + ")'>Add to cart</button>" +
        `</div>
        </div>`
    )
}).join('')

var cart = [];

function addtoCart(a) {
    cart.push({ ...categories[a] });
    displaycart();
}

function delElement(a){
    console.log(a,'index----')
    cart.splice(a, 1);
    displaycart();
}



function displaycart(a) {
    let j = 0, total=0;
    document.getElementById('count').innerHTML=cart.length;
    document.getElementById('total').innerHTML= "$ "+0+".00";
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = 'Your Cart is Empty';
    }
    else {
        document.getElementById('cartItem').innerHTML = cart.map((item) => {
            var { image, title, price } = item
    document.getElementById('count').innerHTML=cart.length;
            total=total+price;
    document.getElementById('total').innerHTML= "$ "+total+".00";
            return (
                `<div class='cart-item'>
            <div class=row-img>
            <img class='rowimg' src='${image}' />
            </div>
            <p style='font-size:12px;'>${title}</p>
            <h2 style='font-size:15px;'>${price}.00</h2>` +
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }
}