<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A long solenoid of radius R has n turns of wire per unit length and carries a time-varying current that varies sinusoidally as I = I<sub>max</sub> cos &omega;t, where I<sub>max</sub> is the maximum current and v is the angular frequency of the alternating current source.<br>(A) Determine the magnitude of the induced electric field outside the solenoid at a distance r &gt; R from its long central axis.<br>(B) What is the magnitude of the induced electric field inside the solenoid, a distance r from its axis?

    .center
      //- img(src="../assets/fig31-16.png")

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Chair mass (kg)
    //-     input.center.data(:class="checkedChairMass" v-model.number='enterChairMass')
    //-     <span class="error" v-if="errorChairMass">[e: {{ errorChairMass.toPrecision(3) }}%]</span>
    //-   p.inline.data Empty chair period (s)
    //-     input.center.data(:class="checkedEmptyPeriod" v-model.number='enterEmptyPeriod')
    //-     <span class="error" v-if="errorEmptyPeriod">[e: {{ errorEmptyPeriod.toPrecision(3) }}%]</span>
    //-   p.inline.data chair angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular1" v-model.number='enterAngular1')
    //-     <span class="error" v-if="errorAngular1">[e: {{ errorAngular1.toPrecision(3) }}%]</span>
    //-   p.inline.data Spring constant (N/m)
    //-     input.center.data(:class="checkedElastic" v-model.number='enterElastic')
    //-     <span class="error" v-if="errorElastic">[e: {{ errorElastic.toPrecision(3) }}%]</span>
    //-   <br>
    //-   p.inline.data Occupied chair period (s)
    //-     input.center.data(:class="checkedOccupiedPeriod" v-model.number='enterOccupiedPeriod')
    //-     <span class="error" v-if="errorOccupiedPeriod">[e: {{ errorOccupiedPeriod.toPrecision(3) }}%]</span>
    //-   p.inline.data chair + astronaut &omega; (rad/s)
    //-     input.center.data(:class="checkedAngular2" v-model.number='enterAngular2')
    //-     <span class="error" v-if="errorAngular2">[e: {{ errorAngular2.toPrecision(3) }}%]</span>
    //-   p.inline.data Astronaut mass (kg)
    //-     input.center.data(:class="checkedAstronautMass" v-model='enterAstronautMass')
    //-     <span class="error" v-if="errorAstronautMass">[e: {{ errorAstronautMass.toPrecision(3) }}%]</span>


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterChairMass: '',
      errorChairMass: 0,
      enterEmptyPeriod: '',
      errorEmptyPeriod: 0,
      enterElastic: '',
      errorElastic: 0,
      enterAngular1: '',
      errorAngular1: 0,
      enterOccupiedPeriod: '',
      errorOccupiedPeriod: 0,
      enterAngular2: '',
      errorAngular2: 0,
      enterAstronautMass: '',
      errorAstronautMass: 0
    }
  },
  computed: {
    chairMass: function () {
      console.clear()
      let max = 30
      let min = 20
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    emptyPeriod: function () {
      let max = 2
      let min = 1
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    occupiedPeriod: function () {
      let max = 2 * this.emptyPeriod
      let min = Math.sqrt(2) * this.emptyPeriod
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    angular1: function () {
      return Math.PI / this.emptyPeriod
    },
    elasticK: function () {
      return this.chairMass * Math.pow(this.angular1, 2)
    },
    angular2: function () {
      return Math.PI / this.occupiedPeriod
    },
    astronautMass: function () {
      return this.elasticK / Math.pow(this.angular2, 2) - this.chairMass
    },
    checkedChairMass: function () {
      this.errorChairMass = this.errorRelative('Chair mass => ', this.chairMass, parseFloat(this.enterChairMass))
      return this.errorChairMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedEmptyPeriod: function () {
      this.errorEmptyPeriod = this.errorRelative('Empty chair period => ', this.enterEmptyPeriod, parseFloat(this.enterEmptyPeriod))
      return this.errorEmptyPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular1: function () {
      this.errorAngular1 = this.errorRelative('Omega empty chair=> ', this.angular1, parseFloat(this.enterAngular1))
      return this.errorAngular1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedElastic: function () {
      this.errorElastic = this.errorRelative('K => ', this.elasticK, parseFloat(this.enterElastic))
      return this.errorElastic < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOccupiedPeriod: function () {
      this.errorOccupiedPeriod = this.errorRelative('Perido occupied chair => ', this.occupiedPeriod, parseFloat(this.enterOccupiedPeriod))
      return this.errorOccupiedPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular2: function () {
      this.errorAngular2 = this.errorRelative('Omega occupied chair => ', this.angular2, parseFloat(this.enterAngular2))
      return this.errorAngular2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAstronautMass: function () {
      this.errorAstronautMass = this.errorRelative('Astronaut mass => ', this.astronautMass, parseFloat(this.enterAstronautMass))
      return this.errorAstronautMass < 1e-1 ? 'correct' : 'not-correct'
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
.error {
  font-size: 14px;
}
</style>
