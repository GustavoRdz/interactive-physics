<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Fill in the blanks
    .center
    div(class="container" style="display: absolute; width: 50%; height: 500px; border: solid 0px; margin: auto;")
      //- div(class="element" style="left: 400px; top: 0px;")
      //-   p(style="margin: 0 0 0 -10px; border: solid red 0.5px;") <sup style="font-family: Courier; font-size: 15px; margin: 0px -30px 10px  0px"><b>235</b></sup><sub style="font-family: Courier; font-size: 15px; margin: 0px -10px 0px  10px"><b>92</b></sub> <span style="font-family: Courier; font-size: 35px; margin: 0 0 0  10px"><b>Th</b></span>
      div(class="element" style="left: 202px; top: 61px;")
        input(:class="checkedA1" class="masic" v-model.number='enterA1')
        input.center(:class="checkedZ1" class="atomic" v-model.number='enterZ1')
        input(:class="checkedE1" class="elem" v-model.number='enterE1')
      div(class="element" style="left: 357px; top: 73px;")
        input.center(:class="checkedZ2" class="atomic" v-model.number='enterZ2')
        input(:class="checkedA2" class="masic" v-model.number='enterA2')
        input(:class="checkedE2" class="elem" v-model.number='enterE2')
      div(class="element" style="left: 182px; top: 20px;")
        input.center(:class="checkedZ3" class="atomic" v-model.number='enterZ3')
        input(:class="checkedA3" class="masic"  v-model.number='enterA3')
        input(:class="checkedE3"  class="elem" v-model.number='enterE3')
      div(class="element" style="left: 340px; top: 32px;")
        input.center(:class="checkedZ4" class="atomic" v-model.number='enterZ4')
        input.center(:class="checkedA4" class="masic"  v-model.number='enterA4')
        input(:class="checkedE4" class="elem" v-model.number='enterE4')
      div(class="element" style="left: 138px; top: -42px;")
        input.center(:class="checkedZ5" class="atomic" v-model.number='enterZ5')
        input.center(:class="checkedA5" class="masic"  v-model.number='enterA5')
        input(:class="checkedE5"  class="elem" v-model.number='enterE5')
      div(class="element" style="left: 300px; bottom: 27px;")
        input.center(:class="checkedZ6" class="atomic" v-model.number='enterZ6')
        input.center(:class="checkedA6" class="masic"  v-model.number='enterA6')
        input(:class="checkedE6"  class="elem" v-model.number='enterE6')
      div(class="element" style="left: 99px; bottom: 103px;")
        input.center(:class="checkedZ7" class="atomic" v-model.number='enterZ7')
        input.center(:class="checkedA7" class="masic"  v-model.number='enterA7')
        input(:class="checkedE7" class="elem" v-model.number='enterE7')
      div(class="element" style="left: 252px; bottom: 86px;")
        input.center(:class="checkedZ8" class="atomic" v-model.number='enterZ8')
        input.center(:class="checkedA8" class="masic"  v-model.number='enterA8')
        input(:class="checkedE8" class="elem" v-model.number='enterE8')
      div(class="element" style="left: 55px; bottom: 163px;")
        input.center(:class="checkedZ9" class="atomic" v-model.number='enterZ9')
        input.center(:class="checkedA9" class="masic"  v-model.number='enterA9')
        input(:class="checkedE9" class="elem" v-model.number='enterE9')
      div(class="element" style="left: 208px; bottom: 147px;")
        input.center(:class="checkedZ10" class="atomic" v-model.number='enterZ10')
        input.center(:class="checkedA10" class="masic"  v-model.number='enterA10')
        input(:class="checkedE10" class="elem" v-model.number='enterE10')
      div(class="element" style="left: 50px; bottom: 203px;")
        input.center(:class="checkedZ11" class="atomic" v-model.number='enterZ11')
        input.center(:class="checkedA11" class="masic"  v-model.number='enterA11')
        input(:class="checkedE11" class="elem" v-model.number='enterE11')
      div(class="element" style="left: 170px; bottom: 207px;")
        input.center(:class="checkedZ12" class="atomic" v-model.number='enterZ12')
        input.center(:class="checkedA12" class="masic"  v-model.number='enterA12')
        input(:class="checkedE12" class="elem" v-model.number='enterE12')
      div(class="element" style="left: 42.8px; bottom: 246px;")
        input.center(:class="checkedZ13" class="atomic" v-model.number='enterZ13')
        input.center(:class="checkedA13" class="masic" v-model.number='enterA13')
        input(:class="checkedE13" class="elem" v-model.number='enterE13')
      div(class="element" style="left: 170px; bottom: 265px;")
        input.center(:class="checkedZ14" class="atomic" v-model.number='enterZ14')
        input.center(:class="checkedA14" class="masic" v-model.number='enterA14')
        input(:class="checkedE14" class="elem" v-model.number='enterE14')


