const state = {
    todoItems: [
        { name: 'Sample Item 1' },
        { name: 'Sample Item 2' }
    ]
};

const getters = {
    getToDoItems: (state) => state.todoItems
};

const actions = {

};

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations
}