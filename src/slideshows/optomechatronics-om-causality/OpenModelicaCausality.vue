<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        p Open modelica<br>Computational causality
        //- eg-triggered-message(:trigger='slideTimer >= 2',
        //-                     :duration='6', position='top right',
        //-                     enter='bounceInRight', leave='bounceOutRight')
        //-   p Next:
        //-   img.control-schema(src='./assets/controlsNext.svg')
        //-   p Previous:
        //-   img.control-schema(src='./assets/controlsPrev.svg')
        //- .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    //- slide(enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h6(style="margin-top: -20px;")
    //-     | Fundamentals of optics
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Image Formation</b>
    //-     //- eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-     //-   p(style="margin: -10px 0 0 0;") <b>Imaging Devices</b><br><span style="font-size: 0.7em;">Image Display: Interlacing</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Image Processing</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Image Representation</b><br><span style="font-size: 0.7em;">Binary Image, Gray Scale Image, Histogram, Histogram Modification.</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Image Filtering</b><br><span style="font-size: 0.7em;">Mean Filter, Median Filter.</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Image Segmentation</b><br><span style="font-size: 0.7em;">Thresholding, Iterative Thresholding, Region-Based Segmentation</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Edge Detection</b><br><span style="font-size: 0.7em;">Roberts Operator, Sobel Operator. Laplacian Operator.</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Hough Transform</b>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(style="margin: -10px 0 0 0;") <b>Camera Calibration</b><br><span style="font-size: 0.7em;">Perspective Projection</span>
    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Introduction
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Introducción
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El comportamiento de un modelo se puede describir en Modelica usando ecuaciones y algoritmos.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un algoritmo es una secuencia ordenada de asignaciones. Una tarea tiene la forma variable := expresión.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La causalidad computacional de un algoritmo se especifica en el propio algoritmo: las variables calculadas a partir del algoritmo (computational outputs) son todas las escritas a la izquierda de las asignaciones, y el resto de variables que intervienen en el algoritmo son entradas computacionales.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Una ecuación consta de dos expresiones separadas por el signo igual. La forma de escribir una ecuación no determina su causalidad computacional.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En general, la causalidad computacional de una ecuación depende de la propia ecuación, y también de las demás ecuaciones y algoritmos del modelo.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por esta razón, la causalidad computacional de los modelos descritos mediante ecuaciones es una propiedad global del modelo, que debe analizarse considerando el modelo completo.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Classification of the model variables
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Clasificación de las variables del modelo
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las dos acciones siguientes se realizan antes de iniciar el análisis de la causalidad computacional.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. <span style="font-weight: bold;">Reemplazar derivadas por variables ficticias</span>. Las variaciones ficticias. Los nombres de las tablas se construyen concatenando el prefijo "der" y la variable nombres Por ejemplo, <span style="font-weight: bold;">dx/dt</span> sería reemplazado en todas las ecuaciones del modelo por una variable ficticia denominada <span style="font-weight: bold;">derx</span>.

      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. <span style="font-weight: bold;">Clasificar las variables del modelo en variables conocidas y desconocidas</span>. Las variables desconocidas son aquellas que deben calcularse a partir de las ecuaciones del modelo. Por lo tanto, el objetivo de asignar la causalidad computacional es averiguar qué ecuación se debe emplear para evaluar cada variable desconocida.

      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las siguientes variables se clasifican como variables conocidas: <br> - <span style="font-weight: bold;">La variable tiempo</span>. <br> - Las <span style="font-weight: bold;">constantes</span> y <span style="font-weight: bold;">parámetros</span>. Sus valores se calculan al comienzo de la simulación y no cambian durante la simulación.<br>- Las <span style="font-weight: bold;">variables de estado</span>. No se calculan a partir de las ecuaciones del modelo. Las variables de estado se calculan por integración numérica de sus derivadas.<br><br> Las siguientes variables se clasifican como <span style="font-weight: bold;">variables desconocidas</span>:<br> - Las <span style="font-weight: bold;">variables ficticias</span> introducidas para reemplazar las derivadas.<br> - El <span style="font-weight: bold;">resto de variables</span>. Es decir, las variables del modelo dependientes del tiempo que no se seleccionan como variables de estado.
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En aras de la simplicidad, supongamos ahora (eliminaremos esta suposición en la siguiente lección) que todas las variables que aparecen diferenciadas pueden seleccionarse como variables de estado. Esto es equivalente a suponer que el modelo tiene igual número de grados de libertad y variables diferenciadas.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Clasificación de las variables del modelo
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Podemos representar el conjunto de ecuaciones del modelo como
      .center
        img(src='./assets/eq4-1.png' width="150px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde los vectores <span style="font-weight: bold;">x</span> e <span style="font-weight: bold;">y</span> representan las variables conocidas y desconocidas respectivamente. En base a esta representación del modelo, la <span style="font-weight: bold;">matriz de incidencia</span> del modelo, también conocida como <span style="font-weight: bold;">matriz jacobiana estructural</span>, es una matriz de elementos booleanos que indica qué variables desconocidas intervienen en cada ecuación. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La matriz de incidencia se puede definir de la siguiente manera. <br><br>Si la j-ésima variable desconocida no aparece en la i-ésima ecuación del modelo, entonces el elemento (i, j) de la matriz de incidencia es cero. De lo contrario, el elemento es uno y se representa con una cruz (X).
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Clasificación de las variables del modelo
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El siguiente ejemplo permite ilustrar la construcción de la matriz de incidencia. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Supongamos un modelo compuesto por tres ecuaciones y tres variables denominadas x, y y z.<br><br> La estructura computacional del modelo es la siguiente: <br><br>- x, y y z intervienen en la primera ecuación.<br> - x y y, y la derivada de x, intervienen en la segunda ecuación. <br>- x y z intervienen en la tercera ecuación.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Clasificación de las variables del modelo
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La estructura computacional de este modelo se representa como se muestra a continuación, donde x ̇ representa la derivada de x.
      .center
        img(src='./assets/eq4-2.png' width="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Sustituyendo x ̇ por derx, se obtiene:
      .center
        img(src='./assets/eq4-5.png' width="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como la derivada de x aparece en el modelo, supongamos que se puede seleccionar x como variable de estado. Seleccionando x como variable de estado, el modelo tiene las siguientes tres variables desconocidas: derx, y y z.<br><br> La matriz de incidencia es:
      .center
        img(src='./assets/eq4-8.png' width="250px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Singularidad estructural
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El siguiente paso en el análisis de la causalidad computacional del modelo es comprobar si el modelo es estructuralmente singular.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para ello, se comprueba si:
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. El número de variables desconocidas es el mismo que el número de ecuaciones.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Cada variable desconocida puede estar asociada a una ecuación que satisfaga simultáneamente las dos condiciones siguientes: <br>&emsp;&emsp;- la variable interviene en la ecuación, <br>&emsp;&emsp;- otra variable desconocida no ha sido asociada a esta ecuación previamente.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Esta última condición se comprueba encontrando una secuencia de permutaciones de las columnas de la matriz (variables desconocidas) que permita obtener una matriz permutada con todos los elementos de la diagonal principal distintos de cero.<br> Si tal secuencia de permutaciones no existe, entonces se dice que el modelo es estructuralmente singular.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por ejemplo, permutando el orden de las dos primeras columnas de la matriz de incidencia, se obtiene una matriz con todos los elementos de la diagonal distintos de cero. Por tanto, el modelo representado por la matriz no es estructuralmente singular.
      .center
        img(src='./assets/eq4-9.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La siguiente matriz de incidencia corresponde a un modelo estructuralmente singular.
      .center
        img(src='./assets/eq4-10.png' width="700px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Singularidad estructural
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En general, los modelos son estructuralmente singulares debido a las siguientes razones:
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. El número de ecuaciones (E) es igual al número de variables desconocidas (V), pero no es posible obtener una matriz con diagonal principal libre de cero permutando las columnas de la matriz de incidencia. Ante esta situación, existen dos posibilidades: <br><br> a) El modelo es matemáticamente incorrecto. <br>b) El modelo es matemáticamente correcto, pero el número de sus grados de libertad es menor que el número de variables que aparecen diferenciadas en el modelo. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. El número de ecuaciones (E) y el número de variables desconocidas (V) no son iguales. En este caso, se dice que el modelo está <span style="font-weight: bold;">sobredeterminado</span> (E > V) o <span style="font-weight: bold;">subdeterminado</span> (E < V).
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Algoritmo de partición
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Supongamos que el modelo no es estructuralmente singular. <br> El siguiente paso es transformar la matriz de incidencia en una matriz triangular inferior por bloques (BLT), con bloques diagonales lo más pequeños posible.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Esta transformación, conocida como partición del modelo, se realiza permutando filas y permutando columnas de la matriz de incidencia. La matriz de incidencia escrita en forma BLT se denomina matriz de incidencia ordenada del modelo.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La matriz de incidencia en forma BLT tiene la siguiente propiedad. Las variables desconocidas que intervienen en las ecuaciones de cada bloque diagonal se calculan a partir de las ecuaciones de este bloque, o apartir de las ecuaciones de bloques anteriores.
    
      .center
        // img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Algoritmo de partición
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se han propuesto varios algoritmos para transformar la matriz de incidencia en su forma BLT. Por ejemplo, un algoritmo ampliamente utilizado es el algoritmo de Tarjan, que emplea gráficos bipartitos para representar la estructura computacional del modelo. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El procedimiento consiste en la aplicación reiterada de las siguientes reglas:
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Regla 1. Suponga que una o más variables desconocidas aparecen en una ecuación, y solo una de estas variables aún no ha sido evaluada. Entonces, la ecuación debe emplearse para calcular esta variable desconocida no evaluada.  
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Regla 2. Supongamos que aún no se ha evaluado una variable desconocida, y esta variable solo aparece en una de las ecuaciones cuya causalidad computacional aún no se ha asignado. Luego, la variable desconocida no evaluada debe calcularse a partir de esta ecuación.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El siguiente ejemplo permite ilustrar este procedimiento para particionar el modelo. <br>El modelo y la matriz de incidencia original se muestran nuevamente para comodidad del lector.
      .center
        img(src='./assets/eq4-11.png' width="700px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Algoritmo de partición
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. La ecuación f3 contiene solo una variable desconocida: la variable z. Por lo tanto, se debe emplear f3 para evaluar z (Regla 1). Como z no solo aparece en f3, sino que también aparece en f1, el valor de z es necesario para calcular otras variables no evaluadas. Entonces, f3 se mueve a la primera fila y z a la primera columna. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La variable derx aparece en una sola ecuación: la ecuación f2. Por lo tanto, derx debe evaluarse desde f2 (Regla 2). Como derx no interviene en ninguna otra ecuación, el valor de derx no se emplea para calcular otras variables desconocidas. Entonces, f2 se mueve a la última fila y derx a la última columna.
      .center
        img(src='./assets/eq4-12.png' width="300px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Algoritmo de partición
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Como z se evalúa a partir de f3, f1 contiene solo una variable no evaluada: y. Por lo tanto, y debe evaluarse a partir de f1 (Regla 1).
      .center
        img(src='./assets/eq4-12.png' width="300px" style="margin: 10px 0px -0px -0px;")
 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo ordenado, con la causalidad computacional anotada, se muestra a continuación. <br>Observe que la variable a evaluar de cada ecuación se señala al incluir la variable entre corchetes.
      .center
        img(src='./assets/eq4-14.png' width="300px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Sistemas sobredeterminados y subdeterminados
      p(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si el modelo está <span style="font-weight: bold;">indeterminado</span>, es útil averiguar qué variables se pueden resolver y cuáles no. <br>Para ello, se incluye en el modelo un conjunto de ecuaciones ficticias que cumplen que: el número de ecuaciones resultante es igual al número total de variables desconocidas; y cada ecuación ficticia contiene todas las variables desconocidas. <br>Esto es equivalente a agregar tantas filas llenas de unos como sea necesario para hacer que la matriz de incidencia sea cuadrada.
      //- p(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      //- p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Luego, esta matriz extendida se particiona. Como en cada ecuación ficticia intervienen todas las variables desconocidas, todas estas ecuaciones ficticias estarán en el último bloque diagonal de la matriz de incidencia ordenada. Todos los bloques diagonales, excepto el último, definen las variables desconocidas que se pueden calcular a partir de las ecuaciones del modelo y la secuencia en la que se deben realizar estos cálculos.
      p(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") A Ejemplo. Consideremos un modelo compuesto por dos ecuaciones y tres variables: x, y, z. La estructura computacional es la siguiente. Las variables x, y, z, y la derivada de x, aparecen en la primera ecuación. Las variables x e y aparecen en la segunda ecuación. Por lo tanto, el modelo tiene tres variables desconocidas (derx, y, z) y dos ecuaciones. Para analizar qué variables desconocidas se pueden calcular a partir del modelo, se agrega una ecuación ficticia al modelo.
      .center
        img(src='./assets/eq4-17.png' width="700px" style="margin: 10px 0px -0px -0px;")
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Sistemas sobredeterminados y subdeterminados
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") A continuación, se particiona la matriz de incidencia extendida. Como f2 solo contiene una variable desconocida (y), f2 se mueve a la primera fila e y a la primera columna. La matriz de incidencia en su forma BLT es
      .center
        img(src='./assets/eq4-18.png' width="300px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como las variables derx y z se calculan en el último bloque diagonal, se necesita una ecuación adicional para calcular estas dos variables.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Sistemas sobredeterminados y subdeterminados
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelos <span style="font-weight: bold;">sobredeterminados</span> se pueden analizar de manera análoga. Denotemos la diferencia entre el número de ecuaciones y las variables desconocidas como E - V . Para analizar el modelo sobredeterminado, se introducen variables ficticias, de manera que todas intervienen en cada ecuación del modelo. Esto es equivalente a agregar tantas columnas llenas con unos como sea necesario para hacer que la matriz de incidencia sea cuadrada.

      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Al particionar esta matriz de incidencia extendida, la matriz BLT obtenida tendrá algunas variables desconocidas y todas las variables ficticias en el primer bloque diagonal. La razón por la que las variables ficticias aparecen en el primer bloque diagonal es la siguiente. Como todas las variables ficticias se han incluido en todas las ecuaciones del modelo,       es necesario conocer el valor de las variables ficticias para calcular todas las variables desconocidas del modelo.
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las ecuaciones redundantes E − V (tantas como variables ficticias) se encuentran entre las ecuaciones del primer bloque diagonal. Las variables del primer bloque diagonal son todas las variables ficticias y las variables desconocidas que aparecen en las ecuaciones redundantes.<br>A continuación se muestra un ejemplo. El modelo está compuesto por cuatro ecuaciones y tiene tres variables: x, y, z. La estructura computacional de las ecuaciones del modelo y la matriz de incidencia extendida se muestran en (4.19). Observe que se ha incluido una variable ficticia llamada α en todas las ecuaciones.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") A Ejemplo. El modelo está compuesto por cuatro ecuaciones y tiene tres variables: x, y, z. <br>Observe que se ha incluido una variable ficticia llamada &alpha; en todas las ecuaciones.
      .center
       img(src='./assets/eq4-19.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como derx solo aparece en f4, se debe emplear f4 para calcular derx. La ecuación f4 permanece en la última fila y derx se mueve a la última columna. Las otras tres variables desconocidas se evalúan en el primer bloque diagonal. En conclusión, una ecuación entre f1, f2 y f3 es redundante.
      .center
        img(src='./assets/eq4-20.png' width="300px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El ejemplo discutido en esta sección permite ilustrar la asignación de causalidad computacional. Está compuesto por una fuente de tensión sinusoidal, dos resistencias y dos condensadores. Se han asignado nombres a las corrientes y los voltajes de los nodos. Se supone que las resistencias (R1, R2), las capacitancias (C1, C2) y la amplitud (U) y la frecuencia (w) de la fuente, son parámetros conocidos. 
      .center
        img(src='./assets/fig4-1.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  El modelo de circuito se compone de las siguientes seis ecuaciones:  
      .center
        img(src='./assets/eq4-21.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  El primer paso es reemplazar en el modelo las derivadas por variables ficticias:  
      .center
        img(src='./assets/eq4-27.png' width="400px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center  Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El siguiente paso es clasificar las variables del modelo en variables conocidas (tiempo, parámetros y variables de estado) y variables desconocidas (resto de variables del modelo y variables ficticias introducidas reemplazando las derivadas). Suponiendo que las dos variables que aparecen diferenciadas pueden seleccionarse como variables de estado, las variables se clasifican de la siguiente manera.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") -- Conocidas
      .center
        img(src='./assets/eq4-31B.png' width="300px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") -- Desconocidas
      .center
        img(src='./assets/eq4-31C.png' width="250px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se construye la matriz de incidencia original del modelo
      .center
        img(src='./assets/eq4-33.png' width="500px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Con el fin de analizar si el modelo es estructuralmente singular, se comprueba que:
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. El número de ecuaciones y el número de variables desconocidas son iguales. Este modelo tiene seis ecuaciones y seis variables desconocidas: deru1, deru2, i, i1, i2, u.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Se puede establecer una relación uno a uno entre las variables desconocidas y las ecuaciones del modelo, satisfaciendo que: cada variable desconocida está asociada con una ecuación en la que aparece la variable, y cada ecuación está asociada con una sola variable.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Esto es equivalente a encontrar una secuencia de permutaciones de columnas que transforme la matriz de incidencia original en una matriz sin ceros en la diagonal. La matriz obtenida se muestra a continuación.
      .center
        img(src='./assets/eq4-34.png' width="400px" style="margin: 10px 0px -0px -0px;")
      .center
       // img(src='./assets/eq2-27.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La matriz de incidencia ordenada se puede obtener aplicando las dos reglas, como se describe a continuación.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. La relación constitutiva de la fuente de voltaje contiene solo una variable desconocida: u. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva de la resistencia R2 contiene solo una variable desconocida: i2.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por lo tanto, estas variables deben calcularse a partir de estas ecuaciones. Como estas variables desconocidas intervienen en otras ecuaciones, estas dos ecuaciones se trasladan a las primeras filas, y estas variables a las primeras columnas.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La variable deru1 solo aparece en una ecuación: la relación constitutiva del capacitor C1.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La variable deru2 solo aparece en una ecuación: la relación constitutiva del capacitor C2.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como los valores de estas variables no se emplean en el cálculo de otras variables, estas dos ecuaciones se trasladan a las últimas filas y estas variables a las últimas columnas.
      .center
        img(src='./assets/eq4-35.png' width="500px" style="margin: 10px 0px -0px -0px;")
      .center
       // img(src='./assets/fig2-8.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2.  Assuming that u and i2 have already been evaluated, the constitutive rela- tionship of the R1 resistor has only one unevaluated variable: i. Moving this equation to the third row and i to the third column, the following incidence matrix is obtained.
      .center
        img(src='./assets/eq4-36.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        // img(src='./assets/eq2-31.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Suponiendo que u, i2 y i ya han sido evaluadas, la ecuación de la conservación de la corriente contiene solo una variable no evaluada: i1. Por lo tanto, i1 debe calcularse a partir de la ecuación de conservación actual. La matriz de incidencia ahora está escrita en forma BLT.
      .center
        img(src='./assets/eq4-37.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        // img(src='./assets/eq2-31.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por tanto, las ecuciones ordenadas del modelo, con la causalidad computacional indicada, son las siguientes:
      .center
        img(src='./assets/eq4-38.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Manipulando las ecuaciones, la variable a calcular de cada ecuación se aísla en un lado de la ecuación. El modelo ordenado y resuelto se obtiene:
      .center
        img(src='./assets/eq4-44.png' width="300px" style="margin: 10px 0px -15px -0px;")
      .center
        img(src='./assets/eq4-45.png' width="300px" style="margin: 0px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Ejemplo: simulación de un circuito eléctrico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En la figura se muestra un algoritmo para simular el modelo de circuito. La integración numérica se realiza aplicando el método de Euler directo. Observe que la clasificación de las variables del modelo en parámetros (variables independientes del tiempo), variables de estado y variables algebraicas (variables dependientes del tiempo no seleccionadas como variables de estado) se utiliza como base para escribir el algoritmo de simulación.  
      .center
        img(src='./assets/fig4-2.png' width="400px" style="margin: 10px 0px -0px -0px;")
      .center
        // img(src='./assets/fig2-11.png' width="500px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in two dimensions
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en dos dimensiones
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Some built-in functions for arrays
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Funciones para arreglos  
      .center
        // img(src='./assets/table2-5.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples of array equations
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de ecuaciones con arreglos  
      .center
        // img(src='./assets/table2-6.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples showing how to declare and assign value to parameter arrays
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos mostrando como declarar y asignar valores a un arreglo  
      .center
        // img(src='./assets/table2-7.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in two dimensions
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en dos dimensiones
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples of array constructors with iterators.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de constructores de arreglos con iteradores  
      .center
        // img(src='./assets/table2-8.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Example of for-clause in equation section.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplo de ciclo for en la sección de ecuaciones  
      .center
        // img(src='./assets/table2-9.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples of array equations and algorithms.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de ecuaciones con arreglos y algoritmos  
      .center
        // img(src='./assets/table2-10.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") An algorithm section is composed of a sequence of assignments that is evalua- ted by the modeling environment in the same order as written. A variable can be evaluated more than once within an algorithm section. However, a variable evaluated in an algorithm section cannot be evaluated in other algorithm section or equation.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Una sección de algoritmo se compone de una secuencia de asignaciones que es evaluada por el entorno de modelado en el mismo orden en que están escritas. Una variable puede evaluarse más de una vez dentro de una sección de algoritmo. Sin embargo, una variable evaluada en una sección de algoritmo no puede evaluarse en otra sección o ecuación de algoritmo.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Radial heat transfer in a pipe
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Transferencia de calor radial en una tubería
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Stationary heat transfer in the radial direction of an insulated steel pipe.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Transferencia de calor estacionaria en la dirección radial de una tubería de acero aislada.  
      .center
        // img(src='./assets/fig2-12.png' width="400px" style="margin: 10px 0px -0px -0px;")
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parameters
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parámetros  
      //- .center
      //-   img(src='./assets/table2-11.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Radial heat transfer in a pipe
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Transferencia de calor radial en una tubería
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The system model is composed by
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del sistema está compuesto por  
      .center
        // img(src='./assets/eq2-43.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parameters
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parámetros  
      .center
        // img(src='./assets/table2-11.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Radial heat transfer in a pipe
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Transferencia de calor radial en una tubería
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parameters
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parámetros  
      .center
        // img(src='./assets/code2-8.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Result obtained of simulating during 86400 s.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Resultados obtenidos al simular por 86400 s.
      .center
        //img(src='./assets/fig2-13.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Radial heat transfer in a pipe
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Transferencia de calor radial en una tubería
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Suppose now that the air temperature (T<sub>5</sub>) is not described by a known function of time, but it has to be interpolated from the temperature readings recorded at specific times in a day. <br>We will program a Modelica function to calculate the temperature at any time of the day by linear interpolation between the available time-temperature recordings.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Supongamos ahora que la temperatura del aire (T<sub>5</sub>) no se describe mediante una función conocida del tiempo, sino que debe interpolarse a partir de las lecturas de temperatura registradas en momentos específicos del día.<br> Programaremos una función de Modelica para calcular la temperatura en cualquier momento del día por interpolación lineal entre los registros de tiempo-temperatura disponibles.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica provides the function class to create user-defined functions. The declaration of a function can consist of:<br><br> - The function interface, containing the declaration of the function arguments (input variables) and returned values (output variables). The input and out- put keywords are used to distinguish between input and output variables. <br><br> - The local variables employed in the function algorithm, declared within a protected section. <br><br> - The body of the function, consisting of an algorithm section or a call to an external function written in a programming language (typically, C or Fortran 77). <br><br>User-defined functions must fulfill the following rule: functions cannot have in- ternal memory. This means that given the same input, the function always must return the same output.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica proporciona la clase de función para crear funciones definidas por el usuario. La declaración de una función puede constar de:<br><br> - La interfaz de la función, que contiene la declaración de los argumentos de la función (variables de entrada) y los valores devueltos (variables de salida). Las palabras clave de entrada y salida se utilizan para distinguir entre variables de entrada y salida. <br><br> - Las variables locales empleadas en el algoritmo de la función, declaradas dentro de una sección protegida. <br><br> - El cuerpo de la función, que consta de una sección de algoritmo o una llamada a una función externa escrita en un lenguaje de programación (normalmente, C o Fortran 77).<br><br> Las funciones definidas por el usuario deben cumplir la siguiente regla: las funciones no pueden tener memoria interna. Esto significa que dada la misma entrada, la función siempre debe devolver la misma salida.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Radial heat transfer in a pipe
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Transferencia de calor radial en una tubería
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Function interface (above) and example of linear interpolation (below).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Interfaz de función (arriba) y ejemplo de interpolación lineal (abajo).
      
      .center
        // img(src='./assets/fig2-14.png' width="600px" style="margin: 10px 0px -0px -0px;")
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Result obtained of simulating during 86400 s.
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Resultados obtenidos al simular por 86400 s.
      .center
        // img(src='./assets/code2-9.png' width="700px" style="margin: 20px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Optomechatronics</b> <span class="small"> Fusion of Optical and Mechatronic Engineering</span> <br>Author: Hyungsuck Cho<br> Taylor and Francis
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, gustavo@gusbits.com with use of images from the above referenced book
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Computational causality',
    description: 'Computational causality',
    path: 'optomechatronics-om-causality/OpenModelicaCausality',
    course: 'Computational Mechatronics',
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
      theme: 'Open Modelica II',
      isSpanish: true,
      languages: ['🇺🇸', '🇲🇽']
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
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

.rotateimg90 {
  -webkit-transform:rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
}

.language {
  display: flex;
  justify-content: flex-end;
  margin: 0px 0px 0px 0px;
}

.pcontainer {
  padding: 15px;
  margin: 3px 0px 3px 0px;
  border: 1px solid black;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
