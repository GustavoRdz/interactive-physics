<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Incompressible oil of density {{ oilDensity }} kg/m<sup>3</sup> is pumped through a cylindrical pipe at a rate of {{ flowRate }} liters per second.
    p.problem a) The first section of the pipe has diameter of {{ firstDiameter }} cm. What is the flow speed of the oil? What is the mass flow rate?
    p.problem b) The second section of the pipe has a diameter of {{ secondDiameter }} cm. What are the flow speed and mass flow rate in that section?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserRhoFluid" v-model.number='userRhoFluid')
      p.inline.data Flow rate (m<sup>3</sup>/s)
        input.center.data(:class="checkedUserFlowRate" v-model.number='userFlowRate')
      p.inline.data First area (m<sup>2</sup>)
        input.center.data(:class="checkedUserFirstArea" v-model.number='userFirstArea')
      p.inline.data a) Oil speed (m/s)
        input.center.data(:class="checkedUserFirstOilSpeed" v-model.number='userFirstOilSpeed')
      p.inline.data a) Mass flow rate (kg/s)
        input.center.data(:class="checkedUserFirstMassFlowRate" v-model.number='userFirstMassFlowRate')
      p.inline.data Second Area (m<sup>2</sup>)
        input.center.data(:class="checkedUserSecondArea" v-model.number='userSecondArea')
      p.inline.data b) Oil speed (m/s)
        input.center.data(:class="checkedUserSecondOilSpeed" v-model.number='userSecondOilSpeed')
      p.inline.data b) mass flow rate (kg/s)
        input.center.data(:class="checkedUserSecondMassFlowRate" v-model.number='userSecondMassFlowRate')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userRhoFluid: '',
      userFlowRate: '',
      userFirstArea: '',
      userFirstOilSpeed: '',
      userFirstMassFlowRate: '',
      userSecondArea: '',
      userSecondOilSpeed: '',
      userSecondMassFlowRate: ''
    }
  },
  computed: {
    oilDensity: function () {
      let max = 990
      let min = 750
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    flowRate: function () {
      let max = 120
      let min = 60
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    firstDiameter: function () {
      let max = 120
      let min = 60
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    secondDiameter: function () {
      let max = 120
      let min = 60
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    flowRateSI: function () {
      return Number(this.flowRate * 1e-3).toPrecision(3)
    },
    firstArea: function () {
      return Number(Math.PI * Math.pow(this.firstDiameter / 200, 2)).toPrecision(3)
    },
    firstOilSpeed: function () {
      return Math.round(1000 * this.flowRateSI / this.firstArea) / 1000
    },
    firstMassFlowRate: function () {
      return Math.round(1000 * this.oilDensity * this.flowRateSI) / 1000
    },
    secondArea: function () {
      return Number(Math.PI * Math.pow(this.secondDiameter / 200, 2)).toPrecision(3)
    },
    secondOilSpeed: function () {
      return Math.round(1000 * this.firstOilSpeed * this.firstArea / this.secondArea) / 1000
    },
    secondMassFlowRate: function () {
      return Math.round(1000 * this.oilDensity * this.flowRateSI) / 1000
    },
    checkedUserRhoFluid: function () {
      let check
      console.log(this.oilDensity + ' : ' + parseFloat(this.userRhoFluid))
      check = this.oilDensity === parseFloat(this.userRhoFluid) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFlowRate: function () {
      let check
      console.log(this.flowRateSI + ' : ' + parseFloat(this.userFlowRate))
      check = parseFloat(this.flowRateSI) === parseFloat(this.userFlowRate) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFirstArea: function () {
      let check
      console.log(this.firstArea + ' : ' + parseFloat(this.userFirstArea))
      check = parseFloat(this.firstArea) === parseFloat(this.userFirstArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFirstOilSpeed: function () {
      let check
      console.log(this.firstOilSpeed + ' : ' + parseFloat(this.userFirstOilSpeed))
      check = parseFloat(this.firstOilSpeed) === parseFloat(this.userFirstOilSpeed) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFirstMassFlowRate: function () {
      let check
      console.log(this.firstMassFlowRate + ' : ' + parseFloat(this.userFirstMassFlowRate))
      check = parseFloat(this.firstMassFlowRate) === parseFloat(this.userFirstMassFlowRate) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSecondArea: function () {
      let check
      console.log(this.secondArea + ' : ' + parseFloat(this.userSecondArea))
      check = parseFloat(this.secondArea) === parseFloat(this.userSecondArea) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSecondOilSpeed: function () {
      let check
      console.log(this.secondOilSpeed + ' : ' + parseFloat(this.userSecondOilSpeed))
      check = parseFloat(this.secondOilSpeed) === parseFloat(this.userSecondOilSpeed) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserSecondMassFlowRate: function () {
      let check
      console.log(this.secondMassFlowRate + ' : ' + parseFloat(this.userSecondMassFlowRate))
      check = parseFloat(this.secondMassFlowRate) === parseFloat(this.userSecondMassFlowRate) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 80%;
      margin-left: 10%;
    }
  }
}

.data {
  display: inline-block;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
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
