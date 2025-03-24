<template lang="pug">
#AnalyticGeometryI.eg-theme-agrume
  .eg-slideshow
    div(style="width: 100%; display: flex; flex-wrap: wrap; align-items: center;").container.center
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}
    
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") Analytic Geometry
        h2(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") Geometría analítica
        // img(src='./assets/frontImage.svg')
        img(src='./assets/U.svg')
        // spring-mass
        
        //- simple-pendulum
        //- spring-mass

        h4(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") 
        h4(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Parábola, elipse
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3 Oscillatory motion
    //-   h5.center Simple pendulum example
    //-   simple-pendulum
    //-   .button.prev(@click.stop='previousSlide')
    //-     span &lt; Prev. slide
    //-     br
    //-     span.small  Ctrl + left
    //-   .button.next(@click.stop='nextSlide')
    //-     span Next slide &gt;
    //-     br
    //-     span.small Ctrl + right


    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3
        | Temas
        .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Definición de la parábola</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Elementos de la paràbola</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Formas de la ecuación de la parábola: ordinarias, general</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutTop')
          p(v-if="step >= 1")
            <b>Definición de Elipse</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Elementos de la elipse</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Formas de la ecuación de la elipse: ordinarias, general</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px -30px 0px;").center Sección 1
      h3.center La parábola
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") Lugar geométrico de un punto que se mueve en un plano <span style="font-family: roboto; font-weight: bold; font-style: italic;">xy</span>, de tal manera que su distancia de una recta fija, llamada directriz (<span style="font-family: roboto; font-weight: bold; font-style: italic;">L</span>), situada en el plano, es siempre igual a su distancia de un punto fijo del plano, que no pertenece a la recta, llamado foco (<span style="font-family: roboto; font-weight: bold; font-style: italic;">f</span>).
      f1_parabolaDef
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Elementos de la parabola
      p.center Sea L, la recta fija llamada directriz y f  el punto fijo llamado foco, a partir de estos y del lugar geometrico, sus principales elementos son:
      ol 
        li <span style="color: #00aa00;"><b>Eje focal</b></span> es la recta perpendicular a la directriz y que pasa por el foco.
        li <span style="color: #0000aa;"><b>Vértice</b></span> es el punto de intersección del eje focal con la parábola.
        li <span style="color: #aaaa00;"><b>Cuerda</b></span> es un segmento que une dos puntos cualesquiera de la parabola.
        li <span style="color: #00aaaa;"><b>Cuerda focal</b></span> es una cuerda que pasa por el foco.
        li <span style="color: #aa00aa;"><b>Lado recto</b></span> es una cuerda focal perpendicular al eje focal.
        li <span style="color: #aaaaaa;"><b>Radio focal</b></span> o <span style="color: #aaaaaa;"><b>Radio vector</b></span> es el segmento que une cualquier punto de la parabola con el foco.
      .center
        f2_parabolaElem
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Forma canonica de la ecuacion de la parabola
      h5(style="margin: -50px 0 0px 0;").center o primera forma ordinaria de la parabola
      E1_parabolaPrimeraOrd

      h6(style="margin: -20px 0 0px 0; color: #0000FF").center Análisis de la ecuación
      ol
        li La curva pasa por el origen y no tiene ninguna intersección con los ejes coordenados.
        li La curva es simétrica con respecto al eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>, o bien, el eje focal divide a la parábola en dos partes iguales
        li Si <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span><span style="font-family: roboto; font-weight:"> = &#x00B1; 2&#x221A;</span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">px</span>), entonces, para que y tome valores reales y diferentes de cero, <span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>, deben tener el mismo signo, es decir:
          ol(type='A')
            li si <span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span><span style="font-family: roboto; font-weight: bold; "> &gt; 0</span> , se excluyen todos los valores negativos de <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>, por lo tanto, la parábola se abre hacia la derecha. 
            li si <span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span><span style="font-family: roboto; font-weight: bold; "> &lt; 0</span> , se excluyen todos los valores positivos de <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>, por lo tanto, la parábola se abre hacia la izquierda. 
        li La curva no tiene asintotas verticales ni horizontales.
        li Existen dos puntos sobre la parábola que tienen abscisas igual a <span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span> y sus ordenadas son <span style="font-family: roboto; font-weight: bold;">2</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span> y <span style="font-family: roboto; font-weight: bold;">-2</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span>, respectivamente, por lo tanto, la longitud de su lado recto está dada por : <span style="font-family: roboto; font-weight: bold;">|4</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">p</span><span style="font-family: roboto; font-weight: bold;">|</span>.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Forma canonica de la ecuacion de la parabola
      h5(style="margin: -50px 0 0px 0;").center o primera forma ordinaria de la parabola
      f3_parabolaVertical

      E2_parabolaPrimeraOrd
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;") Graficador
      p(style="margin: 0 0 -0px 0;").center 
      f4_parabolaGraficador      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Exercise 1
      example-one(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 2
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 2
      example-two(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 3
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 3
      example-three(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px 30px 0px;").center Segunda forma ordinaria de la parábola
      //- p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") La parabola tiene su vertice fuera del origen, en el punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">V</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">h, </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span> y su eje focal es paralelo a un eje coordenado.
      f5_parabola2ord
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px 30px 0px;").center Segunda forma ordinaria de la parábola
      //- p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") La parabola tiene su vertice fuera del origen, en el punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">V</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">h, </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span> y su eje focal es paralelo a un eje coordenado.
      f6_parabola2ordV
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;") Graficador
      p(style="margin: 0 0 -0px 0;").center 
      f7_parabolaGraficador2
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 4
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 4
      example-four(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 6
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 6
    //-   example-six(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 7
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 7
    //-   example-seven(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Energy in Simple Harmonic Motion
    //-   p.center
    //-     <svg height="250" width="600" viewbox="0 0 600 250">
    //-       <defs>
    //-         <path id="r1" fill="none" stroke="black">
    //-           <animate id="p1" attributeName="d" :values="resorte" dur="2s" repeatCount="indefinite"/>
    //-           <animate attributeName="stroke" values="red;red;black;red;red;black;red;red;" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
    //-         </path>

    //-       </defs>
    //-       <use xlink:href="#r1"/>

    //-       <path :d="base" stroke="black"  fill="none"/>
    //-       <rect x="250" y="40" width="100" height="100" stroke="black" fill="lightskyblue" opacity="0.8">
    //-         <animate attributeName="x" :values="blockPositions" dur="2s" repeatCount="indefinite" begin="p1.begin"/>
    //-       </rect>
    //-       <line x1="300" y1="138" x2="300" y2="170" stroke="red" />
    //-       <line x1="450" y1="138" x2="450" y2="170" stroke="red" />
    //-       <line x1="150" y1="138" x2="150" y2="170" stroke="red" />

    //-       <text x="120" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = -A</tspan></text>
    //-       <text x="275" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = 0</tspan></text>
    //-       <text x="420" y="190"><tspan style="font-style:italic; font-family: Times New Roman; font-size:0.8em;">x = +A</tspan></text>

    //-         <text x="500" y="98">
    //-           <tspan style="font-style:normal; font-size:0.8em;">No friction</tspan>
    //-         </text>
    //-         <path d="M500,100 475,140 477,125 M475,140 490,130" stroke="red" stroke-width="3" fill="none"/>

    //-         //- <line x1="0" y1="0" x2="500" y2="200" stroke="red" stroke-width="0.5"/>
    //-         //- <line x1="0" y1="200" x2="500" y2="0" stroke="red" stroke-width="0.5"/>
    //-     </svg>
    //-   p(style="margin: 0px 20px 0 0;") Energies
    //-   .center
    //-     img(src='./assets/kineticEnergy.png' height="50px"  style="margin: -20px 100px 0 0;")
    //-     img(src='./assets/potentialEnergy.png' height="50px" style="margin: -20px 20px 0 0;")
    //-   p(style="margin: 0px 20px 0 0;") Mecanical energy
    //-   .center
    //-     img(src='./assets/totalEnergyA.png' height="50px"  style="margin: -50px 10px 0 0")
    //-   p(style="margin: 0px 20px 0 0;") the constant
    //-   .center
    //-     img(src='./assets/totalEnergyB.png' height="100px"  style="margin-right: 20px;")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Energy in Simple Harmonic Motion
    //-   p.center We can derivre formulas for velocity
    //-   .center
    //-     img(src='./assets/velocityEnergy.png' height="100px"  style="margin-right: 20px;")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 8
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 8
    //-   example-nine(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 9
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 9
    //-   example-ten(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 10
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 10
    //-   example-thirteen(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Other systems of SHM
    //-   p(style="margin-top: -30px;").center Angular SHM
    //-   //- torsion-pendulum
    //-   .center
    //-     img(src='./assets/angularSHM.png' height="300px")
    //-   .center
    //-     img(src='./assets/angularTheta.png')
    //-   .center
    //-     img(src='./assets/angularWf.png' height="100px")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center Inertia moments
    //-   p(style="margin-top: -30px;").center
    //-   .center
    //-     img(src='./assets/inertiaMomentsTable.png')
    //-   p.center Parallel axis theorem
    //-   .center
    //-     img(src='./assets/inertiaParallelAxisTheorem.png' height="70px")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The simple pendulum
    //-   .center
    //-     img(src='./assets/simplePendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/simplePendulumW.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumF.png' height="100px")
    //-   .center
    //-     img(src='./assets/simplePendulumT.png' height="100px")

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h4(style="margin-top: -10px;").center The physical pendulum
    //-   p.center We can derivre formulas for velocity
    //-   .center
    //-     img(src='./assets/physicalPendulum.png' height="350px")
    //-   .center
    //-     img(src='./assets/physicalPendulumW.png' height="100px" style="margin-right: 40px;")
    //-     img(src='./assets/physicalPendulumT.png' height="100px")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 11
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 11
    //-   example-fourteen(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 12
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 12
    //-   example-seventeen(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 13
    //-   h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 13
    //-   example-eighteen(:language='isSpanish')
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Damped oscillations
    //-   .center
    //-     img(src='./assets/dampedOscillationsX.png')
    //-   .center
    //-     img(src='./assets/dampedOscGraph.png' height="300px" style="margin-right: 50px;")
    //-     img(src='./assets/struts.png' height="300px")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5.center Forced oscillations
    //-   .center
    //-     img(src='./assets/forcedOscA.png' height="100px")
    //-   .center
    //-     img(src='./assets/forcedOscillationsGraph.png' height="500px")
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        //- p University Physics 13th Edition. Searzs and Zemanzky
        //- p Physics for scientist and engineers 8th Edition. Serway, Jewett
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -0px;").center Problems
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p1.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-    .center
    //-       img(src='./assets/p2.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p3.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p4.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p5.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p6.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p7.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p8.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer  
    //-     .center
    //-       img(src='./assets/p9.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer  
    //-     .center
    //-       img(src='./assets/p10.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p11.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p12.png' width="100%" style="margin: 0px 0px 0px 0px;")
    //-   div.pcontainer 
    //-     .center
    //-       img(src='./assets/p13.png' width="100%" style="margin: 0px 0px 0px 0px;")      
    //-   div.pcontainer
    //-     .center
    //-       img(src='./assets/p14.png' width="100%" style="margin: 0px 0px 0px 0px;")      
    //-   div.pcontainer   
    //-     .center
    //-       img(src='./assets/p15.png' width="100%" style="margin: 0px 0px 0px 0px;")      
    //-   div.pcontainer      
    //-     .center
    //-       img(src='./assets/t1.png' width="100%" style="margin: 0px 0px 0px 0px;")
      
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   //- .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-   //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

 

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'La parabola y la elipse',
    description: 'The parable, the ellipse',
    path: 'AnalyticGeometryII',
    course: 'Analytic Geometry',
    part: 2
  },
  components: {
    'f1_parabolaDef': require('./components/f1_parabolaDefinicion'),
    'f2_parabolaElem': require('./components/f2_parabolaElementos'),
    'E1_parabolaPrimeraOrd': require('./components/E1_parabolaPrimeraOrdinaria'),
    'f3_parabolaVertical': require('./components/f3_parabolaVertical'),
    'E2_parabolaPrimeraOrd': require('./components/E2_parabolaPrimeraOrdinaria'),
    'f4_parabolaGraficador': require('./components/f4_parabolaGraficador'),
    'f5_parabola2ord': require('./components/f5_parabola2ord'),
    'f6_parabola2ordV': require('./components/f6_parabola2ordV'),
    'f7_parabolaGraficador2': require('./components/f7_parabolaGraficador2'),
    'example-one': require('./components/ExampleOne'),
    'example-two': require('./components/ExampleTwo'),
    'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour'),
    'example-five': require('./components/ExampleFive'),
    'example-six': require('./components/ExampleSix'),
    'example-seven': require('./components/ExampleSeven'),
    'example-eight': require('./components/ExampleEight'),
    'example-nine': require('./components/ExampleNine'),
    'example-ten': require('./components/ExampleTen'),
    'example-eleven': require('./components/ExampleEleven'),
    'example-twelve': require('./components/ExampleTwelve'),
    'example-thirteen': require('./components/ExampleThirteen'),
    'example-fourteen': require('./components/ExampleFourteen'),
    'example-fifteen': require('./components/ExampleFifteen'),
    'example-sixteen': require('./components/ExampleSixteen'),
    'example-seventeen': require('./components/ExampleSeventeen'),
    'example-eighteen': require('./components/ExampleEighteen'),
    'example-nineteen': require('./components/ExampleNineteen'),
    'example-twenty': require('./components/ExampleTwenty'),
    'simple-pendulum': require('./components/SimplePendulum'),
    'spring-mass': require('./components/SpringMass'),
    'displacement-plot': require('./components/DisplacementPlot'),
    'torsion-pendulum': require('./components/TorsionPendulum')
  },
  data: function () {
    return {
      tiempo: '',
      theme: 'Ecuaciones generales de segundo grado',
      isSpanish: true,
      languages: ['Inglés', 'Español'],
      topics: ['Inicio', 'Temas', 'Circunferencia', 'Parabola', 'Elipse', 'Hiperbola', 'Bibliografía', 'Problemario'],
      page: [1, 2, 4, 8, 10, 14, 20, 25, 32, 34, 35]
    }
  },
  computed: {
    time () {
      setInterval(this.updateTime, 100)
    },
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
    // var timer = setTimeInterval(resorte),
    resorte () {
      let d = ''
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      // let ranges = [350, 342, 318, 282, 237, 188, 140, 98, 68, 52, 52, 68, 98, 140, 188, 237, 282, 318, 342, 350]
      let ranges = [350, 335, 294, 233, 167, 106, 65, 50, 65, 106, 167, 233, 294, 335, 350]
      let points = 102
      for (var i = 0; i < ranges.length; i++) {
        let d1 = 'M10,90 30,90 '
        let delta = ranges[i] / (points + 0)
        let period = ranges[i] / 7
        for (var j = 0; j < points - 1; j++) {
          d1 = d1 + `${delta * j + 30},${90 + 20 * Math.sin(2 * Math.PI * delta * j / period)} `
        }
        // console.log('d1', d1)
        d1 = d1 + ` ${ranges[i] + 30},90 ${ranges[i] + 50},90;`
        d = d + d1
      }
     // console.log('d: ', d)

      return d
    },
    blockPositions () {
      let positions = ''
      let points = 15
      for (var i = 0; i < points; i++) {
        let angle = 2 * i * Math.PI / (points - 1)
        positions = positions + `${Math.round(250 + 150 * Math.cos(angle))};`
      }
      console.log(positions)
      return positions
    }
  },
  methods: {
    updateTime () {
      var cd = new Date()
      this.tiempo = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2)
      console.log('tiempoo', this.tiempo)
    },
    zeroPadding (num, digit) {
      var zero = ''
      for (var i = 0; i < digit; i++) {
        zero += '0'
      }
      return (zero + num).slice(-digit)
    }
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
#OscillatoryMotion {
  .frontpage {
    img {
      height: 7em;
    }
    img.control-schema {
      width: 8em;
      height: 3em;
    }
  }
  .heart {
    width: 1em;
    height: 0.8em;
    margin-left: 0.1em;
    margin-right: 0.1em;
    background-image: url('./assets/logo.svg');
    background-position: center center;
    background-repeat:  no-repeat;
    background-size: contain;
  }

  .quarter {
    text-align: center;
    p {
      margin-top: 0;
      text-align: center;
    }
    h4 {
      margin-top: 0;
      margin-bottom: 0
    }
  }
  .boredYet {
    p {
      margin-bottom: 0.3em;
      margin-top: 1.3em;
    }
    .button {
      border: none;
    }
    .button.prev {
      float: left;
    }
    .button.next {
      float: right;
    }
  }
  img.computerkid {
    height: 6.5em;
  }

  a {
    color: black;
  }

  .parentWindow {
    border: solide 1px red;
  }
}
#table-wrapper {
  display: flex;
  padding-left:0px;
  align-content: center;

}
#desc {
  width: 30em;
  border-collapse: collapse;
  border-bottom: 1px solid black;

  & th {
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: 1em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  & td {
    text-align:left;
    padding-left: 4em;
    font-size: 10px;
    height: 15px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    font-style: italic;
  }
}
.eg-slide-content {
    width: 30em;
    max-width: 95%;
    margin: 0 100 0 50;
  }

.pcontainer {
  padding: 0px;
  margin: 0px 0px 0px 0px;
  border: 1px solid black;
}

.themes {
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  font-family: arial;
  font-weight: bold;
  font-size: 10px;
  min-width: 70px;
  border-radius: 0 0 0px 10px;
  height: 20px;
}

</style>
