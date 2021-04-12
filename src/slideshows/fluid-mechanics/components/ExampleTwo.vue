<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p.problem In the room described in the last excercice, what is the total downward force on the floor due to an air pressure of 1.00 atm.
      p Use room size, width: {{ width }}, depth {{ large }}, and height {{ height }}
      .center
        p.solution Please do calculations and introduce your results
        p.inline.data Width (m)
          input.center.data(:class="checkedWidth" v-model.number='enterWidth')
          <span class="error" v-if="errorWidth">[e: {{ errorWidth.toPrecision(2) }}%]</span>
        p.inline.data Depth (m)
          input.center.data(:class="checkedLarge" v-model.number='enterLarge')
          <span class="error" v-if="errorLarge">[e: {{ errorLarge.toPrecision(2) }}%]</span>
        p.inline.data Height (m)
          input.center.data(:class="checkedHeight" v-model.number='enterHeight')
          <span class="error" v-if="errorHeight">[e: {{ errorHeight.toPrecision(2) }}%]</span>
        p.inline.data Pressure (S.I.)
          input.center.data(:class="checkedPressure" v-model='enterPressure')
          <span class="error" v-if="errorPressure">[e: {{ errorPressure.toPrecision(2) }}%]</span>
        p.inline.data Floor area (m<sup>2</sup>)
          input.center.data(:class="checkedArea" v-model='enterArea')
          <span class="error" v-if="errorArea">[e: {{ errorArea.toPrecision(2) }}%]</span>
        p.inline.data Force (N)
          input.center.data(:class="checkedForce" v-model='enterForce')
          <span class="error" v-if="errorForce">[e: {{ errorForce.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterHeight: '',
      errorHeight: 0,
      enterWidth: '',
      errorWidth: 0,
      enterLarge: '',
      errorLarge: 0,
      enterPressure: '',
      errorPressure: 0,
      enterArea: '',
      errorArea: 0,
      enterForce: '',
      errorForce: 0
    }
  },
  computed: {
    height: function () {
      console.clear()
      let max = 10
      let min = 3
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    width: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    large: function () {
      let max = 10
      let min = 2
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    area: function () {
      return this.width * this.large
    },
    force: function () {
      return 101300 * this.area
    },
    checkedWidth: function () {
      this.errorWidth = this.errorRelative('Width => ', this.width, parseFloat(this.enterWidth))
      return this.errorWidth < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedLarge: function () {
      this.errorLarge = this.errorRelative('Large => ', this.large, parseFloat(this.enterLarge))
      return this.errorLarge < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedHeight: function () {
      this.errorHeight = this.errorRelative('Height => ', this.height, parseFloat(this.enterHeight))
      return this.errorHeight < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPressure: function () {
      this.errorPressure = this.errorRelative('Atmospheric pressure => ', 101300, parseFloat(this.enterPressure))
      return this.errorPressure < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedArea: function () {
      this.errorArea = this.errorRelative('Floor area => ', this.area, parseFloat(this.enterArea))
      return this.errorArea < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedForce: function () {
      this.errorForce = this.errorRelative('Force => ', this.force, parseFloat(this.enterForce))
      return this.errorForce < 1e-1 ? 'correct' : 'not-correct'
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
