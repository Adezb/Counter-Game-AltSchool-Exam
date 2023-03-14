<template>
  <div class="apphome__container">
    <h1>Counter Game </h1>
    <p> The Counter Game is a simple game that tests your speed ability to click a button. <br />
      How fast can you race against the computer timer? <br />
      <span>
        <router-link to="/counter">
          Play The Game
        </router-link>
      </span>
      <br />
      <router-link to="/about">About</router-link>
    </p>

    <div class="app__description">
      <h2>How To Play The Game</h2>

      <p>Enter a number you wish to start counting from in the <strong>Start Value</strong> input bar. </p>
      <p>Enter another number you wish to stop in the <strong>End Value</strong> input bar. </p>
      <p>Click the <strong>Set Values</strong> button to set your values </p>
      <p>Once you set your values, time limit will be alloted to you in Seconds. <br /> Click the
        <strong>START</strong>
        button to play the game.
      </p>
      <p>To play the game again after a round, click <strong>RESET</strong> twice. </p>

    </div>
    <!--NAVIGATE TO COUNTER APP-->
    <span class="counterapp__navigate">
      <router-link to="/counter">Go To Counter Game</router-link>
    </span>



  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {


  }
}
</script>

<style scoped>
.apphome__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  /* background: #d9deff; */
  background: url(@/assets/home-bg.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


.apphome__container h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.apphome__container p {
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1rem;
}

.apphome__container p span a {
  color: #0d3ec4;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
}


.apphome__container .app__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background: #a6c1ee;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.apphome__container .app__description h2 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.apphome__container .app__description p {
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
  line-height: 1.2;
  text-align: center;
}

.apphome__container .counterapp__navigate {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.apphome__container .counterapp__navigate a {
  color: #2c3e50;
  text-decoration: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%);
}

.apphome__container .counterapp__navigate a:hover {
  text-decoration: underline;
  transform: scale(1.05);
  color: #fff;
  background: linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
}

.apphome__container .counterapp__navigate a:active {
  transform: scale(0.95);
}

.apphome__container .counterapp__navigate a:link {
  color: #2c3e50;
}

.apphome__container .counterapp__navigate a:active {
  transform: scale(0.95);
}

/*MEDIA QUERY*/
/*768px and less Devices*/
@media screen and (max-width: 768px) {
  .apphome__container {
    padding: 0.8rem;
  }

  .apphome__container h1 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: -0.7rem;
  }

  .apphome__container p {
    font-size: 1rem;
    font-weight: 400;
    margin-bottom: 1rem;
    line-height: 1.4;
  }

  .apphome__container .app__description {
    padding: 0.8rem;
  }

  .apphome__container .app__description h2 {
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: -0.1rem;
  }

  .apphome__container .app__description p {
    font-size: 1rem;
    font-weight: 400;
    /* text-align: left; */
    /* line-height: 1.2; */
    margin-bottom: 1rem;
  }

  .apphome__container .counterapp__navigate {
    padding: 0.5rem;
    margin-top: 1rem;
  }

  .apphome__container .counterapp__navigate a {
    color: #2c3e50;
    text-decoration: none;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    transition: all 0.2s ease-in-out;
    background: linear-gradient(90deg, #fbc2eb 0%, #a6c1ee 100%);
  }

  .apphome__container .counterapp__navigate a:hover {
    text-decoration: underline;
    transform: scale(1.05);
    color: #fff;
    background: linear-gradient(90deg, #a6c1ee 0%, #fbc2eb 100%);
  }

  .apphome__container .counterapp__navigate a:active {
    transform: scale(0.95);
  }

  .apphome__container .counterapp__navigate a:link {
    color: #2c3e50;
  }

  .apphome__container .counterapp__navigate a:active {
    transform: scale(0.95);
  }
}

/*425px and less Devices*/
@media screen and (max-width: 425px) {
  .apphome__container .app__description p {
    text-align: left;
  }
}
</style>
