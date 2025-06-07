import Localize from 'v-localize';

// Function to dynamically load all JSON files from a directory
const loadTranslations = (lang) => {
    return {
        home: require(`./locales/${lang}/home.json`),
        about: require(`./locales/${lang}/about.json`),
        music: {
            sevenNotes: require(`./locales/${lang}/music/sevenNotes.json`),
            bluePage: require(`./locales/${lang}/music/bluePage.json`),
            // music3: require(`./locales/${lang}/music/music3.json`)
        },
        // stories: require(`./locales/${lang}/stories.json`),
        stories: {
            azeriStories : require(`./locales/${lang}/stories/azeriStories.json`),
            greenStick : require(`./locales/${lang}/stories/greenStick.json`),
        },
        contact: require(`./locales/${lang}/contact.json`)
    };
};

let localize = Localize.config({
    default: 'en',
    available: ['en', 'az', 'ru'],
    fallback: '?',
    localizations: {
        en: loadTranslations('en'),
        az: loadTranslations('az'),
        ru: loadTranslations('ru')
    }
});

export default localize;



// import Localize from 'v-localize';
// import az from './az'
// import en from './en'
// import ru from './ru'
//
// let localize = Localize.config({
//     default: 'en',
//     available: ['en', 'az', 'ru'],
//     fallback: '?',
//     localizations: {
//         "en": en,
//         "az": az,
//         "ru": ru,
//     }
// });
//
// export default localize
