<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem <strong>Weighing Astronauts</strong>. This procedure has actually been used to “weigh” astronauts in space. A {{ chairMass }}-kg chair is attached to a spring and allowed to oscillate. When it is empty, the chair takes {{ emptyPeriod }} s to make one complete vibration. But with an astronaut sitting in it, with her feet off the floor, the chair takes {{ occupiedPeriod }} s for one cycle. What is the mass of the astronaut?

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Chair mass (kg)
        input.center.data(:class="checkedChairMass" v-model.number='enterChairMass')
      p.inline.data Empty chair period (s)
        input.center.data(:class="checkedEmptyPeriod" v-model.number='enterEmptyPeriod')
      p.inline.data chair angular frequency (rad/s)
        input.center.data(:class="checkedAngular1" v-model.number='enterAngular1')
      p.inline.data Spring constant (N/m)
        input.center.data(:class="checkedElastic" v-model.number='enterElastic')
      p.inline.data Occupied chair period (s)
        input.center.data(:class="checkedOccupiedPeriod" v-model.number='enterOccupiedPeriod')
      p.inline.data chair + astronaut &omega; (rad/s)
        input.center.data(:class="checkedAngular2" v-model.number='enterAngular2')
      p.inline.data Astronaut mass (kg)
        input.center.data(:class="checkedAstronautMass" v-model='enterAstronautMass')


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterChairMass: '',
      enterEmptyPeriod: '',
      enterElastic: '',
      enterAngular1: '',
      enterOccupiedPeriod: '',
      enterAngular2: '',
      enterAstronautMass: ''
    }
  },
  computed: {
    chairMass: function () {
      let max = 50
      let min = 30
      return Math.round(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    emptyPeriod: function () {
      let max = 2
      let min = 1
      return Math.round(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    occupiedPeriod: function () {
      let max = 3 * this.emptyPeriod
      let min = Math.sqrt(3) * this.emptyPeriod
      return Math.round(1000 * (Math.random() * (max - min + 1) + min)) / 1000
    },
    angular1: function () {
      return Math.round(2000 * Math.PI / this.emptyPeriod) / 1000
    },
    elasticK: function () {
      return Math.round(1000 * this.chairMass * Math.pow(this.angular1, 2)) / 1000
    },
    angular2: function () {
      return Math.round(2000 * Math.PI / this.occupiedPeriod) / 1000
    },
    astronautMass: function () {
      return Math.round(1000 * (this.elasticK / Math.pow(this.angular2, 2) - this.chairMass)) / 1000
    },
    checkedChairMass: function () {
      let check
      console.log('Chair mass : ' + this.chairMass + ' : ' + parseFloat(this.enterChairMass))
      check = this.chairMass === parseFloat(this.enterChairMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedEmptyPeriod: function () {
      let check
      console.log('Empty chair period : ' + this.emptyPeriod + ' : ' + parseFloat(this.enterEmptyPeriod))
      check = this.emptyPeriod === parseFloat(this.enterEmptyPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular1: function () {
      let check
      console.log('Empty chair angular frequency: ' + this.angular1 + ' : ' + parseFloat(this.enterAngular1))
      check = this.angular1 === parseFloat(this.enterAngular1) ? 'correct' : 'not-correct'
      return check
    },
    checkedElastic: function () {
      let check
      console.log('Elastic Constant : ' + this.elasticK + ' : ' + parseFloat(this.enterElastic))
      check = this.elasticK === parseFloat(this.enterElastic) ? 'correct' : 'not-correct'
      return check
    },
    checkedOccupiedPeriod: function () {
      let check
      console.log('Occupied chair period : ' + this.occupiedPeriod + ' : ' + parseFloat(this.enterOccupiedPeriod))
      check = parseFloat(this.occupiedPeriod) === parseFloat(this.enterOccupiedPeriod) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular2: function () {
      let check
      console.log('astronaut + chair angular frequency: ' + this.angular2 + ' : ' + parseFloat(this.enterAngular2))
      check = this.angular2 === parseFloat(this.enterAngular2) ? 'correct' : 'not-correct'
      return check
    },
    checkedAstronautMass: function () {
      let check
      console.log('Astronaut Mass : ' + this.astronautMass + ' : ' + parseFloat(this.enterAstronautMass))
      check = this.astronautMass === parseFloat(this.enterAstronautMass) ? 'correct' : 'not-correct'
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
  img {
    width: 150px;
    display: inline-block;
  }
  em {
    color: black;
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
  display: inline-block;
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
