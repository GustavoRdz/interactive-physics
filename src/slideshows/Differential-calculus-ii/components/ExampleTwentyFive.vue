<template lang="pug">
eg-transition(:enter='enter', :leave='leave')
  .eg-slide-content
    p.problem En el triángulo formado por los puntos A({{ X1 }}, {{Y1}}), B({{ X2 }}, {{Y2}}) y C({{ X3 }}, {{Y3}}) encontrar las ecuaciones de las alturas de cada lado y demostrar que son concurrentes en un punto, llamado ortocentro. 
    .center
      //- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1050 500" height="250px" width="750px" >
      //-   //- <rect x="10" y="10" width="1040" height="490" fill="none" stroke="#000" />
      //-   <!-- x grid -->
      //-   <line v-for="x in [12, 50, 88, 126, 164, 202, 240, 278, 316, 354, 392, 430, 468, 506, 544, 582, 620, 658, 696]" fill="none" stroke="#000" stroke-width="0.5" :x1="x" y1="7" :x2="x" y2="470" stroke-linecap="round"/>
      //-   <!-- x scale bold -->
      //-   //- <line v-for="x in [50, 202, 354, 506, 658]" fill="none" stroke="#000" stroke-width="3" :x1="x" y1="10" :x2="x" y2="390" stroke-linecap="round"/>
      //-   <!-- y grid -->
      //-   <line v-for="y in [10, 48, 86, 124, 162, 200, 238, 276, 314, 352, 390, 428, 466]" fill="none" stroke="#000" stroke-width="0.5" x1="7" :y1="y" x2="700" :y2="y" stroke-linecap="round"/>
        
      //-   <!-- x Axis -->
      //-   <path d="M0 238 l698 0 l-10 5 l10 -5 l-10 -5" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
      //-   <text x="677" y="270" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">x</text>

      //-   <!-- y Axis -->
      //-   <path d="M354 480 l0 -475 l-5 10 l5 -10 l5 10" stroke="#000" fill="none" stroke-opacity="1" stroke-width="3" ></path>
      //-   <text x="330" y="28" font-size="35" fill="black" font-weight="bold" font-family="Times" font-style="italic">y</text>
              
      //-   <text x="325" y="265" font-size="30" fill="black" font-weight="bold" font-family="Times" font-style="italic"> O </text>
        
      //-   <!-- plots -->
      //-   <line :x1="xl1a" :y1="yl1a" :x2="xl1b" :y2="yl1b" fill="none" stroke="#F00" stroke-width="2" stroke-linecap="round"/>
      //-   <line :x1="xl2a" :y1="yl2a" :x2="xl2b" :y2="yl2b" fill="none" stroke="#0F0" stroke-width="2" stroke-linecap="round"/>
      //-   <circle r="8" :cx="354 + 38 * enterX1" :cy="238 - 38 * enterY1"  fill="#00F" stroke="#000" stroke-width="1"/>
      //-   <circle r="8" :cx="354 + 38 * enterX2" :cy="238 - 38 * enterY2"  fill="#00F" stroke="#000" stroke-width="1"/>
      //-   <circle r="8" :cx="354 + 38 * enterX3" :cy="238 - 38 * enterY3"  fill="#0F0" stroke="#000" stroke-width="1"/>

      //-   <!-- forma general -->
      //-   <g transform="translate(750, 0)">    
      //-    <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">Ax</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">By</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">C</tspan> = 0</text>
      //-    <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterA===""  ? " 0 " : enterA }}x</tspan>&ensp;{{ parseFloat(enterB)>0 ? " + " : " - " }}</text>
      //-    <text x="80" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterB===""  ? " 0 " : isNaN(parseFloat(enterB)) ? "0" : Math.abs(parseFloat(enterB))  }}y</tspan>&ensp;{{ parseFloat(enterC)>0 ? " + " : " - " }}</text>
      //-    <text x="160" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterC===""  ? " 0 " : isNaN(parseFloat(enterC)) ? "0" :Math.abs(parseFloat(enterC)) }}</tspan> = 0</text>
      //-   </g>

      //-   <g transform="translate(750, 90)">    
      //-    <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan> = <tspan style="font-style: italic;">m</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">1</tspan>)</text>

      //-    <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;{{ parseFloat(enterY1)>0 ? " - " : " + " }}{{ enterY1===""  ? " 0 " : isNaN(parseFloat(enterY1)) ? "0" : Math.abs(parseFloat(enterY1)) }}&ensp;= {{ parseFloat(enterM1)>0 ? " " : " - " }} {{ enterM1===""  ? " 0 " : isNaN(parseFloat(enterM1)) ? "0" : Math.abs(parseFloat(enterM1)) }}(<tspan style="font-style: normal;">x</tspan>&ensp;{{ parseFloat(enterX1)>0 ? " - " : " + " }}{{ enterX1===""  ? " 0 " : isNaN(parseFloat(enterX1)) ? "0" : Math.abs(parseFloat(enterX1)) }})</text>
         
      //-    <text x="0" y="110" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp; = {{ enterM1===""  ? " 0 " : isNaN(parseFloat(enterM1)) ? "0" : Math.abs(parseFloat(enterM1)) }}<tspan style="font-style: normal;">x</tspan>&ensp;{{ parseFloat(enterb1)>0 ? " - " : " + " }} {{ enterb1===""  ? " 0 " : isNaN(parseFloat(enterb1)) ? "0" : Math.abs(parseFloat(enterb1)) }}</text>
      //-   </g>
      //-   <!-- second line -->
      //-   <g transform="translate(752, 260)">    
      //-    <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">A'x</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">B'y</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">C'</tspan> = 0</text>
      //-    <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterAp===""  ? " 0 " : enterAp }}x</tspan>&ensp;{{ parseFloat(enterBp)>0 ? " + " : " - " }}</text>
      //-    <text x="80" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterBp===""  ? " 0 " : isNaN(parseFloat(enterBp)) ? "0" : Math.abs(parseFloat(enterBp))  }}y</tspan>&ensp;{{ parseFloat(enterCp)>0 ? " + " : " - " }}</text>
      //-    <text x="160" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ enterCp===""  ? " 0 " : isNaN(parseFloat(enterCp)) ? "0" :Math.abs(parseFloat(enterCp)) }}</tspan> = 0</text>
      //-   </g>
      //-   <g transform="translate(750, 260)">    
      //-    <text x="0" y="30" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">A'x</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">B'y</tspan>&ensp;+&ensp;<tspan style="font-style: italic;">C'</tspan> = 0</text>
      //-   //-  <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ Ap }}x</tspan>&ensp;{{ Bp>0 ? " + " : " - " }}</text>
      //-   //-  <text x="80" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ Math.abs(Bp) }}y</tspan>&ensp;{{ Cp>0 ? " + " : " - " }}</text>
      //-   //-  <text x="160" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ Math.abs(Cp) }}</tspan> = 0</text>
      //-   </g>

      //-   <g transform="translate(752, 360)">    
      //-    <text x="0" y="30" font-size="30" fill="#F00" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = <tspan style="font-style: italic;">m'</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>)</text>

      //-    <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;{{ parseFloat(enterY3)>0 ? " - " : " + " }}{{ enterY3===""  ? " 0 " : isNaN(parseFloat(enterY3)) ? "0" : Math.abs(parseFloat(enterY3)) }}&ensp;= {{ parseFloat(enterM2)>0 ? " " : " - " }} {{ enterM2===""  ? " 0 " : isNaN(parseFloat(enterM2)) ? "0" : Math.abs(parseFloat(enterM2)) }}(<tspan style="font-style: normal;">x</tspan>&ensp;{{ parseFloat(enterX3)>0 ? " - " : " + " }}{{ enterX3===""  ? " 0 " : isNaN(parseFloat(enterX3)) ? "0" : Math.abs(parseFloat(enterX3)) }})</text>
         
      //-    <text x="0" y="110" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp; = {{ enterM2===""  ? " 0 " : isNaN(parseFloat(enterM2)) ? "0" : Math.abs(parseFloat(enterM2)) }}<tspan style="font-style: normal;">x</tspan>&ensp;{{ parseFloat(enterb2)>0 ? " - " : " + " }} {{ enterb2===""  ? " 0 " : isNaN(parseFloat(enterb2)) ? "0" : Math.abs(parseFloat(enterb2)) }}</text>
      //-   //-  <text x="0" y="110" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp; = <tspan style="font-style: italic;">{{ m2>0 ? " " : " - " }} {{ Math.abs(m2) }}</tspan><tspan style="font-style: normal;">x</tspan>&ensp;{{ (Y3 - m2*X3)>0 ? " + " : " - " }}<tspan style="font-style: italic;">{{ Math.abs(Y3 - m2 * X3) }}</tspan></text>
      //-   </g>

      //-   <g transform="translate(750, 360)">    
      //-    <text x="0" y="30" font-size="30" fill="#00F" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">y</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan> = <tspan style="font-style: italic;">m'</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">x</tspan><tspan style="font-size: 15px;" baseline-shift = "sub">2</tspan>)</text>

      //-   //-  <text x="0" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;{{ Y2>0 ? " + " : " - " }}<tspan style="font-style: italic;">{{ Math.abs(Y2) }}</tspan> = <tspan style="font-style: italic;">{{ m2>0 ? " " : " - " }} {{ Math.abs(m2) }}</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;{{ X2>0 ? " + " : " - " }}<tspan style="font-style: italic;">{{ Math.abs(X2) }}</tspan>)</text>
        
      //-   //-  <text x="0" y="110" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp; = <tspan style="font-style: italic;">{{ m2>0 ? " " : " - " }} {{ Math.abs(m2) }}</tspan><tspan style="font-style: normal;">x</tspan>&ensp;{{ (Y2 - m2*X2)>0 ? " + " : " - " }}<tspan style="font-style: italic;">{{ Math.abs(Y2 - m2 * X2) }}</tspan></text>
      //-   </g>
      //-   //- <g v-if="showPointX1 && showPointY1" transform="translate(750, 150)">    
      //-   //-  <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: normal">{{ Y1 }}</tspan> = </text>
      //-   //-   <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">m</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">{{ X1 }}</tspan>)</text>
      //-   //- </g>
      //-   //- <g v-if="showEcu" transform="translate(750, 200)">    
      //-   //-  <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;-&ensp;<tspan style="font-style: normal">{{ Y1 }}</tspan> = </text>
      //-   //-   <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">{{ m1 }}</tspan>(<tspan style="font-style: normal;">x</tspan>&ensp;-&ensp;<tspan style="font-style: italic;">{{ X1 }}</tspan>)</text>
      //-   //- </g>
      //-   //- <g v-if="showEcu" transform="translate(750, 250)">    
      //-   //-  <text x="0" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan>&ensp;=&ensp;<tspan style="font-style: italic;">{{ m1 }}</tspan><tspan style="font-style: italic;">x</tspan>&ensp;+&ensp;<tspan style="font-style: normal">{{ b1 }}</tspan></text>
      //-   //- </g>
        
      //-   <circle r="4" :cx="354 + 38 * ae" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
      //-   <circle r="4" cx="354" :cy="238 - 38 * be"  fill="#000" stroke="#000" stroke-width="1"/>
      //-   <circle r="4" :cx="354 + 38 * ap" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
      //-   <circle r="4" cx="354" :cy="238 - 38 * bp"  fill="#000" stroke="#000" stroke-width="1"/>
        
      //-   <line :x1="x1" :y1="y1" :x2="x2" :y2="y2" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   <line :x1="x1" :y1="y1" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   <line :x1="x2" :y1="y2" :x2="x3" :y2="y3" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   <circle r="3" :cx="xm12" :cy="ym12"  fill="#000" stroke="#F00" stroke-width="1"/>
      //-   <circle r="3" :cx="xm13" :cy="ym13"  fill="#000" stroke="#F00" stroke-width="1"/>
      //-   <circle r="3" :cx="xm23" :cy="ym23"  fill="#000" stroke="#F00" stroke-width="1"/>
      //-   <line :x1="x1" :y1="y1" :x2="xm23" :y2="ym23" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   <line :x1="x2" :y1="y2" :x2="xm13" :y2="ym13" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   <line :x1="x3" :y1="y3" :x2="xm12" :y2="ym12" fill="none" stroke="#000" stroke-width="1" stroke-linecap="round"/>
      //-   //- <circle r="4" :cx="354" :cy="238 - 38 * be"  fill="#000" stroke="#000" stroke-width="1"/>
      //-   //- <circle r="4" :cx="354 + 38 * ap" cy="238"  fill="#000" stroke="#000" stroke-width="1"/>
      //-   //- <circle r="4" cx="354" :cy="238 - 38 * bp"  fill="#000" stroke="#000" stroke-width="1"/>
      //- </svg>
    //- p {{ x1 }}, {{ y1 }}; {{ x2 }}, {{ y2 }}; {{ x3 }}, {{ y3 }}
    .center
      //- p.solution Please do calculations and introduce your results
      //- p.inline.data Xa
      //-   input.center.data(:class="checkedX1" v-model.number='enterX1')
      //-   <span class="error" v-if="errorX1">[e: {{ errorX1.toPrecision(3) }}%]</span>
      //- p.inline.data Ya
      //-   input.center.data(:class="checkedY1" v-model.number='enterY1')
      //-   <span class="error" v-if="errorY1">[e: {{ errorY1.toPrecision(3) }}%]</span>
      //- p.inline.data Xb
      //-   input.center.data(:class="checkedX2" v-model.number='enterX2')
      //-   <span class="error" v-if="errorX2">[e: {{ errorX2.toPrecision(3) }}%]</span>
      //- p.inline.data Yb
      //-   input.center.data(:class="checkedY2" v-model.number='enterY2')
      //-   <span class="error" v-if="errorY2">[e: {{ errorY2.toPrecision(3) }}%]</span>
      //- p.inline.data Xc
      //-   input.center.data(:class="checkedX3" v-model.number='enterX3')
      //-   <span class="error" v-if="errorX3">[e: {{ errorX3.toPrecision(3) }}%]</span>
      //- p.inline.data Yc
      //-   input.center.data(:class="checkedY3" v-model.number='enterY3')
      //-   <span class="error" v-if="errorY3">[e: {{ errorY3.toPrecision(3) }}%]</span>
      //- p.inline.data XmAB
      //-   input.center.data(:class="checkedXm12" v-model.number='enterXm12')
      //-   <span class="error" v-if="errorXm12">[e: {{ errorXm12.toPrecision(3) }}%]</span>
      //- p.inline.data YmAB
      //-   input.center.data(:class="checkedYm12" v-model.number='enterYm12')
      //-   <span class="error" v-if="errorYm12">[e: {{ errorYm12.toPrecision(3) }}%]</span>
      //- p.inline.data XmAC
      //-   input.center.data(:class="checkedXm13" v-model.number='enterXm13')
      //-   <span class="error" v-if="errorXm13">[e: {{ errorXm13.toPrecision(3) }}%]</span>
      //- p.inline.data YmAC
      //-   input.center.data(:class="checkedYm13" v-model.number='enterYm13')
      //-   <span class="error" v-if="errorYm13">[e: {{ errorYm13.toPrecision(3) }}%]</span>
      //- p.inline.data XmBC
      //-   input.center.data(:class="checkedXm23" v-model.number='enterXm23')
      //-   <span class="error" v-if="errorXm23">[e: {{ errorXm23.toPrecision(3) }}%]</span>
      //- p.inline.data YmBC
      //-   input.center.data(:class="checkedYm23" v-model.number='enterYm23')
      //-   <span class="error" v-if="errorY3">[e: {{ errorY3.toPrecision(3) }}%]</span>
      //- p.inline.data mA
      //-   input.center.data(:class="checkedMa" v-model.number='enterMa')
      //-   <span class="error" v-if="errorMa">[e: {{ errorMa.toPrecision(3) }}%]</span>
      //- p.inline.data bA
      //-   input.center.data(:class="checkedBa" v-model.number='enterBa')
      //-   <span class="error" v-if="errorBa">[e: {{ errorBa.toPrecision(3) }}%]</span>
      //- p.inline.data mB
      //-   input.center.data(:class="checkedMb" v-model.number='enterMb')
      //-   <span class="error" v-if="errorMb">[e: {{ errorMb.toPrecision(3) }}%]</span>
      //- p.inline.data bB
      //-   input.center.data(:class="checkedBb" v-model.number='enterBb')
      //-   <span class="error" v-if="errorBb">[e: {{ errorBb.toPrecision(3) }}%]</span>
      //- p.inline.data mC
      //-   input.center.data(:class="checkedMc" v-model.number='enterMc')
      //-   <span class="error" v-if="errorMc">[e: {{ errorMc.toPrecision(3) }}%]</span>
      //- p.inline.data bC
      //-   input.center.data(:class="checkedBc" v-model.number='enterBc')
      //-   <span class="error" v-if="errorBc">[e: {{ errorBc.toPrecision(3) }}%]</span>
      //- p.inline.data Aa
      //-   input.center.data(:class="checkedA12" v-model.number='enterA12')
      //-   <span class="error" v-if="errorA12">[e: {{ errorA12.toPrecision(3) }}%]</span>
      //- p.inline.data Ba
      //-   input.center.data(:class="checkedB12" v-model.number='enterB12')
      //-   <span class="error" v-if="errorB12">[e: {{ errorB12.toPrecision(3) }}%]</span>
      //- p.inline.data Ca
      //-   input.center.data(:class="checkedC12" v-model.number='enterC12')
      //-   <span class="error" v-if="errorC12">[e: {{ errorC12.toPrecision(3) }}%]</span>
      //- p.inline.data Ab
      //-   input.center.data(:class="checkedA13" v-model.number='enterA13')
      //-   <span class="error" v-if="errorA13">[e: {{ errorA13.toPrecision(3) }}%]</span>
      //- p.inline.data Bb
      //-   input.center.data(:class="checkedB13" v-model.number='enterB13')
      //-   <span class="error" v-if="errorB13">[e: {{ errorB13.toPrecision(3) }}%]</span>
      //- p.inline.data Cb
      //-   input.center.data(:class="checkedC13" v-model.number='enterC13')
      //-   <span class="error" v-if="errorC13">[e: {{ errorC13.toPrecision(3) }}%]</span>
      //- p.inline.data Ac
      //-   input.center.data(:class="checkedA23" v-model.number='enterA23')
      //-   <span class="error" v-if="errorA23">[e: {{ errorA23.toPrecision(3) }}%]</span>
      //- p.inline.data Bc
      //-   input.center.data(:class="checkedB23" v-model.number='enterB23')
      //-   <span class="error" v-if="errorB23">[e: {{ errorB23.toPrecision(3) }}%]</span>
      //- p.inline.data Cc
      //-   input.center.data(:class="checkedC23" v-model.number='enterC23')
      //-   <span class="error" v-if="errorC23">[e: {{ errorC23.toPrecision(3) }}%]</span>
