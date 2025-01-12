import axios from 'axios';
import store from '@/store/index'

// import {SURVEY} from './Survey.js'

// export default {
//     ...SURVEY
// }
axios.interceptors.request.use(
    config => {
        const language = localStorage.getItem('language');
        config.headers = Object.assign({
            'Accept-Language': language,
        }, config.headers);
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => response, (error) => {
    // console.log(error.response.data)
    // if (error.response.status == 401) {
    //     // router.push("/service");
    // }

    // localStorage.setItem('authed', true)
    // store.dispatch('updateAuthed', true)


    return Promise.reject(error);
});
