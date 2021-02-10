<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A glass containing {{ wMass }} kg of a beverage (mostly water) initially at {{ wTemp }} &#x00B0;C. How much ice, initially at {{ iTemp }}&#x00B0;C, must you add to obtain a final temperature of {{ fTemp }}&#x00B0;C with all ice melted? Neglect the heat capacity of glass

    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Water <b>mass</b> (kg)
        input.center.data(:class="checkedWM" v-model.number='enterWM')
      p.inline.data Water <b>Temp</b> (&#x00B0;C)
        input.center.data(:class="checkedWT" v-model.number='enterWT')
      p.inline.data Ice <b>Temp</b> (&#x00B0;C)
        input.center.data(:class="checkedIT" v-model.number='enterIT')
      p.inline.data water <b>c</b> (J/kgºC)
        input.center.data(:class="checkedWc" v-model.number='enterWc')
      p.inline.data ice <b>c</b> (J/kgºC)
        input.center.data(:class="checkedIc" v-model.number='enterIc')
      p.inline.data Water <b>L<sub>f</sub></b> (J/kg)
        input.center.data(:class="checkedLf" v-model.number='enterLf')
      p.inline.data Ice <b>mass</b>(kg)
        input.center.data(:class="checkedIM" v-model.number='enterIM')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterWM: '',
      enterWT: '',
      enterIT: '',
      enterWc: '',
      enterIc: '',
      enterLf: '',
      enterIM: '',
      wC: 4190,
      iC: 2100,
      lF: 334000
    }
  },
  computed: {
    wMass: function () {
      let max = 400
      let min = 200
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    wTemp: function () {
      let max = 40
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    iTemp: function () {
      let max = 30
      let min = 15
      return -Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    fTemp: function () {
      return 0
    },
    iMass: function () {
      return -parseFloat((this.wMass * this.wC * (this.fTemp - this.wTemp) / (this.iC * (this.fTemp - this.iTemp) + this.lF)).toPrecision(3))
    },
    checkedWM: function () {
      let check
      console.log('water mass : ' + this.wMass + ' : ' + parseFloat(this.enterWM))
      check = this.wMass === parseFloat(this.enterWM) ? 'correct' : 'not-correct'
      return check
    },
    checkedWT: function () {
      let check
      console.log('water temp : ' + this.wTemp + ' : ' + parseFloat(this.enterWT))
      check = this.wTemp === parseFloat(this.enterWT) ? 'correct' : 'not-correct'
      return check
    },
    checkedIT: function () {
      let check
      console.log('ice temp : ' + this.iTemp + ' : ' + parseFloat(this.enterIT))
      check = this.iTemp === parseFloat(this.enterIT) ? 'correct' : 'not-correct'
      return check
    },
    checkedWc: function () {
      let check
      console.log('c water : ' + this.wC + ' : ' + parseFloat(this.enterWc))
      check = this.wC === parseFloat(this.enterWc) ? 'correct' : 'not-correct'
      return check
    },
    checkedIc: function () {
      let check
      console.log('c ice : ' + this.iC + ' : ' + parseFloat(this.enterIc))
      check = this.iC === parseFloat(this.enterIc) ? 'correct' : 'not-correct'
      return check
    },
    checkedLf: function () {
      let check
      console.log('Lf : ' + this.lF + ' : ' + parseFloat(this.enterLf))
      check = this.lF === parseFloat(this.enterLf) ? 'correct' : 'not-correct'
      return check
    },
    checkedIM: function () {
      let check
      console.log('Ice mass : ' + this.iMass + ' : ' + parseFloat(this.enterIM))
      check = this.iMass === parseFloat(this.enterIM) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
  },
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
@import url('https://fonts.googleapis.com/css?family=Major+Mono+Display');
@import url('https://fonts.googleapis.com/css?family=Allerta+Stencil');
@import url('https://fonts.googleapis.com/css?family=Space+Mono');


.svg-display {
        font-family:'Space Mono', monospace;
        text-transform: "none";
      }
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #3f3;
}

li {
  float: left;
}

li a, .dropbtn {
  display: inline-block;
  color: #000;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover, .dropdown:hover .dropbtn {
  background-color: red;
}

li.dropdown {
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 0px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {background-color: #f1f1f1;}

.dropdown:hover .dropdown-content {
  display: block;
}

button {
  width: 200px;
  height:40px;
}

.data {
  display: inline-block;
  text-transform: none;
  width: 100px;
  height: 30px;
  margin: 5px 3px 5px 3px;
  font-size: 20px;
}

.problem {
  text-transform: none;
  margin: 1px 2px 1px 2px;
  font-size: 30px;
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

</style>
