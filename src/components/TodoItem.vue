<template>
    <div class="todo">
        <div>
            <!-- <div>{{ todo.id }}</div> -->
            <div :class="{ completed: todo.completed }">
                {{ dateDisplay }}
                &mdash;
                {{ todo.title }}
            </div>
        </div>
        <div class="todo-btns">
            <my-button @click="todo.completed = !todo.completed">
                Готово
            </my-button>
            <my-button style="margin-left: 3px" @click="$emit('remove', todo)">
                Удалить
            </my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true,
        },
    },
    computed: {
        dateDisplay() {
            let date = new Date(this.todo.date);
            return date.toLocaleDateString();
        },
    },
};
</script>

<style scoped>
.todo {
    padding: 15px;
    border: 2px solid #125588;
    border-radius: 10px;
    background-color: #f2faff;
    color: #125588;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.todo-btns {
    display: flex;
}
.completed {
    text-decoration: line-through;
}
</style>
