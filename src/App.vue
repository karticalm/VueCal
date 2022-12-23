<template>
  <div class="container">
    <div class="cal-body">
      <div class="cal-screen">
        <div class="cal-typed">{{ typed }}</div>
        <div class="cal-operation">{{ operationDisp }}</div>
      </div>
      <div class="cal-button-row">
        <button class="button l" @click="clearScreen()"> C </button>
        <button class="button l" @click="backspace()"><span class="material-symbols-outlined">
            backspace
          </span></button>
        <button class="button"><span class="material-symbols-outlined">
            light_mode
          </span></button>
        <button class="button l" @click="calInput('/')"> / </button>
      </div>
      <div class="cal-button-row">
        <button class="button" @click="calInput('7')"> 7 </button>
        <button class="button" @click="calInput('8')"> 8 </button>
        <button class="button" @click="calInput('9')"> 9 </button>
        <button class="button l" @click="calInput('*')"> x </button>
      </div>
      <div class="cal-button-row">
        <button class="button" @click="calInput('4')"> 4 </button>
        <button class="button" @click="calInput('5')"> 5 </button>
        <button class="button" @click="calInput('6')"> 6 </button>
        <button class="button l" @click="calInput('-')"> - </button>
      </div>
      <div class="cal-button-row">
        <button class="button" @click="calInput('1')"> 1 </button>
        <button class="button" @click="calInput('2')"> 2 </button>
        <button class="button" @click="calInput('3')"> 3 </button>
        <button class="button l" @click="calInput('+')"> + </button>
      </div>
      <div class="cal-button-row b">
        <button class="button" @click="calInput('.')"> . </button>
        <button class="button" @click="calInput('0')"> 0 </button>
        <button class="button h"><span class="material-symbols-outlined">
            history
          </span></button>
        <button class="button r" @click="evaluate()"> = </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      result: '',
      typed: '0',
      operation: '',
      evalOperation: '',
      history: []
    };
  },
  methods: {
    calInput(x) {
      if (x == '+' || x == '-' || x == '*' || x == '/') {
        this.operation += x;
        if (this.operation.length >= 2) {
          let lastChar = this.operation.slice(-2, -1);
          if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
            this.operation = this.operation.slice(0, -1);
          }
        }
        this.typed = '0';
      } else if (this.typed.length <= 8 && this.operation.length <= 24) {
        if (this.typed == '0') {
          this.typed = '';
          this.typed += x;
          this.operation += x;
        } else {
          this.typed += x;
          this.operation += x;
        }
      }
    },
    clearScreen() {
      this.typed = '0';
      this.operation = '';
      this.result = '';
    },
    backspace() {
      this.typed = this.typed.slice(0, -1);
      if (this.typed == '') {
        this.typed = '0';
        this.operation = this.operation.slice(0, -1);
      }
    },
    evaluate() {
      let lastChar = this.operation.slice(-1);
      if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
        this.evalOperation = this.operation.slice(0, -1);
        this.result = eval(this.evalOperation);
      } else {
        this.result = eval(this.operation);
      }
      this.operation = '';
      this.typed = this.result;
    },
  },
  computed: {
    operationDisp() {
      return this.operation;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,300,0,0');
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0');

* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.container {
  width: auto;
  margin: 20px;
  color: black;
}

.cal-body {
  width: 275px;
  margin: auto;
  min-height: 400px;
  border: solid 1px #3A4655;
  border-radius: 10px;
  box-shadow: 0 8px 50px -7px black;
}

.cal-screen {
  background: #3A4655;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cal-operation {
  text-align: right;
  color: #727B86;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  margin-top: 20px;
}

.cal-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #fff;
}

.cal-button-row {
  width: 100%;
  background: #3C4857;
}

.cal-button-row.b {
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
</style>
