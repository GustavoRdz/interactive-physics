<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    div(style="width: 100%; ;display: flex; align-items: flex-start;").container
      button(:class="{active:isActive}" @click="isActive = !isActive").lenguage {{ a = isActive ? languages[0]:languages[1] }}
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}

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

    slide(enter='bounceInRight' leave='bounceOutDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px; margin: -10px 0 0 -30px; ">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(v-if = '!isActive' style="margin: 0 0 0 0px;" ) Course Topics
      h6(v-if = 'isActive' style="margin: 0 0 0 0px;") Temas del curso
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Procesado de imagenes</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Transformaciones geometricas</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Detección de caracteristicas</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Aplicaciones con aprendizaje profundo</b>
        
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;


    //- slide(:mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Evaluación</sup>
    //-   h6(v-if = '!isActive') Course topics
    //-   h6(v-if = 'isActive') Temas del curso
    //-   .center
    //-   ul
    //-     li Actividad 1: Formación y procesado de imagenes (5%)
    //-     li Actividad 2: Transformaciones 2D (10%)
    //-     li Actividad 3: Examen de medio curso (20%)
    //-     li Actividad 4: Detección de movimiento (10%)
    //-     li Actividad 5: Reconstrucción 3D (10%)
    //-     li Actividad 6: Examen ordinario (20%)
    //-     li Actividad 7: PIA (25%)
    //-   .prev(@click.stop='previousSlide' style="float: left;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
    //-   .next(@click.stop='nextSlide' style="float: right;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive').center  Introducción
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      .center
          img(src='./assets/Fig1_2.png' height="400px" style="margin: 0px 0 -10px 0px;" )
      p(v-if = 'isActive') (a) Reconstrucción a partir de movimiento. <br>(b) Reconstrucción 3D por coincidencia estéreo. <br>(c) Rastreo de personas frente a un fondo desordenado. <br>(d) Los algoritmos de detección de rostros, ropa y cabello, pueden ubicar y reconocer a las personas en las imagenes
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') En la visión artificial, se intenta hacer lo contrario, es decir, describir el mundo que vemos en una o más imágenes y reconstruir sus propiedades, como la forma, la iluminación y las distribuciones de color. 
      p(v-if = 'isActive') Es sorprendente que los humanos y los animales hagan esto sin esfuerzo, mientras que los algoritmos de visión por computadora son tan propensos a errores.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center ¿Qué es la visión por computadora?
      p(v-if = 'isActive') Coincidencia de movimiento: fusión de imágenes generadas por computadora (CGI) con metraje de acción en vivo mediante el seguimiento de puntos característicos en el video de origen para estimar el movimiento de la cámara 3D y la forma del entorno. Estas técnicas se utilizan ampliamente en Hollywood.
      p Captura de movimiento: uso de marcadores retrorreflectantes vistos desde múltiples cámaras u otras técnicas basadas en la visión para capturar actores para animación por computadora
      
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
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

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Procesado de Imágenes</sup>
      h1(v-if = 'isActive' style="margin: 0 0 0px 0px;" ).center Procesado de imágenes
    
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Procesado de imágenes</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Procesado de imágenes
      p(v-if = 'isActive')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Histograma</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Modificaciones de imagenes usando el Histograma</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Filtros en el dominio espacial</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Filtros en el dominio de frecuencia</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') 
      ul 
        li Los histogramas se utilizan para representar estadísticas de imágenes en un formato visual de fácil interpretación.
        li Con un histograma, es fácil determinar ciertos tipos de problemas en una imagen.
        li Es importante detectar errores como este en la fase de captura de la imagen porque una mala exposición produce una pérdida permanente de información, que no es posible recuperar más tarde mediante técnicas de procesamiento de imágenes.
        li su utilidad durante la captura de imágenes,
        li para mejorar la apariencia visual de una imagen
        li Como una herramienta “forense” para determinar qué tipo de procesamiento se ha aplicado previamente a una imagen.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') ¿Qué es un histograma?
      p(v-if = 'isActive') Los histogramas en general son distribuciones de frecuencia y los histogramas de imágenes describen la frecuencia de los valores de intensidad que ocurren en una imagen.
      p.center
        img(src='./assets/chap04/p038-fig4-2.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -10px; color: black; border-style: solid; text-align: left; padding: 20px;") El histograma <span class="min">h</span> de una imagen en escala de grises  <span class="min">I</span> con  valores de intensidad en el rango <span class="min">I</span><span class="mnn">(</span><span class="min">u</span>, <span class="min">v</span><span class="mnn">)</span>&in;<span class="mnn">[</span><span class="mnn">0</span>, <span class="mib">K</span><span class="mnn">- 1</span><span class="mnn">]</span>  contiene exactamente <span class="mib">K</span> entradas que para una imagen en escala de grises típica de <span class="mnn">8</span> bits. <span class="min">K</span><span class="mnn"> = </span><span class="mnn">2<sup>8</sup></span><span class="mnn"> = </span><span class="mnn">256</span>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p Cada entrada individual del histograma se define como <span class="mib">h</span><span class="mnb">(</span><span class="mib">i</span><span class="mnb">)</span> es el número de píxeles en <span class="mib">I</span> con el valor de intensidad <span class="mib">i</span> para todo <span class="mnb">0 &le; </span><span class="mib">i</span><span class="mnb"> &lt; </span><span class="mib">K</span> . Dicho de manera más formal,
      <svg width="500" height="50">          
          <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">h</tspan><tspan class="mnb">(</tspan><tspan class="mib">i</tspan><tspan class="mnb">)</tspan><tspan class="mnb"> = </tspan><tspan class="mnb">{ </tspan><tspan class="mnb">card(</tspan><tspan class="mib">u</tspan>, <tspan class="mib">v</tspan><tspan class="mnb">)</tspan><tspan class="mib"> | </tspan><tspan class="mib">I</tspan><tspan class="mnb">(</tspan><tspan class="mib">u</tspan>,<tspan class="mib">v</tspan><tspan class="mnb">)</tspan><tspan class="mnb"> = </tspan><tspan class="mib">i</tspan><tspan class="mnb"> }</tspan></text>
      </svg>
      p Por lo tanto,<br><span class="min">h</span><span class="mnn">(0)</span> es el número de píxeles con el valor <span class="mnn">0</span><br><span class="min">h</span><span class="mnn">(1)</span> es el número de píxeles con el valor <span class="mnn">1</span> , y así sucesivamente. <br>Finalmente, <span class="min">h</span><span class="mnn">(</span><span class="mnn">255</span><span class="mnn">)</span> es el número de píxeles blancos con el valor de intensidad máxima <span class="mnn">255</span><span class="mnn"> = </span><span class="min">K</span><span class="mnn"> - 1</span>.

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') ¿Qué es un histograma?
      p(v-if = 'isActive') El resultado del cálculo del histograma es un vector unidimensional <span class="min">h</span> de longitud <span class="min">k</span>
      p.center
        img(src='./assets/chap04/p039-fig4-3.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -10px; color: black; text-align: left; padding: 20px;") Dado que el histograma no codifica ninguna información sobre dónde se originó cada una de sus entradas individuales en la imagen, no contiene información sobre la disposición espacial de los píxeles en la imagen.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') ¿Qué es un histograma?
      p(v-if = 'isActive') Esto es intencional, ya que la función principal de un histograma es proporcionar información estadística (por ejemplo, la distribución de valores de intensidad) en una forma compacta.
      p(v-if = 'isActive') ¿Es posible reconstruir una imagen usando solo su histograma? Dada la pérdida de información espacial, la respuesta es <span class="mnb">no</span>
      p.center
        img(src='./assets/chap04/p039-fig4-4.png' height="170px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -40px; color: black; font-size: 15px; text-align: center; padding: 0px;") Estas imágenes parecerían diferentes pero tendrían exactamente el mismo histograma.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') ¿Qué es un histograma?
      p(style="margin-top: -20px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Un histograma representa los problemas que se originan durante la adquisición de imágenes, como aquellos relacionados con el contraste y el rango dinámico, así como los artefactos resultantes de los pasos de procesamiento de imágenes que se aplicaron a la imagen.
      p.center
        img(src='./assets/chap04/p039-fig4-5.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -20px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Los histogramas se utilizan a menudo para determinar si una imagen está haciendo un uso efectivo de su rango de intensidad examinando el tamaño y la uniformidad de la distribución del histograma.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histograma
      p(v-if = 'isActive') ¿Qué es un histograma?
      p(style="margin-top: -20px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Los histogramas permiten visualizar fácilmente los problemas de exposición típicos.
      p(style="margin-top: -20px; color: black; line-height: 1.4; text-align: left; padding: 0px;") A modo de ejemplo, un histograma en el que una gran sección del rango de intensidad en un extremo no se utiliza en gran medida mientras que el otro extremo está repleto de picos de alto valor es representativo de una imagen expuesta incorrectamente.
      p.center
        img(src='./assets/chap04/p040-fig4-6.png' height="300px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Contraste
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El contraste se entiende como el rango de valores de intensidad efectivamente utilizados dentro de una imagen determinada.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Una imagen de contraste completo hace un uso efectivo de todo el rango e <span class="mib">a</span> = <span class="mib">a</span><span class="mnb"><sub>min</sub>,</span><span class="mib"> &mldr;</span> <span class="mib">a</span><span class="mnb"><sub>max</sub></span> con <span class="mib">a</span><span class="mnb"><sub>min</sub> = 0</span>, <span class="mib">a</span><span class="mnb"><sub>max</sub> = </span><span class="mib">K</span><span class="mnb"> - 1 </span> (negro a blanco).
      p.center
        img(src='./assets/chap04/p041-fig4-7.png' height="300px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Rango dinámico
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El rango dinámico de una imagen es el número de valores de píxeles distintos que posee. Idealmente, el rango dinámico abarca todos los <span class="mib">K</span> valores de píxeles utilizables, en cuyo caso se utiliza por completo.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Cuando una imagen tiene un rango de contraste disponible <span class="mib">a</span><span class="mnb"> = </span><span class="mib">a</span><span class="mnb"><sub>bajo</sub>,</span><span class="mib"> &mldr;</span> <span class="mib">a</span><span class="mnb"><sub>alto</sub></span>, con un <span class="mib">a</span><span class="mnb"><sub>min</sub> &lt; </span><span class="mib">a</span><span class="mnb"><sub>bajo</sub></span> y <span class="mib">a</span><span class="mnb"><sub>alto</sub></span><span class="mib"> &lt; </span><span class="mib">a</span><span class="mnb"><sub>max</sub></span>, entonces se logra el rango dinámico máximo posible cuando se utilizan todos los valores de intensidad que se encuentran en este rango.
      p.center
        img(src='./assets/chap04/p041-fig4-8.png' height="300px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Saturación
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Idealmente, el rango de contraste de un sensor debería ser mayor que el rango de intensidad de la luz que recibe de una escena. En tal caso, el histograma resultante será uniforme en ambos extremos.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El resultado es un histograma que está saturado en uno o ambos extremos de su rango.
      //- p.center
      //-   img(src='./assets/chap04/p043-fig4-9.png' height="300px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Picos y huecos
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La distribución del valor de intensidad de una imagen sin procesar es generalmente suave, es decir, es poco probable que aparezcan picos o espacios aislados en su histograma.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") También es poco probable que el recuento de un valor de intensidad dado difiera en gran medida del de sus vecinos.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Si bien artefactos como estos se observan muy raramente en imágenes originales, a menudo estarán presentes después de que una imagen haya sido manipulada, por ejemplo, cambiando su contraste.
      p.center
        img(src='./assets/chap04/p043-fig4-9.png' height="300px" style="margin: 0px 0px 0px 0px;")
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Impactos de la compresión de imágenes
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La compresión de imágenes también cambia una imagen de maneras que son inmediatamente evidentes en su histograma.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Por ejemplo, durante la compresión GIF, el rango dinámico de una imagen se reduce a solo unas pocas intensidades o colores, lo que genera una estructura de línea obvia en el histograma que no se puede eliminar mediante el procesamiento posterior.
      p.center
        img(src='./assets/chap04/p043-fig4-10.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Generalmente, un histograma puede revelar rápidamente si una imagen alguna vez ha sido sometida a cuantificación de color.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Impactos de la compresión de imágenes
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Un gráfico de líneas simple con sólo dos valores de gris (128, 255) se somete a un método de compresión como JPEG, que no está diseñado para gráficos de líneas sino para fotografías naturales.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El histograma de la imagen resultante muestra claramente que ahora contiene una gran cantidad de valores de gris que no estaban presentes en la imagen original, lo que da como resultado una imagen de mala calidad que aparece sucia, borrosa y desenfocada.
      p.center
        img(src='./assets/chap04/p044-fig4-11.png' height="400px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histogramas de imágenes en color
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Al hablar de histogramas de imágenes en color, normalmente se hace referencia a un histograma de la intensidad de la imagen (luminancia) o de los canales de color individuales.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ambas variantes son compatibles con prácticamente todas las aplicaciones de procesamiento de imágenes y se utilizan para evaluar objetivamente la calidad de la imagen, especialmente justo después de la adquisición.

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histogramas de intensidad
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El histograma de intensidad o luminancia <span class="mib">h<sub>Lum</sub></span> de una imagen a color no es más que el histograma de la imagen en escala de grises correspondiente, por lo que, naturalmente, todos los aspectos de la explicación anterior también se aplican a este tipo de histograma.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La imagen en escala de grises se obtiene calculando la luminancia de cada canal de color.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para calcular la luminancia, no basta con promediar los valores de cada canal de color; en su lugar, se debe calcular una suma ponderada que tenga en cuenta la teoría de la percepción del color.
      p.center
        <svg width="700" height="150">          
            <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">Y</tspan><tspan class="mnb"> = Lum(</tspan><tspan class="mib">R, G, B</tspan><tspan class="mnb">) = </tspan><tspan class="mib">w<tspan  baseline-shift="sub"  style="font-size: 20px; font-style: italic;">R</tspan>·R</tspan> + <tspan class="mib">w<tspan  baseline-shift="sub"  style="font-size: 20px; font-style: italic;">G</tspan>·G</tspan> + <tspan class="mib">w<tspan  baseline-shift="sub"  style="font-size: 20px; font-style: italic;">B</tspan>·B</tspan></text>
            <text x="65" y="80" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">w<tspan  baseline-shift="sub" style="font-size: 20px; font-style: italic;">R</tspan></tspan><tspan class="mnb"> = 0.299</tspan>&emsp;&emsp;<tspan class="mib">w<tspan  baseline-shift="sub" style="font-size: 20px; font-style: italic;">G</tspan><tspan class="mnb"> = 0.587</tspan>&emsp;&emsp;</tspan><tspan class="mib">w<tspan baseline-shift="sub" style="font-size: 20px; font-style: italic;">B</tspan><tspan class="mnb"> = 0.114</tspan></tspan></text>
        </svg>

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Histogramas de canales de color individuales
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Aunque el histograma de luminancia considera todos los canales de color, los errores de imagen que aparecen en canales individuales pueden pasar desapercibidos.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Por ejemplo, el histograma de luminancia puede aparecer limpio incluso cuando uno de los canales de color está sobresaturado.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") En las imágenes RGB, el canal azul contribuye solo en pequeña medida al brillo total y, por lo tanto, es especialmente sensible a este problema.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Los histogramas de componentes proporcionan información adicional sobre la distribución de la intensidad dentro de cada canal de color.
  
      p.center
        img(src='./assets/chap04/p049-fig4-12.png' height="400px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Operaciones de puntos
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Las operaciones de puntos modifican los valores de los píxeles sin cambiar el tamaño, la geometría ni la estructura local de la imagen.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Cada nuevo valor de píxel <span class="mib">I'</span><span class="mnb">(</span><span class="mib">u, v</span><span class="mnb">)</span>I'(u, v) depende exclusivamente del valor anterior <span class="mib">I'</span><span class="mnb">(</span><span class="mib">u, v</span><span class="mnb">)</span> I(u, v) en la misma posición y, por lo tanto, es independiente de cualquier otro valor de píxel.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Los valores de píxel originales a se asignan a los nuevos valores b mediante una función <span class="mib">f</span> dada, es decir,
      p.center
        <svg width="500" height="50">          
            <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">I'</tspan><tspan class="mnb">(</tspan><tspan class="mib">u, v</tspan><tspan class="mnb">) &larr; </tspan><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">I</tspan><tspan class="mnb">(</tspan><tspan class="mib">u, v</tspan><tspan class="mnb">))</tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Si, como en este caso, la función <span class="mib">f</span><span class="mnb">()</span> es independiente de las coordenadas de la imagen (es decir, la misma en toda la imagen), la operación se denomina “global” u “homogénea”.

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Operaciones de puntos
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Algunos ejemplos típicos de operaciones de puntos homogéneos incluyen, entre otros:
      ul 
      li modificar el brillo o el contraste de la imagen,
      li aplicando transformaciones de intensidad arbitrarias (“curvas”),
      li invirtiendo imágenes,
      li cuantificar (o “posterizar”) imágenes,
      li umbralización global,
      li corrección gamma,
      li transformaciones de color
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Una operación no homogénea típica es el ajuste local del contraste o el brillo utilizado, por ejemplo, para compensar la iluminación desigual durante la adquisición de imágenes.

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Modificar la intensidad de la imagen Contraste y brillo
      h6(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Contraste y brillo
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Aumentar el contraste de la imagen en un <span class="mnn">50%</span> (es decir, por un factor de <span class="mnn">1.5</span>) o aumentar el brillo en <span class="mnn">10</span> unidades se puede expresar mediante las funciones de mapeo.
      p.center
        <svg width="500" height="50">          
            <text x="65" y="30" font-size="30" fill="black" font-weight="bold" font-family="Times"><tspan class="mib">f<tspan baseline-shift="sub" style="font-size: 20px; font-style: italic;">c</tspan></tspan>  = <tspan class="mib">a · </tspan><tspan class="mnb">1.5</tspan> &emsp;&emsp;<tspan class="mib">f<tspan baseline-shift="sub" style="font-size: 20px; font-style: italic;">c</tspan></tspan>  = <tspan class="mib">a</tspan> + <tspan class="mnb">10</tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") respectivamente.

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Valores límite
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Al implementar operaciones aritméticas con valores de píxeles, debemos tener en cuenta que los resultados calculados no deben exceder el rango admisible de valores de píxeles para el tipo de imagen dado (p. ej., <span class="mnn">[0, 255]</span> en el caso de imágenes en escala de grises de <span class="mnn">8</span> bits).
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Esto se conoce comúnmente como "retención" y se puede expresar como 
      p.center
        <svg width="700" height="150">          
            <text x="350" y="30" fill="black" font-family="Times"><tspan class="mnn" font-size="40px">&#9127;</tspan><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">min</tspan>&emsp;</tspan> si <tspan class="min">f</tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan><tspan class="mnn">) &lt; </tspan><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">min</tspan></tspan></text>
            <text x="350" y="70" fill="black" font-family="Times"><tspan class="mnn" font-size="40px">&#9128;</tspan><tspan class="mib">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">max</tspan>&emsp;</tspan> si <tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">a</tspan><tspan class="mnb">) &gt; </tspan><tspan class="mib">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">max</tspan></tspan></text>
            <text x="350" y="110" fill="black" font-family="Times"><tspan class="mnn" font-size="40px">&#9129;</tspan><tspan class="mib">f</tspan><tspan class="mnb">(</tspan><tspan class="mib">a</tspan><tspan class="mnn">) &emsp; cualquier otro caso</tspan></text>
            <text x="5" y="70" fill="black" font-family="Times"><tspan class="min">b</tspan> = <tspan class="mnn">min(max(</tspan><tspan class="min">f</tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan><tspan class="mnn">)</tspan><tspan class="min">, a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">min</tspan></tspan><tspan class="mnn">), </tspan><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">max</tspan></tspan>) = </text>
        </svg>

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Inversión de imágenes
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Invertir una imagen de intensidad es una operación puntual simple que invierte el orden de los valores de píxel (multiplicándolos por <span class="mnn">- 1</span>) y añade un valor constante para asignar el resultado al rango admisible.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Por lo tanto, para un valor de píxel <span class="min">a</span><span class="mnn"> = </span><span class="min">I</span><span class="mnn">(</span><span class="min">u, v</span><span class="mnn">)</span> en el rango <span class="mnn">[0, </span><span class="min">a<sub style="font-style: normal; font-weight: normal;">max</sub></span><span class="mnn">]</span>, la operación puntual correspondiente es 
      p.center
        <svg width="200" height="50">          
            <text x="5" y="30" fill="black"  font-size="30" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">inv</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan><tspan class="mnn">) = </tspan><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">max</tspan> - a</tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Tenga en cuenta que en este caso no se requiere ninguna sujeción porque la función siempre se asigna al rango original de valores.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Operación de umbral
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La umbralización de una imagen es un tipo especial de cuantificación que separa los valores de los píxeles en dos clases, según un valor de umbral <span class="min">q</span>, que suele ser constante.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La operación de umbral asigna todos los píxeles a uno de dos valores de intensidad fijos, <span class="min">a<sub class="mnn">0</sub></span> o <span class="min">a<sub class="mnn">1</sub></span>, es decir,
      p.center
        <svg width="300" height="150">          
            <text x="80" y="40" fill="black" font-family="Times"><tspan class="mnn" font-size="30px">&#9127;</tspan></text>
            <text x="80" y="70" fill="black" font-family="Times"><tspan class="mnn" font-size="30px">&#9128;</tspan></text>
            <text x="80" y="100" fill="black" font-family="Times"><tspan class="mnn" font-size="30px">&#9129;</tspan></text>
            <text x="100" y="50" fill="black" font-family="Times"><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">0</tspan>&emsp;</tspan> si <tspan class="min">a</tspan><tspan class="min"> &lt; </tspan><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">th</tspan></tspan></text>
            <text x="100" y="90" fill="black" font-family="Times"><tspan class="mib">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">1</tspan>&emsp;</tspan> si <tspan class="mib">a</tspan><tspan class="min"> &ge; </tspan><tspan class="mib">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">th</tspan></tspan></text>
            <text x="5" y="70" fill="black" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">th</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>) = </text>
        </svg>
      p.center
        img(src='./assets/chap05/p056-fig5-2.png' height="250px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") con <span class="mnn">0 &lt; </span><span class="min">a<sub class="mnn">th</sub></span><span class="mnn"> &leq; </span><span class="min">a<sub class="mnn">max</sub></span>.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Una aplicación común es la binarización de una imagen de intensidad con los valores <span class="min">a<sub class="mnn">0</sub></span><span class="mnn"> = 0</span> y <span class="min">a<sub class="mnn">1</sub></span><span class="mnn"> = 1</span>.
      p.center
        img(src='./assets/chap05/p056-fig5-1.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La umbralización afecta al histograma al separar la distribución en dos entradas en las posiciones <span class="min">a<sub class="mnn">0</sub></span> y <span class="min">a<sub class="mnn">1</sub></span>.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Operaciones de puntos e histogramas
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Si una línea de histograma se desplaza como resultado de una operación puntual, todos los píxeles del conjunto correspondiente se modifican por igual, y viceversa.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Entonces, ¿qué ocurre cuando una operación puntual (por ejemplo, reducir el contraste de la imagen) hace que dos líneas de histograma previamente separadas se unan en la misma posición <span class="min">i</span>?
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La respuesta es que los conjuntos de píxeles correspondientes se fusionan y la nueva entrada común del histograma es la suma de las dos (o más) entradas que contribuyen.
      p.center
        img(src='./assets/chap05/p057-fig5-3.png' height="350px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Ajuste automático de contraste
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El ajuste automático de contraste (autocontraste) es una operación puntual cuya función es modificar los píxeles de forma que se cubra completamente el rango de valores disponible.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Esto se logra asignando los píxeles más oscuros y más brillantes actuales a los valores de intensidad mínimo y máximo, respectivamente, y distribuyendo linealmente los valores intermedios. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Supongamos que <span class="min">a<sub class="mnn">bajo</sub></span> y <span class="min">a<sub class="mnn">alto</sub></span> son los valores de píxel más bajo y más alto de la imagen actual, cuyo rango de intensidad completo es <span class="mnn">[</span><span class="min">a<sub class="mnn">min</sub></span>, <span class="min">a<sub class="mnn">max</sub></span><span class="mnn">]</span>. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La función de mapeo para la operación de autocontraste se define así:
      p.center
        <svg width="500" height="150">          
            <text x="260" y="50" fill="black" font-family="Times"><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">max</tspan></tspan> - <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">min</tspan></tspan></text>
            <text x="260" y="80" fill="black" font-family="Times"><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">alto</tspan></tspan> - <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">bajo</tspan></tspan></text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">ac</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>) = <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">min</tspan></tspan> + <tspan class="mnn">(</tspan><tspan class="min">a</tspan> - <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">bajo</tspan></tspan><tspan class="mnn">) ·</tspan></text>
             <line x1="255" y1="63" x2="370" y2="63" style="stroke:black; stroke-width:2"/>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para una imagen de 8 bits con <span class="min">a<sub class="mnn">min</sub></span><span class="mnn"> = 0</span> y <span class="min">a<sub class="mnn">max</sub></span> = <span class="mnn">255</span>, la función se simplifica a
      p.center
        <svg width="330" height="100">          
            <text x="240" y="50" fill="black" font-family="Times"><tspan class="mnn">255</tspan></text>
            <text x="210" y="80" fill="black" font-family="Times"><tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">alto</tspan></tspan> - <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">bajo</tspan></tspan></text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">ac</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>) = <tspan class="mnn">(</tspan><tspan class="min">a</tspan> - <tspan class="min">a<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">bajo</tspan></tspan><tspan class="mnn">) ·</tspan></text>
             <line x1="191" y1="63" x2="315" y2="63" style="stroke:black; stroke-width:2"/>
        </svg>
      p.center
        img(src='./assets/chap05/p059-fig5-6.png' height="250px" style="margin: 0px 0px 0px 0px;")
        img(src='./assets/chap05/p058-fig5-4.png' height="250px" style="margin: 0px 0px 0px 0px;")
        img(src='./assets/chap05/p058-fig5-5.png' height="250px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Ecualización de histograma
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Una tarea frecuente es ajustar dos imágenes diferentes de tal manera que sus distribuciones de intensidad resultantes sean similares, por ejemplo, para usarlas en una publicación impresa o para que sea más fácil compararlas.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El objetivo de la ecualización del histograma es encontrar y aplicar una operación puntual tal que el histograma de la imagen modificada se aproxime a una distribución uniforme.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Dado que el histograma es una distribución discreta y las operaciones de puntos homogéneos solo pueden desplazar y fusionar (pero nunca dividir) las entradas del histograma, en general solo podemos obtener una solución aproximada.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") En particular, no hay forma de eliminar o disminuir picos individuales en un histograma, por lo que es imposible alcanzar una distribución verdaderamente uniforme.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Basándonos en operaciones puntuales, podemos modificar la imagen sólo en la medida en que el histograma resultante sea aproximadamente uniforme.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La pregunta es qué tan buena puede ser esta aproximación y exactamente qué operación puntual (que claramente depende del contenido de la imagen) debemos aplicar para lograr este objetivo.
      p.center
        img(src='./assets/chap05/p060-fig5-8.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Podemos tener una primera idea al observar que el histograma acumulativo de una imagen con distribución uniforme es una rampa lineal. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Por lo tanto, podemos reformular el objetivo como encontrar una operación puntual que desplace las líneas del histograma de modo que el histograma acumulativo resultante sea aproximadamente lineal.
      p.center
        img(src='./assets/chap05/p061-fig5-9.png' height="200px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p.center
        <svg width="300" height="150">          
            <text x="170" y="55" fill="black" font-family="Times"><tspan class="min">K</tspan> - <tspan class="mnn">1</tspan></text>
            <text x="170" y="85" fill="black" font-family="Times"><tspan class="min">MN</tspan></text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">ec</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>) = &ensp;<tspan class="min">H</tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan><tspan class="mnn">) ·</tspan></text>
            <text x="80" y="80" fill="black" font-family="Times" font-size="50px" font-weight="300"><tspan class="mnn">&#9123;</tspan>&emsp;&emsp;&ensp;<tspan class="mnn">&#9126;</tspan></text>
            <line x1="160" y1="63" x2="220" y2="63" style="stroke:black; stroke-width:2"/>
        </svg>
      p.center
        img(src='./assets/chap05/p062-fig5-10.png' height="400px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Introduction</sup>
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Especificación del histograma
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") En la mayoría de las imágenes reales, la distribución de los valores de los píxeles no es ni remotamente uniforme, sino que suele ser más similar, si acaso, a una distribución gaussiana.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Las imágenes producidas mediante ecualización lineal suelen parecer bastante poco naturales, lo que hace que la técnica sea prácticamente inútil.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La especificación del histograma es una técnica más general que modifica la imagen para que coincida con una distribución de intensidad arbitraria, incluido el histograma de una imagen determinada.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Esto es particularmente útil, por ejemplo, para ajustar un conjunto de imágenes tomadas por diferentes cámaras o bajo diferentes condiciones de exposición o iluminación para dar una impresión similar en la producción impresa o cuando se exhiben.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Similar a la ecualización de histograma, este proceso se basa en la alineación de los histogramas acumulativos mediante la aplicación de una operación de puntos homogéneos.
      h6(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Frecuencias y probabilidades
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El valor de cada celda del histograma describe la frecuencia observada del valor de intensidad correspondiente; es decir, el histograma es una distribución de frecuencia discreta.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para una imagen <span class="mib">I</span> dada de tamaño <span class="mib">M</span><span class="mnn">x</span><span class="mib">N</span>, la suma de todas las entradas del histograma <span class="mib">h</span><span class="mnb">(</span><span class="mib">i</span><span class="mnb">)</span> es igual al número de píxeles de la imagen
      p.center
        <svg width="200" height="100">          
            <text x="5" y="75" fill="black" font-family="Times" font-size="40px"><tspan class="mnn">&Sigma; </tspan></text>
            <text x="40" y="71" fill="black" font-family="Times"><tspan class="min">h</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>) = &ensp;<tspan class="min">M</tspan><tspan class="mnb">·</tspan><tspan class="mib">N</tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El histograma normalizado asociado,
      p.center
        <svg width="300" height="100">          
            <text x="80" y="55" fill="black" font-family="Times"><tspan class="min">h</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>)</text>
            <text x="80" y="85" fill="black" font-family="Times"><tspan class="min">MN</tspan></text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">p</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>) = </text>
            <line x1="70" y1="64" x2="130" y2="63" style="stroke:black; stroke-width:2"/>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Generalmente se interpreta como la distribución de probabilidad o función de densidad de probabilidad <span class="mnn">(pdf)</span> de un proceso aleatorio, donde <span class="min">p</span><span class="mnn">(</span><span class="min">i</span><span class="mnn">)</span> es la probabilidad de que ocurra el valor de píxel <span class="mib">i</span>.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La probabilidad acumulada de que <span class="mib">i</span> sea cualquier valor posible es <span class="mnn">1</span>, y la distribución <span class="mib">p</span> debe satisfacer 
      p.center
        <svg width="200" height="100">          
            <text x="5" y="75" fill="black" font-family="Times" font-size="40px"><tspan class="mnn">&Sigma; </tspan></text>
            <text x="40" y="71" fill="black" font-family="Times"><tspan class="min">p</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>) = &ensp;<tspan class="mnn">1</tspan></text>
            <text x="10" y="95" fill="black" font-family="Times" font-size="18px"><tspan class="min">i</tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La contraparte estadística del histograma acumulativo <span class="mib">H</span> es la función de distribución discreta <span class="mib">P</span><span class="mnn">()</span> (también llamada función de distribución acumulativa o <span class="mnn">cdf</span>), 
      p.center
        <svg width="500" height="200">          
            <text x="100" y="55" fill="black" font-family="Times"><tspan class="min">H</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>)&emsp;&emsp;&emsp;<tspan class="min">H</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>)&emsp;&emsp;&emsp;&emsp;&ensp;<tspan class="min">h</tspan><tspan class="mnn">(</tspan><tspan class="min">j</tspan>)</text>
            <text x="80" y="85" fill="black" font-family="Times"><tspan class="min">H</tspan><tspan class="mnn">(</tspan><tspan class="min">K</tspan><tspan class="mnn"> - 1</tspan>)&emsp;&emsp;<tspan class="min">MN</tspan>&emsp;&emsp;&emsp;&emsp;&ensp;<tspan class="min">MN</tspan></text>
            <text x="310" y="80" fill="black" font-family="Times" font-size="50px"><tspan class="mnn"> &Sigma;</tspan> </text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">P</tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>)<tspan class="mnn"> =&ensp;&emsp;&emsp;&emsp;&emsp;=&emsp;&emsp;&emsp;&emsp;=</tspan> </text>
            <text x="325" y="40" fill="black" font-family="Times" font-size="15px"><tspan class="min">i</tspan></text>
            <text x="310" y="95" fill="black" font-family="Times" font-size="15px"><tspan class="min">j</tspan><tspan class="mnn"> = 0 </tspan></text>
            <line x1="70" y1="64" x2="170" y2="63" style="stroke:black; stroke-width:2"/>
            <line x1="200" y1="64" x2="280" y2="63" style="stroke:black; stroke-width:2"/>
            <line x1="360" y1="64" x2="440" y2="63" style="stroke:black; stroke-width:2"/>
            <text x="50" y="150" fill="black" font-family="Times"><tspan class="mnn"> =&emsp;&ensp;</tspan> <tspan class="min">p</tspan><tspan class="mnn">(</tspan><tspan class="min">j</tspan>)<tspan class="mnn"> &ensp;&emsp;&emsp;si 0 &le; </tspan><tspan class="min">i</tspan><tspan class="mnn"> &lt; </tspan><tspan class="min">K</tspan> </text>
            <text x="70" y="160" fill="black" font-family="Times" font-size="50px"><tspan class="mnn"> &Sigma;</tspan> </text>
            <text x="90" y="120" fill="black" font-family="Times" font-size="15px"><tspan class="min">i</tspan></text>
            <text x="70" y="175" fill="black" font-family="Times" font-size="15px"><tspan class="min">j</tspan><tspan class="mnn"> = 0 </tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La función resultante <span class="min">P</span><span class="mnn">(</span><span class="min">i</span><span class="mnn">)</span> es (como el histograma acumulativo) monótonamente creciente
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") En particular
      p.center
        <svg width="500" height="100">          
            <text x="310" y="80" fill="black" font-family="Times" font-size="50px"><tspan class="mnn"> &Sigma;</tspan> </text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">P</tspan><tspan class="mnn">(0)</tspan><tspan class="mnn"> = </tspan><tspan class="min">p</tspan><tspan class="mnn">(0) &emsp; y &emsp;</tspan><tspan class="min">P</tspan><tspan class="mnn">(</tspan><tspan class="min">K</tspan><tspan class="mnb"> - 1</tspan>) = &emsp;&ensp;<tspan class="min">p</tspan><tspan class="mnn">(</tspan><tspan class="mib">i</tspan><tspan class="mnn">)</tspan><tspan class="mnn"> = 1</tspan></text>
            <text x="315" y="40" fill="black" font-family="Times" font-size="15px"><tspan class="min">K</tspan><tspan class="mnn"> - 1</tspan></text>
            <text x="310" y="95" fill="black" font-family="Times" font-size="15px"><tspan class="min">i </tspan><tspan class="mnn"> = 0 </tspan></text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Esta formulación estadística trata implícitamente la generación de imágenes como un proceso aleatorio cuyas propiedades exactas son en su mayoría desconocidas.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Sin embargo, generalmente se supone que el proceso es homogéneo (independiente de la posición de la imagen); es decir, cada valor de píxel es el resultado de un “experimento aleatorio” en una única variable aleatoria <span class="min">i</span>. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La distribución de frecuencia observada dada por el histograma <span class="min">h</span><span class="mnn">(</span><span class="min">i</span><span class="mnn">)</span> sirve como una estimación (aproximada) de la distribución de probabilidad <span class="min">p</span><span class="mnn">(</span><span class="min">i</span><span class="mnn">)</span> de esta variable aleatoria.
      h6(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Principio de especificacion del histograma
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") El objetivo de la especificación del histograma es modificar una imagen dada <span class="min">I<sub>A</sub></span> mediante una operación puntual de modo que su función de distribución <span class="min">P<sub>A</sub></span> coincida lo más posible con una distribución de referencia <span class="min">P<sub>R</sub></span>. Por lo tanto, buscamos una función de mapeo.
      p.center
        <svg width="110" height="100">          
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">a'</tspan> = <tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">hs</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>)</text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") convertir la imagen original <span class="min">I<sub>A</sub></span> mediante una operación de puntos en una nueva imagen <span class="min">I<sub>A'</sub></span> con valores de píxel <span class="min">a'</span>, tales que su función de distribución <span class="min">P<sub>A'</sub></span> coincida con <span class="min">P<sub>R</sub></span>, es decir,
      p.center
        <svg width="300" height="100">          
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">P<tspan baseline-shift="sub" style="font-size: 15px; font-style: italic;">A'</tspan></tspan> <tspan class="mnn">(</tspan><tspan class="min">i</tspan>) &thickapprox; <tspan class="min">P<tspan baseline-shift="sub" style="font-size: 15px; font-style: italic;">R'</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">i</tspan>)</text>
            <text x="200" y="70" fill="black" font-family="Times">si 0 &le; </tspan><tspan class="min">i</tspan><tspan class="mnn"> &lt; </tspan><tspan class="min">K</tspan> </text>
        </svg>
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") La función deseada f hs se obtiene combinando las dos funciones de distribución P R y P A.
      p.center
        img(src='./assets/chap05/p065-fig5-11.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para un valor de píxel dado a en la imagen original, obtenemos el nuevo valor de píxel a' como y por tanto el mapeo f hs se define como Por supuesto, esto supone que P R (i) es invertible, es decir, que la función P R −1 (b) existe para b ∈ [0, 1] .La pregunta es qué tan buena puede ser esta aproximación y exactamente qué operación puntual (que claramente depende del contenido de la imagen) debemos aplicar para lograr este objetivo.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para un valor de píxel dado a en la imagen original, obtenemos el nuevo valor de píxel a' como y por tanto el mapeo f hs se define como Por supuesto, esto supone que P R (i) es invertible, es decir, que la función P R −1 (b) existe para b ∈ [0, 1] .La pregunta es qué tan buena puede ser esta aproximación y exactamente qué operación puntual (que claramente depende del contenido de la imagen) debemos aplicar para lograr este objetivo.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Para un valor de píxel dado a en la imagen original, obtenemos el nuevo valor de píxel a' como y por tanto el mapeo f hs se define como Por supuesto, esto supone que P R (i) es invertible, es decir, que la función P R −1 (b) existe para b ∈ [0, 1] .La pregunta es qué tan buena puede ser esta aproximación y exactamente qué operación puntual (que claramente depende del contenido de la imagen) debemos aplicar para lograr este objetivo.
      p.center
        img(src='./assets/chap05/p060-fig5-8.png' height="300px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Si la distribución de referencia P R se da como una función continua e invertible, entonces la función de mapeo f hs se puede obtener de Sin ninguna dificultad. En la práctica, es conveniente especificar la distribución de referencia (sintética) como una función lineal por partes P L (i) ; es decir, como una secuencia de N+1 pares de coordenadas. cada uno compuesto por un valor de intensidad a k y la probabilidad acumulada correspondiente P k .Podemos tener una primera idea al observar que el histograma acumulativo de una imagen con distribución uniforme es una rampa lineal. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Si la distribución de referencia P R se da como una función continua e invertible, entonces la función de mapeo f hs se puede obtener de Sin ninguna dificultad. En la práctica, es conveniente especificar la distribución de referencia (sintética) como una función lineal por partes P L (i) ; es decir, como una secuencia de N+1 pares de coordenadas. cada uno compuesto por un valor de intensidad a k y la probabilidad acumulada correspondiente P k .Podemos tener una primera idea al observar que el histograma acumulativo de una imagen con distribución uniforme es una rampa lineal. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Si la distribución de referencia P R se da como una función continua e invertible, entonces la función de mapeo f hs se puede obtener de Sin ninguna dificultad. En la práctica, es conveniente especificar la distribución de referencia (sintética) como una función lineal por partes P L (i) ; es decir, como una secuencia de N+1 pares de coordenadas. cada uno compuesto por un valor de intensidad a k y la probabilidad acumulada correspondiente P k .Podemos tener una primera idea al observar que el histograma acumulativo de una imagen con distribución uniforme es una rampa lineal. 
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Afirmamos que 0 ≤ a k < K, a k < a k+1 y 0 ≤ P k < 1. Además, los dos puntos finales (a 0 , P 0 ) y (a N , P N ) están fijos en respectivamente. Para ser invertible, la función también debe ser estrictamente monótona, es decir, P k < P k+1 para 0 ≤ k < N. La figura muestra un ejemplo de dicha función, que se especifica mediante N = 5 puntos variables (P 0 , . . ., P 4 ) y un punto final fijo P 5 , y, por lo tanto, consta de N = 5 segmentos lineales. La distribución de referencia puede, por supuesto, especificarse con una precisión arbitraria insertando puntos de control adicionales. Por lo tanto, podemos reformular el objetivo como encontrar una operación puntual que desplace las líneas del histograma de modo que el histograma acumulativo resultante sea aproximadamente lineal.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Afirmamos que 0 ≤ a k < K, a k < a k+1 y 0 ≤ P k < 1. Además, los dos puntos finales (a 0 , P 0 ) y (a N , P N ) están fijos en respectivamente. Para ser invertible, la función también debe ser estrictamente monótona, es decir, P k < P k+1 para 0 ≤ k < N. La figura muestra un ejemplo de dicha función, que se especifica mediante N = 5 puntos variables (P 0 , . . ., P 4 ) y un punto final fijo P 5 , y, por lo tanto, consta de N = 5 segmentos lineales. La distribución de referencia puede, por supuesto, especificarse con una precisión arbitraria insertando puntos de control adicionales. Por lo tanto, podemos reformular el objetivo como encontrar una operación puntual que desplace las líneas del histograma de modo que el histograma acumulativo resultante sea aproximadamente lineal.
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Afirmamos que 0 ≤ a k < K, a k < a k+1 y 0 ≤ P k < 1. Además, los dos puntos finales (a 0 , P 0 ) y (a N , P N ) están fijos en respectivamente. Para ser invertible, la función también debe ser estrictamente monótona, es decir, P k < P k+1 para 0 ≤ k < N. La figura muestra un ejemplo de dicha función, que se especifica mediante N = 5 puntos variables (P 0 , . . ., P 4 ) y un punto final fijo P 5 , y, por lo tanto, consta de N = 5 segmentos lineales. La distribución de referencia puede, por supuesto, especificarse con una precisión arbitraria insertando puntos de control adicionales. Por lo tanto, podemos reformular el objetivo como encontrar una operación puntual que desplace las líneas del histograma de modo que el histograma acumulativo resultante sea aproximadamente lineal.
      p.center
        img(src='./assets/chap05/p061-fig5-9.png' height="200px" style="margin: 0px 0px 0px 0px;")
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Podemos solucionar este problema asignando todos los valores b < P L (0) a cero y así obtener una “semi-inversa” de la distribución de referencia como Aquí n = máx{ j ∈ {0, . . . N−1} | P j ≤ b} es el índice del segmento de línea (a n , P n ) → (a n+1 , P n+1 ) , que se superpone al valor del argumento b. La función de mapeo requerida f hs para adaptar una imagen dada con distribución de intensidad P A se especifica finalmente como Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Podemos solucionar este problema asignando todos los valores b < P L (0) a cero y así obtener una “semi-inversa” de la distribución de referencia como Aquí n = máx{ j ∈ {0, . . . N−1} | P j ≤ b} es el índice del segmento de línea (a n , P n ) → (a n+1 , P n+1 ) , que se superpone al valor del argumento b. La función de mapeo requerida f hs para adaptar una imagen dada con distribución de intensidad P A se especifica finalmente como Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p(style="margin-top: -0px; color: black; line-height: 1.4; text-align: left; padding: 0px;") Ajuste a una distribución lineal por partes Podemos solucionar este problema asignando todos los valores b < P L (0) a cero y así obtener una “semi-inversa” de la distribución de referencia como Aquí n = máx{ j ∈ {0, . . . N−1} | P j ≤ b} es el índice del segmento de línea (a n , P n ) → (a n+1 , P n+1 ) , que se superpone al valor del argumento b. La función de mapeo requerida f hs para adaptar una imagen dada con distribución de intensidad P A se especifica finalmente como Ajuste a una distribución lineal por partes Los valores intermedios de P L (i) se obtienen por interpolación lineal entre los puntos de control como donde m = max { j ∈ [0,N −1] | aj ≤ i} es el índice del segmento de línea (a m , P m ) → (a m+1 , P m+1 ) , que se superpone a la posición i. Para la especificación del histograma, también necesitamos la función de distribución inversa P L −1 (b) para b ∈ [0, 1] . La función P L (i) no es, en general, invertible para valores b < P L (0) .La operación del punto deseado <span class="min">f<sub class="mnn">ec</sub></span><span class="mnn">( )</span> se obtiene simplemente del histograma acumulativo <span class="min">H</span> de la imagen original como
      p.center
        <svg width="300" height="150">          
            <text x="170" y="55" fill="black" font-family="Times"><tspan class="min">K</tspan> - <tspan class="mnn">1</tspan></text>
            <text x="170" y="85" fill="black" font-family="Times"><tspan class="min">MN</tspan></text>
            <text x="5" y="71" fill="black" font-family="Times"><tspan class="min">f<tspan baseline-shift="sub" style="font-size: 15px; font-style: normal;">ec</tspan></tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan>) = &ensp;<tspan class="min">H</tspan><tspan class="mnn">(</tspan><tspan class="min">a</tspan><tspan class="mnn">) ·</tspan></text>
            <text x="80" y="80" fill="black" font-family="Times" font-size="50px" font-weight="300"><tspan class="mnn">&#9123;</tspan>&emsp;&emsp;&ensp;<tspan class="mnn">&#9126;</tspan></text>
            <line x1="160" y1="63" x2="220" y2="63" style="stroke:black; stroke-width:2"/>
        </svg>
      p.center
        img(src='./assets/chap05/p062-fig5-10.png' height="400px" style="margin: 0px 0px 0px 0px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h1(v-if = 'isActive' style="margin: 0 0 0px 0px;" ).center Geometría proyectiva

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometria proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Geometria proyectiva
      p(v-if = 'isActive')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Puntos, líneas y planos</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Transformaciones 2D</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Homografia</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Transformaciones 3D</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Reconstruccion 3D</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Calibración</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Geometría proyectiva
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En un nivel elemental la geometría es el estudio de puntos y líneas, y sus relaciones.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") A lo largo de la historia la geometría ha sido concebida inicialmente como una disciplina netamente geométrica, en la que las líneas y puntos se estudian sin considerar un sistema de coordenadas.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Posteriormente, mediante la introducción de un sistema de coordenadas cartesiano se logra algebraizar a la geometría.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") De esta manera, las entidades geométricas pueden ser descritas como coordenadas y entidades algebraicas.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por medio de las relaciones algebraicas se obtiene una representación matemática apropiada para implementar algoritmos y programar métodos computacionales.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En algunos casos la geometría logra visualizar mejor un problema dado, en otros el  álgebra puede representarlo y resolverlo más fácilmente.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un punto en un plano se representa como un par de coordenadas <span style="color: blue; font-family: Arial;">(x, y)</span> en <span style="color: blue; font-family: Arial;">R<sup>2</sup></span>.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Comúmente, <span style="color: blue; font-family: Arial;">R<sup>2</sup></span> se identifica con un plano. Se puede considerar como un espacio vectorial en el que <span style="color: blue; font-family: Arial;">(x, y)</span> es un vector. Se asocia así, un punto a un vector <span style="color: blue; font-family: Arial;">m = (x, y)<sup>T</sup></span>.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Una línea recta en el plano (x, y) está representada por la ecuación: 
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;").center <span style="color: blue; font-family: Arial;">ax + by + c = 0</span>. &emsp;&emsp;&emsp; (2.1)
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") De esta manera, una línea recta puede ser representada por un vector <span style="color: blue; font-family: Arial;">l = (a,b,c)<sup>T</sup></span>.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La correspondencia entre líneas rectas y vectores no es uno a uno, ya que <span style="color: blue; font-family: Arial;">(a,b,c)<sup>T</sup></span> y <span style="color: blue; font-family: Arial;">(ka,kb,kc)<sup>T</sup></span> representan exactamente la misma línea recta para <span style="color: blue; font-family: Arial;">k &ne; 0</span>, sin embargo son vectores distintos. Estos vectores son considerados como equivalentes y se definen como vectores homogéneos.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un punto <span style="color: blue; font-family: Arial;">(x, y)</span> está en la recta <span style="color: blue; font-family: Arial;">l = (a, b, c)<sup>T</sup></span> si y sólo si la ecuación (2.1) es verdadera. Esta ecuación puede escribirse utilizando el producto punto entre los vectores <span style="color: blue; font-family: Arial;"><b>l</b> = [a, b, c]<sup>T</sup></span> y <span style="color: blue; font-family: Arial;"><b>m</b> = [x, y, 1]<sup>T</sup></span> como:
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;").center <span style="color: blue; font-family: Arial;"><b>l</b>•<b>m</b> = <b>l</b><sup>T</sup><b>m</b> = [a,b,c][x,y,1]<sup>T</sup> = ax + by + c = 0</span>. &emsp; (2.2)
      //- p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Así, el punto (x,y) es representado por un vector (x,y,1)T. Sin embargo, los vectores (kx,ky,k), para k 6= 0, pueden considerarse tambi ́en como representaciones del mismo punto (x,y) ya que satisfacen la ecuaci ́on [a b c]T[kx ky k] = k(ax + by + c) = 0. Se dice entonces, que los puntos en un plano bidimensional pueden ser representados por vectores homog ́eneos de tres dimensiones cuyos dos primeros elementos son las coordenadas del punto en el plano y el tercer elemento es 1.
      //- p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En términos generales, si se tiene un vector homog ́eneo de tres dimensiones dado por (x1, x2, x3)T que representa un punto en un plano, las coordenadas de este punto en el plano est ́an definidas como (x, y) = (x1/x3, x2/x3).En un nivel elemental la geometría es el estudio de puntos y líneas, y sus relaciones.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
   
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Representación de un punto en 2D
      point
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Representación de una linea 2D
      point-line
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Representación de una linea 2D
      point-line-homo
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 1
      example-one
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 2
      example-two
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 3
      example-three
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 4
      example-four
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 5
      example-five
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 6
      example-six
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 7
      example-seven
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 8
      example-eight
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 9
      example-nine
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 10
      example-ten
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 11
      example-eleven
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        
    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Geometría proyectiva</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Planos, puntos y líneas rectas
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejercicio 12
      example-twelve
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;
        

    slide(:steps=1, enter='bounceInDown'  :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Detección de caracteristicas</sup>
      h5(v-if = '!isActive').center 
      h5(v-if = 'isActive' style="margin: 0 0 20px 0px;" ).center Detección de carcterísticas
      p(v-if = 'isActive')
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>Estimación de parametros</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if = 'isActive') <b>SIFT</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Local Binary Patterns</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Haralick</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if = 'isActive') <b>Gabor</b>
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
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
    'point': require('./components/point_01'),
    'point-line': require('./components/point_line_01'),
    'point-line-homo': require('./components/point_line_02'),
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
    'example-twelve': require('./components/ExampleTwelve')
    // 'example-thirteen': require('./components/ExampleThirteen'),
    // 'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      isActive: true,
      languages: ['🇺🇸', '🇲🇽'],
      topics: ['Inicio', 'temas', 'Intro', 'histograma', 'Filtro espacial', 'Filtro frecuencias', 'Grometria proyectiva', 'Deteccion de caracteristicas', 'Bibliografía'],
      page: [1, 2, 4, 8, 10, 14, 44, 57, 57]
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
// @import 'node_modules/eagle.js/dist/themes/gourmet/gourmet';
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
  justify-content: center;
  margin: 0px 0px 0px 0px;
}

.themes {
  width: auto;
  display: flex;
  justify-content: center;
  margin: 0px 0px 0px 0px;
  font-family: arial;
  font-weight: bold;
}

</style>
