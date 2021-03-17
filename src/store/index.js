import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isPaused: false,
    isPomodoroActive: true,
    isShortBreakActive: false,
    isLongBreakActive: false,
    min: 25,
    sec: 0,
    maxTime: 1500,
    pomodoroTime: 25,
    shortBreakTime: 5,
    longBreakTime: 10
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
    setMaxTime ( state, time ) {
      state.maxTime = time
    },
    setIsPaused (state, bool) {
      state.isPaused = bool
    },
    setSettings ( state, payload ) {
      state.pomodoroTime = payload.newPomodoroTime
      state.shortBreakTime = payload.newShortBreakTime
      state.longBreakTime = payload.newLongBreakTime
      if ( state.isShortBreakActive) {
        state.min = payload.newShortBreakTime
        state.maxTime = payload.newShortBreakTime
      } else {
        if ( state.isLongBreakActive ) {
          state.min = payload.newLongBreakTime
          state.maxTime = payload.newLongBreakTime
        } else {
          state.min = payload.newPomodoroTime
          state.maxTime = payload.newPomodoroTime
        }
      }
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
    setMaxTime (ctx, time) {
      ctx.commit("setMaxTime", time)
    },
    setIsPaused (ctx, bool) {
      ctx.commit("setIsPaused", bool)
    },
    setSettings (ctx, payload) {
      ctx.commit("setSettings", payload)
    }
  },
  modules: {
  }
})
