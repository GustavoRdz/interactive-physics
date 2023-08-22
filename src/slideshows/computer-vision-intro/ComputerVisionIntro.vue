<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" :class="{active:isActive}" @click="isActive = !isActive">{{ a = isActive ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2(v-if = '!isActive' style="margin: 0px 0px 30px 0px;") Computer vision
        h2(v-if = 'isActive' style="margin: 0px 0px 30px 0px;") Vision por computadora
        img(src='./assets/U.svg' width='300px')
        p(v-if = '!isActive') Introduction
        p(v-if = 'isActive') Introduccción
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        //- .prev(@click.stop='previousSlide' style="float: left;")
        //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
        .next(@click.stop='nextSlide' style="float: right;")
          span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px; margin: -10px 0 0 -30px; ">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(v-if = '!isActive' style="margin: 0 0 0 0px;" ) Course Topics
      h6(v-if = 'isActive' style="margin: 0 0 0 0px;") Temas del curso
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Image Formation</b>
          p(v-if = 'isActive') <b>Formación de imagenes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Image processing</b>
          p(v-if = 'isActive') <b>Procesado de imagenes</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Feature detection and matching</b>
          p(v-if = 'isActive') <b>Detección de caracteristicas y concidencias</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = '!isActive') <b>Segmentation</b>
          p(v-if = 'isActive') <b>Segmentación</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Feature-based alignment</b>
          p(v-if = 'isActive') <b>Alineación basada en caracteristicas</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Structure from motion</b>
          p(v-if = 'isActive') <b>Estructura desde el movimiento</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Stereo correspondence</b>
          p(v-if = 'isActive') <b>Correspondencia estereo</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>3D reconstruction</b>
          p(v-if = 'isActive') <b>Reconstrucción 3D</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = '!isActive') <b>Deep learning applications</b>
          p(v-if = 'isActive') <b>Aplicaciones con aprendizaje profundo</b>
        
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    slide(:mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Evaluación</sup>
      h6(v-if = '!isActive') Course topics
      h6(v-if = 'isActive') Temas del curso
      .center
      ul
        li Actividad 1: Formación y procesado de imagenes (5%)
        li Actividad 2: Caracteristicas y segmentación (10%)
        li Actividad 3: Examen de medio curso (20%)
        li Actividad 4: Detección de movimiento (10%)
        li Actividad 5: Reconstrucción 3D (10%)
        li Actividad 6: Examen ordinario (20%)
        li Actividad 7: PIA (25%)
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      .center
          img(src='./assets/Fig1_2.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      p(v-if = 'isActive') (a) Reconstrucción a partir de movimiento. <br>(b) Reconstrucción 3D por coincidencia estéreo. <br>(c) Rastreo de personas frente a un fondo desordenado. <br>(d) Los algoritmos de detección de rostros, ropa y cabello, pueden ubicar y reconocer a las personas en las imagenes
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      //- .center
      //-     img(src='./assets/Fig1_2.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      p(v-if = 'isActive') <b>¿Por qué la visión es tan difícil?</b> En parte, se debe a que la visión es un problema inverso, en el que buscamos recuperar algunas incógnitas dada la información insuficiente para especificar completamente la solución. Por lo tanto, debemos recurrir a modelos probabilísticos y basados en la física para eliminar la ambigüedad entre las posibles soluciones. 
      p(v-if = 'isActive') Los modelos directos que usamos en la visión por computadora generalmente se desarrollan en física (radiometría, óptica y diseño de sensores) y en gráficos por computadora.<br> Ambos campos modelan cómo se mueven y animan los objetos, cómo la luz se refleja en sus superficies, se dispersa por la atmósfera, se refracta a través de lentes de cámara (u ojos humanos) y finalmente se proyecta en un plano de imagen plano (o curvo). 
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') En la visión artificial, se intenta hacer lo contrario, es decir, describir el mundo que vemos en una o más imágenes y reconstruir sus propiedades, como la forma, la iluminación y las distribuciones de color. 
      p(v-if = 'isActive') Es sorprendente que los humanos y los animales hagan esto sin esfuerzo, mientras que los algoritmos de visión por computadora son tan propensos a errores.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') La visión artificial se utiliza en una amplia variedad de aplicaciones.
      p • Reconocimiento óptico de caracteres (OCR): lectura de códigos postales escritos a mano en cartas y reconocimiento automático de matrículas (ANPR);
      .center
          img(src='./assets/Fig1-4A.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Inspección de máquinas: inspección rápida de piezas para el aseguramiento de la calidad usando visión estereoscópica con iluminación especializada para medir tolerancias en alas de aeronaves o partes de carrocerías de automóviles o buscando defectos en fundiciones de acero usando visión de rayos X;
      .center
          img(src='./assets/Fig1-4B.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Minorista: reconocimiento de objetos para líneas de pago automatizadas
      .center
          img(src='./assets/Fig1-4C.png' height="400px" style="margin: 0px 0 -10px 0px;" )   
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Construcción de modelos 3D (fotogrametría): construcción totalmente automatizada de modelos 3D de fotografías aéreas utilizadas en sistemas como Bing Maps;
      p Imágenes médicas: registrar imágenes preoperatorias e intraoperatorias o realizar estudios a largo plazo de la morfología cerebral de las personas a medida que envejecen;
      .center
          img(src='./assets/Fig1-4D.png' height="300px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Seguridad automotriz: detección de obstáculos inesperados, como peatones en la calle, en condiciones en las que las técnicas de visión activa, como el radar o el lidar, no funcionan bien
      .center
          img(src='./assets/Fig1-4E.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Coincidencia de movimiento: fusión de imágenes generadas por computadora (CGI) con metraje de acción en vivo mediante el seguimiento de puntos característicos en el video de origen para estimar el movimiento de la cámara 3D y la forma del entorno. Estas técnicas se utilizan ampliamente en Hollywood.
      p Captura de movimiento: uso de marcadores retrorreflectantes vistos desde múltiples cámaras u otras técnicas basadas en la visión para capturar actores para animación por computadora
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Vigilancia: monitoreo de intrusos, análisis del tráfico en las carreteras y monitoreo de piscinas para víctimas de ahogamiento;
      .center
          img(src='./assets/Fig1-4f.png' height="300px" style="margin: 0px 0 -10px 0px;" )
      p Reconocimiento de huella dactilar y biometría: para autenticación de acceso automático así como aplicaciones forenses.       
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Unión: convierte las fotos superpuestas en una única panorámica unida a la perfección
      .center
          img(src='./assets/Fig1-5A.png' width="1000px" style="margin: 0px 0 -10px 0px;" )
      p Fusión de múltiples exposiciones tomadas bajo condiciones de iluminación difíciles (luz solar intensa y sombras) en una única imagen perfectamente expuesta
      .center
          img(src='./assets/Fig1-5B.png' width="41000px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Transformación: convertir una imagen de uno de sus amigos en otra, utilizando una transición de transformación continua
      .center
          img(src='./assets/Fig1-5C.png' width="1000px" style="margin: 0px 0 -10px 0px;" )
      p • Modelado 3D: convertir una o más instantáneas en un modelo 3D del objeto o la persona que está fotografiando
      .center
          img(src='./assets/Fig1-5D.png' width="1000px" style="margin: 0px 0 -10px 0px;" )
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') 
      p • Movimiento y estabilización de coincidencias de video: insertar imágenes 2D o modelos 3D en sus videos mediante el seguimiento automático de puntos de referencia cercanos o usar estimaciones de movimiento para eliminar el movimiento de sus videos
      p • Recorridos basados en fotografías: navegar por una gran colección de fotografías, como el interior de su casa, volando entre diferentes fotografías en 3D
      p • Detección de rostros: para mejorar el enfoque de la cámara y buscar imágenes más relevantes
      p • Autenticación visual: registro automático de los miembros de la familia en la computadora de su hogar cuando se sientan frente a la cámara web
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


   

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References</sup>
        h3 References
        ul
          li <b>Computer visión</b><br> <span class="small">Algorithms and Applications</span> <br>Richard Szeliski<br> Springer
        p.small created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com
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
    title: 'Computer vision',
    description: '1.- Introduction',
    path: 'computer-vision-intro',
    course: 'Computer Vision',
    part: null
  },
  components: {
    // 'example-one': require('./components/ExampleOne'),
    // 'example-two': require('./components/ExampleTwo'),
    // 'example-three': require('./components/ExampleThree'),
    // 'example-four': require('./components/ExampleFour'),
    // 'example-five': require('./components/ExampleFive'),
    // 'example-six': require('./components/ExampleSix'),
    // 'example-seven': require('./components/ExampleSeven'),
    // 'example-eight': require('./components/ExampleEight'),
    // 'example-nine': require('./components/ExampleNine'),
    // 'example-ten': require('./components/ExampleTen'),
    // 'example-eleven': require('./components/ExampleEleven'),
    // 'example-twelve': require('./components/ExampleTwelve'),
    // 'example-thirteen': require('./components/ExampleThirteen'),
    // 'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      isActive: true,
      languages: ['🇺🇸', '🇲🇽']
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
// @import 'node_modules/eagle.js/dist/themes/agrume/agrume';
@import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
#TemperatureHeat {
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
  width: 18em;
  border-collapse: collapse;
  border-bottom: 1px solid black;
  margin: 0 auto;

  & th {
    font-family: 'Times New Roman', Times, serif;
    background-color: whitesmoke;
    border-bottom: 1px solid black;
    padding: .5em 0em .5em -3em;
    text-align: center;
    font-size: 15px;
    font-weight: bold;
  }

  & td {
    text-align: center;
    padding-left: 0em;
    margin: 0 auto;
    font-size: 14px;
    height: 10px;
  }

  & caption {
    font-family: 'Times New Roman', Times, serif;
    font-size: 20px;
    font-style: normal;
    font-weight: bold;
    background-color:slateblue;
    color: white;
  }
}

.language {
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px 0px 0px;
}

</style>
