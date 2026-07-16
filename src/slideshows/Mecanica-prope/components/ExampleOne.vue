<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem Llena los espacios con los simbolos de cada unidad
    .center

    div(class="contain" style="display: absolute; width: 100%; height: 500px; border: solid 0px; margin: auto;")
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Magnitud
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") SI
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") S. Inglés
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") S. CGS
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") S. Técnico
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Masa
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE11" class="elem" v-model.number='enterE11')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE12" class="elem" v-model.number='enterE12')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE13" class="elem" v-model.number='enterE13')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE14" class="elem" v-model.number='enterE14')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Presión
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE21" class="elem" v-model.number='enterE21')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE22" class="elem" v-model.number='enterE22')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE23" class="elem" v-model.number='enterE23')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE24" class="elem" v-model.number='enterE24')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Velocidad
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE31" class="elem" v-model.number='enterE31')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE32" class="elem" v-model.number='enterE32')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE33" class="elem" v-model.number='enterE33')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE34" class="elem" v-model.number='enterE34')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Densidad
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE41" class="elem" v-model.number='enterE41')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE42" class="elem" v-model.number='enterE42')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE43" class="elem" v-model.number='enterE43')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE44" class="elem" v-model.number='enterE44')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Energía
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE51" class="elem" v-model.number='enterE51')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE52" class="elem" v-model.number='enterE52')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE53" class="elem" v-model.number='enterE53')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE54" class="elem" v-model.number='enterE54')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Longitud
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE61" class="elem" v-model.number='enterE61')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE62" class="elem" v-model.number='enterE62')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE63" class="elem" v-model.number='enterE63')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE64" class="elem" v-model.number='enterE64')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Superficie
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE71" class="elem" v-model.number='enterE71')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE72" class="elem" v-model.number='enterE72')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE73" class="elem" v-model.number='enterE73')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE74" class="elem" v-model.number='enterE74')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Volumen
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE81" class="elem" v-model.number='enterE81')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE82" class="elem" v-model.number='enterE82')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE83" class="elem" v-model.number='enterE83')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE84" class="elem" v-model.number='enterE84')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Potencia
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE91" class="elem" v-model.number='enterE91')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE92" class="elem" v-model.number='enterE92')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE93" class="elem" v-model.number='enterE93')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE94" class="elem" v-model.number='enterE94')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Fuerza
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE101" class="elem" v-model.number='enterE101')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE102" class="elem" v-model.number='enterE102')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE103" class="elem" v-model.number='enterE103')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE104" class="elem" v-model.number='enterE104')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Temperatura
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE111" class="elem" v-model.number='enterE111')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE112" class="elem" v-model.number='enterE112')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE113" class="elem" v-model.number='enterE113')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE114" class="elem" v-model.number='enterE114')
      div(class="element" style="left: 0px; top: 0px;")
        p(class="elementxt") Aceleración
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE121" class="elem" v-model.number='enterE121')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE122" class="elem" v-model.number='enterE122')
      div(class="element" style="left: 0px; top: 0px;")
        input(:class="checkedE123" class="elem" v-model.number='enterE123')
      div(class="element" style="left: 0px; top: 0px;") 
        input(:class="checkedE124" class="elem" v-model.number='enterE124')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterE11: '',
      enterE12: '',
      enterE13: '',
      enterE14: '',
      enterE21: '',
      enterE22: '',
      enterE23: '',
      enterE24: '',
      enterE31: '',
      enterE32: '',
      enterE33: '',
      enterE34: '',
      enterE41: '',
      enterE42: '',
      enterE43: '',
      enterE44: '',
      enterE51: '',
      enterE52: '',
      enterE53: '',
      enterE54: '',
      enterE61: '',
      enterE62: '',
      enterE63: '',
      enterE64: '',
      enterE71: '',
      enterE72: '',
      enterE73: '',
      enterE74: '',
      enterE81: '',
      enterE82: '',
      enterE83: '',
      enterE84: '',
      enterE91: '',
      enterE92: '',
      enterE93: '',
      enterE94: '',
      enterE101: '',
      enterE102: '',
      enterE103: '',
      enterE104: '',
      enterE111: '',
      enterE112: '',
      enterE113: '',
      enterE114: '',
      enterE121: '',
      enterE122: '',
      enterE123: '',
      enterE124: ''
    }
  },
  computed: {
    checkedE11: function () {
      let check
      console.log('E11 => ' + 'kg' + ' : ' + this.enterE11)
      check = this.enterE11 === 'kg' ? 'correct' : 'not-correct'
      return check
    },
    checkedE12: function () {
      let check
      console.log('E12 => ' + 'slug' + ' : ' + this.enterE12)
      check = this.enterE12 === 'slug' ? 'correct' : 'not-correct'
      return check
    },
    checkedE13: function () {
      let check
      console.log('E13 => ' + 'g' + ' : ' + this.enterE13)
      check = this.enterE13 === 'g' ? 'correct' : 'not-correct'
      return check
    },
    checkedE14: function () {
      let check
      console.log('E14 => ' + 'slug' + ' : ' + this.enterE14)
      check = this.enterE14 === 'slug' ? 'correct' : 'not-correct'
      return check
    },
    checkedE21: function () {
      let check
      console.log('E21 => ' + 'Pa' + ' : ' + this.enterE21)
      check = this.enterE21 === 'Pa' ? 'correct' : 'not-correct'
      return check
    },
    checkedE22: function () {
      let check
      console.log('E22 => ' + 'lb' + ' : ' + this.enterE22)
      check = this.enterE22 === 'psi' ? 'correct' : 'not-correct'
      return check
    },
    checkedE23: function () {
      let check
      console.log('E23 => ' + 'dina/cm2' + ' : ' + this.enterE23)
      check = this.enterE23 === 'dina/cm2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE24: function () {
      let check
      console.log('E24 => ' + 'kg/m2' + ' : ' + this.enterE24)
      check = this.enterE24 === 'kg/m2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE31: function () {
      let check
      console.log('E31 => ' + 'm/s' + ' : ' + this.enterE31)
      check = this.enterE31 === 'm/s' ? 'correct' : 'not-correct'
      return check
    },
    checkedE32: function () {
      let check
      console.log('E32 => ' + 'ft/s' + ' : ' + this.enterE32)
      check = this.enterE32 === 'ft/s' ? 'correct' : 'not-correct'
      return check
    },
    checkedE33: function () {
      let check
      console.log('E33 => ' + 'cm/s' + ' : ' + this.enterE33)
      check = this.enterE33 === 'cm/s' ? 'correct' : 'not-correct'
      return check
    },
    checkedE34: function () {
      let check
      console.log('E34 => ' + 'm/s' + ' : ' + this.enterE34)
      check = this.enterE34 === 'm/s' ? 'correct' : 'not-correct'
      return check
    },
    checkedE41: function () {
      let check
      console.log('E41 => ' + 'kg/m3' + ' : ' + this.enterE41)
      check = this.enterE41 === 'kg/m3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE42: function () {
      let check
      console.log('E42 => ' + 'slug/ft3' + ' : ' + this.enterE42)
      check = this.enterE42 === 'slug/ft3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE43: function () {
      let check
      console.log('E43 => ' + 'g/cm3' + ' : ' + this.enterE43)
      check = parseFloat(this.enterE43) === 'g/cm3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE44: function () {
      let check
      console.log('E44 => ' + 'slug/m3' + ' : ' + this.enterE44)
      check = this.enterE44 === 'slug/m3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE51: function () {
      let check
      console.log('E51 => ' + 'J' + ' : ' + this.enterE51)
      check = this.enterE51 === 'J' ? 'correct' : 'not-correct'
      return check
    },
    checkedE52: function () {
      let check
      console.log('E52 => ' + 'BTU' + ' : ' + this.enterE52)
      check = this.enterE52 === 'BTU' ? 'correct' : 'not-correct'
      return check
    },
    checkedE53: function () {
      let check
      console.log('E53 => ' + 'ergio' + ' : ' + this.enterE53)
      check = this.enterE53 === 'ergio' ? 'correct' : 'not-correct'
      return check
    },
    checkedE54: function () {
      let check
      console.log('E54 => ' + 'BTU' + ' : ' + this.enterE54)
      check = this.enteE54 === 'BTU' ? 'correct' : 'not-correct'
      return check
    },
    checkedE61: function () {
      let check
      console.log('E61 => ' + 'm' + ' : ' + this.enterE61)
      check = this.enterE61 === 'm' ? 'correct' : 'not-correct'
      return check
    },
    checkedE62: function () {
      let check
      console.log('E62 => ' + 'ft' + ' : ' + this.enterE62)
      check = this.enterE62 === 'ft' ? 'correct' : 'not-correct'
      return check
    },
    checkedE63: function () {
      let check
      console.log('E63 => ' + 'cm' + ' : ' + this.enterE63)
      check = this.enterE63 === 'cm' ? 'correct' : 'not-correct'
      return check
    },
    checkedE64: function () {
      let check
      console.log('E64 => ' + 'm' + ' : ' + this.enterE64)
      check = this.enterE64 === 'm' ? 'correct' : 'not-correct'
      return check
    },
    checkedE71: function () {
      let check
      console.log('E71 => ' + 'm2' + ' : ' + this.enterE71)
      check = this.enterE71 === 'm2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE72: function () {
      let check
      console.log('E72 => ' + 'ft2' + ' : ' + this.enterE72)
      check = this.enterE72 === 'ft2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE73: function () {
      let check
      console.log('E73 => ' + 'cm2' + ' : ' + this.enterE73)
      check = this.enterE73 === 'cm2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE74: function () {
      let check
      console.log('E74 => ' + 'm2' + ' : ' + parseFloat(this.enterE74))
      check = this.enterE74 === 'm2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE81: function () {
      let check
      console.log('E81 => ' + 'm3' + ' : ' + this.enterE81)
      check = this.enterE81 === 'm3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE82: function () {
      let check
      console.log('E82 => ' + 'ft3' + ' : ' + this.enterE82)
      check = this.enterE82 === 'ft3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE83: function () {
      let check
      console.log('E83 => ' + 'cm3' + ' : ' + this.enterE83)
      check = this.enterE83 === 'cm3' ? 'correct' : 'not-correct'
      return check
    },
    checkedE84: function () {
      let check
      console.log('E84 => ' + 'm2' + ' : ' + this.enterE84)
      check = this.enterE84 === 'm2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE91: function () {
      let check
      console.log('E91 => ' + 'W' + ' : ' + this.enterE91)
      check = this.enterE91 === 'W' ? 'correct' : 'not-correct'
      return check
    },
    checkedE92: function () {
      let check
      console.log('E92 => ' + 'HP' + ' : ' + this.enterE92)
      check = this.enterE92 === 'HP' ? 'correct' : 'not-correct'
      return check
    },
    checkedE93: function () {
      let check
      console.log('E93 => ' + 'ergio/s' + ' : ' + this.enterE93)
      check = this.enterE93 === 'ergio/s' ? 'correct' : 'not-correct'
      return check
    },
    checkedE94: function () {
      let check
      console.log('E94 => ' + 'HP' + ' : ' + this.enterE94)
      check = this.enterE94 === 'HP' ? 'correct' : 'not-correct'
      return check
    },
    checkedE101: function () {
      let check
      console.log('E101 => ' + 'N' + ' : ' + this.enterE101)
      check = this.enterE101 === 'W' ? 'correct' : 'not-correct'
      return check
    },
    checkedE102: function () {
      let check
      console.log('E102 => ' + 'lb' + ' : ' + this.enterE102)
      check = this.enterE102 === 'lb' ? 'correct' : 'not-correct'
      return check
    },
    checkedE103: function () {
      let check
      console.log('E103 => ' + 'dina' + ' : ' + this.enterE103)
      check = this.enterE103 === 'dina' ? 'correct' : 'not-correct'
      return check
    },
    checkedE104: function () {
      let check
      console.log('E104 => ' + 'kg' + ' : ' + this.enterE104)
      check = this.enterE104 === 'kg' ? 'correct' : 'not-correct'
      return check
    },
    checkedE111: function () {
      let check
      console.log('E111 => ' + 'K' + ' : ' + parseFloat(this.enterE111))
      check = this.enterE111 === 'K' ? 'correct' : 'not-correct'
      return check
    },
    checkedE112: function () {
      let check
      console.log('E112 => ' + 'ºF' + ' : ' + this.enterE112)
      check = this.enterE112 === 'ºF' ? 'correct' : 'not-correct'
      return check
    },
    checkedE113: function () {
      let check
      console.log('E113 => ' + 'K' + ' : ' + this.enterE113)
      check = this.enterE113 === 'K' ? 'correct' : 'not-correct'
      return check
    },
    checkedE114: function () {
      let check
      console.log('E114 => ' + 'K' + ' : ' + this.enterE114)
      check = this.enterE114 === 'K' ? 'correct' : 'not-correct'
      return check
    },
    checkedE121: function () {
      let check
      console.log('E121 => ' + 'm/s2' + ' : ' + this.enterE121)
      check = this.enterE121 === 'm/s2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE122: function () {
      let check
      console.log('E122 => ' + 'ft/s2' + ' : ' + this.enterE122)
      check = this.enterE122 === 'ft/s2' ? 'correct' : 'not-correct'
      return check
    },
    checkedE123: function () {
      let check
      console.log('E123 => ' + 'cm/s2' + ' : ' + this.enterE123)
      check = this.enterE123 === 'ºF' ? 'correct' : 'not-correct'
      return check
    },
    checkedE124: function () {
      let check
      console.log('E124 => ' + 'm/s2' + ' : ' + this.enterE124)
      check = this.enterE124 === 'm/s2' ? 'correct' : 'not-correct'
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
  width: 119px;
  height: 20px;
  margin: 0px;
}
.elementxt {
  position: relative;
  width: 119px;
  height: 20px;
  margin: 0px;
  left: 0px;
  top: -30px;
  font-family: Times;
}

.container {
  //- background-image: assetUrl("~eagle.js/dist/themes/assets/handmadepaper.png");
  //- background-image: url("../assets/problemSix.png");
  background-repeat: no-repeat;
  background-size: 460px 500px;
}

.elem {
  font-family: Times;
  font-size: 20px;
  position: absolute;
  top: 4px;
  left: 5px;
  margin: 0;
  width: 125px;
  height: 30px;
  text-align: center;
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

.contain {
  display: grid;
  grid-template-columns: 20% 20% 20% 20% 20%;
  background-color: dodgerblue;
  padding: 1px;
}
.contain div {
  background-color: #f1f1f1;
  border: 1px solid black;
  padding: 10px;
  font-size: 20px;
  text-align: center;
}

</style>
