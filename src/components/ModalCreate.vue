<template lang="pug">
    #modal_create_workspace(class="modal" tabindex="-1" role="dialog")
        .modal-dialog(role="document")
            .modal-content
                .modal-header
                    h5.modal-title {{ title }}
                    button.close(type="button" data-dismiss="modal" aria-label="Close")
                .modal-body
                    input(class="form-control" type="text" v-model="name" placeholder="명칭")
                .modal-footer
                    button(type="button" class="btn btn-secondary" data-dismiss="modal") Close
                    button(type="button" class="btn btn-primary" @click="add") add
</template>

<script>
    export default {
        name: "ModalCreate",
        props: {
            title: ''
        },
        data() {
            return {
                name: ''
            }
        },
        methods: {
            add() {
                this.$emit('add', this.name)
                $('#modal_create_workspace').modal('hide')
                this.name = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    #modal_create_workspace {

    }
</style>