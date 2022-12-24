<template>
  <div id="history">
    <div class="container">
      <h3>History</h3>
      <ol>
        <li v-for="(operation, index) in history" :key="index">{{operation}}</li>
      </ol>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

  export default {
    name: 'history',
    data() {
      return {
        dispHistory: []
      }
    },
    computed: {

      ...mapState(['history']),


    },
    
  }
</script>

<style>
.container {
  color: #E3E2E2;
  padding: auto;
}
</style>
