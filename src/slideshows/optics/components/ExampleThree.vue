<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A laser beam is incident on a prism perpendicular to one of its faces as shown in figure. The transmitted beam that exits the hypotenuse of the prism makes an angle of {{ angle }}º with the direction of the incident beam. Find the index of refraction of the prism.
    .center
      img(src='../assets/example3.png' width="200px")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Incidence angle (degrees)
        input.center.data(:class="checkedIncident" v-model.number='enterIncident')
      p.inline.data Transmitted angle (degrees)
        input.center.data(:class="checkedTransmitted" v-model.number='enterTransmitted')
      p.inline.data Refractive index
        input.center.data(:class="checkedIndex" v-model.number='enterIndex')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterIncident: '',
      enterTransmitted: '',
      enterIndex: ''
    }
  },
  computed: {
    angle: function () {
      let max = 30
      let min = 10
      return (Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    incident: function () {
      return 45
    },
    transmitted: function () {
      return this.incident + this.angle
    },
    index: function () {
      return Math.round(1000 * Math.sin(Math.PI * this.transmitted / 180) / Math.sin(Math.PI * this.incident / 180)) / 1000
    },
    checkedIncident: function () {
      let check
      console.log('Incident => ' + this.incident + ' : ' + parseFloat(this.enterIncident))
      check = this.incident === parseFloat(this.enterIncident) ? 'correct' : 'not-correct'
      return check
    },
    checkedTransmitted: function () {
      let check
      console.log('Transmitted => ' + this.transmitted + ' : ' + parseFloat(this.enterTransmitted))
      check = this.transmitted === parseFloat(this.enterTransmitted) ? 'correct' : 'not-correct'
      return check
    },
    checkedIndex: function () {
      let check
      console.log('Index => ' + this.index + ' : ' + parseFloat(this.enterIndex))
      check = this.index === parseFloat(this.enterIndex) ? 'correct' : 'not-correct'
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
