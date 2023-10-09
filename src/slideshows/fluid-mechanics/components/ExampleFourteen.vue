<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem Incompressible oil of density {{ oilDensity }} kg/m<sup>3</sup> is pumped through a cylindrical pipe at a rate of {{ flowRate }} liters per second.
    //- p.problem a) The first section of the pipe has diameter of {{ firstDiameter }} cm. What is the flow speed of the oil? What is the mass flow rate?
    //- p.problem b) The second section of the pipe has a diameter of {{ secondDiameter }} cm. What are the flow speed and mass flow rate in that section?

    p.problem Se bombea aceite incompresible de densidad {{ oilDensity }} kg/m<sup>3</sup> a través de una tubería cilíndrica a una velocidad de {{ flowRate }} litros por segundo.
    p.problem a) La primera sección de la tubería tiene un diámetro de {{ firstDiameter }} cm. ¿Cuál es la velocidad del flujo del aceite? ¿Cuál es el caudal másico?
    p.problem b) La segunda sección de la tubería tiene un diámetro de {{ secondDiameter }} cm. ¿Cuáles son la velocidad del flujo y el caudal másico en esa sección?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedRhoFluid" v-model.number='enterRhoFluid')
        <span class="error" v-if="errorRhoFluid">[e: {{ errorRhoFluid.toPrecision(2) }}%]</span>
      p.inline.data Flow rate (m<sup>3</sup>/s)
        input.center.data(:class="checkedFlowRate" v-model.number='enterFlowRate')
        <span class="error" v-if="errorFlowRate">[e: {{ errorFlowRate.toPrecision(2) }}%]</span>
      p.inline.data First area (m<sup>2</sup>)
        input.center.data(:class="checkedFirstArea" v-model.number='enterFirstArea')
        <span class="error" v-if="errorFirstArea">[e: {{ errorFirstArea.toPrecision(2) }}%]</span>
      p.inline.data a) Oil speed (m/s)
        input.center.data(:class="checkedFirstOilSpeed" v-model.number='enterFirstOilSpeed')
        <span class="error" v-if="errorFirstOilSpeed">[e: {{ errorFirstOilSpeed.toPrecision(2) }}%]</span>
      p.inline.data a) Mass flow rate (kg/s)
        input.center.data(:class="checkedFirstMassFlowRate" v-model.number='enterFirstMassFlowRate')
        <span class="error" v-if="errorFirstMassFlowRate">[e: {{ errorFirstMassFlowRate.toPrecision(2) }}%]</span>
      p.inline.data Second Area (m<sup>2</sup>)
        input.center.data(:class="checkedSecondArea" v-model.number='enterSecondArea')
        <span class="error" v-if="errorSecondArea">[e: {{ errorSecondArea.toPrecision(2) }}%]</span>
      p.inline.data b) Oil speed (m/s)
        input.center.data(:class="checkedSecondOilSpeed" v-model.number='enterSecondOilSpeed')
        <span class="error" v-if="errorSecondOilSpeed">[e: {{ errorSecondOilSpeed.toPrecision(2) }}%]</span>
      p.inline.data b) mass flow rate (kg/s)
        input.center.data(:class="checkedSecondMassFlowRate" v-model.number='enterSecondMassFlowRate')
        <span class="error" v-if="errorSecondMassFlowRate">[e: {{ errorSecondMassFlowRate.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterRhoFluid: '',
      errorRhoFluid: 0,
      enterFlowRate: '',
      errorFlowRate: 0,
      enterFirstArea: '',
      errorFirstArea: 0,
      enterFirstOilSpeed: '',
      errorFirstOilSpeed: 0,
      enterFirstMassFlowRate: '',
      errorFirstMassFlowRate: 0,
      enterSecondArea: '',
      errorSecondArea: 0,
      enterSecondOilSpeed: '',
      errorSecondOilSpeed: 0,
      enterSecondMassFlowRate: '',
      errorSecondMassFlowRate: 0
    }
  },
  computed: {
    oilDensity: function () {
      console.clear()
      let max = 990
      let min = 750
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    flowRate: function () {
      let max = 120
      let min = 60
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    firstDiameter: function () {
      let max = 120
      let min = 60
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    secondDiameter: function () {
      let max = 120
      let min = 60
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    flowRateSI: function () {
      return this.flowRate * 1e-3
    },
    firstArea: function () {
      return Math.PI * Math.pow(this.firstDiameter / 200, 2)
    },
    firstOilSpeed: function () {
      return this.flowRateSI / this.firstArea
    },
    firstMassFlowRate: function () {
      return this.oilDensity * this.flowRateSI
    },
    secondArea: function () {
      return Math.PI * Math.pow(this.secondDiameter / 200, 2)
    },
    secondOilSpeed: function () {
      return this.firstOilSpeed * this.firstArea / this.secondArea
    },
    secondMassFlowRate: function () {
      return this.oilDensity * this.flowRateSI
    },
    checkedRhoFluid: function () {
      this.errorRhoFluid = this.errorRelative('Fluid density => ', this.oilDensity, parseFloat(this.enterRhoFluid))
      return this.errorRhoFluid < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFlowRate: function () {
      this.errorFlowRate = this.errorRelative('Flow reate SI => ', this.flowRateSI, parseFloat(this.enterFlowRate))
      return this.errorFlowRate < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFirstArea: function () {
      this.errorFirstArea = this.errorRelative('First area => ', this.firstArea, parseFloat(this.enterFirstArea))
      return this.errorFirstArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFirstOilSpeed: function () {
      this.errorFirstOilSpeed = this.errorRelative('Oil first speed => ', this.firstOilSpeed, parseFloat(this.enterFirstOilSpeed))
      return this.errorFirstOilSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFirstMassFlowRate: function () {
      this.errorFirstMassFlowRate = this.errorRelative('First mass flow rate => ', this.firstMassFlowRate, parseFloat(this.enterFirstMassFlowRate))
      return this.errorFirstMassFlowRate < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSecondArea: function () {
      this.errorSecondArea = this.errorRelative('Second area => ', this.secondArea, parseFloat(this.enterSecondArea))
      return this.errorSecondArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSecondOilSpeed: function () {
      this.errorSecondOilSpeed = this.errorRelative('Second oil speed => ', this.secondOilSpeed, parseFloat(this.enterSecondOilSpeed))
      return this.errorSecondOilSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSecondMassFlowRate: function () {
      this.errorSecondMassFlowRate = this.errorRelative('Second flow rate => ', this.secondMassFlowRate, parseFloat(this.enterSecondMassFlowRate))
      return this.errorSecondMassFlowRate < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    errorRelative: function (comment, A, x) {
      let relativeError
      relativeError = 100 * Math.abs((A - x) / (A + Number.MIN_VALUE))
      console.log(comment + A + ' : ' + x + ' ==> ' + 'error  ' + relativeError + ' %')
      return relativeError
    }
  },
  mixins: [eagle.slide]
}
</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 60%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
.error {
  font-size: 14px;
}
</style>
