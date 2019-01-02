<template>
    <div class="todo">
        <div class="todo-input">
            <input :value="getTextInput" @input="onTextChange($event.target.value)" @keyup="onInputEnter($event.key)"/>
            <button @click="addItem">Add</button>
        </div>
        <div class="todo-list">
            <ul>
                <li v-for="item in getToDoItems" :key="item.id">
                    <span>{{ item.name }}</span>
                    <button @click="onItemComplete(item)">Done</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ToDo',
        computed: {
            ...mapGetters(['getToDoItems', 'getTextInput'])
        },
        methods: {
            ...mapActions(['addItem', 'onTextChange', 'onInputEnter', 'onItemComplete'])
        }
    }
</script>

<style lang="scss" scoped>
    .todo {
        width: 100%;
        
        .todo-input {
            display: flex;
            justify-content: center;
            margin: 10px;
            
            input {
                font-size: 24px;
            }
            
            button {
                margin: 10px;
            }
        }

        .todo-list {
           
            display: flex;
            justify-content: center;
            margin: 10px;

            ul {
                margin: 0;
            }

            button {
                margin: 10px;
            }
        }
    }
</style>

