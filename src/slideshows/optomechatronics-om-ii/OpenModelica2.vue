<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h3 Optomechatronics
        img(src='./assets/U.svg')
        p Open modelica<br>Continuous time modeling
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
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Physical modeling paradigm
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Paradigma de modelado físico
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica is a modeling language designed to facilitate the application of the physical modeling paradigm. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica es un lenguaje de modelado diseñado para facilitar la aplicación del paradigma de modelado físico. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") According to this paradigm, the model of a physical system is developed following three steps: 
      ul(v-if = '!isSpanish') 
        li 1. Analyze the system structure and divide the system into parts. 
        li 2. Analyze and describe the interaction among the parts. 
        li 3. Describe the internal behavior of each part, independently of the others, in terms of equations such as mass, energy and momentum balances, constitutive relationships, etc. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Según este paradigma, el modelo de un sistema físico se desarrolla siguiendo tres pasos:
      ul(v-if = 'isSpanish')
        li 1. Analizar la estructura del sistema y dividir el sistema en partes.
        li 2. Analizar y describir la interacción entre las partes.
        li 3. Describir el comportamiento interno de cada parte, independientemente de las demás, en términos de ecuaciones tales como balances de masa, energía y cantidad de movimiento, relaciones constitutivas, etc.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The model typically obtained by applying this paradigm is a hybrid DAE model, composed of algebraic equations, ordinary differential equations with derivatives with respect to time, and events. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  El modelo típicamente obtenido aplicando este paradigma es un modelo híbrido DAE, compuesto por de ecuaciones algebraicas, ecuaciones diferenciales ordinarias con derivadas con respecto al tiempo y eventos. 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") DAE stands for Differential-Algebraic Equation. The languages conceived to support the physical modeling paradigm allow the model developer to describe the continuous-time part of the model using equations.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") DAE significa ecuación algebraica diferencial. Los lenguajes concebidos para respaldar el paradigma de modelado físico permiten al desarrollador del modelo describir la parte de tiempo continuo del modelo mediante ecuaciones.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Atomic models are those models that are not composed of smaller components.<br> The system behavior is described using equations and algorithms.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelos atómicos son aquellos modelos que no están compuestos por componentes más pequeños.<br> <br>El comportamiento del sistema se describe mediante ecuaciones y algoritmos.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Consider the circuit shown in figure, which is composed of a sinusoidal voltage generator, two resistors, a capacitor and a diode. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Considere el circuito que se muestra en la figura, que está compuesto por un generador de voltaje sinusoidal, dos resistencias, un capacitor y un diodo.
      .center
        img(src='./assets/fig2-1.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") These electronic components can be modeled with different level of detail, employing different types of mathematical model. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Estos componentes electrónicos se pueden modelar con diferentes niveles de detalle, empleando diferentes tipos de modelos matemáticos.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") We will model them using the constitutive relationships shown in the following figure.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelaremos utilizando las relaciones constitutivas que se muestran en la figura. 
      .center
        img(src='./assets/fig2-2.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") This is, assuming that the generator, resistors and capacitor are ideal components, and the diode obeys the Shockley equation.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Esto es, asumiendo que el generador, las resistencias y el capacitor son componentes ideales, y el diodo obedece a la ecuación de Shockley. 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Their parameter values are
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los valores de los parametros usados son
      .center
        img(src='./assets/table2-1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be built following the next steps.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito se puede construir siguiendo los siguientes pasos.
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. Select a circuit node as reference for voltage. This node is named ground node and by convention its voltage is zero. Voltage at the other circuit nodes is calculated relative to ground. The ground node has already been selected in the circuit shown in figure.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. Seleccione un nodo de circuito como referencia para el voltaje. Este nodo se denomina nodo de tierra y por convención su voltaje es cero. El voltaje en los otros nodos del circuito se calcula con relación a tierra. El nodo de tierra ya ha sido seleccionado en el circuito que se muestra en la figura.
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Assign names to the voltage in the remaining nodes. Nodes are represented as filled circles in figure. The names assigned are u<sub>1</sub> and u<sub>2</sub>. The u<sub>0</sub> node is the ground node.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Asigne nombres al voltaje en los nodos restantes. Los nodos se representan como círculos rellenos en la figura. Los nombres asignados son u<sub>1</sub> y u<sub>2</sub>. El nodo u<sub>0</sub> es el nodo de tierra. 
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 3. Assign directions and names to the currents. For each two-pin component, a name is given to the current that flows through the component with an arbitrarily chosen reference direction.<br> In components with three or more pins, a name is assigned to the current in each pin and the current directions are chosen to be pointing towards the component.<br> In this example, the names and directions given to the currents are shown in figure. The names are: i<sub>gen</sub>, i<sub>R1</sub>, i<sub>D</sub>, i<sub>R2</sub>, i<sub>C</sub>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 3. Asigna direcciones y nombres a las corrientes. Para cada componente de dos pines, se le da un nombre a la corriente que fluye a través del componente con una dirección de referencia elegida arbitrariamente.<br> En componentes con tres o más pines, se asigna un nombre a la corriente en cada pin y las direcciones de corriente se eligen para que apunten hacia el componente. En este ejemplo, los nombres y direcciones dados a las corrientes se muestran en la figura. Los nombres son: i<sub>gen</sub>, i<sub>R1</sub>, i<sub>D</sub>, i<sub>R2</sub>, i<sub>C</sub>. 
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 4. Impose the current conservation in every node, except the ground node. As charge is conserved in each node, the sum of currents at each node is zero. The equations at the nodes labeled as u<sub>1</sub> and u<sub>2</sub> are:          
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 4. Imponer la conservación de corriente en todos los nodos, excepto en el nodo de tierra. Como la carga se conserva en cada nodo, la suma de las corrientes en cada nodo es cero. Las ecuaciones en los nodos etiquetados como u<sub>1</sub> y u<sub>2</sub> son:  
      .center
        img(src='./assets/eq2-1.png' width="300px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Observe that the equation that states the current conservation at the ground node does not provide any additional information and for this reason is not included in the model.           
      //- .center
      //-   img(src='./assets/eq2-3.png' width="300px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Observe que la ecuación que establece la conservación actual en el nodo de tierra no proporciona ninguna información adicional y para esto motivo no está incluido en el modelo. 
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 5. Write the constitutive relationships of the components. The constitutive relationships of the components that intervene in this circuit are
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 5. Escriba las relaciones constitutivas de los componentes. Las relaciones constitutivas de los componentes que intervienen en este circuito son  
      .center
        img(src='./assets/fig2-2.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Where u represents the voltage drop across the component. This is, the voltage at the pin labeled “+” minus the voltage at the pin labeled “-”.<br> The equations describing the five components of the circuit are:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde u representa la caída de tensión en el componente. Esto es, el voltaje en el pin con la etiqueta "+" menos el voltaje en el pin con la etiqueta "-". <br>Las ecuaciones que describen los cinco componentes del circuito son: 
      .center
        img(src='./assets/eq2-4.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Replacing the ground node voltage (u<sub>0</sub>) by zero, it is obtained
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Reemplazando la tensión del nodo de tierra (u<sub>0</sub>) por cero, se obtiene 
      .center
        img(src='./assets/eq2-9.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The model is composed by the equations describing the current conservation at the nodes. These seven equations describe the time evolution of the voltages (u<sub>1</sub>, u<sub>2</sub>) and currents (i<sub>gen</sub>, i<sub>R1</sub>, i<sub>D</sub>, i<sub>R2</sub>, i<sub>C</sub>).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo está compuesto por las ecuaciones que describen la conservación actual en los nodos. Estas siete ecuaciones describen la evolución temporal de las tensiones (u<sub>1</sub>, u<sub>2</sub>) y corrientes (i<sub>gen</sub>, i<sub>R1</sub>, i<sub>D</sub>, i<sub>R2</sub>, i<sub>C</sub>). 
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described in Modelica as
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El circuito puede modelarse en modelica como  
      .center
        img(src='./assets/code2-1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/eq2-9.png' width="500px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/fig2-3.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      div(style='width:100%; margin: 50px 0 0 50px 0 ;')
        p(v-if = '!isSpanish') Variability of variables
        table(v-if = '!isSpanish' style='width:100%; font-size: 15px;', border='1')
          tr
            th Keyword
            th(style="width:85%") Meaning
          tr 
            td constant
            td The value of a constant variable cannot be modified at the experiment definition and does not change during the simulation.
          tr
            td parameter
            td The value of a parameter can be modified when the component is instantiated or inherited, and at the experiment definition, but parameter values don’t change during the simulation.
          tr
            td discrete
            td It is optional and indicates that the variable is a discrete-time variable. As modeling environments are able to automatically deduce whether a variable is continuous-time or discrete-time, this keyword is seldom used. Variables of Integer, Boolean or String type are discrete-time, and the use of Real variables indicates whether are continuous-time or discrete-time.
          tr
            td (no keyword)
            td Continuous-time or discrete-time variables.se
        
        p(v-if = 'isSpanish') Variabiliad de las variables
        table(v-if = 'isSpanish' style='width:100%; font-size: 15px;', border='1')
          tr
            th Keyword
            th(style="width:85%") Significado
          tr 
            td constant
            td El valor de una variable constante no se puede modificar en la definición del experimento y no cambia durante la simulación.
          tr
            td parameter
            td El valor de un parámetro se puede modificar cuando el componente se instancia o se hereda, y en la definición del experimento, pero los valores de los parámetros no cambian durante la simulación.
          tr
            td discrete
            td Es opcional e indica que la variable es una variable de tiempo discreto. Dado que los entornos de modelado pueden deducir automáticamente si una variable es de tiempo continuo o de tiempo discreto, esta palabra clave rara vez se usa. Las variables de tipo Entero, Booleano o Cadena son de tiempo discreto, y el uso de variables Reales indica si son de tiempo continuo o de tiempo discreto.
          tr
            td (no keyword)
            td Variables en tiempo continuo o en tiempo discreto
      div(style='width:100%; height: 50px; margin: 50px 0 0 50px 0 ;')  
      p(v-if = '!isSpanish') Attributes of variables
      table(v-if = '!isSpanish' style='width:100%; font-size: 15px; margin: 50px 0 0 50px 0 ;', border='1')
        tr
          th Attribute
          th(style="width:85%") Meaning
        tr 
          td quantity
          td Physical quantity (e.g., quantity = "Time", quantity = "Mass"). 
        tr 
          td unit
          td Units of the physical quantity (e.g., unit = "s", unit = "kg"). 
        tr
          td min, max
          td Minimum and maximum values allowed for the variable. The variable value going out of this range indicates that the model is not reproducing the behavior of the real system. Some modeling environments generate warning messages during the simulation when variables go out of their range. The assert sentence can be used for the same purpose.
        tr
          td start, fixed
          td The start and fixed attributes are related. If fixed is true, the start value is the variable initial value. If fixed is false and the variable is calculated at the initial time solving a system of simultaneous equations, then the start value is used by the numerical iterative method as initial guess for calculating the variable at the initial time.
        tr
          td displayUnit
          td Units employed by the graphical user interface of the modeling environment for displaying the results.
      p(v-if = 'isSpanish') Atributos de las variables
      table(v-if = 'isSpanish' style='width:100%; font-size: 15px; margin: 50px 0 0 50px 0 ;', border='1')
        tr
          th Attribute
          th(style="width:85%") Meaning
        tr 
          td quantity
          td Cantidad física (e.g., quantity = "Time", quantity = "Mass").
        tr 
          td unit
          td Unidades de la cantidad física (por ejemplo, unidad = "s", unidad = "kg").
        tr
          td min, max
          td Valores mínimos y máximos permitidos para la variable. El valor de la variable que sale de este rango indica que el modelo no está reproduciendo el comportamiento del sistema real. Algunos entornos de modelado generan mensajes de advertencia durante la simulación cuando las variables se salen de su rango. La oración de afirmación se puede usar para el mismo propósito.
        tr
          td start, fixed
          td Los atributos de start y fixed están relacionados. Si fixed es verdadero, el valor inicial es el valor inicial de la variable. Si fixed es falso y la variable se calcula en el momento inicial resolviendo un sistema de ecuaciones simultáneas, entonces el valor inicial se usa mediante el método iterativo numérico como suposición inicial para calcular la variable en el momento inicial.
        tr
          td displayUnit
          td Unidades empleadas por la interfaz gráfica de usuario del entorno de modelado para mostrar los resultados.
      
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica facilitates declaring new variable types, based on the built-in types, by setting attribute values. For instance, two new types named Voltage and Current can be declared as follows:
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica facilita la declaración de nuevos tipos de variables, en función de los tipos integrados, mediante el establecimiento de valores de atributo. Por ejemplo, dos nuevos tipos llamados Voltaje y Corriente se pueden declarar de la siguiente manera: 
      .center
        img(src='./assets/code2-2B.png' width="400px" style="margin: 10px 0px -0px -0px;")
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The Modelica Standard Library (MSL) includes the Modelica.SIunits package that contains type declarations following the International System of Units. <br>This package is intended to standardize the declaration of physical quantity types and therefore the use of these types is recommended. The final keyword written before an attribute indicates that further modifications in the value of this attribute are not allowed.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La biblioteca estándar de Modelica (MSL) incluye el paquete Modelica.SIunits que contiene declaraciones de tipo siguiendo el Sistema Internacional de Unidades.<br>Este paquete está destinado a estandarizar la declaración de tipos de cantidades físicas y, por lo tanto, se recomienda el uso de estos tipos. La palabra clave final escrita antes de un atributo indica que no se permiten más modificaciones en el valor de este atributo.
      .center
        img(src='./assets/code2-2.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described in Modelica as
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El circuito puede modelarse en modelica como  
      .center
        img(src='./assets/code2-3.png' width="700px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/fig2-4.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit with diode bridge
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador con puente de diodos
      .center
        img(src='./assets/fig2-5.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/eq2-14.png' width="400px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center Rectifier circuit with diode bridge
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Circuito rectificador con puente de diodos
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/code2-4.png' width="700px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/fig2-6.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in one dimension
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en una dimensión
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/fig2-7.png' width="400px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/eq2-27.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in one dimension
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en una dimensión
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/code2-5.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/fig2-8.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in one dimension
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en una dimensión
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/fig2-9.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/eq2-31.png' width="700px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic models
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelos atómicos de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  Translation in one dimension
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Translación en una dimensión
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The circuit model can be described by
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo del circuito puede describirse por  
      .center
        img(src='./assets/code2-6.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/eq2-31.png' width="700px" style="margin: 10px 0px -0px -0px;")

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
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The attractive force between two bodies
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La fuerza de etracción entre dos cuerpos  
      .center
        img(src='./assets/fig2-10.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/eq2-39.png' width="400px" style="margin: 10px 0px -0px -0px;")

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
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") The attractive force between two bodies
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La fuerza de etracción entre dos cuerpos  
      .center
        img(src='./assets/code2-7.png' width="700px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/fig2-11.png' width="500px" style="margin: 10px 0px -0px -0px;")

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
        img(src='./assets/table2-5.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples of array equations
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de ecuaciones con arreglos  
      .center
        img(src='./assets/table2-6.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples showing how to declare and assign value to parameter arrays
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos mostrando como declarar y asignar valores a un arreglo  
      .center
        img(src='./assets/table2-7.png' width="600px" style="margin: 10px 0px -0px -0px;")

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
        img(src='./assets/table2-8.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Example of for-clause in equation section.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplo de ciclo for en la sección de ecuaciones  
      .center
        img(src='./assets/table2-9.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Examples of array equations and algorithms.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de ecuaciones con arreglos y algoritmos  
      .center
        img(src='./assets/table2-10.png' width="600px" style="margin: 10px 0px -0px -0px;")
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
        img(src='./assets/fig2-12.png' width="400px" style="margin: 10px 0px -0px -0px;")
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
        img(src='./assets/eq2-43.png' width="400px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parameters
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Parámetros  
      .center
        img(src='./assets/table2-11.png' width="600px" style="margin: 10px 0px -0px -0px;")

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
        img(src='./assets/code2-8.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Result obtained of simulating during 86400 s.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Resultados obtenidos al simular por 86400 s.
      .center
        img(src='./assets/fig2-13.png' width="600px" style="margin: 10px 0px -0px -0px;")

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
        img(src='./assets/fig2-14.png' width="600px" style="margin: 10px 0px -0px -0px;")
      //- p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Result obtained of simulating during 86400 s.
      //- p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Resultados obtenidos al simular por 86400 s.
      .center
        img(src='./assets/code2-9.png' width="700px" style="margin: 20px 0px -0px -0px;")

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
    title: 'Optomechatronics',
    description: 'Open Modelica II',
    path: 'optomechatronics-om-ii/OpenModelica11',
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
