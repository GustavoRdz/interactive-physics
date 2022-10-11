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
          
          <text x="790" y="180">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size: 0.7em;">K</tspan>
          </text>
          <text x="790" y="130">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size: 0.7em;">L</tspan>
          </text>
          <text x="790" y="90">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size: 0.7em;">M</tspan>
          </text>
          // atom
          <g>
            <g>
              <g>
                // nucleus
                // <circle cx="800" cy="250" r="20" fill="#ffffff" fill-opacity="0.1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="792" cy="250" r="4" fill="#ffffff" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="808" cy="250" r="4" fill="#000000" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="800" cy="258" r="4" fill="#000000" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="800" cy="242" r="4" fill="#000000" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="795" cy="255" r="4" fill="#000000" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="803" cy="245" r="4" fill="#ffffff" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="795" cy="243" r="4" fill="#ffffff" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="805" cy="253" r="4" fill="#ffffff" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
                <circle cx="800" cy="250" r="4" fill="#000000" fill-opacity="1" stroke="#ff0000"  stroke-width="1"/>
              </g>
              <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 800 250 " to="360 800 250" dur="10s"   repeatCount="indefinite"/>
            </g>
            // orbits
            <circle cx="800" cy="250" r="80" fill="#ffffff" opacity="0.1" stroke="#000000"  stroke-width="0.1"/>
            <circle cx="800" cy="250" r="130" fill="#ffffff" opacity="0.1" stroke="#000000"  stroke-width="0.1"/>
            <circle cx="800" cy="250" r="170" fill="#000000" opacity="0.1" stroke="#000000"  stroke-width="0.1"/>
            
            //- <path fill="none" stroke="black" :d=pathOrbit(800,250,80,0) />
            //- <path fill="none" stroke="black" :d=pathOrbit(130,0) />
            //- <path fill="none" stroke="black" :d=pathOrbit(170,0) />

            // electronic
            // K shell
            <circle cx="0" cy="0" r="4" fill="orange" opacity="1" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="10s" repeatCount="indefinite" :path=pathOrbit(800,250,80,0) />
              <animate attributeName="fill" values="orange;orange;black;black" keyTimes="0; 0.4; 0.4; 1" dur="10s" repeatCount="indefinite" v-if="n==4"/>
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="10s" repeatCount="indefinite" :path="pathOrbit(800,250,80,Math.PI)" />
            </circle>

            // L shell
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,0) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,2*Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,3*Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,4*Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,5*Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,6*Math.PI/4) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.5" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="7.9s" repeatCount="indefinite" :path=pathOrbit(800,250,130,7*Math.PI/4) />
            </circle>

            // M shell
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,0*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,1*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,2*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,3*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,4*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,5*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,6*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,7*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,8*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,9*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,10*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,11*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,12*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,13*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,14*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,15*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,16*Math.PI/9) />
            </circle>
            <circle cx="0" cy="0" r="4" fill="orange" opacity="0.4" stroke="#000000"  stroke-width="0.1">
              <animateMotion dur="15s" repeatCount="indefinite" :path=pathOrbit(800,250,170,17*Math.PI/9) />
            </circle>
          </g>

          //- trjectories
          //- <line x1="100" y1="315" x2="1000" y2="315" stroke="#000000" opacity="0.1"/>
          //- <line x1="100" y1="280" x2="1000" y2="280" stroke="#000000" opacity="0.1"/>
          //- <line x1="100" y1="250" x2="1000" y2="250" stroke="#000000" opacity="0.1"/>
          //- <line x1="100" y1="300" x2="1000" y2="300" stroke="#000000" opacity="0.1"/>
          
          <path fill="none" stroke="black" :d=trajectory1 :opacity="n==1 ? 1 : 0.01" />
          <path fill="none" stroke="black" :d=trajectory2 :opacity="n==2 ? 1 : 0.01" />
          <path fill="none" stroke="black" :d=trajectory3 :opacity="n==3 ? 1 : 0.01" />
          <path fill="none" stroke="black" :d=trajectory4 :opacity="n==4 ? 1 : 0.01" />
          <path fill="none" stroke="black" :d=trajectory5 :opacity="n==4 ? 0.4 : 0.01" />

          //- <circle cx="800" cy="250" r="65" fill="orange" fill-opacity="0.11" stroke="#000000"  stroke-width="0.1" />
          //- <circle cx="800" cy="250" r="20" fill="orange" fill-opacity="0.11" stroke="#000000"  stroke-width="0.1" />


          //- <path fill="none" stroke="black" :d=pathOrbit(94,315,5,0) />

          <circle cx="394" cy="315" r="8" :class="electronCase(1)"  :opacity="n==1 ? 0.9 : 0.3" stroke="#000000"  stroke-width="0.1">
            <animateMotion dur="0.5s" repeatCount="indefinite" :path=pathOrbit(0,0,2,0) v-if='n==1' />
          </circle>
           <circle cx="394" cy="270" r="8" :class="electronCase(2)"  :opacity="n==2 ? 0.9 : 0.3" stroke="#000000"  stroke-width="0.1">
            <animateMotion dur="0.5s" repeatCount="indefinite" :path=pathOrbit(0,0,2,0) v-if='n==2' />
          </circle>
           <circle cx="394" cy="250" r="8" :class="electronCase(3)"  :opacity="n==3 ? 0.9 : 0.3" stroke="#000000"  stroke-width="0.1">
            <animateMotion dur="0.5s" repeatCount="indefinite" :path=pathOrbit(0,0,2,0) v-if='n==3' />
          </circle>
           <circle cx="394" cy="300" r="8" :class="electronCase(4)" :opacity="n==4 ? 0.9 : 0.3" stroke="#000000"  stroke-width="0.1">
            <animateMotion dur="0.5s" repeatCount="indefinite" :path=pathOrbit(0,0,2,0) v-if='n==4' />
          </circle>
           <circle cx="0" cy="0" r="4" fill="orange" :opacity="n==4 ? 0.9 : 0.01" stroke="#000000"  stroke-width="0.1">
            <animateMotion dur="0.5s" begin=9s restart="always" repeatCount="indefinite" path="M950,250 L880,250" v-if='n==4' />
            <animate attributeName="opacity" values="0;0;0;0;0;0;0;0;0;1;1" keyTimes="0; 0.11; 0.22; 0.33; 0.44; 0.55; 0.66; 0.77; 0.95; 0.99; 1" dur="10s" repeatCount="indefinite" v-if="n==4"/>
          </circle>

          <text x=390 y=320 stroke=#000000 style="font-size: 15px;">1</text>
          <text x=390 y=275 stroke=#000000 style="font-size: 15px;">2</text>
          <text x=390 y=255 stroke=#000000 style="font-size: 15px;">3</text>
          <text x=390 y=305 stroke=#000000 style="font-size: 15px;">4</text>

          <circle cx="0" cy="0" r="4" fill="orange" fill-opacity="1" stroke="#000000"  stroke-width="0.1">
            <animateMotion :dur='n==1 ? 10 : 0' repeatCount="indefinite" :path=trajectory1 />
          </circle>
          <circle cx="0" cy="0" r="4" fill="orange" fill-opacity="1" stroke="#000000"  stroke-width="0.1">
            <animateMotion :dur='n==2 ? 10.6 : 0' repeatCount="indefinite" :path=trajectory2 />
          </circle>
          <circle cx="0" cy="0" r="4" fill="orange" fill-opacity="1" stroke="#000000"  stroke-width="0.1">
            <animateMotion :dur='n==3 ? 6.43 : 0' repeatCount="indefinite" :path=trajectory3 />
          </circle>
          <circle cx="0" cy="0" r="4" fill="orange" fill-opacity="1" stroke="#000000"  stroke-width="0.1">
            <animateMotion :dur='n==4 ? 10 : 0' repeatCount="indefinite" :path=trajectory4 />
          </circle>
          <circle cx="0" cy="0" r="4" fill="orange" fill-opacity="1" stroke="#000000"  stroke-width="0.1" v-if="n==4" >
            <animateMotion :dur='n==4 ? 10 : 0' repeatCount="indefinite" :path=trajectory5 />
          </circle>

          //- <path d="M850,320 L1000,500" stroke="#ff0000"  stroke-width="3" fill="none"/>
          //- <path d="M840,255 L950,280" stroke="#ff0000"  stroke-width="3" fill="none"/>
          //- <path d="M770,240 L550,180" stroke="#ff0000"  stroke-width="3" fill="none"/>
          //- <path d="M880,240 L960,100" stroke="#ff0000"  stroke-width="3" fill="none"/>

          <path :d="photon(0,0,0.4)" transform="rotate(50)" stroke="#ff0000"  stroke-width="3" fill="none" v-if="n==1">
            <animateMotion dur=10s repeatCount="indefinite" path="M850,320 L1000,500" begin=6s restart="always"/>
          </path>
          <path :d="photon(0,0,0.6)" transform="rotate(13)" stroke="#ff0000"  stroke-width="3" fill="none" v-if="n==2">
            <animateMotion dur=10s repeatCount="indefinite" path="M840,255 L1000,290" begin=6.5s />
          </path>
          <path :d="photon(0,0,0.9)" transform="rotate(-165)" stroke="#ff0000"  stroke-width="3" fill="none" v-if="n==3">
            <animateMotion dur=10s repeatCount="indefinite" path="M770,240 L550,180" begin=6.5s />
          </path>
          <path :d="photon(0,0,0.7)" transform="rotate(-60)" stroke="#ff0000"  stroke-width="3" fill="none" v-if="n==4">
            <animateMotion dur=10s repeatCount="indefinite" path="M880,240 L960,100" begin=10s />
          </path>

          <g> // graph
            // Axes
            <line x1="40" y1="300" x2="40" y2="480" stroke="black" stroke-width="1"/>
            <line x1="40" y1="480" x2="350" y2="480" stroke="black" stroke-width="1"/>
            // <path d="M50,480 C100,430 50,350 350,480" stroke="#ff0000"  stroke-width="3" fill="none" />
            // entire
            <path d="M50,480 C90,470 50,390 150,415 C152,300 158,300 160,418 C160,418 181,425 180,425 C180,210 190,210 190,430 C190,430 300,480 350,480" stroke="#000000"  opacity="0.3" stroke-width="3" fill="none" />
            // continuous
            <path d="M50,480 C90,470 50,390 150,415 C170,422 180,425 190,430 C190,430 300,480 350,480" stroke="#00f000"  stroke-width="3" fill="none" v-if="n==5"/>
            // discrete
            <path d="M150,480 C152,360 158,360 160,480 M180,480 C180,290 190,290 190,480" stroke="#0000f0"  stroke-width="3" fill="none" v-if="n==4"/>
            <text x="150" y="320" v-if="n==4"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">K</tspan></text>
            <text x="165" y="322" v-if="n==4"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">&alpha;</tspan></text>
            <text x="180" y="260" v-if="n==4"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">K</tspan></text>
            <text x="195" y="262" v-if="n==4"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">&beta;</tspan></text>

            // bremsstrahlung
            <path d="M50,480 C90,470 50,390 150,415" stroke="#00af00"  stroke-width="3" fill="none" v-if="n==1 || n==2"/>
            // Collision
            <path d="M190,430 C190,430 300,480 350,480" stroke="#af0000"  stroke-width="3" fill="none" v-if="n==3"/>
            <text x="300" y="495">
              <tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">Energy</tspan>
            </text>
            <text x="30" y="450" transform="rotate(-90, 30, 450)">
              <tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">Amplitude a.u.</tspan>
            </text>
          </g>
          
          <text x="150" y="70" fill="red">
            <tspan style="font-style:normal; font-family: Times New Roman; font-size:1em;">Energy</tspan>
          </text>
          
          <g transform="scale(2,2) translate(-25,-60)" v-if="n==1 || n==2"> // formulaes
            <text x="50" y="120"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">1</tspan></text>
            <line x1="45" y1="125" x2="65" y2="125" stroke="black" stroke-width="2"/>
            <text x="50" y="140"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">2</tspan></text>
            <text x="70" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">m</tspan></text>
            <text x="83" y="135"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">e</tspan></text>
            <text x="90" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">v</tspan></text>
            <text x="100" y="125"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">2</tspan></text>
            <text x="100" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">i</tspan></text>
            
            <text x="120" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">-</tspan></text>

            <text x="140" y="120"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">1</tspan></text>
            <line x1="135" y1="125" x2="155" y2="125" stroke="black" stroke-width="2"/>
            <text x="140" y="140"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">2</tspan></text>
            <text x="160" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">m</tspan></text>
            <text x="173" y="135"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">e</tspan></text>
            <text x="180" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">v</tspan></text>
            <text x="190" y="125"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">2</tspan></text>
            <text x="190" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">f</tspan></text>

            <text x="205" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">=</tspan></text>
            <text x="220" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">h&gamma;</tspan></text>

          </g>
          <g transform="scale(2,2) translate(-5,-60)" v-if="n==3"> // formulaes
            <text x="50" y="120"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">1</tspan></text>
            <line x1="45" y1="125" x2="65" y2="125" stroke="black" stroke-width="2"/>
            <text x="50" y="140"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">2</tspan></text>
            <text x="70" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">m</tspan></text>
            <text x="83" y="135"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">e</tspan></text>
            <text x="90" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">v</tspan></text>
            <text x="100" y="125"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">2</tspan></text>
            <text x="100" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">i</tspan></text>

            <text x="115" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">=</tspan></text>
            <text x="130" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">h&gamma;</tspan></text>
            <text x="145" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.2em;">max</tspan></text>

          </g>

          //- <g transform="scale(2,2) translate(-5,-60)" v-if="n==3"> // formulaes
          //-   <text x="50" y="120"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">1</tspan></text>
          //-   <line x1="45" y1="125" x2="65" y2="125" stroke="black" stroke-width="2"/>
          //-   <text x="50" y="140"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">2</tspan></text>
          //-   <text x="70" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">m</tspan></text>
          //-   <text x="83" y="135"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">e</tspan></text>
          //-   <text x="90" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">v</tspan></text>
          //-   <text x="100" y="125"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">2</tspan></text>
          //-   <text x="100" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">i</tspan></text>

          //-   <text x="115" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">=</tspan></text>
          //-   <text x="130" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">h&gamma;</tspan></text>
          //-   <text x="145" y="136"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.2em;">max</tspan></text>

          //- </g>

          <g transform="scale(2,2) translate(-5,-70)" v-if="n==4"> // formulaes
            <text x="50" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">K</tspan></text>
            <text x="65" y="132"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">&alpha;</tspan></text>

            <text x="70" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">: E</tspan></text>
            <text x="90" y="132"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">K</tspan></text>

            <text x="105" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">-</tspan></text>

            <text x="120" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">E</tspan></text>
            <text x="130" y="132"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">L</tspan></text>

            <text x="145" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">=</tspan></text>
            <text x="160" y="130"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">h&gamma;</tspan></text>

            <text x="50" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">K</tspan></text>
            <text x="65" y="162"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">&beta;</tspan></text>

            <text x="70" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">: E</tspan></text>
            <text x="90" y="162"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">K</tspan></text>

            <text x="105" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">-</tspan></text>

            <text x="120" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">E</tspan></text>
            <text x="130" y="162"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.3em;">M</tspan></text>

            <text x="145" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">=</tspan></text>
            <text x="160" y="160"><tspan style="font-style:normal; font-family: Times New Roman; font-size:0.5em;">h&gamma;</tspan></text>
          </g>




          //- <rect x="10" y="150" width="90" height="200" fill="#000000" fill-opacity="0.2" stroke="#000000"  stroke-width="0.1"/>
          //- <ellipse cx="100" cy="170" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- <ellipse cx="100" cy="210" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- <ellipse cx="100" cy="250" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- <ellipse cx="100" cy="290" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>
          //- <ellipse cx="100" cy="330" rx="2" ry="10" fill="#ff0000" fill-opacity="0.6" stroke="#000000"  stroke-width="0.1"/>

          //- laser rays
          //- <path :d="laserCenter" stroke="#ff0000"  stroke-width="3" fill="none"/>

          //- mirror
          //- <path :d="mirror()" stroke="#5555ff"  stroke-width="10" fill="none"/>

          //- <path v-for="y in [170,190,210,230,250,270,290,310,330]" :d="laserLine(100,y)" stroke="#F72119"  stroke-width="3" fill="none"/>
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
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold; color: black; ").center Caso <span style="font-style: normal;">{{ n }}</span><br>
            button(@click="n = 1; ").time-btn 1
            button(@click="n = 2;").time-btn 2
            button(@click="n = 3;").time-btn 3
            button(@click="n = 4;").time-btn 4
        div
          p(style="font-family: Times; font-style: italic; font-size:20px; font-weight: bold;color: black;").center θ = <span style="font-style: normal;">{{ n }} </span><br>
            //- button(@click="angle > 10 ? angle -=10 : angle;").time-btn 1
            //- button(@click="angle < 80 ? angle +=10 : angle;").time-btn 2
            //- <br>
            //- button(@click="angle > 1 ? angle -=1 : angle;").time-btn 3
            //- button(@click="angle < 99? angle +=1 : angle;").time-btn 4
            //- <br>
            //- button(@click="angle > 0.1 ? angle -=0.1 : angle;").time-btn -0.1
            //- button(@click="angle < 99.9 ? angle +=0.1 : angle;").time-btn +0.1
