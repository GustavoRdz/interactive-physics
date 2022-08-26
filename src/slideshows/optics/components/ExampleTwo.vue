<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p(v-if = '!language' style="margin: 25px 0px 0px 0px;").problem A ray of light travels from air into another medium, making an angle of &theta;<sub>1</sub> = {{ incident }}° with the normal. Find the angle of refraction &theta;<sub>2</sub> if the second medium is
    p(v-if = 'language' style="margin: 25px 0px 0px 0px;").problem Un rayo de luz viaja del aire a otro medio, formando un ángulo de &theta;<sub>1</sub> = {{ incident }}° con la normal. Encuentre el ángulo de refracción &theta;<sub>2</sub> si el segundo medio es
    p(style="margin: 25px 0px 0px 0px;").problem (a) {{ materials[materialIndex[0]].material }},  n = {{ materials[materialIndex[0]].index }}<br>(b) {{ materials[materialIndex[1]].material}},  n = {{ materials[materialIndex[1]].index }}<br>(c) {{ materials[materialIndex[2]].material}},  n = {{ materials[materialIndex[2]].index }}
    .center
      img(src='../assets/example2.png' width="200px" style="margin: 20px 0 20px 0px;")
    .center
      p(v-if = '!language' style="margin: 10px 0px 0px 0px;").solution Do calculations and introduce your results
      p(v-if = 'language' style="margin: 10px 0px 0px 0px;").solution Efectúe los cálculos e introduzca sus resultados
      p.inline.data Incidence angle (degrees)
        input.center.data(:class="checkedIncident" v-model.number='enterIncident')
        <span class="error" v-if="errorIncident">[e: {{ errorIncident.toPrecision(2) }}%]</span>
      p.inline.data a) angle (degrees)
        input.center.data(:class="checkedAngleA" v-model.number='enterAngleA')
        <span class="error" v-if="errorAngleA">[e: {{ errorAngleA.toPrecision(2) }}%]</span>
      p.inline.data b) angle (degrees)
        input.center.data(:class="checkedAngleB" v-model.number='enterAngleB')
        <span class="error" v-if="errorAngleB">[e: {{ errorAngleB.toPrecision(2) }}%]</span>
      p.inline.data c) angle (degrees)
        input.center.data(:class="checkedAngleC" v-model='enterAngleC')
        <span class="error" v-if="errorAngleC">[e: {{ errorAngleC.toPrecision(2) }}%]</span>
      p.inline.data Max. deviation: a, b or c?
        input.center.data(:class="checkedDev" v-model='enterDev')
        <span class="error" v-if="errorDev">[e: {{ errorDev.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  props: {
    language: Boolean
  },
  data: function () {
    return {
      enterIncident: '',
      errorIncident: 0,
      enterAngleA: '',
      errorAngleA: 0,
      enterAngleB: '',
      errorAngleB: 0,
      enterAngleC: '',
      errorAngleC: 0,
      enterDev: '',
      errorDev: 0,
      materials: [
        {material: 'Cubic zirconia', index: 2.20},
        {material: 'Benzene', index: 1.501},
        {material: 'Diamond (C)', index: 2.419},
        {material: 'Carbon disulfide', index: 1.628},
        {material: 'Fluorite (CaF2)', index: 1.434},
        {material: 'Carbon tetrachloride', index: 1.461},
        {material: 'Fused quartz (SiO2)', index: 1.458},
        {material: 'Ethyl alcohol', index: 1.361},
        {material: 'Gallium phosphide', index: 3.50},
        {material: 'Glycerin', index: 1.473},
        {material: 'Glass, crown', index: 1.52},
        {material: 'Water', index: 1.333},
        {material: 'Glass, flint', index: 1.66},
        {material: 'Ice (H2O)', index: 1.309},
        {material: 'Polystyrene', index: 1.49},
        {material: 'Air', index: 1.000},
        {material: 'Sodium chloride (NaCl)', index: 1.544},
        {material: 'Carbon dioxide', index: 1.000}
      ],
      row: [],
      angles: []
    }
  },
  computed: {
    incident: function () {
      console.clear()
      let max = 70
      let min = 20
      return (Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100)
    },
    materialIndex: function () {
      for (let i = 0; i < 18; i++) {
        let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
        for (let j = 0; j < 4; j++) {
          // console.log('(row, col): numero ==>' + '(' + i + ',' + j + '): ' + this.row)
          let index = Math.floor(Math.random() * data.length)
          // console.log('index: ' + index)
          this.row[j] = data.slice(index, index + 1)[0]
          data.splice(index, 1)
          // console.log('row[j]: ' + this.row[j])
          // console.log('data: ' + data)
        }
      }
      return this.row
    },
    transmitted: function () {
      for (let i = 0; i < 3; i++) {
        this.angles[i] = Math.round(1000 * 180 * (Math.asin(Math.sin(this.incident * Math.PI / 180) / this.materials[this.materialIndex[i]].index)) / Math.PI) / 1000
      }
      return this.angles
    },
    deviation: function () {
      let dev = 0
      let op = ['a', 'b', 'c']
      for (let i = 0; i < 3; i++) {
        if (this.materials[this.materialIndex[i]].index > this.materials[this.materialIndex[dev]].index) {
          dev = i
        }
      }
      return op[dev]
    },
    checkedIncident: function () {
      this.errorIncident = this.errorRelative('Angle Incident=> ', this.incident, parseFloat(this.enterIncident))
      return this.errorIncident < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngleA: function () {
      this.errorAngleA = this.errorRelative('Angle A=> ', this.transmitted[0], parseFloat(this.enterAngleA))
      return this.errorAngleA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngleB: function () {
      this.errorAngleB = this.errorRelative('Angle B=> ', this.transmitted[1], parseFloat(this.enterAngleB))
      return this.errorAngleB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAngleC: function () {
      this.errorAngleC = this.errorRelative('Angle C=> ', this.transmitted[2], parseFloat(this.enterAngleC))
      return this.errorAngleC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedDev: function () {
      let check
      console.log('Max deviation => ' + this.deviation + ' : ' + this.enterDev)
      check = this.deviation === this.enterDev ? 'correct' : 'not-correct'
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
  font-size: 30px;
  color: blue;
  width: 90%;
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
