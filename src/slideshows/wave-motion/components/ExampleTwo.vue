<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem A uniform string has a mass of {{ stringMass }} kg and a length of {{ length }} m. The string passes over a pulley and supports a {{ blockMass }}-kg object. Find the speed of a pulse traveling along this string.
      .center
        img(src='../assets/problem2.png' height="200px")
        p.solution Please do calculations and introduce your results
        p.inline.data String mass (kg)
          input.center.data(:class="checkedStringMass" v-model.number='enterStringMass')
        p.inline.data Length (m)
          input.center.data(:class="checkedLength" v-model.number='enterLength')
        p.inline.data Block mass (Kg)
          input.center.data(:class="checkedBlockMass" v-model.number='enterBlockMass')
        p.inline.data linear density (kg/m)
          input.center.data(:class="checkedDensity" v-model='enterDensity')
        p.inline.data String tension (N/m)
          input.center.data(:class="checkedTension" v-model='enterTension')
        p.inline.data Speed (m/s)
          input.center.data(:class="checkedSpeed" v-model='enterSpeed')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterStringMass: '',
      enterLength: '',
      enterBlockMass: '',
      enterDensity: '',
      enterTension: '',
      enterSpeed: ''
    }
  },
  computed: {
    stringMass: function () {
      let max = 5
      let min = 1
      return Math.floor(10 * (Math.random() * (max - min + 1) + min)) / 100
    },
    length: function () {
      let max = 2
      let min = 1
      return Math.floor(100 * (Math.random() * (max - min + 1) + min)) / 100
    },
    blockMass: function () {
      let max = 10
      let min = 2
      return Math.floor(100 * Math.random() * (max - min + 1) + min) / 100
    },
    density: function () {
      return Math.round(1000 * this.stringMass / this.length) / 1000
    },
    tension: function () {
      return Math.round(1000 * this.blockMass * 9.81) / 1000
    },
    speed: function () {
      return Math.round(1000 * Math.sqrt(this.tension / this.density)) / 1000
    },
    checkedForce: function () {
      let check
      console.log('Force => ' + this.force + ' : ' + parseFloat(this.enterForce))
      check = this.force === parseFloat(this.enterForce) ? 'correct' : 'not-correct'
      return check
    },
    checkedDis: function () {
      let check
      console.log('Displacement => ' + this.displacement + ' : ' + parseFloat(this.enterDisp))
      check = this.displacement === parseFloat(this.enterDisp) ? 'correct' : 'not-correct'
      return check
    },
    checkedStringMass: function () {
      let check
      console.log('String mass => ' + this.stringMass + ' : ' + parseFloat(this.enterStringMass))
      check = this.stringMass === parseFloat(this.enterStringMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedLength: function () {
      let check
      console.log('String length => ' + this.length + ' : ' + parseFloat(this.enterLength))
      check = this.length === parseFloat(this.enterLength) ? 'correct' : 'not-correct'
      return check
    },
    checkedBlockMass: function () {
      let check
      console.log('Block mass => ' + this.blockMass + ' : ' + parseFloat(this.enterBlockMass))
      check = this.blockMass === parseFloat(this.enterBlockMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedDensity: function () {
      let check
      console.log('Density => ' + this.density + ' : ' + parseFloat(this.enterDensity))
      check = this.density === parseFloat(this.enterDensity) ? 'correct' : 'not-correct'
      return check
    },
    checkedTension: function () {
      let check
      console.log('Tension => ' + this.tension + ' : ' + parseFloat(this.enterTension))
      check = this.tension === parseFloat(this.enterTension) ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeed: function () {
      let check
      console.log('Speed => ' + this.speed + ' : ' + parseFloat(this.enterSpeed))
      check = this.speed === parseFloat(this.enterSpeed) ? 'correct' : 'not-correct'
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
      width: 100%;
      margin-left: 0;
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
  margin: 5px 5px 5px 5px;
  font-size: 30px;
  color: blue;
  width: 100%;
}

.solution {
  margin: 5px 5px 5px 5px;
  font-size: 20px;
  color: red;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #80c080;
}
</style>
