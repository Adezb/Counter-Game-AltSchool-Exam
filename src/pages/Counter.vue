<template>
    <div class="counter-game__container">
        <span class="game__help"> Difficult?&nbsp;
            <router-link to="/">
                Check how to play the game.
            </router-link></span>
        <div class="game">
            <div class="game__settings">
                <div class="game__settings__start">
                    <input type="number" id="start" v-model.number="startValue" placeholder="Start Value"
                        :disabled="setValuesClicked" />
                </div>
                <div class="game__settings__end">
                    <input type="number" id="end" v-model.number="endValue" placeholder="End Value"
                        :disabled="setValuesClicked" />
                </div>
                <div class="game__settings__button">
                    <button @click="setValues">Set Values</button>
                </div>
            </div>

            <div class="game__counter">
                <div class="increment__btn">
                    <button @click="incrementCounter" :disabled="disableCounterButtons">Increment</button>
                </div>
                <div class="game__counter__screen">
                    <span>{{ counter }}</span>
                </div>
                <div class="decrement__btn">
                    <button @click="decrementCounter" :disabled="disableCounterButtons">Decrement</button>
                </div>
            </div>

            <div class="game__timer">
                <span>{{ timeLeft }} Seconds</span>
            </div>
            <div class="game__message">
                <span>{{ gameMessage }}</span>
            </div>
            <div class="game__status">
                <h3 v-if="isGameActive">Game Active</h3>
                <h3 v-if="isGameLost">Game Lost</h3>
                <h3 v-if="isGameWon">
                    <span>Game Won.</span>
                </h3>
            </div>
            <div class="game__buttons">
                <button class="game__btn__start" @click="startGame">START</button>
                <button class="game__btn__reset" @click="reset">RESET</button>
            </div>
        </div>
    </div>
</template>

<script>
import counterLogic from '@/composables/counterLogic';
export default {
    name: 'Counter',
    setup() {
        const { setValues, incrementCounter, decrementCounter, startGame, startValue, reset, counter, endValue, timeLeft, timeLimit, isGameActive, isGameLost, isGameWon, gameMessage, setValuesClicked, disableCounterButtons } = counterLogic();

        return {
            setValues,
            incrementCounter,
            decrementCounter,
            startGame,
            startValue,
            reset,
            counter,
            endValue,
            timeLeft,
            timeLimit,
            isGameActive,
            isGameLost,
            isGameWon,
            gameMessage,
            setValuesClicked,
            disableCounterButtons
        }


    }
}
</script>

<style scoped>
.counter-game__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background: #d9deff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.counter-game__container .game__help {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    padding: 1rem;
    background: #d9deff;
}

.counter-game__container .game__help a {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
}

.counter-game__container .game__help a:hover {
    color: #40cc7a;
}

.counter-game__container .game {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #c8cffa;
}

.counter-game__container .game .game__settings {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #d9deff;
}

.counter-game__container .game .game__settings .game__settings__start {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    background: #d9deff;
}

.counter-game__container .game .game__settings .game__settings__start input {
    max-width: 50%;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
}

.counter-game__container .game .game__settings .game__settings__end {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-right: 2rem;
    background: #d9deff;
}

.counter-game__container .game .game__settings .game__settings__end input {
    max-width: 50%;
    padding: 0.8rem;
    border: none;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #2c3e50;
    text-align: center;
}


.counter-game__container .game .game__settings__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    padding: 1rem;
    background: #d9deff;
}

.counter-game__container .game .game__settings__button button {
    min-width: 30%;
    padding: 0.5rem;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #615f5f;
    background: #87a7e4;
    cursor: pointer;

}

.counter-game__container .game .game__settings__button button:hover {
    background: #2c3e50;
    color: #fff;

}

.counter-game__container .game .game__settings__button button:active {
    background: #2c3e50;
    color: #fff;
}

.counter-game__container .game .game__settings__button button:disabled {
    background: #d9deff;
    color: #615f5f;
    cursor: not-allowed;
}

.counter-game__container .game .game__counter {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-bottom: 0.5rem;
    background: #d9deff;
}

.counter-game__container .game .game__counter .game__counter__screen {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 30%;
    padding: 1rem;
    margin-top: -2rem;
    /* background: #d9deff; */
    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.counter-game__container .game .game__counter .game__counter__screen span {
    font-size: 2rem;
    font-weight: 500;
    color: #3a434d;
}

.increment__btn,
.decrement__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: -1.5rem;
    background: #d9deff;
}

