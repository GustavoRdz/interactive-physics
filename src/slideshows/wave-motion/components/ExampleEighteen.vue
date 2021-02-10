<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A holiday ornament in the shape of a hollow sphere with mass {{ mass }} kg and radius {{ radius }} m is hung from a tree limb by a small loop of wire attached to the surface of the sphere. If the ornament is displaced a small distance and released, it swings back and forth as a physical pendulum with negligible friction. Calculate its period. (Hint: Use the parallel-axis theorem to find the moment of inertia of the sphere about the pivot at the tree limb.)
    //.center
    //  img(src='../assets/equations/venturiPipeProblem.svg' width="200px")
    //.center
    //    img(src='../assets/equations/ex18Solutions.svg'  width="150px")
    
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Mass (kg)
        input.center.data(:class="checkedMass" v-model.number='enterMass')
      p.inline.data Radius (m)
        input.center.data(:class="checkedRadius" v-model.number='enterRadius')
      p.inline.data Inertia of a hollow sphere (axis by center) (kgm<sup>2</sup>)
        input.center.data(:class="checkedInertia" v-model.number='enterInertia')
      p.inline.data Distance from pivot to center of gravity (m)
        input.center.data(:class="checkedDistance" v-model.number='enterDistance')
      p.inline.data Inertia of a hollow sphere (axis by surface)
        input.center.data(:class="checkedInertia2" v-model.number='enterInertia2')
      p.inline.data Angular frequency (rad/s)
        input.center.data(:class="checkedAngular" v-model.number='enterAngular')
      p.inline.data Period (s)
        input.center.data(:class="checkedPeriod" v-model.number='enterPeriod')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterMass: '',
      enterRadius: '',
      enterInertia: '',
      enterDistance: '',
      enterInertia2: '',
      enterAngular: '',
      enterPeriod: ''
    }
  },
  computed: {
    mass: function () {
      let max = 30
      let min = 10
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    radius: function () {
      let max = 100
      let min = 10
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    inertia: function () {
      return Math.round(100000000 * 2 * this.mass * Math.pow(this.radius, 2) / 3) / 100000000
    },
    distance: function () {
      return this.radius
    },
    inertia2: function () {
      return Math.round(100000000 * (this.inertia + this.mass * Math.pow(this.distance, 2))) / 100000000
    },
    angular: function () {
      return Math.round(1000 * Math.sqrt(9.81 * this.mass * this.distance / this.inertia2)) / 1000
    },
    period: function () {
      return Math.round(1000 * 2 * Math.PI / this.angular) / 1000
    },
    checkedMass: function () {
      let check
      console.log('Mass : ' + this.mass + ' : ' + parseFloat(this.enterMass))
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedRadius: function () {
      let check
      console.log('Radius : ' + this.radius + ' : ' + parseFloat(this.enterRadius))
      check = this.radius === parseFloat(this.enterRadius) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia: function () {
      let check
      console.log('Inertia center : ' + this.inertia + ' : ' + parseFloat(this.enterInertia))
      check = this.inertia === parseFloat(this.enterInertia) ? 'correct' : 'not-correct'
      return check
    },
    checkedDistance: function () {
      let check
      console.log('Distance from pivot : ' + this.distance + ' : ' + parseFloat(this.enterDistance))
      check = this.distance === parseFloat(this.enterDistance) ? 'correct' : 'not-correct'
      return check
    },
    checkedInertia2: function () {
      let check
      console.log('Inertia surface : ' + this.inertia2 + ' : ' + parseFloat(this.enterInertia2))
      check = this.inertia2 === parseFloat(this.enterInertia2) ? 'correct' : 'not-correct'
      return check
    },
    checkedAngular: function () {
      let check
      console.log('Angular : ' + this.angular + ' : ' + parseFloat(this.enterAngular))
      check = this.angular === parseFloat(this.enterAngular) ? 'correct' : 'not-correct'
      return check
    },
    checkedPeriod: function () {
      let check
      console.log('Period : ' + this.period + ' : ' + parseFloat(this.enterPeriod))
      check = this.period === parseFloat(this.enterPeriod) ? 'correct' : 'not-correct'
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
</style>
