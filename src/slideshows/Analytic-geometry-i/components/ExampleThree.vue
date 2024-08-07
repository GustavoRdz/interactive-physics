<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem La distancia entre dos puntos es {{ distancia }}. Si la coordenanda de uno de los puntos es ({{ coordenada }}), hallar la coordenada del otro punto.  

    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data i) coordenada
        input.center.data(:class="checkedCi" v-model.number='enterCi')
        <span class="error" v-if="errorCi">[e: {{ errorCi.toPrecision(3) }}%]</span>
      p.inline.data ii) coordenada
        input.center.data(:class="checkedCii" v-model.number='enterCii')
        <span class="error" v-if="errorCii">[e: {{ errorCii.toPrecision(3) }}%]</span>
      //- p.inline.data Angular frequency (rad/s)
      //-   input.center.data(:class="checkedAngularFreq" v-model.number='enterAngularFreq')
      //-   <span class="error" v-if="errorAngularFreq">[e: {{ errorAngularFreq.toPrecision(3) }}%]</span>
      //- p.inline.data Period (s)
      //-   input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      //-   <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>
      //- p.inline.data Amplitude (m)
      //-   input.center.data(:class="checkedAmplitude" v-model='enterAmplitude')
      //-   <span class="error" v-if="errorAmplitude">[e: {{ errorAmplitude.toPrecision(3) }}%]</span>
      //- p.inline.data Phase angle (rad)
      //-   input.center.data(:class="checkedPhase" v-model='enterPhase')
      //-   <span class="error" v-if="errorPhase">[e: {{ errorPhase.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterCi: '',
      errorCi: 0,
      enterCii: '',
      errorCii: 0,
      enterAngularFreq: '',
      errorAngularFreq: 0,
      enterPeriod: '',
      errorPeriod: 0,
      enterAmplitude: '',
      errorAmplitude: 0,
      enterPhase: '',
      errorPhase: 0
    }
  },
  computed: {
    distancia: function () {
      console.clear()
      let max = 10
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    coordenada: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    angular: function () {
      let max = 50
      let min = 20
      return Math.round(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    period: function () {
      return 2 * Math.PI / this.angular
    },
    amplitude: function () {
      return Math.sqrt(Math.pow(this.initialDisplacement, 2) + Math.pow(this.initialSpeed / this.angular, 2))
    },
    phase: function () {
      return Math.atan2(-this.initialSpeed, this.angular * this.initialDisplacement)
    },
    checkedInitDisp: function () {
      this.errorInitDisp = this.errorRelative('Init displacement => ', this.initialDisplacement, parseFloat(this.enterInitDisp))
      return this.errorInitDisp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInitSpeed: function () {
      this.errorInitSpeed = this.errorRelative('Init speed => ', this.initialSpeed, parseFloat(this.enterInitSpeed))
      return this.errorInitSpeed < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngularFreq: function () {
      this.errorAngularFreq = this.errorRelative('Angular freq => ', this.angular, parseFloat(this.enterAngularFreq))
      return this.errorAngularFreq < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAmplitude: function () {
      this.errorAmplitude = this.errorRelative('Amplitud => ', this.amplitude, parseFloat(this.enterAmplitude))
      return this.errorAmplitude < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPhase: function () {
      this.errorPhase = this.errorRelative('Phase => ', this.phase, parseFloat(this.enterPhase))
      return this.errorPhase < 1e-1 ? 'correct' : 'not-correct'
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
