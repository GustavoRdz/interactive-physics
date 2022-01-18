<template lang="pug">
.eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    <svg xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="400" width="800" version="1.1" viewBox="0 0 800 400">
        //- <rect x="0" y="0" width="800" height="400" stroke="black" fill="gray" stroke-width="0.2" opacity="0.1"/>
        //- <line v-for="x in gridX"  :x1="x" y1="0" :x2="x" y2="400" stroke="gray" stroke-width="1" opacity="1"/>
        //- <line v-for="y in gridY"  x1="0" :y1="y" x2="800" :y2="y" stroke="gray" stroke-width="1" opacity="1"/>
        //- <rect x="0" y="0" width="700" height="400" stroke="red" fill="blue" stroke-width="1" opacity="0.1"/>
        //- <rect x="0" y="0" width="600" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        //- <rect x="0" y="0" width="500" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        //- <rect x="0" y="0" width="400" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        //- <rect x="0" y="0" width="300" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        //- <rect x="0" y="0" width="200" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        //- <rect x="0" y="0" width="100" height="400" stroke="red" fill="blue" stroke-width="0.2" opacity="0.1"/>
        
        // center line (optical axis)
        <line   x1="100" y1="200" x2="700" y2="200" stroke="black" stroke-width="1" opacity="0.5"/>
        
        // laser
        <rect x="10" y="175" width="100" height="50" stroke="gray" fill="white" stroke-width="1" opacity="1"/>
        <text x="50" y="190" font-size="12px" fill="Black">Laser</text>
        <text x="15" y="215" font-size="20px" :stroke="laserColor()" :fill="laserColor()">λ={{ Math.round(10 * lambda / 1e-9) / 10 }} nm</text>

        // slit
        <rect x="145" y="150" width="5" height="100" stroke="gray" fill="black" stroke-width="1" opacity="1"/>
        <rect x="145" y="195" width="5" height="10" stroke="gray" :fill="laserColor()" stroke-width="1" opacity="1"/>
        <text x="155" y="215" font-size="12px" stroke="none" fill="black">a = {{ Number.parseFloat(a / 1e-6).toPrecision(3) }} μm</text>
        // L
        <path d="M150,230 L160,225 M150,230 L160,235 M150,230 L390,230 M485,230 L700,230" stroke="black" stroke-width="1" opacity="1" />
        <text x="400" y="235" font-size="12px" stroke="none" fill="black">L = {{ Number.parseFloat(L).toPrecision(4) }} mm</text>

        // laser light
        <path d="M110,190 L145,190 145,199 150,199 700,0 700,400 150,201 145,201 145,210 110,210 z" :stroke="laserColor()" :fill="laserColor()" stroke-width="1" opacity="0.1" />
        
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:rgb(0,0,0);stop-opacity:1" />

            <stop :offset="(200 - 350 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 325 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.9" />
            <stop :offset="(200 - 300 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 275 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.8" />
            <stop :offset="(200 - 250 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 225 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.7" />
            <stop :offset="(200 - 200 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 175 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.6" />
            <stop :offset="(200 - 150 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 125 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
            <stop :offset="(200 - 100 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 - 75 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.1" />
            <stop :offset="(200 - 50 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />

            <stop offset="50%" style="stop-color:rgb(0,0,0);stop-opacity:0" />
            
            <stop :offset="(200 + 50 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 75 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.1" />
            <stop :offset="(200 + 100 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 125 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.3" />
            <stop :offset="(200 + 150 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 175 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.6" />
            <stop :offset="(200 + 200 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 225 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.7" />
            <stop :offset="(200 + 250 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 275 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.8" />
            <stop :offset="(200 + 300 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
            <stop :offset="(200 + 325 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:0.9" />
            <stop :offset="(200 + 350 * zeroes * scale) / 400 " style="stop-color:rgb(0,0,0);stop-opacity:1" />
      
            <stop offset="100%" style="stop-color:rgb(0,0,0);stop-opacity:1" />
          </linearGradient>
        </defs>
        // observation picture zone
        <rect x="700" y="0" width="100" height="400" stroke="red" :fill="laserColor()" stroke-width="1"/>
        <rect x="700" y="0" width="100" height="400" stroke="red" fill="url(#grad1)" stroke-width="1"/>
        // observation screen
        <rect x="700" y="0" width="5" height="400" stroke="red" fill="white" stroke-width="1" opacity="1"/>

        //- // line to zeros
        //- <line   x1="10" y1="200" x2="700" :y2="200 - 50 * zeroes * scale" stroke="black" stroke-width="1" opacity="1"/>
        

        // line to observaion point
        <line   x1="150" y1="200" x2="700" :y2="200 - 50000 * y * scale" stroke="blue" stroke-width="2" opacity="1"/>
        <line   x1="470" :y1="200 - 50000 * y * scale" x2="700" :y2="200 - 50000 * y * scale" stroke="blue" stroke-width="2" opacity="1"/>
        <text x="440" :y="200 - 50000 * y * scale - 7" font-family="Times" font-size="15px" :fill="laserColor()">y = {{ Math.round(100000 * y) / 100 }} mm</text>

        // Intensity display
        <text x="440" :y="200 - 50000 * y * scale + 15" font-family="Times" font-size="15px" :fill="laserColor()">I = {{ Math.round(1000 * intensity()) / 1000 }} Io</text>
        
        // angle
        //- <line   x1="150" y1="200" x2="425" :y2="(800 - 50000 * y * scale) / 4" stroke="blue" stroke-width="2" opacity="1"/>
        <path :d="angle()" stroke="black" fill="none" stroke-width="2" fill-opacity="0.1"/>
        <text x="300" :y="(800 - 50000 * y * scale) / 4 + 10" font-family="Times" font-size="15px" :fill="laserColor()">θ = {{ Math.round(10000 * theta() * 180 / Math.PI) / 10000 }} º</text>

        // scale
        <line v-for="yr in scaleRule" x1="650" :y1="200 - 50 * yr" x2="700" :y2="200 -50 * yr" stroke="black" stroke-width="1" opacity="1"/>
        <text v-for="yr in scaleRule" x="610" :y="200 - 50*yr + 2" font-size="10px" fill="Black">{{ Math.round(10 * yr / scale)/10 }} mm</text>

        // diffraction intensity
        <path :d="sinc()" :stroke="laserColor()" :fill="laserColor()" stroke-width="1" opacity="0.7" />

    </svg>
    div.time-control
      div(style="display: flex; justify-content: space-around; border: solid 1px; border-radius: 10px; height: 130px; width: 90%; margin: auto")
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold; color: black; ").center λ = <span style="font-style: normal;">{{ Number.parseFloat(lambda / 1e-9).toPrecision(4) }} nm</span><br>
            button(@click="lambda > 309.9e-9 ? lambda -=10e-9 : lambda; ceros()").time-btn -10
            button(@click="lambda < 791e-9 ? lambda +=10e-9 : lambda; ceros()").time-btn +10
            <br>
            button(@click="lambda > 300.9e-9 ? lambda -=1e-9 : lambda; ceros()").time-btn -1
            button(@click="lambda < 799.1e-9 ? lambda +=1e-9 : lambda; ceros()").time-btn +1
            <br>
            button(@click="lambda >300.09e-9 ? lambda -=0.1e-9 : lambda; ceros()").time-btn -0.1
            button(@click="lambda < 799.91e-9 ? lambda +=0.1e-9 : lambda; ceros()").time-btn +0.1
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center a = <span style="font-style: normal;">{{ Number.parseFloat(a / 1e-6).toPrecision(3) }} μm</span><br>
            button(@click="a > 119.9e-6 ? a -=1e-4 : a; ceros()").time-btn -100
            button(@click="a < 899e-6 ? a +=1e-4 : a; ceros()").time-btn +100
            <br>
            button(@click="a > 29.9e-6 ? a -=1e-5 : a; ceros()").time-btn -10
            button(@click="a < 989e-6 ? a +=1e-5 : a; ceros()").time-btn +10
            <br>
            button(@click="a > 20.9e-6 ? a -=1e-6 : a; ceros()").time-btn -1
            button(@click="a < 998e-6 ? a +=1e-6 : a; ceros()").time-btn +1
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center L = <span style="font-style: normal;">{{ Number.parseFloat(L).toPrecision(4) }} m</span><br>
            button(@click="L > 0.499 ? L -=0.1 : L; ceros()").time-btn -0.1
            button(@click="L < 2.919 ? L +=0.1 : L; ceros()").time-btn +0.1
            <br>
            button(@click="L > 0.4099 ? L -=0.01 : L; ceros()").time-btn -0.01
            button(@click="L < 2.991 ? L +=0.01 : L; ceros()").time-btn +0.01
            <br>
            button(@click="L > 0.40099 ? L -=0.001 : L; ceros()").time-btn -0.001
            button(@click="L < 2.9991 ? L +=0.001 : L; ceros()").time-btn +0.001
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center y = <span style="font-style: normal;">{{ y < 0.0001 ? 0 : Number.parseFloat(y / 1e-3).toPrecision(4) }} mm</span><br>
            button(@click="y > 0.019 ? y -=0.01 : y; theta()").time-btn -10
            button(@click="y < 0.3901 ? y +=0.01 : y").time-btn +10
            <br>
            button(@click="y > 0.0019 ? y -=0.001 : y").time-btn -1
            button(@click="y < 0.3991 ? y +=0.001 : y").time-btn +1
            <br>
            button(@click="y > 0.00009 ? y -=0.0001 : y").time-btn -0.1
            button(@click="y < 0.39991 ? y +=0.0001 : y").time-btn +0.1
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center zoom : <span style="font-style: normal;">{{  Number.parseFloat(scale).toPrecision(3) }}X </span><br>
            button(@click="scale >= 1.1 ? scale -=1 : scale").time-btn -1
            button(@click="scale <= 3.01 ? scale +=1 : scale").time-btn +1
            <br>
            button(@click="scale >= 0.11 ? scale -=0.1 : scale").time-btn -0.1
            button(@click="scale <= 3.9 ? scale +=0.1 : scale").time-btn +0.1
            <br>
            button(@click="scale >= 0.011 ? scale -=0.01 : scale").time-btn -0.01
            button(@click="scale <= 3.991 ? scale +=0.01 : scale").time-btn +0.01
        div

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      gridX: this.range(0, 160, 50),
      gridY: this.range(0, 16, 50),
      a: 0.632e-3,
      m: 1,
      lambda: 632e-9,
      L: 1,
      scale: 1,
      y: 1e-3,
      N: 10000,
      d: 0.4e-3,
      zeroes: 1,
      scaleRule: this.range(-4, 4, 1),
      enterT1: '',
      enterT2: '',
      enterV: '',
      points: 20,
      speed: 0.1,
      v: 340,
      vf: 34,
      M: 0.7,
      x: [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800, 850, 900, 950, 1000]
    }
  },
  computed: {
    frAtras: function () {
      return 1 / (1 + this.M)
    },
    frDelante: function () {
      return 1 / (1 - this.M)
    }
  },
  methods: {
    sinc: function () {
      // let T = 1
      let xLimit = 1
      let delta = 0.01
      let scaleX = 200
      // let scaleY = 2
      let offsetX = 200
      let offsetY = 700

      let d = `M${offsetY},${0} L`
      let y
      for (let i = -xLimit + delta; i <= xLimit; i += delta) {
        let x = scaleX * Math.round(100 * i) / 100
        // let arg = 0.00001 * 2 * this.scale * Math.PI * this.a * x / (this.lambda * this.L)
        // let argA = 0.00001 * 2 * Math.PI * this.a * x / (this.lambda * this.L * this.scale)
        let argB = 0.00001 * 2 * Math.PI * this.d * x / (this.lambda * this.L * this.scale)
        // console.log(this.scale)
        // y = 1 * Math.pow(Math.sin(argA + 1e-10) / (argA + 1e-10), 2) * Math.pow(Math.sin(this.N * argB + 1e-10) / Math.sin((argB + 1e-10)), 2)
        y = 0.01 * Math.pow(Math.sin(this.N * argB + 1e-10) / Math.sin((argB + 1e-10)), 2)
        // console.log('(' + x + ', ' + y + ')')
        d += `${offsetY - y},${offsetX + x} `
      }
      d += `${offsetY},400 z`
      // console.log(d)
      return d
    },
    theta: function () {
      console.log(this.y)
      console.log(this.L)
      return Math.atan(this.y / this.L)
    },
    angle: function () {
      return `M290 200 A 200 200 0 0 0 290 ${(800 - 50000 * this.y * this.scale) / 4}`
    },
    intensity: function () {
      let arg = 0.00001 * 2 * Math.PI * this.a * (5e4 * this.y) / (this.lambda * this.L)
      // console.log('arg: ' + arg)
      let y = 1 * Math.pow(Math.sin(arg + 1e-10) / (arg + 1e-10), 2)
      // console.log('I: ' + y)
      return y
    },
    ceros: function () {
      let n = 0
      console.log('zeros' + (n + 1 / 2) * this.L * this.lambda / this.a)
      console.log('zeros' + 100000 * (n + 1 / 2) * this.L * this.lambda / (this.a * this.scale))
      console.log('y' + this.y)
      this.zeroes = 2000 * (n + 1 / 2) * this.L * this.lambda / this.a
      // return 50000 * this.scale * (n + 1 / 2) * this.L * this.lambda / this.a
    },
    range: function (start, end, step) {
      var ans = []
      for (let i = start; i <= end; i++) {
        ans.push(i * step)
      }
      return ans
    },
    laserColor: function (inverse) {
      let w = this.lambda / 1e-9
      let R = 0
      let G = 0
      let B = 0

      let rojo = [6, 84, 90, 82, 91, 92, 83, 88, 89, 88, 89, 89, 90, 90, 89, 90, 92, 91, 92, 91, 91, 91, 90, 91, 92, 92, 92, 93, 92, 93, 94, 93, 91, 92, 92, 92, 93, 94, 92, 93, 94, 94, 94, 94, 94, 95, 96, 94, 95, 95, 95, 95, 96, 94, 94, 95, 95, 94, 95, 96, 97, 99, 98, 99, 98, 100, 102, 103, 104, 104, 107, 109, 107, 109, 110, 110, 109, 110, 112, 112, 113, 114, 115, 115, 117, 119, 119, 120, 122, 123, 124, 123, 122, 122, 125, 126, 125, 127, 129, 130, 130, 132, 132, 134, 133, 135, 135, 136, 136, 137, 139, 140, 139, 140, 141, 141, 142, 144, 143, 143, 146, 147, 147, 148, 148, 149, 150, 149, 152, 152, 153, 153, 154, 153, 154, 154, 155, 156, 156, 157, 157, 157, 157, 157, 153, 151, 147, 144, 141, 138, 136, 133, 130, 128, 125, 122, 120, 117, 114, 110, 108, 105, 101, 97, 93, 88, 83, 80, 78, 73, 67, 63, 56, 52, 46, 41, 32, 23, 11, 1, 0, 0, 1, 2, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 18, 33, 43, 44, 47, 57, 65, 70, 72, 74, 81, 85, 90, 95, 97, 100, 103, 107, 111, 114, 119, 122, 126, 132, 133, 135, 140, 145, 149, 151, 154, 158, 160, 163, 164, 168, 170, 174, 177, 182, 183, 187, 191, 194, 197, 201, 203, 208, 210, 213, 216, 218, 222, 225, 228, 233, 233, 235, 239, 242, 244, 245, 248, 247, 248, 248, 247, 249, 248, 249, 249, 248, 247, 248, 247, 246, 247, 247, 246, 248, 248, 248, 248, 248, 247, 248, 248, 246, 246, 247, 246, 246, 246, 245, 247, 247, 247, 246, 247, 246, 247, 246, 246, 245, 245, 246, 246, 246, 245, 244, 245, 243, 243, 242, 244, 243, 243, 242, 242, 244, 244, 244, 243, 244, 243, 242, 242, 241, 241, 240, 241, 240, 240, 239, 239, 241, 240, 240, 239, 240, 239, 238, 239, 239, 239, 238, 238, 238, 238, 237, 237, 235, 235, 236, 235, 235, 234, 235, 234, 235, 235, 234, 235, 234, 234, 233, 233, 234, 232, 231, 233, 233, 235, 233, 232, 232, 231, 231, 231, 231, 231, 230, 230, 230, 229, 230, 229, 229, 228, 228, 227, 227, 225, 224, 225, 225, 226, 226, 224, 224, 225, 225, 224, 222, 222, 224, 225, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 225, 225, 225, 225, 225, 225, 225, 225, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 223, 222, 222, 222, 222, 222, 222, 222, 222, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 224, 223, 223, 223, 223, 223, 223, 223, 223, 221, 221, 221, 221, 221, 221, 221, 221, 219, 219, 218, 217, 217, 215, 214, 214, 213, 213, 211, 209, 208, 207, 209, 209, 203, 204, 204, 202, 198, 196, 195, 196, 194, 192, 191, 188, 185, 184, 181, 181, 176, 175, 173, 170, 168, 164, 162, 160, 157, 155, 152, 148, 143, 139, 137, 134, 129, 127, 123, 118, 114, 110, 105, 101, 101, 88, 83, 84, 74, 6]

      let verde = [0, 12, 9, 14, 7, 13, 15, 13, 17, 18, 19, 22, 24, 26, 28, 29, 32, 32, 33, 35, 37, 38, 40, 41, 42, 42, 44, 45, 47, 48, 49, 49, 52, 53, 53, 54, 55, 56, 57, 58, 59, 59, 61, 61, 63, 64, 65, 65, 66, 66, 66, 68, 69, 70, 70, 71, 70, 71, 72, 73, 76, 78, 80, 81, 85, 87, 89, 92, 93, 94, 98, 100, 100, 102, 105, 108, 109, 111, 113, 116, 119, 120, 121, 123, 125, 127, 129, 130, 132, 133, 136, 138, 139, 141, 144, 147, 146, 148, 150, 153, 153, 155, 158, 160, 161, 163, 166, 167, 167, 169, 171, 172, 176, 177, 178, 180, 181, 183, 185, 185, 188, 189, 191, 192, 194, 195, 196, 197, 201, 201, 202, 203, 204, 206, 207, 207, 210, 211, 211, 212, 212, 212, 212, 212, 210, 208, 207, 206, 206, 205, 203, 202, 202, 200, 199, 199, 199, 198, 195, 195, 193, 192, 190, 190, 190, 190, 188, 187, 187, 184, 183, 183, 183, 183, 181, 179, 180, 179, 177, 176, 176, 175, 174, 172, 172, 173, 171, 171, 170, 170, 168, 169, 166, 166, 165, 164, 164, 163, 163, 163, 162, 162, 160, 161, 160, 160, 160, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 159, 160, 160, 160, 160, 161, 161, 162, 162, 162, 162, 164, 164, 164, 164, 165, 166, 167, 167, 168, 170, 170, 170, 171, 172, 172, 173, 174, 176, 176, 176, 178, 177, 176, 177, 181, 183, 183, 181, 184, 185, 185, 186, 187, 188, 189, 189, 190, 192, 193, 195, 194, 195, 197, 199, 201, 200, 201, 202, 204, 204, 204, 205, 209, 209, 210, 211, 211, 213, 215, 216, 217, 219, 221, 221, 222, 222, 223, 225, 224, 227, 228, 229, 230, 232, 235, 237, 237, 237, 238, 239, 241, 242, 243, 243, 243, 242, 242, 241, 240, 239, 238, 237, 236, 235, 235, 233, 232, 230, 230, 229, 227, 227, 227, 225, 224, 223, 222, 222, 220, 220, 218, 217, 216, 215, 214, 214, 211, 211, 210, 209, 208, 206, 205, 205, 202, 202, 200, 200, 198, 197, 196, 195, 193, 193, 192, 191, 190, 188, 187, 187, 184, 184, 182, 181, 179, 178, 177, 175, 173, 173, 172, 170, 169, 167, 166, 166, 163, 162, 160, 159, 157, 156, 155, 154, 151, 151, 150, 147, 147, 145, 143, 143, 140, 140, 138, 137, 134, 133, 131, 130, 127, 126, 125, 123, 122, 120, 119, 119, 115, 112, 109, 108, 106, 105, 103, 100, 100, 98, 96, 93, 91, 88, 87, 85, 83, 82, 80, 77, 74, 71, 69, 68, 64, 62, 59, 55, 53, 49, 46, 44, 39, 37, 30, 22, 13, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 3, 6, 8, 11, 14, 18, 21, 23, 26, 29, 30, 32, 33, 34, 35, 37, 37, 39, 39, 40, 41, 42, 43, 45, 45, 46, 45, 47, 46, 48, 48, 48, 48, 49, 49, 50, 50, 48, 49, 50, 50, 48, 47, 42, 46, 45, 41, 44, 2]

      let azul = [4, 114, 112, 117, 121, 105, 116, 116, 117, 117, 117, 119, 121, 120, 121, 122, 122, 122, 123, 124, 125, 126, 127, 128, 129, 129, 130, 131, 132, 133, 134, 134, 135, 136, 136, 137, 138, 139, 139, 140, 141, 141, 142, 142, 143, 144, 145, 145, 146, 146, 146, 147, 148, 148, 148, 149, 151, 151, 152, 151, 153, 153, 154, 155, 157, 159, 161, 161, 162, 163, 165, 167, 167, 169, 171, 173, 173, 175, 177, 179, 181, 182, 183, 185, 187, 189, 190, 191, 191, 192, 194, 195, 195, 197, 200, 202, 199, 201, 203, 205, 205, 207, 209, 211, 209, 211, 213, 214, 214, 216, 218, 219, 221, 222, 223, 223, 224, 224, 225, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 234, 235, 236, 237, 238, 239, 239, 241, 242, 242, 243, 243, 243, 243, 243, 237, 235, 231, 227, 226, 222, 219, 217, 214, 212, 208, 205, 203, 199, 196, 192, 190, 186, 184, 182, 179, 177, 173, 171, 168, 165, 162, 158, 156, 152, 149, 146, 144, 142, 139, 137, 136, 131, 128, 125, 122, 120, 118, 115, 111, 108, 106, 104, 100, 98, 96, 93, 91, 87, 84, 84, 79, 79, 76, 73, 70, 67, 64, 64, 59, 59, 59, 59, 59, 59, 59, 59, 59, 59, 60, 60, 60, 60, 61, 61, 61, 61, 59, 59, 59, 59, 57, 57, 55, 56, 56, 54, 55, 55, 55, 55, 53, 54, 52, 52, 51, 52, 51, 51, 50, 51, 52, 52, 51, 47, 48, 48, 44, 45, 44, 42, 43, 43, 43, 42, 40, 40, 40, 39, 35, 34, 34, 34, 33, 32, 31, 29, 28, 25, 24, 24, 20, 19, 16, 11, 7, 2, 1, 1, 0, 0, 2, 1, 0, 0, 0, 2, 1, 1, 1, 1, 0, 0, 0, 0, 2, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 2, 2, 1, 2, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 4, 6, 6, 7, 9, 10, 12, 13, 14, 16, 17, 18, 19, 19, 21, 20, 21, 22, 23, 23, 23, 25, 25, 23, 24, 25, 27, 27, 25, 28, 29, 28, 28, 29, 28, 29, 28, 31, 31, 30, 30, 30, 30, 30, 29, 31, 31, 31, 30, 31, 33, 32, 30, 34, 36, 36, 34, 34, 34, 36, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 37, 39, 39, 39, 39, 39, 39, 39, 39, 41, 41, 41, 41, 41, 41, 41, 41, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 42, 44, 44, 44, 44, 44, 44, 44, 44, 45, 45, 45, 45, 45, 45, 45, 45, 47, 47, 47, 47, 47, 47, 47, 47, 50, 50, 50, 50, 50, 50, 50, 50, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 52, 54, 54, 54, 54, 54, 54, 54, 54, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 55, 54, 54, 54, 54, 54, 54, 54, 54, 54, 54, 53, 53, 53, 53, 52, 52, 56, 54, 53, 53, 51, 52, 53, 54, 52, 52, 55, 54, 52, 52, 51, 52, 53, 53, 53, 53, 53, 53, 53, 53, 50, 50, 50, 50, 50, 49, 49, 48, 50, 49, 49, 48, 46, 45, 45, 44, 45, 44, 42, 42, 41, 42, 39, 37, 36, 34, 32, 34, 36, 0]

      if (w >= 380) {
        let index = Math.round((w - 380) * ((1072 - 380) / 370))
        console.log('index: ', index)
        R = rojo[index]
        G = verde[index]
        B = azul[index]
      }
      if (inverse) {
        return `rgb(${255 - R}, ${255 - G}, ${255 - B})`
      } else {
        return `rgb(${R}, ${G}, ${B})`
      }
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
  width: 95%;
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

.time-btn {
  width: 55px;
  font-size: 10px;
}
</style>
