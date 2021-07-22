<template>
    <b-modal
        v-model="visible"
        hide-footer
        centered
        title="Add new office"
        content-class="modal-custom-mobile"
    >   
        <div class="form-group">
            <label for="office-name">
                Name
            </label>
            <input
                v-model="officeName"
                name="office-name"
                class="form-control"
                type="text"
                placeholder="Enter office's name"
            />
        </div>

        <div class="text-right">
            <button class="btn btn-success width-sm" @click="handleSubmit">
                Add
            </button>
        </div>
        
        
    </b-modal>
</template>

<script>
export default {
    props: {
        office: {
            type: Object,
            default: (() => {})
        }
    },

    data() {
        return {
            visible: false,
            officeName: null
        }
    },

    watch: {
        office(newVal, oldVal) {
            if(newVal !== oldVal && newVal) {
                this.officeName = newVal.name
            }
        }
    },
    
    methods: {
        handleSubmit() {
            if(this.office && (this.office.name || this.office._id)) {
                console.log('edit')
            } else {
                console.log('create')
            }
        }
    }
}
</script>

<style>

</style>