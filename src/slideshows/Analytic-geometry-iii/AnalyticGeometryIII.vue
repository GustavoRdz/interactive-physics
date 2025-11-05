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
        h4(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Hipérbola, coordenadas polares
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
            <b>Definición de laHipérbola</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Elementos de la hipérbola</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Formas de la ecuación de la Hiperbola: ordinarias, general</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutTop')
          p(v-if="step >= 1")
            <b>Coordenadas porlaes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Transformaciones entre sistemas coordenados</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Trazado de curvas en coordenadas polares</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px -30px 0px;").center Sección 1
      h3.center La Hipérbola
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") Lugar geométrico de un punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">x, </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span><span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span> que se mueve en un plano <span style="font-family: roboto; font-weight: bold; font-style: italic;">xy</span>, de tal manera el valor absoluto de las distancias de sus distancias a dos puntos fijos <span style="font-family: roboto; font-weight: bold; font-style: italic;">f</span><span style="font-family: roboto; font-weight: bold; font-size: 20px; font-style: normal;"><sub>1</sub></span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">f</span><span style="font-family: roboto; font-weight: bold; font-size: 20px; -font-style: normal;"><sub>2</sub></span>, del plano, llamados focos, es siempre igual a una cantidad constante, la cual es positiva y menor que la distancia entre los focos.
      // f1_parabolaDef
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Elementos de la Hipérbola
      p.center Sea L, la recta fija llamada directriz y f  el punto fijo llamado foco, a partir de estos y del lugar geometrico, sus principales elementos son:
      ol 
        li <span style="color: #00aa00;"><b>Eje focal</b></span> es la recta perpendicular que pasa por los focos.
        li <span style="color: #0000aa;"><b>Vértices</b></span> puntos de la hipérbola que cortan al eje focal.
        li <span style="color: #aaaa00;"><b>Eje transverso</b></span> segmento comprendido entre los vertices.
        li <span style="color: #00aaaa;"><b>Centro</b></span> punto medio del segmento que une los vertices.
        li <span style="color: #aa00aa;"><b>Eje normal</b></span> recta que pasa por el centro y es perpendicular al eje focal.
        li <span style="color: #aaaaaa;"><b>Eje conjugado</b></span> segmento sobre el eje normal que tiene al centro como punto medio.
      .center
        f2_parabolaElem
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Primera forma ordinaria de la hipérbola
      // E1_parabolaPrimeraOrd
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
          </g>
        </svg>
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

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Asíntotas de una hipérbola
      // E1_parabolaPrimeraOrd
      p(style="margin-top: 0px; color: blue;") La hipérbola 
      p(style="margin-top: 0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      p(style="margin-top: -0px; color: blue;") tiene asistotas <span style="font-family: roboto; font-weight: bold; font-style: italic;">bx</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">ay</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">bx</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">ay</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>  
      p(style="margin-top: -0px; color: blue;") La hipérbola 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
          </g>
        </svg>
      p(style="margin-top: -0px; color: blue;") tiene asistotas <span style="font-family: roboto; font-weight: bold; font-style: italic;">ax</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">by</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">ax</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">by</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>  
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

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Primera forma ordinaria de la hipérbola
      // E1_parabolaPrimeraOrd
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="5" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">x</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="95" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">y</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">k</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
       

            <line  x1="5" y1="40" x2="85" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="115" y1="40" x2="195" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="30" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="140" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="205" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="5" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">y</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">k</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="95" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> - </text>    

            <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">x</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
       

            <line  x1="5" y1="40" x2="85" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="115" y1="40" x2="195" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="30" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="140" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="205" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown', :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px;").center Forma canonica de la ecuacion de la parabola
      h5(style="margin: -50px 0 0px 0;").center o primera forma ordinaria de la parabola
      // f3_parabolaVertical

      E2_parabolaPrimeraOrd
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -10px;") Graficador
      p(style="margin: 0 0 -0px 0;").center 
      // f4_parabolaGraficador      
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

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin-top: -20px; color: green;").center Forma general de la ecuación de la parábola
     
      p(style="margin-top: -0px;") <span style="font-family: roboto; font-weight: bold; font-style: normal;">Teorema: </span>Una ecuación de segundo grado en las variables <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span> que carescan del termino <span style="font-family: roboto; font-weight: bold; font-style: italic;">xy</span>, puede escribirse de la forma: 
        
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Ax</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Cy</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">F</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>

      p(style="margin-top: -0px;") En donde   
      
      p(style="margin-top: -0px;") Si 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>; 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> &ne; 0</span> y 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> &ne; 0</span> la ecuación representa una parábola cuyo eje focal es paralelo o coincidente con el eje 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">X</span>. Si
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, entonces, la ecuación, 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Cy</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Ey</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">F</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, puede representar dos rectas diferentes paralelas al eje 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">X</span>, dos rectas coincidentes paralelas al eje
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">X</span> o nungún lugar geométrico, dependiendo de la naturaleza de sus raices.
      
      p(style="margin-top: -0px;") Si 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> &ne; 0</span>; 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span> y 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> &ne; 0</span> la ecuación representa una parábola cuyo eje focal es paralelo o coincidente con el eje 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Y</span>. Si
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, entonces, la ecuación, 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Ax</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Dx</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">F</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, puede representar dos rectas diferentes paralelas al eje 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Y</span>, dos rectas coincidentes paralelas al eje
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">Y</span> o nungún lugar geométrico, dependiendo de la naturaleza de sus raices.
  
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 5
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 5
      example-five(:language='isSpanish')
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


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: 0px 0px -30px 0px;").center Sección 2
      h3.center La elipse
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición</span>
      p(style="margin-top: 0px; color: blue;") Es un conjunto de puntos en el plano tal que, al tomar cualquier punto del conjunto, la suma de sus distancias a dos puntos fijos en el plano es siempre igual a una constante, mayor que la distancia entre los dos puntos.
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Primera forma ordinaria de la elipse</span>
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> + </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      p(style="margin-top: -0px; color: blue;") Eje focal sobre el eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span> 
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="15" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">x</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="50" y="48" font-size="30" fill="black" font-weight="bold" font-family="Times"> + </text>    

            <text x="87" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">y</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="40" x2="35" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="80" y1="40" x2="110" y2="40" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="10" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="87" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="120" y="47" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      //- f1_parabolaDef
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;    

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(style="margin-top: -20px;") Elementos de la elipse
      p.center
      ol 
        li Los puntos fijos mencionados se llaman <span style="color: #00aa00;"><b>focos</b></span>.
        li La recta que pasa por los dos focos se llama <span style="color: #0000aa;"><b>eje focal</b></span>.
        li El eje focal intersecta a la elipse es dos puntos llamados <span style="color: #aaaa00;"><b>vertices</b></span>.
        li El segmento del eje focal entre los vertices se llama <span style="color: #00aaaa;"><b>eje mayor</b></span>.
        li El punto medio entre los focos se llama <span style="color: #aa00aa;"><b>centro</b></span>.
        li La recta perpendicular al eje focal que pasa por el centro se llama <span style="color: #aaaaaa;"><b>eje normal</b></span>.
        li El eje normal intersecta a la elipse en dos puntos, el segmento el segmento que une esos dos puntos se llama <span style="color: #00aa00;"><b>eje menor</b></span>.
        li El segmento que une dos puntos de la elipse se llama <span style="color: #0000aa;"><b>cuerda</b></span>.
        li La cuerda que pasa por el foco se llama <span style="color: #aaaa00;"><b>cuerda focal</b></span>.
        li La cuerda focal perpendicular al eje focal se llama <span style="color: #00aaaa;"><b>lado recto</b></span>.
        li Una cuerda que pasa por el centro se llama <span style="color: #aa00aa;"><b>diámetro</b></span>.
        li Si <span style="color: #000000;"><b>P</b></span> es es un punto cualquiera de la elipse, los segmentos que unen a <span style="color: #000000;"><b>P</b></span> con los focos se llaman <span style="color: #aaaaaa;"><b>radio vectores</b></span>
      .center
        //- f2_parabolaElem
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
      h5(style="margin-top: -20px; color: green;").center Segunda forma ordinaria de la elipse
      p(style="margin-top: -0px; color: blue;") La ecuación de la elipse con centro en <span style="font-family: roboto; font-weight: bold; font-style: italic;">C(h, k)</span> y eje focal paralelo al eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> está dada por   
      
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="5" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">x</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="92" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"> + </text>    

            <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">y</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">k</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="45" x2="80" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="120" y1="45" x2="195" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="30" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="150" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="210" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      
      p(style="margin-top: -0px; color: blue;") La ecuación de la elipse con centro en <span style="font-family: roboto; font-weight: bold; font-style: italic;">C(h, k)</span> y eje focal paralelo al eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span> está dada por   
      
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 100" height="100px" width="250px" >
       
          <g transform="translate(0, 0)">    
            <text x="5" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">x</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">h</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="92" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"> + </text>    

            <text x="120" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: normal;">(</tspan><tspan style="font-style: italic;">y</tspan><tspan style="font-style: normal;"> - </tspan><tspan style="font-style: italic;">k</tspan><tspan style="font-style: normal;">)</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <line  x1="5" y1="45" x2="80" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            <line  x1="120" y1="45" x2="195" y2="45" fill="none" stroke="#000" stroke-width="3"stroke-linecap="round"/>
            
            <text x="30" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">b</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>

            <text x="150" y="75" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">a</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan></text>
          
            <text x="210" y="53" font-size="30" fill="black" font-weight="bold" font-family="Times"> = 1</text>    
            
          </g>

        </svg>
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
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
      h5(style="margin-top: -20px; color: green;").center Forma general de la elipse
      p(style="margin-top: -0px; color: blue;") La ecuación   
      
      p(style="margin-top: -0px; color: blue;").center 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 50" height="50px" width="400px" >
       
          <g transform="translate(0, 0)">    
            <text x="5" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan style="font-style: italic;">Ax</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan><tspan style="font-style: normal;"> + </tspan><tspan style="font-style: italic;">Cy</tspan><tspan baseline-shift = "super" style="font-size: 18px;">2</tspan><tspan style="font-style: normal;"> + </tspan><tspan style="font-style: italic;">Dx</tspan><tspan style="font-style: normal;"> + </tspan><tspan style="font-style: italic;">Ey</tspan><tspan style="font-style: normal;"> + </tspan><tspan style="font-style: italic;">F</tspan><tspan style="font-style: normal;"> = 0</tspan></text>
          </g>
        </svg>
      
      p(style="margin-top: -0px; color: blue;") Representa una elipse con eje focal paralelo o sobre los ejes coordenados o un punto en el plano, o ningún lugar geométrico real, siempre y cuando <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">C</span> sean del mismo signo   
            
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
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

    slide.boredYet(enter='bounceInDown' , :keyboardNavigation='false' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 17
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 17
      example-seventeen(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
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

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'La hipérbola y coordenadas polares',
    description: 'The Hyperbolae, Polar coordinates',
    path: 'AnalyticGeometryIII',
    course: 'Analytic Geometry',
    part: 3
  },
  components: {
    // 'f1_parabolaDef': require('./components/f1_parabolaDefinicion'),
    // 'f2_parabolaElem': require('./components/f2_parabolaElementos'),
    // 'E1_parabolaPrimeraOrd': require('./components/E1_parabolaPrimeraOrdinaria'),
    // 'f3_parabolaVertical': require('./components/f3_parabolaVertical'),
    // 'E2_parabolaPrimeraOrd': require('./components/E2_parabolaPrimeraOrdinaria'),
    // 'f4_parabolaGraficador': require('./components/f4_parabolaGraficador'),
    // 'f5_parabola2ord': require('./components/f5_parabola2ord'),
    // 'f6_parabola2ordV': require('./components/f6_parabola2ordV'),
    // 'f7_parabolaGraficador2': require('./components/f7_parabolaGraficador2'),
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
      topics: ['Inicio', 'Temas', 'Hipérbola', 'Coordenadas polares', 'Bibliografía'],
      page: [1, 2, 3, 32, 32]
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
