<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem The threshold frequency for a certain material is {{ thresholdF.toExponential() }} cycles/s.<br> a) Determine the maximum kinetic energy for photoelectrons when light, whose frequency is {{ frequency.toExponential() }} cycles/s, strikes that material.<br> b) Calculate the stopping potential and<br>c) finally find the maximum velocity of the photoelectrons.
    p.problem La frecuencia umbral para un determinado material es {{ thresholdF.toExponential() }} ciclos/s.<br> a) Determinar la energía cinética máxima de los fotoelectrones cuando se ilumina, cuya frecuencia es {{ frequency.toExponential() }} ciclos/s, golpea ese material.<br> b) Calcula el potencial de frenado y<br>c) finalmente encuentra la velocidad máxima de los fotoelectrones.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data f<sub>Th</sub> (Hz)
        input.center.data(:class="checkedFTh" v-model.number='enterFTh')
        <span class="error" v-if="errorFTh">[e: {{ errorFTh.toPrecision(3) }}%]</span>
      p.inline.data  φ (J)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(3) }}%]</span>
      p.inline.data f<sub>photon</sub> (Hz)
        input.center.data(:class="checkedF" v-model.number='enterF')
        <span class="error" v-if="errorF">[e: {{ errorF.toPrecision(3) }}%]</span>
      p.inline.data E<sub>photon</sub> (J)
        input.center.data(:class="checkedE" v-model='enterE')
        <span class="error" v-if="errorE">[e: {{ errorE.toPrecision(3) }}%]</span>
      p.inline.data K<sub>max</sub>
        input.center.data(:class="checkedK" v-model='enterK')
        <span class="error" v-if="errorK">[e: {{ errorK.toPrecision(3) }}%]</span>
      p.inline.data V<sub>0</sub> (volts)
        input.center.data(:class="checkedV0" v-model='enterV0')
        <span class="error" v-if="errorV0">[e: {{ errorV0.toPrecision(3) }}%]</span>
      p.inline.data  v<sub>max</sub> (m/s)
        input.center.data(:class="checkedVmax" v-model.number='enterVmax')
        <span class="error" v-if="errorVmax">[e: {{ errorVmax.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFTh: '',
      errorFTh: 0,
      enterPhi: '',
      errorPhi: 0,
      enterF: '',
      errorF: 0,
      enterE: '',
      errorE: 0,
      enterK: '',
      errorK: 0,
      enterV0: '',
      errorV0: 0,
      enterVmax: '',
      errorVmax: 0,
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      me: 9.1e-31

    }
  },
  computed: {
    thresholdF: function () {
      let max = 200
      let min = 100
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    frequency: function () {
      let max = 250
      let min = (this.thresholdF / 1e15) * 10
      return 1e15 * Math.round(Math.floor(Math.random() * (max - min + 1) + min)) / 100
    },
    phi: function () {
      return this.h * this.thresholdF
    },
    eF: function () {
      return this.h * this.frequency
    },
    kMax: function () {
      return this.h * (this.frequency - this.thresholdF)
    },
    v0: function () {
      let v = this.kMax / this.e
      return v > 0 ? v : 0
    },
    ve: function () {
      let v = Math.sqrt(2 * this.kMax / this.me)
      return v > 0 ? v : 0
    },
    checkedFTh: function () {
      let check
      console.log('F threshold => ' + this.thresholdF + ' : ' + parseFloat(this.enterFTh))
      this.errorFTh = 100 * Math.abs(this.thresholdF - parseFloat(this.enterFTh)) / this.thresholdF
      console.log('error  ' + this.errorFTh + ' %')
      check = this.errorFTh < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedPhi: function () {
      let check
      console.log('Phi => ' + this.phi + ' : ' + parseFloat(this.enterPhi))
      this.errorPhi = 100 * Math.abs(this.phi - parseFloat(this.enterPhi)) / this.phi
      console.log('error  ' + this.errorPhi + ' %')
      check = this.errorPhi < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedF: function () {
      let check
      console.log('frequency => ' + this.frequency + ' : ' + parseFloat(this.enterF))
      this.errorF = 100 * Math.abs(this.frequency - parseFloat(this.enterF)) / this.frequency
      console.log('error  ' + this.errorF + ' %')
      check = this.errorF < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE: function () {
      let check
      console.log('Efoton => ' + this.eF + ' : ' + parseFloat(this.enterE))
      this.errorE = 100 * Math.abs(this.eF - parseFloat(this.enterE)) / this.eF
      console.log('error  ' + this.errorE + ' %')
      check = this.errorE < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedK: function () {
      let check
      console.log('Kmax => ' + this.kMax + ' : ' + parseFloat(this.enterK))
      this.errorK = 100 * Math.abs((this.kMax - parseFloat(this.enterK)) / (this.kMax + Number.MIN_VALUE))
      console.log('error  ' + this.errorK + ' %')
      check = this.errorK < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedV0: function () {
      let check
      console.log('V0 => ' + this.v0 + ' : ' + parseFloat(this.enterV0))
      this.errorV0 = 100 * Math.abs((this.v0 - parseFloat(this.enterV0)) / (this.v0 + Number.MIN_VALUE))
      console.log('error  ' + this.errorV0 + ' %')
      check = this.errorV0 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedVmax: function () {
      let check
      console.log('vmax => ' + this.ve + ' : ' + this.enterVmax)
      this.errorVmax = 100 * Math.abs((this.ve - parseFloat(this.enterVmax)) / (this.ve + Number.MIN_VALUE))
      console.log('error  ' + this.errorVmax + ' %')
      check = this.errorVmax < 1e-2 ? 'correct' : 'not-correct'
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: blue;
  width: 70%;
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
