<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    div(style="width: 100%; display: flex; flex-wrap: wrap; align-items: center;").container.center
      button(v-for="(topic, index) in topics" @click="currentSlideIndex = page[index]").themes {{ topic }}
    //- <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        p Open modelica<br>Hybrid models
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
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center 
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Modelado de sistemas hibridos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelos híbridos son aquellos que combinan comportamiento en tiempo continuo con eventos. Un evento es un conjunto de acciones que se desencadenan cuando se cumple una determinada condición. Por tanto, la definición de un evento consiste en especificar la condición lógica que lo desencadena y las acciones a realizar.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La ejecución de las acciones asociadas al evento no consume tiempo simulado. Por esta razón, aquellas variables que cambian debido al evento tienen dos valores en el momento en que se desencadena el evento: el valor antes de la ejecución del evento y el valor después de la ejecución del evento.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica proporciona la función pre() para distinguir entre el valor de la variable antes del evento, pre(variable), y el nuevo valor de la variable después de la ejecución del evento, al que se hace referencia mediante el nombre de la variable. Por ejemplo, si la ecuación instantánea que describe la acción asociada a un evento es:Modelica es un lenguaje de modelado diseñado para facilitar la aplicación del paradigma de modelado físico.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") entonces el valor de la variable x se duplica cada vez que se ejecuta este evento.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las acciones que Modelica permite realizar en un evento son básicamente de los siguientes tres tipos:
      ul
        li <b>Cambio en la estructura del modelo</b>. Un evento puede generar un cambio en la estructura matemática del modelo. Es decir, un cambio en las ecuaciones que describen el comportamiento del modelo.
        li <b>Actualizar el valor de las variables de tiempo discreto</b>. La acción asociada a un evento puede ser modificar el valor de una o más variables de tiempo discreto. El valor de una variable de tiempo discreto es constante entre dos eventos consecutivos y cambia solo en los instantes del evento.
        li <b>Reinicialización de variables de estado de tiempo continuo</b>. Otra acción asociada a un evento puede ser cambiar el valor de una variable de tiempo continuo. Para que este cambio surta efecto, la variable cuyo valor se reinicializa en la acción del evento tiene que ser una variable de estado.
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se emplean oraciones if y cláusulas if para describir el primer tipo de acción. Para los dos últimos, se emplea la cláusula cuando. Esto se explica en detalle a continuación.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center If
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La instrucción <b>if</b> permite describir modelos con una estructura variable. Ambos pueden incluirse en secciones de ecuaciones y algoritmos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>if</b> permite describir funciones con varias ramas. Tiene básicamente la siguiente sintaxis, cuando se escribe dentro de una sección de ecuación y algoritmo respectivamente:
      .center
        img(src='./assets/eq9-2.png' height="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde <b>var</b> es una variable, <b>cond</b> es una expresión booleana y <b>expr</b> es una expresión. De lo contrario, las ramas pueden ser reemplazadas por <b>elseif-then-else</b>. Por ejemplo:
      .center
        img(src='./assets/eq9-3.png' height="150px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La sintaxis de una cláusula <b>if</b> escrita dentro de una sección de ecuación es básicamente:
      .center
        img(src='./assets/eq9-4.png' height="150px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si las cláusulas escritas dentro de las secciones del algoritmo contienen asignaciones, en lugar de ecuaciones. De manera análoga a las oraciones <b>if</b>, las ramas else pueden reemplazarse por <b>elseif-entonces-else</b>.
      .center
        img(src='./assets/eq9-5.png' height="200px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Manejo textual de expresiones <b>if</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los entornos de modelado de Modelica realizan un manejo basado en eventos de expresiones <b>if</b>. Es decir, cuando se detecta un evento, se detiene la integración numérica del problema de tiempo continuo, se calcula el tiempo de activación aplicando algoritmos iterativos (iteración de eventos) y se resuelve el problema de reinicio. La antigua rama de la expresión <b>if</b> se utiliza en la iteración del evento y la nueva rama para resolver el problema de reinicio.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Sin embargo, en algunos casos el cambio de rama no introduce discontinuidades en el valor de la expresión y sus derivadas, o el efecto de estas es pequeño. En estos casos, es posible la integración a través del punto de conmutación de la derivación. Como este procedimiento evita realizar la iteración del evento (calcular con precisión el tiempo en el que se produce el cambio de rama), se reduce el tiempo de CPU de simulación. Realizar dicho tratamiento textual de la expresión if puede dar como resultado una reducción significativa en el tiempo de simulación de modelos con una gran cantidad de eventos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El uso de la función <b>noEvent()</b> en la condición lógica de una expresión <b>if</b> indica que la expresión <b>if</b> debe manejarse textualmente (en oposición al manejo predeterminado basado en eventos). Por ejemplo, dadas las siguientes oraciones, escritas dentro de las secciones de ecuación o algoritmo respectivamente
      .center
        img(src='./assets/eq9-6.png' height="100px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") el entorno de modelado evalúa en primer lugar la condición booleana, para elegir cuál de las dos ramas de la expresión if debe usar, y luego calcula la variable correspondiente usando la rama elegida.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La función <b>noEvent()</b> también permite evitar errores numéricos en tiempo de ejecución cuando las ramas no pueden extenderse más allá de su rango de validez. Por ejemplo, la oración <b>if</b>
      .center
        img(src='./assets/eq9-7.png' height="50px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") puede generar un error de ejecución del tipo "intento de calcular la raíz cuadrada de un número negativo”. Este error se evita usando noEvent():
      .center
        img(src='./assets/eq9-8.png' height="50px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center <b>when</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La sintaxis de la cláusula when es básicamente la siguiente:
      .center
        img(src='./assets/eq9-9.png' height="100px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde cond (la condición desencadenante de la cláusula) es una expresión booleana. En este caso, las ecuaciones instantáneas incluidas en el cuerpo de la cláusula when se ejecutan sólo en el instante en el que el valor de la expresión booleana cambia de falso a verdadero.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La condición de activación de una cláusula when también puede ser un vector de expresiones booleanas, como se muestra a continuación. En este caso, la cláusula when se activa cada vez que cualquiera de los componentes del vector cambia su valor de falso a verdadero.
      .center
        img(src='./assets/eq9-10.png' height="100px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para ilustrar la diferencia entre estas dos formas de especificar la condición de activación, considere las dos cláusulas when que se muestran a continuación:
      .center
        img(src='./assets/code01.png' height="100px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La cláusula escrita en el lado izquierdo se activa cuando el valor de la expresión booleana (u1>0 o u2>0) cambia de falso a verdadero. La cláusula del lado derecho se activa cuando el valor de u1>0 cambia de falso a verdadero, y también cuando el valor de u2>0 cambia de falso a verdadero.
      .center
        img(src='./assets/fig9-1.png' height="200px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center When
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las ecuaciones instantáneas pueden ser de dos tipos:
      ul
        li Ecuaciones en diferencias que describen cómo se evalúan los nuevos valores de variables de tiempo discreto. Dependiendo de si la cláusula when está incluida dentro de una ecuación o sección de algoritmo, la ecuación instantánea tiene la siguiente sintaxis respectivamente, donde var representa el nuevo valor de la variable. 
        .center
          img(src='./assets/eq9-11.png' height="100px" style="margin: 10px 0px -0px -0px;") 
        p La función pre() permite hacer referencia al valor de la variable antes del evento, por ejemplo, pre(variable). Observe que las ecuaciones en diferencias deben escribirse en forma explícita. Es decir, con la variable a evaluar escrita en el lado izquierdo del símbolo “=" o ":=". El nuevo valor de la variable es el resultado de evaluar la expresión escrita en el lado derecho de la ecuación en diferencias.
        li reiniciar oraciones, empleadas para cambiar abruptamente el valor de variables de estado de tiempo continuo. La función tiene dos argumentos. La primera es la variable de estado de tiempo continuo cuyo valor se va a cambiar. La segunda es la expresión utilizada para evaluar el nuevo valor de la variable de estado. Si el primer argumento de la función reinit no es una variable de estado, entonces la llamada a la función no tiene ningún efecto. La función se invoca de la siguiente manera:Los valores de los parametros usados son
        .center
          img(src='./assets/eq9-13.png' height="50px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center When
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Regla de asignación única
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La regla de asignación única se aplica dentro del cuerpo de la cláusula when dependiendo de si la cláusula when está escrita dentro de una sección de ecuación o de una sección de algoritmo. Esto se explica a continuación.
      ul
        li En el caso de una cláusula when escrita dentro de una sección de ecuación, el orden en el que el desarrollador del modelo escribe las ecuaciones instantáneas es irrelevante. El entorno de modelado ordena automáticamente las ecuaciones instantáneas. Para que esto sea posible se debe cumplir la regla de asignación única, de la cual se está garantizando que cada variable sea evaluada a partir de una única ecuación.
        li Las asignaciones incluidas dentro de una sección de algoritmo se consideran un conjunto indivisible y el entorno de modelado no las manipula ni cambiar su orden. Por lo tanto, la regla de asignación única no se aplica dentro de una sección de algoritmo: se pueden escribir varias asignaciones a la misma variable dentro de una sección de algoritmo. Por ejemplo, es posible escribir:
        .center
          img(src='./assets/code02.png' height="170px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si estos dos eventos se disparan simultáneamente, entonces se ejecutan en orden y, por tanto, el nuevo valor de la variable cerrada sería falso.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Sin embargo, las secciones del algoritmo deben clasificarse junto con el resto del modelo. Por este motivo, una variable calculada en una sección del algoritmo no se puede calcular en ninguna otra sección del algoritmo ni a partir de una ecuación.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center When
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sample, inicial y terminal
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las funciones integradas <b>sample()</b>, <b>inicial()</b> y <b>terminal()</b> se pueden utilizar en la condición booleana de la cláusula <b>when</b> como se describe a continuación.
      ul
        li La función <b>sample()</b> dispara periódicamente la cláusula when, a partir de un instante inicial determinado. Por ejemplo, la cláusula escrita a continuación se activa en los siguientes instantes de tiempo: <b>t<sub>0</sub> + n·T</b> , con n = 0, 1, 2, . . .
        .center
          img(src='./assets/code03.png' height="150px" style="margin: 10px 0px -0px -0px;") 

        li La función <b>inicial()</b> activa la cláusula when en la inicialización del modelo.
        li La función <b>terminal()</b> activa la cláusula when cuando se cumple la condición final de la simulación. Tiene la siguiente sintaxis:
        .center
          img(src='./assets/eq9-14.png' height="100px" style="margin: 10px 0px -0px -0px;") 

      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La cláusula when también se puede utilizar para forzar la terminación de la simulación. La condición final en los ejemplos analizados hasta ahora es el tiempo simulado para alcanzar un valor predefinido, que se especifica en la definición del experimento. Sin embargo, la condición de terminación de algunos estudios de simulación depende no sólo del tiempo, sino también de algunas variables del modelo.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Estas condiciones de terminación, que dependen de las variables del modelo, se pueden describir llamando a la función terminate() dentro del cuerpo de una cláusula when. Esta función incorporada tiene un argumento de tipo Cadena: el mensaje escrito por el entorno de modelado en la ventana de mensajes cuando se ejecuta la función, lo que obliga a finalizar la simulación. Por ejemplo:
      .center
        img(src='./assets/code04.png' height="150px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center When
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center String
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>String</b> es un tipo de variable predefinido en Modelica. Las variables de cadena almacenan cadenas de caracteres. Para trabajar con variables String, es útil saber que:
      ul
        li El operador + concatena cadenas.
        li Las cadenas pueden contener caracteres de fin de línea (\n) y tabulación (\t).
        li Las funciones <b>realString()</b> e <b>integerString()</b> permiten convertir tipos Real e Integer en String, respectivamente. Estas funciones tienen tres argumentos de entrada y un argumento de salida, como se muestra a continuación.
        .center
          img(src='./assets/code05.png' height="250px" style="margin: 10px 0px -0px -0px;") 

      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Otra aplicación de la cláusula when es escribir en la ventana del mensaje. Esto puede ser útil para depurar modelos, ya que permite obtener información sobre el valor de variables determinadas en instantes de tiempo de simulación específicos, o cuando se cumplen ciertas condiciones.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La función <b>LogVariable()</b> escribe el valor real de una variable en la ventana del mensaje. Por ejemplo, la siguiente cláusula cuando escribe el valor de la variable x cada 0,1 s, comenzando desde el tiempo cero.
      .center
        img(src='./assets/code06.png' height="80px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Interruptor electrico ideal
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Consideremos el modelo de circuito eléctrico que se muestra a continuación
      .center
        img(src='./assets/fig9-2.png' height="220px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Está compuesto por un generador de voltaje, una resistencia y un interruptor ideal. La variable booleana open, cuya evolución temporal se muestra en el lado derecho de la figura, es una función conocida del tiempo. 
      .center
        img(src='./assets/code9-1.png' height="300px" style="margin: 10px 0px -0px -0px;") 
      .center
        img(src='./assets/fig9-3.png' height="700px" style="margin: 10px 0px -0px -0px;") 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Diodo ideal
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un diodo ideal puede estar en dos modos, conducción y corte, que son análogos a los modos cerrado y abierto de un interruptor ideal. El comportamiento del diodo ideal se modela de la siguiente manera:
      .center
        img(src='./assets/fig9-4.png' height="250px" style="margin: 10px 0px -0px -0px;") 
      ul
        li Mientras está en la fase de conducción, la caída de tensión entre los terminales del diodo es cero y la corriente que circula por él debe tener signo positivo. Cuando no se cumple esta última condición, el diodo pasa a la fase de corte.
        li Mientras está en la fase de corte, la corriente que fluye a través del diodo es cero y la caída de voltaje a través de los terminales del diodo debe ser menor o igual a cero. Cuando no se cumple esta condición de caída de tensión, el diodo pasa a la fase de conducción.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del diodo ideal se puede describir en Modelica mediante las dos ecuaciones.
      .center
        img(src='./assets/eq9-16.png' height="80px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Tenga en cuenta que la variable booleana corte se calcula a partir de la segunda ecuación, evaluando una expresión lógica que depende de dos variables de tiempo continuo. Mientras corte es igual a verdadero, el diodo está en modo de corte; y mientras sea falso, en el modo de conducción.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Consideremos el circuito rectificador
      .center
        img(src='./assets/fig9-5.png' height="200px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La aplicación del modelo se describe mediante las siguientes ecuaciones.
      .center
        img(src='./assets/eq9-17.png' height="300px" style="margin: 10px 0px -0px -0px;") 

      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los resultados son los
      .center
        img(src='./assets/fig9-6.png' height="600px" style="margin: 10px 0px -0px -0px;") 
      ul
        li Mientras el diodo está en el modo de corte (corte = verdadero), la corriente a través del diodo (i1) es cero. Por lo tanto, no hay caída de voltaje en la resistencia R1 y u1 es igual a u.
        li Mientras el diodo está en modo de conducción (corte = falso), no hay caída de voltaje en sus pines (u1 = u2). Parte del voltaje del generador cae en la resistencia R1 y el resto cae en el paralelo de R2 y C.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Diodo ideal
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En analogía al problema discutido para el interruptor ideal, el modelo de diodo ideal produce un error si el cambio de modo implica un cambio en el número de DoF del modelo completo. Por ejemplo, el modelo de diodo ideal no se puede utilizar para modelar el siguiente circuito.
      .center
        img(src='./assets/fig9-7.png' height="200px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La razon es la siguiente.
      ul
        li El modelo de circuito tiene un DoF mientras el diodo está en el modo de corte. <br>La relación constitutiva del diodo obliga a que no fluya corriente a través de él. <br>Así, la corriente proporcionada por el generador, que fluye completamente a través de R1, se distribuye entre R2 y C. <br>La caída de tensión a través del condensador se puede seleccionar como variable de estado.
        li Sin embargo, mientras el diodo está en modo de conducción, la relación constitutiva del diodo obliga a que la caída de tensión en sus terminales sea cero. <br>Como consecuencia, la caída de voltaje a través del condensador se calcula a partir de la relación constitutiva del diodo y esta variable no es una variable de estado. <br>El modelo tiene cero DoF.

      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para evitar que un cambio en el modo del diodo genere un cambio en el número de DoF del modelo de circuito completo, el modelo de diodo incluido en la Modelica Standard Library (MSL) incluye un poco de resistencia (Ron) en conducción y un poco de conductancia. (Goff) mientras está en corte. La relación constitutiva de este diodo resistivo es la siguiente :
      .center
        img(src='./assets/eq9-24.png' height="80px" style="margin: 10px 0px -0px -0px;") 
      .center
        img(src='./assets/fig9-8.png' height="250px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde el parámetro Uknee es el voltaje umbral del diodo, es decir, el valor de uD para el cual cambia la pendiente de la característica I-V. Por defecto, Uknee es cero, la resistencia de Ron es 10-5 ohmios y la conductancia de Goff es 10-5 ohmios-1. Los valores de estos tres parámetros se pueden modificar cuando se crea una instancia del componente y cuando se define el experimento.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La variable s, que determina el punto de funcionamiento del diodo, se declara como una variable adimensional (unidad="1") de tipo Real. Mientras el diodo está en corte, s es igual a uD − Uknee. Mientras el diodo está en conducción, s es igual a i − Goff · Uknee. Si s = 0, el diodo opera en el voltaje umbral (Uknee). Mientras s < 0, el punto de operación está por debajo del voltaje umbral y el diodo está en el modo de corte. Mientras s > 0, el punto de operación está por encima del voltaje umbral y el diodo está en el modo de conducción.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las constantes de corriente unitaria y voltaje unitario se han declarado para evitar inconsistencias en las unidades de la ecuación.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Sistema de dos tanques y válvulas
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Consideremos el sistema 
      .center
        img(src='./assets/fig9-9.png' height="250px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El sistema se modela como se muestra en el siguiente código
      .center
        img(src='./assets/code9-3.png' height="500px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si se utilizan oraciones para describir el caudal másico y la temperatura del líquido que fluye a través de la válvula.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Una oración cuando se usa para describir el cambio en la apertura de la válvula, que ocurre cuando el tiempo es mayor que t0 = 50 s.
      .center
        img(src='./assets/fig9-10A.png' height="500px" style="margin: 10px 0px -0px -0px;") 
      .center
        img(src='./assets/fig9-10B.png' height="500px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Cuando la apertura de la válvula theta se establece en el valor 0,5 (en t = 50 s), el flujo másico entre los dos tanques se vuelve instantáneamente diferente de cero. Dado que el nivel de líquido en ese momento es más alto en el segundo tanque, el líquido fluye del segundo tanque al primero. El líquido que fluye a través de la válvula está a la misma temperatura que el líquido almacenado en el tanque aguas arriba. Por tanto, el líquido que fluye está a la temperatura del segundo tanque. La temperatura del líquido en el segundo tanque es mayor que la temperatura del líquido en el primer tanque y, en consecuencia, la temperatura del líquido en el primer tanque aumenta.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Cuando la diferencia de nivel de líquido tiende a cero, el flujo a través de la válvula tiende a cero. Cuando los niveles (y por tanto las presiones) se igualan, el flujo se vuelve cero. Como no entra más líquido al primer tanque, la temperatura del líquido almacenado permanece constante a partir de ese instante. El líquido del segundo tanque mantiene la misma temperatura durante toda la simulación.      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Bouncing ball
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px; padding: 15px; line-height: 1.5em;") El movimiento vertical de una pelota que cae bajo la acción de la gravedad y rebota en el suelo. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") La energía específica (energía por unidad de masa) de la pelota está definida por la ecuación.
      .center
        img(src='./assets/eq9-25.png' height="80px" style="margen: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") El primer término de la expresión del lado derecho es la energía cinética de la pelota y el segundo término es la energía potencial.
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") La energía específica de la pelota se calcula al comienzo de la simulación, al inicio y después. cada rebote. Cuando la energía específica tras un rebote es inferior a una determinada proporción de la inicial, la pelota entra en un modo, denominado StoppedOnFloor, en el que la posición y la velocidad se ven obligadas a ser cero. Observe que la carga computacional del modelo en el modo StoppedOnFloor es muy baja y se evita el problema de vibración.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Para evitar que la pelota caiga por debajo del nivel del suelo, se comprueba después de cada rebote si la energía cinética de la pelota es lo suficientemente grande como para ascender por encima de la altura (2 · eveps). De lo contrario, la simulación finaliza y se escribe en la ventana de registro un mensaje advirtiendo que el modelo está fuera de su marco experimental. Esto indica que el modelo se está utilizando en un contexto experimental para el cual el modelo no es válido.
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px; padding: 15px; line-height: 1.5em;") El comportamiento del modelo se muestra en la figura
      .center
        img(src='./assets/fig9-11.png' height="200px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") El punto marcado en negro es la entrada al diagrama. A partir de este punto, se desencadena una transición incondicional desde el modo Movimiento, donde el modelo describe la caída y el rebote de la pelota. La energía de la pelota cambia con cada rebote.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Si la pelota sale de su marco experimental, la simulación finaliza. El final de la simulación está representado por dos círculos concéntricos, de modo que el círculo exterior es hueco y el círculo interior está relleno de negro.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Si, dentro del marco experimental, la energía específica es menor que el coef · einicial, Se produce una transición al modo StoppedOnFloor y el modelo permanece en este modo indefinidamente.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") La descripción del modelo se muestra con el codigo
      .center
        img(src='./assets/code9-4.png' height="500px" style="margin: 10px 0px -0px -0px;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px; padding: 15px; line-height: 1.5em;") Note que:
      ul
        li La energía específica inicial se calcula mediante una cláusula when, cuya condición es la función inicial(). Se asigna un valor a la variable eInicial en el momento de inicio y este valor permanece constante durante la simulación.
        li Se utiliza una oración de afirmación para comprobar si el modelo se ha salido de su marco experimental.
        li El modelo tiene dos variables de estado en ambos modos. Cuando se produce la transición al modo StoppedOnFloor, las variables de estado x y v se reinicializan a cero y las derivadas temporales de ambas variables son cero mientras el modelo permanece en este modo. Entonces, la posición y la velocidad de la pelota son cero mientras se encuentra en la fase StoppedOnFloor.
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Fricción seca
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      //- .center
      //-   img(src='./assets/code2-2.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Modeling and simulation in engineering using modelica</b><br>Author: Alfonso Urquía Moraleda, Carla Martín Villalba<br> UNED, Madrid
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
    title: 'Optomechatronics',
    description: 'Hybrid models',
    path: 'MecComp-hybrid-modelica/hybrid-modelica',
    course: 'Computational Mechatronics',
    part: 3
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
      theme: 'Open Modelica I',
      isSpanish: true,
      languages: ['🇺🇸', '🇲🇽'],
      topics: ['Inicio', 'Intro', 'if', 'When', 'Interuptor electrico ideal', 'Diodo ideal', 'Dos tanques', 'Pelota rebotando', 'Fricción seca', '', 'Bibliografía'],
      page: [1, 1, 2, 5, 10, 11, 13, 14, 15, 15, 16]
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