</template>

<script>
import eagle from 'eagle.js'
export default {
  data: function () {
    return {
      enterX1: '',
      errorX1: 0,
      enterY1: '',
      errorY1: 0,
      enterX2: '',
      errorX2: 0,
      enterY2: '',
      errorY2: 0,
      enterX3: '',
      errorX3: 0,
      enterY3: '',
      errorY3: 0,
      enterXm12: '',
      errorXm12: 0,
      enterYm12: '',
      errorYm12: 0,
      enterXm13: '',
      errorXm13: 0,
      enterYm13: '',
      errorYm13: 0,
      enterXm23: '',
      errorXm23: 0,
      enterYm23: '',
      errorYm23: 0,
      enterMa: '',
      errorMa: 0,
      enterBa: '',
      errorBa: 0,
      enterMb: '',
      errorMb: 0,
      enterBb: '',
      errorBb: 0,
      enterMc: '',
      errorMc: 0,
      enterBc: '',
      errorBc: 0,
      enterA12: '',
      errorA12: 0,
      enterB12: '',
      errorB12: 0,
      enterC12: '',
      errorC12: 0,
      enterA13: '',
      errorA13: 0,
      enterB13: '',
      errorB13: 0,
      enterC13: '',
      errorC13: 0,
      enterA23: '',
      errorA23: 0,
      enterB23: '',
      errorB23: 0,
      enterC23: '',
      errorC23: 0
    }
  },
  computed: {
    X1: function () {
      console.clear()
      let max = 5
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x1: function () {
      return 354 + 38 * this.X1
    },
    Y1: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y1: function () {
      return 238 - 38 * this.Y1
    },
    X2: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x2: function () {
      return 354 + 38 * this.X2
    },
    Y2: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y2: function () {
      return 238 - 38 * this.Y2
    },
    X3: function () {
      let max = 5
      let min = 1
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    x3: function () {
      return 354 + 38 * this.X3
    },
    Y3: function () {
      let max = -1
      let min = -5
      return Math.round(Math.random() * (max - min + 1) + min)
    },
    y3: function () {
      return 238 - 38 * this.Y3
    },
    Xm12: function () {
      return (this.X1 + this.X2) / 2
    },
    xm12: function () {
      return 354 + 38 * this.Xm12
    },
    Ym12: function () {
      return (this.Y1 + this.Y2) / 2
    },
    ym12: function () {
      return 238 - 38 * this.Ym12
    },
    Xm13: function () {
      return (this.X1 + this.X3) / 2
    },
    xm13: function () {
      return 354 + 38 * this.Xm13
    },
    Ym13: function () {
      return (this.Y1 + this.Y3) / 2
    },
    ym13: function () {
      return 238 - 38 * this.Ym13
    },
    Xm23: function () {
      return (this.X2 + this.X3) / 2
    },
    xm23: function () {
      return 354 + 38 * this.Xm23
    },
    Ym23: function () {
      return (this.Y2 + this.Y3) / 2
    },
    ym23: function () {
      return 238 - 38 * this.Ym23
    },
    XmAB: function () {
      return (this.X1 + this.X2) / 2
    },
    YmAB: function () {
      return (this.Y1 + this.Y2) / 2
    },
    XmAC: function () {
      return (this.X1 + this.X3) / 2
    },
    YmAC: function () {
      return (this.Y1 + this.Y1) / 2
    },
    XmBC: function () {
      return (this.X2 + this.X3) / 2
    },
    YmBC: function () {
      return (this.X2 + this.X3) / 2
    },
    A: function () {
      return this.Y2 - this.Y1
    },
    B: function () {
      return -(this.X2 - this.X1)
    },
    C: function () {
      return -this.A * this.X1 - this.B * this.Y1
    },
    m1: function () {
      return -this.A / this.B
    },
    b1: function () {
      return -this.C / this.B
    },
    m2: function () {
      return -this.A / this.B
    },
    b2: function () {
      return this.A * this.X3 / this.B + this.Y3
    },
    Ap: function () {
      return this.A
    },
    Bp: function () {
      return this.B
    },
    Cp: function () {
      return -this.A * this.X3 - this.B * this.Y3
    },
    ae: function () {
      return -this.Cp / this.Ap
    },
    be: function () {
      return -this.C / this.B
    },
    ap: function () {
      return -this.C / this.A
    },
    bp: function () {
      return -this.Cp / this.Bp
    },
    Xl1a: function () {
      return -9
    },
    xl1a: function () {
      return 354 + 38 * this.Xl1a
    },
    Yl1a: function () {
      return -this.enterA * this.Xl1a / this.enterB - this.enterC / this.enterB
    },
    yl1a: function () {
      return 238 - 38 * this.Yl1a
    },
    Xl1b: function () {
      return 9
    },
    xl1b: function () {
      return 354 + 38 * this.Xl1b
    },
    Yl1b: function () {
      return -this.enterA * this.Xl1b / this.enterB - this.enterC / this.enterB
    },
    yl1b: function () {
      return 238 - 38 * this.Yl1b
    },
    Xl2a: function () {
      return -9
    },
    xl2a: function () {
      return 354 + 38 * this.Xl2a
    },
    Yl2a: function () {
      return -this.enterAp * this.Xl2a / this.enterBp - this.enterCp / this.enterBp
    },
    yl2a: function () {
      return 238 - 38 * this.Yl2a
    },
    Xl2b: function () {
      return 9
    },
    xl2b: function () {
      return 354 + 38 * this.Xl2b
    },
    Yl2b: function () {
      return -this.enterAp * this.Xl2b / this.enterBp - this.enterCp / this.enterBp
    },
    yl2b: function () {
      return 238 - 38 * this.Yl2b
    },
    checkedX1: function () {
      this.errorX1 = this.errorRelative('X1 => ', this.X1, parseFloat(this.enterX1))
      this.showPointX1 = this.errorX1 < 1e-1
      return this.errorX1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY1: function () {
      this.errorY1 = this.errorRelative('Y1 => ', this.Y1, parseFloat(this.enterY1))
      this.showPointY1 = this.errorY1 < 1e-1
      return this.errorY1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX2: function () {
      this.errorX2 = this.errorRelative('X2 => ', this.X2, parseFloat(this.enterX2))
      this.showPointX2 = this.errorX2 < 1e-1
      return this.errorX2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY2: function () {
      this.errorY2 = this.errorRelative('Y2 => ', this.Y2, parseFloat(this.enterY2))
      this.showPointY2 = this.errorY2 < 1e-1
      return this.errorY2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedX3: function () {
      this.errorX3 = this.errorRelative('X3 => ', this.X3, parseFloat(this.enterX3))
      this.showPointX3 = this.errorX3 < 1e-1
      return this.errorX3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedY3: function () {
      this.errorY3 = this.errorRelative('Y3 => ', this.Y3, parseFloat(this.enterY3))
      this.showPointY3 = this.errorY3 < 1e-1
      return this.errorY3 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedA: function () {
      this.errorA = this.errorRelative('A => ', this.A, parseFloat(this.enterA))
      this.showLineA = this.errorA < 1e-1
      return this.errorA < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedB: function () {
      this.errorB = this.errorRelative('B => ', this.B, parseFloat(this.enterB))
      this.showPLineB = this.errorB < 1e-1
      return this.errorB < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedC: function () {
      this.errorC = this.errorRelative('C => ', this.C, parseFloat(this.enterC))
      this.showLineC = this.errorC < 1e-1
      return this.errorC < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM1: function () {
      this.errorM1 = this.errorRelative('m1 => ', this.m1, parseFloat(this.enterM1))
      this.showLine = true // this.errorM < 1e-1
      this.showEcu = this.errorM1 < 1e-1
      return this.errorM1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedb1: function () {
      this.errorb1 = this.errorRelative('b1 => ', this.b1, parseFloat(this.enterb1))
      this.showPointb1 = this.errorb1 < 1e-1
      return this.errorb1 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedAp: function () {
      this.errorAp = this.errorRelative('Ap => ', this.Ap, parseFloat(this.enterAp))
      this.showLineAp = this.errorAp < 1e-1
      return this.errorAp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedBp: function () {
      this.errorBp = this.errorRelative('Bp => ', this.Bp, parseFloat(this.enterBp))
      this.showPLineBp = this.errorBp < 1e-1
      return this.errorBp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedCp: function () {
      this.errorCp = this.errorRelative('Cp => ', this.Cp, parseFloat(this.enterCp))
      this.showLineCp = this.errorCp < 1e-1
      return this.errorCp < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedM2: function () {
      this.errorM2 = this.errorRelative('m2 => ', this.m2, parseFloat(this.enterM2))
      this.showLine = true // this.errorM < 1e-1
      this.showEcu = this.errorM2 < 1e-1
      return this.errorM2 < 1e-1 ? 'correct' : 'not-correct'
    },
    checkedb2: function () {
      this.errorb2 = this.errorRelative('b2 => ', this.b2, parseFloat(this.enterb2))
      this.showPointb2 = this.errorb2 < 1e-1
      return this.errorb2 < 1e-1 ? 'correct' : 'not-correct'
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
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
