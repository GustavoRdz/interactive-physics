<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A solid cylindrical conductor of radius a and charge Q is coaxial with a cylindrical shell of negligible thickness, radius b>a, and charge 2Q. Find the capacitance of this cylindrical capacitor if its length l.
    .center
        img(src='../assets/fig26-4.png' style="height: 300px;")

    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Length (m)
    //-     input.center.data(:class="checkedLength" v-model.number='enterLength')
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-   p.inline.data Percent (%)
    //-     input.center.data(:class="checkedPercent" v-model.number='enterPercent')

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
