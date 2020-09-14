<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem An observer passes a certain place with a velocity, along the horizontal axis, of {{ speed.toFixed(3) }}c, and note that the boom of a crane is {{ l1.toFixed(3) }}m long and forms an angle of {{ T1.toFixed(3) }}° with respect to to the earth. According to the crane operator: a) How long is the boom of the crane? b) at what angle it raised?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data L<sub>1</sub> (m)
        input.center.data(:class="checkedL1" v-model.number='enterL1')
      p.inline.data &#x03B8;<sub>1</sub> (degrees)
        input.center.data(:class="checkedT1" v-model.number='enterT1')
      p.inline.data L<sub>1x</sub> (m)
        input.center.data(:class="checkedL1x" v-model.number='enterL1x')
      p.inline.data L<sub>1y</sub> (m)
        input.center.data(:class="checkedL1y" v-model.number='enterL1y')
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
      p.inline.data L<sub>2x</sub> (m)
        input.center.data(:class="checkedL2x" v-model.number='enterL2x')
      p.inline.data L<sub>2y</sub> (m)
        input.center.data(:class="checkedL2y" v-model.number='enterL2y')
      p.inline.data L<sub>2</sub> (m)
        input.center.data(:class="checkedL2" v-model.number='enterL2')
      p.inline.data &#x03B8;<sub>2</sub> (degrees)
        input.center.data(:class="checkedT2" v-model.number='enterT2')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterL1: '',
      enterL1x: '',
      enterL1y: '',
      enterT1: '',
      enterL2: '',
      enterL2x: '',
      enterL2y: '',
      enterT2: '',
      enterV: '',
      direction: '',
      side: ''
    }
  },
  computed: {
    l1: function () {
      let max = 20
      let min = 10
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 1
    },
    speed: function () {
      let max = 80
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      this.side = this.direction === 1 ? 'rigth' : 'left'
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    T1: function () {
      let max = 80
      let min = 30
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    l1x: function () {
      return Math.round(1000 * (this.l1 * Math.cos(this.T1 * Math.PI / 180))) / 1000
    },
    l1y: function () {
      return Math.round(1000 * this.l1 * Math.sin(this.T1 * Math.PI / 180)) / 1000
    },
    l2x: function () {
      return Math.round(1000 * (this.l1x / Math.sqrt(1 - this.speed * this.speed))) / 1000
    },
    l2y: function () {
      return this.l1y
    },
    l2: function () {
      return Math.round(1000 * Math.sqrt(this.l2x * this.l2x + this.l2y * this.l2y)) / 1000
    },
    T2: function () {
      return Math.round(1000 * 180 * Math.atan2(this.l2y, this.l2x) / Math.PI) / 1000
    },
    checkedL1: function () {
      let check
      console.log('L1 => ' + this.l1 + ' : ' + parseFloat(this.enterL1))
      check = this.l1 === parseFloat(this.enterL1) ? 'correct' : 'not-correct'
      return check
    },
    checkedT1: function () {
      let check
      console.log('Theta1 => ' + this.T1 + ' : ' + parseFloat(this.enterT1))
      check = this.T1 === parseFloat(this.enterT1) ? 'correct' : 'not-correct'
      return check
    },
    checkedL1x: function () {
      let check
      console.log('L1x => ' + this.l1x + ' : ' + parseFloat(this.enterL1x))
      check = this.l1x === parseFloat(this.enterL1x) ? 'correct' : 'not-correct'
      return check
    },
    checkedL1y: function () {
      let check
      console.log('L1y => ' + this.l1y + ' : ' + parseFloat(this.enterL1y))
      check = this.l1y === parseFloat(this.enterL1y) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedL2x: function () {
      let check
      console.log('L2x => ' + this.l2x + ' : ' + parseFloat(this.enterL2x))
      check = this.l2x === parseFloat(this.enterL2x) ? 'correct' : 'not-correct'
      return check
    },
    checkedL2y: function () {
      let check
      console.log('L2y => ' + this.l2y + ' : ' + parseFloat(this.enterL2y))
      check = this.l2y === parseFloat(this.enterL2y) ? 'correct' : 'not-correct'
      return check
    },
    checkedL2: function () {
      let check
      console.log('L2 => ' + this.l2 + ' : ' + parseFloat(this.enterL2))
      check = this.l2 === parseFloat(this.enterL2) ? 'correct' : 'not-correct'
      return check
    },
    checkedT2: function () {
      let check
      console.log('Theta2 => ' + this.T2 + ' : ' + parseFloat(this.enterT2))
      check = this.T2 === parseFloat(this.enterT2) ? 'correct' : 'not-correct'
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
