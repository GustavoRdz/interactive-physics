<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false' style="overflow: scroll;")
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Feature detectors
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>
      //- .prev(@click.stop='previousSlide' style="float: left;")
      //-   span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    //- slide(:steps=1, enter='bounceInRight' leave='bounceOutDown')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
    //-   h6(style="margin-top: -20px;")
    //-     | Topics on Hough Transform
    //-   .center
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b>Points of interest</b>
    //-     eg-transition(enter='bounceInRight' leave='bounceOutRight')
    //-       p(v-if="step >= 1")
    //-         <b>Harris corner detector</b><br><span style="font-size: 0.7em;">Local Structure Matrix, CornerResponseFunction(CRF), Determining Corner Points.</span>
    //-     eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
    //-       p(v-if="step >= 1")
    //-         <b> Implementation</b><br><span style="font-size: 0.7em;">. Step 1: Calculating the Corner Response Function, Step 2: Selecting “Good” Corner Points, Step 3: Cleaning up</span>
    

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h3(style="margin: -20px 0 0 0; ").center Características
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") La mayoría de ustedes habrán jugado a los juegos de rompecabezas. Obtiene muchas piezas pequeñas de una imagen, donde necesita ensamblarlas correctamente para formar una gran imagen real. La pregunta es, ¿cómo lo haces? ¿Qué pasa con la proyección de la misma teoría a un programa de computadora para que la computadora pueda jugar rompecabezas? Si la computadora puede jugar rompecabezas, ¿por qué no podemos darle muchas imágenes de la vida real de un buen paisaje natural a la computadora y decirle que una todas esas imágenes en una sola imagen grande? Si la computadora puede unir varias imágenes naturales a una, ¿qué hay de dar muchas imágenes de un edificio o cualquier estructura y decirle a la computadora que cree un modelo 3D a partir de eso?
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Bueno, las preguntas y las imaginaciones continúan. Pero todo depende de la pregunta más básica: ¿Cómo se juega a los rompecabezas? ¿Cómo se organizan muchas piezas de imágenes revueltas en una sola imagen grande? ¿Cómo se pueden unir muchas imágenes naturales a una sola imagen?
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") La respuesta es que estamos buscando patrones específicos o características específicas que sean únicas, que se puedan rastrear y comparar fácilmente. Si buscamos una definición de tal característica, puede que nos resulte difícil expresarla con palabras, pero sabemos cuáles son. Si alguien le pide que señale una buena característica que se pueda comparar en varias imágenes, puede señalar una. Es por eso que incluso los niños pequeños pueden simplemente jugar estos juegos. Buscamos estas características en una imagen, las encontramos, buscamos las mismas características en otras imágenes y las alineamos. Eso es todo. (En rompecabezas, nos fijamos más en la continuidad de diferentes imágenes). Todas estas habilidades están presentes en nosotros inherentemente.
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Entonces, nuestra única pregunta básica se expande a más en número, pero se vuelve más específica. ¿Cuáles son estas características?. (La respuesta debería ser comprensible también para una computadora.)  Es difícil decir cómo los humanos encuentran estas características. Esto ya está programado en nuestro cerebro. Pero si miramos profundamente en algunas imágenes y buscamos diferentes patrones, encontraremos algo interesante.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Detector de esquinas de Harris
      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Las esquinas son regiones de la imagen con una gran variación de intensidad en todas las direcciones. 
      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Uno de los primeros intentos de encontrar estas esquinas fue realizado por Chris Harris y Mike Stephens en su artículo A Combined Corner and Edge Detector en 1988, por lo que ahora se llama Harris Corner Detector. 
      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Llevó esta idea simple a una forma matemática. <br>Básicamente encuentra la diferencia de intensidad para un desplazamiento de (u,v) en todas las direcciones. Esto se expresa como sigue:
      .center
        img(src='./assets/eq1-1.png' width="600px" style="margin-top: 20px;")

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") La función de ventana es una ventana rectangular o una ventana gaussiana que otorga pesos a los píxeles que se encuentran debajo.

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Tenemos que maximizar esta función <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">E(u,v)</span> para la detección de esquinas. Eso significa que tenemos que maximizar el segundo término. Aplicando la Expansión de Taylor a la ecuación anterior y usando algunos pasos matemáticos, obtenemos la ecuación final como:
      .center
        img(src='./assets/eq1-2.png' width="300px" style="margin-top: 20px;")

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") donde 
      .center
        img(src='./assets/eq1-3.png' width="300px" style="margin-top: 20px;")

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Aquí, <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">I<sub>x</sub></span> e <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">I<sub>y</sub></span> son derivadas en las direcciones <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">x</span> e <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">y</span> respectivamente.

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") La ecuación que determina si una ventana puede contener una esquina o no.
      .center
        img(src='./assets/eq1-4.png' width="300px" style="margin-top: 20px;")

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") donde
      .center
        img(src='./assets/eq1-5.png' width="300px" style="margin-top: 20px;")

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Entonces, las magnitudes de estos valores propios deciden si una región es una esquina, un borde o plana.

      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") - Cuando <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">|R|</span> es pequeño, <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>1</sub></span> y <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>2</sub></span> son pequeños, la región es plana.<br>- Cuando <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">R&lt;0</span>, <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>1</sub>&gt;&gt;λ<sub>2</sub></span> o viceversa, la región es borde. <br> - Cuando <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">R</span> es grande, <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>1</sub></span> y <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>2</sub></span> son grandes y <span style="font-family: Times New Roman; font-style: italic; font-weight: bold;">λ<sub>1</sub>~λ<sub>2</sub></span>, la región es una esquina.
      p(style="margin: 10px 0 10px 0; line-height: 1.4em;") Se puede representar de la siguiente manera:
      .center
        img(src='./assets/fig1-1.png' width="500px" style="margin-top: 20px;")

      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Detector de esquinas de Shi-Tomasi
      p(style="margin: -0px 0 10px 0; line-height: 1.4em;") En 1994, J. Shi y C. Tomasi le hicieron una pequeña modificación en su artículo Good Features to Track, que muestra mejores resultados en comparación con Harris Corner Detector.
      p(style="margin: -0px 0 10px 0; line-height: 1.4em;") La función de Harris Corner Detector estuvo dada por:
      .center
        img(src='./assets/eq2-1.png' width="300px" style="margin-top: 20px;") 
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;")  En lugar de esto, Shi-Tomasi proponen:
      .center
        img(src='./assets/eq2-2.png' width="250px" style="margin-top: 20px;") 
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;")  Si es mayor que un valor de umbral, se considera como una esquina. Si lo trazamos en el espacio λ1−λ2 como lo hicimos en Harris Corner Detector, obtenemos una imagen como la siguiente:
      .center
        img(src='./assets/fig2-1.png' width="500px" style="margin-top: 20px;") 

      p(style="margin: -0px 0 10px 0; line-height: 1.4em;")  En la figura, puede ver que solo cuando λ1 y λ2 están por encima de un valor mínimo, λmin, se considera una esquina (región verde).
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Transformación de características de escala invariable
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Algunos detectores de esquinas como Harris, etc. Son invariantes a la rotación, lo que significa que, incluso si se gira la imagen, podemos encontrar las mismas esquinas.
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Pero, ¿qué pasa con la escala? Una esquina puede no ser una esquina si la imagen está escalada. Por ejemplo,
      .center
        img(src='./assets/fig3-1.png' width="500px" style="margin-top: 20px;") 
   
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") En 2004, D. Lowe ideó un nuevo algoritmo, Scale Invariant Feature Transform (SIFT), que extrae puntos clave y calcula sus descriptores.

      p(style="margin: 40px 0 10px 0; line-height: 1.4em;") Hay principalmente cuatro pasos involucrados en el algoritmo SIFT. Los veremos uno por uno.

      p(style="margin: 20px 0 10px 0; line-height: 1.4em;")  1. Detección de extremos de espacio de escala
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Para esquinas grandes, se utiliza el filtrado de espacio de escala. En él se encuentra el Laplaciano de Gauss para la imagen con varios valores de &sigma;. LoG actúa como un detector de manchas que detecta manchas de varios tamaños debido al cambio en &sigma;. En resumen, &sigma; actúa como un parámetro de escala.
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Podemos encontrar los máximos locales a lo largo de la escala y el espacio, lo que nos da una lista de valores (x,y,σ), lo que significa que hay un punto clave potencial en (x,y) en la escala σ.

      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Pero este LoG es un poco costoso, por lo que se usan diferencia de gaussianas, que es una aproximación de LoG. La diferencia de Gauss se obtiene como la diferencia de desenfoque gaussiano de una imagen con dos &sigma; diferentes, sean &sigma; y k&sigma;. Este proceso se realiza para diferentes octavas de la imagen en la Pirámide Gaussiana. Se representa en la siguiente imagen:
      .center
        img(src='./assets/fig3-2.png' width="500px" style="margin-top: 20px;") 

      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Una vez que se encuentran estos DoG, se buscan extremos locales sobre escala y espacio. Por ejemplo, un píxel en una imagen se compara con sus 8 vecinos así como con 9 píxeles en la escala siguiente y 9 píxeles en escalas anteriores. Si es un extremo local, es un punto clave potencial. Básicamente significa que el punto clave se representa mejor en esa escala. Se muestra en la siguiente imagen:
      .center
        img(src='./assets/fig3-3.png' width="500px" style="margin-top: 20px;") 

      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Con respecto a los diferentes parámetros, el documento brinda algunos datos empíricos que se pueden resumir como, número de octavas = 4, número de niveles de escala = 5, σ inicial = 1.6, k = 2‾√, etc. como valores óptimos.

      p(style="margin: 40px 0 10px 0; line-height: 1.4em;") 2. Localización de puntos clave
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Una vez que se encuentran las ubicaciones de puntos clave potenciales, deben refinarse para obtener resultados más precisos. Se hace expansión de la serie de Taylor del espacio de escala para obtener una ubicación más precisa de los extremos, y si la intensidad en este extremo es menor que un valor de umbral (0.03 tipicamente), se rechaza.

      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") DoG tiene una mayor respuesta para los bordes, por lo que también es necesario eliminar los bordes. Para ello se utiliza un concepto similar al detector de esquina Harris.

      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Si la razon del mayor eigenvalor con respecto al menor es mayor que un umbral (10 tipico), ese punto clave se descarta.

      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Por lo tanto, elimina los puntos clave de bajo contraste y los puntos clave de borde y lo que queda son puntos de gran interés.

      p(style="margin: 40px 0 10px 0; line-height: 1.4em;") 3. Asignación de orientación
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Ahora se asigna una orientación a cada punto clave para lograr la invariancia a la rotación de la imagen. Se toma una vecindad alrededor de la ubicación del punto clave según la escala, y se calcula la magnitud y la dirección del gradiente en esa región. 
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Se crea un histograma de orientación con 36 contenedores que cubren 360 grados (se pondera por la magnitud del gradiente y la ventana circular con ponderación gaussiana con &sigma; igual a 1,5 veces la escala del punto clave). 
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Se toma el pico más alto del histograma y cualquier pico por encima del 80% también se considera para calcular la orientación. Crea puntos clave con la misma ubicación y escala, pero en diferentes direcciones. Contribuye a la estabilidad del detector.

      p(style="margin: 40px 0 10px 0; line-height: 1.4em;") 4. Descriptor de punto clave
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Ahora se crea el descriptor de punto clave. Se toma una vecindad de 16x16 alrededor del punto clave. Se divide en 16 subbloques de tamaño 4x4. 
      p(style="margin: 20px 0 10px 0; line-height: 1.4em;") Para cada subbloque, se crea un histograma de orientación de 8 frecuencias. Por lo tanto, hay un total de 128 valores de frecuencias disponibles. Se representa como un vector para formar un descriptor de punto clave. Además de esto, se toman varias medidas para lograr robustez frente a cambios de iluminación, rotación, etc.

      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") 5. Coincidencia de puntos clave
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") Los puntos clave entre dos imágenes se emparejan mediante la identificación de sus vecinos más cercanos. Pero en algunos casos, la segunda coincidencia más cercana puede estar muy cerca de la primera. Puede ocurrir debido al ruido u otras razones. 
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") En ese caso, se toma la relación entre la distancia más cercana y la segunda distancia más cercana. Si es superior a 0,8, se rechazan. Elimina alrededor del 90 % de las coincidencias falsas y descarta solo el 5 % de las coincidencias correctas.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Funciones robustas aceleradas
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") En 2006, tres personas, Bay, H., Tuytelaars, T. y Van Gool, L, publicaron otro artículo, "SURF: Speeded Up Robust Features", que introdujo un nuevo algoritmo llamado SURF. Como sugiere su nombre, es una versión acelerada de SIFT.

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") En SIFT, Lowe aproximó Laplacian of Gaussian con Difference of Gaussian para encontrar el espacio de escala. 
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") SURF va un poco más allá y se aproxima a LoG con Box Filter. La imagen de abajo muestra una demostración de tal aproximación. Una gran ventaja de esta aproximación es que la convolución con filtro de caja se puede calcular fácilmente con la ayuda de imágenes integrales. Y se puede hacer en paralelo para diferentes escalas. Además, SURF se basa en el determinante de la matriz hessiana tanto para la escala como para la ubicación.
      .center
        img(src='./assets/fig4-1.png' width="300px" style="margin-top: 20px;") 

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Para la asignación de orientación, SURF utiliza respuestas de wavelet en dirección horizontal y vertical para una vecindad de tamaño 6s. También se le aplican pesos gaussianos adecuados. Luego se trazan en un espacio como se muestra en la imagen a continuación. 
      .center
        img(src='./assets/fig4-2.png' width="300px" style="margin-top: 20px;") 
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") La orientación dominante se estima calculando la suma de todas las respuestas dentro de una ventana de orientación deslizante de un ángulo de 60 grados. 
      //- p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Lo interesante es que la respuesta wavelet se puede encontrar usando imágenes integrales muy fácilmente a cualquier escala. Para muchas aplicaciones, no se requiere invariancia de rotación, por lo que no es necesario encontrar esta orientación, lo que acelera el proceso. SURF proporciona una funcionalidad llamada Upright-SURF o U-SURF. Mejora la velocidad y es robusto hasta ±15∘. OpenCV admite ambos, dependiendo de la bandera, en posición vertical. Si es 0, se calcula la orientación. Si es 1, no se calcula la orientación y es más rápido.

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Para la descripción de características, SURF usa respuestas Wavelet en dirección horizontal y vertical. Se toma una vecindad de tamaño 20sX20s alrededor del punto clave donde s es el tamaño. Se divide en subregiones 4x4. Para cada subregión, se toman las respuestas de wavelet horizontal y vertical y se forma un vector como este, <span style="font-family: Times New Roman; font-weight: bold;">v=(∑dx,∑dy,∑|dx|,∑|dy|)</span>. Esto, cuando se representa como un vector, da un descriptor de características SURF con un total de 64 dimensiones. Reduzca la dimensión, aumente la velocidad de cálculo y coincidencia, pero proporcione una mejor distinción de las características.

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Para mayor distinción, el descriptor de características SURF tiene una versión extendida de 128 dimensiones. Las sumas de dx y |dx| se calculan por separado para dy<0 y dy≥0. De manera similar, las sumas de dy y |dy| se dividen de acuerdo con el signo de dx, duplicando así el número de características. No agrega mucha complejidad de cálculo. OpenCV admite ambos estableciendo el valor de la bandera extendida con 0 y 1 para 64-dim y 128-dim respectivamente (el valor predeterminado es 128-dim)

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Otra mejora importante es el uso del signo de Laplacian (traza de Hessian Matrix) para el punto de interés subyacente. No agrega ningún costo de cálculo ya que ya se calcula durante la detección. El signo del Laplaciano distingue las manchas brillantes sobre fondos oscuros de la situación inversa. En la etapa de comparación, solo comparamos características si tienen el mismo tipo de contraste (como se muestra en la imagen a continuación). Esta información mínima permite una coincidencia más rápida, sin reducir el rendimiento del descriptor.
      .center
        img(src='./assets/fig4-3.png' width="300px" style="margin-top: 20px;") 

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") En definitiva, SURF añade un montón de funciones para mejorar la velocidad en cada paso. El análisis muestra que es 3 veces más rápido que SIFT, mientras que el rendimiento es comparable al de SIFT. SURF es bueno para manejar imágenes con desenfoque y rotación, pero no es bueno para manejar el cambio de punto de vista y el cambio de iluminación.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -30px 0 0 0;").center Algoritmo FAST para detección de esquinas

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Cuando se mira desde el punto de vista de una aplicación en tiempo real, se requeiren detectores rapidos.

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Como solución a esto, Edward Rosten y Tom Drummond propusieron el algoritmo FAST (características de la prueba de segmento acelerado) en su artículo "Aprendizaje automático para la detección de esquinas a alta velocidad" en 2006 (luego revisado en 2010).

      p(style="margin: 40px 0 0 0px; line-height: 1.4em;") <b>Detección de características usando FAST</b>
        ol 
          li Seleccione un píxel p en la imagen que se va a identificar como un punto de interés o no. Sea su intensidad Ip.
          li Seleccione el valor de umbral adecuado t.
          li Considere un círculo de 16 píxeles alrededor del píxel bajo prueba.
            .center
              img(src='./assets/fig5-1.png' width="500px" style="margin: 20px;")
          li Ahora el píxel p es una esquina si existe un conjunto de n píxeles contiguos en el círculo (de 16 píxeles) que son todos más brillantes que Ip+t, o todos más oscuros que Ip-t. (Se muestra como líneas discontinuas blancas en la imagen de arriba). n fue elegido para ser 12.
          li Se propuso una prueba de alta velocidad para excluir una gran cantidad de no esquinas. Esta prueba examina solo los cuatro píxeles en 1, 9, 5 y 13 (los primeros 1 y 9 se prueban si son demasiado brillantes o demasiado oscuros. Si es así, luego verifique 5 y 13). Si p es una esquina, al menos tres de ellas deben ser más brillantes que Ip+t o más oscuras que Ip-t. Si ninguno de estos es el caso, entonces p no puede ser una esquina. A continuación, se puede aplicar el criterio de prueba de segmento completo a los candidatos aprobados examinando todos los píxeles del círculo. Este detector en sí mismo exhibe un alto rendimiento, pero tiene varias debilidades:
          ul
            li No rechaza tantos candidatos para n < 12.
            li La elección de píxeles no es óptima porque su eficiencia depende del orden de las preguntas y la distribución de las esquinas.
            li Los resultados de las pruebas de alta velocidad se desechan.
            li Se detectan múltiples características adyacentes entre sí. 
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Los primeros 3 puntos se abordan con un enfoque de aprendizaje automático. El último se aborda mediante supresión no máxima.

      p(style="margin: 40px 0 0 0px; line-height: 1.4em;") <b>Aprendizaje automático de un detector de esquinas</b>
        ol
          li Seleccione un conjunto de imágenes para el entrenamiento (preferiblemente del dominio de la aplicación de destino)
          li Ejecute el algoritmo FAST en cada imagen para encontrar puntos característicos.
          li Para cada punto característico, almacene los 16 píxeles a su alrededor como un vector. Hazlo para todas las imágenes para obtener el vector de características P.
          li Cada píxel (digamos x) en estos 16 píxeles puede tener uno de los siguientes tres estados:
            .center
              img(src='./assets/eq5-1.png' width="500px" style="margin: 20px;")
          li Dependiendo de estos estados, el vector de características P se subdivide en 3 subconjuntos, Pd, Ps, Pb.
          li Defina una nueva variable booleana, Kp, que es verdadera si p es una esquina y falsa en caso contrario.
          li Utilice el algoritmo ID3 (clasificador de árboles de decisión) para consultar cada subconjunto utilizando la variable Kp para conocer la verdadera clase. Selecciona la x que arroja la mayor información sobre si el píxel candidato es una esquina, medida por la entropía de Kp.
          li Esto se aplica recursivamente a todos los subconjuntos hasta que su entropía sea cero.
          li El árbol de decisión así creado se utiliza para la detección rápida en otras imágenes.
      
      p(style="margin: 40px 0 0 0px; line-height: 1.4em;") <b>Supresión de no máximo</b>
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") La detección de múltiples puntos de interés en ubicaciones adyacentes es otro problema. Se soluciona utilizando Supresión No Máxima.
        ol
          li Calcule una función de puntuación, V para todos los puntos característicos detectados. V es la suma de la diferencia absoluta entre p y 16 valores de píxeles circundantes.
          li Considere dos puntos significativos adyacentes y calcule sus valores V.
          li Descartar el que tenga menor valor de V.
      p(style="margin: 40px 0 0 0px; line-height: 1.4em;") <b>Resumen</b>
      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Es varias veces más rápido que otros detectores de esquina existentes.

      p(style="margin: 20px 0 0 0px; line-height: 1.4em;") Pero no es resistente a altos niveles de ruido. Depende de un umbral.
      .prev(@click.stop='previousSlide' style="float: left;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) &lt; Prev. slide
      .next(@click.stop='nextSlide' style="float: right;")
        span(style="border: 1px black solid; border-radius: 10px; background: rgba(144,238,144,0.2);" ) Next slide &gt;

    slide(enter='bounceInDown' :mouseNavigation='false' style="overflow: scroll;")
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }} references </sup>
        h3 References
        ul
          li <b>openCV</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small Slides created by G. Rodríguez-Morales, gustavo.rodriguezml@gmail.com, with use of images from the above referenced book
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
    title: 'Vision Systems',
    description: '8.- Feature detectors openCV',
    path: 'vision-systems-feature-detectors'
  },
  components: {
  },
  data: function () {
    return {
      theme: 'Feature detectors with openCV'
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
</style>
