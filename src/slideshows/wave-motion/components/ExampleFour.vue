<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An {{ hikerMass }}-kg hiker is trapped on a mountain ledge following a storm. A helicopter rescues the hiker by hovering above him and lowering a cable to him. The mass of the cable is {{ cableMass }} kg, and its length is {{ length }} m. A sling of mass {{ slingMass }} kg is attached to the end of the cable. The hiker attaches himself to the sling, and the helicopter then accelerates upward. Terrified by hanging from the cable in midair, the hiker tries to signal the pilot by sending transverse pulses up the cable. A pulse takes {{ time }} s to travel the length of the cable. What is the acceleration of the helicopter? Assume the tension in the cable is uniform.

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Hiker mass (kg)
        input.center.data(:class="checkedHikerMass" v-model.number='enterHikerMass')
        <span class="error" v-if="errorHikerMass">[e: {{ errorHikerMass.toPrecision(3) }}%]</span>
      p.inline.data Cable mass (kg)
        input.center.data(:class="checkedCableMass" v-model.number='enterCableMass')
        <span class="error" v-if="errorCableMass">[e: {{ errorCableMass.toPrecision(3) }}%]</span>
      p.inline.data Length (m)
        input.center.data(:class="checkedLength" v-model.number='enterLength')
        <span class="error" v-if="errorLength">[e: {{ errorLength.toPrecision(3) }}%]</span>
      p.inline.data Sling mass (kg)
        input.center.data(:class="checkedSlingMass" v-model.number='enterSlingMass')
        <span class="error" v-if="errorSlingMass">[e: {{ errorSlingMass.toPrecision(3) }}%]</span>
      p.inline.data Pulse time travel (s)
        input.center.data(:class="checkedTime" v-model='enterTime')
        <span class="error" v-if="errorTime">[e: {{ errorTime.toPrecision(3) }}%]</span>
      p.inline.data Speed (m/s)
        input.center.data(:class="checkedSpeed" v-model='enterSpeed')
        <span class="error" v-if="errorSpeed">[e: {{ errorSpeed.toPrecision(3) }}%]</span>
      p.inline.data Tension (N)
        input.center.data(:class="checkedTension" v-model='enterTension')
        <span class="error" v-if="errorTension">[e: {{ errorTension.toPrecision(3) }}%]</span>
      p.inline.data Acceleration (m/s<sup>2</sup>)
        input.center.data(:class="checkedAcceleration" v-model='enterAcceleration')
        <span class="error" v-if="errorAcceleration">[e: {{ errorAcceleration.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHikerMass: '',
      errorHikerMass: 0,
      enterCableMass: '',
      errorCableMass: 0,
      enterLength: '',
      errorLength: 0,
      enterSlingMass: '',
      errorSlingMass: 0,
      enterTime: '',
      errorTime: 0,
      enterSpeed: '',
      errorSpeed: 0,
      enterTension: '',
      errorTension: 0,
      enterAcceleration: '',
      errorAcceleration: 0
    }
  },
  computed: {
    hikerMass: function () {
      console.clear()
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
      return this.length / this.time
    },
    density: function () {
      return this.cableMass / this.length
    },
    tension: function () {
      return this.density * this.speed ** 2
    },
    acceleration: function () {
      return (this.tension - (this.slingMass + this.hikerMass) * 9.81) / (this.slingMass + this.hikerMass)
    },
    checkedHikerMass: function () {
      this.errorHikerMass = this.errorRelative('Hiker mass => ', this.hikerMass, parseFloat(this.enterHikerMass))
      return this.errorHikerMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCableMass: function () {
      this.errorCableMass = this.errorRelative('cable mass => ', this.cableMass, parseFloat(this.enterCableMass))
      return this.errorCableMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLength: function () {
      this.errorLength = this.errorRelative('string length => ', this.length, parseFloat(this.enterLength))
      return this.errorLength < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSlingMass: function () {
      this.errorSlingMass = this.errorRelative('Sling mass => ', this.slingMass, parseFloat(this.enterSlingMass))
      return this.errorSlingMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTime: function () {
      this.errorTime = this.errorRelative('time => ', this.time, parseFloat(this.enterTime))
      return this.errorTime < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeed: function () {
      this.errorSpeed = this.errorRelative('speed => ', this.speed, parseFloat(this.enterSpeed))
      return this.errorSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTension: function () {
      this.errorTension = this.errorRelative('tension => ', this.tension, parseFloat(this.enterTension))
      return this.errorTension < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAcceleration: function () {
      this.errorAcceleration = this.errorRelative('a => ', this.acceleration, parseFloat(this.enterAcceleration))
      return this.errorAcceleration < 1e-1 ? 'correct' : 'not-correct'
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
