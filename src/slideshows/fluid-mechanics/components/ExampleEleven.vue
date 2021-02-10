<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem It is suspected that a piece of pure gold has a bubble in its center. Its weight in air is {{ airWeight  }} N and in water of {{ waterWeight }} N, what is the volume of the bubble?
    .center
      p.solution Please do calculations and introduce your results
      p.inline.data Weight in air (N)
        input.center.data(:class="checkedUserAir" v-model.number='userAir')
      p.inline.data  Weight in water (N)
        input.center.data(:class="checkedUserWater" v-model.number='userWater')
      p.inline.data Bouyant force (N)
        input.center.data(:class="checkedUserBouyant" v-model.number='userBouyant')
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>gold</sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserGoldDensity" v-model.number='userGoldDensity')
      p.inline.data V<sub>gold</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserGoldVolume" v-model.number='userGoldVolume')
      p.inline.data <span style="font-family: times new roman; font-style: italic;">&#x03c1;</span><sub>displaced </sub> (kg/m<sup>3</sup>)
        input.center.data(:class="checkedUserFluidDensity" v-model.number='userFluidDensity')
      p.inline.data V<sub>displaced</sub> (m<sup>3</sup>)
        input.center.data(:class="checkedUserDisplacedVolume" v-model.number='userDisplacedVolume')
      p.inline.data Bubble volume (m<sup>3</sup>)
        input.center.data(:class="checkedUserBubbleVolume" v-model.number='userBubbleVolume')

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      userAir: '',
      userWater: '',
      userBouyant: '',
      userGoldVolume: '',
      userDisplacedVolume: '',
      userGoldDensity: '',
      userFluidDensity: '',
      userBubbleVolume: ''
    }
  },
  computed: {
    airWeight: function () {
      let max = 500
      let min = 450
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    waterWeight: function () {
      let max = 400
      let min = 300
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 100
    },
    bouyant: function () {
      return (this.airWeight - this.waterWeight) > 0 ? (this.airWeight - this.waterWeight).toPrecision(4) : (this.airWeight - this.waterWeight).toPrecision(3)
    },
    goldVolume: function () {
      return (this.airWeight / (19300 * 9.81)).toPrecision(3)
    },
    displacedVolume: function () {
      return (this.bouyant / (1000 * 9.81)).toPrecision(3)
    },
    bubbleVolume: function () {
      return (this.displacedVolume - this.goldVolume).toPrecision(3)
    },
    cheat: function () {
      return this.bouyant === this.realGoldBouyant
    },
    checkedUserAir: function () {
      let check
      console.log(this.airWeight + ' : ' + parseFloat(this.userAir))
      console.log(this.airWeight)
      console.log(parseFloat(this.userAir))
      check = parseFloat(this.airWeight) === parseFloat(this.userAir) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserWater: function () {
      let check
      console.log(this.waterWeight + ' : ' + parseFloat(this.userWater))
      check = parseFloat(this.waterWeight) === parseFloat(this.userWater) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBouyant: function () {
      let check
      console.log(this.bouyant + ' : ' + parseFloat(this.userBouyant))
      check = parseFloat(this.bouyant) === parseFloat(this.userBouyant) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserGoldDensity: function () {
      let check
      console.log(19300 + ' : ' + parseFloat(this.userGoldDensity))
      check = this.userGoldDensity === 19300 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserGoldVolume: function () {
      let check
      console.log(this.goldVolume + ' : ' + parseFloat(this.userGoldVolume))
      check = parseFloat(this.goldVolume) === parseFloat(this.userGoldVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserFluidDensity: function () {
      let check
      console.log(1000 + ' : ' + parseFloat(this.userFluidDensity))
      check = parseFloat(this.userFluidDensity) === 1000 ? 'correct' : 'not-correct'
      return check
    },
    checkedUserDisplacedVolume: function () {
      let check
      console.log(this.displacedVolume + ' : ' + parseFloat(this.userDisplacedVolume))
      check = parseFloat(this.displacedVolume) === parseFloat(this.userDisplacedVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserBubbleVolume: function () {
      let check
      console.log(this.bubbleVolume + ' : ' + parseFloat(this.userBubbleVolume))
      check = parseFloat(this.bubbleVolume) === parseFloat(this.userBubbleVolume) ? 'correct' : 'not-correct'
      return check
    },
    checkedUserCheat: function () {
      let check
      let cheat = this.cheat ? 'false' : 'true'
      console.log(this.cheat + ' : ' + this.userCheat)
      console.log(cheat)
      console.log(this.userCheat)
      console.log('Bouyant: ' + this.bouyant + ' : ' + this.realGoldBouyant)
      check = cheat === this.userCheat ? 'correct' : 'not-correct'
      return check
    }
  },
  methods: {
    message: function (name) {
      return {
        'baby bunnies': 'Yeeeeah my favorite too !',
        'fluffy puppies': 'Wow so original.',
        'funny kitties': 'Good for you ' + this.volume + '.',
        'Theming': 'Ok ' + this.volume + ', whatever.',
        'Slide reuse': 'Seriously ' + this.volume + ' you <em>want</em> to see this.',
        'Interactivity': 'Well that\'s this slide, ' + this.volume +
                         '. <br /> A bit too late to unsee it, heh ?'
      }[name]
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
