const cardsInfo = document.querySelector('.products__card_info');


const renderItems = (data) => {
    data.forEach(({ name, description, price, image }) => {
        console.log(data);
        const card = document.createElement('div');

        card.classList.add('card__info');

        card.innerHTML = `
                        <div class="card_img">
                        <img class="product__card_img" src="${image}" alt="" />
                        </div>
                        <div class="product__card_info">
                            <p class="product__info_title">${description} </p>
                            <p class="product__card_description">${name} </p>
                            <p class="product__card_price">${price} руб.</p>
                        </div>
        `

        cardsInfo.append(card)
    })
}

if (localStorage.getItem('products')) {
    fetch(`db/${localStorage.getItem('products')}`)
        .then((response) => response.json())
        .then((data) => {
            renderItems(data);
        })
        .catch((error) => {
            console.log(error);
        })
}