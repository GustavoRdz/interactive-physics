a<template lang="pug">
#OscillatoryMotion.eg-theme-agrume
  .eg-slideshow
    div(style="width: 100%; display: flex; flex-wrap: wrap; align-items: center;").container.center
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}
    
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      //- img(src='./assets/Logo-FIME copy.svg' height='820px' style="margin: -10 0 50px 0;")
      .center.frontpage
        h2(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;") Analytic Geometry
        h2(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;") Geometría Analítica
        // img(src='./assets/frontImage.svg')
        img(src='./assets/U.svg')
        // spring-mass
        
        //- simple-pendulum
        //- spring-mass

        h4(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") General concepts and the rect line
        h4(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Conceptos generales y la línea recta 
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
            <b>Segmento rectilíneo dirigido</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Sistema coordenado unidimensional, bidimensional</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Distancia entre dos puntos</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutTop')
          p(v-if="step >= 1")
            <b>División de segmentos en una razón dada</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Pendiente de la recta</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Ángulo entre dos rectas</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Distancia de un punto a una recta</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Diferentes formas de la ecuación de la recta</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Posiciones relativas de dos rectas</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Segmento rectilíneo dirigido
      p(style="margin-top: -40px; color: blue;").center Se llama segmento rectilíneo a la porción de una línea recta comprendida entre dos de sus puntos, llamados extremos del segmento. 
      segment
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Longitud de un segmento rectilíneo dirigido
      p(style="margin-top: -40px; color: blue;").center <span style='font-weight: bold; font-size: 40px;'>Positiva</span>, segmento dirigido en el sentido de la recta. 
      p(style="margin-top: -40px; color: blue;").center <span style='font-weight: bold; font-size: 40px;'>Negativa</span>, segmento dirigido en el sentido opuesto de la recta. 
      longitud
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Sistema coordenado unidimensional
      p(style="margin-top: -40px; color: blue;") Este sistema se representa gráficamente con una recta, donde se coloca un punto de referencia llamado origen.
      p(style="margin-top: -0px; color: blue;") Cualquier valor sobre el eje se hace referencia a través de una variable, por ejemplo <span style="font-family: Times; font-style: italic; font-weight: bold;">x</span>.
      coord-unidim
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Distancia entre dos puntos
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 1</span>: <span style="font-family: roboto; font-size: 30px; font-weight: normal;">La distancia entre dos puntos <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>), en un sistema de coordenadas unidimensionales se define como el valor absoluto de la longitud del segmento rectilíneo.</span> 
      p(style="margin-top: -0px; color: blue;") Se expresa como:
      distancia-formula
      p(style="margin-top: -0px; color: blue;") Demostración
      p(style="margin-top: -0px; color: blue;") Colocando los puntos P1 y P2 en un sistema coordenado lineal
      demo-points
      p(style="margin-top: -0px; color: blue;") Tenemos que
      demo-dist
      p(style="margin-top: -0px; color: blue;") Por lo tanto la distancia entre dos puntos es 
      demo-dist-conclusion
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Sistema coordenado bidimensional
      p(style="margin-top: -40px; color: blue;") El sistema coordenado rectagular consta de dos rectas dirigidas, perpendiculares entre si, llamadas ejes de coordenadas.
      coord-bidim
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Distancia entre dos puntos
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 2</span>: <span style="font-family: roboto; font-size: 30px; font-weight: normal;">Dados dos puntos cualsequiera <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>), la distancia esta dada por</span> 
      p(style="margin-top: -0px; color: blue;") Se expresa como:
      distancia-formula-bidim
      p(style="margin-top: -0px; color: blue;") Demostración
      p(style="margin-top: -0px; color: blue;") Colocando los puntos <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span> en un sistema coordenado, se construye un triángulo rectángulo
      demo-dist-bidim
      p(style="margin-top: -0px; color: blue;") Analizamos las distancias entre los punto en cada eje o cateto del triángulo
      demo-dist-catetos
      p(style="margin-top: -0px; color: blue;") usando el teorema de pitágoras 
      demo-dist-bidim-conclusion
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
      h4(style="margin-top: -20px; color: green;").center División de un segmento en una razón dada
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 3</span>: <span style="font-family: roboto; font-size: 30px; font-weight: normal;">Si <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>),</span> son los exteremos del segmento <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>,las coordenadas, (<span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>) de un punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span> que divide al segmento  en la razón <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span> <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="text-decoration-line: overline"><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<span style="font-style: normal;">1</span></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span></span>/<span style="text-decoration-line: overline"><span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<span style="font-style: normal;">2</span></span></span> son:
      razon-division-segmento
      p(style="margin-top: -0px; color: blue;") Demostración
      razon-division-segmento-demo
      p(style="margin-top: -0px; color: blue;") Consideraciones
      ul(style="margin-top: -0px; color: blue;") 
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">r</span> &gt; 0, el punto <span style="font-family: roboto; font-weight: normal; font-style: italic;">P</span> que divide el segmento está dentro del segmento <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>.
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">r</span> &lt; 0 el punto <span style="font-family: roboto; font-weight: normal; font-style: italic;">P</span> que divide el segmento es externo al segmento <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>.
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">r</span> = 1 el punto <span style="font-family: roboto; font-weight: normal; font-style: italic;">P</span> que divide el segmento es el punto medio del segmento <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span> y sus coordenadas son .
          razon-division-segmento-punto-medio
        li Si <span style="font-family: roboto; font-weight: normal; font-style: italic;">r</span> = -1 el punto <span style="font-family: roboto; font-weight: normal; font-style: italic;">P</span> que divide el segmento está sobre uno de los extremos del segmento <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>.
      //- .center
      //-   img(width="400px" src='./assets/motor vocho.gif')
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

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de una recta
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición 1</span>. Se llama ángulo de inclinación (&alpha;) de una recta al formado por la parte positiva del eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">X</span>y la recta, cuando esta se considera dirigida hacia arriba, por lo tanto, 0º &leq; &alpha; &leq; 180º.
      angulo-inclinacion-figura
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=0, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -20px; color: green;").center Pendiente de una recta
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Definición 2</span>. Se llama pendiente de una recta dirigida a la tangente de su ángulo de inclinación, se denota <span style="font-family: roboto; font-weight: bold; font-style: italic;">m</span>, por lo tanto, se expresa como <span style="font-family: roboto; font-weight: bold; font-style: italic;">m = tan&alpha;</span>.
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
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 4</span>: <span style="font-family: roboto; font-size: 30px; font-weight: normal;">Si <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>),</span> son dos puntos diferentes cualesquiera de una recta, la pendiente  de la recta es: 
      pendiente-recta-formula
      p(style="margin-top: -0px; color: blue;") Demostración
      pendiente-recta-figura
      p(style="margin-top: -0px; color: blue;") Para el triángulo rectángulo, mostrado en la figura, cuyos vertices son <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span>, tenemos que: 
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
      p(style="margin-top: -0px; color: blue;") Sea <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> una recta con ángulo de inclinación <span style="font-family: roboto; font-weight: bold; font-style: italic;">&alpha;<sub style="font-size: 20px; font-style: normal;">1</sub></span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> otra recta con ángulo de inclinación <span style="font-family: roboto; font-weight: bold; font-style: italic;">&alpha;<sub style="font-size: 20px; font-style: normal;">2</sub></span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">&theta;<sub style="font-size: 20px; font-style: normal;">1</sub></span> el ángulo entre ellas. 
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
      p(style="margin-top: -40px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Corolario 1</span>: La condición necesaria y suficiente para que dos rectas,  <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> y  <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> sean paralelas es que sus pendientes sean iguales, es decir  <span style="font-family: roboto; font-weight: bold; font-style: italic;">m<sub style="font-size: 20px; font-style: normal;">1</sub></span> =  <span style="font-family: roboto; font-weight: bold; font-style: italic;">m<sub style="font-size: 20px; font-style: normal;">2</sub></span> 
      p(style="margin-top: 0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Corolario 2</span>: La condición necesaria y suficiente para que dos rectas,  <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">1</sub></span> y  <span style="font-family: roboto; font-weight: bold; font-style: italic;">l<sub style="font-size: 20px; font-style: normal;">2</sub></span> sean perpendiculares es que sus pendientes sean recíprocas y de signo contrario, es decir  <span style="font-family: roboto; font-weight: bold; font-style: italic;">m<sub style="font-size: 20px; font-style: normal;">1</sub></span><span style="font-family: roboto; font-weight: bold; font-style: italic;">m<sub style="font-size: 20px; font-style: normal;">2</sub></span> = <span style="font-family: roboto; font-weight: bold; font-style: normal;">-1</span>
      
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
      p(style="margin-top: 0px; color: blue;") Lugar geométrico de los puntos, tales que tomados dos puntos diferentes cualesquiera <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>), <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>) del lugar, el valor de la pendiente<span style="font-family: roboto; font-weight: bold; font-style: italic;">m</span> calculado por la formula del teorema 4
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
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 6</span>: La recta que pasa por el punto dado <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>) y tiene pendiente <span style="font-family: roboto; font-weight: bold; font-style: italic;">m</span>, tiene la ecuación 
      punto-pendiente-ecuacion
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin-top: 0px; color: blue;") Sea <span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>), un punto cualquiera de la recta, diferente al punto dado <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>). por la definicion de la recta, las coordenadas del punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P</span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>) satisfacen la ecuación
      punto-pendiente-ecuacion-demo
      p(style="margin-top: -0px; color: blue;") Multiplicando la ecuación por el denominador  obtenemos
      punto-pendiente-ecuacion 
      p(style="margin-top: -0px; color: blue;") Reciprocamente, si las coordenadas de cualquier otro punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>) satisfacen la ecuación anterior, tenemos
      punto-pendiente-ecuacion-demo2
      p(style="margin-top: 0px; color: blue;") que es la expresión analítica de la definición de la recta,aplicada a los puntos <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">1</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">1</sub></span>) y <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">x<sub style="font-size: 20px; font-style: normal;">2</sub></span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">y<sub style="font-size: 20px; font-style: normal;">2</sub></span>). Por lo tanto, <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span> esta sobre la recta.
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
      p(style="margin-top: -40px; color: blue;") Como se conoce <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span>, el punto cuyas coordenadas (<span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span>) está sobre la recta . Por lo tanto, el problema se reduce a hallar la ecuación de la recta que pasa por un punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>,<span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span>) y tiene una pendiente dada
      ordenada-pendiente-figura
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 7</span>: La recta cuya pendiente es <span style="font-family: roboto; font-weight: bold; font-style: italic;">m</span>  y cuya ordenada al origen es <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span> tiene por ecuación  
      ordenada-pendiente-ecuacion
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin: -10px 0px 0px 0px; color: blue;") Partiendo de la ecuación
      punto-pendiente-ecuacion
      p(style="margin: 0px 0px 10px 0px; color: blue;") Sustituimos el punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span>), entonces 
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
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 8</span>: La recta cuyas intercepciones con los ejes <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>  son <span style="font-family: roboto; font-weight: bold; font-style: italic;">a</span>&ne; <span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span> &ne; <span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span> respectivamente, tiene por ecuación  
      ecuacion-simetrica
      p(style="margin-top: -0px; color: blue;") Demostración  
      p(style="margin: -10px 0px 0px 0px; color: blue;") Sea <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">a</span>, <span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>) y <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">2</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span>) los puntos de intersección de la recta con los ejes coordenados, la pendiente de la recta esta dada por
      pendiente-simetrica-demo
      p(style="margin: 0px 0px 10px 0px; color: blue;") Sustituimos en la forma punto pendiente usando el punto <span style="font-family: roboto; font-weight: bold; font-style: italic;">P<sub style="font-size: 20px; font-style: normal;">1</sub></span>(<span style="font-family: roboto; font-weight: bold; font-style: italic;">a</span>, <span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>), entonces 
      punto-pendiente-simetrica-demo
      p(style="margin: 0px 0px 10px 0px; color: blue;") Dividiendo entre <span style="font-family: roboto; font-weight: bold; font-style: italic;">ab</span>, tenemos 
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
      p(style="margin-top: 10px; color: blue;") En donde <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span> y <span style="font-family: roboto; font-weight: bold; font-style: italic;">B</span> pueden ser difrerentes de cero, o bien, <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span> o <span style="font-family: roboto; font-weight: bold; font-style: italic;">B</span>, pueden ser cero y <span style="font-family: roboto; font-weight: bold; font-style: italic;">C</span> puede tomar cualquier valor incluyendo cero.
      p(style="margin-top: -0px; color: blue;") Consideraciones  
      p(style="margin-top: -0px; color: blue;") + Si <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">-C/B</span> la recta es paralela al eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>  
      p(style="margin-top: -0px; color: blue;") + Si <span style="font-family: roboto; font-weight: bold; font-style: italic;">B</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">-C/A</span> la recta es paralela al eje <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
      p(style="margin-top: -0px; color: blue;") + Si despejamos y de la ecuación general, la ecuación toma la forma de ordenada al origen, es decir <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">-(A/B)x - C/B</span> en donde  <span style="font-family: roboto; font-weight: bold; font-style: italic;">m</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = -</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">A/B</span> y la ordenada al origen <span style="font-family: roboto; font-weight: bold; font-style: italic;">b</span><span style="font-family: roboto; font-weight: bold; font-style: italic;"> = -</span><span style="font-family: roboto; font-weight: bold; font-style: italic;">C/B</span>  
      p(style="margin-top: -0px; color: blue;") + Si a la forma general le damos la forma simétrica, tenemos   
      simetrica-ecuacion-general
      p(style="margin-top: -0px; color: blue;") entonces las intersecciones con los ejes coordenados estan dados por (<span style="font-family: roboto; font-weight: bold; font-style: italic;">-C/A</span>, <span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>)  y (<span style="font-family: roboto; font-weight: bold; font-style: normal;">0</span>, <span style="font-family: roboto; font-weight: bold; font-style: italic;">-C/B</span>)
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
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 9</span>: Si las ecuaciones de dos rectas son<br> &emsp;&emsp;<span style="font-family: roboto; font-weight: bold; font-style: italic;">Ax + By + C = 0</span>&emsp;&emsp; y &emsp;&emsp;<span style="font-family: roboto; font-weight: bold; font-style: italic;">A'x + B'y + C = 0</span>, <br>Las relaciones siguientes son condiciones necesarias y suficientes para  
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">a)</span> Paralelismo: <span style="font-family: roboto; font-weight: bold; font-style: italic;">A/A'</span> = <span style="font-family: roboto; font-weight: bold; font-style: italic;">B/B'</span>, o bien, <span style="font-family: roboto; font-weight: bold; font-style: italic;">AB' - A'B</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>  
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">b)</span> Perpendicularidad: <span style="font-family: roboto; font-weight: bold; font-style: italic;">AA' +BB'</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">c)</span> Coincidencia: <span style="font-family: roboto; font-weight: bold; font-style: italic;">A</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">kA</span>;&emsp;<span style="font-family: roboto; font-weight: bold; font-style: italic;">B</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">kB</span>&emsp; y&emsp; <span style="font-family: roboto; font-weight: bold; font-style: italic;">C</span><span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">kC</span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">d)</span> Intersección en uno y solamente un punto: <span style="font-family: roboto; font-weight: bold; font-style: italic;">A/A' &ne; B/B'</span>, o bien <span style="font-family: roboto; font-weight: bold; font-style: italic;">AB' - A'B &ne; 0</span>
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
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 10</span>: La ecuación de la circunferencia con centro en <span style="font-family: roboto; font-weight: bold; font-style: italic;">C(h, k)</span> y radio <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span> esta dada por   
      
      p(style="margin-top: -0px; color: blue;").center <span style="font-family: roboto; font-weight: bold; font-style: italic;">(x - h)<sup style="font-size: 20px; font-style: normal;">2</sup> + (y - k)<sup style="font-size: 20px; font-style: normal;">2</sup> = r<sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;") Demostración: 
      p(style="margin-top: -20px; color: blue;") Sea <span style="font-family: roboto; font-weight: bold; font-style: italic;">P(x,y)</span> un punto cualquiera del conjunto y sea <span style="font-family: roboto; font-weight: bold; font-style: italic;">c(h, k)</span> el centro de la circunferencia con radio <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>. De acuerdo con la definición,
      p(style="margin-top: -0px; color: blue;").center |<span style="font-family: roboto; font-weight: bold; font-style: italic; text-decoration:overline;">PC</span>| = <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
      p(style="margin-top: -20px; color: blue;") como
      p(style="margin-top: -0px; color: blue;").center |<span style="font-family: roboto; font-weight: bold; font-style: italic; text-decoration:overline;">PC</span>|<span style="font-family: roboto; font-weight: bold; font-style: italic;"><sup style="font-size: 20px; font-style: normal;">2</sup> = </span><span style="font-family: roboto; font-weight: bold; font-style: italic;">(x - h)<sup style="font-size: 20px; font-style: normal;">2</sup> + (y - k)<sup style="font-size: 20px; font-style: normal;">2</sup> = r<sup style="font-size: 20px; font-style: normal;">2</sup></span>
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
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") Desarrolando la ecuación en la forma ordinaria   
      
      p(style="margin-top: -0px; color: blue;").center <span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">h</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">hx</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">h</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">ky</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">hx</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">ky</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">h</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span>
      
      p(style="margin-top: -0px; color: blue;") Entonces  
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> C = -2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">h</span>,&emsp;
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> D = -2</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span>,&emsp;
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> E = </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">h</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">k</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> - </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;") <span style="font-family: roboto; font-weight: bold;">Teorema 11</span>:<br>La ecuación 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = 0</span> representa una circunferencia con centro en  
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(h, k) = (-C/2, -D/2)</span> y radio 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = (-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">/4</span>
      
      p(style="margin-top: -0px; color: blue;") <Bf> Demostración </bf>   
      p(style="margin-top: -0px; color: blue;") Ahora si se realiza el proceso en partiendo de la forma general  
      
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = -</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
      
      p(style="margin-top: -0px; color: blue;") Completando trinomios  cuadrado perfecto
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(C/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(D/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = -</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(C/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(D/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
      
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">x</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + (</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">y</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">+</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D/2)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = (-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">/4</span>
      

      p(style="margin-top: -20px; color: blue;") Entonces
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">(h, k) = (-C/2, -D/2)</span>
      p(style="margin-top: -0px; color: blue;").center 
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">r</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> = (-</span>
        <span style="font-family: roboto; font-weight: bold; font-style: italic;">E</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">C</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"> + </span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">D</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;"><sup style="font-size: 20px; font-style: normal;">2</sup></span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">)</span>
        <span style="font-family: roboto; font-weight: bold; font-style: normal;">/4</span>
      
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
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 28
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 28
      example-twentyEight(:language='isSpanish')
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
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 28
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 28
      example-twentyEight(:language='isSpanish')
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
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 28
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 28
      example-twentyEight(:language='isSpanish')
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
      h3(v-if = '!isSpanish' style="margin: 0px 0px 30px 0px;") Exercise 28
      h3(v-if = 'isSpanish' style="margin: 0px 0px 30px 0px;") Ejercicio 28
      example-twentyEight(:language='isSpanish')
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

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
        p Geometría analítica. Lemhann
        p.small created by G. Rodríguez-Morales and spheroidGames
        p.small gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com, gustavo@gusbits.com
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      //- .next(@click.stop='nextSlide' style="float: right;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

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
      //- .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

 

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Conceptos, la recta',
    description: 'Intro. concepts & the rect line',
    path: 'AnalyticGeometryI',
    course: 'Analytic Geometry',
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
    'segment': require('./components/Segment'),
    'longitud': require('./components/Longitud'),
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
      topics: ['Inicio', 'Temas', 'Segmento', 'Unidimensional', 'Bidimensional', 'Distancia', 'Divisiòn por una razon', 'Pendiente', 'Angulo 2 rectas', 'Definicion de recta', 'Diferentes formas', 'posiciones relativas', 'Bibliografía', 'Problemario'],
      page: [1, 2, 3, 5, 7, 8, 12, 17, 23, 28, 28, 28, 35, 35]
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
