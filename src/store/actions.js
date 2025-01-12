export default {
    updateLoca({ commit }, payload) {
        commit('setLoca', payload)
    },
    updateLoading({commit}, payload) {
        commit('setLoading', payload);
    },
    updatePage({commit}, payload) {
        commit('setPage', payload)
    },
    updateAuthed({ commit }, payload) {
        commit('setAuthed', payload)
    },
    updateCurrentLang({ commit }, payload) {
       commit('setCurrentLang', payload)
    },
}
