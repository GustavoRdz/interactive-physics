<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem The pilot on a spaceship (<span style="font-family: times; font-style: italic; font-weight: bold;">A</span>) that moves at a velocity of {{ Math.abs(speedA) }} c respect to a radar on Earth, the radar operators detects another spaceship (<span style="font-family: times; font-style: italic; font-weight: bold;">B</span>) that moves toward the first spacecraft at a velocity of {{ Math.abs(speedB) }}  c. Suppose <span style="font-family: times; font-style: italic; font-weight: bold;">A</span> moves is to the {{ side }} and <span style="font-family: times; font-style: italic; font-weight: bold;">B</span> in opposite direction, Determine:
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem El piloto de una nave espacial (<span style="font-family: times; font-style: italic; font-weight: bold;">A</span>) que se mueve a una velocidad de {{ Math.abs(speedA) }} c con respecto a un radar en la Tierra, los operadores de radar detectan otra nave espacial (<span style="font-family: times; font-style: italic; font-weight: bold;">B</span>) que se mueve hacia la primera nave espacial a una velocidad de {{ Math.abs(speedB) }} c. Suponga que <span style="font-family: times; font-style: italic; font-weight: bold;">A</span> se mueve hacia la {{ side }} y <span style="font-family: times; font-style: italic; font-weight: bold;">B</span> en dirección opuesta, determine:
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Velocity of A from the radar (in c)
        input.center.data(:class="checkedARadar" v-model.number='enterARadar')
        <span class="error" v-if="errorARadar">[e: {{ errorARadar.toPrecision(3) }}%]</span>
      p.inline.data Velocity of B from the radar (in c)
        input.center.data(:class="checkedBRadar" v-model.number='enterBRadar')
        <span class="error" v-if="errorBRadar">[e: {{ errorBRadar.toPrecision(3) }}%]</span>
      p.inline.data Velocity of B from A (in c)
        input.center.data(:class="checkedBA" v-model.number='enterBA')
        <span class="error" v-if="errorBA">[e: {{ errorBA.toPrecision(3) }}%]</span>
      p.inline.data Velocity of A from B (in c)
        input.center.data(:class="checkedAB" v-model='enterAB')
        <span class="error" v-if="errorAB">[e: {{ errorAB.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the radar from A (in c)
        input.center.data(:class="checkedRadarA" v-model='enterRadarA')
        <span class="error" v-if="errorRadarA">[e: {{ errorRadarA.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the radar from B (in c)
        input.center.data(:class="checkedRadarB" v-model='enterRadarB')
        <span class="error" v-if="errorRadarB">[e: {{ errorRadarB.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterARadar: '',
      errorARadar: 0,
      enterBRadar: '',
      errorBRadar: 0,
      enterBA: '',
      errorBA: 0,
      enterAB: '',
      errorAB: 0,
      enterRadarA: '',
      errorRadarA: 0,
      enterRadarB: '',
      errorRadarB: 0,
      direction: '',
      side: ''
    }
  },
  computed: {
    speedA: function () {
      console.clear()
      let max = 95
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      // this.side = this.direction === 1 ? 'rigth' : 'left'
      if (this.language) {
        this.side = this.direction === 1 ? 'derecha' : 'izquierda'
      } else {
        this.side = this.direction === 1 ? 'right' : 'left'
      }
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * this.direction
    },
    speedB: function () {
      let max = 95
      let min = 50
      return (Math.round(1 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * -this.direction
    },
    speedAB: function () {
      return (this.speedA - this.speedB) / (1 - (this.speedA * this.speedB))
    },
    speedBA: function () {
      return -this.speedAB
    },
    checkedARadar: function () {
      this.errorARadar = this.errorRelative('A from R => ', this.speedA, parseFloat(this.enterARadar))
      return this.errorARadar < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBRadar: function () {
      this.errorBRadar = this.errorRelative('B from R => ', this.speedB, parseFloat(this.enterBRadar))
      return this.errorBRadar < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBA: function () {
      this.errorBA = this.errorRelative('B from A => ', this.speedBA, parseFloat(this.enterBA))
      return this.errorBA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAB: function () {
      this.errorAB = this.errorRelative('A from B => ', this.speedAB, parseFloat(this.enterAB))
      return this.errorAB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRadarA: function () {
      this.errorRadarA = this.errorRelative('R from A => ', -this.speedA, parseFloat(this.enterRadarA))
      return this.errorRadarA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRadarB: function () {
      this.errorRadarB = this.errorRelative('R from B => ', -this.speedB, parseFloat(this.enterRadarB))
      return this.errorRadarB < 1e-1 ? 'correct' : 'not-correct'
    }
  },
  methods: {
    message: function (name) {
      return
    },
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
    // FIGURE AND CAPTIONS
    .figure {
      p {
        font-size: 0.7em;
        margin-top: 2em;
        margin-bottom: 0;
        color: #555;
      }
      width: 100%;
      margin-left: 0%;
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
.error {
  font-size: 14px;
}
</style>
