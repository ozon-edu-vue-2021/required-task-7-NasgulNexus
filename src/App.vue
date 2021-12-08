<template>
  <div id="app">
    <Friend_list :data="DATA" />
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Friend_list from "./components/Friend-list/Friend_list"
export default {
  name: "App",
  components: {
    Friend_list
  },
  computed:{
     ...mapGetters(['DATA'])
  },
  methods:{
   
  },
  mounted(){
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  padding: 24px;
  box-sizing: border-box;
}
</style>
