<template>
  <div class="home">
    <div class="container">
      <div :class="[modeToggle ? 'cal-body':'light-cal-body']">
        <div :class="[modeToggle ? 'cal-screen':'light-cal-screen']">
          <div :class="[modeToggle ? 'cal-typed':'light-cal-typed']">{{ typed }}</div>
          <div :class="[modeToggle ? 'cal-operation':'light-cal-operation']">{{ operationDisp }}</div>
        </div>
        <div :class="[modeToggle ? 'cal-button-row':'light-cal-button-row']">
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="clearScreen()"> C </button>
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="backspace()"><span class="material-symbols-outlined">
              backspace
            </span></button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="modeToggleFunc()"><span class="material-symbols-outlined">
              light_mode
            </span></button>
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="calInput('/')"> / </button>
        </div>
        <div :class="[modeToggle ? 'cal-button-row':'light-cal-button-row']">
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('7')"> 7 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('8')"> 8 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('9')"> 9 </button>
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="calInput('*')"> x </button>
        </div>
        <div :class="[modeToggle ? 'cal-button-row':'light-cal-button-row']">
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('4')"> 4 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('5')"> 5 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('6')"> 6 </button>
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="calInput('-')"> - </button>
        </div>
        <div :class="[modeToggle ? 'cal-button-row':'light-cal-button-row']">
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('1')"> 1 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('2')"> 2 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('3')"> 3 </button>
          <button :class="[modeToggle ? 'button l':'light-button l']" @click="calInput('+')"> + </button>
        </div>
        <div :class="[modeToggle ? 'cal-button-row b':'light-cal-button-row b']">
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('.')"> . </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="calInput('0')"> 0 </button>
          <button :class="[modeToggle ? 'button':'light-button']" @click="historyNav()"><span class="material-symbols-outlined">
              history
            </span></button>
          <button :class="[modeToggle ? 'button r':'light-button r']" @click="evaluate()"> = </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'calculator',
  data() {
    return {
      result: '',
      typed: '0',
      operation: '',
      evalOperation: '',
      modeToggle: true,
     };
  },
  methods: {

    ...mapActions(['addOperationAction']),

    modeToggleFunc() {
      this.modeToggle = !this.modeToggle;
      console.log(this.modeToggle)
    },

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
      if( this.operation !='') {
        let lastChar = this.operation.slice(-1);
      if (lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
        this.evalOperation = this.operation.slice(0, -1);
        this.result = eval(this.evalOperation);
        const fullOperation = `${this.evalOperation}=${this.result}`;
        this.addOperationAction(fullOperation);
      } else {
        this.result = eval(this.operation);
        const fullOperation = `${this.operation}=${this.result}`;
        this.addOperationAction(fullOperation);
      }
      this.operation = '';
      this.typed = this.result;
      } else {this.typed = 'Select Operation'}
    },

    historyNav() {
      this.$router.push({name:'history',})
    }

  },

  computed: {

    operationDisp() {
      return this.operation;
    },

  },
}
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
  border: solid 1px #425062;
  border-radius: 10px;
  box-shadow: 0 8px 50px -7px black;
}

.light-cal-body {
  width: 275px;
  margin: auto;
  min-height: 400px;
  border: solid 1px #E3E2E2;
  border-radius: 10px;
  box-shadow: 0 8px 50px -7px black;
}

.cal-screen {
  background: #425062;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.light-cal-screen {
  background: #E3E2E2;
  width: 100%;
  height: 150px;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.cal-operation {
  text-align: right;
  color: #425062;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  margin-top: 20px;
}

.light-cal-operation {
  text-align: right;
  color: #E3E2E2;
  font-size: 15px;
  font-weight: bold;
  padding-top: 5px;
  margin-top: 20px;
}

.cal-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #E3E2E2;
}

.light-cal-typed {
  margin-top: 20px;
  font-size: 45px;
  text-align: right;
  color: #425062;
}

.cal-button-row {
  width: 100%;
  background: #425062;
}

.light-cal-button-row {
  width: 100%;
  background: #E3E2E2;
}

.cal-button-row.b {
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}

.light-cal-button-row.b {
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

.light-button {
  width: 25%;
  background: #E3E2E2;
  color: #425062;
  padding: 20px;
  display: inline-block;
  font-size: 25px;
  text-align: center;
  vertical-align: middle;
  border-right: solid 2px #E3E2E2;
  border-bottom: solid 2px #E3E2E2;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}

.button.l {
  color: #EC9027;
  background: #404D5E;
}

.light-button.l {
  color: #404D5E;
  background: #E3E2E2;
}

.button.r {
  color: #E3E2E2;
  background: #EC9027;
}

.light-button.r {
  color: #404D5E;
  background: #EC9027;
}

.button:hover {
  color: #404D5E;
  background: #E3E2E2;
}

.light-button:hover {
  color: #E3E2E2;
  background: #404D5E;
}

.button.l:hover {
  background: #EC9027;
  color: #404D5E;
}

.light-button.l:hover {
  color: #E3E2E2;
  background: #404D5E;
}

.button.r:hover {
  background: #EC9027;
  color: #404D5E;
}

.light-button.r:hover {
  color: #E3E2E2;
  background: #404D5E;
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
