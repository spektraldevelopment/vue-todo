<template>
    <header class="header">
        <h1><img src="../assets/logo.png"/>Vue ToDo</h1>
        <ul>
            <li><router-link to="/">To Do</router-link></li>
            <li><router-link to="/completed">Completed</router-link></li>
        </ul>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>

    $header-background: #cecece;

    .header {
        display:flex;
        justify-content: space-between;
        align-items: center;
        margin: 0;
        padding: 0;
        width: 100%;
        height: 60px;
        background-color: $header-background;

        img {
            float: left;
            width: 10%;
            height: 10%;
            margin-right: 10px;
            min-width: 30px;
            min-height: 30px;
        }

        h1 {
            font-size: 20px;
            margin: 0 10px;
        }

        ul {
            display:flex;
            justify-content: flex-end;
            list-style: none;
            display: inline-flex;

            li {
                margin: 0 10px;
                white-space: nowrap;
            }
        }
    }
</style>

