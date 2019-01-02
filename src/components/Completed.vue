<template>
    <div class="completed">
        <h1>Completed Items</h1>
        <div class="completed-list" v-if="hasCompletedItems">
            <ul>
                <li v-for="item in getCompletedItems" :key="item.id">
                    <span>{{ item.name }}</span>
                </li>
            </ul>
        </div>
        <p v-else >No completed items yet, come back later.</p>
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    
    export default {
        name: "Completed",
        computed: {
            ...mapGetters(['getCompletedItems', 'hasCompletedItems'])
        }
    }
</script>

<style lang="scss" scoped>

    .completed {

        h1, p {
            display: flex;
            justify-content: center;
        }

        .completed-list {
            display: flex;
            justify-content: center;
        }
    }
</style>

