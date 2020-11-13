<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the binding energy of the following isotope
    p.problem.center <span style="font-family: Courier;">{{ elements[element] }}-{{ masic }}</span>
    div(style="display: flex; align-items: center; justify-content: center;")
      div(style="width: 250px; height: 200px;display: flex; align-items: center; justify-content: center;")
        div
          div(style="width: 70px;")
            p(style="margin: 0 0 10px 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;") {{ masic }}
          div(style="width: 70px; justify-content: right;")
            p(style="margin: 10px 0 0 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;")  {{ atomic }}
        div(style="width: 100px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  {{ iso[elements[element]].symbol }}

    //- p(style="font-size: 10px;") {{ elements[element] }} {{ iso[elements[element]] }} {{ element }}
    //- p {{ mass }} {{ massDefect }}

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A
        input.center.data(:class="checkedA" v-model.number='enterA')
      p.inline.data Z
        input.center.data(:class="checkedZ" v-model.number='enterZ')
      p.inline.data N
        input.center.data(:class="checkedN" v-model.number='enterN')
      p.inline.data M(<sup>{{ masic }}</sup>{{ iso[elements[element]].symbol }})
        input.center.data(:class="checkedMass" v-model='enterMass')
      p.inline.data Mass defect
        input.center.data(:class="checkedMassDefect" v-model='enterMassDefect')
      p.inline.data E<sub>b</sub>
        input.center.data(:class="checkedEb" v-model='enterEb')

</template>
<script>
import eagle from 'eagle.js'
import iso from '../assets/isotopes.json'
export default {
  data: function () {
    return {
      enterA: '',
      enterZ: '',
      enterN: '',
      enterMass: '',
      enterMassDefect: '',
      enterEb: '',
      iso: iso
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
    neutronMass: function () {
      return this.iso['neutron'].mass[0]
    },
    protonMass: function () {
      return this.iso['Hydrogen'].mass[0]
    },
    masic: function () {
      return this.iso[this.elements[this.element]].A[this.isotope]
    },
    mass: function () {
      return this.iso[this.elements[this.element]].mass[this.isotope]
    },
    atomic: function () {
      return this.iso[this.elements[this.element]].z
    },
    neutrons: function () {
      return this.masic - this.atomic
    },
    massDefect: function () {
      return Math.round(1000000 * (this.atomic * this.protonMass + this.neutrons * this.neutronMass - this.mass)) / 1000000
    },
    bindE: function () {
      return Math.round(1000 * (this.massDefect * 931.494)) / 1000
    },
    checkedA: function () {
      let check
      console.log('A: => ' + this.masic + ' : ' + parseFloat(this.enterA))
      check = this.masic === parseFloat(this.enterA) ? 'correct' : 'not-correct'
      return check
    },
    checkedZ: function () {
      let check
      console.log('Z: => ' + this.atomic + ' : ' + parseFloat(this.enterZ))
      check = this.atomic === parseFloat(this.enterZ) ? 'correct' : 'not-correct'
      return check
    },
    checkedN: function () {
      let check
      console.log('N: => ' + this.neutrons + ' : ' + parseFloat(this.enterN))
      check = this.neutrons === parseFloat(this.enterN) ? 'correct' : 'not-correct'
      return check
    },
    checkedMass: function () {
      let check
      console.log('isotope Mass: => ' + this.mass + ' : ' + this.enterMass)
      check = this.mass === parseFloat(this.enterMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedMassDefect: function () {
      let check
      console.log('Mass defect: => ' + this.massDefect + ' : ' + this.enterMassDefect)
      check = this.massDefect === parseFloat(this.enterMassDefect) ? 'correct' : 'not-correct'
      return check
    },
    checkedEb: function () {
      let check
      console.log('Eb: => ' + this.bindE + ' : ' + this.enterEb)
      check = this.bindE === parseFloat(this.enterEb) ? 'correct' : 'not-correct'
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
