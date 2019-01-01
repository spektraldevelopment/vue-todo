<template>
    <div>
        <div>
            <input type="text" />
            <button>Add</button>
        </div>
        <ul>
            <li v-for="item in getToDoItems" :key="item.name">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>

    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'ToDo',
        computed: mapGetters(['getToDoItems'])
    }
</script>
