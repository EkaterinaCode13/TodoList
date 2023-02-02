<template>
    <form @submit.prevent>
        <h4>Запланировать</h4>
        <my-input
            v-model="todo.title"
            placeholder="Название"
            id="newTodoTitle"
        />
        <h5>Выбрать дату выполнения</h5>
        <div class="cal">
            <vue-cal
                @cell-click="getDate"
                class="vuecal--rounded-theme vuecal--blue-theme"
                xsmall
                hide-view-selector
                :time="false"
                :transitions="false"
                active-view="month"
                :disable-views="['week']"
                style="width: 210px; height: 230px"
                :min-date="minDate"
                :max-date="maxDate"
                locale="ru"
            >
                > >
            </vue-cal>
        </div>

        <my-button
            style="align-self: flex-end; margin-top: 15px"
            @click="createTodo"
        >
            Создать
        </my-button>
    </form>
</template>

<script>
import VueCal from 'vue-cal';
import 'vue-cal/dist/vuecal.css';

export default {
    components: {
        VueCal,
    },
    data() {
        return {
            todo: {
                title: '',
            },
        };
    },
    methods: {
        createTodo() {
            this.$emit('create', this.todo);

            this.todo = {
                title: '',
            };
        },
        getDate(date) {
            this.$emit('cell-click', date.toString().substring(0, 10));
        },
    },
    computed: {
        minDate() {
            return new Date().subtractDays(0);
        },
        maxDate() {
            return new Date().addDays(340);
        },
    },
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}
h5 {
    margin-top: 10px;
    margin-bottom: 10px;
    text-align: center;
}
.cal {
    margin: auto;
}
</style>
