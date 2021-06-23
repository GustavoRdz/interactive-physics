<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem The density of an iceberg floating in the sea is {{ rhoObject }} kg/m<sup>3</sup>. The density of seawater is {{ rhoFluid }} kg/m<sup>3</sup> with a salient volume of {{ volumeAbove }} m<sup>3</sup>. What is the total mass of the iceberg? What fraction of the iceberg lies below the water level?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>solid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedRhoSolid" v-model.number='enterRhoSolid')
        <span class="error" v-if="errorRhoSolid">[e: {{ errorRhoSolid.toPrecision(2) }}%]</span>
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>fluid</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedRhoFluid" v-model.number='enterRhoFluid')
        <span class="error" v-if="errorRhoFluid">[e: {{ errorRhoFluid.toPrecision(2) }}%]</span>
      p.inline.data V<sub>salient</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedSalientVolume" v-model.number='enterSalientVolume')
        <span class="error" v-if="errorSalientVolume">[e: {{ errorSalientVolume.toPrecision(2) }}%]</span>
      p.inline.data V<sub>inmmersed</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedInmmersedVolume" v-model.number='enterInmmersedVolume')
        <span class="error" v-if="errorInmmersedVolume">[e: {{ errorInmmersedVolume.toPrecision(2) }}%]</span>
      p.inline.data V<sub>solid</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedSolidVolume" v-model.number='enterSolidVolume')
        <span class="error" v-if="errorSolidVolume">[e: {{ errorSolidVolume.toPrecision(2) }}%]</span>
      p.inline.data m<sub>solid </sub> (kg)
        input.center.data(:class="checkedSolidMass" v-model.number='enterSolidMass')
        <span class="error" v-if="errorSolidMass">[e: {{ errorSolidMass.toPrecision(2) }}%]</span>
      p.inline.data %<sub>inmmersed</sub>
        input.center.data(:class="checkedInmmersedRatio" v-model.number='enterInmmersedRatio')
        <span class="error" v-if="errorInmmersedRatio">[e: {{ errorInmmersedRatio.toPrecision(2) }}%]</span>
      p.inline.data 100 x (<span style="font-family: times new roman; font-style: italic; font-size: 20px">&#x03c1;</span><sub style="font-size: 15px">solid</sub>/<span style="font-family: times new roman; font-style: italic; font-size: 20px;">&#x03c1;</span><sub style="font-size: 15px">fluid</sub>)
        input.center.data(:class="checkedRatio" v-model.number='enterRatio')
        <span class="error" v-if="errorRatio">[e: {{ errorRatio.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterRhoSolid: '',
      errorRhoSolid: 0,
      enterRhoFluid: '',
      errorRhoFluid: 0,
      enterSalientVolume: '',
      errorSalientVolume: 0,
      enterInmmersedVolume: '',
      errorInmmersedVolume: 0,
      enterSolidVolume: '',
      errorSolidVolume: 0,
      enterSolidMass: '',
      errorSolidMass: 0,
      enterInmmersedRatio: '',
      errorInmmersedRatio: 0,
      enterRatio: ''
    }
  },
  computed: {
    rhoObject: function () {
      console.clear()
      let max = 950
      let min = 850
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    rhoFluid: function () {
      let max = 1040
      let min = 1020
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    volumeAbove: function () {
      let max = 100
      let min = 1
      return 1e6 * (Math.floor(Math.random() * (max - min + 1) + min)) / 10
    },
    volumeBelow: function () {
      return this.volumeAbove * this.rhoObject / (this.rhoFluid - this.rhoObject)
    },
    solidVolume: function () {
      return this.volumeAbove + this.volumeBelow
    },
    solidMass: function () {
      return this.solidVolume * this.rhoObject
    },
    inmmersedRatio: function () {
      return 100 * this.rhoObject / this.rhoFluid
    },
    checkedRhoSolid: function () {
      this.errorRhoSolid = this.errorRelative('Iceberg solid => ', this.rhoObject, parseFloat(this.enterRhoSolid))
      return this.errorRhoSolid < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRhoFluid: function () {
      this.errorRhoFluid = this.errorRelative('Fluid density => ', this.rhoFluid, parseFloat(this.enterRhoFluid))
      return this.errorRhoFluid < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSalientVolume: function () {
      this.errorSalientVolume = this.errorRelative('Salient volume => ', this.volumeAbove, parseFloat(this.enterSalientVolume))
      return this.errorSalientVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInmmersedVolume: function () {
      this.errorInmmersedVolume = this.errorRelative('Inmmersed volume => ', this.volumeBelow, parseFloat(this.enterInmmersedVolume))
      return this.errorInmmersedVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSolidVolume: function () {
      this.errorSolidVolume = this.errorRelative('Iceberg volume => ', this.solidVolume, parseFloat(this.enterSolidVolume))
      return this.errorSolidVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSolidMass: function () {
      this.errorSolidMass = this.errorRelative('Iceberg mass => ', this.solidMass, parseFloat(this.enterSolidMass))
      return this.errorSolidMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInmmersedRatio: function () {
      this.errorInmmersedRatio = this.errorRelative('Inmmersed part => ', this.inmmersedRatio, parseFloat(this.enterInmmersedRatio))
      return this.errorInmmersedRatio < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRatio: function () {
      this.errorRatio = this.errorRelative('Density ratio => ', this.inmmersedRatio, parseFloat(this.enterRatio))
      return this.errorRatio < 1e-1 ? 'correct' : 'not-correct'
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 22px;
  color: blue;
  width: 100%;
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
