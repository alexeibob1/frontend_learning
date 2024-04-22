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
    compound.categories.forEach((cardCategory) => {
        const cardCategoryElement = document.createElement('div');
        cardCategoryElement.classList.add('card-category');
        cardCategoryElement.textContent = categories[cardCategory - 1].name;
        cardCategoriesContainer.appendChild(cardCategoryElement);
    });
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

function filterCompounds(event) {
    const btn = event.target;
    const categoryId = btn.getAttribute('value');
        
    const filteredCompounds = compounds.filter(compound => compound.categories.includes(Number(categoryId)));

    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';

    filteredCompounds.forEach((compound) => {
        card = createCompoundCard(compound);
        cardsSection.appendChild(card);
    });

    markButtonAsSelected(btn);
}

function showHomeCompounds(event) {      
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';
    compounds.forEach((compound) => {
        card = createCompoundCard(compound);
        cardsSection.appendChild(card);
    });

    unmarkCategoriesButtons();
}

window.addEventListener('DOMContentLoaded', () => {
    const navPanel = document.getElementById('nav-categories');
    
    categories.forEach((category) => {
        const btn = document.createElement('button');
        btn.textContent = category.name;
        btn.classList.add('btn');
        btn.classList.add('btn--category');
        btn.setAttribute('value', category.id);

        btn.addEventListener('click', filterCompounds);
        navPanel.appendChild(btn);
    });

    const homeBtn = document.getElementById('btn-home');
    homeBtn.addEventListener('click', showHomeCompounds);

    const cardsSection = document.getElementById('cards-section');
    compounds.forEach((compound) => {
        card = createCompoundCard(compound);
        cardsSection.appendChild(card);
    });
})