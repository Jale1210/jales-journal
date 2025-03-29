// import en from '../localization/en'
// import az from '../localization/az'
// import ru from '../localization/ru'

import en from '../localization/en/home/en';
import az from '../localization/az/home/az';
import ru from '../localization/ru/home/ru';
import enSevenNotes from '../localization/en/music/sevenNotes.json';
import azSevenNotes from '../localization/az/music/sevenNotes.json';
import ruSevenNotes from '../localization/ru/music/sevenNotes.json';
import enBluePage from '../localization/en/music/bluePage.json';
import azBluePage from '../localization/az/music/bluePage.json';
import ruBluePage from '../localization/ru/music/bluePage.json';


export default {
    setLoca(state, payload) {
        if (payload == 'en'){
            state.loca = en
            state.music = {
                sevenNotes: enSevenNotes,
                bluePage: enBluePage
            };
        }
        else if (payload == 'az'){
            state.loca = az
            state.music = {
                sevenNotes: azSevenNotes,
                bluePage: azBluePage
            };
        }
        else{
            state.loca = ru
            state.music = {
                sevenNotes: ruSevenNotes,
                bluePage: ruBluePage
            };
        }
    },
    setLoading(state, payload) {
        state.loading = payload;
    },
    setPage(state, payload){
        state.page = payload
    },
    setAuthed(state, payload) {
        state.authed = payload
    },
    setCurrentLang(state, payload) {
        state.currentLang = payload;
    },
}

