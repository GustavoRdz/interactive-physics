<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    div.container
      div.title
        h6 Wave interference
      div.left-pulses
        div(style="border: solid 1px; border-radius: 4px;")
          p(style="font-family: Times; font-style: italic; font-size:14px; font-weight: bold; color: black; margin: 3px 0 10px 0;").center LEFT <br>WAVE FORM<br>
          div.left-input
            button(@click=`leftWave = 'triangle'; increaseK(0)`).pulse-btn Triangle
            button(@click=`leftWave = 'triangle2'; increaseK(0)`).pulse-btn  Triangle2
            button(@click=`leftWave = 'square'; increaseK(0)`).pulse-btn  Square
            button(@click=`leftWave = 'gaussian'; increaseK(0)`).pulse-btn  Gaussian
            button(@click=`leftWave = 'lorentzian'; increaseK(0)`).pulse-btn  Lorentzian
            button(@click=`leftWave = 'sine'; increaseK(0)`).pulse-btn  Sine
        div(style="border: solid 1px; border-radius: 4px; margin: 0;")
          div.amplitude-btns
            p(style="font-family: Times; font-size:14px; font-weight: bold; color: black; margin: 0px 0 0 0;").center Amplitude <br> {{ amplitudeLeft.toPrecision(2) }}<br>
            button(@click="amplitudeLeft += 0.1; increaseK(0)").amplitude-btn +0.1
            button(@click="amplitudeLeft -= 0.1; increaseK(0)").amplitude-btn -0.1
            button(@click="amplitudeLeft += 1; increaseK(0)").amplitude-btn +1
            button(@click="amplitudeLeft -= 1; increaseK(0)").amplitude-btn -1
          div
            p(style="font-family: Times; font-size:14px; font-weight: bold; color: black; margin: 10px 0 0 0;").center width<br> {{ widthLeft.toPrecision(2) }} <br>
            button(@click="widthLeft += 0.1; increaseK(0)").width-btn +0.1
            button(@click="widthLeft -= 0.1; increaseK(0)").width-btn -0.1            
            button(@click="widthLeft += 1; increaseK(0)").width-btn +1
            button(@click="widthLeft -= 1; increaseK(0)").width-btn -1            
           
      div.display
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 980 290" width="700px" height="300px">

        <!-- <rect x="0" y="0" width="980" height="210" stroke="#f57c00" fill="#0f0" stroke-width="1"  opacity= "0.3"/> -->

          <!-- grid hor-->
          <line v-for="(item, index) in [-50, 0, 50, 100, 150, 200, 250, 300]" fill="none" stroke="#000" stroke-width="2" x1="0" :y1="item + 10" x2="1220" :y2="item + 10" opacity="0.2" stroke-linecap="round"/>
          
          <!-- grid vert-->
          <line v-for="(item, index) in [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200]" fill="none" stroke="#000" stroke-width="2" :x1="item + 10" y1="-60" :x2="item + 10" y2="320" opacity="0.2" stroke-linecap="round"/>
      
          <!-- string -->
          //- <path d="M0,154 L106,154 154,58 250,154 730,154 826,58 874,154 980,154" fill="none" stroke="#f57c00" stroke-width="8" stroke-linecap="round"/>
        
          <!-- speed -->
          <line x1="180" y1="58" x2="270" y2="58" stroke="#f00" stroke-width="10" stroke-linecap="round"/>
          <line x1="250" y1="48" x2="275" y2="58" stroke="#f00" stroke-width="8" stroke-linecap="round"/>
          <line x1="250" y1="68" x2="275" y2="58" stroke="#f00" stroke-width="8" stroke-linecap="round"/>

          <!-- speed -->
          <line x1="800" y1="58" x2="710" y2="58" stroke="#0f0" stroke-width="10" stroke-linecap="round"/>
          <line x1="705" y1="58" x2="730" y2="48" stroke="#0f0" stroke-width="8" stroke-linecap="round"/>
          <line x1="705" y1="58" x2="730" y2="68" stroke="#0f0" stroke-width="8" stroke-linecap="round"/>

          <path :d=path3 fill="none" stroke="#f57c00" stroke-width="8" stroke-linecap="round"/>
          <path :d=path1 fill="none" stroke="#0000ff" stroke-width="4" stroke-linecap="round" opacity="0.5"/>
          <path :d=path2 fill="none" stroke="#00ff00" stroke-width="4" stroke-linecap="round" opacity="0.5"/>

        </svg>

      div.right-pulses
        div(style="border: solid 1px; border-radius: 4px;")
          p(style="font-family: Times; font-style: italic; font-size:14px; font-weight: bold;color: black; margin: 3px 0 10px 0;").center RIGHT<br>WAVE FORM<br>
          div.left-input
            button(@click=`rightWave = 'triangle'; increaseK(0)`).pulse-btn  Triangle
            button(@click=`rightWave = 'triangle2'; increaseK(0)`).pulse-btn  Triangle2
            button(@click=`rightWave = 'square'; increaseK(0)`).pulse-btn  Square
            button(@click=`rightWave = 'gaussian'; increaseK(0)`).pulse-btn  Gaussian
            button(@click=`rightWave = 'lorentzian'; increaseK(0)`).pulse-btn  Lorentzian
            button(@click=`rightWave = 'sine'; increaseK(0)`).pulse-btn  Sine
        div(style="border: solid 1px; border-radius: 4px;")
          div
            p(style="font-family: Times; font-size:14px; font-weight: bold; color: black; margin: 10px 0 0 0;").center Amplitude <br> {{ amplitudeRight.toPrecision(2) }}<br>
            button(@click="amplitudeRight += 0.1; increaseK(0)").amplitude-btn +0.1
            button(@click="amplitudeRight -= 0.1; increaseK(0)").amplitude-btn -0.1
            button(@click="amplitudeRight += 1; increaseK(0)").amplitude-btn +1
            button(@click="amplitudeRight -= 1; increaseK(0)").amplitude-btn -1
          div
            p(style="font-family: Times; font-size:14px; font-weight: bold; color: black; margin: 10px 0 0 0;").center width<br> {{ widthRight.toPrecision(2) }} <br>
            button(@click="widthRight += 0.1; increaseK(0)").width-btn +0.1
            button(@click="widthRight -= 0.1; increaseK(0)").width-btn -0.1  
            button(@click="widthRight += 1; increaseK(0)").width-btn +1
            button(@click="widthRight -= 1; increaseK(0)").width-btn -1

      div.time-control
        div(style="border: solid 1px; border-radius: 10px; height: 80px;")
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black; margin: auto;").center t = <span style="font-style: normal;">{{ t.toPrecision(3) }}</span> s<br>
            button(@click="increaseK(-1)").time-btn -1
            button(@click="increaseK(1)").time-btn +1
            <br>
            button(@click="increaseK(-0.1)").time-btn -0.1
            button(@click="increaseK(0.1)").time-btn +0.1
    

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      leftWave: 'flat',
      rightWave: 'flat',
      omega: 2.557,
      prod: 1,
      elasticK: 1,
      mass: 1,
      showVectors: '',
      t: 0,
      x: [],
      wave1: [],
      wave2: [],
      path1: 'M0,160 L1000,160',
      path2: 'M0,160 L1000,160',
      path3: 'M0,160 L1000,160',
      points: 250,
      delta: 8 * Math.PI / 250,
      amplitudeLeft: 1,
      amplitudeRight: 1,
      widthLeft: 1,
      widthRight: 1
    }
  },
  computed: {
  },
  methods: {
    pulse1: function () {
      this.wave1 = []
      this.x = []
      for (let m = 0; m < this.points; m++) {
        this.x.push(m * this.delta * 50)
        switch (this.leftWave) {
          case 'triangle':
            this.wave1.push(160 - 50 * this.triangle(m * this.delta - this.t - 1.2, this.widthLeft, this.amplitudeLeft))
            break
          case 'triangle2':
            this.wave1.push(160 - 50 * this.triangle2(m * this.delta - this.t - 1.2, this.widthLeft, this.amplitudeLeft))
            break
          case 'square':
            this.wave1.push(160 - 50 * this.square(m * this.delta - this.t - 0.8, this.widthLeft, this.amplitudeLeft))
            break
          case 'gaussian':
            this.wave1.push(160 - 50 * this.amplitudeLeft * this.gaussian(m * this.delta, this.t + 1.2, this.widthLeft / 4))
            break
          case 'lorentzian':
            this.wave1.push(160 - 75 * this.amplitudeLeft * this.lorentz(m * this.delta, this.t + 1.2, this.widthLeft))
            break
          case 'sine':
            this.wave1.push(160 - 50 * this.amplitudeLeft * Math.sin((m * this.delta * 2 - this.t - 0.4) / (0.63 * this.widthLeft)))
            break
          case 'flat':
            this.wave1.push(160)
        }
      }
      this.path1 = `M${this.x[0]},${this.wave1[0]} L`
      for (var i = 1; i < this.x.length; i++) {
        this.path1 += `${this.x[i]}, ${this.wave1[i]} `
      }
    },
    pulse2: function () {
      this.wave2 = []
      for (let m = 0; m < this.points; m++) {
        switch (this.rightWave) {
          case 'triangle':
            this.wave2.push(160 - 50 * this.triangle(-m * this.delta - this.t + 18.2, this.widthRight, this.amplitudeRight))
            break
          case 'triangle2':
            this.wave2.push(160 - 50 * this.triangle2(-m * this.delta - this.t + 18.2, this.widthRight, this.amplitudeRight))
            break
          case 'square':
            this.wave2.push(160 - 50 * this.square(-m * this.delta - this.t + 18.6, this.widthRight, this.amplitudeRight))
            break
          case 'gaussian':
            this.wave2.push(160 - 50 * this.amplitudeRight * this.gaussian(-m * this.delta, this.t + 21.4, this.widthRight / 4))
            break
          case 'lorentzian':
            this.wave2.push(160 - 75 * this.amplitudeRight * this.lorentz(-m * this.delta, this.t + 20.2, this.widthRight))
            break
          case 'sine':
            this.wave2.push(160 - 50 * this.amplitudeRight * Math.sin((-m * this.delta * 2 - this.t + 0.7) / (0.63 * this.widthRight)))
            break
          case 'flat':
            this.wave2.push(160 - 50 * 0)
        }
        //  this.wave2.push(160 - 150 * this.gaussian(m * this.delta + this.t, 16.2, 0.6))
        // this.wave2.push(160 - 50 * this.triangle2(20 - m * this.delta - this.t, 2, 1))
      }
      this.path2 = `M${this.x[0]},${this.wave2[0]} L`
      for (var i = 1; i < this.x.length; i++) {
        this.path2 += `${this.x[i]},${this.wave2[i]} `
      }
    },
    pulse3: function () {
      this.path3 = `M${this.x[0]},${this.wave1[0] + this.wave2[0] - 160} L`
      for (var i = 1; i < this.x.length; i++) {
        this.path3 += `${this.x[i]},${this.wave1[i] + this.wave2[i] - 160} `
      }
    },
    increaseK (l) {
      this.t += l
      console.log(this.t)
      this.pulse1()
      this.pulse2()
      this.pulse3()
    },
    gaussian (x, m, s) {
      return Math.exp(-Math.pow(x - m, 2) / (2 * Math.pow(s, 2))) // / (s * Math.sqrt(2 * Math.PI))
    },
    lorentz (x, xo, L) {
      return (L / (2 * Math.PI)) / (Math.pow(x - xo, 2) + Math.pow(L / 2, 2))
    },
    square (x, a, b) {
      // a: ancho
      // b: alto
      if (x < -a / 2 || x > a / 2) {
        return 0
      } else {
        return b
      }
    },
    triangle (x, a, b) {
      // a: ancho
      // b: alto
      if (x < -a / 2 || x > a / 2) {
        return 0
      } else {
        return Math.sign(-x) * 2 * b * x / a + b
      }
    },
    triangle2 (x, a, b) {
      // a: ancho
      // b: alto
      if (x < -a / 3 || x > 2 * a / 3) {
        return 0
      } else {
        if (x < 0) {
          return 3 * b * x / a + b
        } else {
          return -3 * b * x / (2 * a) + b
        }
      }
    },
    planck (v, t, m) {
      let h = 1.6e0
      let c = 9e0
      return h * Math.pow(v + 1e-10, 3) / (Math.exp(c * (v + 1e-10) / t) - 1)
    },
    factorial (n) {
      if (n === 0) {
        return 1
      }
      return n * this.factorial(n - 1)
    },
    factor (f) {
      this.prod = this.prod + f
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
        color: #555;
      }
      width: 100%;
    }
    // SVG ANIMATIONS
    .included-svg {
      width: 100%;
    }
    max-width: 100%;

  }
}

