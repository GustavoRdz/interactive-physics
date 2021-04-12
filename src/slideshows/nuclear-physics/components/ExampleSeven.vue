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
        <span class="error" v-if="errorE1">[e: {{ errorE1.toPrecision(3) }}%]</span>
      p.inline.data {{ part[particles[particle]].symbol}} (u)
        input.center.data(:class="checkedP1" v-model.number='enterP1')
        <span class="error" v-if="errorP1">[e: {{ errorP1.toPrecision(3) }}%]</span>
      p.inline.data {{ part[particles[particle2]].symbol}} (u)
        input.center.data(:class="checkedP2" v-model.number='enterP2')
        <span class="error" v-if="errorP2">[e: {{ errorP2.toPrecision(3) }}%]</span>
      p.inline.data <sup>{{ productA }}</sup>{{ iso[elements[productZ]].symbol }} (u)
        input.center.data(:class="checkedE2" v-model.number='enterE2')
        <span class="error" v-if="errorE2">[e: {{ errorE2.toPrecision(3) }}%]</span>
      p.inline.data mass defect (u)
        input.center.data(:class="checkedM" v-model.number='enterM')
        <span class="error" v-if="errorM">[e: {{ errorM.toPrecision(3) }}%]</span>
      p.inline.data exotermic or endotermic
        input.center.data(:class="checkedExo" v-model.number='enterExo')
        <span class="error" v-if="errorExo">[e: {{ errorExo.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
import iso from '../assets/isotopes.json'
import part from '../assets/particles.json'

export default {
  data: function () {
    return {
      enterE1: '',
      errorE1: 0,
      enterE2: '',
      errorE2: 0,
      enterP1: '',
      errorP1: 0,
      enterP2: '',
      errorP2: 0,
      enterM: '',
      errorM: 0,
      enterExo: '',
      errorExo: 0,
      iso: iso,
      a: 1.2e-15,
      part: part
    }
  },
  computed: {
    element: function () {
      console.clear()
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
      let elem = this.iso[this.elements[this.element]].mass[this.isotope]
      console.log('Iso mass: => ' + elem + ' : ' + parseFloat(this.enterE1))
      // check = this.iso[this.elements[this.element]].mass[this.isotope] === parseFloat(this.enterE1) ? 'correct' : 'not-correct'
      this.errorE1 = 100 * Math.abs((elem - parseFloat(this.enterE1)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorE1 + ' %')
      check = this.errorE1 < 1e-6 ? 'correct' : 'not-correct'
      return check
    },
    checkedP1: function () {
      let check
      let elem = this.part[this.particles[this.particle]].mass
      console.log('P1 mass: => ' + this.part[this.particles[this.particle]].mass + ' : ' + parseFloat(this.enterP1))
      this.errorP1 = 100 * Math.abs((elem - parseFloat(this.enterP1)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorP1 + ' %')
      check = this.errorP1 < 1e-6 ? 'correct' : 'not-correct'
      return check
    },
    checkedP2: function () {
      let check
      let elem = this.part[this.particles[this.particle2]].mass
      console.log('P2 mass: => ' + elem + ' : ' + parseFloat(this.enterP2))
      this.errorP2 = 100 * Math.abs((elem - parseFloat(this.enterP2)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorP2 + ' %')
      check = this.errorP2 < 1e-6 ? 'correct' : 'not-correct'
      return check
    },
    checkedE2: function () {
      let check
      let elem = this.iso[this.elements[this.productZ]].mass[this.isotope2]
      console.log('P2 mass: => ' + elem + ' : ' + parseFloat(this.enterE2))
      this.errorE2 = 100 * Math.abs((elem - parseFloat(this.enterE2)) / (elem + Number.MIN_VALUE))
      console.log('error  ' + this.errorE2 + ' %')
      check = this.errorE2 < 1e-6 ? 'correct' : 'not-correct'
      return check
    },
    checkedM: function () {
      let check
      console.log('mass defect: => ' + this.massDefect + ' : ' + parseFloat(this.enterM))
      this.errorM = 100 * Math.abs((this.massDefect - parseFloat(this.enterM)) / (this.massDefect + Number.MIN_VALUE))
      console.log('error  ' + this.errorM + ' %')
      check = this.errorM < 1e-6 ? 'correct' : 'not-correct'
      return check
    },
    checkedExo: function () {
      let check
      // console.log('Exo : => ' + this.exo + ' : ' + this.enterExo)
      // console.log(this.exo === this.enterExo)
      // console.log(typeof this.exo)
      // console.log(typeof this.enterExo)
      check = this.exo === this.enterExo ? 'correct' : 'not-correct'
      // this.errorExo = 100 * Math.abs((this.time - parseFloat(this.enterTime)) / (this.time + Number.MIN_VALUE))
      // console.log('error  ' + this.errorTime + ' %')
      // check = this.errorTime < 1e-2 ? 'correct' : 'not-correct'
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
