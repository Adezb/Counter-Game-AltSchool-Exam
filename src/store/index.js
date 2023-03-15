import { createStore } from "vuex";
import { reactive } from "vue";

const store = createStore({
  state: reactive({
    counter: 0,
    isGameActive: false,
    isGameWon: false,
    isGameLost: false,
    timeLeft: 0,
    timer: null,
    startValue: "",
    endValue: "",
    timeLimit: Math.floor(Math.random() * 18 + 12) - 9,
    gameMessage: "",
    newValue: "",
    setValuesClicked: false,
  }),
  mutations: {
    setCounter(state, payload) {
      state.counter = payload;
    },
    setIsGameActive(state, payload) {
      state.isGameActive = payload;
    },
    setIsGameWon(state, payload) {
      state.isGameWon = payload;
    },
    setIsGameLost(state, payload) {
      state.isGameLost = payload;
    },
    setTimeLeft(state, payload) {
      state.timeLeft = payload;
    },
    setTimer(state, payload) {
      state.timer = payload;
    },
    setStartValue(state, payload) {
      state.startValue = payload;
    },
    setEndValue(state, payload) {
      state.endValue = payload;
    },
    setTimeLimit(state, payload) {
      state.timeLimit = payload;
    },
  },
  actions: {
    startGame(context) {
      context.commit("setIsGameActive", true);
      context.commit("setIsGameWon", false);
      context.commit("setIsGameLost", false);
      context.commit("setCounter", context.state.startValue);
      context.commit("setTimeLeft", context.state.timeLimit);
      context.commit(
        "setTimer",
        setInterval(() => {
          context.commit("setTimeLeft", context.state.timeLeft - 1);
          if (context.state.timeLeft <= 0) {
            clearInterval(context.state.timer);
            context.commit("setIsGameActive", false);
            context.commit("setIsGameLost", true);
          }
        }, 1000)
      );
    },
    incrementCounter(context) {
      if (context.state.counter < context.state.endValue) {
        context.commit("setCounter", context.state.counter + 1);
        if (context.state.counter === context.state.endValue) {
          clearInterval(context.state.timer);
          context.commit("setIsGameActive", false);
          context.commit("setIsGameWon", true);
        }
      }
    },
    decrementCounter(context) {
      if (context.state.counter > context.state.startValue) {
        context.commit("setCounter", context.state.counter - 1);
        if (context.state.counter === context.state.startValue) {
          clearInterval(context.state.timer);
          context.commit("setIsGameActive", false);
          context.commit("setIsGameLost", true);
        }
      }
    },
    setValues(context, payload) {
      context.commit("setStartValue", payload.startValue);
      context.commit("setEndValue", payload.endValue);
      context.commit("setTimeLimit", payload.timeLimit);
    },
  },
  getters: {
    counter(state) {
      return state.counter;
    },
  },
});

export default store;
