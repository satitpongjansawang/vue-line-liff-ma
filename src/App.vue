<template>
  <div id="app">
    <img :src="profile.pictureUrl" width="60" height="60">
    {{ profile.displayName }}
    <p>my sage {{ profile.statusMessage }}</p>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import liff from '@line/liff'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return {
      loggedIn: false,
      profile: {},
      displayName: "",
    }
  },
  mounted(){
    liff
    .init({ liffId : '1656167393-ZjmE5mGE'})
    .then(() => {
      if (!liff.isLoggedIn()){
        liff.login()
      }else{
        this.loggedIn = liff.isLoggedIn()
        this.getProfile()
      }
    })
    .catch((err) => {
      this.occoredError = 'error:' + err
    })
  },
  methods:{
    getProfile(){
      liff.getProfile()
      .then(profile => {
        this.profile = profile
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
