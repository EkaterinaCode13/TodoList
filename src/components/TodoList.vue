<template>
    <div v-if="todos.length > 0">
        <!-- <h3>Список дел</h3> -->
        <transition-group name="todo-list">
            <todo-item
                v-for="todo in todos"
                :todo="todo"
                :key="todo.id"
                @remove="$emit('remove', todo)"
            />
        </transition-group>
    </div>
    <h2 v-else style="color: red">Список дел пуст</h2>
</template>

<script>
import TodoItem from '../components/TodoItem.vue';
export default {
    components: { TodoItem },
    props: {
        todos: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped>
h3 {
    color: #125588;
}
.todo-list-item {
    display: inline-block;
    margin-right: 10px;
}
.todo-list-enter-active,
.todo-list-leave-active {
    transition: all 0.4s ease;
}
.todo-list-enter-from,
.todo-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.todo-list-move {
    transition: transform 0.4s ease;
}
</style>
