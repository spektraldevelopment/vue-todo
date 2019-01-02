const state = {
    todoItems: [],
    textInput: ""
};

const getters = {
    getToDoItems: (state) => state.todoItems,
    getTextInput: (state) => state.textInput
};

const actions = {
    //we pack in as much functionality in actions
    addItem({
        commit
    }) {
        commit('setItem', {
            name: state.textInput,
            id: Math.random().toString(36).substr(2, 9)
        });
        commit('setTextInput', '');
    },

    onTextChange({
        commit
    }, text) {
        commit('setTextInput', text);
    },

    onInputEnter({
        dispatch
    }, key) {
        if (key === "Enter") {
            dispatch('addItem');
        }
    },
    onItemComplete({
        commit
    }, item) {

        const updatedItemsArr = state.todoItems.filter((i) => i.id !== item.id);
        commit('removeItem', updatedItemsArr);
    }

};

const mutations = {
    setItem: (state, item) => {
        state.todoItems.unshift(item);
    },
    setTextInput: (state, text) => {
        state.textInput = text;
    },
    removeItem: (state, items) => {
        state.todoItems = items;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}