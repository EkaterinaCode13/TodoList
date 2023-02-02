<template>
    <div class="dialog" @click="hideDialog">
        <div @click.stop class="dialog-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    methods: {
        hideDialog() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.dialog {
    display: flex;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
}
.dialog-content {
    margin: auto;
    padding: 20px;
    background: white;
    border-radius: 12px;
    color: #125588;
    min-height: 50px;
    min-width: 300px;
}
</style>