.increment__btn button,
.decrement__btn button {
    width: 100%;
    padding: 0.5rem;
    margin: 0 1rem;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #615f5f;
    background: #87a7e4;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    user-select: none;
}

.increment__btn button:hover {
    background: #2c3e50;
    color: #fff;
    transform: scale(1.1);
}

.decrement__btn button:hover {
    background: #2c3e50;
    color: #fff;
    transform: scale(1.1);
}


.game__timer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: -1rem;
    background: #d9deff;
}

.game__timer span {
    font-size: 1.2rem;
    font-weight: 500;
    color: #3a434d;
    padding: 0.5rem;
    border-radius: 5px;
    width: 50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
}

.game__message {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: -2rem;
    background: #d9deff;
    border-radius: 16px;
}

.game__message span {
    font-size: 18px;
    font-weight: 500;
    color: #3a434d;
    padding: 0.5rem;
    /* margin-top: 0.5rem; */
    border-radius: 5px;
    width: 80%;
    background: #c8cffa;
}

.game__status {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    /* margin-top: -2rem; */
    background: #d9deff;
}

.game__status h3 {
    font-size: 1rem;
    font-weight: 600;
    color: #3a434d;
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 5px;
    width: 50%;
    background: #d9deff;
}

.game__buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    /* background: #d9deff; */
}

.game__buttons button {
    min-width: 30%;
    padding: 0.5rem;
    margin: 0 1rem;
    border: 1px solid #2c3e50;
    border-radius: 5px;
    outline: none;
    font-size: 1rem;
    font-weight: 600;
    color: #51fc98;
    background: #1855fd;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    user-select: none;
}

.game__btn__reset:hover {
    background: #ff1414 !important;
    color: #fff !important;
    user-select: none !important;
}

.game__buttons button:hover {
    background: #2c3e50;
    color: #fff;
    user-select: none;
}

/*Media Query for Responsiveness*/

/*768px and less devices*/
@media screen and (max-width: 768px) {
    .counter-game__container .game {
        width: 80%;
    }

    .counter-game__container .game__help {
        display: flex;
        position: absolute;
        top: 8rem;
        z-index: 1;
        justify-content: center;
        align-items: center;
        width: 86.5%;
        padding: 1rem;
        background: #d9deff;
    }


    .counter-game__container .game .game__settings {
        display: block;
        margin-top: -2rem;
    }

    .counter-game__container .game .game__settings .game__settings__start input {
        width: 100%;
        margin-top: 2rem;
        padding: 0.7rem;
        font-size: 16px;
        margin-right: 2rem;
    }

    .counter-game__container .game .game__settings .game__settings__end input {
        width: 100%;
        margin-top: -1rem;
        padding: 0.7rem;
        font-size: 16px;
        margin-right: 2rem;
    }

    .counter-game__container .game .game__settings__button {
        width: 100%;
        margin-left: -1rem;
        margin-top: -1rem;
    }

    .game__timer {
        margin-top: -2rem;
    }

    .game__timer span {
        width: 80%;
        padding: 0.2rem;
    }

    .game__status h3 {
        margin-top: -0.5rem;
        color: #949e06;
    }

    .game__message span {
        font-size: 16px;
    }


    .counter-game__container .game .game__counter .game__counter__screen span {
        font-size: 1.6rem;

        padding: 0.5rem;
    }

    .increment__btn button,
    .decrement__btn button {
        width: 80%;
        height: 100%;
        padding: 0.7rem;
        font-size: 0.8rem;
        transform: rotate(90deg);
        margin-bottom: 1.5rem;

    }


}

/*375px and less devices*/
@media screen and (max-width: 375px) {
    .counter-game__container .game .game__counter {
        width: 80%;
    }

    .increment__btn,
    .decrement__btn {
        width: 40%;

    }

    .increment__btn button,
    .decrement__btn button {
        width: 100%;
        height: 100%;
        padding: 0.6rem;
        font-size: 0.8rem;
        margin-bottom: 2rem;
    }
}

@media screen and (min-width: 425px) {

    .increment__btn,
    .decrement__btn {
        width: 30%;

    }

    .increment__btn button,
    .decrement__btn button {
        font-size: 0.7rem;
        margin-bottom: 3rem;
        padding: 0.5rem;
    }
}
</style>




















































































































