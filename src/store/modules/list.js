const state = {
    todoItems: [
        { name: 'Sample Item 1' },
        { name: 'Sample Item 2' }
    ],
    textInput: ""
};

const getters = {
    getToDoItems: (state) => state.todoItems,
    getTextInput: (state) => state.textInput
};

const actions = {
    //we pack in as much functionality in actions
    addItem({ commit }) {
        commit('setItem', { name: state.textInput });
    },

    onTextChange({commit}, text) {
        commit('setTextInput', text);
    },
    onInputEnter({commit}, key) {
        if(key === "Enter") {
            commit('setItem', { name: state.textInput });
        }
    }

};

const mutations = {
    setItem: (state, item) => {
        state.todoItems.unshift(item);
    },
    setTextInput: (state, text) => {
        state.textInput = text;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}