</template>
<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      gridX: this.range(0, 1000, 25),
      gridY: this.range(0, 400, 25),
      n: 1
    }
  },
  computed: {
    trajectory1 () {
      return 'M400,315 L800,315 C850,313 857,279 857,283 L1000,0'
    },
    trajectory2 () {
      return 'M400,270 L800,270 C820,270 830,245 810,232 L500,0'
    },
    trajectory3 () {
      return 'M400,250 L790,250'
    },
    trajectory4 () {
      return 'M400,300 L735,300 1250,220'
    },
    trajectory5 () {
      return 'M400,300 L735,300 1250,380'
    }
  },
  methods: {
    pathOrbit (cx, cy, radio, phi) {
      let numPoints = 50
      let deltaTheta = 2 * Math.PI / numPoints
      let d = `M${cx + radio * Math.cos(phi)},${cy + radio * Math.sin(phi)}`
      for (var i = 0; i <= numPoints; i++) {
        d = d + `L${cx + radio * Math.cos(i * deltaTheta + phi)},${cy + radio * Math.sin(i * deltaTheta + phi)}`
      }
      return d
    },
    electronCase (cs) {
      return cs === this.n ? 'caseSelected' : 'caseNonSelected'
    },
    photon (x, y, f) {
      let numPoints = 100
      let deltaTheta = 2 * Math.PI / numPoints
      let d = `M${x},${y}`
      for (var i = 0; i <= numPoints; i++) {
        d = d + `L${x + 1 * i},${y + 10 * Math.sin(10 * f * i * deltaTheta)}`
      }
      d = d + 'l25,0 -10,-5 m10,5 l-10,5'
      return d
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

.caseSelected {
   fill: #80f321 
}

.caseNonSelected {
   fill: #ff0000
}
</style>
