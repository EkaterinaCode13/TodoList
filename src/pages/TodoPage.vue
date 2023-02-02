<template>
    <div class="bodyPage">
        <h2>Список дел</h2>
        <my-input v-model="searchQuery" placeholder="Поиск...." v-focus />
        <div class="app-btns">
            <div>
                <my-button @click="showDialog"> Запланировать </my-button>
                <my-button
                    style="margin-left: 15px"
                    @click="hideCompleted = !hideCompleted"
                >
                    {{ hideCompleted ? 'Все дела' : 'Скрыть сделанные' }}
                </my-button>
            </div>

            <my-select v-model="selectedSort" :options="sortOptions" />
        </div>
        <my-dialog v-show="dialogVisible" @close="closeDialog">
            <todo-form
                @create="createTodo"
                @cell-click="getDate"
                @close="closeDialog"
            />
        </my-dialog>
        <todo-list
            :todos="filteredTodos"
            @remove="removeTodo"
            v-if="!isTodosLoading"
        />
        <div v-else>Идет загрузка...</div>
        <div v-intersection="loadMoreTodos" class="observer"></div>
    </div>
</template>

<script>
import TodoForm from '../components/TodoForm.vue';
import TodoList from '../components/TodoList.vue';
import MyButton from '../components/UI/MyButton.vue';
import axios from 'axios';
import MySelect from '../components/UI/MySelect.vue';
import MyInput from '../components/UI/MyInput.vue';

export default {
    components: {
        MyInput,
        MySelect,
        MyButton,
        TodoList,
        TodoForm,
    },
    data() {
        return {
            todos: [],
            dateNewTodo: undefined,
            dialogVisible: false,
            isTodosLoading: false,
            selectedSort: '',
            searchQuery: '',
            hideCompleted: false,
            completed: false,
            page: 1,
            limit: 5,
            date: Date.now(),
            totalPages: 0,
            sortOptions: [
                { value: 'title', name: 'По названию' },
                { value: 'date', name: 'По дате' },
            ],
        };
    },
    computed: {
        sortedTodos() {
            return [...this.todos].sort((todo1, todo2) =>
                todo1[this.selectedSort]?.localeCompare(
                    todo2[this.selectedSort]
                )
            );
        },
        sortedAndSearchedTodos() {
            return this.sortedTodos.filter((todo) =>
                todo.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
            );
        },
        filteredTodos() {
            return this.hideCompleted
                ? this.sortedAndSearchedTodos.filter((todo) => !todo.completed)
                : this.sortedAndSearchedTodos;
        },
        dateDisplay() {
            return [...this.todos].forEach(
                (todo) => (todo.date = todo.date.toLocaleDateString())
            );
        },
    },
    methods: {
        removeTodo(todo) {
            this.todos = this.todos.filter((p) => p.id !== todo.id);
        },

        showDialog() {
            this.dialogVisible = true;

            setTimeout(function () {
                var newTodoTitle = document.getElementById('newTodoTitle');
                newTodoTitle.focus();
            }, 500);
        },
        closeDialog() {
            this.dialogVisible = false;
        },
        async fetchTodos() {
            try {
                this.istodosLoading = true;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                );

                function getRandomIntInclusive(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                for (var i = 0; i < response.data.length; i++) {
                    var monthRandom = getRandomIntInclusive(0, 11);
                    var dayRandom = getRandomIntInclusive(0, 27);
                    let todoTime = new Date(2022, monthRandom, dayRandom);

                    response.data[i].title =
                        response.data[i].title[0].toUpperCase() +
                        response.data[i].title.slice(1);

                    let todoTimeNow = todoTime.toISOString().substring(0, 10);

                    response.data[i].date = todoTimeNow;
                }

                this.todos = response.data;
            } catch (e) {
                alert('Ошибка');
            } finally {
                this.isTodosLoading = false;
            }
        },
        async loadMoreTodos() {
            try {
                this.page += 1;
                const response = await axios.get(
                    'https://jsonplaceholder.typicode.com/todos',
                    {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        },
                    }
                );
                this.totalPages = Math.ceil(
                    response.headers['x-total-count'] / this.limit
                );

                function getRandomIntInclusive(min, max) {
                    min = Math.ceil(min);
                    max = Math.floor(max);
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }

                for (var i = 0; i < response.data.length; i++) {
                    var monthRandom = getRandomIntInclusive(0, 11);
                    var dayRandom = getRandomIntInclusive(0, 27);
                    let todoTime = new Date(2022, monthRandom, dayRandom);

                    response.data[i].title =
                        response.data[i].title[0].toUpperCase() +
                        response.data[i].title.slice(1);

                    let todoTimeNow = todoTime.toISOString().substring(0, 10);
                    response.data[i].date = todoTimeNow;
                }
                this.todos = [...this.todos, ...response.data];
            } catch (e) {
                alert('Ошибка');
            }
        },
        getDate(date) {
            this.dateNewTodo = date;
        },
        createTodo(todo) {
            todo.id = this.todos.at(-1).id + 1;
            todo.key = todo.id;
            todo.date = this.dateNewTodo;
            this.todos.push(todo);
            this.dialogVisible = false;
        },
    },
    mounted() {
        this.fetchTodos();
    },

    watch: {
        page() {},
    },
};
</script>

<style>
h2 {
    color: #125588;
}
.app-btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.observer {
    height: 30px;
}
</style>
