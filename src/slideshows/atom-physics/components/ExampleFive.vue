<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem (a) Construct an energy-level diagram for the {{ elements[z-1] }}<span  v-if="z!=1"><sup>{{z-1}}+</sup> ion</span><span v-if="z==1"> atom</span>, for which Z = {{ z }}, using the Bohr model.
    p.problem (b) What is the ionization energy for {{ elements[z-1] }}<span  v-if="z!=1"><sup>{{z-1}}+</sup> ion</span><span v-if="z==1"> atom</span>?

    p.center
      <svg xmlns="http://www.w3.org/2000/svg" height="200px" width="300px" version="1.1" viewBox="0 0 300 200">
      <g transform="translate(0 0)">
        <text x="10" y="15" fill="black" style="font-size: 25px; font-family: Times;">n</text>
        <text x="35" y="200" fill="blue" style="font-size: 15px; font-family: Times;">1</text>
        <text x="35" y="120" fill="blue" style="font-size: 15px; font-family: Times;">2</text>
        <text x="35" y="70" fill="blue" style="font-size: 15px; font-family: Times;">3</text>
        <text x="35" y="42" fill="blue" style="font-size: 15px; font-family: Times;">4</text>
        <text x="35" y="30" fill="blue" style="font-size: 13px; font-family: Times;">5</text>
        <text x="35" y="19" fill="blue" style="font-size: 13px; font-family: Times;">6</text>
        <text x="32" y="10" fill="blue" style="font-size: 20px; font-family: Times;">∞</text>

        <line x1="50" :y1="195" x2="200" :y2="195" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="2.3*scaleFactor*3.4015" x2="200" :y2="2.3*scaleFactor*3.4015" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="3*scaleFactor*1.51177" x2="200" :y2="3*scaleFactor*1.51177" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="3*scaleFactor*0.85037" x2="200" :y2="3*scaleFactor*0.85037" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="3*scaleFactor*0.54424" x2="200" :y2="3*scaleFactor*0.54424" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="3*scaleFactor*0.37794" x2="200" :y2="3*scaleFactor*0.37794" style="stroke:rgb(0,0,0);stroke-width:2" />
        <line x1="50" :y1="2" x2="200" :y2="2" style="stroke:rgb(0,0,0);stroke-width:2" />
        
        <text x="120" y="14" fill="black" style="font-size: 30px;">·</text>
        <text x="120" y="18" fill="black" style="font-size: 30px;">·</text>
        <text x="120" y="22" fill="black" style="font-size: 30px;">·</text>

        <text x="250" y="15" fill="black" style="font-size: 20px; font-family: Times;">E(eV)</text>
        <text x="205" y="199" fill="green" style="font-size: 15px; font-family: Times;">{{ enterE1 }}</text>
        <text x="205" y="118" fill="green" style="font-size: 15px; font-family: Times;">{{ enterE2 }}</text>
        <text x="205" y="70" fill="green" style="font-size: 15px; font-family: Times;">{{ enterE3 }}</text>
        <text x="205" y="41" fill="green" style="font-size: 13px; font-family: Times;">{{ enterE4 }}</text>
        <text x="205" y="26" fill="green" style="font-size: 10px; font-family: Times;">{{ enterE5 }}</text>
        <text x="205" y="18" fill="green" style="font-size: 10px; font-family: Times;">{{ enterE6 }}</text>
        <text x="205" y="7" fill="green" style="font-size: 10px; font-family: Times;">{{ enterEinf }}</text>
      </g>
      </svg>

    .center
      p.solution Please do calculations and introduce your results
      p.data Z
        input.center.data(:class="checkedZ" v-model.number='enterZ')
        <span class="error" v-if="errorZ">[e: {{ errorZ.toPrecision(3) }}%]</span>
      p.data E<sub>1</sub> (eV)
        input.center.data(:class="checkedE1" v-model.number='enterE1')
        <span class="error" v-if="errorE1">[e: {{ errorE1.toPrecision(3) }}%]</span>
      p.data E<sub>2</sub>(eV)
        input.center.data(:class="checkedE2" v-model.number='enterE2')
        <span class="error" v-if="errorE2">[e: {{ errorE2.toPrecision(3) }}%]</span>
      p.data E<sub>3</sub> (eV)
        input.center.data(:class="checkedE3" v-model.number='enterE3')
        <span class="error" v-if="errorE3">[e: {{ errorE3.toPrecision(3) }}%]</span>
      p.data E<sub>4</sub> (eV)
        input.center.data(:class="checkedE4" v-model='enterE4')
        <span class="error" v-if="errorE4">[e: {{ errorE4.toPrecision(3) }}%]</span>
      p.data E<sub>5</sub> (eV)
        input.center.data(:class="checkedE5" v-model='enterE5')
        <span class="error" v-if="errorE5">[e: {{ errorE5.toPrecision(3) }}%]</span>
      p.data E<sub>6</sub> (eV)
        input.center.data(:class="checkedE6" v-model='enterE6')
        <span class="error" v-if="errorE6">[e: {{ errorE6.toPrecision(3) }}%]</span>
      p.data E<sub>∞</sub> (eV)
        input.center.data(:class="checkedEinf" v-model='enterEinf')
        <span class="error" v-if="errorEinf">[e: {{ errorEinf.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterZ: '',
      errorZ: 0,
      enterE1: '',
      errorE1: 0,
      enterE2: '',
      errorE2: 0,
      enterE3: '',
      errorE3: 0,
      enterE4: '',
      errorE4: 0,
      enterE5: '',
      errorE5: 0,
      enterE6: '',
      errorE6: 0,
      enterEinf: '',
      errorEinf: 0,
      factor: -13.606,
      scaleFactor: 14.7,
      elements: ['H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F']
    }
  },
  computed: {
    z: function () {
      console.clear()
      let max = 9
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    e1: function () {
      console.clear()
      return this.factor * this.z ** 2
    },
    e2: function () {
      return this.factor * this.z ** 2 / 4
    },
    e3: function () {
      return this.factor * this.z ** 2 / 9
    },
    e4: function () {
      return this.factor * this.z ** 2 / 16
    },
    e5: function () {
      return this.factor * this.z ** 2 / 25
    },
    e6: function () {
      return this.factor * this.z ** 2 / 36
    },
    eInf: function () {
      return 0
    },
    checkedZ: function () {
      let check
      console.log('Z1 => ' + this.z + ' : ' + parseFloat(this.enterZ))
      this.errorZ = 100 * Math.abs((this.z - parseFloat(this.enterZ)) / (this.z + Number.MIN_VALUE))
      console.log('error  ' + this.errorZ + ' %')
      check = this.errorZ < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE1: function () {
      let check
      console.log('E1 => ' + this.e1 + ' : ' + parseFloat(this.enterE1))
      this.errorE1 = 100 * Math.abs((this.e1 - parseFloat(this.enterE1)) / (this.e1 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE1 + ' %')
      check = this.errorE1 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE2: function () {
      let check
      console.log('E2 => ' + this.e2 + ' : ' + parseFloat(this.enterE2))
      this.errorE2 = 100 * Math.abs((this.e2 - parseFloat(this.enterE2)) / (this.e2 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE2 + ' %')
      check = this.errorE2 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE3: function () {
      let check
      console.log('E3 => ' + this.e3 + ' : ' + parseFloat(this.enterE3))
      this.errorE3 = 100 * Math.abs((this.e3 - parseFloat(this.enterE3)) / (this.e3 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE3 + ' %')
      check = this.errorE3 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE4: function () {
      let check
      console.log('E4 => ' + this.e4 + ' : ' + parseFloat(this.enterE4))
      this.errorE4 = 100 * Math.abs((this.e4 - parseFloat(this.enterE4)) / (this.e4 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE4 + ' %')
      check = this.errorE4 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE5: function () {
      let check
      console.log('E5 => ' + this.e5 + ' : ' + parseFloat(this.enterE5))
      this.errorE5 = 100 * Math.abs((this.e5 - parseFloat(this.enterE5)) / (this.e5 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE5 + ' %')
      check = this.errorE5 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedE6: function () {
      let check
      console.log('E6 => ' + this.e6 + ' : ' + parseFloat(this.enterE6))
      this.errorE6 = 100 * Math.abs((this.e6 - parseFloat(this.enterE6)) / (this.e6 + Number.MIN_VALUE))
      console.log('error  ' + this.errorE6 + ' %')
      check = this.errorE6 < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedEinf: function () {
      let check
      console.log('Einf => ' + this.eInf + ' : ' + parseFloat(this.enterEinf))
      this.errorEinf = 100 * Math.abs((this.eInf - parseFloat(this.enterEinf)) / (this.eInf + Number.MIN_VALUE))
      console.log('error  ' + this.errorEinf + ' %')
      check = this.errorEinf < 1e-1 ? 'correct' : 'not-correct'
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
