const listOfCompounds = [];
const listOfCategories = [];

function createCompoundCard(compound) {
    const card = document.createElement('div');
    card.classList.add('card-container');

    const cardImg = document.createElement('img');
    cardImg.classList.add('card-image');
    cardImg.src = "img/" + compound.imgPath;
    cardImg.alt = compound.title;
    card.appendChild(cardImg);

    const cardTitle = document.createElement('span');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = compound.title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('card-description');
    cardDescription.textContent = compound.description;
    card.appendChild(cardDescription);

    const cardCategoriesContainer = document.createElement('div');
    cardCategoriesContainer.classList.add('card-categories-container');
    for (const cardCategory of compound.categories) {
        const cardCategoryElement = document.createElement('div');
        cardCategoryElement.classList.add('card-category');
        cardCategoryElement.textContent = listOfCategories[cardCategory - 1].name;
        cardCategoriesContainer.appendChild(cardCategoryElement);
    }
    card.appendChild(cardCategoriesContainer);

    setCardVisibilityObserver(card);

    return card;
}

function setCardVisibilityObserver(card) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-card');
            }
        });
    }, { threshold: 0.5 });

    observer.observe(card);
}

function markButtonAsSelected(btn) {
    unmarkCategoriesButtons();
    btn.classList.add('btn--category-selected');
}

function unmarkCategoriesButtons() {
    const navPanel = document.getElementById('nav-categories');
    const navButtons = navPanel.getElementsByClassName('btn--category');
    for (btn of navButtons) {
        btn.classList.remove('btn--category-selected');
    }
}

fetch('src/data.json')
    .then((response) => response.json())
    .then((data) => {
        listOfCompounds.push(...data.compounds);
        listOfCategories.push(...data.categories);
    })
    .then(() => {
        const navPanel = document.getElementById('nav-categories');
        
        listOfCategories.forEach((category) => {
            const btn = document.createElement('button');
            btn.textContent = category.name;
            btn.classList.add('btn');
            btn.classList.add('btn--category');
            btn.setAttribute('value', category.id);

            btn.addEventListener('click', () => {
                const categoryId = btn.getAttribute('value');
              
                const filteredCompounds = listOfCompounds.filter(compound => compound.categories.includes(Number(categoryId)));
            
                const cardsSection = document.getElementById('cards-section');
                cardsSection.innerHTML = '';
              
                for (const compound of filteredCompounds) {
                    card = createCompoundCard(compound);
                    cardsSection.appendChild(card);
                }

                markButtonAsSelected(btn);
            });
            navPanel.appendChild(btn);
        });

        const homeBtn = document.getElementById('btn-home');
        homeBtn.addEventListener('click', () => {        
            const cardsSection = document.getElementById('cards-section');
            cardsSection.innerHTML = '';
            for (const compound of listOfCompounds) {
                card = createCompoundCard(compound);
                cardsSection.appendChild(card);
            }

            unmarkCategoriesButtons();
        });
    })
    .then(() => {
        const cardsSection = document.getElementById('cards-section');
        for (const compound of listOfCompounds) {
            card = createCompoundCard(compound);
            cardsSection.appendChild(card);
        }
    })
    .catch(error => console.error('Error fetching JSON:', error));