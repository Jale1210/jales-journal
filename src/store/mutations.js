// import en from '../localization/en'
// import az from '../localization/az'
// import ru from '../localization/ru'

import en from '../localization/en/home/en';
import az from '../localization/az/home/az';
import ru from '../localization/ru/home/ru';
import enMusic from '../localization/en/music/sevenNotes.json';
import azMusic from '../localization/az/music/sevenNotes.json';
import ruMusic from '../localization/ru/music/sevenNotes.json';

export default {
    setLoca(state, payload) {
        if (payload == 'en'){
            state.loca = en
        state.music = enMusic;
        }
        else if (payload == 'az'){
            state.loca = az
            state.music = azMusic;
        }
        else{
            state.loca = ru
            state.music = ruMusic;
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

