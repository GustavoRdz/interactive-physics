<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A camper pours {{ coffeeMass }} kg of coffee initially in a pot at {{ coffeeTemp }}&#x00B0;C, in an aluminum cup of {{ cupMass }} kg initially at {{ cupTemp }}&#x00B0;C. What is the equilibrium temperature? suppose that the coffee has the same specific heat as the water and does not exchange heat with the environment


    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Coffee mass (kg)
        input.center.data(:class="checkedCoffeeMass" v-model.number='enterCoffeeMass')
      p.inline.data Coffee T<sub>i</sub> (ºC)
        input.center.data(:class="checkedCoffeeTemp" v-model.number='enterCoffeeTemp')
      p.inline.data Cup mass (kg)
        input.center.data(:class="checkedCupMass" v-model.number='enterCupMass')
      p.inline.data Cup T<sub>i</sub>ºC)
        input.center.data(:class="checkedCupTemp" v-model.number='enterCupTemp')
      p.inline.data equilibrium T (ºC)
        input.center.data(:class="checkedTempFinal" v-model.number='enterTempFinal')

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterCoffeeMass: '',
      enterCoffeeTemp: '',
      enterCupMass: '',
      enterCupTemp: '',
      enterTempFinal: '',
      cCoffe: 4190,
      cCup: 910
    }
  },
  computed: {
    coffeeMass: function () {
      let max = 500
      let min = 200
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    coffeeTemp: function () {
      let max = 80
      let min = 60
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    cupMass: function () {
      let max = 220
      let min = 100
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    cupTemp: function () {
      let max = 30
      let min = 20
      return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
    },
    finalTemp: function () {
      return parseFloat(((this.coffeeMass * this.cCoffe * this.coffeeTemp + this.cupMass * this.cCup * this.cupTemp) / (this.coffeeMass * this.cCoffe + this.cupMass * this.cCup)).toPrecision(4))
    },
    checkedCoffeeMass: function () {
      let check
      console.log('Coffee mass :' + this.coffeeMass + ' : ' + parseFloat(this.enterCoffeeMass))
      check = this.coffeeMass === parseFloat(this.enterCoffeeMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedCoffeeTemp: function () {
      let check
      console.log('Coffee temp :' + this.coffeeTemp + ' : ' + parseFloat(this.enterCoffeeTemp))
      check = this.coffeeTemp === parseFloat(this.enterCoffeeTemp) ? 'correct' : 'not-correct'
      return check
    },
    checkedCupMass: function () {
      let check
      console.log('Cup mass : ' + this.cupMass + ' : ' + parseFloat(this.enterCupMass))
      check = this.cupMass === parseFloat(this.enterCupMass) ? 'correct' : 'not-correct'
      return check
    },
    checkedCupTemp: function () {
      let check
      console.log('Cup temp : ' + this.cupTemp + ' : ' + parseFloat(this.enterCupTemp))
      check = this.cupTemp === parseFloat(this.enterCupTemp) ? 'correct' : 'not-correct'
      return check
    },
    checkedTempFinal: function () {
      let check
      console.log('Eq. temp : ' + this.finalTemp + ' : ' + parseFloat(this.enterTempFinal))
      check = this.finalTemp === parseFloat(this.enterTempFinal) ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    material1: function (index) {
      this.mat1 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    },
    material2: function (index) {
      this.mat2 = index
      if (this.isStarted === false) {
        this.stop()
      } else {
        this.stop()
        this.start()
      }
    }
  },
  watch: {
  },
  mixins: [eagle.slide]
}

// function calcChord () {
//   let d = ''
//   let step = 8
//   var i
//   for (i = 0; i <= 30; i++) {
//     d += `M${22 + i * step} 92 L${20 + i * step} 94 L${23 + i * step} 111 L${25 + i * step} 113 L${28 + i * step} 111 L${25 + i * step} 94 L${22 + i * step} 92 L${25 + i * step} 113 `
//   }
//   return d
// }

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
