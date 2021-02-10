<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A sample of the isotope <sup style="font-family: Times; font-style: italic; font-size: 20px; margin: 0px -10px 0px  10px"><b>131</b></sup><span style="font-family: Times; font-style: italic; margin: 0 0 0  15px"><b>I</b></span>, which has a half-life of {{ halfLife }} days, has an activity of {{ initialActivity }} mCi at the time of shipment. Upon receipt of the sample at a medical laboratory, the activity is {{ finalActivity }} mCi. How much time has elapsed between the two measurements?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data T<sub>1/2</sub>
        input.center.data(:class="checkedTh" v-model.number='enterTh')
      p.inline.data  Initial activity
        input.center.data(:class="checkedR0" v-model.number='enterR0')
      p.inline.data Final activity
        input.center.data(:class="checkedR" v-model.number='enterR')
      p.inline.data Elapsed time
        input.center.data(:class="checkedTime" v-model='enterTime')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterTh: '',
      enterR0: '',
      enterR: '',
      enterTime: ''
    }
  },
  computed: {
    halfLife: function () {
      return 8.04
    },
    initialActivity: function () {
      let max = 200
      let min = 50
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    finalActivity: function () {
      let max = this.initialActivity - 10
      let min = 10
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 10
    },
    time: function () {
      return -parseFloat(((this.halfLife / 0.693) * Math.log(this.finalActivity / this.initialActivity)).toPrecision(4))
    },
    checkedTh: function () {
      let check
      console.log('Half life => ' + this.halfLife + ' : ' + parseFloat(this.enterTh))
      check = this.halfLife === parseFloat(this.enterTh) ? 'correct' : 'not-correct'
      return check
    },
    checkedR0: function () {
      let check
      console.log('R0 => ' + this.initialActivity + ' : ' + parseFloat(this.enterR0))
      check = this.initialActivity === parseFloat(this.enterR0) ? 'correct' : 'not-correct'
      return check
    },
    checkedR: function () {
      let check
      console.log('R => ' + this.finalActivity + ' : ' + parseFloat(this.enterR))
      check = this.finalActivity === parseFloat(this.enterR) ? 'correct' : 'not-correct'
      return check
    },
    checkedTime: function () {
      let check
      console.log('Time => ' + this.time + ' : ' + parseFloat(this.enterTime))
      check = this.time === parseFloat(this.enterTime) ? 'correct' : 'not-correct'
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
