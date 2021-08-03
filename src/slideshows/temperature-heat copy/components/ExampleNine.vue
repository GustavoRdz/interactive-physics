<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A glass containing {{ wMass }} kg of a beverage (mostly water) initially at {{ wTemp }} &#x00B0;C. How much ice, initially at {{ iTemp }}&#x00B0;C, must you add to obtain a final temperature of {{ fTemp }}&#x00B0;C with all ice melted? Neglect the heat capacity of glass

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Water <b>mass</b> (kg)
        input.center.data(:class="checkedWM" v-model.number='enterWM')
        <span class="error" v-if="errorWM">[e: {{ errorWM.toPrecision(2) }}%]</span>
      p.inline.data Water <b>Temp</b> (&#x00B0;C)
        input.center.data(:class="checkedWT" v-model.number='enterWT')
        <span class="error" v-if="errorWT">[e: {{ errorWT.toPrecision(2) }}%]</span>
      p.inline.data Ice <b>Temp</b> (&#x00B0;C)
        input.center.data(:class="checkedIT" v-model.number='enterIT')
        <span class="error" v-if="errorIT">[e: {{ errorIT.toPrecision(2) }}%]</span>
      p.inline.data water <b>c</b> (J/kgºC)
        input.center.data(:class="checkedWc" v-model.number='enterWc')
        <span class="error" v-if="errorWc">[e: {{ errorWc.toPrecision(2) }}%]</span>
      p.inline.data ice <b>c</b> (J/kgºC)
        input.center.data(:class="checkedIc" v-model.number='enterIc')
        <span class="error" v-if="errorIc">[e: {{ errorIc.toPrecision(2) }}%]</span>
      p.inline.data Water <b>L<sub>f</sub></b> (J/kg)
        input.center.data(:class="checkedLf" v-model.number='enterLf')
        <span class="error" v-if="errorLf">[e: {{ errorLf.toPrecision(2) }}%]</span>
      p.inline.data Ice <b>mass</b>(kg)
        input.center.data(:class="checkedIM" v-model.number='enterIM')
        <span class="error" v-if="errorIM">[e: {{ errorIM.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterWM: '',
      errorWM: 0,
      enterWT: '',
      errorWT: 0,
      enterIT: '',
      errorIT: 0,
      enterWc: '',
      errorWc: 0,
      enterIc: '',
      errorIc: 0,
      enterLf: '',
      errorLf: 0,
      enterIM: '',
      errorIM: 0,
      wC: 4190,
      iC: 2100,
      lF: 334000
    }
  },
  computed: {
    wMass: function () {
      console.clear()
      let max = 400
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    wTemp: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    iTemp: function () {
      let max = 30
      let min = 15
      return -Math.floor(Math.random() * (max - min + 1) + min)
    },
    fTemp: function () {
      return 0
    },
    iMass: function () {
      return -this.wMass * this.wC * (this.fTemp - this.wTemp) / (this.iC * (this.fTemp - this.iTemp) + this.lF)
    },
    checkedWM: function () {
      this.errorWM = this.errorRelative('Water mass => ', this.wMass, parseFloat(this.enterWM))
      return this.errorWM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWT: function () {
      this.errorWT = this.errorRelative('Water temp. => ', this.wTemp, parseFloat(this.enterWT))
      return this.errorWT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedIT: function () {
      this.errorIT = this.errorRelative('Ice temp. => ', this.iTemp, parseFloat(this.enterIT))
      return this.errorIT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedWc: function () {
      this.errorWc = this.errorRelative('Water c => ', this.wC, parseFloat(this.enterWc))
      return this.errorWc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedIc: function () {
      this.errorIc = this.errorRelative('Ice c => ', this.iC, parseFloat(this.enterIc))
      return this.errorIc < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLf: function () {
      this.errorLf = this.errorRelative('water Lf => ', this.lF, parseFloat(this.enterLf))
      return this.errorLf < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedIM: function () {
      this.errorIM = this.errorRelative('Ice mass => ', this.iMass, parseFloat(this.enterIM))
      return this.errorIM < 1e-1 ? 'correct' : 'not-correct'
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
