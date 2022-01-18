<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    .center
    div(style="display: flex; flex-direction: row; justify-content: space-around;")
      div(style="display: flex; flex-direction: row; justify-content: space-around;")
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" height="500" width="1000" >
          <rect x="0" y="0" width="1000" height="500" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          <line v-for="x in gridX"  :x1="x" y1="0" :x2="x" y2="500" stroke="gray" stroke-width="0.3" opacity="0.3"/>
          <line v-for="y in gridY"  x1="0" :y1="y" x2="1000" :y2="y" stroke="gray" stroke-width="0.3" opacity="0.3"/>
          
          // turning table
          <g>
            <circle cx="500" cy="250" r="170" fill="#000000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
            <circle cx="500" cy="250" r="150" fill="#ffffff" fill-opacity="0.8" stroke="#000000"  stroke-width="0.1"/>
            // axis
            //- <line x1="350" y1="250" x2="650" y2="250" stroke="#000000" opacity="1"/>
            <path :d="angleScale" stroke="black"  fill="none"/>

          </g>
          // circle limiting the mirror
          //- <rect x="350" y="100" width="300" height="300" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          //- <circle cx="500" cy="250" r="130" fill="red" fill-opacity="0.3" stroke="#000000"  stroke-width="0.1"/>
          //- <rect :x="xRect" :y="yRect" :width="wRect" :height="hRect" fill="green" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>

          <rect x="10" y="150" width="90" height="200" fill="#000000" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="170" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="210" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="250" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="290" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          <ellipse cx="100" cy="330" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- reference lines
          <line x1="100" y1="170" x2="1000" y2="170" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="210" x2="1000" y2="210" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="250" x2="1000" y2="250" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="290" x2="1000" y2="290" stroke="#000000" opacity="0.1"/>
          <line x1="100" y1="330" x2="1000" y2="330" stroke="#000000" opacity="0.1"/>

          //- laser rays
          //- <path :d="laserCenter" stroke="#ff0000"  stroke-width="3" fill="none"/>

          //- mirror
          <path :d="mirror()" stroke="#0000ff"  stroke-width="10" fill="none"/>

          <path v-for="y in [170,190,210,230,250,270,290,310,330]" :d="laserLine(100,y)" stroke="green"  stroke-width="3" fill="none"/>
          //- <path v-for="y in [170]" :d="laserLine(100,y)" stroke="green"  stroke-width="3" fill="none"/>
          
          // old project
          //- <rect x="0" y="0" width="600" height="300" fill="blue" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>

            //- <text x="100" y="30">
            //- <tspan style="font-style:normal; font-family: Times New Roman; font-size:1em;">Amplitude (<tspan style="font-style:italic; font-family: Times New Roman; font-size:1em;">A</tspan>)</tspan>
            //- </text>

            //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
            //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
        </svg>
          
    div.time-control
      div(style="display: flex; justify-content: space-around; border: solid 1px; border-radius: 10px; height: 130px; width: 90%; margin: auto")
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold; color: black; ").center numero de haces <br> n = <span style="font-style: normal;">{{ n }}</span><br>
            button(@click="n > 3 ? n -=2 : n;").time-btn -2
            button(@click="n < 7 ? n +=2 : n;").time-btn +2
            //- <br>
            //- button(@click="lambda > 300.9e-9 ? lambda -=1e-9 : lambda;").time-btn -1
            //- button(@click="lambda < 799.1e-9 ? lambda +=1e-9 : lambda;").time-btn +1
            //- <br>
            //- button(@click="lambda >300.09e-9 ? lambda -=0.1e-9 : lambda; maximos()").time-btn -0.1
            //- button(@click="lambda < 799.91e-9 ? lambda +=0.1e-9 : lambda; maximos()").time-btn +0.1
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center θ = <span style="font-style: normal;">{{ angle }} </span><br>
            button(@click="angle > 10 ? angle -=10 : angle;").time-btn -10
            button(@click="angle < 80 ? angle +=10 : angle;").time-btn +10
            <br>
            button(@click="angle > 1 ? angle -=1 : angle;").time-btn -1
            button(@click="angle < 99? angle +=1 : angle;").time-btn +1
            <br>
            button(@click="angle > 0.1 ? angle -=0.1 : angle;").time-btn -0.1
            button(@click="angle < 99.9 ? angle +=0.1 : angle;").time-btn +0.1
        //- div
        //-   p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center L = <span style="font-style: normal;">{{ Number.parseFloat(L).toPrecision(4) }} m</span><br>
        //-     button(@click="L > 0.499 ? L -=0.1 : L; maximos()").time-btn -0.1
        //-     button(@click="L < 2.919 ? L +=0.1 : L; maximos()").time-btn +0.1
        //-     <br>
        //-     button(@click="L > 0.4099 ? L -=0.01 : L; maximos()").time-btn -0.01
        //-     button(@click="L < 2.991 ? L +=0.01 : L; maximos()").time-btn +0.01
        //-     <br>
        //-     button(@click="L > 0.40099 ? L -=0.001 : L; maximos()").time-btn -0.001
        //-     button(@click="L < 2.9991 ? L +=0.001 : L; maximos()").time-btn +0.001
        //- div
        //-   p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center y = <span style="font-style: normal;">{{ y < 0.0001 ? 0 : Number.parseFloat(y / 1e-3).toPrecision(4) }} mm</span><br>
        //-     button(@click="y > 0.019 ? y -=0.01 : y; theta()").time-btn -10
        //-     button(@click="y < 0.3901 ? y +=0.01 : y").time-btn +10
        //-     <br>
        //-     button(@click="y > 0.0019 ? y -=0.001 : y").time-btn -1
        //-     button(@click="y < 0.3991 ? y +=0.001 : y").time-btn +1
        //-     <br>
        //-     button(@click="y > 0.00009 ? y -=0.0001 : y").time-btn -0.1
        //-     button(@click="y < 0.39991 ? y +=0.0001 : y").time-btn +0.1
        //- div
        //-   p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center zoom : <span style="font-style: normal;">{{  Number.parseFloat(scale).toPrecision(3) }}X </span><br>
        //-     button(@click="scale >= 1.1 ? scale -=1 : scale; maximos()").time-btn -1
        //-     button(@click="scale <= 3.01 ? scale +=1 : scale; maximos()").time-btn +1
        //-     <br>
        //-     button(@click="scale >= 0.11 ? scale -=0.1 : scale; maximos()").time-btn -0.1
        //-     button(@click="scale <= 3.9 ? scale +=0.1 : scale; maximos()").time-btn +0.1
        //-     <br>
        //-     button(@click="scale >= 0.011 ? scale -=0.01 : scale; maximos()").time-btn -0.01
        //-     button(@click="scale <= 3.991 ? scale +=0.01 : scale; maximos()").time-btn +0.01
      //- p.center.small {{ laserLine(100,100) }}

