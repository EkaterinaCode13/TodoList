<template>
    <div class="navbar">
        <div @click="$router.push('/')">Твой планер</div>
        <div class="navbar-btns">
            <a @click="$router.push('/todos')">Список дел</a>
            <a style="margin-left: 15px" @click="$router.push('/about')"
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
    font-size: 25px;
    font-weight: 600;
}
.navbar-btns {
    font-size: 15px;
    font-weight: lighter;
    text-decoration: underline;
}
</style>
