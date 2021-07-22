<template>
    <div class="general-settings">
        <h3 class="text-center">Basic information</h3>
        <hr>

        <div class="form-group">
            <label for="name">
                Name
            </label>
            <input
                v-model="form.name"
                name="username"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                type="text"
                placeholder="Enter name"
            />
            <div
                v-if="submitted && !$v.form.name.required"
                class="invalid-feedback"
            >This value is required.</div>
        </div>

        <div class="form-group">
            <label for="vat">
                VAT ID
                <span class="label-hint">| required for EU based companies</span>
            </label>
            <input
                v-model="form.vat"
                name="vat"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.form.vat.$error }"
                type="text"
                placeholder="Enter VAT"
            />
            <div
                v-if="submitted && !$v.form.vat.required"
                class="invalid-feedback"
            >This value is required.</div>
        </div>

        <div class="form-group">
            <label for="country">
                Country
            </label>
            <div>
                <img 
                    class="mr-3"
                    src="https://www.norden.org/sites/default/files/styles/content_size_800/public/images/Finsk%2520flag106604.jpeg" width="16" height="11" alt="">
                <span>FI</span>
            </div>
        </div>

        <div class="form-group">
            <label for="collaborators">
                Collaborators
            </label>
            <div class="custom-control custom-checkbox">
                <input
                    id="collaborators"
                    type="checkbox"
                    class="custom-control-input"
                />
                <label
                    class="custom-control-label"
                    for="collaborators"
                >
                    Allow collaborators to create orders without drafts
                </label>
            </div>
        </div>

        <div class="form-group">
            <p>
                Delivery emails send to:
            </p>
            <multiselect
                v-model="emailTo"
                :options="form.options"
                :multiple="true"
                placeholder="Select email"
                >
            </multiselect>
        </div>

        <h3 class="text-center mt-5">Current plant</h3>
        <hr>

        <div class="form-group">
            <label for="current-plan">
                Change plan
            </label>
            <multiselect
                v-model="emailTo"
                :options="form.options"
                :multiple="false"
                placeholder="Select plan"
                >
            </multiselect>
        </div>

        <div class="credit-card">
            <div class="card-icon" @click="toggleHidden">
                <feather type="eye" class="icon-xs icon-dual"></feather>
            </div>
            <div class="card-logo-visa">
                <img src="@assets/images/visa.png" width="30" alt="">
            </div>
            <div class="card-description">
                <p class="card-number">
                    <span>{{isHidden ? form.hidden_card_number.slice(0,4) : form.card_number.slice(0,4)}}</span>
                    <span>{{isHidden ? form.hidden_card_number.slice(4,8) : form.card_number.slice(4,8)}}</span>
                    <span>{{isHidden ? form.hidden_card_number.slice(8,12) : form.card_number.slice(8,12)}}</span>
                    <span>{{isHidden ? form.hidden_card_number.slice(12,16) : form.card_number.slice(12,16)}}</span>
                </p>
                <div class="card-info d-flex">
                    <p class="reset-mg card-info-expired">
                        Thru: <span>11/21</span>
                    </p>
                    <p class="reset-mg card-info-cvv">
                        CVV: <span>999</span>
                    </p>
                </div>
                <h3 class="card-name">
                    Nguyen Minh Huy
                </h3>
            </div>
        </div>

        <div class="d-flex mt-4">
            <button class="btn btn-light d-flex mr-2" style="align-items: center">
                <feather type="x" class="icon-xs mr-1 align-middle"></feather>
                <p class="mb-0">Cancel subscription</p>
            </button>

            <button class="btn btn-main d-flex" style="align-items: center">
                <feather type="list" class="icon-xs mr-1 align-middle"></feather>
                <p class="mb-0">View invoices</p>
            </button>
        </div>

        <hr>
        <div class="d-flex justify-content-center mt-5">
            <div class="form-group text-left m-b-0 mr-2">
                <button class="btn btn-light width-sm">Undo</button>
            </div>
            <div class="form-group text-left m-b-0" @click="handleSubmit">
                <button class="btn btn-main width-lg" type="submit">Save settings</button>
            </div>
        </div>

        <h3 class="mt-5 text-center">
            Delete company account
        </h3>
        <hr>
        <div class="form-group text-center m-b-0" @click="handleSubmit">
            <button class="btn btn-outline-danger width-xl" type="submit">Delete</button>
        </div>
    </div>
</template>

<script>
import {
  required
} from 'vuelidate/lib/validators'

import Multiselect from 'vue-multiselect'

export default {
    components: {
        Multiselect
    },

    data() {
        return {
            submitted: false,

            form: {
                name: '',
                vat: '',
                options: [
                    'Alaska',
                    'Hawaii',
                    'California',
                    'Nevada',
                    'Oregon'
                ],
                card_number: '1234567898765432'
            },

            emailTo: null,
            isHidden: true
        }
    },
    created() {
        this.hiddenNumberCard()
    },

    mounted() {
        console.log('mounted General')
    },

    validations: {
        form: {
            name: { required },
            vat: { required }
        },
    },

    methods: {
        handleSubmit(e) {
            this.submitted = true

            // stop here if form is invalid
            this.$v.$touch()
        },

        toggleHidden() {
            this.isHidden = !this.isHidden
        },

        hiddenNumberCard() {
            let hidden = new Array(this.form.card_number.length - 3).join('*') + this.form.card_number.substr(this.form.card_number.length - 4, 4)
            this.form.hidden_card_number = hidden
        }
    }

    
}
</script>

<style lang="scss" scoped>
.credit-card {
    border-radius: 10px;
    width: 300px;
    height: 200px;
    position: relative;
    border: 1px solid #d4d4d5;

    .card-icon {
        position: absolute;
        top: -8px;
        left: -8px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        background: white;
    }

    .card-logo {
        position: absolute;
        top: 24px;
        right: 24px;
    }

    .card-logo-visa {
        position: absolute;
        bottom: 24px;
        right: 24px;
    }

    .card-description {
        position: absolute;
        left: 24px;
        bottom: 5%;
        color: rgba(0,0,0,.68);


        .card-name {
            font-size: 18px;
            font-weight: 700;
        }

        .card-number {
            font-size: 14px;
            font-weight: 600;

            span:not(:last-child) {
                margin-right: 24px;
            }
        }

        .card-info {
            font-size: 13px;
            font-weight: 600;
            justify-content: flex-start;

            > p {
                margin-right: 30px;
            }
        }
    }
}
</style>