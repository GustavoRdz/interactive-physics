<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A photoelectric tube is weighed in a laboratory, and its mass is found to be {{ m2 }}g. After it is sent in a spaceship whose speed is {{ speed }} c and is analyzed again during the flight. What mass will determine ... <br>a) the people in the laboratory? <br>b) the occupants of the spaceship?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data v (in c)
        input.center.data(:class="checkedV" v-model.number='enterV')
      p.inline.data a) m (g)
        input.center.data(:class="checkedMa" v-model.number='enterMa')
      p.inline.data b) m (g)
        input.center.data(:class="checkedMb" v-model.number='enterMb')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMa: '',
      enterMb: '',
      enterV: ''
    }
  },
  computed: {
    m2: function () {
      let max = 100
      let min = 20
      return Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min)
    },
    speed: function () {
      let max = 80
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    m1: function () {
      return Math.round(1000 * this.m2 / Math.sqrt(1 - this.speed * this.speed)) / 1000
    },
    checkedMa: function () {
      let check
      console.log('Ma => ' + this.m1 + ' : ' + parseFloat(this.enterMa))
      check = this.m1 === parseFloat(this.enterMa) ? 'correct' : 'not-correct'
      return check
    },
    checkedV: function () {
      let check
      console.log('V => ' + this.speed + ' : ' + parseFloat(this.enterV))
      check = this.speed === parseFloat(this.enterV) ? 'correct' : 'not-correct'
      return check
    },
    checkedMb: function () {
      let check
      console.log('Mb => ' + this.m2 + ' : ' + parseFloat(this.enterMb))
      check = this.m2 === parseFloat(this.enterMb) ? 'correct' : 'not-correct'
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