</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      gridX: this.range(0, 1000, 25),
      gridY: this.range(0, 400, 25),
      angle: 10,
      xRect: 350,
      yRect: 100,
      wRect: 300,
      hRect: 300,
      n: 1,
      haces: [250, 230, 270, 210, 290, 310, 190, 330, 170],
      period: 3,
      omega: 2.557,
      prod: 1,
      elasticK: 1,
      mass: 1,
      showVectors: ''
    }
  },
  computed: {
    base () {
      let d = 'M10,0 10,140 500,140'
      for (var i = 1; i < 16; i++) {
        d = d + `M0,${i * 10} 10,${(i - 1) * 10}`
      }
      for (i = 1; i < 50; i++) {
        d = d + `M${i * 10},150 ${(i + 1) * 10},140`
      }
      return d
    },
    angleScale () {
      let d = 'M350,250 650,250 M500,100 500,400'
      for (let i = 0; i < 36; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 10 * Math.PI / 180)},${250 + 150 * Math.sin(i * 10 * Math.PI / 180)} ${500 + 120 * Math.cos(i * 10 * Math.PI / 180)},${250 + 120 * Math.sin(i * 10 * Math.PI / 180)}`
      }
      for (let i = 0; i < 72; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 5 * Math.PI / 180)},${250 + 150 * Math.sin(i * 5 * Math.PI / 180)} ${500 + 130 * Math.cos(i * 5 * Math.PI / 180)},${250 + 130 * Math.sin(i * 5 * Math.PI / 180)}`
      }
      for (let i = 0; i < 360; i++) {
        d = d + `M${500 + 150 * Math.cos(i * 1 * Math.PI / 180)},${250 + 150 * Math.sin(i * 1 * Math.PI / 180)} ${500 + 140 * Math.cos(i * 1 * Math.PI / 180)},${250 + 140 * Math.sin(i * 1 * Math.PI / 180)}`
      }
      return d
    },
    laserCenter () {
      // let angle = 5 * Math.PI / 180
      let m = Math.tan(2 * this.angle * Math.PI / 180)
      let mE = Math.tan(this.angle * Math.PI / 180)
      console.log(m)
      console.log(mE)
      let y = this.angle >= 0 ? 0 : 500
      let d = `M100,250 500,250 ${500 + (y - 250) / m} ${y}`
      d = d + `M100,210 ${500 - mE * (210 - 250)},210 ${500 - mE * (210 - 250) + (y - 210) / m} ${y}`
      d = d + `M100,170 ${500 - mE * (170 - 250)},170 ${500 - mE * (170 - 250) + (y - 170) / m} ${y}`
      d = d + `M100,290 ${500 - mE * (290 - 250)},290 ${500 - mE * (290 - 250) + (y - 290) / m} ${y}`
      d = d + `M100,330 ${500 - mE * (330 - 250)},330 ${500 - mE * (330 - 250) + (y - 330) / m} ${y}`
      // mirror surface just a reference
      d = d + `M500,250 ${500 + (y - 250) / (-1 / mE)} ${y}`
      d = d + `M500,250 ${500 - (y - 250) / (-1 / mE)} ${500 - y}`
      return d
    }
  },
  methods: {
    numeroHaces: function () {
    },
    mirror: function () {
      let radius = 130
      let xComponent1 = 500 + 5 * Math.cos(this.angle * Math.PI / 180) - radius * Math.sin(this.angle * Math.PI / 180)
      let yComponent1 = 250 + 5 * Math.sin(this.angle * Math.PI / 180) + radius * Math.cos(this.angle * Math.PI / 180)
      let xComponent2 = 500 + 5 * Math.cos(this.angle * Math.PI / 180) + radius * Math.sin(this.angle * Math.PI / 180)
      let yComponent2 = 250 + 5 * Math.sin(this.angle * Math.PI / 180) - radius * Math.cos(this.angle * Math.PI / 180)
      // let d = `M ${xComponent1},${yComponent1} ${xComponent2},${yComponent2}`
      // console.log(d)
      return `M ${xComponent1},${yComponent1} ${xComponent2},${yComponent2}`
    },
    mirrorSph: function () {
      let radius = 130
      let xComponent1 = 500 + 5 * Math.cos(this.angle * Math.PI / 180) - radius * Math.sin(this.angle * Math.PI / 180)
      let yComponent1 = 250 + 5 * Math.sin(this.angle * Math.PI / 180) + radius * Math.cos(this.angle * Math.PI / 180)
      let xComponent2 = 500 + 5 * Math.cos(this.angle * Math.PI / 180) + radius * Math.sin(this.angle * Math.PI / 180)
      let yComponent2 = 250 + 5 * Math.sin(this.angle * Math.PI / 180) - radius * Math.cos(this.angle * Math.PI / 180)
      // let d = `M ${xComponent1},${yComponent1} ${xComponent2},${yComponent2}`
      // console.log(d)
      return `M ${xComponent1},${yComponent1} ${xComponent2},${yComponent2}`
    },
    laserLine: function (xi, yi) {
      // let angle = 5 * Math.PI / 180
      // console.log(xi)
      // console.log(yi)
      let m = Math.tan(2 * this.angle * Math.PI / 180)
      let mE = Math.tan(this.angle * Math.PI / 180)
      // console.log(m)
      // console.log(mE)
      let y = this.angle >= 0 ? 0 : 500
      let radius = Math.sqrt(((500 - (500 - mE * (yi - 250))) ** 2) + ((250 - yi) ** 2))
      let d
      d = radius > 130 ? `M${xi},${yi} 1000,${yi}` : `M${xi},${yi} ${500 - mE * (yi - 250)},${yi} ${500 - mE * (yi - 250) + (y - yi) / m} ${y}`
      // d = this.angle > 90 ? `M${xi},${yi} ${500 - mE * (yi - 250)},${yi}` : `M${xi},${yi} ${500 - mE * (yi - 250)},${yi} ${500 - mE * (yi - 250) + (y - yi) / m} ${y}`
      // console.log(xi, yi)
      // console.log(500 - (500 - mE * (yi - 250)), 250 - yi)
      // console.log('radius: ', Math.sqrt(((500 - (500 - mE * (yi - 250))) ** 2) + ((250 - yi) ** 2)))
      // console.log(m * 350)
      // d += ` ${200},${250} ${500 - mE * (yi - 250)},${yi}`
      // console.log(d)
      return d
    },
    factor (f) {
      this.prod = this.prod + f
    },
    increaseMass (l, timeScale) {
      if (this.prod + timeScale < 0.1) {
        this.prod = 0.1
      } else {
        this.prod = this.prod + timeScale
      }
      if (this.mass + l < 0.1) {
        this.mass = 0.1
      } else {
        this.mass = this.mass + l
      }
      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.period = 1 * 2 * Math.PI / this.omega
    },
    increaseK (l, timeScale) {
      if (this.prod + timeScale < 0.1) {
        this.prod = 0.1
      } else {
        this.prod = this.prod + timeScale
      }
      if (this.elasticK + l < 1) {
        this.elasticK = 1
      } else {
        this.elasticK = this.elasticK + l
      }
      this.omega = this.prod * Math.sqrt(this.elasticK / this.mass)
      this.period = 1 * 2 * Math.PI / this.omega
    },
    range: function (start, end, step) {
      var ans = []
      for (let i = start; i <= end; i += step) {
        ans.push(i)
      }
      return ans
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
    // SVG ANIMATIONS
    .included-svg {
      width: 80%;
      margin-left: 10%;
      g path {
        transform-origin: center bottom;
        animation-duration: 1s;
        animation-fill-mode: both;
        animation-iteration-count: infinite;
      }
      .svg-bounce path {
        -webkit-animation-name: bounce;
        transform-origin: center bottom;
      }
      .svg-pulse path {
        -webkit-animation-name: pulse;
        -moz-animation-name: bounce;
        transform-origin: center center;
      }
      .svg-swing path {
        -webkit-animation-name: swing;
        -moz-animation-name: bounce;
        transform-origin: center center;
      }
    }

  }
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 22px;
  width: 14px;
  left: 4px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #80f321;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(30px);
  -ms-transform: translateX(30px);
  transform: translateX(30px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border: green solid 4px;
  border-radius: 50% 50% 50% 50%;
}
</style>
