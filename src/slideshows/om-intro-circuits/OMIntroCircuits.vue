<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Computational mechatronics
        //- img(src='./assets/U.svg' style="height: 100px;")
        h4 Equation based modeling
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin: -20px 0 0 0; ").center Equation based modeling
      p(style="line-height: 1.7em;") Continuing the study of physicsl systems in modelica.
      p(style="line-height: 1.7em;") Let examine the modeling of simple circuits.
      p(style="line-height: 1.7em;") The first, the simplest RC circuit.
      .center
        img(src='./assets/circuit-1.png' height="400px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin: -20px 0 0 0; ").center Equations
      .center
        img(src='./assets/circuit-1.png' height="200px")
      p(style="line-height: 1.7em;") The current is can be determined by
      p(style="line-height: 1.7em;").center <span class="mth">10 - u<sub>c</sub> = R·i</span>
      p(style="line-height: 1.7em;") the capacitor voltage
      p(style="line-height: 1.7em;").center <span class="mth">du<sub>c</sub>/dt · C = i</span>
        

    slide(:steps=5, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin: -20px 0 0 0; ").center First code
      p(style="line-height: 1.7em;") Model SimpleCircuit
      eg-code-block(lang='html').
            model SimpleCircuit <eg-code-comment :active='step >= 1' enter='flipInY'> Modelica entity: class &rightarrow; model</eg-code-comment>
              parameter Real C; <eg-code-comment :active='step >= 2' enter='flipInY'> Model parameter &rightarrow; Capacitance</eg-code-comment>
              parameter Real R; <eg-code-comment :active='step >= 2' enter='flipInY'> Model parameter &rightarrow; Resistance</eg-code-comment>
              parameter Real V0; <eg-code-comment :active='step >= 2' enter='flipInY'> Model parameter &rightarrow; Voltage</eg-code-comment>
              Real i; <eg-code-comment :active='step >= 3' enter='flipInY'> Model variable &rightarrow; Current</eg-code-comment>
              Real uC; <eg-code-comment :active='step >= 3' enter='flipInY'> Model variable &rightarrow; Capacitor voltage</eg-code-comment>
            equation
              V0-uC = R*i; <eg-code-comment :active='step >= 4' enter='flipInY'> Model equation </eg-code-comment>
              der(uC)*C = i; <eg-code-comment :active='step >= 4' enter='flipInY'> Model equation </eg-code-comment>
            end SimpleCircuit; <eg-code-comment :active='step >= 5' enter='flipInY'> Model end</eg-code-comment>
    


    slide(:steps=4, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Add comments
      p(style="line-height: 1.7em; margin-top: -50px;")
      eg-code-block(lang='html').
          model SimpleCircuit "A simple circuit"

              parameter Real C = 0.001 "Capacity";<eg-code-comment :active='step >= 2' enter='flipInY' > Parameter represent values that are determined</eg-code-comment>              
              parameter Real R = 100 "Resistance"; <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> before the simulation starts and remains</eg-code-comment>
              parameter Real V0 = 10 "Source voltage"; <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> constant during the simulation time. </eg-code-comment>
              <br>
              Real i "Current"; <eg-code-comment :active='step >= 3' enter='flipInY'> A textual description should also be assigned to the variables.</eg-code-comment>
              Real uC "Capacitor voltage";

            equation
              V0-uC = R*i; <eg-code-comment :active='step === 4' enter='flipInY'> The equation is not causal; it is a non-causal relation</eg-code-comment>
              der(uC)*C = i; <eg-code-comment :active='step === 4' enter='flipInY' :arrow='false'> between variables. It is not an assignment! </eg-code-comment>
            end SimpleCircuit;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Units
      p(style="line-height: 1.7em; margin-top: -50px;")
      eg-code-block(lang='html').
          model SimpleCircuit "A simple circuit"

            parameter Real C(unit="F") = 0.001 "Capacity"; <eg-code-comment :active='step >= 1' enter='flipInY'> We can assign units to </eg-code-comment>
            parameter Real R(unit="Ohm") = 100 "Resistance";<eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> the variables and</eg-code-comment>
            parameter Real V0(unit="V") = 10 "Source voltage"<eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> parameters.</eg-code-comment>

            Real i(unit="A") "Current";
            Real uC(unit="V") "Capacitor voltage";
          
          initial equation
            uC = 0; 
          equation
            V0-uC = R*i; <eg-code-comment :active='step >= 1' enter='flipInY'> These units are than matched in the equations</eg-code-comment>
            der(uC)*C = i; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> In case of a unit mismatch, a warning is messaged.</eg-code-comment>
          end SimpleCircuit;



    slide(:steps=2, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Units continuation
      p(style="line-height: 1.7em; margin-top: -50px;")
      eg-code-block(lang='html').
          model SimpleCircuit "A simple circuit"

            import SI = Modelica.SIunits; <eg-code-comment :active='step >= 1' enter='flipInY'> It is in general more convenient to use the</eg-code-comment>
            parameter SI.Capacitance C = 0.001 "Capacity"; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> the predefined set of types of</eg-code-comment>   
            parameter SI.Resistance R = 100 "Resistance";<eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'>   the Modelica.SIunits package.</eg-code-comment>
            parameter SI.Voltage V0 = 10 "Source voltage"

            SI.Current i "Current";
            SI.Voltge uC "Capacitor voltage";
          
          initial equation
            uC = 0; 
          equation
            V0-uC = R*i;
            der(uC)*C = i;
          end SimpleCircuit;
      p(v-if="step >= 2") Our complete Modelica model. <br>Modeling in such a flat way is only possible of small systems. <br>In order to model larger system we want to decompose our systems into components. <br>We can do this by creating a separate model for each component.

    slide(:steps=2, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center The ground model
      eg-code-block(lang='html').
        model Ground ”Ground Element” <eg-code-comment :active='step >= 1' enter='flipInY'> the ground is represented by a pair of variables</eg-code-comment>

          SI.Current i; <eg-code-comment :active='step >= 1' enter='flipInY'> The current</eg-code-comment>
          SI.Voltage v; <eg-code-comment :active='step >= 1' enter='flipInY'> The voltage potential</eg-code-comment>
        
        equation
          v=0; <eg-code-comment :active='step >= 1' enter='flipInY'> The model is incomplete. Two variables but just one equation.</eg-code-comment>
        
        end Ground;
      p(v-if="step >= 2") The missing equations will be added when we connect the component within the circuit.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  The resistor 
      eg-code-block(lang='html').
        model Resistor ”Resistor Model”

            parameter SI.Resistance R;

            SI.Current i1;  <eg-code-comment :active='step >= 1' enter='flipInY'> The resistor has two pins, and consequently,</eg-code-comment>
            SI.Voltage v1; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'>    it requires two pairs of variables.</eg-code-comment>
            SI.Current i2;
            SI.Voltage v2;
        
        protected <eg-code-comment :active='step >= 1' enter='flipInY'> Internal variables can be hidden in a protected section.</eg-code-comment>
            SI.Current i; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> These variables are not accessible from outside.</eg-code-comment>
            SI.Voltage u;
        
        equation <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'>     Again the model is incomplete 6 variables and 4 equations.</eg-code-comment>
            u = v2-v1;
            i1 + i2 = 0;
            i = i2;
            u = R*i;
        
        end Resistor;
      p(v-if="step >= 2")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  The capacitor
      eg-code-block(lang='html').
        model Capacitor ”Ideal Capacitor Model” <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> Almost the same as the resistor</eg-code-comment>

            parameter SI.Capacitance C;

            SI.Current i1;
            SI.Voltage v1; 
            SI.Current i2;
            SI.Voltage v2;
        
        protected
            SI.Current i;
            SI.Voltage u;
        
        equation 
            u = v2-v1;
            i1 + i2 = 0;
            i = i2;
            der(u)*C = i;
        
        end Capacitor;
      p(v-if="step >= 2")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center Voltage source
      eg-code-block(lang='html').
        model ConstantVoltage ”A source  of Constant Voltage” <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> As above</eg-code-comment>

            parameter SI.Voltage V0 = 100;

            SI.Current i1;
            SI.Voltage v1; 
            SI.Current i2;
            SI.Voltage v2;
        
        protected
            SI.Current i;
            SI.Voltage u;
        
        equation 
            u = v2 - v1;
            i1 + i2 = 0;
            i = i2;
            u = V0;
        
        end ConstantVoltage;
      p(v-if="step >= 2")
      
    slide(:steps=2, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center Creating a package
      eg-code-block(lang='html' style="margin-top: -50px;").
         package Electrics ”Basic Electric Elements” <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> Collected in a Modelica package</eg-code-comment>

            import SI = Modelica.SIunits;
         
            model Ground <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> The ground</eg-code-comment>
              ...
            end Ground;
         
            model Resistor <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> The resistor</eg-code-comment>
              ...
            end Resistor;
         
            model Capacitor <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> The capacitor</eg-code-comment>
              ...
            end Capacitor;
            ...
         
          end Electrics; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> A package can contain arbitrary classes, also sub-packages.</eg-code-comment>
      p(v-if="step >= 2") • The look-up of class-names within a package is first done locally within a class and then further up the hierarchy. <br>• The import statement is valid for all package models. <br> • Identifiers of instances (variables or components) are only looked up locally.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Using the package
      eg-code-block(lang='html' style="margin-top: -50px;").
        model SimpleCircuit ”A simple RC Circuit” <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> Now we can compose our circuit.</eg-code-comment>

          Electrics.Ground G; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> simply declare the models like simple variables.</eg-code-comment>
          Electrics.ConstantVoltage S (V0=10);
          Electrics.Resistor R(R=100);
          Electrics.Capacitor C(C=0.001);
        
        equation
          ...  <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> We are still missing 3∙2 + 1 = 7 equations...</eg-code-comment>
        
        
        
        
        
        end SimpleCircuit; 
      p(v-if="step >= 2")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Using the package
      eg-code-block(lang='html' style="margin-top: -50px;").
        model SimpleCircuit ”A simple RC Circuit” 

          Electrics.Ground G; 
          Electrics.ConstantVoltage S (V0=10);
          Electrics.Resistor R(R=100);
          Electrics.Capacitor C(C=0.001);
        
        equation <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> The missing equations are the connection equations of the nodes.</eg-code-comment>
          S.v2 = R.v1
          S.i2 + R.i1 = 0;
          R.v2 = C.v1
          R.i2 + C.i1 = 0;
          C.v2 = S.v1
          C.v2 = G.v
          C.i2 + S.i1 + G.i = 0;
        
        end SimpleCircuit;
      p(v-if="step >= 1") • We still have to enter these equations manually. This is highly inconvenient and error-prone.
      .center
        img(src='./assets/circuit-1.png' height="250px" style="margin-top: -60px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Connectors
      eg-code-block(lang='html' style="margin-top: -50px;").
        connector Pin
          
          SI.Voltage v "Potential at the pin";
          flow SI.Current i "Current flowing into the pin";
          
        end Pin;

      p(v-if="step >= 1") This is the definiton of the corresponding connector. <br> • It consists in a set of variables. <br> • These variables can be declared to be... <br> &emsp;&emsp;– potential variables:  &emsp;<span class="mth">SI.Voltage v</span> <br> &emsp;&emsp;– flow variables:  &emsp; &emsp;<span class="mth"><b>flow</b> SI.Current i</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center Connectors
      eg-code-block(lang='html' style="margin-top: -50px;").
        connector Pin
          
          SI.Voltage v "Potential at the pin";
          flow SI.Current i "Current flowing into the pin";
          
        end Pin;

      p(v-if="step >= 1") • We can link two ore more pins by using the connect statement.
      p.center <span class="mth"><b>connect(pin1, pin2) &emsp;&emsp;&emsp; connect(pin1, pin3)&emsp;&emsp;</b></span>
      p  it implies
      p.center  <span class="mth"><b>pin1.v = pin2.v,&emsp;&emsp;   pin1.v = pin3.v,&emsp;&emsp;  pin1.i + pin2.i + pin3.i = 0&emsp;</b></span>
      p  • The equations are generated in dependence on the declaration

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Modeling with connectors
      eg-code-block(lang='html' style="margin-top: -50px;").
        model Resistor ”Resistor Model” <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> Integrate the pin connector in the Resistor model.</eg-code-comment>

          parameter SI.Resistance R;
          
          Pin n; <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> For this pourpose, declare two pins</eg-code-comment>
          Pin p;
          
          SI.Current i;
          SI.Voltage u;
        
        equation
          u = p.v - n.v;
          n.i + p.i = 0;
          i = p.i;
          u = R*i;
        
        end Resistor;
      p(v-if="step >= 1") • We can access the connector variables like any other variables. <br> • Likewise, the procedure is done for all other components.
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Balanced models
      eg-code-block(lang='html' style="margin-top: -50px;").
        model Resistor ”Resistor Model”

          parameter SI.Resistance R;
          
          Pin n;
          Pin p;
          
          SI.Current i;
          SI.Voltage u;
        
        equation
          u = p.v - n.v;
          n.i + p.i = 0;
          i = p.i;
          u = R*i;
        
        end Resistor;
      p(v-if="step >= 1") • In any physical model, there will be exactly one connecting equation for each pair of connector variables. <br> • Hence, we can immediately check if our system is structurally regular. <br> • 2 variables + 4 connector variables = 6 <br>• 2 connector equations and 4 local equations = 6

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Connecting components
      eg-code-block(lang='html' style="margin-top: -50px;").
        model SimpleCircuit ”A simple RC Circuit”

        Electrics.Ground G;
        Electrics.ConstantVoltage S(V0=10);
        Electrics.Resistor R(R=100);
        Electrics.Capacitor C(C=0.001);

        equation <eg-code-comment :active='step >= 1' enter='flipInY' :arrow='false'> Now we can compose the circuit by using the connect statement.</eg-code-comment>
          connect(G.p,S.n);
          connect(S.p,R.n);
          connect(R.p,C.n);
          connect(C.p,G.p);
        
        end SimpleCircuit;

      p(v-if="step >= 1") This looks much better than before.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Example 2
      p(v-if="step >= 1") Now, we can compose the model of a (slightly) larger electric circuit almost without having to think.
      .center
        img(src='./assets/circuit-2.png' height="350px" style="margin-top: 0px;")


    slide(:steps=5, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Example 2
      .center
        img(src='./assets/circuit-2.png' height="200px" style="margin-top: -70px;")
      eg-code-block(lang='html' style="margin-top: -0px;").
         model Circuit
          Resistor R1(R=100); <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> <span style="display:inline-block; width: 8.5em;"></span>6 variables, 4 equations.</eg-code-comment>
          Resistor R2(R=20); <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> <span style="display:inline-block; width: 9em;"></span>6 variables, 4 equations.</eg-code-comment>
          Capacitor C(C=1e-6); <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> <span style="display:inline-block; width: 7.7em;"></span>6 variables, 4 equations.</eg-code-comment>
          Inductor L(L=0.0015); <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> <span style="display:inline-block; width: 7em;"></span>6 variables, 4 equations.</eg-code-comment>
          SineVSource S(Ampl=15, Freq=50); <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> 6 variables, 4 equations.</eg-code-comment>
          Ground G; <eg-code-comment :active='step >= 2' enter='flipInY' :arrow='false'> <span style="display:inline-block; width: 14em;"></span>2 variables, 1 equation. <span style="display:inline-block; width: 3em;"></span><span style="color: black;">TOTAL: 32 var, 21 eq</span></eg-code-comment>

        equation
          connect(G.p,S.n) <eg-code-comment :active='step >= 3' enter='flipInY' :arrow='false'> 1 potential equation.</eg-code-comment>
          connect(G.p,L.n)<eg-code-comment :active='step >= 3' enter='flipInY' :arrow='false'> &emsp;1 potential equation.</eg-code-comment>
          connect(G.p,R2.n)<eg-code-comment :active='step >= 3' enter='flipInY' :arrow='false'> 1 potential equation.</eg-code-comment>
          connect(G.p,C.n)<eg-code-comment :active='step >= 3' enter='flipInY' :arrow='false'> &emsp;1 potential equation. All of them: 1 flow equation (1 node).</eg-code-comment>

          connect(S.p,R1.p)<eg-code-comment :active='step >= 4' enter='flipInY' :arrow='false'> 1 potential equation.</eg-code-comment>
          connect(S.p,L.p)<eg-code-comment :active='step >= 4' enter='flipInY' :arrow='false'> &emsp;1 potential equation. Both: 1 flow equation (1 node).</eg-code-comment>
          
          connect(R1.n,R2.p)<eg-code-comment :active='step >= 5' enter='flipInY' :arrow='false'> 1 potential equation.</eg-code-comment>
          connect(R1.n,C.p)<eg-code-comment :active='step >= 5' enter='flipInY' :arrow='false'> &emsp;1 potential equation. Both: 1 flow equation (1 node).<br><span style="color: black;">TOTAL: 11 equations</span> <br>&rightarrow; <span style="color: red;">TOTAL: 32 equations, 32 variables</span></eg-code-comment>
        
        end Pin;      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Inheritance
      p • The resistor, capacitor, and voltage source share most of their equations. <br>• We can share this common part by declaring an abstract base model.
      eg-code-block(lang='python' style="margin-top: -25px;").
        partial model OnePort                           model Capacitor
                                                          extends OnePort;
          SI.Voltage u;                                   parameter
          SI.Current i;                                     SI.Capacitance C=1;
                                                          equation
          Pin p;                                            der(u)*C = i;
          Pin n;                                          end Capacitor;
        
        equation                                          model Resistor
          u = p.v - n.v;                                    extends OnePort;
          0 = p.i + n.i;                                  parameter
          i = p.i;                                          SI.Resistance R=1;
                                                          equation
        end OnePort;                                        u = R*i;
                                                          end Resistor;

      p(v-if="step >= 1") • The base model can serve as template for many concrete models. <br> • It is denoted as partial, since there are equations missing and the abstract base model should not be instantiated.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : Equation based modeling</sup>
      h4(style="margin-top: -30px;").center  Inheritance
      p • New models can be generated out of the partial base model by the keyword extends.
      eg-code-block(lang='python' style="margin-top: -15px;").
        model Capacitor                               model Resistor
          extends OnePort;                              extends OnePort;
          parameter                                     parameter
            SI.Capacitance C=1;                           SI.Resistance R=1;
        equation                                      equation
          der(u)*C = i;                                 u = R*i;
        end Capacitor;                                end Resistor;
                                                          
      p(v-if="step >= 1") • Then the missing parameters and equations are added.  <br>•The keyword extends can be applied in a very generic way. <br> • Multiple inheritance is possible as well.

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: {{ slides.length }}</sup>
        h3 References
        p.center
          Material based on <a href="https://rmc.dlr.de/sr/de/staff/dirk.zimmer/VirtualPhysics">Virtualphysics</a>
        p.center other references
        .center
          img(src='./assets/omwebbook/om_ref1.png' height="200px" style="margin: 10px;")
          img(src='./assets/omwebbook/om_ref2.png' height="200px" style="margin: 10px;")
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book
        

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Equation-based Modeling',
    description: 'Electric circuits',
    path: 'om-intro-circuits',
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
