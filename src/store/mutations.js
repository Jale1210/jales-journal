import en from '../localization/en'
import az from '../localization/az'
import ru from '../localization/ru'

export default {
    setLoca(state, payload) {
        if (payload == 'en')
            state.loca = en
        else if (payload == 'az')
            state.loca = az
        else
            state.loca = ru
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

