<template>
  <div class="container">
    <div class="calc-body">
      <div class="calc-screen">
        <div class="calc-typed">200</div>
        <div class="calc-operation">100+100</div>
      </div>
      <div class="calc-button-row">
        <div class="button l"> C </div>
        <div class="button l"><span class="material-symbols-outlined">
            backspace
          </span></div>
        <div class="button l"> % </div>
        <div class="button l"> / </div>
      </div>
      <div class="calc-button-row">
        <div class="button"> 7 </div>
        <div class="button"> 8 </div>
        <div class="button"> 9 </div>
        <div class="button l"> x </div>
      </div>
      <div class="calc-button-row">
        <div class="button"> 4 </div>
        <div class="button"> 5 </div>
        <div class="button"> 6 </div>
        <div class="button l"> - </div>
      </div>
      <div class="calc-button-row">
        <div class="button"> 1 </div>
        <div class="button"> 2 </div>
        <div class="button"> 3 </div>
        <div class="button l"> + </div>
      </div>
      <div class="calc-button-row b">
        <div class="button"> . </div>
        <div class="button"> 0 </div>
        <div class="button h"><span class="material-symbols-outlined">
            history
          </span></div>
        <div class="button r"> = </div>
      </div>
    </div>
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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0');

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container {
  width: auto;
  margin: 20px;
  color: black;
}

.calc-body {
  width: 275px;
  margin: auto;
  min-height: 400px;
  border: solid 1px #3A4655;
  border-radius: 10px;
  box-shadow: 0 8px 50px -7px black;
}

.calc-screen {
  background: #3A4655;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.calc-operation {
  text-align: right;
  color: #727B86;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  margin-top: 20px;
}

.calc-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #fff;
}

.calc-button-row {
  width: 100%;
  background: #3C4857;
}

.calc-button-row.b {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.button {
  width: 25%;
  background: #425062;
  color: #E3E2E2;
  padding: 20px;
  display: inline-block;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  border-right: solid 2px #3C4857;
  border-bottom: solid 2px #3C4857;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.button.l {
  color: #EC9027;
  background: #404D5E;
}

.button.r {
  color: #E3E2E2;
  background: #EC9027;
}

.button:hover {
  color: #404D5E;
  background: #E3E2E2;
}

.button.l:hover {
  background: #EC9027;
  color: #404D5E;
}

.material-icons-outlined {
  font-weight: lighter;
}

html {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2d3436;
  background-image: linear-gradient(315deg, #2d3436 0%, #000000 74%);
  font-family: 'Montserrat', sans-serif;
}

.title:hover {
  background: #E0B612;
  color: #fff;
}

.title {
  margin-bottom: 10px;
  padding: 5px 0;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #AEB3BA;
  font-family: 'Montserrat', sans-serif;
}

input[type=button] {
  width: 60px;
  height: 60px;
  float: left;
  padding: 0;
  margin: 5px;
  box-sizing: border-box;
  background: #ecedef;
  border: none;
  font-size: 30px;
  line-height: 30px;
  border-radius: 50%;
  font-weight: 700;
  color: #5E5858;
  cursor: pointer;
}

input[type=text] {
  width: 270px;
  height: 60px;
  float: left;
  padding: 0;
  box-sizing: border-box;
  border: none;
  background: none;
  color: red;
  text-align: right;
  font-weight: 700;
  font-size: 60px;
  line-height: 60px;
  margin: 0 25px;
}

.calculator {
  background-color: #c0c0c0;
  box-shadow: 0px 0px 0px 10px #666;
  border: 5px solid black;
  border-radius: 10px;
}
</style>
