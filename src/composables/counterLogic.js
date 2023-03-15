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
  timeLimit: Math.floor(Math.random() * 18 + 15) - 10,
  gameMessage: "",
  newValue: "",
  setValuesClicked: false,
  disableCounterButtons: true,
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
    state.disableCounterButtons = true;
    state.counter = "";
    state.startValue = "";
    state.endValue = "";
    state.timeLimit = Math.floor(Math.random() * 18 + 15) - 10;
    state.timeLeft = 0;
    state.gameMessage = "";
    clearInterval(state.timer);
  };
  //Function to start game
  const startGame = () => {
    state.isGameActive = true;
    state.isGameLost = false;
    state.isGameWon = false;
    state.disableCounterButtons = false;
    state.timer = setInterval(() => {
      if (state.timeLeft !== 0) {
        state.timeLeft--;
        state.gameMessage = "Increment the counter before time runs out!";
      } else {
        state.isGameActive = false;
        state.disableCounterButtons = true;
        state.isGameLost = true;
        state.isGameWon = false;
        state.gameMessage = "Sorry! You lost! Click RESET twice to try again!";
        clearInterval(state.timer);
      }
    }, 10);
  };

  //Watching to update state when counter reaches end value.
  watch(
    () => state.counter,
    (newValue) => {
      if (newValue === state.endValue) {
        state.isGameActive = false;
        state.isGameLost = false;
        state.isGameWon = true;
        state.disableCounterButtons = true;
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

//A conuter game composables that returns the state and actions in the store.

// import { useStore } from "vuex";
// import { computed } from "vue";

// export default function useCounterLogic() {
//   const store = useStore();
//   const counter = computed(() => store.state.counter);
//   const isGameActive = computed(() => store.state.isGameActive);
//   const isGameWon = computed(() => store.state.isGameWon);
//   const isGameLost = computed(() => store.state.isGameLost);
//   const timeLeft = computed(() => store.state.timeLeft);
//   const timer = computed(() => store.state.timer);
//   const startValue = computed({
//     get: () => store.state.startValue,
//     set: (value) => store.dispatch("setStartValue", value),
//   });
//   const endValue = computed({
//     get: () => store.state.endValue,
//     set: (value) => store.dispatch("setEndValue", value),
//   });
//   const timeLimit = computed(() => store.state.timeLimit);
//   const gameMessage = computed(() => store.state.gameMessage);
//   const newValue = computed(() => store.state.newValue);
//   const setValuesClicked = computed(() => store.state.setValuesClicked);

//   const setValues = () => {
//     store.dispatch("setValues", {
//       startValue: store.state.startValue,
//       endValue: store.state.endValue,
//       timeLimit: store.state.timeLimit,
//     });
//   };

//   const incrementCounter = () => {
//     store.dispatch("incrementCounter");
//   };

//   const decrementCounter = () => {
//     store.dispatch("decrementCounter");
//   };

//   const reset = () => {
//     store.dispatch("reset");
//   };

//   const startGame = () => {
//     store.dispatch("startGame");
//   };

//   return {
//     counter,
//     isGameActive,
//     isGameWon,
//     isGameLost,
//     timeLeft,
//     timer,
//     startValue,
//     endValue,
//     timeLimit,
//     gameMessage,
//     newValue,
//     setValuesClicked,
//     setValues,
//     incrementCounter,
//     decrementCounter,
//     reset,
//     startGame,
//   };
// }
