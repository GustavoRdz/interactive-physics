<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    <button class="language" @click="isSpanish = !isSpanish">{{ a = isSpanish ? languages[0]:languages[1] }} </button>
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h3 Mecatronica computacional
        img(src='./assets/U.svg')
        p Modelado de sistemas con OpenModelica
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

    slide(enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h6(style="margin-top: -20px;")
        | Fundamentals of optics
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Modelado con modelica</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Modelos atomicos</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Integración de sistemas</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(style="margin: -10px 0 0 0;") <b>Optomecatronica</b>
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
      

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
      h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Physical modeling paradigm
      h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Paradigma de modelado físico
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center equation-based languages
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Lenguajes basados en equaciones
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los lenguajes concebidos para respaldar el paradigma de modelado físico permiten describir la parte de tiempo continuo del modelo mediante ecuaciones.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por este motivo, estos lenguajes de modelado se conocen como lenguajes basados en ecuaciones. Modelica pertenece a este tipo de lenguaje de modelado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Una ecuación establece una relación de igualdad entre dos expresiones (es decir, <b>expresión_1 = expresión_2</b>) en la que intervienen una o varias variables del modelo. Durante la simulación del modelo, la ecuación se emplea para calcular el valor de una de estas variables.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los lenguajes basados en ecuaciones, la forma en que se escribe una ecuación no determina la variable que se calculará a partir de la ecuación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Asimismo, el orden en que se escriben las ecuaciones del modelo no determina el orden de evaluación de las ecuaciones durante la simulación del modelo.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      // h4(v-if = '!isSpanish' style="margin: -30px 0px 0px 0px;").center Physical modeling paradigm
      // h4(v-if = 'isSpanish' style="margin: -30px 0px 0px 0px;").center Paradigma de modelado físico
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Object-oriented modeling
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelado orientado a objetos 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica es compatible con la metodología de modelado orientado a objetos, lo que facilita la reutilización de modelos tanto por composición como por herencia.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Algunas de las características del lenguaje se resumen a continuación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>- Modelado modular y jerárquico.</b> En la definición de las clases del modelo, Modelica permite distinguir entre interfaz y descripción interna, y encapsular la información. Las variables que no pertenecen a la interfaz se pueden declarar como variables protegidas, de modo que no se pueda acceder a ellas desde fuera de la clase.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para facilitar la conexión de componentes, Modelica permite agrupar las variables de interfaz en conectores y proporciona la sintaxis para definir la conexión entre conectores.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Asimismo, Modelica establece reglas (inspiradas en el principio de conservación de energía) para relacionar las variables del conector en el punto de conexión. Para ello, las variables conectoras se clasifican en los dos tipos siguientes:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>• Las variables cruzadas</b>, también conocidas como variables de esfuerzo, son aquellas variables que se establecen iguales en el punto de conexión.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>• Las variables de paso</b>, también conocidas como variables de flujo, son aquellas cuya suma se establece igual a cero en el punto de conexión.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Object-oriented modeling
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelado orientado a objetos
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>- Herencia.</b> Modelica admite la herencia múltiple y la definición de clases parciales, que definen las propiedades generales de la clase pero no se pueden instanciar. Las clases parciales facilitan la descripción de características comunes a varias clases.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>- Parametrización.</b> Modelica permite modificar los parámetros de la clase cuando la clase es instanciada y heredada. Los parámetros pueden ser variables independientes del tiempo. Además, la clase de componentes o superclases puede ser un parámetro. Esta función simplifica la experimentación con modelos. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") <b>– Anotaciones.</b> Modelica permite incluir anotaciones en el modelo de clase, cuyo propósito es definir las propiedades gráficas del icono y diagrama de clase, la documentación del modelo, etc. La capacidad de incorporar esta información en el modelo facilita la composición del modelo utilizando un editor gráfico de modelos. 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Object-oriented modeling
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelado orientado a objetos
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center  Classes of modelica language
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Clases del lenguaje de modelica
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      .center
        img(src='./assets/table1_1.png' height="450px" style="margin: 10px 0px -0px -0px;")
      eg-code-block(lang='html'). 
        <h3>type</h3>
        // Extending built-in types
        type Pressure = Real(unit="Pa");

        // Creating enumerated types
        type AssertionLevel = enumeration(warning, error);

         // Named type for arrays
         type Point = Real[3];
      eg-code-block(lang='html').
        <h3>connector</h3>
        // Typical Phyical Connector
        connector ConName
          Real acrossVar;
          flow Real throughVar;
        end ConName;

        // Causal Connector
        connector ConName = input Real;

        // Expandable Connector
        expandable connector ConName
          // Minimum connector elements
          input Real alwaysPresent;
        end ConName; 
      eg-code-block(lang='html').
        <h3>model</h3>
        model ModelName "Descriptive String"
        // parameters, connectors and sub-components
        parameter TypeName varName "Parameter declaration";
        ConnectorType conName "Connector declaration";
        ModelType subcompName "Sub-component declaration";
        SomeTypecondComp if 
        protected
          TypeName varName "Protected declaration";
        initial equation
          // Place any equations that apply only at the
          // start of a simulation here
        equation
          // Equations go here
          annotation(...);
        end ModelName;
      eg-code-block(lang='html').
        <h3>block</h3>
        block BlockName "Descriptive String"
        // parameters, connectors and sub-compoennts
        parameter TypeName varName "Parameter declaration";
        input ConnectorType conName "Connector declaration";
        ModelType subcompName "Sub-component declaration";
        protected
          TypeName varName "Protected declaration";
        initial equation
          // Place any equations that apply only at the
          // start of a simulation here
        equation
          // Equations go here
          annotation(...);
        end BlockName;
      eg-code-block(lang='html').
        <h3>record</h3>
        record RecordName
          Real x;
          Real y;
        end RecordName;
      eg-code-block(lang='html').
        <h3>function</h3>
        function FunctionName "Function description"
          input Real a;
          input Integer b;
          output Boolean c;
        algorithm
          // Whatever value the output variables have after the
          // algorithm section is completed or when a return statement
          // is encountered will be returned as the output values.
        end FunctionName;
      eg-code-block(lang='html').
        <h3>package</h3>
        within ParentPackage; // within; for top-level packages
        package PackageName "Package description"
          // The fully qualified name for this package
          // will be PackageName.NestedPackage
          package NestedPackage
            // Package contents
          end NestedPackage;
          
          // The fully qualified name for this model
          // will be PackageName.SomeModel
          model SomeModel
            ...
          end SomeModel;

          annotation(version="1.0", // This package's version number,
                                    // if it is a top-level package
                    // Set of packages this package depends on
                    uses(AnotherPackageName(version="2.0"),
                          YetAnother(version="1.2")));
        end PackageName;
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Object-oriented modeling
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelado orientado a objetos
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las variables del conector se pueden seleccionar de manera que las conexiones de los componentes satisfagan las leyes de conservación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por ejemplo, suponga que las variables del conector se seleccionan como se muestra en la Tabla 1.2, donde el producto de la variable cruzada y de paso de cada conector tiene unidades de potencia.
      .center
        img(src='./assets/table1_2.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las variables cruzadas describen cantidades físicas que determinan si existe el equilibrio, mientras que las variables de paso describen cantidades físicas que restauran el equilibrio.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Esta selección garantiza que si se conectan varios conectores de un mismo dominio, entonces se conserva la energía en el punto de conexión.
      .center
        img(src='./assets/fig1_1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Continuous-time atomic modeling
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Modelado de tiempo continuo
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center Plane pendulum
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center pendulo simple plano 
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un péndulo plano simple se modela mediante las siguientes dos ecuaciones 
      .center
        img(src='./assets/eq1_1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde φ representa el ángulo del péndulo con respecto a la vertical, w la velocidad angular, L la longitud del péndulo y g la aceleración gravitacional.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La descripción de Modelica del modelo tiene dos secciones, que contienen la declaración de variables y las ecuaciones respectivamente.
      .center
        img(src='./assets/code1_1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las variables se declaran primero. La palabra clave <b>equation</b> señala el comienzo de la sección de la ecuación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El modelo tiene dos variables de tiempo continuo de tipo real que representan el ángulo (phi) y la velocidad angular (w); un parámetro de tipo real que representaUn péndulo plano simple se modela mediante las siguientes dos ecuaciones 
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h1(v-if = 'isSpanish' style="margin: 200px 0px 200px 0px;").center Sesión 2
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Elemento generalizado de dos terminales
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Considérese primero el elemento generalizado mostrado en la figura, como una representación de cualquier elemento físico. 
      .center
        img(src='./assets/fig2_1.png' height="300px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El elemento generalizado tiene dos terminales, denotados como 2 y 1, por medio de los cuales interactúa con el medio que lo circunda -otros elementos y el “medio ambiente”-. La conexión entre los terminales de los elementos, hace que estos compartan información, sus variables.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;
    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Variables generalizadas
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el elemento se tendrán dos tipos de variables generalizadas, que son funciones del tiempo:
      p(v-if = '!isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")            
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") - La <b>transvariable v(t)</b>, que será aquella variable que se especifica como una diferencia entre los valores en los terminales del elemento, o entre un terminal de este y un punto de referencia. Esta es la variable “a través del elemento”. Se requieren dos puntos para su medición. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") - La <b>pervariable f(t)</b>, que será aquella variable que tiene el mismo valor en cada terminal del elemento. Esta es la variable que “fluye por el elemento”. Se requiere solo un punto para su medición. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En cada dominio físico, se definirá cuales son la transvariable y la pervariable, y las relaciones entre ellas en sus elementos básicos. Esto también permitirá, definir cuales variables constituyen los estados de estos sistemas.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En la figura se muestra una adaptación del Tetraedro de estados de Paynter, en el cual se muestran, además de la transvariable y la pervariable, la integral de la transvariable x(t) y la integral de la pervariable h(t).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La transvariable <span style="font-family: Times New;">v21(t) = v2(t) - v1(t)</span> y su integral <span style="font-family: Times New;">x21(t) = x2(t) - x1(t)</span>, corresponden a las diferencias algebraicas entre los valores de estas variables en los terminales del elemento. La transvariable de un terminal (1 o 2) del elemento (v1(t), v2(t)) y su integral (x1(t), x2(t)), son medidas respecto a un punto o “terminal” de referencia.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La pervariable f(t) y su integral h(t), son las mismas en los dos terminales del elemento.
      .center
        img(src='./assets/fig2_2.png' height="400px" style="margin: 10px 0px -0px -0px;")
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Elementos generalizados
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los trayectos entre la pervariable y la transvariable en el tetraedro, indicarán las relaciones existentes entre ellas, permitiendo determinar la relación constitutiva de un elemento determinado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como se ha indicado antes, por definición
      .center
        img(src='./assets/eq2_1.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Además, del tetraedro, se tienen las siguientes relaciones
      .center
        img(src='./assets/eq2_3.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Combinando (2.3) y (2.1) se obtiene, que  
      .center
        img(src='./assets/eq2_6.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") la cual es la relación constitutiva de los elementos almacenadores de energía “tipo A”, aquellos cuya variable de estado es su transvariable.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de elementos tipo A son el capacitor eléctrico, la masa, el volante y el capacitor hidráulico.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") De (2.6) se obtiene que
      .center
        img(src='./assets/eq2_7.png' height="62px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde v21(to) es el estado inicial del elemento tipo A.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si se combinan ahora (2.4) y (2.2) se obtiene, que 
      .center
        img(src='./assets/eq2_8.png' height="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") la cual es la relación constitutiva de los elementos almacenadores de energía “tipo T”, aquellos cuya variable de estado es su pervariable. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por ejemplo, el inductor eléctrico y el resorte, son elementos tipo T. De (2.8) se obtiene que 
      .center
        img(src='./assets/eq2_9.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde f (to ) es el estado inicial del elemento tipo T.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Finalmente, (2.5) es la relación constitutiva de los elementos disipadores de energía “tipo D”. Esta es una relación algebraica, por lo tanto, los elementos tipo D no tienen un estado asociado a ellos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Elementos que disipan energía son, por ejemplo, el resistor eléctrico, y los orificios y las válvulas en los sistemas hidráulicos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Existirán también fuentes ideales de transvariable y de pervariable, así como elementos transformadores de variables dentro de un mismo dominio físico y elementos transductores, que lo hacen entre variables de diferente dominio.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Todas las expresiones anteriores, que relacionan la transvariable y la pervariable en un elemento, son no causales esto es, no establecen una relación de causa a efecto o de entrada a salida.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si bien la representación de los elementos y sus relaciones dentro de un sistema, son no causales, a nivel de un experimento con el sistema, se pueden considerar como “entradas” al mismo, a los estímulos aplicados y a los cambios de los estados iniciales o parámetros, y como “salidas”, a aquellas de sus variables que se desean observar, las “variables de interés” que son medidas.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas eléctricos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos básicos de los sistemas eléctricos son: el capacitor, el inductor y el resistor, mostrados en la figura.
      .center
        img(src='./assets/fig2_3.png' width="500px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los elementos de los sistemas eléctricos, la transvariable es la diferencia de tensión (v21) entre sus terminales y la pervariable la corriente eléctrica (i) por ellos.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Capacitor eléctrico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del capacitor es
      .center
        img(src='./assets/eq2_10.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde v021 es la diferencia de tensión inicial en el capacitor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El capacitor, almacena energía en función de la diferencia de tensión entre sus terminales, energía de campo eléctrico.  
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Inductor eléctrico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del inductor es  
      .center
        img(src='./assets/eq2_11.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde i0 es la corriente inicial por el inductor.  
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El inductor, almacena energía en función de la corriente por el, energía de campo magnético.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resistor eléctrico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del resistor es  
      .center
        img(src='./assets/eq2_12.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El resistor disipa energía.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas eléctricos la capacitancia C del capacitor está dada en F, la inductancia L del inductor en H, la resistencia R del resistor en Ω, la diferencia de tensión v21 en V y lacorriente i en A. La unidad del tiempo t es s.
  
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas hidráulicos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos básicos de los sistemas hidráulicos son: el tanque de almacenamiento, la tubería larga y la restricción hidráulica, los cuales se muestran en la figura.
      .center
        img(src='./assets/fig2_4.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los elementos de los sistemas hidráulicos, la transvariable es la diferencia de presión (P21) entre sus extremos y la pervariable la razón de flujo volumétrico (Q) a través de ellos.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Capacitor hidráulico ideal</b> -tanque-
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva de un tanque cilíndrico vertical y abierto a la atmósfera es  
      .center
        img(src='./assets/eq2_13.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como la presión absoluta en el fondo del tanque es  
      .center
        img(src='./assets/eq2_14.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") su valor relativo respecto a la presión atmosférica P0 -de referencia-, es  
      .center
        img(src='./assets/eq2_15.png' height="40px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Utilizando (2.13) y (2.15), la relación constitutiva del tanque se puede escribir como  
      .center
        img(src='./assets/eq2_16.png' height="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde P0 es la presión relativa inicial en el fondo del tanque. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Este capacitor hidráulico, almacena energía en función de la presión diferencial −relativa a la atmosférica−.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Inductor hidráulico ideal</b> −tubería larga−
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La presión diferencial entre los extremos de la tubería, ejerce una fuerza que acelera el fluido dentro de esta, según la ecuaciónUtilizando (2.13) y (2.15), la relación constitutiva del tanque se puede escribir como  
      .center
        img(src='./assets/eq2_17.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") de donde se obtiene la relación constitutiva del inductor hidráulico  
      .center
        img(src='./assets/eq2_18.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") siendo Q0 es el caudal inicial por la tubería.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El inductor hidráulico, almacena energía en función del caudal a través de el.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resistor hidráulico ideal</b> -orificio, válvula-
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se considerarán como resistores hidráulicos, aquellos elementos que ponen resistencia al flujo de un fluido, ocasionando una caída de presión. Una restricción (orificio, válvula) insertada en una tubería, es un resistor hidráulico.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La caída de presión a través de un orificio, ocasionada por el flujo de un fluido está dada, en forma aproximada, por la relaciónde donde se obtiene la relación
      .center
        img(src='./assets/eq2_19.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") la cual también se expresa como
      .center
        img(src='./assets/eq2_20.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el ámbito lineal, (2.20) se puede aproximar por la relación
      .center
        img(src='./assets/eq2_21.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En la restricción hidráulica se disipa energía.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas hidráulicos la diferencia de presión P21 está dada en Pa y el caudal volumétrico Q en m3 s-1. La capacitancia Cf del capacitor hidráulico está dada en m3 Pa-1 , la inductancia I f del inductor hidráulico en Pa s/(m3 /s) y la resistencia (lineal) R' del resistor hidráulico en Pa/(m3/s). La unidad del tiempo t es s.      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas mecánicos con elementos que se desplazan
      p(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos básicos de los sistemas mecánicos, cuyos componentes se desplazan en forma longitudinal son: la masa, el resorte y el amortiguador, los cuales se mues- tran en la figura 2.5. La masa solo tiene un punto móvil, se considera concentrada en un punto, mientras que los dos extremos del resorte y del amortiguador son móviles, estos se “estiran” o “encogen” longitudinalmente.
      .center
        img(src='./assets/fig2_5.png' height="230px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En estos elementos, la transvariable es la diferencia de velocidades (V21) entre sus extremos y la pervariable la fuerza (F) por ellos. Como se indica, la posición y velocidad de la masa, deben determinarse respecto a un punto de referencia.
      hr
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Masa ideal</b>
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva de la masa es
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica facilita la declaración de nuevos tipos de variables, en función de los tipos integrados, mediante el establecimiento de valores de atributo. Por ejemplo, dos nuevos tipos llamados Voltaje y Corriente se pueden declarar de la siguiente manera: 
      .center
        img(src='./assets/eq2_22.png' heigth="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde V0 es la velocidad inicial de la masa.
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La masa almacena energía en función de su velocidad, energía cinética.
      hr
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resorte ideal</b>
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las relaciones constitutivas del resorte son 
      .center
        img(src='./assets/eq2_23.png' heigth="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde F0 es la fuerza inicial por el resorte.
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El resorte almacena energía en función de la fuerza, energía potencial.
      hr
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Amortiguador ideal</b>
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del amortiguador esLas relaciones constitutivas del resorte son 
      .center
        img(src='./assets/eq2_25.png' heigth="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El amortiguador disipa energía.
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La diferencia de desplazamientos X21, entre los extremos de los elementos mecánicos que se desplazan, está dada por 
      .center
        img(src='./assets/eq2_26.png' heigth="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde X0 es el desplazamiento relativo inicial. En el caso de la masa, su posición velocidad son mediadas respecto al punto de referencia (X20(t), V20(t)).
      hr
      p(v-if = 'isSpanish' style="margin: 10px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas mecánicos con elementos que se desplazan, la cantidad de materia m de la masa está dada en kg, la constante de rigidez k del resorte en Nm-1, el coeficiente de amortiguamiento b del amortiguador en N m-1 s, la diferencia de desplazamiento X20,1 en m, la diferencia de velocidades V20,1 en m s-1 y la fuerza F en N. La unidad del tiempo t es s. 
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas mecánicos con elementos que giran
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos básicos que giran en los sistemas mecánicos son: la masa giratoria o volante, el resorte giratorio y el amortiguador giratorio, los cuales se muestran en la figura.
      .center
        img(src='./assets/fig2_6.png' height="230px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El eje del volante es rígido (sus dos extremos tienen el mismo desplazamiento angular y giran a la misma velocidad), mientras que los extremos del eje del resorte y los del amortiguador, pueden tener diferente desplazamiento angular y girar a diferente velocidad.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En estos elementos, la transvariable es la diferencia de velocidades angulares (ω21) entre sus extremos y la pervariable el par (T) por ellos. En forma similar a lo que ocurre con la masa de los sistemas mecánicos con elementos que se desplazan, en el caso del volante, su posición y velocidad angular deben determinarse respecto a un eje de referencia.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Volante ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del volante esVolante ideal
      .center
        img(src='./assets/eq2_27.png' height="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde ω0 es la velocidad angular inicial del volante.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El volante almacena energía cinética en función de su velocidad angular.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resorte giratorio ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las relaciones constitutivas del resorte giratorio son
      .center
        img(src='./assets/eq2_28.png' height="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde T0 es el par inicial por el.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El resorte giratorio almacena energía potencial en función del par.
      .center
        img(src='./assets/eq2_30.png' height="40px" style="margin: 10px 0px -0px -0px;")
        hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Amortiguador giratorio ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del amortiguador giratorio es
      .center
        img(src='./assets/eq2_31.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde θ021 es el desplazamiento angular relativo inicial.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas mecánicos que giran, el momento de inercia J del volante está dado en Nms2, la constante de rigidez K del resorte giratorio en Nmrad-1, el coefi ciente de amortiguamiento B del amortiguador giratorio en Nmsrad-1, la diferencia de posiciones angulares θ20,1 en rad, la diferencia de velocidades angulares ω21 en rads-1 y el par T en Nm. La unidad del tiempo t es s.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas térmicos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas térmicos, puede haber almacenamiento y transmisión de calor. Esta última puede ser por conducción, convección o radiación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos de los sistemas térmicos son: el capacitor térmico y el resistor térmico, los cuales se muestran en la figura.
      .center
        img(src='./assets/fig2_7.png' height="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas térmicos la transvariable es la diferencia de temperatura (T21) y la pervariable el flujo de calor (q). La diferencia de temperatura en el capacitor térmico, debe tomarse respecto a una de referencia.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Capacitor térmico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del capacitor térmico es  
      .center
        img(src='./assets/eq2_32.png' heigth="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") dondeT020 es la diferencia de temperatura inicial del capacitor térmico.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El capacitor térmico almacena energía en función del incremento de temperatura.  
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La capacitancia térmica de un material está dada por  
      .center
        img(src='./assets/eq2_33.png' heigth="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde Cp es su capacidad calorífica y m su masa.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resistor térmico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación constitutiva del resistor térmico es
      .center
        img(src='./assets/eq2_34.png' heigth="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El resistor térmico disipa energía.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el caso de la transmisión de calor por conducción en un material sólido, su resistencia térmica es
      .center
        img(src='./assets/eq2_35.png' heigth="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde σc es la conductividad térmica del material, A su área normal a la dirección del flujo de calor y L su largo (grosor) en la dirección del flujo de calor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para la transmisión de calor por convección, la resistencia térmica es  
      .center
        img(src='./assets/eq2_36.png' heigth="70px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde Ch es el coeficiente global de transferencia de calor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si la resistencia térmica del resistor es alta, se dice que este es un aislante, pero si esta es baja, se dice más bien que el material es un buen conductor térmico.
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los elementos térmicos la capacitancia Ct del capacitor térmico está dada en JK-1, la resistencia Rt del resistor térmico en KW-1, la diferencia de temperatura T20,1 en K y el flujo de calor q en W. La unidad del tiempo t es s.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Conversión de variables
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En los sistemas físicos, también están presentes elementos que permiten modificar la relación entre las variable en sus terminales, dentro de un mismo dominio físico. Hay otros, que permiten convertir las variables de un dominio físico a otro. 

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Conversión de variables
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Transformadores ideales</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se denominará como transformador a un elemento que modifica la relación entre las pervariables y transvariables en sus terminales, sin cambiar su dominio físico.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Elementos de este tipo son el transformador eléctrico, la palanca mecánica, el conjunto de engranes y otros, mostrados en la figura.
      .center
        img(src='./assets/fig2_8.png' height="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") - <b>Transformador eléctrico ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si no hay pérdidas de energía en el transformador, se cumple que las potencias en el arrollado primario y el arrollado secundario del transformador son iguales, por lo que
      .center
        img(src='./assets/eq2_37.png' heigth="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") que se puede escribir como  
      .center
        img(src='./assets/eq2_38.png' heigth="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si n > 1, es un transformador elevador de tensión, mientras que si n < 1, es un transformador reductor de tensión.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") - <b>Sistema de engranes ideal</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En un transformador mecánico giratorio ideal, sin pérdidas de energía, se tiene que  
      .center
        img(src='./assets/eq2_39.png' heigth="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") de donde se obtiene que  
      .center
        img(src='./assets/eq2_40.png' heigth="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde n es la relación de engranes.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si n > 1 es un incrementador de velocidad de rotación, mientras que si
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") n < 1, es un reductor de velocidad de rotación.  

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Conversión de variables
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Transductores ideales</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un transductor, será un elemento que convierte las variables de un dominio físico en las de otro.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por ejemplo, un motor eléctrico es un transductor electromécanico, convierte energía eléctrica en energía mecánica, mientras que un conjunto compuesto por una turbina y un generador eléctrico transforma energía mecánica, hidráulica, eólica o de otra forma, en energía eléctrica.
      .center
        img(src='./assets/fig2_9.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el transductor electromecánico ideal mostrado en la figura, se tiene que la energía eléctrica (en sus terminales eléctricos) y la energía mecánica (en el eje) son iguales.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se cumple entonces que
      .center
        img(src='./assets/eq2_41.png' heigth="80px" style="margin: 10px 0px -0px -0px;")
      hr
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Transductor generalizado</b>
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El transductor generalizado “Tipo N”, es un elemento ideal de cuatro terminales, el cual se muestra en la figura .
      .center
        img(src='./assets/fig2_10.png' height="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las relaciones entre las transvariables y pervariables en el, cumplen con las siguientes relaciones  
      .center
        img(src='./assets/eq2_42.png' height="130px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") donde N es la constante del transductor y cuyas unidades serán las de v43/v21, que deben ser equivalentes a las de fa/ fb.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si el dominio físico de las variables en los terminales 2 y 1, es el mismo que el de las variables en los terminales 4 y 3, la constante N es adimensional y el elemento se denominará entonces “transformador”.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En ningún caso, (2.42) a (2.44) establecen una causalidad o relación de entrada a salida, entre las variables en los dos conjuntos de terminales del transductor.Las relaciones entre las transvariables y pervariables en el, cumplen con las siguientes relaciones  

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Variables de los sistemas físicos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Con base en las definiciones de las secciones anteriores, en la tabla se presenta el resumen de las variables asociadas con los sistemas físicos descritos.
      .center
        img(src='./assets/table2_1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En estos, con la excepción de los sistemas hidráulicos y térmicos, el flujo de potencia entrando a un elemento es  
      .center
        img(src='./assets/eq2_45.png' width="400px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Interconexión de los elementos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se han presentado las características de los elementos de diferentes dominios físicos, donde cada uno de ellos representa un fenómeno determinado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las relaciones constitutivas de estos elementos, no establecen una causalidad (relación entrada a salida) de las variables en el mismo.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Supóngase que se tiene el capacitor eléctrico y el inductor eléctrico, mostrados en la figura.
      .center
        img(src='./assets/fig2_11.png' height="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las relaciones constitutivas de estos dos elementos son
      .center
        img(src='./assets/eq2_46.png' height="130px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por el momento, se tienen cuatro variables θCL = {vC,iC,vL,iL} y dos ecuaciones, (2.46) y (2.47).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si estos dos elementos son interconectados como se ilustra en la figura 2.11b, debido a esta interconexión se establecen dos ecuaciones adicionales:El modelo del circuito puede describirse por  
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Las transvariables</b> −“variables de potencial”− en el punto de interconexión, son iguales  
      .center
        img(src='./assets/eq2_48.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>La suma de las pervariables</b> −“variables de flujo”− en el punto de interconexión, es cero  
      .center
        img(src='./assets/eq2_49.png' height="35px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Por lo tanto, el modelo del circuito eléctrico de la figura 2.11b es  
      .center
        img(src='./assets/eq2_50.png' height="180px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ahora se tienen cuatro variables y cuatro ecuaciones. Además, el estado inicial del sistema está definido, {vC0 ,i0L}. El modelo está completamente determinado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como se verá más adelante, pasar del modelo del sistema, dado en este caso por (2.50) a (2.53), a su modelo Modelica, se hace en forma directa.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Si se deseara resolver el modelo de este circuito eléctrico, empleando una simulación mediante bloques causales -con conexiones de entrada y salida definidas-, se deberá partir de un “diagrama de bloques” con elementos de integración -integradores-, similar al mostrado en la figura 2.12.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La relación entre este diagrama y el circuito de la figura 2.11b, ya no es evidente.  
      .center
        img(src='./assets/fig2_12.png' height="400px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Elementos básicos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Sistemas heterogéneos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los sistemas físicos, generalmente integran elementos de diferentes dominios, por lo se encuentran denominaciones para referirse a ellos, como sistemas electrohidráulicos, electromecánicos, electroquímicos, electrotérmicos, híbridos (con referencia a vehículos), termofluídicos, o mecatrónicos.
      .center
        img(src='./assets/fig2_13.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un ejemplo simple de un sistema heterogéneo, es un motor eléctrico y en particular, el motor de corriente continua mostrado en la figura. El motor en si es un transductor electromecánico. Convierte energía eléctrica en energía mecánica.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En este sistema, las variables eléctricas son la tensión Va(t) y la corriente ia(t) en el circuito de armadura, y la fuerza contra electromotriz Vm(t). Las variables mecánicas son la velocidad de rotación ω(t) del motor y el par T(t) producido por este. Además, se considerará un par TL(t) opuesto por la carga conectada al eje del motor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las ecuaciones que modelan el motor eléctrico son: 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • En el <b>circuito eléctrico</b>
      .center
        img(src='./assets/eq2_54.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • En la parte <b>mecánica</b>  
      .center
        img(src='./assets/eq2_55.png' width="700px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • La <b>fuerza contra electromotriz</b> en el motor  
      .center
        img(src='./assets/eq2_56.png' width="700px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • El <b>par producido</b> por el motor  
      .center
        img(src='./assets/eq2_57.png' width="700px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Sustituyendo (2.56) en (2.54) y (2.57) en (2.55), se obtiene:  
      .center
        img(src='./assets/eq2_58.png' width="700px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los parámetros del motor son θm ={Ra,La,J,B,Ke,Kt},con la resistencia Ra del circuito de armadura en Ω, la inductancia La del circuito de armadura en H, la inercia J del rotor del motor en kgm2, el coeficiente de fricción viscosa B del rotor del motor en N m s, la constante Ke de la fuerza contra electromotriz en V/(rad/s) y la constante Kt del par del motor en NmA-1. En el sistema de unidades SI, Ke = Kt = K.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las variables en el sistema del motor eléctrico incluyen: la corriente eléctrica ia en A, la tensión de armadura Va en V y la velocidad de rotación ω en rads-1. El par opuesto por la carga es TL en N m.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como se verá más adelante, el lenguaje Modelica permite modelar y simular, sistemas que combinan diferentes dominios físicos, como el del ejemplo anterior, con gran facilidad.  

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h1(v-if = 'isSpanish' style="margin: 200px 0px 200px 0px;").center Sesión 3
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Componentes Modelica para representar a los elementos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Variables de potencial y de flujo
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En la figura se muestra un componente genérico de dos terminales en Modelica.
      .center
        img(src='./assets/fig3_1.png' height="170px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En este hay dos variables: la variable de flujo f(t), que pasa por el componente -es igual en ambos terminales-, y la variable de potencial p21(t) = p2(t)- p1(t) a través del componente -es diferente en cada terminal-.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Estas dos variables están relacionadas, por la ecuación general
      .center
        img(src='./assets/eq3_1.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Según la definición anterior, la variable de flujo por el componente, tiene el mismo significado que las pervariables por los elementos físicos, y la variable de potencial a través del componente, el mismo significado que la transvariable a través de los elementos físicos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para determinar, si la selección natural de las variables de flujo y potencial de los componentes, son las pervariables y trasvariables en los elementos de los sistemas físicos vistas anteriormente, se debe tomar en consideración lo que ocurre cuando dos o más componentes, se conectan entre si por sus terminales, como se muestra en la figura, en forma similar al análisis de la conexión del capacitor y el inductor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Al interconectar los terminales de dos (o más) componentes, se tienen dos ecua- ciones de conexión, que establecen restricciones entre las variables de los componentes:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 1. La suma de todas las variables de flujo en el terminal de conexión es cero, esto es que
      .center
        img(src='./assets/eq3_2.png' height="50px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") 2. Todas las variables de potencial en el terminal de conexión son iguales, por lo que
      .center
        img(src='./assets/eq3_3.png' height="50px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Componentes Modelica para representar a los elementos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Definición de los conectores y puertos en Modelica
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Para la interconexión de los componentes entre si, se deben definir los terminales de conexión o conectores, y las variables -de potencial y flujo- que residen en ellos.
      .center
        img(src='./assets/table3_1.png' heigth="100px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En Modelica, las declaraciones de los conectores de los componentes, son de la forma general
      .center
        img(src='./assets/code3_1.png' heigth="220px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el conector hay una variable de potencial tipo “variableTipoPotencial” y una variable de flujo tipo “variableTipoFlujo” -definida con el prefijo flow-.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las definiciones básicas, de los conectores de los componentes de los diferentes dominios físicos en Modelica, son:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector eléctrico</b> −“borne”
      .center
        img(src='./assets/code3_2.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector magnético</b>
      .center
        img(src='./assets/code3_3.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/code3_3b.png' heigth="200px" style="margin: -20px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector fluídico</b> -líquidos o gases-
      .center
        img(src='./assets/code3_4.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector mecánico -"brida"-</b> 
      .center
        img(src='./assets/code3_5.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector mecánico giratorio</b> 
      .center
        img(src='./assets/code3_6.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Conector térmico</b>
      .center
        img(src='./assets/code3_7.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Puerto eléctrico</b> -modelo parcial 1-
      .center
        img(src='./assets/code3_8.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Puerto mecánico rígido</b> -modelo parcial-
      .center
        img(src='./assets/code3_9.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Puerto mecánico giratorio</b> -modelo parcial-
      .center
        img(src='./assets/code3_10.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") •<b>Puerto térmico</b> -modelo parcial-
      .center
        img(src='./assets/code3_11.png' heigth="200px" style="margin: 10px 0px -0px -0px;")
      .center
        img(src='./assets/code3_12.png' heigth="200px" style="margin: -15px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelos parciales -“incompletos”-, son la base para definir otros que extienden sus características. Estos no pueden ser utilizados dentro de un diagrama de interconexión de componentes.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Componentes Modelica para representar a los elementos de los sistemas físicos
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Componentes Modelica de los elementos físicos
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Con base en los puertos, se definen los componentes que representan a los elementos de los diferentes dominios físicos. Algunos ejemplos, son:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Inductor eléctrico</b>
      .center
        img(src='./assets/code3_13.png' height="130px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Masa que se desplaza</b>
      .center
        img(src='./assets/code3_14.png' height="350px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resorte giratorio</b>
      .center
        img(src='./assets/code3_15.png' height="225px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") • <b>Resistor térmico</b>
      .center
        img(src='./assets/code3_16.png' height="200px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los modelos de los componentes, extienden (extends) los modelos parciales (partial) de los puertos. De esta manera, los componentes heredan todas las propiedades de los puertos, los cuales a su vez se han definido en función de los conectores. Esto permite realizar un modelado jerarquizado. Se establece un “árbol genealógico” de clases, donde los objetos de una clase heredan las propiedades de su clase “progenitora”, esta a su vez los de la suya, y así en orden ascendente.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un cambio en una de las propiedades de una clase, es heredado (transmitido) inmediatamente a todos los objetos descendientes de la misma.

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center  
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica es un lenguaje orientado a objetos para modelar y simular, sistemas heterogéneos no lineales complejos, esto es, sistemas que incluyen, por ejemplo, componentes mecánicos, eléctricos, hidráulicos, de control continuo o secuencial, procesos, y sistemas de transmisión de energía eléctrica, entre otros.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La programación del modelo Modelica de un sistema dinámico, puede hacerse a dos niveles diferentes de abstracción:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.2em;") ⚈ En el primero, o bajo, el modelo se expresa utilizando las ecuaciones que se han desarrollado a partir de las relaciones constitutivas de los elementos del sistema y de las relaciones entre estos, determinadas por la topología del sistema a modelar, utilizando un editor de texto.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.2em;") ⚈ En el segundo, o alto, el modelo del sistema se elabora mediante la intercone- xión de componentes prediseñados representados por un icono y disponibles normalmente en bibliotecas, utilizando un editor gráfico. Cada uno de estos iconos representa un fenómeno, mayoritariamente físico, cuyas ecuaciones se han embebido en el mismo. En este caso el modelo es un diagrama esquemá- tico o de objetos, que representa al sistema simulado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las clases y sus herederos, forman la base de un modelado jerarquizado. Los en- laces entre los terminales de los componentes, corresponden a las conexiones físicas entre los elementos del sistema.  
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Supóngase que se desea analizar el comportamiento de un sistema dinámico, modelado por la ecuación diferencial de segundo orden  
      .center
        img(src='./assets/eq4_1.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ante un estímulo tipo escalón u(t) = 2 para t ≥ 0,2 s, cuyos parámetros son K = 2,5, ωn = 10,0 rad-1 y ζ = 0,40.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En Modelica se tiene la función <span style="color: red;">der</span>, derivada de primer orden (d/dt), por lo que (4.1) debe escribirse, utilizando la variable auxiliar x(t), como
      .center
        img(src='./assets/eq4_2.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El codigo del modelo, para realizar la simulación deseada, utilizando ecuaciones, es:  
      .center
        img(src='./assets/code4_1.png' width="600px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") De la descripción anterior del problema a resolver, se hace evidente la diferencia en la forma en que se puede establecer el modelo Modelica empleando ecuaciones, respecto a la que se debe utilizar en los lenguajes en que se hace uso de instrucciones de asignación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En la figura, se muestran el estímulo aplicado y la respuesta del sistema simulado, para el intervalo de tiempo 0 ≤ t ≤ 2,0 s, obtenidos con el ambiente de modelado y simulación OMEdit.  
      .center
        img(src='./assets/fig4_1.png' width="600px" style="margin: 10px 0px -0px -0px;")

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center Fundamentos de modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Como lo es en todo lenguaje de programación para computadoras digitales, los programas (modelos) Modelica deben cumplir con ciertas convenciones de notación, sintaxis y ejecución.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Modelica es un lenguaje de modelado y simulación de sistemas dinámicos orientado a objetos, que emplea una descripción no causal del sistema con base en ecuaciones.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Su entidad básica es la clase.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los objetos son miembros de las clases.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los objetos interactúan entre si, por medio de los conectores.
      h5.center Estructura de un modelo Modelica.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Ejemplos de constructores de arreglos con iteradores  
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La estructura general, de la lista de definiciones de un modelo Modelica, es:
      .center
        img(src='./assets/code4_2.png' width="600px" style="margin: 10px 0px -10px -0px;")
      .center
        img(src='./assets/code4_2B.png' width="600px" style="margin: 0px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La declaración de una clase, se inicia con la palabra clave <span style="color: blue; font-family: Arial;">class</span> o <span style="color: blue; font-family: Arial;">model</span>, seguida del nombre de la clase.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El programa puede definir una clase (<span style="color: blue; font-family: Arial;">class</span>), un modelo (<span style="color: blue; font-family: Arial;">model</span>), una función (<span style="color: blue; font-family: Arial;">function</span>), un conector (<span style="color: blue; font-family: Arial;">connector</span>), un registro (<span style="color: blue; font-family: Arial;">record</span>), un bloque (<span style="color: blue; font-family: Arial;">block</span>), o un paquete (<span style="color: blue; font-family: Arial;">package</span>).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las palabras clave <span style="color: blue; font-family: Arial;">model</span> y <span style="color: blue; font-family: Arial;">class</span> son equivalentes e intercambiables. Las clases <span style="color: blue; font-family: Arial;">connector</span>, <span style="color: blue; font-family: Arial;">record</span>, <span style="color: blue; font-family: Arial;">block</span> y <span style="color: blue; font-family: Arial;">function</span>, tienen propiedades especiales.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase package, permiten agrupar las definiciones de diferentes clases, usualmente relacionadas entre si de alguna manera, facilitando la creación de bibliotecas de componentes.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La declaración de una clase, crea un “nombre tipo” en Modelica, que hace posible declarar variables de este tipo, conocidas como objetos o miembros de la clase.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Definida una clase, los objetos son miembros de la clase, heredan sus características y propiedades, a los cuales se accede con la notación punto (.).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El objeto se crea precediendo el nombre de la variable con el nombre de la clase (tipo).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Cada objeto puede utilizarse como un “registro”, que hereda todos los atributos de la clase.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La declaración de un objeto de una clase la “crea”. Se reserva memoria para el y se inicializan sus variables.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se establece una jerarquía de clases, de manera que las variables de una clase son objetos (“hijos”, herederos) de una clase de mayor nivel y las de esta, son a su vez objetos de una clase de un nivel aún mayor.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La declaración de la clase (modelo, función, etc.) termina con la palabra clave <span style="color: blue; font-family: Arial;">end</span> seguida del nombre dado a esta.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En el modelo Modelica, la primera parte es la sección de declaraciones de las constantes, parámetros y variables, con base en el “tipo” de información que alma- cenan, ya sean estos tipos básicos (<span style="color: red; font-family: Arial;">Real</span>, Integer, Boolean, ...), o de una clase definida (Voltage, Inductance, Mass, Force, ...).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La palabra clave <span style="color: blue; font-family: Arial;">equation</span>, separa la sección de declaraciones de la de ecuacio- nes, en la que se establece el comportamiento de las variables del sistema simulado.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Cada línea de declaración y cada ecuación, se termina con un punto y coma (<span style="color: blue; font-family: Arial;">;</span>).
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center EL Lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Clases especializadas
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Aunque en Modelica casi todo representa una clase -<span style="color: blue; font-family: Arial;">class</span>-, se utilizan nombres específicos para distinguirlas según su uso específico: <span style="color: blue; font-family: Arial;">block</span>, <span style="color: blue; font-family: Arial;">connector</span>, <span style="color: blue; font-family: Arial;">function</span>, <span style="color: blue; font-family: Arial;">model</span>, <span style="color: blue; font-family: Arial;">operator</span>, <span style="color: blue; font-family: Arial;">package</span>, <span style="color: blue; font-family: Arial;">record</span>, <span style="color: blue; font-family: Arial;">type</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase <span style="color: blue; font-family: Arial;">block</span> es una clase con una causalidad definida (entrada → salida). Esta es similar a la clase <span style="color: blue; font-family: Arial;">model</span>, con la restricción que todas las variables de un conector de un <span style="color: blue; font-family: Arial;">block</span>, deben llevar el prefijo <span style="color: blue; font-family: Arial;">input</span> u <span style="color: blue; font-family: Arial;">output</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase <span style="color: blue; font-family: Arial;">connector</span>, se utiliza para establecer la estructura de los puntos de interfaz (conexión), de un componente.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase <span style="color: blue; font-family: Arial;">function</span> es una clase que puede ser llamada con un conjunto de varia- bles. Corresponde a una función matemática. Sus resultados son devueltos a través de las variable con el prefijo <span style="color: blue; font-family: Arial;">output</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase <span style="color: blue; font-family: Arial;">model</span> es la clase más utilizada, ya que es empleada para definir el modelo del sistema de interés.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los paquetes -clase <span style="color: blue; font-family: Arial;">package</span>- solo pueden contener declaraciones de clases y constantes. Estos proveen una manera de agrupar definiciones relacionadas y de encapsular bibliotecas en una forma jerarquizada. Además, evitan el conflicto entre nombres de las definiciones de los componentes, ya que estos estarán precedidos por el nombre del paquete −usando la notación punto−.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los elementos de un paquete pueden ser “importados” dentro de otra clase, utilizando <span style="color: blue; font-family: Arial;">import</span>. Se puede importar el paquete “completo”, o una o más definiciones en particular e incluso, estas se pueden renombrar:
      .center
        img(src='./assets/code4_3.png' height="60px" style="margin: 10px 0px -0px -0px;")
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Similar a los paquetes es el operator, pero este solo puede contener declaraciones de funciones.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La clase type permite la definición de nuevos “nombres tipo”, a ser utilizados en las definiciones dentro de otras clases.  

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Convención para nombres
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En Modelica existe una convención no forzada de uso general, para la asignación de los identificadores (nombres) de las clases, variables, constantes, parámetros y otros elementos:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ Los nombres de las clases o tipos, excepto los de las funciones, siempre empiezan con mayúscula. 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ Los nombres de las variables empiezan con minúscula, excepto los que son de solo una letra.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ Los nombres formados por varias palabras, tienen cada palabra iniciada con mayúscula, con la palabra inicial siguiendo las reglas anteriores. A esta forma de declarar los nombres, se le denomina “tipo camello”.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ El símbolo de subrayado, solo se usa al final del nombre para indicar un subíndice o superíndice.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ Los nombres predefinidos para los objetos de conexión (connector) en los modelos, son p (positivo) y n (negativo), en los componentes eléctricos, o variantes de nombres terminados con a o b para indicar los lados opuestos de un componente, como por ejemplo flange_a (izquierdo) y flange_b (derecho), en los sistemas mecánicos.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los nombres son sensibles al uso de las mayúsculas y pueden contener cualquier numero de letras y números. Solo está restringido el uso de las palabras clave reservadas de Modelica, las cuales no pueden utilizarse como identificadores.  

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center 
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Números enteros y de punto flotante
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;")  Los números enteros (Integer), son secuencias de dígitos decimales en el ámbito que va desde <span style="font-family: Arial;">-2147483648</span> hasta <span style="font-family: Arial;">+2147483647</span> (para una implementación en com- plemento de dos de <span style="font-family: Arial;">32</span> bits).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los números en punto flotante (<span style="color: red; font-family: Arial;">Real</span>), se expresan como números decimales formados por + o −, una secuencia de dígitos incluyendo un punto decimal (optativo) y seguidos (en forma optativa) por un indicador de exponente (E, o e), + o − y uno o más dígitos decimales como potencias de 10. El ámbito recomendado corresponde a los números de punto flotante IEEE de precisión doble (<span style="color: black; font-family: Arial;">±2.225073858572014E-308</span> a <span style="color: black; font-family: Arial;">±1.7976931348623157E+30</span>).

      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Valores lógicos y cadenas de caracteres
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los identificadores lógicos (Boolean) pueden tener valor true (cierto) o false (falso).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las cadenas de caracteres (String) aparecen encerrados ente comillas dobles (”) y pueden incluir en forma directa cualquier símbolo alfanumérico, excepto las comillas dobles (”) y la barra diagonal invertida (\).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se pueden representar algunos caracteres especiales dentro de una cadena, prece- diéndolos por una barra diagonal invertida: \’, \", \?, \\, \n (“new line”), \r (“return”), \t (“horizontal tab”).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se utiliza el símbolo + para concatenar las cadenas de caracteres.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Operadores y funciones matemáticas
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") En Modelica, las ecuaciones, las asignaciones y las declaraciones, contienen expresiones con operadores, entre los que se incluyen:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ elevar a una potencia: <span style="color: red; font-family: Arial;">^</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ multiplicación y división, y multiplicación y división de arreglos (elemento por elemento): <span style="color: red; font-family: Arial;">* / .* ./</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ suma, resta, y suma y resta de arreglos (elemento por elemento): <span style="color: red; font-family: Arial;">+ -</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ relaciones: <span style="color: red; font-family: Arial;">< <= > >= == <></span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ negación unitaria: <span style="color: red; font-family: Arial;">not</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ “y” lógico: <span style="color: red; font-family: Arial;">and</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ “o” lógico: <span style="color: red; font-family: Arial;">or</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ ámbito de arreglos: <span style="color: red; font-family: Arial;">expDe:expHasta, expDe:exPaso:expHasta</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ construcción de arreglos: <span style="color: red; font-family: Arial;">{exp1...}, [exp1...], {exp1...; exp2...}, [exp1...; exp2...]</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ acceso a elementos de un arreglo: <span style="color: red; font-family: Arial;">arr[indice]</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ acceso a propiedades de un elemento: <span style="color: red; font-family: Arial;">var.pro</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 20px;  padding: 15px; line-height: 1.5em;") ⚈ llamado a funciones: <span style="color: red; font-family: Arial;">funNombre(argumentos)</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La evaluación de las expresiones aritméticas sigue las reglas usuales, donde los operadores de mayor precedencia se evalúan primero y donde se obedecen las leyes de conmutación y asociación.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las funciones disponibles incluyen: <span style="color: red; font-family: Arial;">abs(v)</span>, <span style="color: red; font-family: Arial;">sign(v)</span>, <span style="color: red; font-family: Arial;">sqrt(v)</span>, <span style="color: red; font-family: Arial;">exp(v)</span>, <span style="color: red; font-family: Arial;">log(v)</span>, <span style="color: red; font-family: Arial;">log10(v)</span>; <span style="color: red; font-family: Arial;">sin(v)</span>, <span style="color: red; font-family: Arial;">cos(v)</span>, <span style="color: red; font-family: Arial;">tan(v)</span>, <span style="color: red; font-family: Arial;">asin(v)</span>, <span style="color: red; font-family: Arial;">acos(v)</span>, <span style="color: red; font-family: Arial;">atan(v)</span>, <span style="color: red; font-family: Arial;">atan2(x,y)</span>, <span style="color: red; font-family: Arial;">sinh(v)</span>, <span style="color: red; font-family: Arial;">cosh(v)</span>, <span style="color: red; font-family: Arial;">tanh(v)</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Las siguientes funciones producen un “evento” (si no están dentro de una instrucción <span style="color: blue; font-family: Arial;">when</span>): <span style="color: red; font-family: Arial;">div(x,y)</span>, <span style="color: red; font-family: Arial;">mod(x,y)</span>, <span style="color: red; font-family: Arial;">rem(x,y)</span>, <span style="color: red; font-family: Arial;">ceil(x)</span>, <span style="color: red; font-family: Arial;">floor(x)</span>, <span style="color: red; font-family: Arial;">integer(x)</span>. Si se desea que esto no suceda, se les puede aplicar la función <span style="color: red; font-family: Arial;">noEvent</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se utiliza la función derivada <span style="color: red; font-family: Arial;">der</span><span style="color: black; font-family: Arial;">(exp1) (d/dt)</span>, para la escritura de las derivadas de las variables en las ecuaciones. La expresión “<span style="color: red; font-family: Arial;">exp1</span>” debe ser un escalar Real.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Se dispone también del tiempo “tiempo muerto” con la función <span style="color: red; font-family: Arial;">delay(exp1,L)</span> o, si se quiere establecer una cota al tiempo muerto, con <span style="color: red; font-family: Arial;">delay(exp1,L,Lmax)</span>.
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Arreglos -vectores y matrices-
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Un arreglo se puede considerar como una colección de variables, todas del mismo tipo. En Modelica los arreglos son multidimensionales y rectangulares.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los escalares pueden considerarse arreglos de cero dimensiones. Por su parte, los vectores son un arreglo de una dimensión y las matrices arreglos de dos dimensiones. En Modelica no existen “vectores fila” o “vectores columna” y no se puede distinguir entre ellos, ya que los vectores tienen solo una dimensión. Si se desea una diferenciación de este tipo, están disponibles las matrices columna y las matrices fila, que son sus correspondientes equivalentes de dos dimensiones.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") El número de dimensiones de un arreglo es fijo, no se puede cambiar en el transcurso de la ejecución del programa. Sin embargo, el tamaño de las dimensiones del arreglo se puede calcular durante la ejecución.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los arreglos se pueden definir de dos formas diferentes, como se muestra adelante. En estas, la definición <span style="color: black; font-family: Arial;">Ct</span> corresponde al parámetro de sustitución para la clase de los elementos del arreglo (Boolean, Integer, Real, String, tipos de enumeración). La cota superior de la dimensión <span style="color: black; font-family: Arial;">(n, m)</span> debe ser tipo entero o el nombre E para los enumerados o lógicos. Los dos puntos <span style="color: black; font-family: Arial;">(:)</span> indican que la cota superior de las dimensiones es desconocida.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Declaración de los arreglos:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct x;</span>, escalar (dim-0),
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[n] x; o Ct x[n];</span>, vector (dim-1) de n elementos,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[E] x; o Ct x[E];</span>, vector con índice mediante enumeración tipo E,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[n,m] x; o Ct x[n,m];</span>, matriz (dim-2) de nxm elementos,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[1] x; o Ct x[1];</span>, vector (dim-1) representando un escalar,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[1,1] x; o Ct x[1,1];</span>, matriz (dim-2) representando un escalar,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[n,1] x; o Ct x[n,1];</span>, matriz (dim-2) de una columna con n elementos,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[1,m] x; o Ct x[1,m];</span>, matriz (dim-2) de una fila con m elementos,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">Ct[n1,n2,...,nk]x; o Ct x[n1,n2,...,nk];</span>, arreglo (dim-k).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Algunos constructores de arreglos particulares son:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">identity(n)</span>, devuelve una matriz identidad nxn,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">diagonal(v)</span>, devuelve una matriz cuadrada diagonal, con los elementos del vector v en la diagonal,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">zeros(n1,n2,...)</span>, devuelve un arreglo n1 x n2 x n3 x... lleno de “ceros”,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">ones(n1,n2,...)</span>, devuelve un arreglo n1 x n2 x n3 x... lleno de “unos”,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ f<span style="color: black; font-family: Arial;">ill(s,n1,n2,...)</span>, devuelve un arreglo n1 x n2 x n3 x... con todos los elementos iguales al escalar o arreglo s,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">linespace(x1,x2,n)</span>, devuelve un vector de n elementos linealmente espa- ciadoa entre x1 y x2, incluyendo los valores extremos, n ≥ 2.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Formación (acceso a los elementos) de los arreglos, vectores y matrices:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">array(A, B, C)</span>, devuelve un arreglo formado por su argumentos, todos es- tos deben ser del mismo tamaño y del mismo tipo,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">vec ={1,2,3,...}</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">mat ={ {11,12,13,...},{21,22,23,...},{...} }</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">A[i,j]</span>, elemento i,j del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">A[:,j]</span>, devuelve un vector con todos los elementos de la columna j del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">A[i,:]</span>, devuelve un vector con todos los elementos de la fila i del arreglo A. Funciones de álgebra vectorial:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Funciones de álgebra vectorial:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">transpose(A)</span>, permuta las primeras dos dimensiones del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">outerProduct(v1,v2)</span>, devuelve el producto v1 * traspuesta(v2),
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">symetric(A)</span>, devuelve una matriz cuyos elementos de la diagonal y sobre esta, son los correspondientes a la matriz A, y cuyos elementos debajo de la diagonal se hacen iguales a los que están sobre la diagonal de A.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">cross(v1,v2)</span>, devuelve el producto cruz de v1 con v2,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La igualdad <span style="color: black; font-family: Arial;">A=B</span>, la asignación <span style="color: black; font-family: Arial;">A:=B</span>, y la suma y resta <span style="color: black; font-family: Arial;">C:= A+/-B</span> de escalares, vectores, matrices y arreglos, están definidas elemento por elemento y requieren que <span style="color: black; font-family: Arial;">size(A)=size(B)</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La multiplicación <span style="color: black; font-family: Arial;">C:=s*A</span> de un escalar, vector, matriz, o arreglo <span style="color: black; font-family: Arial;">A</span>, por un escalar <span style="color: black; font-family: Arial;">s</span>, está definida elemento por elemento, 
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La división<span style="color: black; font-family: Arial;">C:=A/s</span> de un escalar, vector, matriz, o arreglo <span style="color: black; font-family: Arial;">A</span>, por un escalar <span style="color: black; font-family: Arial;">s</span>, está definida elemento por elemento,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La multiplicación elemento por elemento, de dos arreglos <span style="color: black; font-family: Arial;">A</span> y <span style="color: black; font-family: Arial;">B</span>, es <span style="color: black; font-family: Arial;">C:= A.*B</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La división elemento por elemento, de dos arreglos <span style="color: black; font-family: Arial;">A</span> y <span style="color: black; font-family: Arial;">B</span>, es <span style="color: black; font-family: Arial;">C:= A./B</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La multiplicación <span style="color: black; font-family: Arial;">C:=A*B</span> de dos vectores <span style="color: black; font-family: Arial;">(v)</span> o matrices <span style="color: black; font-family: Arial;">(q)</span>, esta definida para los casos: <span style="color: black; font-family: Arial;">v[n]*v[n]=escalar, v[n]*q[n,m]=v[m], q[n,m]*v[m]=v[n], q[n,m]*q[m,p]=m[n,p]</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ La elevación a una potencia, elemento por elemento <span style="color: black; font-family: Arial;">C:=A.^B</span>, requiere que <span style="color: black; font-family: Arial;">A</span> o <span style="color: black; font-family: Arial;">B</span> sean escalares, o que <span style="color: black; font-family: Arial;">size(A)=size(B)</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Funciones operadores de “reducción”:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">min(A)</span>, devuelve el elemento más pequeño del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">min(x1,x2)</span>, devuelve el menor entre los escalares x1 y x2,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">max(A)</span>, devuelve el elemento más grande del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">max(x1,x2)</span>, devuelve el mayor entre los escalares x1 y x2,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">sum(A)</span>, devuelve la suma escalar de todos los elementos del arreglo A,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">product(A)</span>, devuelve la multiplicación escalar de todos los elementos del arreglo <span style="color: black; font-family: Arial;">A</span>.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Otras funciones:
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">ndims(A)</span>, devuelve el número de dimensiones del arreglo <span style="color: black; font-family: Arial;">A</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">size(A)</span>, devuelve un vector de largo <span style="color: black; font-family: Arial;">ndims(A)</span> conteniendo los tamaños de las dimensiones del arreglo <span style="color: black; font-family: Arial;">A</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">size(A,i)</span>, devuelve el tamaño de la dimensión <span style="color: black; font-family: Arial;">i</span> del arreglo <span style="color: black; font-family: Arial;">A</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">vector(A)</span>, devuelve un vector con todos los elementos del arreglo <span style="color: black; font-family: Arial;">A</span>,
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") ⚈ <span style="color: black; font-family: Arial;">matrix(A)</span>,devuelve una matriz con las dos primeras dimensiones del arreglo <span style="color: black; font-family: Arial;">A</span>.
      
      .prev(@click.stop='previousSlide' style="float: left; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev
      .next(@click.stop='nextSlide' style="float: right; margin: 60px; 0 0 0;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  :  {{ theme }}</sup>
      h5(v-if = '!isSpanish' style="margin: -10px 0px 0px 0px;").center
      h5(v-if = 'isSpanish' style="margin: -10px 0px 0px 0px;").center El lenguaje Modelica
      h6(v-if = '!isSpanish' style="margin: 50px 0px 0px 0px;").center 
      h6(v-if = 'isSpanish' style="margin: 50px 0px 0px 0px;").center Operadores que generan un evento
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Existen <b>eventos temporales</b>, que ocurren en un instante determinado -se conoce el instante en que se producen- y <b>eventos de estado</b>, generados por un cambio en la condición de una variable, de los cuales no se conoce con antelación en que instante ocurrirán.
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") Los operadores relacionados con eventos son: <span style="color: red; font-family: Arial;">initial</span><span style="color: black; font-family: Arial;">()</span> (ocurre al inicio de la simulación), <span style="color: red; font-family: Arial;">terminal</span><span style="color: black; font-family: Arial;">()</span>  (al finalizar una simulación exitosa), <span style="color: red; font-family: Arial;">noEvent</span><span style="color: black; font-family: Arial;">(expr)</span>  (hace que la expresión “<span style="color: black; font-family: Arial;">expr</span>” se tome en forma literal, no generando un evento), <span style="color: red; font-family: Arial;">smooth</span><span style="color: black; font-family: Arial;">(p,expr)</span>  (para <span style="color: black; font-family: Arial;">p > 0</span>, regresa la expresión real “<span style="color: black; font-family: Arial;">expr</span>” e indica que esta es diferenciable <span style="color: black; font-family: Arial;">p</span> veces), <span style="color: red; font-family: Arial;">sample</span><span style="color: black; font-family: Arial;">(inicio, periodoMuestreo)</span>  (genera eventos instantáneos cada “<span style="color: black; font-family: Arial;">periodoMuestreo</span>” a partir de “<span style="color: black; font-family: Arial;">inicio</span>”), <span style="color: red; font-family: Arial;">pre</span><span style="color: black; font-family: Arial;">(y)</span>  (regresa el “límite por la izquierda” de “<span style="color: black; font-family: Arial;">y</span>” en un evento), <span style="color: red; font-family: Arial;">edge</span><span style="color: black; font-family: Arial;">(b)</span> (<span style="color: black; font-family: Arial;">b</span> and <span style="color: red; font-family: Arial;">not pre</span><span style="color: black; font-family: Arial;">(b)</span>), <span style="color: black; font-family: Arial;">change(v)</span> (<span style="color: black; font-family: Arial;">v<>pre(v)</span>), <span style="color: black; font-family: Arial;">reinit(x,exp)</span> (dentro de una cláusula <span style="color: blue; font-family: Arial;">when</span> reinicializa “<span style="color: black; font-family: Arial;">x</span>” con “<span style="color: black; font-family: Arial;">expr</span>”).
      p(v-if = 'isSpanish' style="margin: 0px 0px 0px 0px;  padding: 15px; line-height: 1.5em;") La función <span style="color: black; font-family: Arial;">clock</span> genera eventos temporales (“tictac” de reloj) y la función <span style="color: black; font-family: Arial;">sample</span> muestrea una variable continua, proveyendo una variable con valor solo en instantes determinados (discreta), en sincronía con un reloj.

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
    title: 'Computational Mechatronics',
    description: 'Introduction to OpenModelica',
    path: 'intro-modelica',
    course: 'Computational Mechatronics',
    part: 1
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
