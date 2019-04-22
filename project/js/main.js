var cart = {
    total: {},
    container: '.cart-block',
    products: [
        {id: 1, title: 'Keyboard', price: 340, quantity: 3},
        {id: 2, title: 'Notebook', price: 14000, quantity: 2},
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
    addItem(product){
        var prod = this.products.find(function (element) {
            return element.id === product.id
        });
        if(prod){
            prod.quantity++;
            this.updateProduct(prod);
        } else {
            this.products.push(product);
            this.renderProduct(product)
        }
        this.calcTotal();
        this.updateTotal();
    },
    render(){
        var block = document.querySelector(this.container);
        for (var product of this.products){
            this.renderProduct(product);
        }
        block.insertAdjacentHTML('beforeend', `<p class="total"></p>`);
        this.updateTotal();
    },
    updateTotal(){
        document.querySelector(this.container).querySelector('.total').textContent = this.products.length ? `В корзине ${this.total.items} товаров на сумму ${this.total.sum} рублей` : `Корзина пуста`
    },
    updateProduct(product){
        document.querySelector(`.cart-item[data-id="${product.id}"]`).querySelector('.quantity').textContent = `${product.quantity} шт`;
        document.querySelector(`.cart-item[data-id="${product.id}"]`).querySelector('.price').textContent = `${product.price * product.quantity} руб`;
    },
    renderProduct(product){
        document.querySelector(this.container).insertAdjacentHTML('afterbegin', this.getMarkup(product));
    },
    getProduct(id){
        return this.products.find(function (element) {
            return element.id === id
        })
    },
    removeItem(element){
        var product = this.getProduct(+element.dataset.id);
        if(product.quantity > 1){
            product.quantity--;
            this.updateProduct(product);
        } else {
            this.products.splice(this.products.indexOf(product), 1);
            document.querySelector(`.cart-item[data-id="${product.id}"]`).remove();
        }
        this.calcTotal();
        this.updateTotal();
    },
    setListeners(){
        var that = this;
        document.querySelector(this.container).addEventListener('click', function(e){
            if(e.target.classList.contains('del-btn')){
                that.removeItem(e.target);
            }
        })
    },
    init(){
        this.render();
        this.setListeners();
    },
    getMarkup(product){
        return `<div class="cart-item" data-id="${product.id}">
                    <h4>${product.title}</h4>
                    <p class="quantity">${product.quantity} шт</p>
                    <p class="price">${product.price * product.quantity} руб</p>
                    <button class="del-btn" data-id="${product.id}">&times;</button>
                </div>`
    }
};

var gallery = {
    block: '.modal',
    tabsBlock: '.tabs',
    mainBlock: '.main',
    close: '.close',
    nav: '.nav',
    bigImage: {},
    allImages: [],
    currentImage: 0,
    // bigImage: {src: 'img/big/img1.jpeg', alt: 'Some img'},
    // allImages: [
    //     {src: 'img/small/img1.jpeg', alt: 'Some img'},
    //     {src: 'img/small/img2.png', alt: 'Some img'},
    //     {src: 'img/small/img3.jpg', alt: 'Some img'},
    //     {src: 'img/small/img4.gif', alt: 'Some img'},
    // ],
    renderTabs(){
        var block = document.querySelector(this.tabsBlock);
        block.innerHTML = '';
        for (var img of this.allImages){
            block.insertAdjacentHTML('beforeend', this.createImg(img, this.allImages.indexOf(img)));
        }
    },
    renderMain(){
        document.querySelector(this.mainBlock).innerHTML = this.createImg(this.bigImage)
    },
    init(){
        this.renderTabs();
        this.renderMain();
    },
    toggle(){
        document.querySelector(this.block).classList.toggle('show');
    },
    showImage(action){
        this.currentImage = action === 'prev' ? this.currentImage - 1 : this.currentImage + 1;
        if(this.currentImage < 0){
            this.currentImage = this.allImages.length - 1;
        } else if (this.currentImage === this.allImages.length){
            this.currentImage = 0;
        }
        var image = this.allImages[this.currentImage];
        this.bigImage.src = image.src.replace('small', 'big');
        this.renderMain();
    },
    controller(){
        var that = this;
        document.querySelector(this.tabsBlock).addEventListener('click', function(e){
            if(e.target.tagName === 'IMG'){
                that.bigImage.src = e.target.src.replace('small', 'big');
                that.currentImage = +e.target.dataset.img;
                that.renderMain();
            }
        });
        document.querySelector(this.close).addEventListener('click', function(){
            that.toggle()
        });
        document.querySelector(this.nav).addEventListener('click', function(e){
            if(e.target.tagName === 'BUTTON'){
                that.showImage(e.target.dataset.action);
            }
        });
        addEventListener('keydown', function(e){
            var action;
            if(e.key === 'ArrowLeft'){
                action = 'prev';
            } else if(e.key === 'ArrowRight'){
                action = 'next';
            }
            that.showImage(action);
        });

    },
    createImg(img, index){
        return `<img src="${img.src}" alt="${img.alt}" data-img="${index}">`
    }
};
gallery.controller();

var catalog = {
    cart: cart,
    gallery: gallery,
    container: '.products',
    products: [
        {id: 1,
            title: 'Keyboard',
            price: 340,
            images: {
                main: {src: 'https://placehold.it/200x150', alt: 'Some img'},
                all: [
                    {src: 'img/small/img1.jpeg', alt: 'Some img'},
                        {src: 'img/small/img2.png', alt: 'Some img'},
                        {src: 'img/small/img3.jpg', alt: 'Some img'},
                        {src: 'img/small/img4.gif', alt: 'Some img'},
                ]
            }
        },
        {id: 3, title: 'Mouse', price: 140,
            images: {
                main: {src: 'https://placehold.it/200x150', alt: 'Some img'},
                all: [
                    {src: 'img/small/img1.jpeg', alt: 'Some img'},
                    {src: 'img/small/img2.png', alt: 'Some img'},
                    {src: 'img/small/img3.jpg', alt: 'Some img'},
                    {src: 'img/small/img4.gif', alt: 'Some img'},
                ]
            }},
        {id: 2, title: 'Notebook', price: 14000,
            images: {
                main: {src: 'https://placehold.it/200x150', alt: 'Some img'},
                all: [
                    {src: 'img/small/img1.jpeg', alt: 'Some img'},
                    {src: 'img/small/img2.png', alt: 'Some img'},
                    {src: 'img/small/img3.jpg', alt: 'Some img'},
                    {src: 'img/small/img4.gif', alt: 'Some img'},
                ]
            }},
        {id: 4, title: 'Gamepad', price: 2500,
            images: {
                main: {src: 'https://placehold.it/200x150', alt: 'Some img'},
                all: [
                    {src: 'img/small/img1.jpeg', alt: 'Some img'},
                    {src: 'img/small/img2.png', alt: 'Some img'},
                    {src: 'img/small/img3.jpg', alt: 'Some img'},
                    {src: 'img/small/img4.gif', alt: 'Some img'},
                ]
            }},
    ],
    defaultImg: 'https://placehold.it/200x150',
    render(){
        var block = document.querySelector(this.container);
        for (var product of this.products){
            block.insertAdjacentHTML('beforeend', this.getMarkup(product));
        }
    },
    getProduct(id){
        return this.products.find(function (element) {
            return element.id === id
        })
    },
    init(){
        this.render();
        this.setListeners();
    },
    setListeners(){
        var that = this;
        document.querySelector(this.container).addEventListener('click', function(e){
            var prod = that.getProduct(+e.target.dataset.id);
            if(e.target.classList.contains('buy-btn')){
                var prodToCart = Object.assign({quantity: 1}, prod);
                that.cart.addItem(prodToCart);
            } else if (e.target.tagName === 'IMG'){
                var images = Object.assign({}, prod.images);
                that.gallery.bigImage = images.main;
                that.gallery.allImages = images.all;
                gallery.init();
                gallery.toggle();
            }
        })
    },
    getMarkup(product){
        return `<div class="product-item">
                    <img src="${product.images.main.src}" alt="" data-id="${product.id}">
                    <div class="desc">
                        <h3>${product.title}</h3>
                        <p>${product.price} руб</p>
                        <button class="buy-btn" data-id="${product.id}">Купить</button>
                    </div>
                </div>`
    }
};




catalog.init();
cart.init();