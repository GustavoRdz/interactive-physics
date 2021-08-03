<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A student eats a dinner at {{ calories }} Calories. He wishes to do an equivalent amount of work in the gymnasium by lifting a {{ weight }}-kg barbell. How many times must he raise the barbell to expend this much energy? Assume he rises the barbell {{ height }}m each time lifts it and he regains no energy when he lowers the barbell. Calculate the time required to do the lifts if each one is done in {{ time }}s

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Number of lifts
        input.center.data(:class="checkedLifts" v-model.number='enterLifts')
        <span class="error" v-if="errorLifts">[e: {{ errorLifts.toPrecision(2) }}%]</span>
      p.inline.data Time (hrs)
        input.center.data(:class="checkedTime" v-model.number='enterTime')
        <span class="error" v-if="errorTime">[e: {{ errorTime.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      Calorie: 4186,
      g: 9.81,
      enterLifts: '',
      errorLifts: 0,
      enterTime: '',
      errorTime: 0
    }
  },
  computed: {
    calories: function () {
      console.clear()
      let max = 2200
      let min = 1800
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    weight: function () {
      let max = 50
      let min = 30
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    height: function () {
      let max = 20
      let min = 15
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    time: function () {
      let max = 100
      let min = 50
      return Math.floor(Math.random() * (max - min + 1) + min) / 10
    },
    lifts: function () {
      return this.calories * this.Calorie / (this.weight * this.g * this.height)
    },
    totalTime: function () {
      return this.lifts * this.time / 3600
    },
    checkedLifts: function () {
      this.errorLifts = this.errorRelative('Lifts => ', this.lifts, parseFloat(this.enterLifts))
      return this.errorLifts < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTime: function () {
      this.errorTime = this.errorRelative('Time => ', this.totalTime, parseFloat(this.enterTime))
      return this.errorTime < 1e-1 ? 'correct' : 'not-correct'
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
  watch: {
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
