const search = () => {
    const cardsInfo = document.querySelector('.products__card_info');


    function renderItems(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == character) {
                arr.forEach(({ name, description, price, image, character, el, power, volt, d, height, consumption }) => {
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
                arr.forEach(({ name, description, price, image }) => {
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

    }
}



const getData = (value) => {
    fetch('/db/all.json')
        .then((res) => res.json())
        .then((data) => {
            let arr = data.filter(item =>
                item.description.toLowerCase().includes(value.toLowerCase())
            )

            localStorage.setItem('prod', JSON.stringify(arr))

            if (window.location.pathname !== '/products.html') {
                window.location.href = '/products.html';
                // renderItems(arr)

            } else {
                cardsInfo.innerHTML = '';
                renderItems(arr)

            }
            renderItems(JSON.parse(localStorage.prod))
        })

}

const input = document.querySelector('.form-control > input');
const searchBtn = document.querySelector('.form-control > button');

searchBtn.addEventListener('click', () => {
    getData(input.value);
    if (localStorage.getItem('prod') != null) {
        renderItems(JSON.parse(localStorage.prod));
    }
})

input.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        getData(input.value);
        if (localStorage.getItem('prod') != null) {
            renderItems(JSON.parse(localStorage.prod));
        }
    }
})


if (localStorage.getItem('prod') != null) {
    renderItems(JSON.parse(localStorage.prod));
}

for (let key in localStorage) {
    if (key == 'prod') {
        localStorage.removeItem('prod');
    }
}



// if (localStorage.getItem('prod') == null) {
//     renderItems = false
// }
search()