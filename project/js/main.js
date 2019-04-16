var catalog = {
    container: '.products',
    products: [
        {id: 1, title: 'Keyboard', price: 340},
        {id: 2, title: 'Mouse', price: 140},
        {id: 3, title: 'Notebook', price: 14000},
        {id: 4, title: 'Gamepad', price: 2500},
    ],
    defaultImg: 'https://placehold.it/200x150',
    render(){
        var block = document.querySelector(this.container);
        block.innerHTML = "";
        for (var product of this.products){
            block.insertAdjacentHTML('beforeend', this.getMarkup(product));
        };
    },
    getMarkup(product){
        return `<div class="product-item"">
                    <img src="${this.defaultImg}" alt="">
                    <div class="desc">
                        <h3>${product.title}</h3>
                        <p>${product.price} руб</p>
                        <button class="buy-btn" data-id="${product.id}" data-title="${product.title}" data-price="${product.price}">Купить</button>
                    </div>
                </div>`
    },
};

var cart = {
    total: {},
    container: '.cart-block',
    products: [
        {id: 1, title: 'Keyboard', price: 340, quantity: 3},
        {id: 3, title: 'Notebook', price: 14000, quantity: 2},
        {id: 5, title: 'boots', price: 140, quantity: 2},
        {id: 6, title: 'pants', price: 250, quantity: 1},
    ],
    calcTotal(){
        var sum = 0,
            items = 0;
        for (var product of this.products){
            sum += product.price * product.quantity;
            items += product.quantity;
        }
        this.total = {sum: sum, items: items};
    },
    render(){
        this.renderItems();
        this.renderTotal();
        this.init();
    },
    renderItems(){
        var block = document.querySelector(this.container);
        if(!this.products.length){
            block.textContent = 'Корзина пуста';
            return
        }
        block.innerHTML = "";
        for (var product of this.products){
            block.insertAdjacentHTML('beforeend', this.getMarkup(product));
        }
    },
    renderTotal(){
        var block = document.querySelector(this.container);
        this.calcTotal();
        block.insertAdjacentHTML('beforeend', `<p class="total">В корзине ${this.total.items} товаров на сумму ${this.total.sum} рублей</p>`)
    },
    getMarkup(product){
        return `<div class="cart-item">
                    <h4>${product.title}</h4>
                    <p>${product.quantity} шт</p>
                    <p>${product.price * product.quantity} руб</p>
                    <button class="del-btn">&times;</button>
                </div>`
    },
    init(){
        var that = this;
        var buyButtons = document.querySelectorAll('.buy-btn');
        buyButtons.forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                var item = {
                    id: +e.target.dataset.id,
                    title: e.target.dataset.title,
                    price: +e.target.dataset.price,
                };
                that.addToCart(item);
            })
        });
    },
    addToCart(item) {
        var isInCard = false;
        for (var product of this.products) {
            if (item.id === product.id) {
                isInCard = true;
                product.quantity++;
                break;
            }
        };
        if (!isInCard) {
            item.quantity = 1;
            this.products.push(item);
        };
        this.renderItems();
        this.renderTotal();
    }
};

catalog.render();
cart.render();