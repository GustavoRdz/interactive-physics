<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Calculate the nuclear radius of
    p.problem.center <span style="font-family: Courier;">{{ elements[element] }}-{{ masic }}</span>
    div(style="display: flex; align-items: center; justify-content: center;")
      div(style="width: 250px; height: 200px;display: flex; align-items: center; justify-content: center;")
        div
          div(style="width: 70px;")
            p(style="margin: 0 0 10px 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;") {{ masic }}
          div(style="width: 70px; justify-content: right;")
            p(style="margin: 10px 0 0 0; font-size: 50px; font-family: Courier; display: flex; justify-content: flex-end;")  {{ atomic}}
        div(style="width: 100px;")
          p(style="margin: 0; font-size: 110px; display: flex; justify-content: flex-start; font-family: Courier;")  {{ iso[elements[element]].symbol }}

    //- p(style="font-size: 20px;") {{ elements[element] }} {{ iso[elements[element]] }} {{ element }} {{ iso[elements[element]].A }}  {{ iso[elements[element]].A.length }} {{ isotope }}

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data A
        input.center.data(:class="checkedA" v-model='enterA')
        <span class="error" v-if="errorA">[e: {{ errorA.toPrecision(3) }}%]</span>
      p.inline.data a (m)
        input.center.data(:class="checkeda" v-model='entera')
        <span class="error" v-if="errora">[e: {{ errora.toPrecision(3) }}%]</span>
      p.inline.data r  (m)
        input.center.data(:class="checkedR" v-model='enterR')
        <span class="error" v-if="errorR">[e: {{ errorR.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
import iso from '../assets/isotopes.json'

export default {
  data: function () {
    return {
      enterA: '',
      errorA: 0,
      entera: '',
      errora: 0,
      enterR: '',
      errorR: 0,
      iso: iso,
      a: 1.2e-15
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
    radius: function () {
      return this.a * Math.pow(this.masic, 1 / 3)
    },
    checkedA: function () {
      let check
      console.log('A: => ' + this.masic + ' : ' + parseFloat(this.enterA))
      this.errorA = 100 * Math.abs((this.masic - parseFloat(this.enterA)) / (this.masic + Number.MIN_VALUE))
      console.log('error  ' + this.errorA + ' %')
      check = this.errorA < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkeda: function () {
      let check
      console.log('a: => ' + this.a + ' : ' + parseFloat(this.entera))
      this.errora = 100 * Math.abs((this.a - parseFloat(this.entera)) / (this.a + Number.MIN_VALUE))
      console.log('error  ' + this.errora + ' %')
      check = this.errora < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedR: function () {
      let check
      console.log('r: => ' + this.radius + ' : ' + parseFloat(this.enterR))
      this.errorR = 100 * Math.abs((this.radius - parseFloat(this.enterR)) / (this.radius + Number.MIN_VALUE))
      console.log('error  ' + this.errorR + ' %')
      check = this.errorR < 1e-1 ? 'correct' : 'not-correct'
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
