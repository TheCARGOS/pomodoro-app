import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPaused: false,
    isPomodoroActive: true,
    isShortBreakActive: false,
    isLongBreakActive: false,
    min: 20,
    sec: 0,
    maxTime: 1200
  },
  mutations: {
    setOptionsToFalse (state) {
      state.isPomodoroActive = false,
      state.isShortBreakActive = false,
      state.isLongBreakActive = false
    },
    setTime (state, time) {
      state.min = time.min
      state.sec = time.sec
      state.maxTime = time.min * 60 + time.sec
    },
    decrementSeconds (state) {
      state.sec--
    },
    decrementMinutes (state) {
      state.min--
    },
    setSeconds (state, value) {
      state.sec = value
    },
    setMinutes ( state, value ) {
      state.min = value
    },
    setIsPaused (state, bool) {
      state.isPaused = bool
    }
  },
  actions: {
    setOptionsToFalse (context) {
      context.commit("setOptionsToFalse")
    },
    setTime (context, time) {
      context.commit("setTime", time)
    },
    decrementSeconds (context) {
      context.commit("decrementSeconds")
    },
    decrementMinutes (context) {
      context.commit("decrementMinutes")
    },
    setSeconds (ctx, value) {
      ctx.commit("setSeconds", value)
    },
    setMinutes (ctx, value) {
      ctx.commit("setMinutes", value)
    },
    setIsPaused (ctx, bool) {
      ctx.commit("setIsPaused", bool)
    }
  },
  modules: {
  }
})
