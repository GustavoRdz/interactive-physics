<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A converging lens has a focal length of {{ focus.toPrecision(4) }} cm. Locate the object if a real image is located at a distance from the lens of <br><br>(a) {{ (2 * focus).toPrecision(4) }} cm and <br>(b) {{ (5* focus).toPrecision(4) }} cm. <br><br>What If? Redo the calculations if the images are virtual and located at a distance from the lens of <br><br>(c) {{ (2 * focus).toPrecision(4) }} cm and <br>(d) {{ (5 * focus).toPrecision(4) }} cm.
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Una lente convergente tiene una distancia focal de {{ focus.toPrecision(4) }} cm. Ubique el objeto si una imagen real se encuentra a una distancia de la lente de <br><br>(a) {{ (2 * focus).toPrecision(4) }} cm y <br>(b) {{ (5* focus).toPrecision(4) }} cm. <br><br>¿Y si? Rehaga los cálculos si las imágenes son virtuales y están ubicadas a una distancia de la lente de <br><br>(c) {{ (2 * focus).toPrecision(4) }} cm y <br>(d) {{ (5 * focus).toPrecision(4) }} cm.
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Focus (cm)
        input.center.data(:class="checkedFocus" v-model.number='enterFocus')
        <span class="error" v-if="errorFocus">[e: {{ errorFocus.toPrecision(2) }}%]</span>
      p.inline.data  p<sub>a</sub> (cm)
        input.center.data(:class="checkedPi" v-model.number='enterPi')
        <span class="error" v-if="errorPi">[e: {{ errorPi.toPrecision(2) }}%]</span>
      p.inline.data q<sub>a</sub> (cm)
        input.center.data(:class="checkedQi" v-model.number='enterQi')
        <span class="error" v-if="errorQi">[e: {{ errorQi.toPrecision(2) }}%]</span>
      p.inline.data M<sub>a</sub>
        input.center.data(:class="checkedMi" v-model='enterMi')
        <span class="error" v-if="errorMi">[e: {{ errorMi.toPrecision(2) }}%]</span>
      p.inline.data Object real or virtual?
        input.center.data(:class="checkedRVi" v-model='enterRVi')
        <span class="error" v-if="errorRVi">[e: {{ errorRVi.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIi" v-model='enterUIi')
        <span class="error" v-if="errorUIi">[e: {{ errorUIi.toPrecision(2) }}%]</span>
    .center
      p.inline.data  p<sub>b</sub> (cm)
        input.center.data(:class="checkedPii" v-model.number='enterPii')
        <span class="error" v-if="errorPii">[e: {{ errorPii.toPrecision(2) }}%]</span>
      p.inline.data q<sub>b</sub> (cm)
        input.center.data(:class="checkedQii" v-model.number='enterQii')
        <span class="error" v-if="errorQii">[e: {{ errorQii.toPrecision(2) }}%]</span>
      p.inline.data M<sub>b</sub>
        input.center.data(:class="checkedMii" v-model='enterMii')
        <span class="error" v-if="errorMii">[e: {{ errorMii.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRVii" v-model='enterRVii')
        <span class="error" v-if="errorRVii">[e: {{ errorRVii.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIii" v-model='enterUIii')
        <span class="error" v-if="errorUIii">[e: {{ errorUIii.toPrecision(2) }}%]</span>
    .center
      p.inline.data  p<sub>c</sub> (cm)
        input.center.data(:class="checkedPiii" v-model.number='enterPiii')
        <span class="error" v-if="errorPiii">[e: {{ errorPiii.toPrecision(2) }}%]</span>
      p.inline.data q<sub>c</sub> (cm)
        input.center.data(:class="checkedQiii" v-model.number='enterQiii')
        <span class="error" v-if="errorQiii">[e: {{ errorQiii.toPrecision(2) }}%]</span>
      p.inline.data M<sub>c</sub>
        input.center.data(:class="checkedMiii" v-model='enterMiii')
        <span class="error" v-if="errorMiii">[e: {{ errorMiii.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViii" v-model='enterRViii')
        <span class="error" v-if="errorRViii">[e: {{ errorRViii.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiii" v-model='enterUIiii')
        <span class="error" v-if="errorUIiii">[e: {{ errorUIiii.toPrecision(2) }}%]</span>
    .center
      p.inline.data  p<sub>d</sub> (cm)
        input.center.data(:class="checkedPiiii" v-model.number='enterPiiii')
        <span class="error" v-if="errorPiiii">[e: {{ errorPiiii.toPrecision(2) }}%]</span>
      p.inline.data q<sub>d</sub> (cm)
        input.center.data(:class="checkedQiiii" v-model.number='enterQiiii')
        <span class="error" v-if="errorQiiii">[e: {{ errorQiiii.toPrecision(2) }}%]</span>
      p.inline.data M<sub>d</sub>
        input.center.data(:class="checkedMiiii" v-model='enterMiiii')
        <span class="error" v-if="errorMiiii">[e: {{ errorMiiii.toPrecision(2) }}%]</span>
      p.inline.data Real or virtual?
        input.center.data(:class="checkedRViiii" v-model='enterRViiii')
        <span class="error" v-if="errorRViiii">[e: {{ errorRViiii.toPrecision(2) }}%]</span>
      p.inline.data upright or inverted
        input.center.data(:class="checkedUIiiii" v-model='enterUIiiii')
        <span class="error" v-if="errorUIiiii">[e: {{ errorUIiiii.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterFocus: '',
      errorFocus: 0,
      enterPi: '',
      errorPi: 0,
      enterPii: '',
      errorPii: 0,
      enterPiii: '',
      errorPiii: 0,
      enterPiiii: '',
      errorPiiii: 0,
      enterQi: '',
      errorQi: 0,
      enterQii: '',
      errorQii: 0,
      enterQiii: '',
      errorQiii: 0,
      enterQiiii: '',
      errorQiiii: 0,
      enterMi: '',
      errorMi: 0,
      enterMii: '',
      errorMii: 0,
      enterMiii: '',
      errorMiii: 0,
      enterMiiii: '',
      errorMiiii: 0,
      enterRVi: '',
      errorRVi: 0,
      enterRVii: '',
      errorRVii: 0,
      enterRViii: '',
      errorRViii: 0,
      enterRViiii: '',
      errorRViiii: 0,
      enterUIi: '',
      errorUIi: 0,
      enterUIii: '',
      errorUIii: 0,
      enterUIiii: '',
      errorUIiii: 0,
      enterUIiiii: '',
      errorUIiiii: 0
    }
  },
  computed: {
    focus: function () {
      console.clear()
      let max = 50
      let min = 10
      return (Math.round(100 * Math.random() * (max - min + 1) + min) / 100)
    },
    pi: function () {
      return 2 * this.focus
    },
    pii: function () {
      return 5 * this.focus / 4
    },
    piii: function () {
      return 2 * this.focus / 3
    },
    piiii: function () {
      return 5 * this.focus / 6
    },
    Mi: function () {
      return -2 * this.focus / this.pi
    },
    Mii: function () {
      return -5 * this.focus / this.pii
    },
    Miii: function () {
      return 2 * this.focus / this.piii
    },
    Miiii: function () {
      return 5 * this.focus / this.piiii
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
      this.errorFocus = this.errorRelative('Focus => ', this.focus, parseFloat(this.enterFocus))
      return this.errorFocus < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPi: function () {
      this.errorPi = this.errorRelative('pi => ', this.pi, parseFloat(this.enterPi))
      return this.errorPi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPii: function () {
      this.errorPii = this.errorRelative('pii => ', this.pii, parseFloat(this.enterPii))
      return this.errorPii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPiii: function () {
      this.errorPiii = this.errorRelative('piii => ', this.piii, parseFloat(this.enterPiii))
      return this.errorPiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedPiiii: function () {
      this.errorPiiii = this.errorRelative('piiii => ', this.piiii, parseFloat(this.enterPiiii))
      return this.errorPiiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQi: function () {
      this.errorQi = this.errorRelative('qi => ', 2 * this.focus, parseFloat(this.enterQi))
      return this.errorQi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQii: function () {
      this.errorQii = this.errorRelative('qii => ', 5 * this.focus, parseFloat(this.enterQii))
      return this.errorQii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQiii: function () {
      this.errorQiii = this.errorRelative('qiii => ', -2 * this.focus, parseFloat(this.enterQiii))
      return this.errorQiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedQiiii: function () {
      this.errorQiiii = this.errorRelative('qiiii => ', -5 * this.focus, parseFloat(this.enterQiiii))
      return this.errorQiiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMi: function () {
      this.errorMi = this.errorRelative('Mi => ', this.Mi, parseFloat(this.enterMi))
      return this.errorMi < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMii: function () {
      this.errorMii = this.errorRelative('Mii => ', this.Mii, parseFloat(this.enterMii))
      return this.errorMii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMiii: function () {
      this.errorMiii = this.errorRelative('Miii => ', this.Miii, parseFloat(this.enterMiii))
      return this.errorMiii < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedMiiii: function () {
      this.errorMiiii = this.errorRelative('Miiii => ', this.Miiii, parseFloat(this.enterMiiii))
      return this.errorMiiii < 1e-1 ? 'correct' : 'not-correct'
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