</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE1: '',
      enterE2: '',
      enterE3: '',
      enterE4: '',
      enterE5: '',
      enterE6: '',
      enterE7: '',
      enterE8: '',
      enterE9: '',
      enterE10: '',
      enterE11: '',
      enterE12: '',
      enterE13: '',
      enterE14: '',
      enterZ1: '',
      enterZ2: '',
      enterZ3: '',
      enterZ4: '',
      enterZ5: '',
      enterZ6: '',
      enterZ7: '',
      enterZ8: '',
      enterZ9: '',
      enterZ10: '',
      enterZ11: '',
      enterZ12: '',
      enterZ13: '',
      enterZ14: '',
      enterA1: '',
      enterA2: '',
      enterA3: '',
      enterA4: '',
      enterA5: '',
      enterA6: '',
      enterA7: '',
      enterA8: '',
      enterA9: '',
      enterA10: '',
      enterA11: '',
      enterA12: '',
      enterA13: '',
      enterA14: ''
    }
  },
  computed: {
    checkedE1: function () {
      let check
      console.log('E1 => ' + 'Th' + ' : ' + this.enterE1)
      check = this.enterE1 === 'Th' ? 'correct' : 'not-correct'
      return check
    },
    checkedE2: function () {
      let check
      console.log('E2 => ' + 'Pa' + ' : ' + this.enterE2)
      check = this.enterE2 === 'Pa' ? 'correct' : 'not-correct'
      return check
    },
    checkedE3: function () {
      let check
      console.log('E3 => ' + 'Ac' + ' : ' + this.enterE3)
      check = this.enterE3 === 'Ac' ? 'correct' : 'not-correct'
      return check
    },
    checkedE4: function () {
      let check
      console.log('E4 => ' + 'Th' + ' : ' + this.enterE4)
      check = this.enterE4 === 'Th' ? 'correct' : 'not-correct'
      return check
    },
    checkedE5: function () {
      let check
      console.log('E5 => ' + 'Fr' + ' : ' + this.enterE5)
      check = this.enterE5 === 'Fr' ? 'correct' : 'not-correct'
      return check
    },
    checkedE6: function () {
      let check
      console.log('E6 => ' + 'Ra' + ' : ' + this.enterE6)
      check = this.enterE6 === 'Ra' ? 'correct' : 'not-correct'
      return check
    },
    checkedE7: function () {
      let check
      console.log('E7 => ' + 'As' + ' : ' + this.enterE7)
      check = this.enterE7 === 'As' ? 'correct' : 'not-correct'
      return check
    },
    checkedE8: function () {
      let check
      console.log('E8 => ' + 'Rn' + ' : ' + this.enterE8)
      check = this.enterE8 === 'Rn' ? 'correct' : 'not-correct'
      return check
    },
    checkedE9: function () {
      let check
      console.log('E9 => ' + 'Bi' + ' : ' + this.enterE9)
      check = this.enterE9 === 'Bi' ? 'correct' : 'not-correct'
      return check
    },
    checkedE10: function () {
      let check
      console.log('E10 => ' + 'Po' + ' : ' + this.enterE10)
      check = this.enterE10 === 'Po' ? 'correct' : 'not-correct'
      return check
    },
    checkedE11: function () {
      let check
      console.log('E11 => ' + 'Pb' + ' : ' + this.enterE11)
      check = this.enterE11 === 'Pb' ? 'correct' : 'not-correct'
      return check
    },
    checkedE12: function () {
      let check
      console.log('E12 => ' + 'Bi' + ' : ' + this.enterE12)
      check = this.enterE12 === 'Bi' ? 'correct' : 'not-correct'
      return check
    },
    checkedE13: function () {
      let check
      console.log('E13 => ' + 'Tl' + ' : ' + this.enterE13)
      check = this.enterE13 === 'Tl' ? 'correct' : 'not-correct'
      return check
    },
    checkedE14: function () {
      let check
      console.log('E14 => ' + 'Po' + ' : ' + this.enterE14)
      check = this.enterE14 === 'Po' ? 'correct' : 'not-correct'
      return check
    },
    checkedA1: function () {
      let check
      console.log('A1 => ' + '231' + ' : ' + this.enterA1)
      check = parseFloat(this.enterA1) === 231 ? 'correct' : 'not-correct'
      return check
    },
    checkedA2: function () {
      let check
      console.log('A2 => ' + '231' + ' : ' + this.enterA2)
      check = parseFloat(this.enterA2) === 231 ? 'correct' : 'not-correct'
      return check
    },
    checkedA3: function () {
      let check
      console.log('A3 => ' + '227' + ' : ' + this.enterA3)
      check = parseFloat(this.enterA3) === 227 ? 'correct' : 'not-correct'
      return check
    },
    checkedA4: function () {
      let check
      console.log('A4 => ' + '227' + ' : ' + this.enterA4)
      check = parseFloat(this.enterA4) === 227 ? 'correct' : 'not-correct'
      return check
    },
    checkedA5: function () {
      let check
      console.log('A5 => ' + '223' + ' : ' + this.enterA5)
      check = parseFloat(this.enterA5) === 223 ? 'correct' : 'not-correct'
      return check
    },
    checkedA6: function () {
      let check
      console.log('A6 => ' + '223' + ' : ' + this.enterA6)
      check = parseFloat(this.enterA6) === 223 ? 'correct' : 'not-correct'
      return check
    },
    checkedA7: function () {
      let check
      console.log('A7 => ' + '219' + ' : ' + this.enterA7)
      check = parseFloat(this.enterA7) === 219 ? 'correct' : 'not-correct'
      return check
    },
    checkedA8: function () {
      let check
      console.log('A8 => ' + '219' + ' : ' + this.enterA8)
      check = parseFloat(this.enterA8) === 219 ? 'correct' : 'not-correct'
      return check
    },
    checkedA9: function () {
      let check
      console.log('A9 => ' + '215' + ' : ' + this.enterA9)
      check = parseFloat(this.enterA9) === 215 ? 'correct' : 'not-correct'
      return check
    },
    checkedA10: function () {
      let check
      console.log('A10 => ' + '215' + ' : ' + this.enterA10)
      check = parseFloat(this.enterA10) === 215 ? 'correct' : 'not-correct'
      return check
    },
    checkedA11: function () {
      let check
      console.log('A11 => ' + '211' + ' : ' + this.enterA11)
      check = parseFloat(this.enterA11) === 211 ? 'correct' : 'not-correct'
      return check
    },
    checkedA12: function () {
      let check
      console.log('A12 => ' + '211' + ' : ' + this.enterA12)
      check = parseFloat(this.enterA12) === 211 ? 'correct' : 'not-correct'
      return check
    },
    checkedA13: function () {
      let check
      console.log('A13 => ' + '207' + ' : ' + this.enterA13)
      check = parseFloat(this.enterA13) === 207 ? 'correct' : 'not-correct'
      return check
    },
    checkedA14: function () {
      let check
      console.log('A14 => ' + '211' + ' : ' + parseFloat(this.enterA14))
      check = parseFloat(this.enterA14) === 211 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ1: function () {
      let check
      console.log('Z1 => ' + '90' + ' : ' + this.enterZ1)
      check = parseFloat(this.enterZ1) === 90 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ2: function () {
      let check
      console.log('Z2 => ' + '91' + ' : ' + this.enterZ2)
      check = parseFloat(this.enterZ2) === 91 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ3: function () {
      let check
      console.log('Z3 => ' + '89' + ' : ' + this.enterZ3)
      check = parseFloat(this.enterZ3) === 89 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ4: function () {
      let check
      console.log('Z4 => ' + '90' + ' : ' + this.enterZ4)
      check = parseFloat(this.enterZ4) === 90 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ5: function () {
      let check
      console.log('Z5 => ' + '87' + ' : ' + this.enterZ5)
      check = parseFloat(this.enterZ5) === 87 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ6: function () {
      let check
      console.log('Z6 => ' + '88' + ' : ' + this.enterZ6)
      check = parseFloat(this.enterZ6) === 88 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ7: function () {
      let check
      console.log('Z7 => ' + '85' + ' : ' + this.enterZ7)
      check = parseFloat(this.enterZ7) === 85 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ8: function () {
      let check
      console.log('Z8 => ' + '86' + ' : ' + this.enterZ8)
      check = parseFloat(this.enterZ8) === 86 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ9: function () {
      let check
      console.log('Z9 => ' + '83' + ' : ' + this.enterZ9)
      check = parseFloat(this.enterZ9) === 83 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ10: function () {
      let check
      console.log('Z10 => ' + '84' + ' : ' + this.enterZ10)
      check = parseFloat(this.enterZ10) === 84 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ11: function () {
      let check
      console.log('Z11 => ' + '82' + ' : ' + this.enterZ11)
      check = parseFloat(this.enterZ11) === 82 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ12: function () {
      let check
      console.log('Z12 => ' + '83' + ' : ' + this.enterZ12)
      check = parseFloat(this.enterZ12) === 83 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ13: function () {
      let check
      console.log('Z13 => ' + '81' + ' : ' + parseFloat(this.enterZ13))
      check = parseFloat(this.enterZ13) === 81 ? 'correct' : 'not-correct'
      return check
    },
    checkedZ14: function () {
      let check
      console.log('Z14 => ' + '84' + ' : ' + this.enterZ14)
      check = parseFloat(this.enterZ14) === 84 ? 'correct' : 'not-correct'
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
  width: 30px;
  height: 25px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  margin: 15px 20px 15px 20px;
  font-size: 30px;
  color: blue;
  width: 95%;
}

.solution {
  position: absolute;
  margin: 15px 5px 5px 5px;
  font-size: 20px;
  color: red;
  width: 100%;
}

.not-correct {
  background: #fa4408;
}
.correct {
  background: #F0E1CE;
  border: 0;
}

.element {
  position: relative;
  width: 60px;
  height: 50px;
}

.container {
  //- background-image: assetUrl("~eagle.js/dist/themes/assets/handmadepaper.png");
  background-image: url("../assets/problemSix.png");
  background-repeat: no-repeat;
  background-size: 460px 500px;
}

.elem {
  font-family: Times;
  font-size: 20px;
  position: absolute;
  top: 10px;
  left: 30px;
  margin: 0;
  width: 30px;
  height: 25px;
}
.masic {
  font-family: Times;
  font-size: 10px;
  position: absolute;
  top: 8px;
  right: 25px;
  margin: 0;
  width: 20px;
  height: 13px;
}

.atomic {
  font-family: Times;
  font-size: 10px;
  position: absolute;
  right: 25px;
  margin: 0;
  width: 20px;
  height: 13px;
  top: 24px;
}
</style>
