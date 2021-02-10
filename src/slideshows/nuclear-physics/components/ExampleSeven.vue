<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Determine the Q value for the following nuclear reaction
    div(style="display: flex; justify-content: center; width: 100%;")

      div(style="width: 200px; height: 200px;display: flex; align-items: center; justify-content: flex-end;")
        div
          div(style="width: 70px;")
            p(style="margin: 0 0 10px 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;") {{ masic }}
          div(style="width: 70px; justify-content: right;")
            p(style="margin: 10px 0 0 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;")  {{ atomic }}
        div(style="width: 110px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  {{ iso[elements[element]].symbol }}


      div(style="width: 270px; height: 200px;display: flex; align-items: center; justify-content: flex-start;")
        div(style="width: 150px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  (<em>{{ part[particles[particle]].symbol}}</em>,<em>{{ part[particles[particle2]].symbol}}</em>)

      div(style="width:250px; height: 200px;display: flex; align-items: center; justify-content: flex-end;")
        div
          div(style="width: 90px;")
            p(style="margin: 0 0 10px 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;") {{ productA }}
          div(style="width: 90px; justify-content: right;")
            p(style="margin: 10px 0 0 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;")  {{ productZ }}
        div(style="width: 1500px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  {{ iso[elements[productZ]].symbol }}

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data <sup>{{ masic }}</sup>{{ iso[elements[element]].symbol }} (u)
        input.center.data(:class="checkedE1" v-model.number='enterE1')
      p.inline.data {{ part[particles[particle]].symbol}} (u)
        input.center.data(:class="checkedP1" v-model.number='enterP1')
      p.inline.data {{ part[particles[particle2]].symbol}} (u)
        input.center.data(:class="checkedP2" v-model.number='enterP2')
      p.inline.data <sup>{{ productA }}</sup>{{ iso[elements[productZ]].symbol }} (u)
        input.center.data(:class="checkedE2" v-model.number='enterE2')
      p.inline.data mass defect (u)
        input.center.data(:class="checkedM" v-model.number='enterM')
      p.inline.data exotermic or endotermic
        input.center.data(:class="checkedExo" v-model.number='enterExo')

</template>
<script>
import eagle from 'eagle.js'
import iso from '../assets/isotopes.json'
import part from '../assets/particles.json'

export default {
  data: function () {
    return {
      enterE1: '',
      enterE2: '',
      enterP1: '',
      enterP2: '',
      enterM: '',
      enterExo: '',
      iso: iso,
      a: 1.2e-15,
      part: part
    }
  },
  computed: {
    element: function () {
      let max = 100
      let min = 1
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    elements: function () {
      let elems = []
      for (var item in iso) {
        elems.push(item)
      }
      return elems
    },
    isotope: function () {
      let max = this.iso[this.elements[this.element]].A.length - 1
      let min = 0
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    masic: function () {
      return this.iso[this.elements[this.element]].A[this.isotope]
    },
    atomic: function () {
      return this.iso[this.elements[this.element]].z
    },
    particle: function () {
      let max = 4
      let min = 0
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    particle2: function () {
      let max = 3
      let min = 0
      let p1 = [0, 1, 2, 3, 4]
      p1.splice(this.particle, 1)
      return p1[Math.floor(Math.random() * (max - min + 1)) + min]
    },
    particles: function () {
      let elems = []
      for (var item in part) {
        elems.push(item)
      }
      return elems
    },
    productA: function () {
      return this.masic + this.part[this.particles[this.particle]].A - this.part[this.particles[this.particle2]].A
    },
    isotope2: function () {
      return this.productA - this.iso[this.elements[this.productZ]].A[0]
    },
    productZ: function () {
      return this.atomic + this.part[this.particles[this.particle]].z - this.part[this.particles[this.particle2]].z
    },
    massDefect: function () {
      return parseFloat((this.iso[this.elements[this.element]].mass[this.isotope] + this.part[this.particles[this.particle]].mass - this.iso[this.elements[this.productZ]].mass[this.isotope2] - this.part[this.particles[this.particle2]].mass).toPrecision(7))
    },
    exo: function () {
      return this.massDefect > 0 ? 'exotermic' : 'endotermic'
    },
    checkedE1: function () {
      let check
      console.log('Iso mass: => ' + this.iso[this.elements[this.element]].mass[this.isotope] + ' : ' + parseFloat(this.enterE1))
      check = this.iso[this.elements[this.element]].mass[this.isotope] === parseFloat(this.enterE1) ? 'correct' : 'not-correct'
      return check
    },
    checkedP1: function () {
      let check
      console.log('P1 mass: => ' + this.part[this.particles[this.particle]].mass + ' : ' + parseFloat(this.enterP1))
      check = this.part[this.particles[this.particle]].mass === parseFloat(this.enterP1) ? 'correct' : 'not-correct'
      return check
    },
    checkedP2: function () {
      let check
      console.log('P2 mass: => ' + this.part[this.particles[this.particle2]].mass + ' : ' + parseFloat(this.enterP2))
      check = this.part[this.particles[this.particle2]].mass === parseFloat(this.enterP2) ? 'correct' : 'not-correct'
      return check
    },
    checkedE2: function () {
      let check
      console.log('P2 mass: => ' + this.iso[this.elements[this.productZ]].mass[this.isotope2] + ' : ' + parseFloat(this.enterE2))
      check = this.iso[this.elements[this.productZ]].mass[this.isotope2] === parseFloat(this.enterE2) ? 'correct' : 'not-correct'
      return check
    },
    checkedM: function () {
      let check
      console.log('mass defect: => ' + this.massDefect + ' : ' + parseFloat(this.enterM))
      check = this.massDefect === parseFloat(this.enterM) ? 'correct' : 'not-correct'
      return check
    },
    checkedExo: function () {
      let check
      console.log('Exo : => ' + this.exo + ' : ' + this.enterExo)
      console.log(this.exo === this.enterExo)
      console.log(typeof this.exo)
      console.log(typeof this.enterExo)
      check = this.exo === this.enterExo ? 'correct' : 'not-correct'
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
  width: 130px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
  font-family: Courier;
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
