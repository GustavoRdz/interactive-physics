<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A Styrofoam cooler has total wall area (including the lid) of {{ area }} m<sup>2</sup> and wall thickness {{ length*100 }} cm. It is filled with ice, water, and cans of beverage, all at 0°C. What is the rate of heat flow into the cooler if the temperature of the outside wall is {{ outTemp }}°C? How much ice melts in {{ time }} hours?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data k (W/mºC)
        input.center.data(:class="checkedK" v-model.number='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(2) }}%]</span>
      p.inline.data Area (m<sup>2</sup>)
        input.center.data(:class="checkedA" v-model.number='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(2) }}%]</span>
      p.inline.data Length (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(2) }}%]</span>
      p.inline.data Hot temp. (ºC)
        input.center.data(:class="checkedHT" v-model.number='enterHT')
        <span class="error" v-if="errorHT">[e: {{ errorHT.toPrecision(2) }}%]</span>
      p.inline.data Cold temp. (ºC)
        input.center.data(:class="checkedCT" v-model.number='enterCT')
        <span class="error" v-if="errorCT">[e: {{ errorCT.toPrecision(2) }}%]</span>
      p.inline.data Heat current (W)
        input.center.data(:class="checkedH" v-model.number='enterH')
        <span class="error" v-if="errorH">[e: {{ errorH.toPrecision(2) }}%]</span>
      p.inline.data Q<sub>{{ time }} hrs</sub> (J)
        input.center.data(:class="checkedQ" v-model.number='enterQ')
        <span class="error" v-if="errorQ">[e: {{ errorQ.toPrecision(2) }}%]</span>
      p.inline.data Mass melted (kg)
        input.center.data(:class="checkedMM" v-model.number='enterMM')
        <span class="error" v-if="errorMM">[e: {{ errorMM.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterK: '',
      errorK: 0,
      enterA: '',
      errorA: 0,
      enterL: '',
      errorL: 0,
      enterHT: '',
      errorHT: 0,
      enterCT: '',
      errorCT: 0,
      enterH: '',
      errorH: 0,
      enterQ: '',
      errorQ: 0,
      enterMM: '',
      errorMM: 0,
      k: 0.027,
      lv: 334000
    }
  },
  computed: {
    area: function () {
      console.clear()
      let max = 150
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    length: function () {
      let max = 5
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min) / 100
    },
    inTemp: function () {
      return 0
    },
    outTemp: function () {
      let max = 35
      let min = 25
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    time: function () {
      let max = 5
      let min = 2
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    heatFlow: function () {
      return this.k * this.area * (this.outTemp - this.inTemp) / this.length
    },
    energy: function () {
      return this.heatFlow * this.time * 3600
    },
    massMelted: function () {
      return this.energy / this.lv
    },
    checkedK: function () {
      this.errorK = this.errorRelative('Conductivity k => ', this.k, parseFloat(this.enterK))
      return this.errorK < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('Area => ', this.area, parseFloat(this.enterA))
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedL: function () {
      this.errorL = this.errorRelative('length => ', this.length, parseFloat(this.enterL))
      return this.errorL < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHT: function () {
      this.errorHT = this.errorRelative('Hot temp => ', this.outTemp, parseFloat(this.enterHT))
      return this.errorHT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCT: function () {
      this.errorCT = this.errorRelative('Cold temp => ', this.inTemp, parseFloat(this.enterCT))
      return this.errorCT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedH: function () {
      this.errorH = this.errorRelative('Ceat current => ', this.heatFlow, parseFloat(this.enterH))
      return this.errorH < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQ: function () {
      this.errorQ = this.errorRelative('Energy => ', this.energy, parseFloat(this.enterQ))
      return this.errorQ < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMM: function () {
      this.errorMM = this.errorRelative('Mass melted => ', this.massMelted, parseFloat(this.enterMM))
      return this.errorMM < 1e-1 ? 'correct' : 'not-correct'
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
  watch: {
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
