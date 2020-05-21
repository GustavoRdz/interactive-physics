<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A very light (massless) rigid rod of length {{ length }} m extends straight out from one end of a larger rod of {{ 2*length }} m. The combination is suspended from a pivot at the upper end of the rod as shown in Figure. The combination is then pulled out by a small angle and released. (a) Determine the period of oscillation of the system. (b) By what percentage does the period differ from the period of a simple pendulum {{ 2*length }} m long?

    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 800 500" height="200px" width="400px" >

        <!-- Axis -->
        <line fill="none" stroke="#000" stroke-width="5" x1="400" y1="0" x2="400" y2="200" stroke-linecap="round"/>
        <!-- graph -->
        <!-- <path :d="chord" stroke="#f00" fill="none" stroke-opacity="1" stroke-width="5" ></path> -->
         <text x="400" y="210" font-size="35" fill="black" font-weight="bold" font-family="Times"> figure pend</text>

      </svg>
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Length (m)
        input.center.data(:class="checkedLength" v-model.number='enterLength')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
      p.inline.data Percent (%)
        input.center.data(:class="checkedPercent" v-model.number='enterPercent')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterLength: '',
      enterAngular: '',
      enterPeriod: '',
      enterPercent: ''
    }
  },
  computed: {
    length: function () {
      let max = 150
      let min = 50
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    angular: function () {
      return Math.round(1000 * Math.sqrt(12 * 9.81 / (13 * 2 * this.length))) / 1000
    },
    period: function () {
      return Math.round(1000 * 2 * Math.PI / this.angular) / 1000
    },
    percent: function () {
      return Math.round(1000 * Math.sqrt(12 / 13)) / 10
    },
    checkedLength: function () {
      let check
      console.log('Length : ' + this.length + ' : ' + parseFloat(this.enterLength))
      check = this.length === parseFloat(this.enterLength) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular frequency : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedPercent: function () {
      let check
      console.log('Percent : ' + this.percent + ' : ' + parseFloat(this.enterPercent))
      check = this.percent === parseFloat(this.enterPercent) ? 'correct' : 'not-correct'
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
