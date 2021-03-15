<template>
    <ul class="options">
        <li class="options__li" @click='setOption("pomodoro")' :class="{ active: isPomodoroActive }">pomodoro</li>
        <li class="options__li" @click='setOption("shortBreak")' :class="{ active: isShortBreakActive }">short break</li>
        <li class="options__li" @click='setOption("longBreak")' :class="{ active: isLongBreakActive }">long break</li>
    </ul>
</template>

<script>
export default {
    name: "Options",
    data () {
        return {
            options: ["pomodoro", "shortBreak", "longBreak"],
            isPomodoroActive: true,
            isShortBreakActive: false,
            isLongBreakActive: false
        }
    },
    methods: {
        setOption (selected) {
            if ( selected === "shortBreak" ) {
                this.setOptions(false)
                this.isShortBreakActive = true
            } else {
                if ( selected === "longBreak" ) {
                    this.setOptions(false)
                    this.isLongBreakActive = true
                } else {
                    this.setOptions(false)
                    this.isPomodoroActive = true
                }
            }
        },
        setOptions (bool) {
            this.isPomodoroActive = bool
            this.isShortBreakActive = bool
            this.isLongBreakActive = bool
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