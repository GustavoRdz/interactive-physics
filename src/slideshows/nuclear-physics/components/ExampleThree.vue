<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the nuclear binding energy per nucleon for the isotope
    p.center.problem <span style="font-family: Courier;">{{ elements[element] }}-{{ masic }}</span>
    div(style="display: flex; align-items: center; justify-content: center;")
      div(style="width: 250px; height: 200px;display: flex; align-items: center; justify-content: center;")
        div
          div(style="width: 70px;")
            p(style="margin: 0 0 10px 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;") {{ masic }}
          div(style="width: 70px; justify-content: right;")
            p(style="margin: 10px 0 0 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;")  {{ atomic }}
        div(style="width: 100px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  {{ iso[elements[element]].symbol }}

    //- p(style="font-size: 15px;") {{ elements[element] }} {{ iso[elements[element]] }} {{ element }} {{ isotope }}
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data N
        input.center.data(:class="checkedN" v-model.number='enterN')
        <span class="error" v-if="errorN">[e: {{ errorN.toPrecision(3) }}%]</span>
      p.inline.data M(<sup>{{ masic }}</sup>{{ iso[elements[element]].symbol }})
        input.center.data(:class="checkedMass" v-model='enterMass')
        <span class="error" v-if="errorMass">[e: {{ errorMass.toPrecision(3) }}%]</span>
      p.inline.data Mass defect
        input.center.data(:class="checkedMassDefect" v-model='enterMassDefect')
        <span class="error" v-if="errorMassDefect">[e: {{ errorMassDefect.toPrecision(3) }}%]</span>
      p.inline.data E<sub>b</sub>
        input.center.data(:class="checkedEb" v-model='enterEb')
        <span class="error" v-if="errorEb">[e: {{ errorEb.toPrecision(3) }}%]</span>
      p.inline.data E<sub>b</sub> per nucleon
        input.center.data(:class="checkedEbN" v-model='enterEbN')
        <span class="error" v-if="errorEbN">[e: {{ errorEbN.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
import iso from '../assets/isotopes.json'
export default {
  data: function () {
    return {
      enterN: '',
      errorN: 0,
      enterMass: '',
      errorMass: 0,
      enterMassDefect: '',
      errorMassDefect: 0,
      enterEb: '',
      errorEb: 0,
      enterEbN: '',
      errorEbN: 0,
      enterL2: '',
      enterLs: '',
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8,
      el2: 3.401,
      iso: iso
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
    bindEN: function () {
      return Math.round(1000 * (this.bindE / this.masic)) / 1000
    },
    checkedN: function () {
      let check
      console.log('N: => ' + this.neutrons + ' : ' + parseFloat(this.enterN))
      this.errorN = 100 * Math.abs((this.neutrons - parseFloat(this.enterN)) / (this.neutrons + Number.MIN_VALUE))
      console.log('error  ' + this.errorN + ' %')
      check = this.errorN < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedMass: function () {
      let check
      console.log('isotope Mass: => ' + this.mass + ' : ' + this.enterMass)
      this.errorMass = 100 * Math.abs((this.mass - parseFloat(this.enterMass)) / (this.mass + Number.MIN_VALUE))
      console.log('error  ' + this.errorMass + ' %')
      check = this.errorMass < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedMassDefect: function () {
      let check
      console.log('Mass defect: => ' + this.massDefect + ' : ' + this.enterMassDefect)
      this.errorMassDefect = 100 * Math.abs((this.massDefect - parseFloat(this.enterMassDefect)) / (this.massDefect + Number.MIN_VALUE))
      console.log('error  ' + this.errorMassDefect + ' %')
      check = this.errorMassDefect < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedEb: function () {
      let check
      console.log('Eb: => ' + this.bindE + ' : ' + this.enterEb)
      this.errorEb = 100 * Math.abs((this.bindE - parseFloat(this.enterEb)) / (this.bindE + Number.MIN_VALUE))
      console.log('error  ' + this.errorEb + ' %')
      check = this.errorEb < 1e-2 ? 'correct' : 'not-correct'
      return check
    },
    checkedEbN: function () {
      let check
      console.log('Eb: => ' + this.bindEN + ' : ' + this.enterEbN)
      this.errorEbN = 100 * Math.abs((this.bindEN - parseFloat(this.enterEbN)) / (this.bindEN + Number.MIN_VALUE))
      console.log('error  ' + this.errorEbN + ' %')
      check = this.errorEbN < 1e-2 ? 'correct' : 'not-correct'
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
