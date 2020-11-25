<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A hot copper pot of mass {{ copperMass}} kg (including its copper lid) is at a temperature of {{ copperTemp }}&#x00B0;C. You pour {{ waterMass }} kg of cool water at {{ waterTemp }}&#x00B0;C into the pot, then quickly replace the lid so no steam can scape. Find the final temperature of the pot and its contents, ans determine the phase of the water (liquid, gas or a mixture). Assume that no heat is lost to the surroundings.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Pot mass (kg)
        input.center.data(:class="checkedPotMass" v-model.number='enterPotMass')
      p.inline.data Water mass (kg)
        input.center.data(:class="checkedWaterMass" v-model.number='enterWaterMass')
      p.inline.data Pot temp. (&#x00B0;C)
        input.center.data(:class="checkedPotTemp" v-model.number='enterPotTemp')
      p.inline.data Water temp. (&#x00B0;C)
        input.center.data(:class="checkedWaterTemp" v-model.number='enterWaterTemp')
      p.inline.data Equilibrium temp. (&#x00B0;C)
        input.center.data(:class="checkedEqTemp" v-model.number='enterEqTemp')
      p.inline.data final steam mass (kg)
        input.center.data(:class="checkedSteam" v-model.number='enterSteam')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterPotMass: '',
      enterWaterMass: '',
      enterPotTemp: '',
      enterWaterTemp: '',
      enterEqTemp: '',
      enterSteam: '',
      lV: 2256000,
      cC: 390,
      cW: 4190,
      phase: 'mixture'
    }
  },
  computed: {
    copperMass: function () {
      let max = 250
      let min = 200
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    copperTemp: function () {
      let max = 200
      let min = 150
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    waterMass: function () {
      let max = 100
      let min = 50
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    waterTemp: function () {
      let max = 25
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    finalTemp: function () {
      return 100
    },
    steamMass: function () {
      return parseFloat(((-this.copperMass * this.cC * (this.finalTemp - this.copperTemp) - this.waterMass * this.cW * (this.finalTemp - this.waterTemp)) / this.lV).toPrecision(3))
    },
    checkedPotMass: function () {
      let check
      console.log('Pot mass : ' + this.copperMass + ' : ' + parseFloat(this.enterPotMass))
      check = this.copperMass === parseFloat(this.enterPotMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterMass: function () {
      let check
      console.log('Water mass : ' + this.waterMass + ' : ' + parseFloat(this.enterWaterMass))
      check = this.waterMass === parseFloat(this.enterWaterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedPotTemp: function () {
      let check
      console.log('Pot temp : ' + this.copperTemp + ' : ' + parseFloat(this.enterPotTemp))
      check = this.copperTemp === parseFloat(this.enterPotTemp) ? 'correct' : 'not-correct'
      return check
    },
    checkedWaterTemp: function () {
      let check
      console.log('Water temp : ' + this.waterTemp + ' : ' + parseFloat(this.enterWaterTemp))
      check = this.waterTemp === parseFloat(this.enterWaterTemp) ? 'correct' : 'not-correct'
      return check
    },
    checkedEqTemp: function () {
      let check
      console.log('final Temp : ' + this.finalTemp + ' : ' + parseFloat(this.enterEqTemp))
      check = this.finalTemp === parseFloat(this.enterEqTemp) ? 'correct' : 'not-correct'
      return check
    },
    checkedSteam: function () {
      let check
      console.log('Steam mass : ' + this.steamMass + ' : ' + this.enterSteam)
      check = this.steamMass === this.enterSteam ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  text-transform: none;
  margin: 1px 2px 1px 2px;
  font-size: 30px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}

</style>
