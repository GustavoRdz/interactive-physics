<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem As shown in Figure (a), a charge <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"><sub>1</sub></span><span style="font-family: Times New Roman;"> = 2.00 &mu;C</span> is located at the origin and a charge <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"><sub>2</sub></span><span style="font-family: Times New Roman;"> = 26.00 &mu;C</span> is located at <span style="font-family: Times New Roman;">(0, 3.00) m</span>.<br> (A) Find the total electric potential due to these charges at the point <span style="font-family: Times New Roman; font-style: italic;">P</span>, whose coordinates are <span style="font-family: Times New Roman;">(4.00, 0) m</span>.<br> (B) Find the change in potential energy of the system of two charges plus a third charge <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"> = 3.00 &mu;C</span> as the latter charge moves from infinity to point <span style="font-family: Times New Roman; font-style: italic;">P</span> (Fig. b).

    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Como se muestra en la Figura (a), una carga <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"><sub>1</sub></span><span style="font-family: Times New Roman;"> = 2.00 &mu;C</span> está ubicada en el origen y una carga <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"><sub>2</sub></span><span style="font-family: Times New Roman;"> = 26.00 &mu;C</span> está ubicada en <span style="font-family: Times New Roman;">(0, 3.00) m</span>. <br>(A) Encuentre el potencial eléctrico total debido a estas cargas en el punto <span style="font-family: Times New Roman; font-style: italic;">P</span>, cuyas coordenadas son <span style="font-family: Times New Roman;">(4.00, 0) m</span>. <br>(B) Encuentre el cambio en la energía potencial del sistema de dos cargas más una tercera carga <span style="font-family: Times New Roman; font-style: italic;">q</span><span style="font-family: Times New Roman;"> = 3.00 &mu;C</span> cuando la última carga se mueve desde el infinito hasta el punto <span style="font-family: Times New Roman; font-style: italic;">P</span> (Fig. b).
    .center
      img(src='../assets/fig25-11.png' height="200px" style="margin: 40px 0 0 0;")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Torsion constant (Nm/rad)
    //-     input.center.data(:class="checkedTorsion" v-model.number='enterTorsion')
    //-   p.inline.data Oscillations (oscillations)
    //-     input.center.data(:class="checkedOscillations" v-model.number='enterOscillations')
    //-   p.inline.data Time (s)
    //-     input.center.data(:class="checkedTime" v-model.number='enterTime')
    //-   p.inline.data frequency (Hz)
    //-     input.center.data(:class="checkedFrequency" v-model.number='enterFrequency')
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-   p.inline.data Moment of inertia (kgm<sup>2</sup>)
    //-     input.center.data(:class="checkedInertia" v-model.number='enterInertia')

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterTorsion: '',
      enterOscillations: '',
      enterTime: '',
      enterFrequency: '',
      enterAngular: '',
      enterInertia: ''
    }
  },
  computed: {
    torsion: function () {
      let max = 2000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    oscillations: function () {
      let max = 300
      let min = 100
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    time: function () {
      let max = 400
      let min = 100
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    frequency: function () {
      return Math.round(1000 * this.oscillations / this.time) / 1000
    },
    angular: function () {
      return Math.round(2000 * Math.PI * this.frequency) / 1000
    },
    inertia: function () {
      return Math.round(1000 * this.torsion / Math.pow(this.angular, 2)) / 1000
    },
    checkedTorsion: function () {
      let check
      console.log('Torsion : ' + this.torsion + ' : ' + parseFloat(this.enterTorsion))
      check = parseFloat(this.torsion) === parseFloat(this.enterTorsion) ? 'correct' : 'not-correct'
      return check
    },
    checkedOscillations: function () {
      let check
      console.log('Oscillations : ' + this.oscillations + ' : ' + parseFloat(this.enterOscillations))
      check = parseFloat(this.oscillations) === parseFloat(this.enterOscillations) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time : ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = parseFloat(this.time) === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
      return check
    },
    checkedFrequency: function () {
      let check
      console.log('Frequency : ' + this.frequency + ' : ' + parseFloat(this.enterFrequency))
      check = this.frequency === parseFloat(this.enterFrequency) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = this.inertia === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserHorizontalDistance: function () {
      let check
      console.log(this.horizontalDistance + ' : ' + parseFloat(this.userHorizontalDistance))
      check = parseFloat(this.horizontalDistance) === parseFloat(this.userHorizontalDistance) ? 'correct' : 'not-correct'
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
