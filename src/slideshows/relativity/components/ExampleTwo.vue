<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A man on the moon observes two spaceships, <span style="font-family: times; font-style: italic; font-weight: bold;">A</span> and <span style="font-family: times; font-style: italic; font-weight: bold;">B</span> that are heading toward him in opposite directions (<span style="font-family: times; font-style: italic; font-weight: bold;">A</span> from the {{ side }}) and at a respective speeds of {{ Math.abs(speedA) }}c and {{ Math.abs(speedB) }}c. Calculate the following velocities
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un hombre en la luna observa dos naves espaciales, <span style="font-family: times; font-style: italic; font-weight: bold;">A</span> y <span style="font-family: times; font-style: italic; font-weight: bold;">B</span>, que se dirigen hacia él en direcciones opuestas (<span style="font-family: times; font-style: italic; font-weight: bold;">A</span> desde la {{ side }}) y con velocidades respectivas de {{ Math.abs(speedA) }}c y {{ Math.abs(speedB) }}c. Calcula las siguientes velocidades
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Velocity of A from the moon (in c)
        input.center.data(:class="checkedAMoon" v-model.number='enterAMoon')
        <span class="error" v-if="errorAMoon">[e: {{ errorAMoon.toPrecision(3) }}%]</span>
      p.inline.data Velocity of B from the moon (in c)
        input.center.data(:class="checkedBMoon" v-model.number='enterBMoon')
        <span class="error" v-if="errorBMoon">[e: {{ errorBMoon.toPrecision(3) }}%]</span>
      p.inline.data Velocity of B from A (in c)
        input.center.data(:class="checkedBA" v-model.number='enterBA')
        <span class="error" v-if="errorBA">[e: {{ errorBA.toPrecision(3) }}%]</span>
      p.inline.data Velocity of A from B (in c)
        input.center.data(:class="checkedAB" v-model='enterAB')
        <span class="error" v-if="errorAB">[e: {{ errorAB.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the moon from A (in c)
        input.center.data(:class="checkedMoonA" v-model='enterMoonA')
        <span class="error" v-if="errorMoonA">[e: {{ errorMoonA.toPrecision(3) }}%]</span>
      p.inline.data Velocity of the moon from B (in c)
        input.center.data(:class="checkedMoonB" v-model='enterMoonB')
        <span class="error" v-if="errorMoonB">[e: {{ errorMoonB.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterAMoon: '',
      errorAMoon: 0,
      enterBMoon: '',
      errorBMoon: 0,
      enterBA: '',
      errorBA: 0,
      enterAB: '',
      errorAB: 0,
      enterMoonA: '',
      errorMoonA: 0,
      enterMoonB: '',
      errorMoonB: 0,
      direction: '',
      side: ''
    }
  },
  computed: {
    speedA: function () {
      console.clear()
      let max = 100
      let min = 50
      this.direction = (Math.round(Math.random()) - 0.5) * 2
      if (this.language) {
        this.side = this.direction === 1 ? 'izquierda' : 'derecha'
      } else {
        this.side = this.direction === 1 ? 'left' : 'rigth'
      }
      // this.side = this.direction === 1 ? 'left' : 'rigth'
      console.log('direction: ' + this.direction)
      console.log('side: ' + this.side)
      return (Math.round(Math.random() * (max - min + 1) + min) / 100) * this.direction
    },
    speedB: function () {
      let max = 50
      let min = 20
      return (Math.round(Math.random() * (max - min + 1) + min) / 100) * (-this.direction)
    },
    speedAfromB: function () {
      return this.speedA - this.speedB
    },
    speedBfromA: function () {
      // v2 = v1 -v
      return this.speedB - this.speedA
    },
    // electronAlpha: function () {
    //   return -this.electronAlphaSpeed
    // },
    checkedAMoon: function () {
      let check
      let elem = this.speedA
      console.log('A from M => ' + elem + ' : ' + parseFloat(this.enterAMoon))
      this.errorAMoon = 100 * Math.abs((elem - parseFloat(this.enterAMoon)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorAMoon + ' %')
      check = this.errorAMoon < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedBMoon: function () {
      let check
      let elem = this.speedB
      console.log('B from M => ' + elem + ' : ' + parseFloat(this.enterBMoon))
      this.errorBMoon = 100 * Math.abs((elem - parseFloat(this.enterBMoon)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorBMoon + ' %')
      check = this.errorBMoon < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedBA: function () {
      let check
      let elem = this.speedBfromA
      console.log('B from A => ' + elem + ' : ' + parseFloat(this.enterBA))
      this.errorBA = 100 * Math.abs((elem - parseFloat(this.enterBA)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorBA + ' %')
      check = this.errorBA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedAB: function () {
      let check
      let elem = this.speedAfromB
      console.log('A from B => ' + elem + ' : ' + parseFloat(this.enterAB))
      this.errorAB = 100 * Math.abs((elem - parseFloat(this.enterAB)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorAB + ' %')
      check = this.errorAB < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonA: function () {
      let check
      let elem = -this.speedA
      console.log('M from A => ' + elem + ' : ' + parseFloat(this.enterMoonA))
      this.errorMoonA = 100 * Math.abs((elem - parseFloat(this.enterMoonA)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorMoonA + ' %')
      check = this.errorMoonA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedMoonB: function () {
      let check
      let elem = -this.speedB
      console.log('M from B => ' + elem + ' : ' + parseFloat(this.enterMoonB))
      this.errorMoonB = 100 * Math.abs((elem - parseFloat(this.enterMoonB)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorMoonB + ' %')
      check = this.errorMoonB < 1e-1 ? 'correct' : 'not-correct'
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
