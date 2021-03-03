<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An {{ hikerMass }}-kg hiker is trapped on a mountain ledge following a storm. A helicopter rescues the hiker by hovering above him and lowering a cable to him. The mass of the cable is {{ cableMass }} kg, and its length is {{ length }} m. A sling of mass {{ slingMass }} kg is attached to the end of the cable. The hiker attaches himself to the sling, and the helicopter then accelerates upward. Terrified by hanging from the cable in midair, the hiker tries to signal the pilot by sending transverse pulses up the cable. A pulse takes {{ time }} s to travel the length of the cable. What is the acceleration of the helicopter? Assume the tension in the cable is uniform.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Hiker mass (kg)
        input.center.data(:class="checkedHikerMass" v-model.number='enterHikerMass')
      p.inline.data Cable mass (kg)
        input.center.data(:class="checkedCableMass" v-model.number='enterCableMass')
      p.inline.data Length (m)
        input.center.data(:class="checkedLength" v-model.number='enterLength')
      p.inline.data Sling mass (kg)
        input.center.data(:class="checkedSlingMass" v-model.number='enterSlingMass')
      p.inline.data Pulse time travel (s)
        input.center.data(:class="checkedTime" v-model='enterTime')
      p.inline.data Speed (m/s)
        input.center.data(:class="checkedSpeed" v-model='enterSpeed')
      p.inline.data Tension (N)
        input.center.data(:class="checkedTension" v-model='enterTension')
      p.inline.data Acceleration (m/s<sup>2</sup>)
        input.center.data(:class="checkedAcceleration" v-model='enterAcceleration')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHikerMass: '',
      enterCableMass: '',
      enterLength: '',
      enterSlingMass: '',
      enterTime: '',
      enterSpeed: '',
      enterTension: '',
      enterAcceleration: ''
    }
  },
  computed: {
    hikerMass: function () {
      let max = 90
      let min = 70
      return Math.round(100 * (Math.random() * (max - min + 1) + min)) / 100
    },
    cableMass: function () {
      let max = 10
      let min = 5
      return Math.round(100 * (Math.random() * (max - min + 1) + min)) / 100
    },
    length: function () {
      let max = 20
      let min = 10
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    slingMass: function () {
      let max = 70
      let min = 50
      return Math.round(10 * (Math.random() * (max - min + 1) + min)) / 10
    },
    time: function () {
      let max = 300
      let min = 200
      return Math.round(1 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    speed: function () {
      return Math.round(1000 * this.length / this.time) / 1000
    },
    density: function () {
      return Math.round(1000 * this.cableMass / this.length) / 1000
    },
    tension: function () {
      return Math.round(1000 * this.density * this.speed ** 2) / 1000
    },
    acceleration: function () {
      return Math.round(1000 * (this.tension - (this.slingMass + this.hikerMass) * 9.81) / (this.slingMass + this.hikerMass)) / 1000
    },
    checkedHikerMass: function () {
      let check
      console.log('Hiker mass => ' + this.hikerMass + ' : ' + parseFloat(this.enterHikerMass))
      check = this.hikerMass === parseFloat(this.enterHikerMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedCableMass: function () {
      let check
      console.log('Cable mass => ' + this.cableMass + ' : ' + parseFloat(this.enterCableMass))
      check = this.cableMass === parseFloat(this.enterCableMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedLength: function () {
      let check
      console.log('Cable length => ' + this.length + ' : ' + parseFloat(this.enterLength))
      check = this.length === parseFloat(this.enterLength) ? 'correct' : 'not-correct'
      return check
    },
    checkedSlingMass: function () {
      let check
      console.log('Sling mass => ' + this.slingMass + ' : ' + parseFloat(this.enterSlingMass))
      check = this.slingMass === parseFloat(this.enterSlingMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Pulse time travel => ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = this.time === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
      return check
    },
    checkedSpeed: function () {
      let check
      console.log('Speed => ' + this.speed + ' : ' + parseFloat(this.enterSpeed))
      check = this.speed === parseFloat(this.enterSpeed) ? 'correct' : 'not-correct'
      return check
    },
    checkedTension: function () {
      let check
      console.log('Tension => ' + this.tension + ' : ' + parseFloat(this.enterTension))
      check = this.tension === parseFloat(this.enterTension) ? 'correct' : 'not-correct'
      return check
    },
    checkedAcceleration: function () {
      let check
      console.log('Acceleration => ' + this.acceleration + ' : ' + parseFloat(this.enterAcceleration))
      check = this.acceleration === parseFloat(this.enterAcceleration) ? 'correct' : 'not-correct'
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
        margin-top: 0;
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
  margin: auto;
  font-size: 30px;
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
