<template>
    <div class="settings">
        <img class="settings__icon" @click="show('vue-modal')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/WMF-Agora-Settings_BCBCBC.svg/1024px-WMF-Agora-Settings_BCBCBC.svg.png" alt="">
        <modal name="vue-modal">
            <div class="modal">
                <div class="modal__header">
                    <h5 class="modal__header__title">Settings</h5>
                    <button class="modal__header__close" @click="hide()">x</button>
                </div>

                <div class="modal__body">
                    <div class="modal__body__row">
                        <div class="modal__body__fieldset">
                            <span class="modal__body__fieldset__span">pomodoro</span>
                            <input class="modal__body__fieldset__input" v-model="newPomodoroTime" type="number">
                        </div>
                        <div class="modal__body__fieldset">
                            <span class="modal__body__fieldset__span">short break</span>
                            <input class="modal__body__fieldset__input" v-model="newShortBreakTime" type="number">
                        </div>
                        <div class="modal__body__fieldset">
                            <span class="modal__body__fieldset__span">long break</span>
                            <input class="modal__body__fieldset__input" v-model="newLongBreakTime" type="number">
                        </div>
                    </div>
                </div>
                <button class="modal__submit" @click="setSettings()">Apply</button>
            </div>
        </modal>
    </div>
</template>

<script>
export default {
    name: "Settings",
    data () {
        return {
            newPomodoroTime: 25,
            newShortBreakTime: 5,
            newLongBreakTime: 10
        }
    },

    methods: {
        show () {
            this.$modal.show('vue-modal');
        },
        hide () {
            this.$modal.hide('vue-modal');
        },
        setSettings () {
            this.$store.dispatch("setSettings", {
                newPomodoroTime: parseInt(this.newPomodoroTime),
                newShortBreakTime: parseInt(this.newShortBreakTime),
                newLongBreakTime: parseInt(this.newLongBreakTime)
            })
        }
    },
    mounted () {
        // this.$modal.show('vue-modal')
    }
}
</script>

<style scoped>
    .settings__icon {
        width: 50px;
        height: 50px;
        cursor: pointer;
        color: snow;
    }

    .modal {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        justify-content: space-around;
        padding: 0 20px;
    }

    .modal__header {
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        width: 100%;
        border-bottom: 1px solid rgb(179, 179, 179);
        padding-bottom: 10px;
    }

    .modal__header__title {
        font-size: 22px;
    }

    .modal__header__close {
        background: none;
        border: none;
        color: grey;
        cursor: pointer;
    }

    .modal__body__row {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal__body__fieldset__span {
        color: grey;
        font-size: 12px;
        line-height: 2;
    }

    .modal__body__fieldset__input {
        background-color: rgb(231, 231, 231);
        border: none;
        border-radius: 20px;
        padding: 10px;
    }

    .modal__submit {
        background-color: #EF6E68;
        color: snow;
        border: none; 
        padding: 10px 20px;
        border-radius: 20px;
        cursor: pointer;
    }
</style>