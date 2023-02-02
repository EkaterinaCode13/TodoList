<template>
    <select @change="changeOption">
        <option value="">Сортировать по...</option>
        <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        },
    },
    methods: {
        changeOption(event) {
            this.$emit('update:modelValue', event.target.value);
        },
    },
};
</script>

<style scoped>
select {
    margin-right: 25px;
    color: white;
    border-color: #125588;
    background-color: #125588;
    border-radius: 3px;
}
</style>
