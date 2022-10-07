const cardsInfo = document.querySelector('.products__card_info');



const renderItems = (data) => {
    if (localStorage.getItem('products') == 'pump.json') {
        data.forEach(({ name, description, price, image, character, el, power, volt, d, height, consumption }) => {
            const card = document.createElement('div');

            card.classList.add('card__info');

            card.innerHTML = `
                         
                            <div class="card_img">
                            <button class="character_button"></button>
                            <img class="product__card_img" src="${image}" alt="" />
                            </div>
                            <div class="product__card_info">
                                <p class="product__info_title">${description} </p>
                                <p class="product__card_description">${name} </p>
                                <p class="product__card_price"> руб.</p>
                            </div>
                            <div class="character">
                            <p class="character_title">${character}</p>
                                <ul class="character__list">
                                    <li class="character__list_item">${volt}</li>
                                    <li class="character__list_item">${el}</li>
                                    <li class="character__list_item">${power}</li>
                                    <li class="character__list_item">${height}</li>
                                    <li class="character__list_item">${consumption}</li>
                                    <li class="character__list_item">${d}</li>
                                    <li class="character__list_item"></li>
                                </ul>
                            </div>
            `
            cardsInfo.append(card)

        })
    } else {
        data.forEach(({ name, description, price, image }) => {
            const card = document.createElement('div');

            card.classList.add('card__info');

            card.innerHTML = `
                            <div class="card_img">
                            <img class="product__card_img" src="${image}" alt="" />
                            </div>
                            <div class="product__card_info">
                                <p class="product__info_title">${description} </p>
                                <p class="product__card_description">${name} </p>
                                <p class="product__card_price"> руб.</p>
                            </div>
            `

            cardsInfo.append(card)
        })
    }
    const allCharacterList = document.querySelectorAll('.character');
    const allCharacterBtn = document.querySelectorAll('.character_button');


    allCharacterBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('cgange_btn')
            allCharacterList.forEach((el, i) => {
                if (index == i) {
                    el.classList.toggle('active')
                }
            })
        })
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

// const allCharacterList = document.getElementsByClassName('character');
// // for (let prop in allCharacterList) {
// //     console.log(prop);
// // }
// console.log(allCharacterList);