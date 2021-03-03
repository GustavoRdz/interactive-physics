<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content 
    p.problem 15.34 .. Two pulses are moving in opposite directions at on a taut string, as shown in Fig. E15.34. Each square is 1.0 cm. Sketch the shape of the string at the end of (a) 6.0 s; (b) 7.0 s; (c) 8.0 s.
    //- svg(xmlns='http://www.w3.org/2000/svg', width="1000" height="400" viewBox="0 0 1000 400")
    //-   rect( x="0" y="0" width="1000" height="400" stroke="#f57c00" fill="#f57c00" stroke-width="1" opacity= "0.2")
    //-   circle(fill='#000', stroke-width='2', cx='12', cy='9', r='3')

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 300" width="980px" height="210px">

       <!-- <rect x="0" y="0" width="980" height="210" stroke="#f57c00" fill="#0f0" stroke-width="1"  opacity= "0.3"/> -->

        <!-- grid hor-->
        <line fill="none" stroke="#000" stroke-width="2" x1="0" y1="10" x2="980" y2="10" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="0" y1="58" x2="980" y2="58" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="0" y1="106" x2="980" y2="106" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="0" y1="154" x2="980" y2="154" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="0" y1="202" x2="980" y2="202" opacity="0.2" stroke-linecap="round"/>

        <!-- grid vert-->
        <line fill="none" stroke="#000" stroke-width="2" x1="10" y1="0" x2="10" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="58" y1="0" x2="58" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="106" y1="0" x2="106" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="154" y1="0" x2="154" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="202" y1="0" x2="202" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="250" y1="0" x2="250" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="298" y1="0" x2="298" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="346" y1="0" x2="346" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="394" y1="0" x2="394" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="442" y1="0" x2="442" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="490" y1="0" x2="490" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="538" y1="0" x2="538" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="586" y1="0" x2="586" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="634" y1="0" x2="634" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="682" y1="0" x2="682" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="730" y1="0" x2="730" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="778" y1="0" x2="778" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="826" y1="0" x2="826" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="874" y1="0" x2="874" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="922" y1="0" x2="922" y2="210" opacity="0.2" stroke-linecap="round"/>
        <line fill="none" stroke="#000" stroke-width="2" x1="970" y1="0" x2="970" y2="210" opacity="0.2" stroke-linecap="round"/>

        <!-- string -->
        <path d="M0,154 L106,154 154,58 250,154 730,154 826,58 874,154 980,154" fill="none" stroke="#f57c00" stroke-width="8" stroke-linecap="round"/>
       
        <!-- speed -->
        <line x1="180" y1="58" x2="270" y2="58" stroke="#00f" stroke-width="10" stroke-linecap="round"/>
        <line x1="250" y1="48" x2="275" y2="58" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
        <line x1="250" y1="68" x2="275" y2="58" stroke="#00f" stroke-width="8" stroke-linecap="round"/>

        <!-- speed -->
        <line x1="800" y1="58" x2="710" y2="58" stroke="#00f" stroke-width="10" stroke-linecap="round"/>
        <line x1="705" y1="58" x2="730" y2="48" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
        <line x1="705" y1="58" x2="730" y2="68" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
      </svg>
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Box mass (kg)
    //-     input.center.data(:class="checkedWeight" v-model.number='enterWeight')
    //-   p.inline.data Elastic constant (N/m)
    //-     input.center.data(:class="checkedElastic" v-model.number='enterElastic')
    //-   p.inline.data Stone mass (Kg)
    //-     input.center.data(:class="checkedStone" v-model.number='enterStone')
    //-   p.inline.data Amplitude (m)
    //-     input.center.data(:class="checkedAmplitude" v-model.number='enterAmplitude')
    //-   p.inline.data Only box period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Only box amplitude (m)
    //-     input.center.data(:class="checkedAmplitude2" v-model.number='enterAmplitude2')
    //-   p.inline.data greater or smaller?
    //-     input.center.data(:class="checkedGreat" v-model.number='enterGreat')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterWeight: '',
      enterElastic: '',
      enterStone: '',
      enterAmplitude: '',
      enterPeriod: '',
      enterAmplitude2: '',
      enterGreat: ''
    }
  },
  computed: {
    weight: function () {
      let max = 10000
      let min = 5000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    elastic: function () {
      let max = 700000
      let min = 300000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    stone: function () {
      let max = 5000
      let min = 1000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    amplitude: function () {
      let max = 10000
      let min = 5000
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angular1: function () {
      return Math.round(Math.sqrt(this.elastic / (this.weight + this.stone)))
    },
    angular2: function () {
      return Math.round(Math.sqrt(this.elastic / (this.weight)))
    },
    period: function () {
      return Math.round(2000 * Math.PI / this.angular2) / 1000
    },
    maxVel: function () {
      return Math.round(1000 * this.angular1 * this.amplitude / 100) / 1000
    },
    amplitude2: function () {
      return Math.round(1000 * this.maxVel / this.angular2) / 1000
    },
    inmmersedRatio: function () {
      return (100 * this.rhoObject / this.rhoFluid).toPrecision(3)
    },
    checkedWeight: function () {
      let check
      console.log('Weight : ' + this.weight + ' : ' + parseFloat(this.enterWeight))
      check = this.weight === parseFloat(this.enterWeight) ? 'correct' : 'not-correct'
      return check
    },
    checkedElastic: function () {
      let check
      console.log('Elastic constant : ' + this.elastic + ' : ' + parseFloat(this.enterElastic))
      check = this.elastic === parseFloat(this.enterElastic) ? 'correct' : 'not-correct'
      return check
    },
    checkedStone: function () {
      let check
      console.log('Stone mass : ' + this.stone + ' : ' + parseFloat(this.enterStone))
      check = this.stone === parseFloat(this.enterStone) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude: function () {
      let check
      console.log('Amplitude : ' + this.amplitude / 100 + ' : ' + parseFloat(this.enterAmplitude))
      check = this.amplitude / 100 === parseFloat(this.enterAmplitude) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmplitude2: function () {
      let check
      console.log('Only box amplitude : ' + this.amplitude2 + ' : ' + parseFloat(this.enterAmplitude2))
      check = this.amplitude2 === parseFloat(this.enterAmplitude2) ? 'correct' : 'not-correct'
      return check
    },
    checkedGreat: function () {
      let check
      console.log('Grat or smaller : great' + ' : ' + this.enterGreat)
      check = (this.enterGreat).toLowerCase() === 'great' ? 'correct' : 'not-correct'
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
      margin-left: 0%;
    }
  }
}

.data {
  display: inline-block;
  width: 100%;
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
  margin: auto;
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
