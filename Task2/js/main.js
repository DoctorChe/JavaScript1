var basket = {
    container: '.basket',
    totalSum: 0,
    totalItems: 0,
    products: [
        {id: 1, title: 'Keyboard', price: 340, quantity: 1},
        {id: 2, title: 'Mouse', price: 140, quantity: 2},
        {id: 3, title: 'Notebook', price: 14000, quantity: 3},
        {id: 4, title: 'Gamepad', price: 2500, quantity: 1},
    ],
    render(){
        var block = document.querySelector(this.container);
        this.countTotal();
        if (this.totalItems > 0) {
            for (var product of this.products){
                block.insertAdjacentHTML('beforeend', this.getMarkup(product));
            }
            block.insertAdjacentHTML('beforeend', this.getTotal());
        } else {
            block.insertAdjacentHTML('beforeend', '<div class="product-item">Корзина пуста</div>');
        }
    },
    getMarkup(product){
        if (basket.totalItems){
            return `<div class="product-item">
                        <div class="desc">
                            <p>${product.title} руб ${product.quantity} шт.</p>
                        </div>
                    </div>`            
        } else {
            "<div>Корзина пуста</div>"
        }
    },
    getTotal() {
        return `<div class="product-item">
                    <p>В корзине: ${basket.totalItems} товаров на сумму ${basket.totalSum} рублей</p>
                </div>`;
    },
    countTotal() {
        var fullprice = 0;
        var fullquantity = 0;
        this.products.forEach(function(elem) {
            if (elem.hasOwnProperty("price")) {
                fullprice += elem.price * elem.quantity;
                fullquantity += elem.quantity;
            }
        });
        basket.totalItems = fullquantity;
        basket.totalSum = fullprice;
    }
};

basket.render();