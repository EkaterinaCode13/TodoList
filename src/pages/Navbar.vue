<template>
    <div class="navbar">
        <div class="logo" @click="$router.push('/todolist')">Твой планер</div>
        <div class="navbar-btns">
            <a @click="$router.push('/todolist/todos')">Список дел</a>
            <a
                style="margin-left: 15px"
                @click="$router.push('/todolist/about')"
                >Описание</a
            >
        </div>
    </div>
</template>

<script></script>

<style>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    height: 50px;
    background-color: #125588;
    box-shadow: 2px 2px 4px gray;
    color: #f2faff;
}
.logo {
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
}
.navbar-btns {
    font-size: 15px;
    font-weight: lighter;
    text-decoration: underline;
    cursor: pointer;
}
</style>
