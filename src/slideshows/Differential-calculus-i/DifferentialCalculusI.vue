a<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    div(style="width: 100%; display: flex; flex-wrap: wrap; align-items: center;").container.center
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}
    
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") Differential Calculus
        h2(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") Cálculo diferencial
        // img(src='./assets/frontImage.svg')
        img(src='./assets/U.svg')
        // spring-mass
        
        //- simple-pendulum
        //- spring-mass

        h4(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") 
        h4(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Límites y reglas básicas de derivación
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
        //- .inline(class='animated infinite pulse heart')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Funciones</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Límites</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Continuidad</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutTop')
          p(v-if="step >= 1")
            <b>Derivada por definición</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Reglas básicas para derivar</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Derivadas de funciones trascendentes</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Funciones
      p(style="margin-top: -40px; padding: 20px; border-style: solid; text-align: left;").center Sean <span class="mib">X</span> y <span class="mib">Y</span> conjuntos de números reales. Una función real <span class="mib">f</span> de una variable real <span class="mib">x</span> de <span class="mib">X</span> a <span class="mib">Y</span> es una regla de correspondencia que asigna a cada número <span class="mib">x</span> de <span class="mib">X</span> exactamente un número <span class="mib">y</span> de <span class="mib">Y</span>.<br><br> El <span style="font-family: roboto; font-weight: bold; font-size: 25px; font-style: normal;">dominio</span> de <span class="mib">f</span> es el conjunto <span class="mib">X</span>. El número <span class="mib">y</span> es la imagen de <span class="mib">x</span> por <span class="mib">f</span> y se denota mediante <span class="mib">f</span><span class="mnb">(</span><span class="mib">x</span><span class="mnb">)</span>, a lo cual se le llama el valor de <span class="mib">f</span> en <span class="mib">x</span>.<br><br> El recorrido o <span style="font-family: roboto; font-weight: bold; font-size: 25px; font-style: normal;">rango</span> de <span class="mib">f</span> se define como el subconjunto de <span class="mib">Y</span> formado por todas las imágenes de los números de <span class="mib">X</span>.
      funcionDiagram
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
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

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px; color: green;").center Límite
      p(style="margin-top: -50px; color: blue; text-align: left;").center Definición de límite 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Sea <span class="mib">f</span> una función definida en un intervalo abierto que contiene a <span class="mib">c</span> (salvo posiblemente en <span class="mib">c</span>) y <span class="mib">L</span> un número real. La afirmación 
        <svg width="500" height="80">
          <text x="70" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">) = </tspan><tspan style="font-size: 30px; font-style: italic;">L</tspan></text>
          <text x="70" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>
        | <br>significa que para todo &epsilon; &gt; 0 existe uno &delta; &gt; 0 tal que si 
        <svg width="500" height="80">
          <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times">0 &lt; <tspan style="font-size: 30px; font-style: italic;"> x - c </tspan> &lt; <tspan style="font-size: 30px; font-style: italic;">&delta;,</tspan> &ensp; entonces &ensp; <tspan style="font-size: 30px; font-style: italic;"> f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan><tspan style="font-size: 30px; font-style: italic;"> - L </tspan> &lt; &epsilon;</text>
          <line  x1="65" y1="15" x2="65" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="122" y1="15" x2="122" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="338" y1="15" x2="338" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
          <line  x1="437" y1="15" x2="437" y2="50" fill="none" stroke="#000" stroke-width="2"stroke-linecap="round"/>
        </svg>
      limite
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px; color: green;").center Límites
      p(style="margin-top: -50px; color: blue; text-align: left;").center Límites básicos 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">b</span> y  <span class="mib">c</span> son números reales y <span class="mib">n</span> un entero positivo:  
        <svg width="700" height="70">
          <text x="20" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">1. &ensp; </tspan><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">b</tspan> = <tspan style="font-size: 30px; font-style: italic;">b</tspan></text>
          <text x="70" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>

          <text x="260" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">2. &ensp; </tspan><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan> = <tspan style="font-size: 30px; font-style: italic;">c</tspan></text>
          <text x="310" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>

          <text x="500" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">3. &ensp; </tspan><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">x<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan></tspan> = <tspan style="font-size: 30px; font-style: italic;">c<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan></tspan></text>
          <text x="550" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>
      p(style="margin-top: -10px; color: blue; text-align: left;").center Propiedades de los límites 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">b</span> y  <span class="mib">c</span> son números reales y <span class="mib">n</span> un entero positivo, <span class="mib">f</span> y <span class="mib">g</span> son funciones con los límites siguientes:
        <svg width="800" height="420">
          <text x="70" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">) = </tspan><tspan style="font-size: 30px; font-style: italic;">L</tspan>&emsp; y &emsp;<tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">) = </tspan><tspan style="font-size: 30px; font-style: italic;">K</tspan></text>
          <text x="70" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
          
          <text x="10" y="120" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">1. Múltiplo escalar: &emsp;&ensp; </tspan><tspan style="font-size: 30px; font-style: normal;"> lím [</tspan><tspan style="font-size: 30px; font-style: italic;">bf</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)] = </tspan><tspan style="font-size: 30px; font-style: italic;">bL</tspan></text>
          <text x="265" y="140" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
         
          <text x="10" y="180" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">2. Suma o diferencia: &emsp;</tspan><tspan style="font-size: 30px; font-style: normal;">lím [</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">) &pm; <tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan>] = </tspan><tspan style="font-size: 30px; font-style: italic;">L </tspan>&pm;<tspan style="font-size: 30px; font-style: italic;"> K</tspan></text>
          <text x="265" y="195" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
         
          <text x="10" y="240" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">3. Producto: &ensp;&emsp;&emsp;&emsp;&emsp;</tspan><tspan style="font-size: 30px; font-style: normal;"> lím [</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)<tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan>] = </tspan><tspan style="font-size: 30px; font-style: italic;">L</tspan><tspan style="font-size: 30px; font-style: italic;">K</tspan></text>
          <text x="265" y="255" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        
          <text x="10" y="320" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">4. Cociente: &ensp;&emsp;&emsp;&emsp;&emsp; </tspan><tspan style="font-size: 30px; font-style: normal;"> lím </tspan>&emsp;&emsp;= &emsp; ,&ensp;siempre que <tspan style="font-size: 30px; font-style: italic;">K </tspan>&NotEqual; 0</text>
          <text x="319" y="300" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> <tspan style="font-size: 30px; font-style: italic;">&emsp; L </tspan></text>
          <text x="315" y="340" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan><tspan style="font-size: 30px; font-style: italic;">&emsp; K </tspan></text>
          <text x="255" y="335" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
          <line x1="310" y1="313" x2="360" y2="313" style="stroke:black; stroke-width:2"/>
          <line x1="400" y1="313" x2="430" y2="313" style="stroke:black; stroke-width:2"/>
         
          <text x="10" y="400" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">5. Potencias: &ensp;&emsp;&emsp;&emsp;&emsp;</tspan><tspan style="font-size: 30px; font-style: normal;">lím [</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)]<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan> = </tspan><tspan style="font-size: 30px; font-style: italic;">L<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan> </tspan></text>
          <text x="260" y="420" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Continuidad
      p(style="margin-top: -10px; color: blue; text-align: left;").center Definicion de Continuidad 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Confinuidad en un punto: una función <span class="mib">f</span> es continua en <span class="mib">c</span> si se satisfacen las tres condiciones siguientes:
        <svg width="800" height="200">
         <text x="10" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">1.&ensp; </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> <tspan style="font-size: 30px; font-style: normal; font-weight:normal ">está definida</tspan></text>
         
         <text x="10" y="120" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">2. &ensp;</tspan><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> <tspan style="font-size: 30px; font-style: italic; font-weight: normal">existe</tspan></text>
          <text x="40" y="135" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
         
          <text x="10" y="180" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">3. &ensp;</tspan><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> = <tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">c</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan></text>
          <text x="40" y="195" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
         
        </svg>
      p(style="margin-top: -10px; color: blue; text-align: left;").center Límites laterales 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Límite por la derecha
        <svg width="800" height="70">
          <text x="10" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> = <tspan style="font-size: 30px; font-style: italic;">L</tspan></text>
          <text x="5" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c<tspan  baseline-shift="super" style="font-size: 15px; font-style: normal;">+</tspan></tspan></text>
        </svg>
        | Límite por la izquierda
        <svg width="800" height="70">
          <text x="10" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> = <tspan style="font-size: 30px; font-style: italic;">L</tspan></text>
          <text x="5" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c<tspan  baseline-shift="super" style="font-size: 15px; font-style: normal;">-</tspan></tspan></text>
        </svg>
      p(style="margin-top: -10px; color: blue; text-align: left;").center Propiedades de la continuidad 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">b</span> es un número real y <span class="mib">f</span> y <span class="mib">g</span> son funciones continuas en <span class="mib">x = c</span>, entonces las funciones tambien son continuas en <span class="mib">c</span>.
        <svg width="800" height="250">
          <text x="10" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-weight: normal; font-style: normal;">1. Múltiplo escalar: &emsp;&ensp; </tspan><tspan style="font-size: 30px; font-style: italic;">bf</tspan></text>
                   
          <text x="10" y="80" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-weight: normal; font-style: normal;">2. Suma o diferencia: &emsp;</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan> &pm; <tspan style="font-size: 30px; font-style: italic;">g</tspan></text>
                   
          <text x="10" y="120" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-weight: normal; font-style: normal;">3. Producto: &emsp;&emsp;&emsp;</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-size: 30px; font-style: italic;">g</tspan></text>
                  
          <text x="10" y="180" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-weight: normal; font-style: normal;">4. Cociente: &ensp;&emsp;&emsp;&emsp;&emsp; </tspan>&emsp;si <tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">c</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> &NotEqual; 0</text>
          <text x="222" y="160" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">f</tspan></text>
          <text x="219" y="190" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">g</tspan></text>
          <line x1="210" y1="170" x2="250" y2="170" style="stroke:black; stroke-width:2"/>
         
          <text x="10" y="400" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 25px; font-style: normal;">5. Potencias: &ensp;&emsp;&emsp;&emsp;&emsp;</tspan><tspan style="font-size: 30px; font-style: normal;">lím [</tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)]<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan> = </tspan><tspan style="font-size: 30px; font-style: italic;">L<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan> </tspan></text>
          <text x="260" y="420" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>
   
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Límites infinitos
      p(style="margin-top: -10px; color: blue; text-align: left;").center Definición de límites infinitos 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Sea <span class="mib">f</span> una funcion definida en todo número real de un intervalo abierto que contiene a <span class="mib">c</span> (salvo, posiblemente, en el propio <span class="mib">c</span>). La expresión
        <svg width="800" height="70">
          <text x="10" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> = <tspan style="font-size: 30px; font-style: normal;">&infin;</tspan></text>
          <text x="5" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>
        | Significa que para toda 
        | <span class="mib">M</span>
        | <span class="mnb">&gt;</span>
        | <span class="mnb">0</span> existe una 
        | <span class="mib">&delta;</span>
        | <span class="mnb">&gt;</span>
        | <span class="mnb">0</span> tal que 
        | <span class="mib">f</span>
        | <span class="mnb">(</span>
        | <span class="mib">x</span>
        | <span class="mnb">)</span>
        | <span class="mnb"> &gt; </span>
        | <span class="mib">M</span>, siempre que
        | <span class="mnb">0</span>
        | <span class="mnb"> &lt; </span>
        | <span class="mnb">|</span>
        | <span class="mib">x</span>
        | <span class="mnb"> - </span>
        | <span class="mib">c</span>
        | <span class="mnb">|</span>
        | <span class="mib"> &lt; </span>
        | <span class="mib">&delta;</span> Del mismo modo, la expresión
        <svg width="800" height="70">
          <text x="10" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: normal;">lím </tspan><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan> = <tspan style="font-size: 30px; font-style: normal;"> - &infin;</tspan></text>
          <text x="5" y="65" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 20px; font-style: italic;">x </tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;"> c</tspan></text>
        </svg>
        | Significa que para todo 
        | <span class="mib">N</span> 
        | <span class="mnb">&gt;</span> 
        | <span class="mnb">0</span> existe una 
        | <span class="mib">&delta;</span> 
        | <span class="mnb">&gt;</span> 
        | <span class="mnb">0</span> tal que 
        | <span class="mib">f</span>
        | <span class="mnb">(</span>
        | <span class="mib">x</span>
        | <span class="mnb">)</span>
        | <span class="mnb"> &lt; </span><span class="mib">N</span>, siempre que <span class="mnb">0</span><span class="mnb"> &lt; </span><span class="mnb">|</span><span class="mib">x</span><span class="mnb"> - </span><span class="mib">c</span><span class="mnb">|</span><span class="mib"> &lt; </span><span class="mib">&delta;</span>
        | <br>Para definir el límite infinito por la izquierda, sustituir
        | <span class="mnb">0</span><span class="mnb"> &lt; </span><span class="mnb">|</span><span class="mib">x</span><span class="mnb"> - </span><span class="mib">c</span><span class="mnb">|</span><span class="mib"> &lt; </span><span class="mib">&delta;</span>
        | por <span class="mib">c</span><span class="mnb"> - </span><span class="mib">&delta;</span><span class="mnb"> &lt; </span><span class="mib"> x </span><span class="mnb"> &lt; </span><span class="mib"> &delta;</span>
        | <br>Para definir el límite infinito por la derecha, reemplazar
        | <span class="mnb">0</span><span class="mnb"> &lt; </span><span class="mnb">|</span><span class="mib">x</span><span class="mnb"> - </span><span class="mib">c</span><span class="mnb">|</span><span class="mib"> &lt; </span><span class="mib">&delta;</span>
        | por <span class="mib">c</span><span class="mnb"> &lt; </span><span class="mib"> x </span><span class="mnb"> &lt; </span><span class="mib"> c</span><span class="mnb"> + </span><span class="mib"> &delta;</span>.

      p(style="margin-top: -10px; color: blue; text-align: left;").center Definicion de asíntota vertical
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">f</span><span class="mnb">(</span><span class="mib">x</span><span class="mnb">)</span> tiende a infinito (o menos infinito) cuando <span class="mib">x</span> tiende a <span class="mib">c</span> por la derecha o por la izquierda, se dice que la recta <span class="mib">x</span><span class="mnb"> = </span><span class="mib">c</span> es una <span class="mnn">asíntota vertical</span> de la gráfica <span class="mib">f</span>.

      p(style="margin-top: -10px; color: blue; text-align: left;").center Asíntotas verticales
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Sean 
        <span class="mib">f</span> y 
        <span class="mib">g</span> funciones continuas en un intervalo abierto que contiene a 
        <span class="mib">c</span>. Si
        <span class="mib">f</span>
        <span class="mnb">(</span><span class="mib">c</span><span class="mnb">)</span>
        <span class="mnb"> &ne; 0</span>,
        <span class="mib">g</span>
        <span class="mnb">(</span><span class="mib">c</span><span class="mnb">)</span>
        <span class="mnb"> = 0</span>, y existe un intervalo abierto que contiene a 
        <span class="mib"> c </span> tal que 
        <span class="mib">g</span>
        <span class="mnb">(</span><span class="mib">x</span><span class="mnb">)</span>
        <span class="mnb"> &ne; 0</span> para todo 
        <span class="mib">x</span>
        <span class="mnb"> &ne;</span>
        <span class="mib"> c </span> en el intervalo, entonces la gráfica de la función está dada por
        <svg width="800" height="90">
          <text x="10" y="60" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">h</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">) = </tspan></text>
          <text x="100" y="40" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">f</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan></text>
          <text x="96" y="77" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-size: 30px; font-style: italic;">g</tspan><tspan style="font-style: normal;">(</tspan><tspan style="font-size: 30px; font-style: italic;">x</tspan><tspan style="font-size: 30px; font-style: normal;">)</tspan></text>
          <line x1="90" y1="52" x2="150" y2="52" style="stroke:black; stroke-width:2"/>
        </svg>
        | tiene una asíntota vertical en 
        | <span class="mib">x</span>
        | <span class="mnb"> = </span>
        | <span class="mib">c</span>.
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de la recta tangente
      p(style="margin-top: -40px; color: blue; text-align: left;").center Definición de la recta tangente con pendiente <span class="mib">m</span> 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">f</span> está definida en un intervalo abierto que contiene a <span class="mib">c</span> y además existe el límite
        <svg width="800" height="100">          
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">lím &ensp;&emsp; = lím &ensp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; = </tspan><tspan class="mib"> m</tspan></text>
          <text x="60" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">y</tspan>&ensp;&emsp;&emsp;&emsp;<tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">c</tspan><tspan class="mnb"> + </tspan><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mnb"> - </tspan><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">c</tspan><tspan class="mnb">)</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan>&ensp;&emsp;&emsp;&emsp;&emsp;&emsp;<tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan></text>
          <text x="5" y="70" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;">c</tspan>&ensp;&emsp;&emsp;&emsp;<tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;">c</tspan></text>
          <line x1="55" y1="42" x2="100" y2="42" style="stroke:black; stroke-width:2"/>
          <line x1="185" y1="42" x2="385" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        | entonces la recta que pasa por
        | <span class="mnb">(</span><span class="mib">c</span>, <span class="mib">f</span><span class="mnb">(</span><span class="mib">c</span><span class="mnb">))</span> y cuenta con una pendiente <span class="mib">m</span> es la recta tangente a la gráfica de <span class="mib">f</span> en el punto <span class="mnb">(</span><span class="mib">c</span>, <span class="mib">f</span><span class="mnb">(</span><span class="mib">c</span><span class="mnb">))</span>

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Derivada
      p(style="margin-top: -40px; color: blue; text-align: left;").center Definición de la derivada de una función 
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center La derivada de <span class="mib">f</span> en <span class="mib">x</span> esta dada por
        <svg width="800" height="100">          
          <text x="10" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">f '</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mnb"> = lím</tspan></text>
          <text x="160" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">c</tspan><tspan class="mnb"> + </tspan><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mnb"> - </tspan><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">c</tspan><tspan class="mnb">)</tspan></text>
          <text x="225" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan></text>
          <text x="90" y="70" font-size="20" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb">&Delta;</tspan><tspan class="mib">x</tspan>&rarr;<tspan style="font-size: 20px; font-style: italic;">c</tspan></text>
          <line x1="140" y1="42" x2="385" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        | siempre que exista es límite. Para todos los entonces la recta que pasa por
        | <span class="mib">x</span> para los que exista este límite, 
        | <span class="mib">f '</span> es una función de <span class="mib">x</span>.
        
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Reglas básicas de derivación
      p(style="margin-top: -40px; color: blue; text-align: left;").center Reglas básicas
      p(style="margin-top: -40px; color: black; border-style: solid; text-align: left; padding: 20px;").center
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">c</tspan><tspan class="mnb">] = 0</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="300" y="50" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla de la constante</tspan></text>
        </svg> 
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">x</tspan><tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n</tspan><tspan class="mnb">] = </tspan><tspan class="mib">nx</tspan><tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">n-1</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="300" y="55" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla de la potencia</tspan></text>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">cf</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)] = </tspan><tspan class="mib">cf '</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="300" y="55" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla del multiplo constante</tspan></text>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan> &pm; <tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)] = </tspan><tspan class="mib">f '</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan> &pm; <tspan class="mib">g'</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="500" y="55" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla de la suma y diferencia</tspan></text>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)] = </tspan><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mib">g'</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan> + <tspan class="mib">f '</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="600" y="55" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla del producto</tspan></text>
        </svg>
        <svg width="800" height="100">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan font-size="50" fill="black" font-weight="100" font-family="Times" >[</tspan>&emsp;&emsp;<tspan font-size="50" fill="black" font-weight="100" font-family="Times" >]</tspan><tspan class="mnb"> = </tspan>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;<tspan class="mnn">, </tspan>&ensp;<tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan> &NotEqual; <tspan class="mnb">0</tspan></text>
          <text x="130" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan>&emsp;&emsp;<tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mib">f '</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan> - <tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan><tspan class="mib">g'</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
          <text x="125" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan>&emsp;&emsp;&emsp;&emsp;&ensp;[<tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan>]<tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">2</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <line x1="115" y1="42" x2="180" y2="42" style="stroke:black; stroke-width:2"/>
          <line x1="230" y1="42" x2="480" y2="42" style="stroke:black; stroke-width:2"/>
          <text x="640" y="50" font-size="20" fill="black" font-weight="normal" font-family="Times"><tspan class="mnn">Regla del cociente</tspan></text>
        </svg>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -0px; color: green;").center Reglas básicas de derivación
      p(style="margin-top: -40px; color: blue; text-align: left;").center Derivadas de funciones trigonométricas
      p(style="margin-top: -10px; color: black; border-style: solid; text-align: left; padding: 20px;").center
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">sen</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">cos</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">cos</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">- cos</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">tan</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">sec</tspan><tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">2</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">cot</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">csc</tspan><tspan  baseline-shift="super"  style="font-size: 20px; font-style: italic;">2</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">sec</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">sec</tspan><tspan class="mib"> x</tspan><tspan class="mnb"> tan</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mnb">csc</tspan><tspan class="mib"> x</tspan><tspan class="mnb">] = </tspan><tspan class="mnb">- csc</tspan><tspan class="mib"> x</tspan><tspan class="mnb"> cot</tspan><tspan class="mib"> x</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>        
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Reglas de derivación
      p(style="margin-top: -40px; color: blue; text-align: left;").center Regla de la cadena
      p(style="margin-top: -10px; color: black; border-style: solid; text-align: left; padding: 20px;").center Si <span class="mib">y</span><span class="mnb"> = </span> <span class="mib">f</span><span class="mnb">(</span><span class="mib">x</span><span class="mnb">)</span>es una función derivable de <span class="mib">u</span> y además <span class="mib">u</span><span class="mnb"> = </span><span class="mib">g</span><span class="mnb">(</span><span class="mib">x</span><span class="mnb">)</span> es una función derivable de <span class="mib">x</span>, entonces <span class="mib">y</span><span class="mnb"> = </span><span class="mib">f</span><span class="mnb">(</span><span class="mib">g</span><span class="mnb">(</span><span class="mib">x</span><span class="mnb">))</span> es una función derivable de <span class="mib">x</span> y        
        <svg width="800" height="100">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mnb"> = </tspan>&ensp;&emsp;<tspan class="mnb"> · </tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dy</tspan>&ensp;&emsp;<tspan class="mib">dy</tspan>&emsp;<tspan class="mib">du</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan>&ensp;&emsp;<tspan class="mib">du</tspan>&emsp;<tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
          <line x1="130" y1="42" x2="170" y2="42" style="stroke:black; stroke-width:2"/>
          <line x1="190" y1="42" x2="230" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
        | o su equivalente
        <svg width="800" height="80">          
          <text x="100" y="50" font-size="30" fill="black" font-weight="bold" font-family="Times">[<tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">))] = </tspan><tspan class="mib">f '</tspan><tspan class="mnb">(</tspan><tspan class="mib">g</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">))</tspan><tspan class="mib">g'</tspan><tspan class="mnb">(</tspan><tspan class="mib">x</tspan><tspan class="mnb">)</tspan></text>
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">d</tspan></text>
          <text x="60" y="70" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">dx</tspan></text>
          <line x1="55" y1="42" x2="90" y2="42" style="stroke:black; stroke-width:2"/>
        </svg>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 6
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 6
      example-six(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 7
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 7
      example-seven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de una recta
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición 1</span>. Se llama ángulo de inclinación (&alpha;) de una recta al formado por la parte positiva del eje <span class="mib">X</span>y la recta, cuando esta se considera dirigida hacia arriba, por lo tanto, 0º &leq; &alpha; &leq; 180º.
      angulo-inclinacion-figura
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de una recta
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición 2</span>. Se llama pendiente de una recta dirigida a la tangente de su ángulo de inclinación, se denota <span class="mib">m</span>, por lo tanto, se expresa como <span class="mib">m = tan&alpha;</span>.
      p(style="margin-top: -0px; color: blue;") Consideraciones
      ul(style="margin-top: -0px; color: blue;") 
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">&alpha;</span> = 0º, entonces  <span style="font-family: roboto; font-weight: normal; font-style: italic;">m</span> = 0, es una recta coincidente o paralela al eje  <span style="font-family: roboto; font-weight: normal; font-style: italic;">x</span>, dirigida hacia la derecha.
        <br>
        li Si 0º &le; <span style="font-family: roboto; font-weight: normal; font-style: italic;">&alpha;</span> &le; 90º, entonces, <span style="font-family: roboto; font-weight: normal; font-style: italic;">m</span> es positiva.
        <br>
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">&alpha;</span> = 90º, entonces  <span style="font-family: roboto; font-weight: normal; font-style: italic;">m</span> no esta definida, es una recta coincidente o paralela al eje <span style="font-family: roboto; font-weight: normal; font-style: italic;">y</span>, dirigida hacia arriba.
        <br>
        li Si 90º &le; <span style="font-family: roboto; font-weight: normal; font-style: italic;">&alpha;</span> &le; 180º, entonces, <span style="font-family: roboto; font-weight: normal; font-style: italic;">m</span> es negativa.
        <br>
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">&alpha;</span> = 180º, entonces  <span style="font-family: roboto; font-weight: normal; font-style: italic;">m</span> = 0, es una recta coincidente o paralela al eje <span style="font-family: roboto; font-weight: normal; font-style: italic;">x</span>, dirigida hacia la izquierda.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de una recta
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 4</span>: <span style="font-family: roboto; font-size: 30px; font-weight: normal;">Si <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>),</span> son dos puntos diferentes cualesquiera de una recta, la pendiente  de la recta es: 
      pendiente-recta-formula
      p(style="margin-top: -0px; color: blue;") Demostración
      pendiente-recta-figura
      p(style="margin-top: -0px; color: blue;") Para el triángulo rectángulo, mostrado en la figura, cuyos vertices son <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>, <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>, <span class="mib">A</span>, tenemos que: 
      tangente-pendiente-formula
      p(style="margin-top: -0px; color: blue;") entonces 
      pendiente-recta-formula
  
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 8
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 8
      example-eight(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 9
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 9
      example-nine(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 10
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 10
      example-ten(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Ángulo entre dos rectas
      p(style="margin-top: -40px; color: blue;") Cuando dos rectas se cortan se forman dos pares de ángulos, iguales, opuestos por el vértice  
      angulo-dos-rectas
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 5</span>: El ángulo entre dos rectas dirigidas esta dado por 
      angulo-dos-rectas-formula
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin-top: -0px; color: blue;") Sea <span class="mib">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> una recta con ángulo de inclinación <span class="mib">&alpha;<sub style="font-size: 20px; font-style: normal;">1</sub></span> y <span class="mib">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> otra recta con ángulo de inclinación <span class="mib">&alpha;<sub style="font-size: 20px; font-style: normal;">2</sub></span> y <span class="mib">&theta;<sub style="font-size: 20px; font-style: normal;">1</sub></span> el ángulo entre ellas. 
      p(style="margin-top: -0px; color: blue;") En un triángulo un ángulo exterior es igual a la suma de sus ángulos internos opuestos
      angulo-externo-suma-internos
      p(style="margin-top: -0px; color: blue;") Aplicando la tangente tenemos que  
      angulo-externo-suma-tangente
      p(style="margin-top: -0px; color: blue;") utilizando la identidad trigonométrica   
      identidad-tangente-AminusB
      p(style="margin-top: -0px; color: blue;") tenemos que   
      identidad-tangente-teorema
      p(style="margin-top: -0px; color: blue;") por lo tanto   
      angulo-dos-rectas-formula
  
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Ángulo entre dos rectas
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Corolario 1</span>: La condición necesaria y suficiente para que dos rectas,  <span class="mib">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> y  <span class="mib">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> sean paralelas es que sus pendientes sean iguales, es decir  <span class="mib">m<sub style="font-size: 20px; font-style: normal;">1</sub></span> =  <span class="mib">m<sub style="font-size: 20px; font-style: normal;">2</sub></span> 
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Corolario 2</span>: La condición necesaria y suficiente para que dos rectas,  <span class="mib">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> y  <span class="mib">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> sean perpendiculares es que sus pendientes sean recíprocas y de signo contrario, es decir  <span class="mib">m<sub style="font-size: 20px; font-style: normal;">1</sub></span><span class="mib">m<sub style="font-size: 20px; font-style: normal;">2</sub></span> = <span class="mnb">-1</span>
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 11
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 11
      example-eleven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 12
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 12
      example-twelve(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 13
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 13
      example-thirteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px -30px 0px;").center Sección 2
      h3.center La recta
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") Lugar geométrico de los puntos, tales que tomados dos puntos diferentes cualesquiera <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>) del lugar, el valor de la pendiente<span class="mib">m</span> calculado por la formula del teorema 4
      pendiente-recta-formula
      p(style="margin-top: -40px; color: blue;") resulta siempre constante 
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Ecuación de la recta que pasa por un punto y tiene una pendiente dada
      p(style="margin-top: -40px; color: blue;") La ecuación de una recta puede estar perfectamente determinada si se conocen las coordenadas de uno de sus puntos y su ángulo de inclinación (y, por tanto, su pendiente)
      punto-pendiente-figura
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 6</span>: La recta que pasa por el punto dado <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>) y tiene pendiente <span class="mib">m</span>, tiene la ecuación 
      punto-pendiente-ecuacion
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin-top: 0px; color: blue;") Sea <span class="mib">P</span>(<span class="mib">x</span>,<span class="mib">y</span>), un punto cualquiera de la recta, diferente al punto dado <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>). por la definicion de la recta, las coordenadas del punto <span class="mib">P</span>(<span class="mib">x</span>,<span class="mib">y</span>) satisfacen la ecuación
      punto-pendiente-ecuacion-demo
      p(style="margin-top: -0px; color: blue;") Multiplicando la ecuación por el denominador  obtenemos
      punto-pendiente-ecuacion 
      p(style="margin-top: -0px; color: blue;") Reciprocamente, si las coordenadas de cualquier otro punto <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>) satisfacen la ecuación anterior, tenemos
      punto-pendiente-ecuacion-demo2
      p(style="margin-top: 0px; color: blue;") que es la expresión analítica de la definición de la recta,aplicada a los puntos <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>) y <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span class="mib">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span class="mib">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>). Por lo tanto, <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span> esta sobre la recta.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 14
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 14
      example-fourteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Ecuación de la recta dada su pendiente y su ordenada al origen
      p(style="margin-top: -40px; color: blue;") Como se conoce <span class="mib">b</span>, el punto cuyas coordenadas (<span class="mnb">0</span>,<span class="mib">b</span>) está sobre la recta . Por lo tanto, el problema se reduce a hallar la ecuación de la recta que pasa por un punto <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mnb">0</span>,<span class="mib">b</span>) y tiene una pendiente dada
      ordenada-pendiente-figura
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 7</span>: La recta cuya pendiente es <span class="mib">m</span>  y cuya ordenada al origen es <span class="mib">b</span> tiene por ecuación  
      ordenada-pendiente-ecuacion
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin: -10px 0px 0px 0px; color: blue;") Partiendo de la ecuación
      punto-pendiente-ecuacion
      p(style="margin: 0px 0px 10px 0px; color: blue;") Sustituimos el punto <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mnb">0</span>, <span class="mib">b</span>), entonces 
      ordenada-pendiente-ecuacion-demo
      p(style="margin: 0px 0px 0px 0px; color: blue;") Ordenando tenemos
      ordenada-pendiente-ecuacion 
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="margin: 0 0 20px 0;  border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 15
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 15
      example-fifteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Ecuación de la recta en forma simétrica
      p(style="margin-top: -40px; color: blue;") Se puede obtener la ecuación de la recta cuando se conocen los puntos de interseccion de la recta con los ejes
      ecuacion-simetrica-figura
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 8</span>: La recta cuyas intercepciones con los ejes <span class="mib">x</span> y <span class="mib">y</span>  son <span class="mib">a</span>&ne; <span class="mnb">0</span> y <span class="mib">b</span> &ne; <span class="mnb">0</span> respectivamente, tiene por ecuación  
      ecuacion-simetrica
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin: -10px 0px 0px 0px; color: blue;") Sea <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">a</span>, <span class="mnb">0</span>) y <span class="mib">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span class="mnb">0</span>, <span class="mib">b</span>) los puntos de intersección de la recta con los ejes coordenados, la pendiente de la recta esta dada por
      pendiente-simetrica-demo
      p(style="margin: 0px 0px 10px 0px; color: blue;") Sustituimos en la forma punto pendiente usando el punto <span class="mib">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span class="mib">a</span>, <span class="mnb">0</span>), entonces 
      punto-pendiente-simetrica-demo
      p(style="margin: 0px 0px 10px 0px; color: blue;") Dividiendo entre <span class="mib">ab</span>, tenemos 
      ecuacion-simetrica
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="margin: 0 0 20px 0;  border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 16
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 16
      example-sixteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Ecuación de la recta, forma general
      p(style="margin-top: -40px; color: blue;") Esta forma resulta al desarrollar cualquiera de las formas anteriores hasta expresarla en la forma
      general-ecuacion
      p(style="margin-top: 10px; color: blue;") En donde <span class="mib">A</span> y <span class="mib">B</span> pueden ser difrerentes de cero, o bien, <span class="mib">A</span> o <span class="mib">B</span>, pueden ser cero y <span class="mib">C</span> puede tomar cualquier valor incluyendo cero.
      p(style="margin-top: -0px; color: blue;") Consideraciones  
      p(style="margin-top: -0px; color: blue;") + Si <span class="mib">A</span><span class="mnb"> = 0</span>, <span class="mib">y</span><span class="mnb"> = </span><span class="mib">-C/B</span> la recta es paralela al eje <span class="mib">x</span>  
      p(style="margin-top: -0px; color: blue;") + Si <span class="mib">B</span><span class="mnb"> = 0</span>, <span class="mib">x</span><span class="mnb"> = </span><span class="mib">-C/A</span> la recta es paralela al eje <span class="mib">y</span>
      p(style="margin-top: -0px; color: blue;") + Si despejamos y de la ecuación general, la ecuación toma la forma de ordenada al origen, es decir <span class="mib">y</span><span class="mnb"> = </span><span class="mib">-(A/B)x - C/B</span> en donde  <span class="mib">m</span><span class="mnb"> = -</span><span class="mib">A/B</span> y la ordenada al origen <span class="mib">b</span><span class="mib"> = -</span><span class="mib">C/B</span>  
      p(style="margin-top: -0px; color: blue;") + Si a la forma general le damos la forma simétrica, tenemos   
      simetrica-ecuacion-general
      p(style="margin-top: -0px; color: blue;") entonces las intersecciones con los ejes coordenados estan dados por (<span class="mib">-C/A</span>, <span class="mnb">0</span>)  y (<span class="mnb">0</span>, <span class="mib">-C/B</span>)
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="margin: 0 0 20px 0;  border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 17
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 17
      example-seventeen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Posiciones relativas de dos rectas
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 9</span>: Si las ecuaciones de dos rectas son<br> &emsp;&emsp;<span class="mib">Ax + By + C = 0</span>&emsp;&emsp; y &emsp;&emsp;<span class="mib">A'x + B'y + C = 0</span>, <br>Las relaciones siguientes son condiciones necesarias y suficientes para  
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">a)</span> Paralelismo: <span class="mib">A/A'</span> = <span class="mib">B/B'</span>, o bien, <span class="mib">AB' - A'B</span><span class="mnb"> = 0</span>  
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">b)</span> Perpendicularidad: <span class="mib">AA' +BB'</span><span class="mnb"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">c)</span> Coincidencia: <span class="mib">A</span><span class="mnb"> = </span><span class="mib">kA</span>;&emsp;<span class="mib">B</span><span class="mnb"> = </span><span class="mib">kB</span>&emsp; y&emsp; <span class="mib">C</span><span class="mnb"> = </span><span class="mib">kC</span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">d)</span> Intersección en uno y solamente un punto: <span class="mib">A/A' &ne; B/B'</span>, o bien <span class="mib">AB' - A'B &ne; 0</span>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="margin: 0 0 20px 0;  border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 18
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 18
      example-eighteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 19
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 19
      example-nineteen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 20
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 20
      example-twenty(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
    
    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 21
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 21
      example-twentyOne(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 22
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 22
      example-twentyTwo(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 23
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 23
      example-twentyThree(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 24
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 24
      example-twentyFour(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 25
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 25
      example-twentyFive(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 26
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 26
      example-twentySix(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Sección 3
      h5(style="margin-top: -20px; color: green;").center La circunferencia
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>: Se llama circunferencia al conjunto de puntos en el plano tal que su distancia a un punto fijo del plano es siempre la misma. El punto fijo del plano se llama centro y la distancia constante se llama radio.  
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Forma ordinaria de la circunferencia
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 10</span>: La ecuación de la circunferencia con centro en <span class="mib">C(h, k)</span> y radio <span class="mib">r</span> esta dada por   
      
      p(style="margin-top: -0px; color: blue;").center <span class="mib">(x - h)<sup style="font-size: 20px; font-style: normal;">2</sup> + (y - k)<sup style="font-size: 20px; font-style: normal;">2</sup> = r<sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;") Demostración: 
      p(style="margin-top: -20px; color: blue;") Sea <span class="mib">P(x,y)</span> un punto cualquiera del conjunto y sea <span class="mib">c(h, k)</span> el centro de la circunferencia con radio <span class="mib">r</span>. De acuerdo con la definición,
      p(style="margin-top: -0px; color: blue;").center |<span style="font-family: roboto; font-weight: bold; font-style: italic; text-decoration:overline;">PC</span>| = <span class="mib">r</span>
      p(style="margin-top: -20px; color: blue;") como
      p(style="margin-top: -0px; color: blue;").center |<span style="font-family: roboto; font-weight: bold; font-style: italic; text-decoration:overline;">PC</span>|<span class="mib"><sup style="font-size: 20px; font-style: normal;">2</sup> = </span><span class="mib">(x - h)<sup style="font-size: 20px; font-style: normal;">2</sup> + (y - k)<sup style="font-size: 20px; font-style: normal;">2</sup> = r<sup style="font-size: 20px; font-style: normal;">2</sup></span>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 27
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 27
      example-twentySeven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 28
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 28
      example-twentyEight(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 29
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 29
      example-twentyNine(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Forma general de la ecuación de la circunferencia
     
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">C</span>
        <span class="mib">x</span>
        <span class="mnb">+</span>
        <span class="mnb">D</span>
        <span class="mib">y</span>
        <span class="mnb">+</span>
        <span class="mib">E</span>
        <span class="mnb"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") Desarrolando la ecuación en la forma ordinaria   
      
      p(style="margin-top: -0px; color: blue;").center <span class="mnb">(</span>
        <span class="mib">x</span>
        <span class="mnb">-</span>
        <span class="mib">h</span>
        <span class="mnb">)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mnb">(</span>
        <span class="mib">y</span>
        <span class="mnb"> - </span>
        <span class="mib">k</span>
        <span class="mnb">)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = </span>
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">-</span>
        <span class="mnb">2</span>
        <span class="mib">hx</span>
        <span class="mnb">+</span>
        <span class="mib">h</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> - </span>
        <span class="mnb">2</span>
        <span class="mib">ky</span>
        <span class="mnb"> + </span>
        <span class="mib">k</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = </span>
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">-</span>
        <span class="mnb">2</span>
        <span class="mib">hx</span>
        <span class="mnb"> - </span>
        <span class="mnb">2</span>
        <span class="mib">ky</span>
        <span class="mnb">+</span>
        <span class="mib">h</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">k</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> - </span>
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") Entonces  
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mnb"> C = -2</span>
        <span class="mib">h</span>,&emsp;
        <span class="mnb"> D = -2</span>
        <span class="mib">k</span>,&emsp;
        <span class="mnb"> E = </span>
        <span class="mib">h</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">k</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> - </span>
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 11</span>:<br>La ecuación 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">C</span>
        <span class="mib">x</span>
        <span class="mnb">+</span>
        <span class="mnb">D</span>
        <span class="mib">y</span>
        <span class="mnb">+</span>
        <span class="mib">E</span>
        <span class="mnb"> = 0</span> representa una circunferencia con centro en  
        <span class="mnb">(h, k) = (-C/2, -D/2)</span> y radio 
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = (-</span>
        <span class="mib">E</span>
        <span class="mnb"> + </span>
        <span class="mnb">C</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mnb">D</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">)</span>
        <span class="mnb">/4</span>
      
      p(style="margin-top: -0px; color: blue;") <Bf> Demostración </bf>   
      p(style="margin-top: -0px; color: blue;") Ahora si se realiza el proceso en partiendo de la forma general  
      
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">C</span>
        <span class="mib">x</span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">D</span>
        <span class="mib">y</span>
        <span class="mnb"> = -</span>
        <span class="mib">E</span>
      
      p(style="margin-top: -0px; color: blue;") Completando trinomios  cuadrado perfecto
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">x</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">C</span>
        <span class="mib">x</span>
        <span class="mnb"> + </span>
        <span class="mnb">(C/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mib">y</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">+</span>
        <span class="mnb">D</span>
        <span class="mib">y</span>
        <span class="mnb"> + </span>
        <span class="mnb">(D/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = -</span>
        <span class="mib">E</span>
        <span class="mnb"> + </span>
        <span class="mnb">(C/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mnb">(D/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mnb">(</span>
        <span class="mib">x</span>
        <span class="mnb">+</span>
        <span class="mnb">C/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + (</span>
        <span class="mib">y</span>
        <span class="mnb">+</span>
        <span class="mnb">D/2)</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = (-</span>
        <span class="mib">E</span>
        <span class="mnb"> + </span>
        <span class="mnb">C</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mnb">D</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">)</span>
        <span class="mnb">/4</span>
      

      p(style="margin-top: -20px; color: blue;") Entonces
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mnb">(h, k) = (-C/2, -D/2)</span>
      p(style="margin-top: -0px; color: blue;").center 
        <span class="mib">r</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> = (-</span>
        <span class="mib">E</span>
        <span class="mnb"> + </span>
        <span class="mnb">C</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb"> + </span>
        <span class="mnb">D</span>
        <span class="mnb"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span class="mnb">)</span>
        <span class="mnb">/4</span>
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
        
    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 30
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 30
      example-thirty(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 31
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 31
      example-thirtyOne(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 32
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 32
      example-thirtyTwo(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 33
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 33
      example-thirtyThree(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 34
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 34
      example-thirtyFour(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 35
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 35
      example-thirtyFive(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 36
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 36
      example-thirtySix(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 37
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 37
      example-thirtySeven(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 38
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 38
      example-thirtyEight(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 39
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 39
      example-thirtyNine(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 40
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 40
      example-forty(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      .center
        h3 References
        p Geometría analítica. Lemhann
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com, gustavo@gusbits.com
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Límites, Reglas basicas de derivación',
    description: 'Limits, basic derivatives',
    path: 'DifferentialCalculusI',
    course: 'Differential calculus',
    part: 1
  },
  components: {
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
    'example-twentyOne': require('./components/ExampleTwentyOne'),
    'example-twentyTwo': require('./components/ExampleTwentyTwo'),
    'example-twentyThree': require('./components/ExampleTwentyThree'),
    'example-twentyFour': require('./components/ExampleTwentyFour'),
    'example-twentyFive': require('./components/ExampleTwentyFive'),
    'example-twentySix': require('./components/ExampleTwentySix'),
    'example-twentySeven': require('./components/ExampleTwentySeven'),
    'example-twentyEight': require('./components/ExampleTwentyEight'),
    'example-twentyNine': require('./components/ExampleTwentyNine'),
    'example-thirty': require('./components/ExampleThirty'),
    'example-thirtyOne': require('./components/ExampleThirtyOne'),
    'example-thirtyTwo': require('./components/ExampleThirtyTwo'),
    'example-thirtyThree': require('./components/ExampleThirtyThree'),
    'example-thirtyFour': require('./components/ExampleThirtyFour'),
    'example-thirtyFive': require('./components/ExampleThirtyFive'),
    'example-thirtySix': require('./components/ExampleThirtySix'),
    'example-thirtySeven': require('./components/ExampleThirtySeven'),
    'example-thirtyEight': require('./components/ExampleThirtyEight'),
    'example-thirtyNine': require('./components/ExampleThirtyNine'),
    'example-forty': require('./components/ExampleFourty'),
    'funcionDiagram': require('./components/funcionDiagram'),
    'limite': require('./components/Limite'),
    'coord-unidim': require('./components/coordUnidimensional'),
    'distancia-formula': require('./components/distanciaFormula'),
    'demo-points': require('./components/demoDistPoints'),
    'demo-dist': require('./components/demoDistancia'),
    'demo-dist-conclusion': require('./components/distPointConclusion'),
    'coord-bidim': require('./components/coordBidimensional'),
    'distancia-formula-bidim': require('./components/distanciaFormulaBidim'),
    'demo-dist-bidim': require('./components/demoDistBidim'),
    'demo-dist-catetos': require('./components/demoDistCatetos'),
    'demo-dist-bidim-conclusion': require('./components/distPointBidimConclusion'),
    'razon-division-segmento': require('./components/razonDivisionSegmento'),
    'razon-division-segmento-demo': require('./components/razonDivisionSegmentoDemo'),
    'razon-division-segmento-punto-medio': require('./components/razonDivisionPuntoMedio'),
    'angulo-inclinacion-figura': require('./components/anguloInclinacionFig'),
    'pendiente-recta-formula': require('./components/pendienteRectaFormula'),
    'pendiente-recta-figura': require('./components/pendienteRectaFig'),
    'tangente-pendiente-formula': require('./components/tangentePendienteFormula'),
    'angulo-dos-rectas': require('./components/anguloDosRectas'),
    'angulo-dos-rectas-formula': require('./components/anguloRectasFormula'),
    'angulo-externo-suma-internos': require('./components/anguloExternoSumaInternos'),
    'angulo-externo-suma-tangente': require('./components/anguloExternoSumaTangente'),
    'identidad-tangente-AminusB': require('./components/identidadTangenteXmenosY'),
    'identidad-tangente-teorema': require('./components/identidadTangenteTeorema'),
    'punto-pendiente-figura': require('./components/puntoPendienteFig'),
    'punto-pendiente-ecuacion': require('./components/puntoPendienteEcuacion'),
    'punto-pendiente-ecuacion-demo': require('./components/puntoPendienteDemoEcu'),
    'punto-pendiente-ecuacion-demo2': require('./components/puntoPendienteDemoEcu2'),
    'ordenada-pendiente-figura': require('./components/ordenadaPendienteFig'),
    'ordenada-pendiente-ecuacion': require('./components/ordenadaPendienteEcuacion'),
    'ordenada-pendiente-ecuacion-demo': require('./components/ordenadaPendienteDemoEcu'),
    'ecuacion-simetrica-figura': require('./components/ecuacionSimetricaFig'),
    'ecuacion-simetrica': require('./components/simetricaEcuacion'),
    'pendiente-simetrica-demo': require('./components/pendienteSimetricaDemo'),
    'punto-pendiente-simetrica-demo': require('./components/puntoPendienteSimetricaDemo'),
    'general-ecuacion': require('./components/generalEcuacion'),
    'simetrica-ecuacion-general': require('./components/simetricaEcuacionGeneral'),
    'spring-mass': require('./components/SpringMass'),
    'displacement-plot': require('./components/DisplacementPlot'),
    'torsion-pendulum': require('./components/TorsionPendulum')
  },
  data: function () {
    return {
      tiempo: '',
      theme: 'Concepts and the straight line',
      isSpanish: true,
      languages: ['Inglés', 'Español'],
      topics: ['Inicio', 'Temas', 'Funciones', 'Limites', 'Continuidad', 'Derivada por definicion', 'Reglas básicas', 'Funciones trascendentes', 'Bibliografía'],
      page: [1, 2, 3, 5, 7, 8, 12, 17, 23, 28, 31, 37, 47, 64]
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

.mib
{
  font-family: roboto;
  font-weight: bold;
  font-style: italic;
}
.min
{
  font-family: roboto;
  font-weight: bold;
  font-style: italic;
}
.mnn
{
  font-family: roboto;
  font-weight: normal;
  font-style: normal;
}
.mnb
{
  font-family: roboto;
  font-weight: bold;
  font-style: normal;
}

</style>
