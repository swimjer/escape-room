<template>
  <div id="app">
    <game-title :title="title"></game-title>
    <router-view @game-start="gameStart"></router-view>
<credits></credits>
  </div>
</template>

<script>
import EscapeRoomGame from './components/EscapeRoomGame.vue'
import GameTitle from './components/GameTitle.vue'
import Credits from './components/Credits.vue'

export default {
  name: 'App',
  components: {
    EscapeRoomGame,
    GameTitle,
    Credits
  },
  data() { 
    return {
      title: "Swimming the Channel"
    }
  },
  created() {
    //window.addEventListener('beforeunload', function() {
    //   //localStorage.userProgress = 30
    //   // todo save user progresss 
    //   let step = this.$store.state.userProgress.currentStep
    //   localStorage.userProgress = step 

    // })
    // // console.log(this.$router.path)
    // let stepFromSession = localStorage.userProgress
    // if (stepFromSession) {
    //   this.$store.commit('changeS', stepFromSession)
    // }
    // todo get user progress from session storage and nav to that page 


  },
  methods: {
    gameStart() {
    }
  }
}
</script>

<style>

html, body {
   /* height: 100%; */
     background: lightblue;
}

@import url('https://fonts.googleapis.com/css2?family=Tenali+Ramakrishna&display=swap');
#app {
  font-family: 'Tenali Ramakrishna', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 30px;
  font-size: 25px;
  min-height: 100vh;


}

h1 {
  margin: 20px;
}
    pre {
      font-size: 25px;
        font-family:'Tenali Ramakrishna', sans-serif;
        white-space: pre-wrap;       /* css-3 */
        white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
        white-space: -pre-wrap;      /* Opera 4-6 */
        white-space: -o-pre-wrap;    /* Opera 7 */
        word-wrap: break-word;       /* Internet Explorer 5.5+ */

        margin: 30px;
    }
</style>
