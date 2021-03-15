<template>
  <div class="timer" @click="togglePaused()">
    <vue-ellipse-progress
      @click="togglePaused()"
      :progress="progress"
      line="round"
      color="#F66E6F"
      :size="350"
      emptyColor="transparent"
      :legend="false"
      thickness="10px"
    >
      <span class="timer__time" slot="legend-caption">
        <span>{{ minPrefix }}{{ min }}</span>
        <span class="mx-2">:</span>
        <span>{{ secPrefix }}{{ sec }}</span>
      </span>

      <div class="timer__option" @click="togglePaused()" slot="legend-caption">
        <span v-if="isPaused">PAUSED</span>
        <span v-else>PLAYING</span>
      </div>
    </vue-ellipse-progress>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Timer',
  data () {
    return {
      progress: 0
    }
  },
  computed: {
    ...mapState([
      "min",
      "sec",
      "maxTime",
      "isPaused"
    ]),
    minPrefix() {
      return this.min < 10 ? "0" : "";
    },
    secPrefix() {
      return this.sec < 10 ? "0" : "";
    }
  },
  mounted () {
    setInterval(this.runTimer, 1000)
  },
  methods: {
    runTimer() {
      if (!this.isPaused) {
        this.$store.dispatch("decrementSeconds")
        if (this.sec < 0) {
          if (this.min > 0) {
            this.$store.dispatch("setSeconds", 59)
            this.$store.dispatch("decrementMinutes")
          } else {
            this.$store.dispatch("setIsPaused", false)
            this.progress = 0
            this.$store.dispatch("setSeconds", 0)
            this.$store.dispatch("setMinutes", 0)
          }
        }
        this.progress = parseInt((((this.min * 60 + this.sec ) / this.maxTime) * 100 ))
      }
    },
    togglePaused () {
      this.$store.dispatch("setIsPaused", !this.isPaused)
    }
  }
}
</script>

<style scoped>
  .timer {
    background-color: #151932;
    border-radius: 50%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 15px;

    height: 370px;
    width: 370px;
  }

  .timer__time {
    color: #D7E0FB;
    font-size: 90px;
    display: block;
  }

  .timer__option {
    margin-top: 20px;
  }

  .timer__option > span {
    color: #D7E0FB;
    letter-spacing: 10px;
  }
</style>