.container {
  background-color: #eff8ff;
  width: 100%;
  display: grid;
  grid-template-columns: 80px auto 80px;
  grid-template-rows: 100px 300px 80px;
}
.title {
  grid-column-start: 2;
  grid-row-start: 1;
  justify-self: center;
  align-self: center;
  color: skyblue;
}
.left-pulses {
  width: 90px;
  grid-column-start: 1;
  grid-row-start: 1;
  grid-row-end: 4;
  justify-self: start;
  align-self: center;
}
.display {
  grid-column-start: 2;
  grid-row-start: 2;
  justify-self: center;
  align-self: stretch;
}
.right-pulses {
  width: 90px;
  grid-column-start: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  justify-self: end;
  align-self: center;
}
.time-control {
  width: 30%;
  grid-column-start: 2;
  grid-row-start: 3;
  justify-self: center;
  align-self: start;
}
.left-input {
  font-size: 13px;
  display: inline-block;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}
.pulse-btn {
  width: 100%;
}
.amplitude-btn {
  display: block;
  width: 100%;
  height: 20px;
  margin: 0;
  padding: 0;
}
.amplitude-btns {
  width: 100%;
  margin: 0;
  padding: 0;
}
.width-btn {
  display: block;
  width: 100%;
  margin: 0;
}
.time-btn {
  width: 50px;
  margin: 2px;
}
</style>
