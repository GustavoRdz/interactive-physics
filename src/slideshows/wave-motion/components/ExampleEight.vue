<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A police car’s siren emits a sinusoidal wave with frequency <b>f<sub>s</sub></b> = {{ fSource}} Hz. The speed of sound is {{ speed }} m/s and the air is still.<br> (a) If a listener L is at rest and the siren is moving away from L at {{ speedSourceA }} m/s, what frequency does the listener hear? <br>(b) The siren is moving away from the listener with a speed of {{ speedSourceB }} m/s relative to the air, and the listener is moving toward the siren with a speed of {{ speedListener }} m/s relative to the air. What frequency does the listener hear?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data f<sub>Source</sub> (Hz)
        input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
      p.inline.data v (m/s)
        input.center.data(:class="checkedSpeed" v-model.number='enterSpeed')
      p.inline.data a) v<sub>L</sub> (m/s) 
        input.center.data(:class="checkedSpeedLA" v-model.number='enterSpeedLA')
        <span class="error" v-if="errorSpeedLA">[e: {{ errorSpeedLA.toPrecision(3) }}%]</span>
      p.inline.data a) v<sub>S</sub> (m/s) 
        input.center.data(:class="checkedSpeedSA" v-model.number='enterSpeedSA')
        <span class="error" v-if="errorSpeedSA">[e: {{ errorSpeedSA.toPrecision(3) }}%]</span>
      p.inline.data a) f<sub>L</sub> (Hz) 
        input.center.data(:class="checkedFrequencyA" v-model='enterFrequencyA')
        <span class="error" v-if="errorFrequencyA">[e: {{ errorFrequencyA.toPrecision(3) }}%]</span>
      p.inline.data b) v<sub>L</sub> (m/s) 
        input.center.data(:class="checkedSpeedLB" v-model.number='enterSpeedLB')
        <span class="error" v-if="errorSpeedLB">[e: {{ errorSpeedLB.toPrecision(3) }}%]</span>
      p.inline.data b) v<sub>S</sub> (m/s) 
        input.center.data(:class="checkedSpeedSB" v-model.number='enterSpeedSB')
        <span class="error" v-if="errorSpeedSB">[e: {{ errorSpeedSB.toPrecision(3) }}%]</span>
      p.inline.data b) f<sub>L</sub> (Hz)
        input.center.data(:class="checkedFrequencyB" v-model='enterFrequencyB')
        <span class="error" v-if="errorFrequencyB">[e: {{ errorFrequencyB.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFrequency: '',
      errorFrequency: 0,
      enterSpeed: '',
      errorSpeed: 0,
      enterSpeedLA: '',
      errorSpeedLA: 0,
      enterSpeedSA: '',
      errorSpeedSA: 0,
      enterSpeedLB: '',
      errorSpeedLB: 0,
      enterSpeedSB: '',
      errorSpeedSB: 0,
      enterFrequencyA: '',
      errorFrequencyA: 0,
      enterFrequencyB: '',
      errorFrequencyB: 0
    }
  },
  computed: {
    fSource: function () {
      console.clear()
      let max = 400
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    speed: function () {
      let max = 350
      let min = 330
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    speedSourceA: function () {
      let max = 40
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    speedSourceB: function () {
      let max = 70
      let min = 40
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    speedListener: function () {
      let max = 50
      let min = 10
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    fLA: function () {
      return (this.speed / (this.speed + this.speedSourceA)) * this.fSource
    },
    fLB: function () {
      return ((this.speed + this.speedListener) / (this.speed + this.speedSourceB)) * this.fSource
    },
    checkedFrequency: function () {
      this.errorFrequency = this.errorRelative('F source => ', this.fSource, parseFloat(this.enterFrequency))
      return this.errorFrequency < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeed: function () {
      this.errorSpeed = this.errorRelative('Sound speed => ', this.speed, parseFloat(this.enterSpeed))
      return this.errorSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedLA: function () {
      this.errorSpeedLA = this.errorRelative('a) Listener speed => ', 0, parseFloat(this.enterSpeedLA))
      return this.errorSpeedLA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedSA: function () {
      this.errorSpeedSA = this.errorRelative('a) Source speed => ', this.speedSourceA, parseFloat(this.enterSpeedSA))
      return this.errorSpeedSA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequencyA: function () {
      this.errorFrequencyA = this.errorRelative('a) f Listener => ', this.fLA, parseFloat(this.enterFrequencyA))
      return this.errorFrequencyA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedLB: function () {
      this.errorSpeedLB = this.errorRelative('b) Speed Listener => ', this.speedListener, parseFloat(this.enterSpeedLB))
      return this.errorSpeedLB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedSpeedSB: function () {
      this.errorSpeedSB = this.errorRelative('b) Source speed => ', this.speedSourceB, parseFloat(this.enterSpeedSB))
      return this.errorSpeedSB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedFrequencyB: function () {
      this.errorFrequencyB = this.errorRelative('b) f Listener => ', this.fLB, parseFloat(this.enterFrequencyB))
      return this.errorFrequencyB < 1e-1 ? 'correct' : 'not-correct'
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
