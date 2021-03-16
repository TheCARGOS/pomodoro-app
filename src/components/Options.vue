<template>
    <ul class="options">
        <li class="options__li" @click='setOption("pomodoro")' :class="{ active: isPomodoroActive }">pomodoro</li>
        <li class="options__li" @click='setOption("shortBreak")' :class="{ active: isShortBreakActive }">short break</li>
        <li class="options__li" @click='setOption("longBreak")' :class="{ active: isLongBreakActive }">long break</li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "Options",
    computed: mapState([
      "isPomodoroActive",
      "isShortBreakActive",
      "isLongBreakActive"
    ]),
    methods: {
        setOption (selected) {
            this.$store.dispatch("setOptionsToFalse")
            if ( selected === "shortBreak" ) {
                this.$store.dispatch("setMaxTime", this.$store.state.shortBreakTime)
                this.$store.state.isShortBreakActive = true
                this.$store.dispatch("setTime", { min: this.$store.state.shortBreakTime, sec: 0 })
            } else {
                if ( selected === "longBreak" ) {
                    this.$store.dispatch("setMaxTime", this.$store.state.longBreakTime)
                    this.$store.state.isLongBreakActive = true
                    this.$store.dispatch("setTime", { min: this.$store.state.longBreakTime, sec: 0 })
                } else {
                    this.$store.dispatch("setMaxTime", this.$store.state.pomodoroTime)
                    console.log(this.$store.state.shortBreakTime)
                    this.$store.dispatch("setTime", { min: this.$store.state.pomodoroTime, sec: 0 })
                    this.$store.state.isPomodoroActive = true
                }
            }
        }
    }
}
</script>

<style scoped>
    .options {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 30px;
        background-color: #141832;
        padding: 10px 0;
        list-style-type: none;
    }

    .options__li {
        color: snow;
        margin: 0 10px;
        cursor: pointer;
        line-height: 3;
        border-radius: 30px;
        padding: 0 28px;
    }

    .active {
        color: #1E2140;
        transition: .2s;
        background-color: #EF6E68;
    }
</style>