import Axios from 'axios';

const singlePost = {
    namespaced: true,
    state: {
        query: "",
    },

    actions: {
        grabTest({state}){
            Axios.get('https://api.cfwidget.com/mc-mods/minecraft/mantle')
                .then((response) => {
                    state.query = response.data;
                });
        }
    }
}

export default singlePost;