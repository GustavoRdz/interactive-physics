<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A converging lens has a focal length of {{ focus }} cm. Locate the object if a real image is located at a distance from the lens of (a) {{ 2 * focus }} cm and (b) {{ 5* focus }} cm. What If? Redo the calculations if the images are virtual and located at a distance from the lens of (c) {{ 2 * focus }} cm and (d) {{ 5 * focus }} cm.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Focus (cm)
        input.center.data(:class="checkedFocus" v-model.number='enterFocus')
      p.inline.data  p<sub>a</sub> (cm)
        input.center.data(:class="checkedPi" v-model.number='enterPi')
      p.inline.data q<sub>a</sub> (cm)
        input.center.data(:class="checkedQi" v-model.number='enterQi')
      p.inline.data M<sub>a</sub>
        input.center.data(:class="checkedMi" v-model='enterMi')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVi" v-model='enterRVi')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIi" v-model='enterUIi')
    .center
      p.inline.data  p<sub>b</sub> (cm)
        input.center.data(:class="checkedPii" v-model.number='enterPii')
      p.inline.data q<sub>b</sub> (cm)
        input.center.data(:class="checkedQii" v-model.number='enterQii')
      p.inline.data M<sub>b</sub>
        input.center.data(:class="checkedMii" v-model='enterMii')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVii" v-model='enterRVii')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIii" v-model='enterUIii')
    .center
      p.inline.data  p<sub>c</sub> (cm)
        input.center.data(:class="checkedPiii" v-model.number='enterPiii')
      p.inline.data q<sub>c</sub> (cm)
        input.center.data(:class="checkedQiii" v-model.number='enterQiii')
      p.inline.data M<sub>c</sub>
        input.center.data(:class="checkedMiii" v-model='enterMiii')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViii" v-model='enterRViii')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiii" v-model='enterUIiii')
    .center
      p.inline.data  p<sub>d</sub> (cm)
        input.center.data(:class="checkedPiiii" v-model.number='enterPiiii')
      p.inline.data q<sub>d</sub> (cm)
        input.center.data(:class="checkedQiiii" v-model.number='enterQiiii')
      p.inline.data M<sub>d</sub>
        input.center.data(:class="checkedMiiii" v-model='enterMiiii')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViiii" v-model='enterRViiii')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiiii" v-model='enterUIiiii')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterFocus: '',
      enterPi: '',
      enterPii: '',
      enterPiii: '',
      enterPiiii: '',
      enterQi: '',
      enterQii: '',
      enterQiii: '',
      enterQiiii: '',
      enterMi: '',
      enterMii: '',
      enterMiii: '',
      enterMiiii: '',
      enterRVi: '',
      enterRVii: '',
      enterRViii: '',
      enterRViiii: '',
      enterUIi: '',
      enterUIii: '',
      enterUIiii: '',
      enterUIiiii: ''
    }
  },
  computed: {
    focus: function () {
      let max = 50
      let min = 10
      return (Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 10)
    },
    pi: function () {
      return Math.round(1000 * 2 * this.focus) / 1000
    },
    pii: function () {
      return Math.round(1000 * 5 * this.focus / 4) / 1000
    },
    piii: function () {
      return Math.round(1000 * 2 * this.focus / 3) / 1000
    },
    piiii: function () {
      return Math.round(1000 * 5 * this.focus / 6) / 1000
    },
    Mi: function () {
      return Math.round(-1000 * 2 * this.focus / this.pi) / 1000
    },
    Mii: function () {
      return Math.round(-1000 * 5 * this.focus / this.pii) / 1000
    },
    Miii: function () {
      return Math.round(-1000 * -2 * this.focus / this.piii) / 1000
    },
    Miiii: function () {
      return Math.round(-1000 * -5 * this.focus / this.piiii) / 1000
    },
    rVi: function () {
      return 'real'
    },
    rVii: function () {
      return 'real'
    },
    rViii: function () {
      return 'real'
    },
    rViiii: function () {
      return 'real'
    },
    uIi: function () {
      return 'inverted'
    },
    uIii: function () {
      return 'inverted'
    },
    uIiii: function () {
      return 'upright'
    },
    uIiiii: function () {
      return 'upright'
    },
    checkedFocus: function () {
      let check
      console.log('Focus => ' + this.focus + ' : ' + parseFloat(this.enterFocus))
      check = this.focus === parseFloat(this.enterFocus) ? 'correct' : 'not-correct'
      return check
    },
    checkedPi: function () {
      let check
      console.log('Pi => ' + this.pi + ' : ' + parseFloat(this.enterPi))
      check = this.pi === parseFloat(this.enterPi) ? 'correct' : 'not-correct'
      return check
    },
    checkedPii: function () {
      let check
      console.log('Pii => ' + this.pii + ' : ' + parseFloat(this.enterPii))
      check = this.pii === parseFloat(this.enterPii) ? 'correct' : 'not-correct'
      return check
    },
    checkedPiii: function () {
      let check
      console.log('Piii => ' + this.piii + ' : ' + parseFloat(this.enterPiii))
      check = this.piii === parseFloat(this.enterPiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedPiiii: function () {
      let check
      console.log('Piiii => ' + this.piiii + ' : ' + parseFloat(this.enterPiiii))
      check = this.piiii === parseFloat(this.enterPiiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQi: function () {
      let check
      console.log('Qi => ' + 2 * this.focus + ' : ' + parseFloat(this.enterQi))
      check = 2 * this.focus === parseFloat(this.enterQi) ? 'correct' : 'not-correct'
      return check
    },
    checkedQii: function () {
      let check
      console.log('Qii => ' + 5 * this.focus + ' : ' + parseFloat(this.enterQii))
      check = 5 * this.focus === parseFloat(this.enterQii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQiii: function () {
      let check
      console.log('Qiii => ' + (-2 * this.focus) + ' : ' + this.enterQiii)
      check = (-2 * this.focus) === this.enterQiii ? 'correct' : 'not-correct'
      return check
    },
    checkedQiiii: function () {
      let check
      console.log('Qiiii => ' + (-5 * this.focus) + ' : ' + this.enterQiiii)
      check = (-5 * this.focus) === this.enterQiiii ? 'correct' : 'not-correct'
      return check
    },
    checkedMi: function () {
      let check
      console.log('Mi: ' + this.Mi + ' : ' + parseFloat(this.Mi))
      check = this.Mi === parseFloat(this.enterMi) ? 'correct' : 'not-correct'
      return check
    },
    checkedMii: function () {
      let check
      console.log('Mii: ' + this.Mii + ' : ' + parseFloat(this.Mii))
      check = this.Mii === parseFloat(this.enterMii) ? 'correct' : 'not-correct'
      return check
    },
    checkedMiii: function () {
      let check
      console.log('Miii: ' + this.Miii + ' : ' + parseFloat(this.Miii))
      check = this.Miii === parseFloat(this.enterMiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedMiiii: function () {
      let check
      console.log('Miiii: ' + this.Miiii + ' : ' + parseFloat(this.Miiii))
      check = this.Miiii === parseFloat(this.enterMiiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedRVi: function () {
      let check
      console.log('Real o vitual i=> ' + this.rVi + ' : ' + this.enterRVi.toString().toLowerCase())
      check = this.rVi === this.enterRVi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRVii: function () {
      let check
      console.log('Real o vitual ii=> ' + this.rVii + ' : ' + this.enterRVii.toString().toLowerCase())
      check = this.rVii === this.enterRVii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRViii: function () {
      let check
      console.log('Real o vitual iii=> ' + this.rViii + ' : ' + this.enterRViii.toString().toLowerCase())
      check = this.rViii === this.enterRViii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedRViiii: function () {
      let check
      console.log('Real o vitual iiii=> ' + this.rViiii + ' : ' + this.enterRViiii.toString().toLowerCase())
      check = this.rViiii === this.enterRViiii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIi: function () {
      let check
      console.log('Upright or inverted i=> ' + this.uIi + ' : ' + this.enterUIi.toString().toLowerCase())
      check = this.uIi === this.enterUIi.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIii: function () {
      let check
      console.log('Upright or inverted ii=> ' + this.uIii + ' : ' + this.enterUIii.toString().toLowerCase())
      check = this.uIii === this.enterUIii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIiii: function () {
      let check
      console.log('Upright or inverted iii=> ' + this.uIiii + ' : ' + this.enterUIiii.toString().toLowerCase())
      check = this.uIiii === this.enterUIiii.toString().toLowerCase() ? 'correct' : 'not-correct'
      return check
    },
    checkedUIiiii: function () {
      let check
      console.log('Upright or inverted iiii=> ' + this.uIiiii + ' : ' + this.enterUIiiii.toString().toLowerCase())
      check = this.uIiiii === this.enterUIiiii.toString().toLowerCase() ? 'correct' : 'not-correct'
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
