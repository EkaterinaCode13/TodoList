<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
};
</script>

<style scoped>
.btn {
    align-self: flex-end;
    padding: 10px 10px;
    border: solid 2px #125588;
    background-color: #125588;
    color: white;
    border-radius: 5px;
}
</style>
