<template>

    <div id="app" class="topnav">

        <!-- <b-button @click="showModal = !showModal">Launch demo modal</b-button> -->
        <a @click="showModal = !showModal" style="color:white;">
            + Task
        </a>

        <b-modal 
            v-model="showModal" 
            title="modal title here"
            footer-class="justify-content-between"
            modal-class="vtask"
        >
        <template v-slot:modal-header="{ close }">
        <h4 class="modal-title">Modal Header</h4>
        <div class="modal-close" @click="close()">
            <div></div>
        </div>
        </template>
        <section class="modal-body">
            <slot name="body">
                <form class="review-form" @submit.prevent="onSubmit">

                    <p>
                        <label for="title">Title:</label>
                        <input id="title" v-model="title" placeholder="Title">
                    </p>
                    
                    <p>
                        <label for="due_date">Due Date:</label>  
                        <vuejs-datepicker v-model="due_date" :config="options"></vuejs-datepicker>    
                    </p>
                    
                    <p>
                        <label for="responsible">Responsible:</label>
                        <select id="responsible" v-model.number="responsible">
                            <option>User 1</option>
                            <option>User 2</option>
                            <option>User 3</option>
                            <option>User 4</option>
                            <option>User 5</option>
                        </select>
                    </p>
                    
                    <p>
                        <label for="attach">Attachment:</label>
                        <input id="attach" v-model="attach" placeholder="Attach file">
                    </p>

                    <p>
                        <input type="submit" value="Submit">  
                    </p>

                </form>
            </slot>
        </section>
    </b-modal>
    
    </div>

</template>

<script>
    import { BModal } from 'bootstrap-vue';
    import { store } from "../../assets/js/store.js";
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: 'modal',
        components: {
        Datepicker,
        BModal
        },
        data() {
        return {
            title: null,
            due_date: new Date(),
            options: {
            format: 'DD/MM/YYYY',
            useCurrent: false,
            },
            responsible: null,
            attach: null,
            important: null,
            showModal: false
        }
        },
        methods: {
            close() {
                this.showModal = false;
            },
            onSubmit() {
                let addedTask = {
                title: this.title,
                due_date: this.due_date,
                responsible: this.responsible,
                attach: this.attach
                }

                this.$store.commit('addTask', {addedTask});

                this.title = null;
                this.due_date = null;
                this.responsible = null;
                this.attach = null;
                this.closeModal();
            }
        },
    };
</script>