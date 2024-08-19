<template lang="pug">
  eg-transition(:enter='enter', :leave='leave')
    .eg-slide-content
      p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Hallar la distancia entre los puntos cuyas coordenandas son:
      p(v-if = 'language' style="margin: 25px 0px -40px 0px;").problem a) A({{ X1 }}) y B({{ X2 }})
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
          <line v-if="showLineA" :x1="x1" y1="50" :x2="x2" y2="50" fill="none" stroke="#F00" stroke-width="6" stroke-linecap="round"/>
          <circle v-if="showPointX1"r="6" :cx="x1" cy="50"  fill="red" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX1" :x="x1+10" y="50" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A</text>
          <circle v-if="showPointX2"r="6" :cx="x2" cy="50"  fill="green" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX2" :x="x2-20" y="40" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">B</text>
        </svg>
      p(v-if = 'language' style="margin: 5px 0px -40px 0px;").problem b) A({{ X3 }}) y B({{ X4 }})
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
          <line v-if="showLineB" :x1="x3" y1="50" :x2="x4" y2="50" fill="none" stroke="#F00" stroke-width="6" stroke-linecap="round"/>
          <circle v-if="showPointX3"r="6" :cx="x3" cy="50"  fill="red" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX3" :x="x3+10" y="50" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A</text>
          <circle v-if="showPointX4"r="6" :cx="x4" cy="50"  fill="green" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX4" :x="x4-20" y="40" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">B</text>
        </svg>
        
      p(v-if = 'language' style="margin: 5px 0px -40px 0px;").problem c) A({{ X5 }}) y B({{ X6 }})
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
          <line v-if="showLineC" :x1="x5" y1="50" :x2="x6" y2="50" fill="none" stroke="#F00" stroke-width="6" stroke-linecap="round"/>
          <circle v-if="showPointX5"r="6" :cx="x5" cy="50"  fill="red" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX5" :x="x5+10" y="50" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">A</text>
          <circle v-if="showPointX6"r="6" :cx="x6" cy="50"  fill="green" stroke="#000" stroke-width="1"/>
          <text v-if="showPointX6" :x="x6-20" y="40" font-size="20" fill="black" font-weight="bold" font-family="Times" font-style="italic">B</text>
        </svg>
        
      .center
        p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
        p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
        p.inline.data (a) A(x)
          input.center.data(:class="checkedX1" v-model.number='enterX1')
          <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
        p.inline.data (a) B(x)
          input.center.data(:class="checkedX2" v-model.number='enterX2')
          <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
        p.inline.data (a) d
          input.center.data(:class="checkedda" v-model.number='enterda')
          <span class="error" v-if="errorda">[e: {{ errorda.toPrecision(3) }}%]</span>
        p.inline.data (b) A(x)
          input.center.data(:class="checkedX3" v-model.number='enterX3')
          <span class="error" v-if="errorX3">[e: {{ errorX3.toPrecision(3) }}%]</span>
        p.inline.data (b) B(x)
          input.center.data(:class="checkedX4" v-model.number='enterX4')
          <span class="error" v-if="errorX4">[e: {{ errorX4.toPrecision(3) }}%]</span>
        p.inline.data (b) d
          input.center.data(:class="checkeddb" v-model.number='enterdb')
          <span class="error" v-if="errordb">[e: {{ errordb.toPrecision(3) }}%]</span>
        p.inline.data (c) A(x)
          input.center.data(:class="checkedX5" v-model.number='enterX5')
          <span class="error" v-if="errorX5">[e: {{ errorX5.toPrecision(3) }}%]</span>
        p.inline.data (c) B(x)
          input.center.data(:class="checkedX6" v-model.number='enterX6')
          <span class="error" v-if="errorX6">[e: {{ errorX6.toPrecision(3) }}%]</span>
        p.inline.data (c) d
          input.center.data(:class="checkeddc" v-model.number='enterdc')
          <span class="error" v-if="errordc">[e: {{ errordc.toPrecision(3) }}%]</span>
      
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
      enterX2: '',
      errorX2: 0,
      enterda: '',
      errorda: 0,
      enterX3: '',
      errorX3: 0,
      enterX4: '',
      errorX4: 0,
      enterdb: '',
      errordb: 0,
      enterX5: '',
      errorX5: 0,
      enterX6: '',
      errorX6: 0,
      enterdc: '',
      errordc: 0
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = 6
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    X2: function () {
      let max = -1
      let min = -6
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x2: function () {
      return 354 + 38 * this.X2
    },
    X3: function () {
      let max = -1
      let min = -6
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x3: function () {
      return 354 + 38 * this.X3
    },
    X4: function () {
      let max = 6
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x4: function () {
      return 354 + 38 * this.X4
    },
    X5: function () {
      let max = -1
      let min = -6
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x5: function () {
      return 354 + 38 * this.X5
    },
    X6: function () {
      let max = 6
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x6: function () {
      return 354 + 38 * this.X6
    },
    da: function () {
      return Math.abs(this.X1 - this.X2)
    },
    db: function () {
      return Math.abs(this.X3 - this.X4)
    },
    dc: function () {
      return Math.abs(this.X5 - this.X6)
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('x1 => ', this.X1, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX2: function () {
      this.errorX2 = this.errorRelative('x2 => ', this.X2, parseFloat(this.enterX2))
      this.showPointX2 = this.errorX2 < 1e-1
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedda: function () {
      this.errorda = this.errorRelative('da => ', this.da, parseFloat(this.enterda))
      this.showLineA = this.errorda < 1e-1
      return this.errorda < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX3: function () {
      this.errorX3 = this.errorRelative('x3 => ', this.X3, parseFloat(this.enterX3))
      this.showPointX3 = this.errorX3 < 1e-1
      return this.errorX3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX4: function () {
      this.errorX4 = this.errorRelative('x4 => ', this.X4, parseFloat(this.enterX4))
      this.showPointX4 = this.errorX4 < 1e-1
      return this.errorX4 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkeddb: function () {
      this.errordb = this.errorRelative('db => ', this.db, parseFloat(this.enterdb))
      this.showLineB = this.errordb < 1e-1
      return this.errordb < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX5: function () {
      this.errorX5 = this.errorRelative('x5 => ', this.X5, parseFloat(this.enterX5))
      this.showPointX5 = this.errorX5 < 1e-1
      return this.errorX5 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX6: function () {
      this.errorX6 = this.errorRelative('x6 => ', this.X6, parseFloat(this.enterX6))
      this.showPointX6 = this.errorX6 < 1e-1
      return this.errorX6 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkeddc: function () {
      this.errordc = this.errorRelative('dc => ', this.dc, parseFloat(this.enterdc))
      this.showLineC = this.errordc < 1e-1
      return this.errordc < 1e-1 ? 'correct' : 'not-correct'
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
