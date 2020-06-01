
import axios from 'axios';

export default {
    setupInterceptors: () => {

        axios.interceptors.request.use(request => {
            document.body.classList.add('loading-indicator');
            return request;
        }, error => {
            console.log(error);
            return Promise.reject(error);
        });

        axios.interceptors.response.use(response => {
            document.body.classList.remove('loading-indicator');
            return response;
        }, error => {
            console.log(error);
            return Promise.reject(error);
        });

    }
};




