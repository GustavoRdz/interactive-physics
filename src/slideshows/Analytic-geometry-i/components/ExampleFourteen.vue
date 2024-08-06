<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A thin metal disk with mass {{ mass }} kg and radius {{ radius }} cm is attached at its center to a long fiber. The disk, when twisted and released, oscillates with a period of {{ period }} s. Find the torsion constant of the fiber.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un disco delgado de metal con masa de {{ mass }} kg y radio de {{ radius }} cm está unido en su centro a una fibra larga. El disco, cuando se tuerce y se suelta, oscila con un período de {{ period }} s. Encuentre la constante de torsión de la fibra.
    .center
        img(src='../assets/problem14.png' height="200px")
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
      p.inline.data Radius (m)
        input.center.data(:class="checkedRadius" v-model.number='enterRadius')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
        <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
      p.inline.data Inertia moment (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')
        <span class="error" v-if="errorI">[e: {{ errorI.toPrecision(3) }}%]</span>
      p.inline.data Torsion constant (Nm/rad)
        input.center.data(:class="checkedTorsion" v-model.number='enterTorsion')
        <span class="error" v-if="errorTau">[e: {{ errorTau.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterMass: '',
      errorM: 0,
      enterRadius: '',
      errorR: 0,
      enterPeriod: '',
      errorT: 0,
      enterAngular: '',
      errorOmega: 0,
      enterInertia: '',
      errorI: 0,
      enterTorsion: '',
      errorTau: 0
    }
  },
  computed: {
    mass: function () {
      console.clear()
      let max = 99
      let min = 75
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    radius: function () {
      let max = 3000
      let min = 600
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    period: function () {
      let max = 3000
      let min = 500
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    angular: function () {
      return 2 * Math.PI / this.period
    },
    inertia: function () {
      return this.mass * this.radius ** 2 / 2
    },
    torsion: function () {
      return this.angular * this.angular * this.inertia
    },
    checkedMass: function () {
      this.errorM = this.errorRelative('Mass => ', this.mass, parseFloat(this.enterMass))
      return this.errorM < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRadius: function () {
      this.errorR = this.errorRelative('Radius => ', this.radius / 100, parseFloat(this.enterRadius))
      return this.errorR < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorT = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorT < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorOmega = this.errorRelative('Omega => ', this.angular, parseFloat(this.enterAngular))
      return this.errorOmega < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInertia: function () {
      this.errorI = this.errorRelative('Inertia => ', this.inertia, parseFloat(this.enterInertia))
      return this.errorI < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTorsion: function () {
      this.errorTau = this.errorRelative('Elastic torsion => ', this.torsion, parseFloat(this.enterTorsion))
      return this.errorTau < 1e-1 ? 'correct' : 'not-correct'
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
