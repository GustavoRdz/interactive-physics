<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem 
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem La distancia entre dos puntos es {{ distancia }}. Si la coordenanda de uno de los puntos es ({{ X1 }}), hallar la coordenada del otro punto.  
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 100" height="100px" width="300px" >
        <!-- x grid -->
        <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="100" stroke-linecap="round"/>
        <!-- x Axis -->
        <path d="M0 50 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="670" y="80" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>
        <!-- y Axis -->
        <path d="M354 40 l0 45" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
        <text x="325" y="80" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
        <!-- plot -->
        <line v-if="showPointI" :x1="x1" y1="50" :x2="Di" y2="50" fill="none" stroke="#0F0" stroke-width="6" stroke-linecap="round"/>
        <line v-if="showPointII" :x1="x1" y1="50" :x2="Dii" y2="50" fill="none" stroke="#00F" stroke-width="6" stroke-linecap="round"/>
        <circle v-if="showPointX1" r="10" :cx="x1" cy="50"  fill="red" stroke="#000" stroke-width="1"/>
        <circle v-if="showPointI" r="10" :cx="Di" cy="50"  fill="green" stroke="#000" stroke-width="1"/>
        <circle v-if="showPointII"r="10" :cx="Dii" cy="50"  fill="blue" stroke="#000" stroke-width="1"/>
        //- <text v-if="showPointX1" :x="x1+10" y="50" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A</text>
        //- <circle v-if="showPointX2"r="6" :cx="x2" cy="50"  fill="green" stroke="#000" stroke-width="1"/>
        //- <text v-if="showPointX2" :x="x2-20" y="40" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">B</text>
      </svg>
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data coordenada conocida
        input.center.data(:class="checkedX1" v-model.number='enterX1')
        <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      p.inline.data i) coordenada
        input.center.data(:class="checkedI" v-model.number='enterI')
        <span class="error" v-if="errorI">[e: {{ errorI.toPrecision(3) }}%]</span>
      p.inline.data ii) coordenada
        input.center.data(:class="checkedII" v-model.number='enterII')
        <span class="error" v-if="errorII">[e: {{ errorII.toPrecision(3) }}%]</span>
      
</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterX1: '',
      errorX1: 0,
      enterI: '',
      errorI: 0,
      enterII: '',
      errorII: 0,
      showPointI: false,
      showPointII: false
    }
  },
  computed: {
    distancia: function () {
      console.clear()
      let max = 6
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    X1: function () {
      console.clear()
      let max = 4
      let min = -4
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    coordenada: function () {
      let max = 10
      let min = -10
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    di: function () {
      return this.distancia + this.X1
    },
    Di: function () {
      return 354 + 38 * this.di
    },
    dii: function () {
      return this.X1 - this.distancia
    },
    Dii: function () {
      return 354 + 38 * this.dii
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('x1 => ', this.X1, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorI < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedI: function () {
      this.errorI = this.errorRelative('I => ', this.di, parseFloat(this.enterI))
      this.showPointI = this.errorI < 1e-1
      return this.errorI < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedII: function () {
      this.errorII = this.errorRelative('II => ', this.dii, parseFloat(this.enterII))
      this.showPointII = this.errorII < 1e-1
      return this.errorII < 1e-1 ? 'correct' : 'not-correct'
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
