<template>
    <div class="style-settings">
        <h3 class="text-center">
            Floor plan language and logo
        </h3>
        <hr>

        <span class="style-description">
            Style options will be applied to all new floor plans in your account.
        </span>

        <div class="form-group mt-3">
            <label for="language" class="mr-1">
                Language
            </label>
            
            <span id="language-tooltip">
                <b-tooltip target="language-tooltip">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nihil necessitatibus sapiente obcaecati dolores ipsa, quisquam dolorem explicabo quas libero aperiam omnis illum fuga! Modi laborum sapiente tempora culpa corporis.</b-tooltip>
                <i class="uil uil-question-circle"></i>
            </span>

            <multiselect
                v-model="language"
                :options="form.languages"
                :multiple="false"
                placeholder="Select language"
                >
            </multiselect>
        </div>

        <div class="form-group">
            <label for="units">
                Units
            </label>
            <multiselect
                v-model="units"
                :options="form.units"
                :multiple="false"
                placeholder="Select Units"
                >
            </multiselect>
        </div>

        <div class="form-group">
            <label for="logo">
                Logo
            </label>
            <div>
                <div class="placeholder-logo">
                    <img v-if="imgSrc" :src="imgSrc" alt="" >
                    <img v-else src="https://4197r62cmrjs32n9dndpi2o1-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/square-placeholder.jpg" alt="">

                    <b-spinner
                        v-if="loading"
                        label="Loading..."
                        variant="info"
                        class="image-loading"
                    ></b-spinner>

                    <div v-if="imgSrc" @click="viewImage">
                        <feather type="eye" class="icon-lg icon-dual"></feather>
                    </div>
                </div>
                <div class="mt-3">
                    <button v-if="imgSrc" class="btn btn-soft-danger width-md mr-2" @click="handleDelete">
                        <i class="uil uil-trash"></i>
                        Clear
                    </button>
                    <button 
                        class="btn width-md"
                        :disabled="loading" 
                        :class="{ 
                            'btn-soft-secondary': !imgSrc, 
                            'btn-soft-success': imgSrc }"
                        @click="!imgSrc ? handleUpload() : handleSubmit()">
                        <div v-if="!imgSrc">
                            <i class="uil uil-plus"></i>
                            Add logo
                        </div>
                        <div v-else>
                            <i class="uil uil-check"></i>
                            Submit
                        </div>
                    </button>
                </div>
                
                <input v-show="false" ref="input" type="file" accept='image/*' @change="onChange" />
            </div>
        </div>

        <h3 class="text-center">
            Floor plan theme
        </h3>
        <hr>

        <p>
            To understand each color option, please refer to <a href="https://www.cubi.casa/support/floor-plans/floor-plan-themes/" target="_blank">our support article</a>. Color options do not work for custom room labels.
        </p>


        <div class="row">
            <div class="form-group col-xs-12 col-md-6">
                <label for="wall-color">
                    Wall color
                </label>
                <div class="d-flex">
                    <v-swatches 
                        v-model="form.wall_color" 
                        fallback-ok-text="Select"
                        show-fallback
                        show-border
                        swatch-size="39"
                        :trigger-style="triggerColorStyle"
                    ></v-swatches>
                    <input 
                        v-model="form.wall_color"
                        name="wall-color"
                        class="form-control" 
                        readonly
                    />
                </div>
                
            </div>
            <div class="form-group col-xs-12 col-md-6">
                <label for="floor-color">
                    Floor color
                </label>
                <div class="d-flex">
                    <v-swatches 
                        v-model="form.floor_color" 
                        fallback-ok-text="Select"
                        show-fallback
                        show-border
                        swatch-size="39"
                        :trigger-style="triggerColorStyle"
                    ></v-swatches>
                    <input 
                        v-model="form.floor_color"
                        name="floor-color"
                        class="form-control" 
                        readonly
                    />
                </div>
                
            </div>
            <div class="form-group col-xs-12 col-md-6">
                <label for="bedroom-color">
                    Bedroom color
                </label>
                <div class="d-flex">
                    <v-swatches 
                        v-model="form.bedroom_color" 
                        fallback-ok-text="Select"
                        show-fallback
                        show-border
                        swatch-size="39"
                        :trigger-style="triggerColorStyle"
                    ></v-swatches>
                    <input 
                        v-model="form.bedroom_color"
                        name="bedroom-color"
                        class="form-control" 
                        readonly
                    />
                </div>
            </div>
            <div class="form-group col-xs-12 col-md-6">
                <label for="wetspace-color">
                    Wet space color
                </label>
                <div class="d-flex">
                    <v-swatches 
                        v-model="form.wetspace_color" 
                        fallback-ok-text="Select"
                        show-fallback
                        show-border
                        swatch-size="39"
                        :trigger-style="triggerColorStyle"
                    ></v-swatches>
                    <input 
                        v-model="form.wetspace_color"
                        name="wetspace-color"
                        class="form-control" 
                        readonly
                    />
                </div>
            </div>
        </div>

        <div class="form-group">
            <label for="resolution">
                Resolution
            </label>
            <multiselect
                v-model="form.resolutions[0]"
                :options="form.resolutions"
                placeholder="Select resolution"
                >
            </multiselect>
        </div>

        <div class="form-group">
            <label for="door-degree">
                Door swing degree
            </label>
            <input
                v-model="form.door_degree"
                name="door-degree"
                class="form-control"
                type="number"
                placeholder="Enter door degree"
            />
        </div>
 
        <div class="form-group">
            <b-form-checkbox 
                v-model="form.checkedBox1"
                class="mb-2 font-16"
            >
                Measurement Arrow
            </b-form-checkbox>
            <b-form-checkbox 
                v-model="form.checkedBox2"
                class="mb-2 font-16"
            >
               No fill fixed furniture
            </b-form-checkbox>
            <b-form-checkbox 
                v-model="form.checkedBox3"
                class="mb-2 font-16"
            >
                Add estimated total area element to the floor plan.
               <span id="estimated-tooltip">
                    <b-tooltip target="estimated-tooltip" placement="right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nihil necessitatibus sapiente obcaecati dolores ipsa, quisquam dolorem explicabo quas libero aperiam omnis illum fuga! Modi laborum sapiente tempora culpa corporis.</b-tooltip>
                    <i class="uil uil-info-circle"></i>
                </span>
            </b-form-checkbox>
            <b-form-checkbox 
                v-model="form.checkedBox4"
            >
                Add compass to the floor plan.
                <span id="compass-tooltip">
                    <b-tooltip target="compass-tooltip" placement="right">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nihil necessitatibus sapiente obcaecati dolores ipsa, quisquam dolorem explicabo quas libero aperiam omnis illum fuga! Modi laborum sapiente tempora culpa corporis.</b-tooltip>
                    <i class="uil uil-info-circle"></i>
                </span>
				<b-badge pill variant="warning" class="ml-2">Experimental</b-badge>

            </b-form-checkbox>
        </div>

        <div class="form-group">
            <label for="disclaimer">
                Disclaimer Text (Leave empty for default, maximum 85 characters)
            </label>
            <p>
                Please note, that CubiCasa shall take no responsibility for the disclaimers or changes you make to the floorplan.
            </p>

            <input
                v-model="form.disclaimer"
                type="text"
                name="disclaimer"
                class="form-control"
                :class="{
                    'is-invalid': submitted && $v.form.disclaimer.$error,
                }"
                
                placeholder="SIZES AND DIMENSIONS ARE APPROXIMATE. ACTUAL MAY VARY."
            />
            <div
                v-if="submitted && $v.form.disclaimer.$error"
                class="invalid-feedback"
                >
                <span v-if="!$v.form.disclaimer.maxLength"
                    >This value is too long. It should have 85 characters or
                    fewer.</span
                >
            </div>
        </div>

        <div class="d-flex justify-content-center mt-5">
            <div class="form-group text-left m-b-0 mr-2">
                <button class="btn btn-light width-sm">Undo</button>
            </div>
            <div class="form-group text-left m-b-0" @click="handleSubmitForm">
                <button class="btn btn-main width-lg" type="submit">Save settings</button>
            </div>
        </div>
        
        <b-modal
			v-model="visible"
			hide-footer
            centered
            title="Preview image"
            body-class="view-image-modal"
		>
			<img :src="imgSrc" alt="">
		</b-modal>
    </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import UploadImage from "../../../../../mixins/upload-image"
