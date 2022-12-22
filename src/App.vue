<template>
  <div id="app">
    <h1>{{ fullName }}</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      firstName: "Kartik",
      lastname: "Pardhi",
    };
  },
  methods: {
    changeName(newName) {
      this.name = newName;
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastname}`;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
