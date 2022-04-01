<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A long, straight wire of radius R carries a steady current I that is uniformly distributed through the cross section of the wire. Calculate the magnetic field a distance r from the center of the wire in the regions r &ge; R and r &le; R.

    .center
      img(src="../assets/fig30-13.png" height="250px" style="margin: 30px 0 0 0px;")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Displacement (in A)
    //-     input.center.data(:class="checkedDispl" v-model.number='enterDispl')
    //-     <span class="error" v-if="errorDispl">[e: {{ errorDispl.toPrecision(3) }}%]</span>
    //-   p.inline.data velocity ( in v<sub>max</sub>)
    //-     input.center.data(:class="checkedVelocity" v-model.number='enterVelocity')
    //-     <span class="error" v-if="errorVelocity">[e: {{ errorVelocity.toPrecision(3) }}%]</span>
    //-   p.inline.data Times in a period (times)
    //-     input.center.data(:class="checkedTimes" v-model.number='enterTimes')
    //-     <span class="error" v-if="errorTimes">[e: {{ errorTimes.toPrecision(3) }}%]</span>
    //-   p.inline.data Time between occurences (in T)
    //-     input.center.data(:class="checkedOccurrences" v-model.number='enterOccurrences')
    //-     <span class="error" v-if="errorOccurrences">[e: {{ errorOccurrences.toPrecision(3) }}%]</span>
    //-   p.inline.data Kinetic energy at A/2 (%)
    //-     input.center.data(:class="checkedKinetic" v-model.number='enterKinetic')
    //-     <span class="error" v-if="errorKinetic">[e: {{ errorKinetic.toPrecision(3) }}%]</span>
    //-   p.inline.data Potential energy at A/2 (%)
    //-     input.center.data(:class="checkedPotential" v-model.number='enterPotential')
    //-     <span class="error" v-if="errorPotential">[e: {{ errorPotential.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDispl: '',
      errorDispl: 0,
      enterVelocity: '',
      errorVelocity: 0,
      enterTimes: '',
      errorTimes: 0,
      enterOccurrences: '',
      errorOccurrences: 0,
      enterKinetic: '',
      errorKinetic: 0,
      enterPotential: '',
      errorPotential: 0
    }
  },
  computed: {
    checkedDispl: function () {
      console.clear()
      this.errorDispl = this.errorRelative('Displacement => ', Math.sqrt(2) / 2, parseFloat(this.enterDispl))
      return this.errorDispl < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedVelocity: function () {
      this.errorVelocity = this.errorRelative('Speed => ', Math.sqrt(2) / 2, parseFloat(this.enterVelocity))
      return this.errorVelocity < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTimes: function () {
      this.errorTimes = this.errorRelative('Times => ', 4, parseFloat(this.enterTimes))
      return this.errorTimes < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedOccurrences: function () {
      this.errorOccurrences = this.errorRelative('Occurrences => ', 0.25, parseFloat(this.enterOccurrences))
      return this.errorOccurrences < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedKinetic: function () {
      this.errorKinetic = this.errorRelative('Kinetic %=> ', 75, parseFloat(this.enterKinetic))
      return this.errorKinetic < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPotential: function () {
      this.errorPotential = this.errorRelative('Potential % => ', 25, parseFloat(this.enterPotential))
      return this.errorPotential < 1e-1 ? 'correct' : 'not-correct'
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
