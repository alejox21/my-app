<template>
    <div id="task-list">
        <p v-if="!tasks.length">There are no tasks yet.</p>
        <ul>
          <li v-for="task in tasks">
            <p>{{ task.addedTask.title }}</p>
            <p>Due date: {{ task.addedTask.due_date }}</p>
            <p>{{ task.addedTask.responsible }}</p>
          </li>
        </ul>
    </div>
</template>

<script>
    export default {
        computed: {
            tasks(){
                return this.$store.state.tasks //see point number 2 above
            }
        },
        created() {
            console.log(this);
        }
    }
</script>
