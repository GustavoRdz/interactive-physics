<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A concave spherical mirror has a focus distance radius of curvature of magnitude {{ 2 * focus }} cm. (a) Find the location of the image for object distances of (i) {{ 4 * focus}} cm, (ii) {{ 2 * focus }} cm, and (iii) {{ focus }} cm. For each case, state whether the image is (b) real or virtual and (c) upright or inverted. (d) Find the magnification in each case.
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Focus (cm)
        input.center.data(:class="checkedFocus" v-model.number='enterFocus')
      p.inline.data  p<sub>i</sub> (cm)
        input.center.data(:class="checkedPi" v-model.number='enterPi')
      p.inline.data q<sub>i</sub> (cm)
        input.center.data(:class="checkedQi" v-model.number='enterQi')
      p.inline.data M<sub>i</sub>
        input.center.data(:class="checkedMi" v-model='enterMi')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVi" v-model='enterRVi')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIi" v-model='enterUIi')
    .center
      p.inline.data  p<sub>ii</sub> (cm)
        input.center.data(:class="checkedPii" v-model.number='enterPii')
      p.inline.data q<sub>ii</sub> (cm)
        input.center.data(:class="checkedQii" v-model.number='enterQii')
      p.inline.data M<sub>ii</sub>
        input.center.data(:class="checkedMii" v-model='enterMii')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVii" v-model='enterRVii')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIii" v-model='enterUIii')
    .center
      p.inline.data  p<sub>iii</sub> (cm)
        input.center.data(:class="checkedPiii" v-model.number='enterPiii')
      p.inline.data q<sub>iii</sub> (cm)
        input.center.data(:class="checkedQiii" v-model.number='enterQiii')
      p.inline.data M<sub>iii</sub>
        input.center.data(:class="checkedMiii" v-model='enterMiii')
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViii" v-model='enterRViii')
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiii" v-model='enterUIiii')

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
      enterQi: '',
      enterQii: '',
      enterQiii: '',
      enterMi: '',
      enterMii: '',
      enterMiii: '',
      enterRVi: '',
      enterRVii: '',
      enterRViii: '',
      enterUIi: '',
      enterUIii: '',
      enterUIiii: ''
    }
  },
  computed: {
    focus: function () {
      let max = 50
      let min = 10
      return (Math.round(10 * Math.floor(Math.random() * (max - min + 1)) + min) / 10)
    },
    qi: function () {
      return Math.round(1000 * 4 * this.focus / 3) / 1000
    },
    qii: function () {
      return Math.round(1000 * 2 * this.focus) / 1000
    },
    qiii: function () {
      return 'infinite'
    },
    Mi: function () {
      return Math.round(-1000 * this.qi / (4 * this.focus)) / 1000
    },
    Mii: function () {
      return Math.round(-1000 * this.qii / (2 * this.focus)) / 1000
    },
    Miii: function () {
      return ['infinite', '-infinite']
    },
    rVi: function () {
      return 'real'
    },
    rVii: function () {
      return 'real'
    },
    rViii: function () {
      return 'none'
    },
    uIi: function () {
      return 'inverted'
    },
    uIii: function () {
      return 'inverted'
    },
    uIiii: function () {
      return 'none'
    },
    checkedFocus: function () {
      let check
      console.log('Focus => ' + this.focus + ' : ' + parseFloat(this.enterFocus))
      check = this.focus === parseFloat(this.enterFocus) ? 'correct' : 'not-correct'
      return check
    },
    checkedPi: function () {
      let check
      console.log('Pi => ' + 4 * this.focus + ' : ' + parseFloat(this.enterPi))
      check = 4 * this.focus === parseFloat(this.enterPi) ? 'correct' : 'not-correct'
      return check
    },
    checkedPii: function () {
      let check
      console.log('Pii => ' + 2 * this.focus + ' : ' + parseFloat(this.enterPii))
      check = 2 * this.focus === parseFloat(this.enterPii) ? 'correct' : 'not-correct'
      return check
    },
    checkedPiii: function () {
      let check
      console.log('Piii => ' + this.focus + ' : ' + parseFloat(this.enterPiii))
      check = this.focus === parseFloat(this.enterPiii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQi: function () {
      let check
      console.log('Qi => ' + this.qi + ' : ' + parseFloat(this.enterQi))
      check = this.qi === parseFloat(this.enterQi) ? 'correct' : 'not-correct'
      return check
    },
    checkedQii: function () {
      let check
      console.log('Qii => ' + this.qii + ' : ' + parseFloat(this.enterQii))
      check = this.qii === parseFloat(this.enterQii) ? 'correct' : 'not-correct'
      return check
    },
    checkedQiii: function () {
      let check
      console.log('Qiii => ' + this.qiii + ' : ' + this.enterQiii)
      check = this.qiii === this.enterQiii ? 'correct' : 'not-correct'
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
      console.log('Miii: ' + this.Miii[0] + ' : ' + this.enterMiii)
      console.log('Miii: ' + this.Miii[1] + ' : ' + this.enterMiii)
      check = (this.Miii[0] === this.enterMiii || this.Miii[1] === this.enterMiii) ? 'correct' : 'not-correct'
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
