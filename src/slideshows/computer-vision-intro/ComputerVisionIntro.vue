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
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Así, el punto (x,y) es representado por un vector (x,y,1)T. Sin embargo, los vectores (kx,ky,k), para k 6= 0, pueden considerarse tambi ́en como representaciones del mismo punto (x,y) ya que satisfacen la ecuaci ́on [a b c]T[kx ky k] = k(ax + by + c) = 0. Se dice entonces, que los puntos en un plano bidimensional pueden ser representados por vectores homog ́eneos de tres dimensiones cuyos dos primeros elementos son las coordenadas del punto en el plano y el tercer elemento es 1.
      p(v-if = 'isActive' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En t ́erminos generales, si se tiene un vector homog ́eneo de tres dimensiones dado por (x1, x2, x3)T que representa un punto en un plano, las coordenadas de este punto en el plano est ́an definidas como (x, y) = (x1/x3, x2/x3).En un nivel elemental la geometría es el estudio de puntos y líneas, y sus relaciones.
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
    // 'example-three': require('./components/ExampleThree'),
    'example-four': require('./components/ExampleFour')
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
      languages: ['🇺🇸', '🇲🇽'],
      topics: ['Inicio', 'temas', 'Intro', 'histograma', 'Filtro espacial', 'Filtro frecuencias', 'Grometria proyectiva', 'Deteccion de caracteristicas', 'Bibliografía'],
      page: [1, 2, 4, 8, 10, 14, 20, 25, 32, 34, 35]
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
