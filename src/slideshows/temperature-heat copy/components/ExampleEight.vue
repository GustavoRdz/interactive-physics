<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
  p.problem A camper pours {{ coffeeMass }} kg of coffee initially in a pot at {{ coffeeTemp }}&#x00B0;C, in an aluminum cup of {{ cupMass }} kg initially at {{ cupTemp }}&#x00B0;C. What is the equilibrium temperature? suppose that the coffee has the same specific heat as the water and does not exchange heat with the environment


    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Coffee mass (kg)
        input.center.data(:class="checkedCoffeeMass" v-model.number='enterCoffeeMass')
        <span class="error" v-if="errorCoffeeMass">[e: {{ errorCoffeeMass.toPrecision(2) }}%]</span>
      p.inline.data Coffee T<sub>i</sub> (ºC)
        input.center.data(:class="checkedCoffeeTemp" v-model.number='enterCoffeeTemp')
        <span class="error" v-if="errorCoffeeTemp">[e: {{ errorCoffeeTemp.toPrecision(2) }}%]</span>
      p.inline.data Cup mass (kg)
        input.center.data(:class="checkedCupMass" v-model.number='enterCupMass')
        <span class="error" v-if="errorCupMass">[e: {{ errorCupMass.toPrecision(2) }}%]</span>
      p.inline.data Cup T<sub>i</sub>ºC)
        input.center.data(:class="checkedCupTemp" v-model.number='enterCupTemp')
        <span class="error" v-if="errorCupTemp">[e: {{ errorCupTemp.toPrecision(2) }}%]</span>
      p.inline.data equilibrium T (ºC)
        input.center.data(:class="checkedTempFinal" v-model.number='enterTempFinal')
        <span class="error" v-if="errorTempFinal">[e: {{ errorTempFinal.toPrecision(2) }}%]</span>

</template>
<script>
import eagle from 'eagle.js'

export default {
  data: function () {
    return {
      enterCoffeeMass: '',
      errorCoffeeMass: 0,
      enterCoffeeTemp: '',
      errorCoffeeTemp: 0,
      enterCupMass: '',
      errorCupMass: 0,
      enterCupTemp: '',
      errorCupTemp: 0,
      enterTempFinal: '',
      errorTempFinal: 0,
      cCoffe: 4190,
      cCup: 910
    }
  },
  computed: {
    coffeeMass: function () {
      console.clear()
      let max = 500
      let min = 200
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    coffeeTemp: function () {
      let max = 80
      let min = 60
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    cupMass: function () {
      let max = 220
      let min = 100
      return Math.floor(Math.random() * (max - min + 1) + min) / 1000
    },
    cupTemp: function () {
      let max = 30
      let min = 20
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    finalTemp: function () {
      return (this.coffeeMass * this.cCoffe * this.coffeeTemp + this.cupMass * this.cCup * this.cupTemp) / (this.coffeeMass * this.cCoffe + this.cupMass * this.cCup)
    },
    checkedCoffeeMass: function () {
      this.errorCoffeeMass = this.errorRelative('Coffe mass => ', this.coffeeMass, parseFloat(this.enterCoffeeMass))
      return this.errorCoffeeMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCoffeeTemp: function () {
      this.errorCoffeeTemp = this.errorRelative('Coffe Temp => ', this.coffeeTemp, parseFloat(this.enterCoffeeTemp))
      return this.errorCoffeeTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCupMass: function () {
      this.errorCupMass = this.errorRelative('Cup mass => ', this.cupMass, parseFloat(this.enterCupMass))
      return this.errorCupMass < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCupTemp: function () {
      this.errorCupTemp = this.errorRelative('Cup Temp => ', this.cupTemp, parseFloat(this.enterCupTemp))
      return this.errorCupTemp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedTempFinal: function () {
      this.errorTempFinal = this.errorRelative('Final temp. => ', this.finalTemp, parseFloat(this.enterTempFinal))
      return this.errorTempFinal < 1e-1 ? 'correct' : 'not-correct'
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
  watch: {
  },
  mixins: [eagle.slide]
}

</script>

<style lang='scss' scoped>
.eg-slide {
  .eg-slide-content {
    width: 100%;
    max-width: 100%;
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
  font-size: 22px;
  color: blue;
  width: 100%;
}
.mate {
  font-family: 'New Times Roman';
  font-style: italic;
  font-size: 30px;
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
