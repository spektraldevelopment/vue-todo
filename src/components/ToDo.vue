<template>
    <div>
        <div>
            <input @input="onTextChange($event.target.value)" @keyup="onInputEnter($event.key)"/>
            <button @click="addItem">Add</button>
        </div>
        <ul>
            <li v-for="item in getToDoItems" :key="item.index">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ToDo',
        computed: {
            ...mapGetters(['getToDoItems'])
        },
        methods: {
            ...mapActions(['addItem', 'onTextChange', 'onInputEnter'])
        }
    }
</script>
