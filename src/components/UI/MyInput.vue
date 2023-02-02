<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
        :id="id"
    />
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number],
        id: {
            type: String,
        },
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style scoped>
.input {
    margin-top: 15px;
    width: 100%;
    padding: 10px 15px;
    border: solid 2px #125588;
    background-color: white;
    border-radius: 3px;
}
</style>
