<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A 2.00-kg block is attached to a massless spring that has a force constant of k 5 25.0 N/m. The spring is stretched 0.400 m from its equilibrium position and released from rest. <br>(A) Find the total energy of the system and the frequency of oscillation according to classical calculations. (B) Assuming the energy of the oscillator is quantized, find the quantum number n for the system oscillating with this amplitude.

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Block mass (kg)
    //-     input.center.data(:class="checkedIncident" v-model.number='enterIncident')
    //-   p.inline.data Force const. (N/m)
    //-     input.center.data(:class="checkedAngleA" v-model.number='enterAngleA')
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAngleB" v-model.number='enterAngleB')
    //-   p.inline.data c) angle (degrees)
    //-     input.center.data(:class="checkedAngleC" v-model='enterAngleC')
    //-   p.inline.data Max. deviation: a, b or c?
    //-     input.center.data(:class="checkedDev" v-model='enterDev')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterIncident: '',
      enterAngleA: '',
      enterAngleB: '',
      enterAngleC: '',
      enterDev: '',
      materials: [
        {material: 'Cubic zirconia', index: 2.20},
        {material: 'Benzene', index: 1.501},
        {material: 'Diamond (C)', index: 2.419},
        {material: 'Carbon disulfide', index: 1.628},
        {material: 'Fluorite (CaF2)', index: 1.434},
        {material: 'Carbon tetrachloride', index: 1.461},
        {material: 'Fused quartz (SiO2)', index: 1.458},
        {material: 'Ethyl alcohol', index: 1.361},
        {material: 'Gallium phosphide', index: 3.50},
        {material: 'Glycerin', index: 1.473},
        {material: 'Glass, crown', index: 1.52},
        {material: 'Water', index: 1.333},
        {material: 'Glass, flint', index: 1.66},
        {material: 'Ice (H2O)', index: 1.309},
        {material: 'Polystyrene', index: 1.49},
        {material: 'Air', index: 1.000},
        {material: 'Sodium chloride (NaCl)', index: 1.544},
        {material: 'Carbon dioxide', index: 1.000}
      ],
      row: [],
      angles: []
    }
  },
  computed: {
    incident: function () {
      let max = 70
      let min = 20
      return (Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    materialIndex: function () {
      for (let i = 0; i < 18; i++) {
        let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        for (let j = 0; j < 4; j++) {
          // console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + this.row)
          let index = Math.floor(Math.random() * data.length)
          // console.log('index: ' + index)
          this.row[j] = data.slice(index, index + 1)[0]
          data.splice(index, 1)
          // console.log('row[j]: ' + this.row[j])
          // console.log('data: ' + data)
        }
      }
      return this.row
    },
    transmitted: function () {
      for (let i = 0; i < 3; i++) {
        this.angles[i] = Math.round(1000 * 180 * (Math.asin(Math.sin(this.incident * Math.PI / 180) / this.materials[this.materialIndex[i]].index)) / Math.PI) / 1000
      }
      return this.angles
    },
    deviation: function () {
      let dev = 0
      let op = ['a', 'b', 'c']
      for (let i = 0; i < 3; i++) {
        if (this.materials[this.materialIndex[i]].index > this.materials[this.materialIndex[dev]].index) {
          dev = i
        }
      }
      return op[dev]
    },
    checkedIncident: function () {
      let check
      console.log('Incident => ' + this.incident + ' : ' + parseFloat(this.enterIncident))
      check = this.incident === parseFloat(this.enterIncident) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngleA: function () {
      let check
      console.log('AngleA => ' + this.transmitted[0] + ' : ' + parseFloat(this.enterAngleA))
      check = this.transmitted[0] === parseFloat(this.enterAngleA) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngleB: function () {
      let check
      console.log('AngelB=> ' + this.transmitted[1] + ' : ' + parseFloat(this.enterAngleB))
      check = this.transmitted[1] === parseFloat(this.enterAngleB) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngleC: function () {
      let check
      console.log('AngleC => ' + this.transmitted[2] + ' : ' + parseFloat(this.enterAngleC))
      check = this.transmitted[2] === parseFloat(this.enterAngleC) ? 'correct' : 'not-correct'
      return check
    },
    checkedDev: function () {
      let check
      console.log('Max deviation => ' + this.deviation + ' : ' + this.enterDev)
      check = this.deviation === this.enterDev ? 'correct' : 'not-correct'
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
  width: 95%;
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
