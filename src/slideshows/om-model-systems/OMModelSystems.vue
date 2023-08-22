<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Computational mechatronics
        //- img(src='./assets/U.svg' style="height: 100px;")
        h4 Modelado de sistemas
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;



    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5(style="margin: 10px 0 0 0; ").center Construcción de Modelos de un Sistema
      p(style="line-height: 1.7em;") Una pregunta básica es: ¿de qué manera pueden obtenerse modelos matemáticos adecuados de los sistemas que queremos estudiar, y posiblemente simular? Es decir, ¿qué es un proceso de modelado eficaz?
      p(style="line-height: 1.7em;") El dominio de aplicación es de importancia capital en todos los tipos de modelado.
      p(style="line-height: 1.7em;") Se habla de modelado físico cuando los sistemas a modelar vienen descritos por las leyes naturales de la física, la química, la biología, la mecánica, la ingeniería eléctrica, etc., y estas leyes pueden ser representadas directamente en el modelo matemático que se está formulando. 
      p(style="line-height: 1.7em;") Sin embargo, lo importante no es si el dominio de aplicación es “físico” o no. 
      p(style="line-height: 1.7em;") Existen leyes que gobiernan los  sistemas económicos, de comunicación de datos, de procesamiento de la información, etc., que pueden ser expresadas más o menos directamente en el modelo que estamos construyendo cuando se usa una aproximación de modelado de alto nivel. 
      p(style="line-height: 1.7em;") Todas estas leyes vienen dadas en el universo en el que existimos y pueden ser consideradas como leyes básicas de la naturaleza.
      p(style="line-height: 1.7em;") Al comenzar la tarea de modelado, en primer lugar es preciso identificar qué dominios de aplicación están involucrados en el sistema que deseamos modelar, y para cada uno de estos dominios es preciso encontrar qué leyes influyen, de manera relevante, en los fenómenos que deseamos estudiar.
      p(style="line-height: 1.7em;") Para poder manejar la complejidad de los modelos de grandes dimensiones, y reducir el esfuerzo de modelado reutilizando modelos de componentes, es bastante útil aplicar la descomposición jerárquica y las técnicas basadas en componentes orientadas a objetos, tales como las tratadas en este texto.
      p(style="line-height: 1.7em;") Para clarificar este punto, compararemos brevemente el enfoque tradicional al modelado físico con el enfoque basado en el modelado basado en componentes orientado a objetos.
      p(style="line-height: 1.7em;") Sin embargo, debe tenerse en cuenta que incluso el enfoque tradicional al modelado físico es de “más alto nivel” que algunos otros enfoques, tales como el modelado orientado a bloques o el programar directamente el modelo usando algún lenguaje imperative común. 
      p(style="line-height: 1.7em;") Estos últimos requieren que el usuario debe convertir manualmente las ecuaciones en sentencias de asignación o bloques y debe reestructurar manualmente el código, para adaptar el contexto de los flujos de datos y señales al determinado uso específico que se va a dar al modelo.

      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Modelado Deductivo vs. Modelado Inductivo
      p(style="line-height: 1.7em;") Hasta el momento, hemos tratado casi exclusivamente la aproximación al modelado denominada modelado deductivo, también conocida como modelado físico, donde el comportamiento del sistema es deducido al aplicar las leyes naturales, que son expresadas en un modelo del sistema. Los modelos de este tipo son creados en base al conocimiento existente de los procesos “físicos” o “artificiales” que rigen el sistema en cuestión, de ahí el nombre de “modelado físico”.
      p Sin embargo, en algunos casos, especialmente en sistemas biológicos y económicos, puede que no se disponga del conocimiento preciso sobre sistemas complejos y de sus procesos internos, que hasta cierta medida sería necesario para soportar el modelamiento físico. En estas áreas de aplicación es frecuente emplear un procedimiento de modelado completamente diferente. Se realizan observaciones del sistema bajo estudio y se trata de ajustar un modelo matemático hipotético a los datos observados, adaptando el modelo, típicamente mediante el cálculo de valores de determinados coeficientes desconocidos del mismo. Este procedimiento se denomina modelado inductivo.
      p Los modelos inductivos se basan directamente en los valores medidos. Esto hace que estos modelos sean difíciles de validar más allá de los valores observados. Por ejemplo, podríamos querer acomodar algunos mecanismos en un modelo del sistema de tal forma que nos permitieran predecir desastres, y en consecuencia, posiblemente prevenirlos. Sin embargo, esto sería imposible sin haber observado previamente un desastre real (que quisiéramos evitar a toda costa) en el sistema. Esta es una desventaja clara de los modelos inductivos.
      p Obsérvese también que, añadiendo un número suficientemente grande de parámetros a un modelo inductivo, es posible ajustar virtualmente cualquier modelo a virtualmente cualquier conjunto de datos. Esta es una de las desventajas más fuertes de los modelos inductivos, ya que de esta manera uno puede engañarse fácilmente acerca de la validez del modelo.
      p En el resto de este libro se tratará principalmente la aproximación deductiva al modelado o modelado físico, con excepción de algunos pocos ejemplos de aplicación de sistemas biológicos, en los cuales se emplearán modelos que en parte son inductivos y en parte tienen una motivación física.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin: -20px 0 0 0; ").center Enfoque Tradicional
      p(style="line-height: 1.7em;") La metodología tradicional para el modelado físico puede, a grosso modo, dividirse en tres fases:
      p 1. Establecer la estructura básica en términos de las variables.
      p 2. Plantear las ecuaciones y las funciones.
      p 3. Convertir el modelo al formato de espacio de estados.
      p La primera fase incluye decidir qué variables son de interés. Por ejemplo, en base al uso que se va a dar al modelo y a los papeles que desempeñarán estas variables. ¿Qué variables deben ser consideradas como entradas, por ejemplo, las señales externas, como salidas o como variables de estado internas? ¿Qué cantidades son especialmente importantes para describir lo que sucede en el sistema? ¿Cuáles dependen del tiempo, y cuáles son aproximadamente constantes? ¿Qué variables influyen sobre otras variables?
      p La segunda fase consiste en plantear las ecuaciones básicas y las fórmulas del modelo. Hay que buscar qué leyes del dominio de aplicación son relevantes para el modelo. Por ejemplo, las ecuaciones de conservación de magnitudes del mismo tipo, tales como la potencia entrante relacionada con la potencia saliente, la tasa de flujo entrante relacionado con la tasa del flujo saliente, y la conservación de cantidades tales como la energía, la masa, la carga, la información,Model SimpleCircuit
      p etc. Asimismo, hay que formular ecuaciones constitutivas que relacionen magnitudes de diferente tipo. Por ejemplo, el voltaje y la corriente en una resistencia, los flujos de entrada y salida de un tanque, paquetes de entrada y de salida para un enlace de comunicaciones, etc. También puede ser preciso formular relaciones, por ejemplo, acerca de propiedades de los materiales y otras propiedades del sistema. A la hora de plantear estas relaciones, debe tenerse en cuenta un intermedio entre el nivel de precisión requerido y el grado de aproximación apropiado.
      p La tercera fase consiste en convertir el modelo desde su formato actual, consistente en un conjunto de variables y un conjunto de ecuaciones, a una representación del sistema mediante ecuaciones en el espacio de estados, que se adecue al solucionador numérico a emplear. Es necesario escoger un conjunto de variables de estado, expresar sus derivadas temporales en función de las variables de estado, para variables dinámicas, y las variables de entrada (para el caso de ecuaciones en el espacio de estados en forma explícita), y expresar las variables de salida en función de las variables de estado y las variables de entrada. Si se incluyen algunas variables de estado innecesarias no causa ningún perjuicio, sólo conlleva realizar cálculos innecesarios. Esta fase es completamente innecesaria cuando se usa Modelica, puesto que la conversión al formato del espacio de estados es realizada de manera automática por el compilador de Modelica.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;
    


    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Enfoque Basado en Componentes Orientados a Objetos
      p(style="line-height: 1.7em; margin-top: -50px;") Cuando se aplica el enfoque basado en componentes orientados a objetos, en primer lugar tratamos de entender la estructura del sistema y de descomponerlo jerárquicamente, de forma descendente. Cuando los componentes del sistema y las interacciones entre estos componentes han sido identificadas a grosso modo, podemos aplicar las dos primeras fases del modelado tradicional, consistentes en identificar las variables y ecuaciones de estos componentes. El enfoque orientado a objetos consta de las fases siguientes:
      p 1. Definir el sistema brevemente: ¿Qué tipo de sistema es? ¿Qué hace?
      p 2. Descomponer el sistema en sus componentes más importantes. Esbozar clases de modelos para esos componentes, o emplear clases ya existentes pertenecientes a las librerías apropiadas.
      p 3. Definir la comunicación, es decir, determinar las interacciones y los caminos de comunicación entre los componentes.
      p 4. Definir las interfaces, es decir, determinar los puertos/connectors externos de cada componente para la comunicación con los otros componentes. Formular clases de conectores apropiadas, que permitan un alto grado de conectividad y reusabilidad, a la vez que permitan un grado apropiado de comprobación de los tipos de las conexiones.
      p 5. Descomponer recursivamente los modelos de los componentes de “alta complejidad”, en un conjunto de subcomponentes “más pequeños”, comenzando de nuevo en la fase 2, hasta que todos los componentes han sido definidos como instancias de tipos predefinidos, clases pertenecientes a librerías o nuevas clases definidas por el usuario.
      p 6. Formular nuevas clases de modelos cuando sea preciso, tanto clases base como clases derivadas:
        p a. Declarar nuevas clases de modelos para todos los modelos componentes que no sean instancias de clases existentes. Cada nueva clase debe incluir las variables, ecuaciones, funciones y formulas que sean relevantes para definir el comportamiento del componente, de acuerdo con los principios ya descritos en las dos primeras fases del enfoque tradicional al modelado.
        p b. Declarar las clases base posibles, que favorezcan la reutilización y faciliten el mantenimiento, extrayendo la funcionalidad en común y las similitudes estructurales de clases de componentes que tengan propiedades similares.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Modelado Descendente vs. Modelado Ascendente
      p(style="line-height: 1.7em; margin-top: -50px;") El proceso de definición de la estructura del modelo puede enfocarse de dos maneras relacionadas entre sí:
      p  Modelado descendente. Es útil cuando se conoce el área de aplicación bastante bien y se dispone de una librería de modelos de componentes. Se comienza definiendo el modelo del sistema al más alto nivel, descomponiéndolo gradualmente en subsistemas, hasta que se llega a los subsistemas que corresponden con los modelos de componentes de las librerías.
      p  Modelado ascendente. Este enfoque se usa típicamente cuando la aplicación es menos conocida o cuando no se dispone de una librería de componentes. En primer lugar, se formulan las ecuaciones básicas y se diseñan pequeños modelos experimentales de los fenómenos más importantes, con el fin de intentar comprender el área de aplicación. Típicamente, se comienza con modelos muy simplificados, y posteriormente se van añadiendo más fenómenos. Tras alguna experimentación, se va adquiriendo cierto conocimiento acerca del área de aplicación, y entonces es posible reestructurar estos fragmentos de modelos en un conjunto de componentes de modelos. Al emplearlo en diferentes aplicaciones, el conjunto de componentes puede dar problemas, en cuyo caso deberá ser estructurado tantas veces como sea preciso. De esta forma, se van gradualmente construyendo modelos de aplicación más complejos basados en estos componentes, hasta que finalmente se obtiene el modelo de aplicación deseado.
      p A continuación se presentan algunos ejemplos de modelamiento descendente y de modelamiento ascendente. En la sección 4.3 se presenta el modelamiento de un motor de corriente continua a partir de componentes predefinidos, el cual es un ejemplo típico de un modelamiento descendente. El pequeño ejemplo del modelado de un tanque descrito en la Sección 4.2 posee ciertas características del modelado ascendente, dado que se comienza con un modelo plano sencillo de un tanque antes de crear las clases de componentes y formar el modelo del tanque. Estos ejemplos van creciendo gradualmente hasta formar un conjunto de componentes que son usados para componer los modelos de aplicación finales.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Simplificación de Modelos
      p(style="line-height: 1.7em; margin-top: -50px;") En ocasiones, los modelos no son lo suficientemente precisos como para describir de manera adecuada el fenómeno. Esto puede ser debido a la realización de aproximaciones demasiado simplificadoras en determinadas partes del modelo.
      p También puede darse la situación contraria. Aunque se construya un modelo razonable siguiendo la metodología anterior, no es infrecuente que algunas partes del modelo sean demasiado complejas, lo cual conlleva problemas tales como:
      p  Simulaciones que tardan demasiado en ejecutarse.
      p  Inestabilidades numéricas.
      p  Dificultad a la hora de interpretar los resultados, debido a que el modelo contiene demasiados detalles de bajo nivel.
      p En conclusión, con frecuencia existen buenas razones para plantearse simplificar el modelo. En ocasiones, es difícil encontrar en el modelo el equilibrio adecuado entre simplicidad y precisión. Se trata más de un arte que de una ciencia y requiere una experiencia considerable. Sin embargo, la mejor manera de adquirir esa experiencia es mediante el diseño de modelos, y el análisis y evaluación de su comportamiento. A continuación, se dan algunos consejos acerca de cómo simplificar un modelo, por ejemplo, reduciendo el número de sus variables de estado:
      p  Despreciar efectos pequeños que no sean importantes para el fenómeno que se esté modelando.
      p  Agregar las variables de estado en un número menor de variables. Por ejemplo, las temperaturas en diferentes puntos de una varilla pueden, en ocasiones, representarse mediante la temperatura media en toda la varilla.
      p Enfocar el modelado en aquellos fenómenos cuyas constantes de tiempo están en el rango de interés, es decir:
      p  Aproximar por constantes aquellos subsistemas que tengan una dinámica muy lenta.
      p  Aproximar aquellos subsistemas que tengan una dinámica muy rápida mediante relaciones estáticas. Es decir, relaciones en las que no interviene la derivada de estas variables de estado que cambian rápidamente.
      p Una ventaja de no modelar las dinámicas muy rápidas y las muy lentas de un sistema es que se reduce el orden del modelo. Es decir, el número de sus variables de estado. Aquellos modelos cuyos componentes tienen constantes de tiempo con el mismo orden de magnitud son numéricamente más simples y más eficientes de simular. Por otra parte, ciertos sistemas poseen la propiedad intrínseca de que sus constantes de tiempo son muy dispares. Estos sistemas dan lugar a sistemas de ecuaciones diferenciales difíciles, los cuales requieren para su simulación del empleo de solucionadores numéricos adaptivos.


      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center Modelado de un Sistema de un Tanque
      p(style="line-height: 1.7em; margin-top: -50px;") Como ejercicio para ilustrar la metodología de modelado, consideremos el ejemplo sencillo de un sistema con un tanque, que contiene además un sensor de nivel y un controlador, el cual controla una válvula por medio de un actuador (Figura 4-1).
      .center
        img(src='./assets/fig4_1.png' height="200px")
      p El nivel de líquido h en el tanque debe mantenerse tan próximo como sea posible a un determinado nivel de referencia. El líquido entra en el tanque, a través de una tubería, procedente de una fuente, y sale del tanque a través de una tubería con un caudal que es controlado por una válvula.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Usando del Enfoque Tradicional
      p(style="line-height: 1.7em; margin-top: -50px;") En primer lugar, mostraremos el resultado de modelar el sistema de un tanque usando el enfoque tradicional. En la próxima sección, se muestra el modelo plano con las variables y ecuaciones del sistema de un tanque. En este punto, no explicaremos cómo han sido deducidas las ecuaciones ni que significado tienen ciertas variables. Esto será descrito en detalle en las siguientes secciones, en las que se presentará el modelado orientado a objetos de este sistema tanque.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Modelo Plano del Sistema de Tanque
      p(style="line-height: 1.7em; margin-top: -50px;") El modelo TanquePlano es un modelo “plano” del sistema de un tanque, el cual no evidencia una “estructura del sistema” jerárquica interna. Es decir, se trata solo de una colección de variables y ecuaciones que modelan la dinámica del sistema. La estructura interna del sistema, que consiste en componentes, interfaces, acoples entre los componentes, etc., no se refleja en este modelo.
      eg-code-block(lang='html').
        model TanquePlano
        // Variables y parámetros relacionadas con el tanque
        parameter Real flowLevel(unit="m3/s")=0.02;
        parameter Real area(unit="m2") =1;
        parameter Real flowGain(unit="m2/s") =0.05;
        Real h(start=0,unit="m") "Nivel en el tanque";
        Real qInflow(unit="m3/s") "Flujo en la válvula de entrada"; 
        Real qOutflow(unit="m3/s") "Flujo en la válvula de salida"; // Variables y parámetros relacionadas con el controlador
        parameter Real K=2 "Ganancia";
        parameter Real T(unit="s")= 10 "Constante de tiempo";
        parameter Real minV=0, maxV=10; // Limites del flujo de salida
        Real ref = 0.25 "Nivel de referencia para el control";
        Real   error "Desviación respecto al nivel de referencia";
          Real   outCtr "Señal de control sin limitador";
          Real   x; "Variable de estado del controlador";
        equation
          assert (minV>=0,"minV debe ser mayor o igual a cero");// der(h) = (qInflow-qOutflow)/area; // Balance de masa
          qInflow = if time>150 then 3*flowLevel else flowLevel; qOutflow = LimitValue(minV,maxV,-flowGain*outCtr); error = ref-h;
          der(x) = error/T;
          outCtr = K*(error+x);
        end TanquePlano;

        function LimitValue
          input Real pMin;
          input Real pMax;
          input Real p;
          output Real pLim;
        algorithm
          pLim := if p>pMax then pMax
            else if p<pMin then pMin
            else p;
        end LimitValue;

        simulate(TanquePlano, stopTime=250)
        plot(h, stopTime=250)

      p(style="line-height: 1.7em; margin-top: -50px;") Simulando el modelo plano del sistema de tanque y graficando la variable nivel se obtiene el resultado mostrado en la Figura 4-2.
      .center
        img(src='./assets/fig4_2.png' width="600px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center Usando el Enfoque Basado en Componentes Orientado a Objetos
      p Al aplicar el enfoque de modelado basado en componentes orientado a objetos para modelar, en primer lugar se analiza la estructura interna del sistema de un tanque. ¿Se descompone el sistema, de manera natural, en ciertos componentes? La respuesta es sí. En el diagrama del sistema de la Figura 4-3 pueden distinguirse varios componentes. Por ejemplo, el tanque, la fuente de líquido, el sensor de nivel, la válvula y el controlador.
      p Así pues, aparentemente tenemos cinco componentes. Sin embargo, se van a emplear representaciones muy sencillas del sensor de nivel y de la válvula: simplemente una variable escalar para cada uno de estos dos componentes. Por este motivo, estos dos componentes serán definidos como variables tipo Real en el modelo del tanque, en lugar de definir dos nuevas clases conteniendo una única variable cada una. Así pues, tendremos tres componentes, que deberán ser modelados explícitamente como instancias de nuevas clases: el tanque, la fuente y el controlador.
      p La siguiente etapa es determinar las interacciones y los caminos de comunicación entre estos componentes. Es bastante obvio que el fluido circula desde la fuente hasta el tanque a través de una tubería. El fluido abandona el tanque a través de una salida controlada por una válvula. El controlador necesita medidas del nivel de líquido, que provienen del sensor. Así pues, es necesario establecer un camino de comunicación desde el sensor del tanque hasta el controlador.
      p Los caminos de comunicación necesitan ser conectados en algún sitio. Por ello, es necesario crear instancias de conectores para aquellos componentes que son conectados, y declarar las clases connector necesarias. De hecho, el modelo del sistema debería ser diseñado de modo que la única comunicación entre un componente y el resto del sistema se produjera a través de conectores.
      p Finalmente, deberíamos pensar acerca de la reutilización y la generalización de ciertos componentes. ¿Esperamos que sean necesarias varias variantes de los componentes? En ese caso, es útil agrupar la funcionalidad básica en una clase base y hacer que cada variante sea una especialización de esa clase base. En el caso del sistema de un tanque, van a emplearse varias variantes del controlador, comenzando con un controlador continuo proporcional e integral (PI). Así pues, resulta útil crear una clase base para los controladores del sistema de un tanque.
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;
      
    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center Sistema de un Tanque con un Controlador continuo tipo PI
      p La estructura del sistema de un tanque, desarrollada aplicando el modelado basado en componentes orientado a objetos, es claramente visible en la Figura 4-3.
      .center
        img(src='./assets/fig4_3.png' width="600px")
      p Los tres componentes del sistema de tanque—el tanque, el controlador PI y la fuente de líquido— son explícitos en la Figura 4-3 y en la declaración de la clase TankPI que se muestra a continuación.
      eg-code-block(lang='html' style="margin-top: 0px;").
        model TankPI
          LiquidSource source(flowLevel=0.02);
          PIcontinuousController piContinuous(ref=0.25);
          Tank tank(area=1);
        equation
          connect(source.qOut, tank.qIn);
          connect(tank.tActuator, piContinuous.cOut);
          connect(tank.tSensor,piContinuous.cIn);
        end TankPI;

      p Las instancias de los tanques son conectadas a los controladores y a las fuentes de líquido a través de conectores. El tanque tiene cuatro conectores: qIn para el flujo de entrada, qOut para el flujo de salida, tSensor para proporcionar medidas del nivel de líquido y tActuator para fijar la posición de la válvula situada en la salida del tanque. La ecuación central que regula el comportamiento del tanque es la ecuación del balance de masa, que se ha formulado de manera simplificada, asumiendo que la presión es constante. El flujo de salida se relaciona con la posición de la válvula mediante el parámetro flowGain, y mediante un limitador que garantiza que el flujo no excede las correspondientes posiciones abierto/cerrado de la válvula.• The look-up of class-names within a package is first done locally within a class and then further up the hierarchy. <br>• The import statement is valid for all package models. <br> • Identifiers of instances (variables or components) are only looked up locally.
      eg-code-block(lang='html' style="margin-top: 0px;").
        model Tank
          ReadSignal tSensor "Conector, sensor leyendo el nivel en el tanque (m)";
              ActSignal   tActuator "Conector, actuador controlando el flujo de entrada input flow";
          LiquidFlow qIn "Conector, flujo (m3/s) a través de la válvula de entrada";
              LiquidFlow  qOut  "Conector, flujo (m3/s) a través de la válvula de salida";
          parameter Real area(unit="m2") = 0.5;
          parameter Real flowGain(unit="m2/s") = 0.05;
          parameter Real minV=0, maxV=10; // Límites para el flujo de salida a través de la válvula
              Real h(start=0.0, unit="m") "Nivel en el tanque";
        equation
            assert (minV>=0,"minV – el nivel mínimo de la válvula debe ser >= 0");//
            der(h) = (qIn.lflow-qOut.lflow)/area; // Balance de masa
        equation
            qOut.lflow  = LimitValue(minV,maxV,-flowGain*tActuator.act);
            tSensor.val = h; 
        end Tank;
      p Como se ha indicado anteriormente, el tanque tiene cuatro conectores. Son instancias de las siguientes tres clases de conector:
      eg-code-block(lang='html' style="margin-top: 0px;").
        connector ReadSignal "Lectura del nivel de líquido" 
          Real val(unit="m");
        end ReadSignal;

        connector ActSignal "Señal enviada al actuador para fijar la posición de la válvula"
           Real act;
        end ActSignal;

        connector LiquidFlow "Flujo de líquido en las entradas y salidas" 
          Real lflow(unit="m3/s");
        end LiquidFlow;
      p El fluido que entra en el tanque debe provenir de algún sitio. Por ello, tenemos un componente en el sistema de tanque que representa la fuente de líquido. El flujo aumenta abruptamente en el instante time=150 triplicándose el flujo existente hasta ese momento, lo cual crea un problema de control interesante que el controlador del tanque debe manejar.
      eg-code-block(lang='html' style="margin-top: 0px;").
        model LiquidSource
          LiquidFlow qOut;
          parameter flowLevel = 0.02;
        equation
          qOut.lflow = if time>150 then 3*flowLevel else flowLevel;
        end LiquidSource;
      p Es preciso especificar el controlador. Inicialmente, escogeremos un controlador PI, que posteriormente remplazaremos por otros tipos de controladores. El comportamiento de un controlador continuo PI (proporcional e integral) viene definido fundamentalmente por las dos ecuaciones siguientes:
      .center
        img(src='./assets/eq4_1.png' width="200px")
      p Donde x es la variable de estado del controlador, error es la diferencia entre el nivel de referencia y el valor actual del nivel obtenido del sensor, T es la constante de tiempo del controlador, outCtr es la señal de control enviada al actuador para controlar la posición de la válvula y K es el factor de ganancia. Estas dos ecuaciones se incluyen en la clase que modela el controlador PIcontinuousController, la cual extiende a la clase base BaseController, que será definida más adelante.
      eg-code-block(lang='html' style="margin-top: 0px;").
        model PIcontinuousController
          extends BaseController(K=2,T=10);
          Real x "Variable de estado del controlador PI continuo";
        equation
          der(x) = error/T; outCtr = K*(error+x);
        end PIcontinuousController;
      p Integrando la primera ecuación se obtiene x. Sustituyendo en la segunda ecuación, se obtiene la expresión siguiente para la señal de control, que contiene dos términos que son directamente proporcionales a la señal de error y a la integral de la señal de error respectivamente. De ahí el nombre de controlador proporcional e integral (PI).
      .center
        img(src='./assets/eq4_2.png' width="300px")
      p Tanto el controlador PI como el controlador proporcional, integral, derivativo (PID), que será definido más adelante, heredan la clase controlador parcial BaseController, que contiene los parámetros en común, las variables de estado y dos conectores: uno para leer el sensor y otro para controlar el actuador de la válvula.
      p De hecho, la clase BaseController también puede ser reutilizada para definir controladores PI y PID discretos en este mismo ejemplo del sistema de un tanque en la Figura 4-3. Los controladores discretos muestrean repetidamente el nivel de liquid y producen una señal de control cuyo valor cambia en instantes de tiempo discretos con una periodicidad igual a Ts.
      eg-code-block(lang='html' style="margin-top: 0px;").
        partial model BaseController
          parameter Real Ts(unit="s")=0.1 "Periodo de tiempo entre muestras discretas";
          parameter Real K=2 "Ganancia";
          parameter Real T=10(unit="s") "Constante de tiempo";
          ReadSignal cIn "Entrada: nivel del sensor, connector";
          ActSignal cOut "Control enviado al actuador, connector";
          parameter Real ref "Nivel de referencia";
          Real error "Desviación respecto al nivel de referencia";
          Real outCtr "Señal de control";        
        equation
          error    = ref-cIn.val;
          cOut.act = outCtr;
        end BaseController;
      p Simulando el modelo TankPI se obtiene la misma respuesta que para el modelo FlatTank, lo cual no es sorprendente dado que ambos modelos tienen las mismas ecuaciones básicas (Figura 4-4).
      .center
        img(src='./assets/Fig4_4.png' width="600px")

      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center Tanque con Controlador PID Continuo
      p Definimos el sistema TankPID de la misma manera que TankPI, pero con la diferencia de que el controlador PI ha sido reemplazado por un controlador PID. Aquí vemos una clara ventaja del enfoque basado en componentes orientado a objetos frente al enfoque tradicional: los componentes del sistema pueden reemplazarse de manera sencilla y ser cambiados de la forma plug-and-play (vea la Figura 4-5).
      .center
        img(src='./assets/Fig4_5.png' width="600px")
      p La declaración en Modelica de la clase TankPID es como sigue:
      eg-code-block(lang='html' style="margin-top: 0px;").
        model TankPID
          LiquidSource source(flowLevel=0.02);
          PIDcontinuousController pidContinuous(ref=0.25);
          Tank tank(area=1);
        equation
          connect(source.qOut, tank.qIn);
          connect(tank.tActuator, pidContinuous.cOut);
          connect(tank.tSensor, pidContinuous.cIn);
        end TankPID;
      p Puede construirse el modelo del controlador PID (proporcional, integral, derivativo) de manera similar a como se hizo con el controlador PI. Los controladores PID reaccionan más rápidamente a los cambios instantáneos que los controladores PI, debido al término que contiene la derivada. Por otra parte, el controlador PI pone un mayor énfasis en compensar los cambios de variación lenta. Las ecuaciones básicas de un controlador PID son las siguientes:
      .center
        img(src='./assets/eq4_3.png' width="300px")
      p Creamos una clase PIDcontinuousController en Modelica, que contiene las tres ecuaciones anteriores:
      eg-code-block(lang='html' style="margin-top: 0px;").
        model PIDcontinuousController
          extends BaseController(K=2,T=10);
          Real x; // Variable de estado del controlador PID continuo 
          Real y; // Variable de estado del controlador PID continuo
        equation
          der(x) = error/T;
          y = T*der(error); outCtr = K*(error + x + y);
        end PIDcontinuousController;
      p Integrando la primera ecuación, y sustituyendo x e y en la tercera ecuación, obtenemos una expresión para la señal de control que contiene los tres términos siguientes: proporcional a la señal de error, proporcional a la integral de la señal de error y proporcional a la derivada de la señal de error. Por ello, se llama controlador integral, proporcional, derivativo (PID).
      .center
        img(src='./assets/eq4_4.png' width="300px")
      p Simulamos de nuevo el modelo del tanque, pero esta vez incluyendo el controlador PID (vea la Figure 4-6):
      .center
        img(src='./assets/Fig4_6.png' width="600px")
      p La respuesta del nivel del tanque obtenida es muy similar a la que se obtuvo empleando el controlador PI, si bien el control para restaurar el nivel de referencia, tras los cambios en el flujo de entrada, es más rápido.
      p Con el fin de permitir establecer una comparación, en el diagrama de la Figura 4-7 se muestran los resultados de la simulación de TankPI y TankPID.
      .center
        img(src='./assets/Fig4_7.png' width="600px")

      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: -30px;").center  Dos Tanques Interconectados
      p Las ventajas del enfoque de modelado basado en componentes orientado a objetos resultan incluso más aparentes cuando se combinan varios componentes de formas diferentes, como se muestra en la Figura 4-8, en la que se han conectado dos tanques en serie, lo cual no es infrecuente en la industria de procesos.
      .center
        img(src='./assets/Fig4_8.png' width="600px")
      p El modelo en Modelica TanksConnectedPI, correspondiente a la Figura 4-8, es el siguiente:
      eg-code-block(lang='html' style="margin-top: -50px;").
        model TanksConnectedPI
          LiquidSource source(flowLevel=0.02);
          Tank tank1(area=1);
          Tank tank2(area=1.3);
          PIcontinuousController piContinuous1(ref=0.25);
          PIcontinuousController piContinuous2(ref=0.4);
        equation
          connect(source.qOut,tank1.qIn);
          connect(tank1.tActuator,piContinuous1.cOut);
          connect(tank1.tSensor,piContinuous1.cIn);
          connect(tank1.qOut,tank2.qIn);
          connect(tank2.tActuator,piContinuous2.cOut);
          connect(tank2.tSensor,piContinuous2.cIn);
        end TanksConnectedPI;

      p Simulamos el sistema de dos tanques conectados. Se observan claramente las respuestas de los niveles de los tanques frente a cambios en el flujo de líquido proveniente de la fuente. Como era de esperar, la respuesta aparece primero en el tiempo en el primer tanque que en el segundo tanque (Figura 4-9).
      .center
        img(src='./assets/Fig4_9.png' width="600px")
      .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
      .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
    //-   h5(style="margin-top: -30px;").center  Modelamiento descendente de un motor de corriente continua (CC) a partir de componentes predefinidos
    //-   p En esta sección se ilustrará el proceso de modelado basado en componentes orientado a objetos cuando se usan clases de librerías predefinidas esquematizando el diseño de un modelo de un servo motor CC. No se entrará en detalles ya que el ejemplo previo del tanque ha sido lo suficientemente detallado.
    //-   h6 Definición del Sistema
    //-   p Que es un servo motor CC? Es un motor en el cual la velocidad puede ser controlada por alguna clase de regulador (ver la Figura 4-10). Ya que se trata de un servo, se necesita mantener una velocidad rotacional especificada a pesar de que esté sometido a una carga variable. Presumiblemente, contiene un motor eléctrico, una transmission y una carga rotacional dinámica, alguna clase de control para regular la velocidad rotacional, y algunos circuitos eléctricos ya que el sistema de control necesita conecciones eléctricas al resto del sistema, y hay partes eléctricas del motor. El lector puede haber notado que es difícil definer un sistema sin describer sus partes, es decir, ya estamos en la fase de descomposición del sistema.
    //-   .center
    //-     img(src='./assets/Fig4_10.png' height="150px" style="margin-top: 0px;")
    //-   h6 Descomposición en subsistemas y esquema de la comunicación
    //-   p En esta fase se descompone el sistema en subsistemas mayors y se dibuja la comunicación entre estos subsistemas. Como ya se notó en la fase de definición del sistema, el sistema contiene partes mecánicas rotacionales que incluyen el motor y las cargas, un modelo de un circuito eléctrico que contiene las partes eléctricas del motor CC en conjunto con sus interface eléctrica, y un subsistema controllador que regula la velocidad del motor CC controlando la correinte que alimenta el motor. De esta manera, hay tres subsistemas como se esquematiza en la Figura 4-11: controlador, un circuito eléctrico, y un subsistema mecánico rotacional.
    //-   .center
    //-     img(src='./assets/Fig4_11.png' height="150px" style="margin-top: 0px;")
    //-   p Con respecto a las comunicaciones entre los subsistemas, el controlador debe estar conectado al circuito eléctrico ya que controla la corriente al motor. El circuito eléctrico también se debe conectar a las partes mecánicas rotacionales con el objetivo de que la energía eléctrica pueda convertirse a energía rotacional. Finalmente, se necesita un lazo de realimentación que incluya un sensor de la velocidad rotacional para que el controlador pueda hacer su tarea apropiadamente. Los enlaces de comunicación se dibujan en la Figura 4-11.
    //-   h6 Modelamiento de los Subsistemas
    //-   p La siguiente fase es modelar los subsistemas a través de descomposiciones adicionales. Se empieza por modelar el controlador y luego nos dirigimos a buscar clases en la librería de Modelica Standar para un nodo suma de realimentación y un controlador tipo PI. También se adiciona un bloque de función escalón como un ejemplo de una señal de referencia. Todas estas partes se muestran en la Figura 4-12.
    //-   .center
    //-     img(src='./assets/Fig4_12.png' height="250px" style="margin-top: 0px;")
    //-   p El Segundo componente mayor a descomponer es la parte del circuito eléctrico del motor CC (ver Figura 4-13). Aquí se identificaron las partes estándar de un motor CC tales como un generador de voltaje eléctrico controlado por señal, una componente de tierra necesaria en todos los circuitos eléctricos, una resistencia, una inductancia que representa la bobina del motor, y una fuerza electromotriz (efm) para convertir energía eléctrica a movimiento rotacional.
    //-   .center
    //-     img(src='./assets/Fig4_13.png' height="250px" style="margin-top: 0px;")
    //-   p El tercer subsistema, diagramado en la Figura 4-14, contiene tres cargas rotacionales con inercia: un engranaje ideal, un resorte rotacional, y un sensor de velocidad para medir la velocidad rotacional el cual se necesita como información para el controlador.
    //-   .center
    //-     img(src='./assets/Fig4_14.png' height="250px" style="margin-top: 0px;")
    //-   h6 Modelamiento de las Partes en los Subsistemas
    //-   p Nos dirigimos a buscar todas las partes necesarias como modelos predefinidos en la librería de clases de Modelica. Si ese no fuera el caso, tendríamos la necesidad de definer clases apropiadas de modelos e identificar las ecuaciones para esas clases, como se ha esquematizado para las partes del subsistema de control en la Figura 4-15, el subsistema eléctrico en la Figura 4-16, y el subsistema mecánico rotacional en la Figura 4-17.
    //-   .center
    //-     img(src='./assets/Fig4_15.png' height="250px" style="margin-top: 0px;")
    //-   .center
    //-     img(src='./assets/Fig4_16.png' height="250px" style="margin-top: 0px;")
    //-   p El subsistema eléctrico representado en la Figura 4-16 contiene componentes eléctricos con ecuaciones básicas asociadas, por ejemplo, una resistencia, una inductancia, una fuente de señal de voltaje, y un componente emf.
    //-   p El subsistema mecánico rotacional representado en la Figura 4-17 contiene un número de componentes tales como inercias, un engranaje, un resorte rotacional, y un sensor de velocidad.
    //-   .center
    //-     img(src='./assets/Fig4_17.png' width="600px" style="margin-top: 0px;")
    //-   h6 Definición de las interfaces y las conecciones
    //-   p Cuando cada subsistema ha sido definido a partir de modelos predefinidos, se establecen las interfaces a los subsistemas a través de los conectores de estos componentes que interactúan con otros subsistemas. Cada subsistema debe definirse de tal manera que se habilite la comunicación con otros subsistemas de acuerdo a la estructura de comunicación previamente esquematizada. Esto requiereque se escojan cuidadosamente las clases de conectores para que sean de tipos compatibles. De hecho, la selección y definición de estas interfaces de conectores es uno de los pasos mas importantes en el diseño de un modelo.
    //-   p El modelo completado del servo motor CC se representa en la Figura 4-18, la cual incluye los tres subsistemas y el lazo realimentado.
    //-   .center
    //-     img(src='./assets/Fig4_18.png' width="700px" style="margin-top: 0px;")
    //-   h6 Diseño de clases de interfaces-conectores
    //-   p Como en todo diseño de un sistema, una de las tareas mas importantes de diseño es definir las interfaces entre los componentes de un modelo del sistema, ya que esto pone los cimientos para la comunicación entre los componentes. De esta manera influencian fuertemente la descomposición del modelo.
    //-   p Lo mas importante es identificar los requerimientos básicos detras del diseño de las interfaces de los componentes, es decir, las clases de conectores que influencian su estructura. Estos requerimientos puen establecerse brevemente como sigue:
    //-   p  Debe ser facil y natural conectar componentes. Para interconectar a modelos de componentes físicos debe ser físicamente posible conectar estos componentes.
    //-   p  Las interfaces de los componentes deben faciltar la reutilización de componentes de modelos existentes en las librerías de clases.
    //-   p Se requiere de un diseño cuidadoso de las clases conector para alzanzar estos objetivos en forma satisfactoria. El número de clases conectores debe permanecer pequeño con el objetivo de evitar incompatibilidades innecesarias entre conectores debido a nombres y tipos diferentes de variables en los conectores.
    //-   p La experiencia muestra que es sorprendentemente difícil diseñar clases conectores que satisfagan estos requerimientos. Hay una tendencia para que detalles superfluos que se crean durante el desarrollo del software (modelo) para diferentes necesidades computacionales entran sigilosamente a las interfaces, haciéndolas mas difíciles de usar e impidiendo el reuso de los componentes. Por lo tanto, las clases conectores deben permanecer tan simples como sea posible e intentar evitar introducir variables que no son realmente necesarias.
    //-   p Una buena regla general cuando se diseñan clases conectores para modelos de componentes físicos es identificar las características de interacción (no causal) en el mundo físico real entre estos componentes. Las características de interacción deben ser simplificadas y abstraidas a un nivel apropiado y reflejarlas en el diseño de las clases conectores. Para componentes no físicos, por ejemplo, bloque de señal y componentes de software en general, se tiene que trabajar duro en encontrar el nivel de abstracción apropiado en las interfaces, e intentar probarlas en la práctica para obtener realimenteación en la facilidad de uso la reusabilidad. La librería estandar de Modelica contiene una gran número de clases conectores bien diseñados que pueden servir como inspiración a los diseñadores que estén diseñando en nuevas interfaces.
    //-   p Hay básicamente tres clases diferentes, que reflejan tres situaciones de diseño:
    //-   p 1. Si hay alguna clase de interacción entre dos componentes físicos que involucran flujo de energía, se debe usar una variable de potencial y una variable tipo flow en el dominio apropiado para la clase conector.
    //-   p 2. Si se intercambia información o señales entre componentes, se deben usar variables de señal tipo input/output en la clase conector.
    //-   p 3. Para interacciónes complejas entre componentes, que involucren varias interacciones como las anteriores tipo 1 y 2, se diseña una clase de conector compuesto jerarquicamente estructurado del tipo apropiado 1, 2 o 3.
    //-   p Cuando todos los conectores de un componente han sido diseñados de acuerdo a los tres principios citados arriba, la formulación del resto de la clase de componentes sigue parcialmente a partir de las restricciones implicadas por estos conectores. Sin embargo, estas pautas no deben seguirse ciegamente. Hay varios ejemplos de dominios con condiciones especiales que se desvían ligeramente de las reglas mencionadas.

    //-   .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
    //-   .next(@click.stop='nextSlide' style="float: right; margin: 50px 0 0px 0px;")
    //-     span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Siguiente &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }} : References: {{ slides.length }}</sup>
        h3 References
        p.center
          Material based on <a href="https://rmc.dlr.de/sr/de/staff/dirk.zimmer/VirtualPhysics">Virtualphysics</a>
        p.center other references
        .center
          img(src='./assets/omwebbook/om_ref1.png' height="200px" style="margin: 10px;")
          img(src='./assets/omwebbook/om_ref2.png' height="200px" style="margin: 10px;")
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book
        .prev(@click.stop='previousSlide' style="float: left; margin: 50px 0 0px 0px;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Anterior
        

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Modelado de sistemas',
    description: 'System modeling',
    path: 'om-model-systems',
    course: 'Computational Mechatronics',
    part: null
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
    'quantity-of-heat': require('./components/QuantityOfHeat')
  },
  data: function () {
    return {
      theme: 'System modeling'
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

.mth {
  font-family: 'Times New Roman', Times, serif;
}
</style>
