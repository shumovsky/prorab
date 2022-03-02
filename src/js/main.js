const productsCart = document.querySelector('.product__card');

const renderItems = (data) => {
    data.forEach(({ name, image, description, alt, products }) => {
        const a = document.createElement('a');

        a.setAttribute('href', '/products.html');
        a.classList.add('product__link');
        a.dataset.products = products;


        a.innerHTML = `
                         <img class="product__card_img" src="${image}" alt=" ${alt} " />
                        <div class="product__card_info">
                            <p class="product__card_title">${name}</p>
                            <p class="product__card_text">
                                 ${description}
                            </p>
                        </div>
        `
        a.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e);

            const link = a.dataset.products;

            localStorage.setItem('products', link);

            window.location.href = '/products.html';
        })

        productsCart.append(a);
    })
}

fetch(`./db/products.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })