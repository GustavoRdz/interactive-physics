<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem Find <br>(a) the equivalent capacitance of the capacitors shown in figure, <br>(b) the charge on each capacitor, and <br>(c) the potential difference across each capacitor.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Encuentre <br>(a) la capacitancia equivalente de los capacitores de la figura, <br>(b) la carga en cada capacitor y <br>(c) la diferencia de potencial a través de cada capacitor.
    .center
      img(src='../assets/figP26-18.png' height="300px" style="margin: -0px 0px 10px 0px;")

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Mass (kg)
    //-     input.center.data(:class="checkedMass" v-model.number='enterMass')
    //-   p.inline.data Length (m)
    //-     input.center.data(:class="checkedLength" v-model.number='enterLength')
    //-   p.inline.data Moment of inertia (kgm<sup>2</sup>)
    //-     input.center.data(:class="checkedInertia" v-model.number='enterInertia')
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Cycles (cycles)
    //-     input.center.data(:class="checkedCycles" v-model.number='enterCycles')
    //-   p.inline.data Class duration (s)
    //-     input.center.data(:class="checkedDuration" v-model.number='enterDuration')
    //-   p.inline.data class duration (hr)
    //-     input.center.data(:class="checkedDurationHr" v-model.number='enterDurationHr')

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterMass: '',
      enterLength: '',
      enterInertia: '',
      enterPeriod: '',
      enterCycles: '',
      enterDuration: '',
      enterDurationHr: ''
    }
  },
  computed: {
    mass: function () {
      let max = 150
      let min = 50
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    length: function () {
      let max = 20
      let min = 15
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    cycles: function () {
      let max = 7000
      let min = 5000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    inertia: function () {
      return ((1000 * (this.mass / 1000) * (this.length * this.length / 10000) / 3) / 1000).toPrecision(3)
    },
    period: function () {
      return Math.round(1000 * 2 * Math.PI * Math.sqrt(this.inertia / (9.81 * (this.mass / 1000) * (this.length / 100)))) / 1000
    },
    duration: function () {
      return Math.round(1000 * this.cycles * this.period) / 1000
    },
    durationHr: function () {
      return Math.round(1000 * this.duration / 3600) / 1000
    },
    checkedMass: function () {
      let check
      console.log('Mass : ' + (this.mass / 1000) + ' : ' + parseFloat(this.enterMass))
      check = this.mass / 1000 === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedLength: function () {
      let check
      console.log('Length : ' + Math.round(10 * this.length) / 1000 + ' : ' + parseFloat(this.enterLength))
      check = Math.round(1000 * this.length / 100) / 1000 === parseFloat(this.enterLength) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = parseFloat(this.inertia) === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedCycles: function () {
      let check
      console.log('Cycles : ' + this.cycles + ' : ' + parseFloat(this.enterCycles))
      check = this.cycles === parseFloat(this.enterCycles) ? 'correct' : 'not-correct'
      return check
    },
    checkedDuration: function () {
      let check
      console.log('Duration (s): ' + this.duration + ' : ' + parseFloat(this.enterDuration))
      check = this.duration === parseFloat(this.enterDuration) ? 'correct' : 'not-correct'
      return check
    },
    checkedDurationHr: function () {
      let check
      console.log('Duration (h)' + this.durationHr + ' : ' + parseFloat(this.enterDurationHr))
      check = parseFloat(this.durationHr) === parseFloat(this.enterDurationHr) ? 'correct' : 'not-correct'
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
  margin: 0;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
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
