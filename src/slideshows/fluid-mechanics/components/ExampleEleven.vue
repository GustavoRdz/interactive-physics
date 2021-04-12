<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem It is suspected that a piece of pure gold has a bubble in its center. Its weight in air is {{ airWeight  }} N and in water of {{ waterWeight }} N, what is the volume of the bubble?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Weight in air (N)
        input.center.data(:class="checkedWAir" v-model.number='enterWAir')
        <span class="error" v-if="errorWAir">[e: {{ errorWAir.toPrecision(2) }}%]</span>
      p.inline.data  Weight in water (N)
        input.center.data(:class="checkedWWater" v-model.number='enterWWater')
        <span class="error" v-if="errorWWater">[e: {{ errorWWater.toPrecision(2) }}%]</span>
      p.inline.data Bouyant force (N)
        input.center.data(:class="checkedBouyant" v-model.number='enterBouyant')
        <span class="error" v-if="errorBouyant">[e: {{ errorBouyant.toPrecision(2) }}%]</span>
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>gold</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedGoldDensity" v-model.number='enterGoldDensity')
        <span class="error" v-if="errorGoldDensity">[e: {{ errorGoldDensity.toPrecision(2) }}%]</span>
      p.inline.data V<sub>gold</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedGoldVolume" v-model.number='enterGoldVolume')
        <span class="error" v-if="errorGoldVolume">[e: {{ errorGoldVolume.toPrecision(2) }}%]</span>
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>displaced </sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedDensity" v-model.number='enterDensity')
        <span class="error" v-if="errorDensity">[e: {{ errorDensity.toPrecision(2) }}%]</span>
      p.inline.data V<sub>displaced</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedDisplacedVolume" v-model.number='enterDisplacedVolume')
        <span class="error" v-if="errorDisplacedVolume">[e: {{ errorDisplacedVolume.toPrecision(2) }}%]</span>
      p.inline.data Bubble volume (m<sup>3</sup>)
        input.center.data(:class="checkedBubbleVolume" v-model.number='enterBubbleVolume')
        <span class="error" v-if="errorBubbleVolume">[e: {{ errorBubbleVolume.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterWAir: '',
      errorWAir: 0,
      enterWWater: '',
      errorWWater: 0,
      enterBouyant: '',
      errorBouyant: 0,
      enterGoldVolume: '',
      errorGoldVolume: 0,
      enterDisplacedVolume: '',
      errorDisplacedVolume: 0,
      enterGoldDensity: '',
      errorGoldDensity: 0,
      enterDensity: '',
      errorDensity: 0,
      enterBubbleVolume: '',
      errorBubbleVolume: 0,
      g: 9.81,
      goldRho: 19300,
      rho: 1000
    }
  },
  computed: {
    airWeight: function () {
      console.clear()
      let max = 500
      let min = 450
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    waterWeight: function () {
      let max = 400
      let min = 300
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    bouyant: function () {
      return this.airWeight - this.waterWeight
    },
    goldVolume: function () {
      return this.airWeight / (this.goldRho * this.g)
    },
    displacedVolume: function () {
      return this.bouyant / (this.rho * this.g)
    },
    bubbleVolume: function () {
      return this.displacedVolume - this.goldVolume
    },
    cheat: function () {
      return this.bouyant === this.realGoldBouyant
    },
    checkedWAir: function () {
      this.errorWAir = this.errorRelative('Weight in air => ', this.airWeight, parseFloat(this.enterWAir))
      return this.errorWAir < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWWater: function () {
      this.errorWWater = this.errorRelative('Weight in water => ', this.waterWeight, parseFloat(this.enterWWater))
      return this.errorWWater < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBouyant: function () {
      this.errorBouyant = this.errorRelative('Bouyant force => ', this.bouyant, parseFloat(this.enterBouyant))
      return this.errorBouyant < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGoldDensity: function () {
      this.errorGoldDensity = this.errorRelative('Gold density => ', this.goldRho, parseFloat(this.enterGoldDensity))
      return this.errorGoldDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedGoldVolume: function () {
      this.errorGoldVolume = this.errorRelative('Gold volume => ', this.goldVolume, parseFloat(this.enterGoldVolume))
      return this.errorGoldVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDensity: function () {
      this.errorDensity = this.errorRelative('Fluid density => ', this.rho, parseFloat(this.enterDensity))
      return this.errorDensity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDisplacedVolume: function () {
      this.errorDisplacedVolume = this.errorRelative('Displaced volume => ', this.displacedVolume, parseFloat(this.enterDisplacedVolume))
      return this.errorDisplacedVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBubbleVolume: function () {
      this.errorBubbleVolume = this.errorRelative('Bubble volume => ', this.bubbleVolume, parseFloat(this.enterBubbleVolume))
      return this.errorBubbleVolume < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedUserCheat: function () {
      let check
      let cheat = this.cheat ? 'false' : 'true'
      console.log(this.cheat + ' : ' + this.userCheat)
      console.log(cheat)
      console.log(this.userCheat)
      console.log('Bouyant: ' + this.bouyant + ' : ' + this.realGoldBouyant)
      check = cheat === this.userCheat ? 'correct' : 'not-correct'
      return check
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
