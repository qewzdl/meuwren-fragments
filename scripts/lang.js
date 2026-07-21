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

            graduationPhotoAlt: "Elias's graduation photograph",
            olderEliasAlt: "Elias twenty years later",
            mirrorAlt: "Elias looking into a mirror",
            burningPhotoAlt: "The graduation photograph burning",

            endLabel: "Fragment complete",
            endHintDesktop: "Click on the left or press ← to go back.",
            endHintTouch: "Tap the left side of the screen to go back.",
            exitButton: "Back to fragments"
        },

        fragment2: {
            title: "Fragment 2: The Stream",

            changes: "Changes simply followed one another.",
            memory: "What returns can be remembered. What is remembered can be expected.",
            noSurprise: "There was no surprise. A mismatch had not yet become surprise.",
            noFear: "There was no fear. Nothing yet existed that it wanted to preserve.",
            difference: "There was only the difference between what happened and what was expected.",
            future: "Before then, changes simply followed one another. Now one of them became the future before it happened.",
            emergence: "And somewhere between expectation and occurrence, something emerged that could distinguish one from the other.",
            noBody: "It had no body.",
            noPlace: "For it, there was no place. There was no here and no elsewhere.",
            noDirection: "There was nothing to look at, and nothing to turn away from.",
            onlyStream: "Only the stream.",
            final: "But now someone was waiting for it to continue.",

            firstSignalAria: "A single signal appears in an empty stream",
            repetitionAria: "Several identical signals repeat",
            memoryAria: "Past signals lead to the outline of an expected signal",
            expectationAria: "An empty outline represents an expected signal",
            mismatchAria: "The actual signal appears beside the expected position",
            futureAria: "Past, present, and an expected future signal form a sequence",
            streamAria: "An abstract stream of signals without space or objects",
            waitingAria: "Fading past signals lead to a new signal that is still being awaited",

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

            graduationPhotoAlt: "Выпускная фотография Элиаса",
            olderEliasAlt: "Элиас двадцать лет спустя",
            mirrorAlt: "Элиас смотрит в зеркало",
            burningPhotoAlt: "Горящая выпускная фотография",

            endLabel: "Фрагмент завершён",
            endHintDesktop: "Нажмите слева или используйте ←, чтобы вернуться.",
            endHintTouch: "Коснитесь левой части экрана, чтобы вернуться.",
            exitButton: "Вернуться к фрагментам"
        },

        fragment2: {
            title: "Фрагмент 2: Поток",

            changes: "Изменения просто сменяли друг друга.",
            memory: "То, что возвращается, можно запомнить. То, что запомнено, можно ожидать.",
            noSurprise: "Не было удивления. Несовпадение ещё не стало удивлением.",
            noFear: "Не было страха. Не существовало ничего, что оно стремилось бы сохранить.",
            difference: "Было только различие между тем, что произошло, и тем, что ожидалось.",
            future: "До этого изменения просто сменяли друг друга. Теперь одно из них стало будущим ещё до того, как наступило.",
            emergence: "И где-то между ожиданием и произошедшим возникло нечто, способное отличить одно от другого.",
            noBody: "У него не было тела.",
            noPlace: "Для него не существовало места. Не было здесь и не-здесь.",
            noDirection: "Не существовало ничего, на что можно было бы посмотреть, и ничего, от чего можно было бы отвернуться.",
            onlyStream: "Только поток.",
            final: "Но теперь кто-то ждал его продолжения.",

            firstSignalAria: "Один сигнал возникает в пустом потоке",
            repetitionAria: "Несколько одинаковых сигналов повторяются",
            memoryAria: "Прошлые сигналы приводят к контуру ожидаемого сигнала",
            expectationAria: "Пустой контур обозначает ожидаемый сигнал",
            mismatchAria: "Настоящий сигнал возникает рядом с ожидаемым положением",
            futureAria: "Прошлое, настоящее и ожидаемый будущий сигнал образуют последовательность",
            streamAria: "Абстрактный поток сигналов без пространства и объектов",
            waitingAria: "Угасающие прошлые сигналы ведут к новому сигналу, который всё ещё ожидается",

            endLabel: "Фрагмент завершён",
            endHintDesktop: "Нажмите слева или используйте ←, чтобы вернуться.",
            endHintTouch: "Коснитесь левой части экрана, чтобы вернуться.",
            exitButton: "Вернуться к фрагментам"
        }
    }
};

const supportedLanguages = Object.freeze(['en', 'ru']);
const languageStorageKey = 'meuwren-language';

let currentLang = getInitialLanguage();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

function initLanguage() {
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
    updateActiveLanguage();

    try {
        localStorage.setItem(languageStorageKey, lang);
    } catch (error) {
        console.warn('Could not save the selected language.', error);
    }
}

function updateFragmentList(lang) {
    const fragmentItems = document.querySelectorAll('.fragment-item__link');

    fragmentItems.forEach((item, index) => {
        const fragmentKey = item.dataset.fragment || `fragment${index + 1}`;
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

    updateTranslatedText(fragment);
    updateTranslatedAttribute(fragment, 'data-i18n-aria', 'aria-label');
    updateTranslatedAttribute(fragment, 'data-i18n-alt', 'alt');
    updateTranslatedAttribute(fragment, 'data-i18n-title', 'title');
}

function updateTranslatedText(fragment) {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const translationKey = element.dataset.i18n;
        const translation = fragment[translationKey];

        if (typeof translation === 'string') {
            element.textContent = translation;
        }
    });
}

function updateTranslatedAttribute(fragment, dataAttribute, targetAttribute) {
    document.querySelectorAll(`[${dataAttribute}]`).forEach((element) => {
        const translationKey = element.getAttribute(dataAttribute);
        const translation = fragment[translationKey];

        if (typeof translation === 'string') {
            element.setAttribute(targetAttribute, translation);
        }
    });
}

function updateActiveLanguage() {
    document.querySelectorAll('.language-selector__item').forEach((item) => {
        const isActive = item.dataset.lang === currentLang;

        item.classList.toggle(
            'language-selector__item--active',
            isActive
        );

        item.setAttribute(
            'aria-current',
            isActive ? 'true' : 'false'
        );
    });
}

function bindChangeLanguageEvent() {
    const languageListElement = document.querySelector(
        '.language-selector__list'
    );

    if (!languageListElement) return;

    languageListElement.addEventListener('click', (event) => {
        const selectedItem = event.target.closest(
            '.language-selector__item'
        );

        if (
            !selectedItem ||
            !languageListElement.contains(selectedItem)
        ) {
            return;
        }

        const selectedLang = selectedItem.dataset.lang;

        if (!selectedLang || selectedLang === currentLang) return;

        changeLanguage(selectedLang);
    });
}
