const state = {
    todoItems: [],
    completedItems: [],
    textInput: ""
};

const getters = {
    getToDoItems: (state) => state.todoItems,
    getTextInput: (state) => state.textInput,
    getCompletedItems: (state) => state.completedItems,
    hasCompletedItems: (state) => state.completedItems.length > 0 ? true : false
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

        //Clear input field after adding item
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
        
        //add completed item to completed list
        commit('setItemCompleted', item);
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
    },
    setItemCompleted: (state, item) => {
        state.completedItems.unshift(item);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}