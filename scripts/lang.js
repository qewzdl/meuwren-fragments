const fragments = {
    en: {
        fragment1: {
            title: "Fragment 1: Self-Deception",

            parents: "His parents told him it was the right path.",
            patience: "For twenty years, Elias called it patience.",
            responsibility: "Sometimes – responsibility.",
            fear: "But never – fear.",
            oneDay: "Every day, he convinced himself that one day he would finally start living.",
            rightMoment: "When the right moment came.",
            mirrorBeginning: "One morning, he looked into the mirror...",
            reflection: "...and saw the man he had never wanted to become.",
            whyLie: "– Why lie to yourself?",
            finalQuestion: "– Is there anything worse than deceiving yourself?",
            endLabel: "Fragment complete",
            endHintDesktop: "Click on the left or press ← to go back.",
            endHintTouch: "Tap the left side of the screen to go back.",
            exitButton: "Back to fragments"
        }
    },

    ru: {
        fragment1: {
            title: "Фрагмент 1: Самообман",

            parents: "Родители говорили, что это правильный путь.",
            patience: "Двадцать лет Элиас называл это терпением.",
            responsibility: "Иногда – ответственностью.",
            fear: "Но никогда – страхом.",
            oneDay: "Каждый день он убеждал себя, что однажды начнёт жить.",
            rightMoment: "Когда наступит подходящий момент.",
            mirrorBeginning: "Однажды утром он посмотрел в зеркало...",
            reflection: "...и увидел человека, которым никогда не хотел стать.",
            whyLie: "– Зачем обманывать себя?",
            finalQuestion: "– Разве есть что-то хуже, чем быть обманутым самим собой?",
            endLabel: "Фрагмент завершён",
            endHintDesktop: "Нажмите слева или используйте ←, чтобы вернуться.",
            endHintTouch: "Коснитесь левой части экрана, чтобы вернуться.",
            exitButton: "Вернуться к фрагментам"
        }
    }
};

const supportedLanguages = ['en', 'ru'];
const languageStorageKey = 'meuwren-language';

let currentLang = getInitialLanguage();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    changeLanguage(currentLang);
    bindChangeLanguageEvent();
}

function getInitialLanguage() {
    try {
        const savedLanguage = localStorage.getItem(languageStorageKey);

        if (supportedLanguages.includes(savedLanguage)) {
            return savedLanguage;
        }
    } catch (error) {
        console.warn('Could not read the saved language.', error);
    }

    const browserLanguage = navigator.language
        .toLowerCase()
        .split('-')[0];

    return supportedLanguages.includes(browserLanguage)
        ? browserLanguage
        : 'en';
}

function changeLanguage(lang) {
    if (!supportedLanguages.includes(lang)) return;

    currentLang = lang;
    document.documentElement.lang = lang;

    updateFragmentList(lang);
    updateCurrentFragment(lang);

    try {
        localStorage.setItem(languageStorageKey, lang);
    } catch (error) {
        console.warn('Could not save the selected language.', error);
    }
}

function updateFragmentList(lang) {
    const fragmentItems = document.querySelectorAll('.fragment-item__link');

    fragmentItems.forEach((item, index) => {
        const fragmentKey = `fragment${index + 1}`;
        const fragment = fragments[lang]?.[fragmentKey];

        if (fragment?.title) {
            item.textContent = fragment.title;
        }
    });
}

function updateCurrentFragment(lang) {
    const fragmentKey = document.body.dataset.fragment;

    if (!fragmentKey) return;

    const fragment = fragments[lang]?.[fragmentKey];

    if (!fragment) return;

    if (fragment.title) {
        document.title = fragment.title;
    }

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translationKey = element.dataset.i18n;
        const translation = fragment[translationKey];

        if (typeof translation === 'string') {
            element.textContent = translation;
        }
    });
}

function bindChangeLanguageEvent() {
    const languageListElement = document.querySelector('.language-selector__list');

    if (!languageListElement) return;

    const languageItems = languageListElement.querySelectorAll(
        '.language-selector__item'
    );

    function updateActiveLanguage() {
        languageItems.forEach((item) => {
            item.classList.toggle(
                'language-selector__item--active',
                item.dataset.lang === currentLang
            );
        });
    }

    updateActiveLanguage();

    languageListElement.addEventListener('click', (event) => {
        const selectedItem = event.target.closest('.language-selector__item');

        if (!selectedItem || !languageListElement.contains(selectedItem)) return;

        const selectedLang = selectedItem.dataset.lang;

        if (!selectedLang || selectedLang === currentLang) return;

        changeLanguage(selectedLang);
        updateActiveLanguage();
    });
}
