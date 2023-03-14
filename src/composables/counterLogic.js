//Conuter Game composables with state management
import { reactive, toRefs } from "@vue/reactivity";
import { watch } from "vue";

//Define state

const state = reactive({
  counter: 0,
  isGameActive: false,
  isGameWon: false,
  isGameLost: false,
  timeLeft: 0,
  timer: null,
  startValue: "",
  endValue: "",
  timeLimit: Math.floor(Math.random() * 18 + 9) - 5,
  gameMessage: "",
  newValue: "",
  setValuesClicked: false,
});

//Create functions to update state
const counterLogic = () => {
  //Function to Set Values
  const setValues = () => {
    state.counter = state.startValue;
    state.timeLeft = state.timeLimit;
    state.setValuesClicked = true;
  };
  //Function to increment counter
  const incrementCounter = () => {
    if (state.counter < state.endValue) {
      state.counter++;
    }
  };
  //Function to decrement counter
  const decrementCounter = () => {
    if (state.counter > state.startValue) {
      state.counter--;
    }
  };
  //Function to reset game
  const reset = () => {
    state.isGameActive = false;
    state.isGameLost = false;
    state.isGameWon = false;
    state.setValuesClicked = false;
    state.counter = "";
    state.startValue = "";
    state.endValue = "";
    state.timeLimit = Math.floor(Math.random() * 18 + 9) - 5;
    state.timeLeft = 0;
    state.gameMessage = "";
    clearInterval(state.timer);
  };
  //Function to start game
  const startGame = () => {
    state.isGameActive = true;
    state.isGameLost = false;
    state.isGameWon = false;
    state.timer = setInterval(() => {
      if (state.timeLeft !== 0) {
        state.timeLeft--;
        state.gameMessage = "Increment the counter before time runs out!";
      } else {
        state.isGameActive = false;
        state.isGameLost = true;
        state.isGameWon = false;
        state.gameMessage = "Sorry! You lost! Click RESET twice to try again!";
        clearInterval(state.timer);
      }
    }, 1000);
  };

  //Watching to update state when counter reaches end value.
  watch(
    () => state.counter,
    (newValue) => {
      if (newValue === state.endValue) {
        state.isGameActive = false;
        state.isGameLost = false;
        state.isGameWon = true;
        state.gameMessage =
          "Congratulations! You won!" +
          ` You are ${state.timeLeft} seconds faster.` +
          " Click RESET twice to try again!";
        clearInterval(state.timer);
      }
    }
  );

  return {
    ...toRefs(state),
    setValues,
    incrementCounter,
    decrementCounter,
    startGame,
    reset,
  };
};

export default counterLogic;
