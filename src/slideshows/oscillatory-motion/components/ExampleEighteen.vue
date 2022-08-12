<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A holiday ornament in the shape of a hollow sphere with mass {{ mass }} kg and radius {{ radius }} m is hung from a tree limb by a small loop of wire attached to the surface of the sphere. If the ornament is displaced a small distance and released, it swings back and forth as a physical pendulum with negligible friction. Calculate its period. (Hint: Use the parallel-axis theorem to find the moment of inertia of the sphere about the pivot at the tree limb.)
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un adorno navideño en forma de esfera hueca con masa de {{ mass }} kg y radio de {{ radius }} m cuelga de la rama de un árbol mediante un pequeño lazo de alambre unido a la superficie de la esfera. Si el adorno se desplaza una pequeña distancia y se suelta, se balancea hacia adelante y hacia atrás como un péndulo físico con una fricción insignificante. Calcula su periodo. (Sugerencia: use el teorema del eje paralelo para encontrar el momento de inercia de la esfera con respecto al pivote en la rama del árbol).   
    
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(3) }}%]</span>
      p.inline.data Radius (m)
        input.center.data(:class="checkedRadius" v-model.number='enterRadius')
        <span class="error" v-if="errorRadius">[e: {{ errorRadius.toPrecision(3) }}%]</span>
      p.inline.data Inertia of a hollow sphere (axis by center) (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')
        <span class="error" v-if="errorInertia">[e: {{ errorInertia.toPrecision(3) }}%]</span>
      p.inline.data Distance from pivot to center of gravity (m)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
        <span class="error" v-if="errorDistance">[e: {{ errorDistance.toPrecision(3) }}%]</span>
      p.inline.data Inertia of a hollow sphere (axis by surface)
        input.center.data(:class="checkedInertia2" v-model.number='enterInertia2')
        <span class="error" v-if="errorInertia2">[e: {{ errorInertia2.toPrecision(3) }}%]</span>
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
        <span class="error" v-if="errorAngular">[e: {{ errorAngular.toPrecision(3) }}%]</span>
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')
        <span class="error" v-if="errorPeriod">[e: {{ errorPeriod.toPrecision(3) }}%]</span>

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
      errorMass: 0,
      enterRadius: '',
      errorRadius: 0,
      enterInertia: '',
      errorInertia: 0,
      enterDistance: '',
      errorDistance: 0,
      enterInertia2: '',
      errorInertia2: 0,
      enterAngular: '',
      errorAngular: 0,
      enterPeriod: '',
      errorPeriod: 0
    }
  },
  computed: {
    mass: function () {
      console.clear()
      let max = 30
      let min = 10
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    radius: function () {
      let max = 100
      let min = 10
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    inertia: function () {
      return 2 * this.mass * Math.pow(this.radius, 2) / 3
    },
    distance: function () {
      return this.radius
    },
    inertia2: function () {
      return this.inertia + this.mass * Math.pow(this.distance, 2)
    },
    angular: function () {
      return Math.sqrt(9.81 * this.mass * this.distance / this.inertia2)
    },
    period: function () {
      return 2 * Math.PI / this.angular
    },
    checkedMass: function () {
      this.errorMass = this.errorRelative('Mass => ', this.mass, parseFloat(this.enterMass))
      return this.errorMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedRadius: function () {
      this.errorRadius = this.errorRelative('Radius => ', this.radius, parseFloat(this.enterRadius))
      return this.errorRadius < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInertia: function () {
      this.errorInertia = this.errorRelative('Inertia => ', this.inertia, parseFloat(this.enterInertia))
      return this.errorInertia < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDistance: function () {
      this.errorDistance = this.errorRelative('Distance => ', this.distance, parseFloat(this.enterDistance))
      return this.errorDistance < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedInertia2: function () {
      this.errorInertia2 = this.errorRelative('Inertia 2 => ', this.inertia2, parseFloat(this.enterInertia2))
      return this.errorInertia2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngular: function () {
      this.errorAngular = this.errorRelative('Angular => ', this.angular, parseFloat(this.enterAngular))
      return this.errorAngular < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPeriod: function () {
      this.errorPeriod = this.errorRelative('Period => ', this.period, parseFloat(this.enterPeriod))
      return this.errorPeriod < 1e-1 ? 'correct' : 'not-correct'
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
