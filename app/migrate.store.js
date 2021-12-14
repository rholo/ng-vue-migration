const getState = () => ({
    title: "Hello world from Vuex state",
    description: ""
});

const store = new Vuex.Store({
    state: getState(),
    getters: {
        title: state => state.title,
        description: state => state.description 
    },
    mutations: {
        SET_DESCRIPTION(state, payload){
            state.description = payload
        }
    }
});
