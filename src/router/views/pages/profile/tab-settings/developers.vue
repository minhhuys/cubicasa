<template>
    <div class="developer-settings">
        <h3 class="text-center">
            Get an API key
        </h3>
        <hr>

        <p>
            This API key enables access to following services:
        </p>

        <ul>
            <li>CubiCasa Integrate API</li>
            <li>Exporter API</li>
            <li>Quick Edit</li>
        </ul>

        <p>
            Learn more from our <a target="_blank" href="https://cubi.casa/developers">developers page.</a> 
        </p>

        <div class="warning-message">
            <p class="mb-0">
                <b>Keep your API key safe!</b> Practice caution whenever sharing this API key.
            </p>
        </div>

        <div class="api-key d-flex align-items-center mt-3">
            <div class="label text-center ">
              API key
            </div>
            <input ref="inputApiKey" type="text" class="copy-input form-control" value="0644e392-4fc5-43c4-82f3-cfa5ce8c3e" readonly>
            <span id="copy-api-key" class="button text-center" @click="copy">
              <i class="uil uil-copy"></i>
              Copy
            </span>
        </div>

        <!-- <b-toast :visible="visible" static>
            <p class="text-center mb-0">
                Copied to clipboard
            </p>   
        </b-toast> -->

        <b-alert variant="success" :show="visible" dismissible
            >Copied to clipboard!</b-alert
        >
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false
        }
    },

    mounted() {
        console.log('mounted Developers')
    },

    methods: {
        copy() {
            this.$refs.inputApiKey.select()
            document.execCommand('copy')

            this.visible = true

            setTimeout(() => {
                this.visible = false
            }, 3000)
        }
    }
}
</script>

<style lang="scss">
.developer-settings {
    .warning-message {
        background-color: #ffedde;
        color: #f2711c;
        box-shadow: 0 0 0 1px #f2711c inset, 0 0 0 0 transparent;
        border-radius: 4px;
        
        p {
            padding: 1em 1.5em
        }
    }

    .api-key {
        width: 100%;

        .label,
        #copy-api-key {
            width: 15%;
        }

        .label {
            background: #e8e8e8;
            color: rgba(0,0,0,.6);
            font-weight: 700;
            line-height: 39px;
            height: 39px;
            border-top-left-radius: 4px;
            border-bottom-left-radius: 4px;
        }

        #copy-api-key {
            background-color: #569789;
            background-image: linear-gradient(
            60deg
            , #1d4357, #569789);
            cursor: pointer;
            color: white;
            font-weight: 700;
            height: 39px;
            line-height: 39px;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }

        input {
            width: 70%;
            border-radius: 0;
        }
    }
}
</style>