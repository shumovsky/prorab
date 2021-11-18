const products = document.querySelector('.product__card');

// products.classList.add('')

const renderItems = (data) => {
    data.forEach(({ name, image, description, alt }) => {
        const a = document.createElement('a');

        a.setAttribute('href', '/sewerage.html');
        a.classList.add('product__link');

        a.innerHTML = `
                         <img class="product__card_img" src="${image}" alt=" ${alt} " />
                        <div class="product__card_info">
                            <p class="prodect__card_title">${name}</p>
                            <p class="prodect__card_text">
                                 ${description}
                            </p>
                        </div>
        `
        products.append(a);

        // a.addEventListener('click', (event) => {
        //     event.preventDefault();


        // })

    })
}

fetch('../../db/products.json')
    .then((response) => response.json())
    .then((data) => {
        renderItems(data);
    })
    .catch((error) => {
        console.log(error);
    })