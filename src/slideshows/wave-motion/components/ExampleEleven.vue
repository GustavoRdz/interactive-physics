<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem A wave pulse on a string has the dimensions shown in the figure at t = 0. The wave speed is 40 cm/s. (a) If point O is a fixed end, draw the total wave on the string at t = 15ms, 20 ms, 25 ms, 30 ms, 35 ms, 40 ms, and 45 ms. (b) Repeat part (a) for the case in which point O is a free end.
    .center
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 800" height="400px" width="800px" >

        <!-- <rect x="0" y="0" width="800" height="400" stroke="#f57c00" fill="#f57c00" stroke-width="1" opacity= "0.2"/> -->
        <!-- string -->
        <line fill="none" stroke="#f57c00" stroke-width="10" x1="0" y1="300" x2="200" y2="300" stroke-linecap="round"/>
        <line fill="none" stroke="#f57c00" stroke-width="10" x1="200" y1="300" x2="300" y2="200" stroke-linecap="round"/>
        <line fill="none" stroke="#f57c00" stroke-width="10" x1="300" y1="200" x2="400" y2="300" stroke-linecap="round"/>
        <line fill="none" stroke="#f57c00" stroke-width="10" x1="400" y1="300" x2="600" y2="300" stroke-linecap="round"/>
        <circle cx="600" cy="300" r="15" style="stroke:#000; fill:#000"/>
        
        <!-- cota1 Left2Right -->
        <text x="50" y="260" font-size="35" fill="black" font-weight="normal" font-family="Times"> 4.0 mm</text>
        <line x1="150" y1="200" x2="190" y2="200" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="175" y1="205" x2="175" y2="293" stroke="#000" stroke-width="3" stroke-linecap="round"/>

        <line x1="175" y1="200" x2="165" y2="220" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="175" y1="200" x2="185" y2="220" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="175" y1="300" x2="165" y2="280" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="175" y1="300" x2="185" y2="280" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        
        <!-- cota2 -->
        <text x="180" y="140" font-size="35" fill="black" font-weight="normal" font-family="Times"> 4.0 mm</text>
        <line x1="200" y1="150" x2="200" y2="190" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="300" y1="150" x2="300" y2="190" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="205" y1="170" x2="295" y2="170" stroke="#000" stroke-width="3" stroke-linecap="round"/>

        <line x1="205" y1="170" x2="220" y2="160" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="205" y1="170" x2="220" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="295" y1="170" x2="280" y2="160" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="295" y1="170" x2="280" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        
        <!-- cota3 -->
        <text x="310" y="140" font-size="35" fill="black" font-weight="normal" font-family="Times"> 4.0 mm</text>
        <line x1="400" y1="150" x2="400" y2="200" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="305" y1="170" x2="395" y2="170" stroke="#000" stroke-width="3" stroke-linecap="round"/>

        <line x1="305" y1="170" x2="320" y2="160" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="305" y1="170" x2="320" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="395" y1="170" x2="380" y2="160" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="395" y1="170" x2="380" y2="180" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        
        <!-- cota4 -->
        <text x="440" y="385" font-size="35" fill="black" font-weight="normal" font-family="Times"> 8.0 mm</text>
        <line x1="400" y1="330" x2="400" y2="370" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="600" y1="330" x2="600" y2="370" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="405" y1="350" x2="595" y2="350" stroke="#000" stroke-width="3" stroke-linecap="round"/>

        <line x1="405" y1="350" x2="420" y2="340" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="405" y1="350" x2="420" y2="360" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="595" y1="350" x2="580" y2="340" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        <line x1="595" y1="350" x2="580" y2="360" stroke="#000" stroke-width="3" stroke-linecap="round"/>
        

        <!-- speed -->
        <line x1="400" y1="230" x2="500" y2="230" stroke="#00f" stroke-width="10" stroke-linecap="round"/>
        <line x1="470" y1="221" x2="500" y2="230" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
        <line x1="470" y1="239" x2="500" y2="230" stroke="#00f" stroke-width="8" stroke-linecap="round"/>
         <text x="520" y="240" font-size="45" fill="black" font-weight="normal" font-style="italic" font-family="Times"> v = 40 cm/s</text>

         <text x="630" y="310" font-size="45" fill="black" font-weight="bold" font-style="italic" font-family="Times"> O</text>
      </svg>
    //- .center
    //-   p.solution Please do calculations and introduce your results
    //-   p.inline.data Displacement (m)
    //-     input.center.data(:class="checkedDispl" v-model.number='enterDispl')
    //-   p.inline.data  Velocity (m/s)
    //-     input.center.data(:class="checkedVel" v-model.number='enterVel')
    //-   p.inline.data Acceleration (m/s<sup>2</sup>)
    //-     input.center.data(:class="checkedAcc" v-model.number='enterAcc')
    //-   p.inline.data Amplitud (m)
    //-     input.center.data(:class="checkedAmpl" v-model.number='enterAmpl')
    //-   p.inline.data How farther? (m)
    //-     input.center.data(:class="checkedFarther" v-model.number='enterFarther')
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterDispl: '',
      enterVel: '',
      enterAcc: '',
      enterAmpl: '',
      enterFarther: ''
    }
  },
  computed: {
    displacement: function () {
      let max = 2000
      let min = 500
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    velocity: function () {
      let max = 3000
      let min = 2000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    acceleration: function () {
      let max = 10000
      let min = 5000
      return (Math.floor(Math.random() * (max - min + 1)) + min) / 1000
    },
    angular: function () {
      return Math.round(1000 * Math.sqrt(this.acceleration / this.displacement)) / 1000
    },
    amplitude: function () {
      return Math.round(1000 * Math.sqrt(Math.pow(this.displacement, 2) + Math.pow(this.velocity / this.angular, 2))) / 1000
    },
    farther: function () {
      return Math.round(1000 * (this.amplitude - this.displacement)) / 1000
    },
    checkedDispl: function () {
      let check
      console.log('Displacement : ' + this.displacement + ' : ' + parseFloat(this.enterDispl))
      check = this.displacement === parseFloat(this.enterDispl) ? 'correct' : 'not-correct'
      return check
    },
    checkedVel: function () {
      let check
      console.log('Velocity : ' + this.velocity + ' : ' + parseFloat(this.enterVel))
      check = this.velocity === parseFloat(this.enterVel) ? 'correct' : 'not-correct'
      return check
    },
    checkedAcc: function () {
      let check
      console.log('Acceleration : ' + this.acceleration + ' : ' + parseFloat(this.enterAcc))
      check = this.acceleration === parseFloat(this.enterAcc) ? 'correct' : 'not-correct'
      return check
    },
    checkedAmpl: function () {
      let check
      console.log('Amplitude : ' + this.amplitude + ' : ' + parseFloat(this.enterAmpl))
      check = this.amplitude === parseFloat(this.enterAmpl) ? 'correct' : 'not-correct'
      return check
    },
    checkedFarther: function () {
      let check
      console.log('How farther :' + this.farther + ' : ' + parseFloat(this.enterFarther))
      check = this.farther === parseFloat(this.enterFarther) ? 'correct' : 'not-correct'
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
