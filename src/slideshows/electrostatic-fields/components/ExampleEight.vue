<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem An electron enters the region of a uniform electric field, with <span style="font-family: times; font-style: italic; ">v</span><span style="font-family:times; font-style: italic;"><sub>i</sub></span><span style="font-family: times;">= 3.00&times;10<sup>6</sup></span> m/s and <span style="font-family: times; font-weight: bold;">E</span> = <span style="font-family: times;">200</span> N/C. The horizontal length of the plates is <span style="font-family: times;">0.100</span> m.<br> (A) Find the acceleration of the electron while it is in the electric field.<br>(B) Assuming the electron enters the field at time <span style="font-family: times; font-style: italic; ">t</span> = <span style="font-family: times;">0</span>, find the time at which it leaves the field.<br> (C) Assuming the vertical position of the electron as it enters the field is <span style="font-family: times;  font-style: italic;">y</span><span style="font-family: times; font-style: italic;  font-weight: bold;"><sub>i</sub></span> = <span style="font-family: times;">0</span>, what is its vertical position when it leaves the field?
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un electrón entra en la región de un campo eléctrico uniforme, con <span style="font-family: times; font-style: italic; ">v</span><span style="font-family:times; font-style: italic;"><sub>i</sub></span><span style="font-family: times;"> = 3.00&times;10<sup>6</sup></span> m/s y <span style="font-family: times; font-weight: bold;">E</span><span style="font-family: times;"> = 200</span> N/C. La longitud horizontal de las placas es de <span style="font-family: times;">0.100</span> m. <br>(A) Encuentre la aceleración del electrón mientras está en el campo eléctrico. <br>(B) Suponiendo que el electrón entra en el campo en el tiempo <span style="font-family: times; font-style: italic; ">t</span><span style="font-family: times;"> = 0</span>, encuentre el tiempo en el que sale del campo. <br>(C) Suponiendo que la posición vertical del electrón cuando entra en el campo es <span style="font-family: times;  font-style: italic;">y</span><span style="font-family: times; font-style: italic;  font-weight: bold;"><sub>i</sub></span><span style="font-family: times;"> = 0</span>, ¿cuál es su posición vertical cuando sale del campo?
    .center
      img(src='../assets/fig23-24.png' height="300px")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Silicon silver mass (fg)
    //-     input.center.data(:class="checkedSilverMass" v-model.number='enterSilverMass')
    //-   p.inline.data Silicon silver frequency (PHz)
    //-     input.center.data(:class="checkedSilverFreq" v-model.number='enterSilverFreq')
    //-   p.inline.data Frequency with virus (PHz)
    //-     input.center.data(:class="checkedVirusFreq" v-model.number='enterVirusFreq')
    //-   p.inline.data Virus mass (fgr)
    //-     input.center.data(:class="checkedVirusMassF" v-model.number='enterVirusMassF')

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterSilverMass: '',
      enterSilverFreq: '',
      enterVirusFreq: '',
      enterVirusMass: '',
      enterVirusMassF: ''
    }
  },
  computed: {
    silverMass: function () {
      let max = 25
      let min = 18
      return (0.01 * Math.round((Math.floor(Math.random() * (max - min + 1)) + min)))
    },
    sFrequency: function () {
      let max = 23
      let min = 17
      return (Math.round(10 * (Math.floor(Math.random() * (max - min + 1)) + min)) / 100)
    },
    vFrequency: function () {
      let max = 23
      let min = 1.4 * this.sFrequency / 1e14
      return (0.01 * Math.round((Math.floor(Math.random() * (max - min + 1)) + min)))
    },
    virusMass: function () {
      let mass = (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2)))
      return (Math.pow(10, -15) * Math.round(1000 * mass) / 1000)
    },
    virusMassF: function () {
      console.log('La masa F:' + (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2) - 1)))
      return Math.round(1000 * (this.silverMass * (Math.pow(this.sFrequency / this.vFrequency, 2) - 1))) / 1000
    },
    checkedSilverMass: function () {
      let check
      console.log('Silicon Silver mass : ' + this.silverMass + ' : ' + parseFloat(this.enterSilverMass))
      check = this.silverMass === parseFloat(this.enterSilverMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedSilverFreq: function () {
      let check
      console.log('Silicon silver frequency: ' + this.sFrequency + ' : ' + parseFloat(this.enterSilverFreq))
      check = this.sFrequency === parseFloat(this.enterSilverFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusFreq: function () {
      let check
      console.log('virus and silicon frequency : ' + this.vFrequency + ' : ' + parseFloat(this.enterVirusFreq))
      check = this.vFrequency === parseFloat(this.enterVirusFreq) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusMass: function () {
      let check
      console.log('Virus mass: ' + this.virusMass + ' : ' + parseFloat(this.enterVirusMass))
      check = this.virusMass === parseFloat(this.enterVirusMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedVirusMassF: function () {
      let check
      console.log('Virus femto mass: ' + this.virusMassF + ' : ' + parseFloat(this.enterVirusMassF))
      check = this.virusMassF === parseFloat(this.enterVirusMassF) ? 'correct' : 'not-correct'
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
</style>
