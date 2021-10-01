<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem <strong style="color: black;">Ensuring a Tight Fit.</strong> Aluminium rivets used in airplane construction are made slightly larger than rivets holes and cooled by "dry ice" (solid CO<sub>2</sub>) before being driven. If the diameter of a hole is {{ holeDiameter }} mm, what should be the diameter of a rivet at {{ hotTemperature }}&#x00B0;C if its diameter is equal to that of the hole when rivet is cooled to -78&#x00B0;C, the temperature of the dry ice? expansion coefficient for aluminium is 2.4 x 10<sup>-5</sup> &#x00B0;C<sup>-1</sup>.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <em>&#x03C6; @{{ hotTemperature }}&#x00B0;</em>
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(2) }}%]</span>
</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterPhi: '',
      errorPhi: 0,
      alpha: 2.4e-5,
      coldTemperature: -78
    }
  },
  computed: {
    holeDiameter: function () {
      console.clear()
      let max = 60
      let min = 40
      return Math.round(Math.random() * (max - min + 1) + min) / 10
    },
    hotTemperature: function () {
      let max = 30
      let min = 20
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    phi: function () {
      return this.holeDiameter * (1 + this.alpha * (this.hotTemperature - this.coldTemperature))
    },
    checkedPhi: function () {
      this.errorPhi = this.errorRelative('φ diameter=> ', this.phi, parseFloat(this.enterPhi))
      return this.errorPhi < 1e-1 ? 'correct' : 'not-correct'
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
