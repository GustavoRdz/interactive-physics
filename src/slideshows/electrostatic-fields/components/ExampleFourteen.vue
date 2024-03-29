<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A proton is released from rest at point <span style="font-family: Times New Roman;">&#9398;</span> in a uniform electric field that has a magnitude of <span style="font-family: Times New Roman;">8.0&times;10<sup>4</sup> V/m</span>. <br>The proton undergoes a displacement of magnitude <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman;"> = 0.50 m</span> to point <span style="font-family: Times New Roman;">&#9399;</span> in the direction of <span style="font-family: Times New Roman; font-weight: bold;">E</span>. <br>Find the speed of the proton after completing the displacement.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un protón se libera desde el reposo en el punto <span style="font-family: Times New Roman;">&#9398;</span> en un campo eléctrico uniforme que tiene una magnitud de <span style="font-family: Times New Roman;">8.0&times;10<sup>4</sup> V/m</span>. <br>El protón sufre un desplazamiento de magnitud <span style="font-family: Times New Roman; font-style: italic;">d</span><span style="font-family: Times New Roman;"> = 0.50 m</span> hasta el punto <span style="font-family: Times New Roman;">&#9399;</span> en la dirección de <span style="font-family: Times New Roman; font-weight: bold;">E</span>. <br>Encuentre la velocidad del protón después de completar el desplazamiento.
    .center
      img(src='../assets/fig25-6.png' height="200px" style="margin: 40px 0 0 0;")
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Mass (kg)
    //-     input.center.data(:class="checkedMass" v-model.number='enterMass')
    //-     <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
    //-   p.inline.data Radius (m)
    //-     input.center.data(:class="checkedRadius" v-model.number='enterRadius')
    //-     <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>
    //-   p.inline.data Period (s)
    //-     input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
    //-     <span class="error" v-if="errorT">[e: {{ errorT.toPrecision(3) }}%]</span>
    //-   p.inline.data Angular frequency (rad/s)
    //-     input.center.data(:class="checkedAngular" v-model.number='enterAngular')
    //-     <span class="error" v-if="errorOmega">[e: {{ errorOmega.toPrecision(3) }}%]</span>
    //-   p.inline.data Inertia moment (kgm<sup>2</sup>)
    //-     input.center.data(:class="checkedInertia" v-model.number='enterInertia')
    //-     <span class="error" v-if="errorI">[e: {{ errorI.toPrecision(3) }}%]</span>
    //-   p.inline.data Torsion constant (Nm/rad)
    //-     input.center.data(:class="checkedTorsion" v-model.number='enterTorsion')
    //-     <span class="error" v-if="errorTau">[e: {{ errorTau.toPrecision(3) }}%]</span>

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