import VSwatches from 'vue-swatches'
import 'vue-swatches/dist/vue-swatches.css'

import {
  maxLength,
} from 'vuelidate/lib/validators'

export default {
    components: {
        Multiselect,
        VSwatches
    },

    mixins: [UploadImage],

    data() {
        return {
            form: {
                languages: [
                    'English',
                    'English with primary denotation',
                    'Finnish'
                ],
                units: [
                    'Metric',
                    'Imperial',
                    'Both'
                ],
                wall_color: '#777777',
                floor_color: '#ffffff',
                bedroom_color: '#eaeaea',
                wetspace_color: '#ffffff',
                resolutions: [
                    '4:3 – 4000x3000px (high resolution)',
                    '4:3 – 2000x1500px (web optimized)',
                    '3:2 – 4000x2667px (high resolution)',
                    '3:2 – 2000x1333px (web optimized)'
                ],
                door_degree: 40,
                checkedBox1: true,
                checkedBox2: false,
                checkedBox3: false,
                checkedBox4: true,
                disclaimer: ''
            },

            triggerColorStyle: {
                width: '39px', 
                height: '39px', 
                borderTopRightRadius: '0',
                borderBottomRightRadius: '0',
                borderTop: '1px solid #eaeaea',
                borderLeft: '1px solid #eaeaea',
                borderBottom: '1px solid #eaeaea'
            },
            
            language: 'Finnish',
            units: 'Metric',
            imgSrc: null,

            loading: false,
            visible: false,
            submitted: false,

        }
    },

    validations: {
        form: {
            disclaimer: { maxLength: maxLength(85) },
        } 
    },

    mounted() {
        console.log('mounted Styling')
    },

    methods: {
        handleUpload() {
            this.$refs.input.click()
        },

        handleDelete() {
            this.imgSrc = null
        },

        handleSubmit() {
            console.log('submit')
        },

        handleSubmitForm() {
            this.submitted = true

            // stop here if form is invalid
            if(this.$v.$invalid) return this.$v.$touch()
        },

        viewImage() {
            this.visible = true
        },

        onChange(data) {
            this.loading = true
            const file = data.target.files[0];
            if(file) {
                this.$_uploadImage_readImage(file).then(baseFile => {
                    this.imgSrc = baseFile;
                    this.loading = false
                }); 
            }
        }
    }
}
</script>

<style lang="scss">
.style-settings {
    .placeholder-logo {
        width: 110px; 
        height: 110px; 
        position: relative; 
        background: #eaeaea;
        overflow: hidden;

        &:hover {
            div {
                bottom: 0;
            }
        }

        img {
            position: absolute; 
            top: 50%; 
            left: 0; 
            transform: translate(0, -50%); 
            max-width: 100%;
            max-height: 100%;

            
        }

        div {
            width: 110px;
            height: 110px;
            position: absolute;
            background: #111827;
            opacity: .65;
            transition: all 0.3s;
            bottom: -100%;
            cursor: pointer;

            svg {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }

    .custom-checkbox {
        label {
            font-weight: 400;
        }
    }

    .badge-warning {
        color: white;

        &.badge-pill {
            border-radius: 4px;
        }
    }
}

.view-image-modal {
    img {
        text-align: center;
        width: 100%;
    }
}
</style>