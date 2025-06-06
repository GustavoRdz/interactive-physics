<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    //- p.problem A <b>{{ materials[material].name }}</b> surface is illuminated with light having a wavelength of {{ wavelength }} nm. The work function for <b>{{ materials[material].material }}</b> metal is {{ materials[material].phi }} eV.<br>(A) Find the maximum kinetic energy of the ejected photoelectrons.<br>(B) Find the cutoff wavelength λ<sub>c</sub> for <b>{{ materials[material].name }}</b>.
    p.problem Una superficie <b>{{ materials[material].name }}</b> se ilumina con luz que tiene una longitud de onda de {{ wavelength }} nm. La función de trabajo para el metal <b>{{ materials[material].material }}</b> es {{ materials[material].phi }} eV.<br>(A) Encuentre la energía cinética máxima de los fotoelectrones expulsados .<br>(B) Encuentre la longitud de onda de corte λ<sub>c</sub> para <b>{{ materials[material].name }}</b>.
    .center
      //img(src='../assets/example2.png' width="200px" style="margin: -100px 0 50px 200px;")
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data φ (J)
        input.center.data(:class="checkedPhi" v-model.number='enterPhi')
        <span class="error" v-if="errorPhi">[e: {{ errorPhi.toPrecision(3) }}%]</span>
      p.inline.data λ (m)
        input.center.data(:class="checkedL" v-model.number='enterL')
        <span class="error" v-if="errorL">[e: {{ errorL.toPrecision(3) }}%]</span>
      p.inline.data Kmax (J)
        input.center.data(:class="checkedKmax" v-model.number='enterKmax')
        <span class="error" v-if="errorKmax">[e: {{ errorKmax.toPrecision(3) }}%]</span>
      p.inline.data λ<sub>c</sub> (m)
        input.center.data(:class="checkedLc" v-model='enterLc')
        <span class="error" v-if="errorLc">[e: {{ errorLc.toPrecision(3) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterPhi: '',
      errorPhi: 0,
      enterL: '',
      errorL: 0,
      enterKmax: '',
      errorKmax: 0,
      enterLc: '',
      errorLc: 0,
      materials: [
        {material: 'Ag', name: 'Silver', phi: 4.730},
        {material: 'Al', name: 'Aluminum', phi: 4.090},
        {material: 'As', name: 'Arsenic', phi: 3.750},
        {material: 'Au', name: 'Gold', phi: 5.100},
        {material: 'Ba', name: 'Barium', phi: 2.700},
        {material: 'Be', name: 'Berylium', phi: 4.980},
        {material: 'Bi', name: 'Bismuth', phi: 4.340},
        {material: 'C', name: 'Carbon', phi: 5.000},
        {material: 'Ca', name: 'Calcium', phi: 2.870},
        {material: 'Cd', name: 'Cadmium', phi: 4.080},
        {material: 'Ce', name: 'Cerium', phi: 2.900},
        {material: 'Co', name: 'Cobalt', phi: 5.000},
        {material: 'Cr', name: 'Chromium', phi: 4.500},
        {material: 'Cs', name: 'Cesium', phi: 2.140},
        {material: 'Cu', name: 'Copper', phi: 4.700},
        {material: 'Fe', name: 'Iron', phi: 4.810},
        {material: 'Ga', name: 'Gallium', phi: 4.320},
        {material: 'Hg', name: 'Mercury', phi: 4.470},
        {material: 'K', name: 'Potassium', phi: 2.290},
        {material: 'La', name: 'Lanthanum', phi: 3.500},
        {material: 'Li', name: 'Lithium', phi: 2.930},
        {material: 'Mg', name: 'Magnesium', phi: 3.660},
        {material: 'Mn', name: 'Manganese', phi: 4.100},
        {material: 'Mo', name: 'Molybdenum', phi: 4.950},
        {material: 'Na', name: 'Sodium', phi: 2.360},
        {material: 'Nb', name: 'Niobium', phi: 4.300},
        {material: 'Ni', name: 'Nickel', phi: 5.350},
        {material: 'Os', name: 'Osmium', phi: 5.930},
        {material: 'Pb', name: 'Lead', phi: 4.250},
        {material: 'Pd', name: 'Palladium', phi: 5.600},
        {material: 'Pt', name: 'Platinum', phi: 5.930},
        {material: 'Rb', name: 'Rubidium', phi: 2.260},
        {material: 'Re', name: 'Rhenium', phi: 4.720},
        {material: 'Sb', name: 'Antimony', phi: 4.700},
        {material: 'Sc', name: 'Scandium', phi: 3.500},
        {material: 'Se', name: 'Selenium', phi: 5.900},
        {material: 'Si', name: 'Silicon', phi: 4.850},
        {material: 'Sn', name: 'Tin', phi: 4.420},
        {material: 'Sr', name: 'Strontium', phi: 2.590},
        {material: 'Te', name: 'Tellurium', phi: 4.950},
        {material: 'Ti', name: 'Titanium', phi: 4.330},
        {material: 'U', name: 'Uranium', phi: 3.900},
        {material: 'V', name: 'Vanadium', phi: 4.300},
        {material: 'W', name: 'Tungsten', phi: 5.220},
        {material: 'Zn', name: 'Zinc', phi: 4.300},
        {material: 'Zr', name: 'Zirconium', phi: 4.050}
      ],
      h: 6.626e-34,
      e: 1.6e-19,
      c: 3e8
    }
  },
  computed: {
    wavelength: function () {
      let max = this.wavelengthC * 1e9
      let min = 100
      return parseFloat((Math.round(100 * Math.floor(Math.random() * (max - min + 1)) + min) / 100) * 1e-9).toPrecision(4)
    },
    material: function () {
      return Math.floor((Math.random() * 46)) + 1
    },
    phiJ: function () {
      return parseFloat((this.materials[this.material].phi * this.e).toPrecision(4))
    },
    kMax: function () {
      return parseFloat((this.h * this.c / this.wavelength - this.phiJ).toPrecision(4))
    },
    wavelengthC: function () {
      return parseFloat((this.h * this.c / this.phiJ).toPrecision(4))
    },
    checkedPhi: function () {
      let check
      console.log('Phi J => ' + this.phiJ + ' : ' + parseFloat(this.enterPhi))
      this.errorPhi = 100 * Math.abs(this.phiJ - parseFloat(this.enterPhi)) / this.phiJ
      console.log('error  ' + this.errorPhi + ' %')
      check = this.errorPhi < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedL: function () {
      let check
      console.log('λ => ' + this.wavelength + ' : ' + parseFloat(this.enterL))
      this.errorL = 100 * Math.abs(this.wavelength - parseFloat(this.enterL)) / this.wavelength
      console.log('error  ' + this.errorL + ' %')
      check = this.errorL < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedKmax: function () {
      let check
      console.log('Kmax => ' + this.kMax + ' : ' + parseFloat(this.enterKmax))
      this.errorKmax = 100 * Math.abs(this.kMax - parseFloat(this.enterKmax)) / this.kMax
      console.log('error  ' + this.errorKmax + ' %')
      check = this.errorKmax < 1e-1 ? 'correct' : 'not-correct'
      return check
    },
    checkedLc: function () {
      let check
      console.log('λc => ' + this.wavelengthC + ' : ' + parseFloat(this.enterLc))
      this.errorLc = 100 * Math.abs(this.wavelengthC - parseFloat(this.enterLc)) / this.wavelengthC
      console.log('error  ' + this.errorLc + ' %')
      check = this.errorLc < 1e-1 ? 'correct' : 'not-correct'
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
  margin: auto;
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 25px;
  color: blue;
  width: 70%;
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
