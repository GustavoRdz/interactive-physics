<template lang="pug">
#TemperatureHeat.eg-theme-gourmet
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Corner detection
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=1, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(style="margin-top: -20px;")
        | Topics on Corner detection
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b>Points of interest</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 1")
            <b>Harris corner detector</b><br><span style="font-size: 0.7em;">Local Structure Matrix, CornerResponseFunction(CRF), Determining Corner Points.</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 1")
            <b> Implementation</b><br><span style="font-size: 0.7em;">. Step 1: Calculating the Corner Response Function, Step 2: Selecting “Good” Corner Points, Step 3: Cleaning up</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h2(style="margin: -20px 0 0 0; ").center Corner Detection
      p Corners are prominent structural elements in an image and are therefore useful in a wide variety of applications, including following objects across related images (tracking), determining the correspon- dence between stereo images, serving as reference points for precise geometrical measurements, and calibrating camera systems for machine vision applications.
      p Thus corner points are not only important in human vision but they are also “robust” in the sense that they do not arise accidentally in 3D scenes and, furthermore, can be lo- cated quite reliably under a wide range of viewing angles and lighting conditions.
      

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4(style="margin: -0px 0 0 0").center Points of interest
      p Despite being easily recognized by our visual system, accurately and precisely detecting corners automatically is not a trivial task. 
      p A good corner detector must satisfy a number of criteria, including distinguishing between true and accidental corners, reliably detecting corners in the presence of realistic image noise, and precisely and accurately determining the locations of corners.
      p Finally, it should also be possible to implement the detector efficiently enough so that it can be utilized in real-time applications such as video tracking.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4(style="margin: -0px 0 0 0").center Points of interest
      p Numerous methods for finding corners or similar interest points have been proposed and most of them take advantage of the following basic principle. While an edge is usually defined as a location in the image at which the gradient is especially high in one direction and low in the direction normal to it, a corner point is defined as a location that exhibits a strong gradient value in multiple directions at the same time.
      p Most methods take advantage of this observation by examining the first or second derivative of the image in the x and y directions to find corners.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4(style="margin-top: -30px;").center Harris Corner Detector
      p This operator, developed by Harris and Stephens, is one of a group of related methods based on the same premise: a corner point exists where the gradient of the image is especially strong in more than one direction at the same time.
      p In addition, locations along edges, where the gradient is strong in only one direction, should not be considered as corners, and the detector should be isotropic, that is, independent of the orientation of the local gradients.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center Local structure matrix
      p(style="margin-top: -30px;") The Harris corner detector is based on the first partial derivatives (gradient) of the image function I(u,v), that is, 
      .center
        img(src='./assets/chap08/p140-eqn8-1.png' height="100px" style="margin-top: -20px;") 
      p For each image position (u, v), we first calculate the three quantities
      .center
        img(src='./assets/chap08/p140-eqn8-2.png' height="50px" style="margin-top: -20px;") 
      .center
        img(src='./assets/chap08/p140-eqn8-3.png' height="50px" style="margin-top: -20px;") 
      .center
        img(src='./assets/chap08/p140-eqn8-4.png' height="50px" style="margin-top: -20px;") 

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center Local structure matrix
      p that constitute the elements of the local structure matrix M(u, v):
      .center
        img(src='./assets/chap08/p140-eqn8-5.png' height="100px" style="margin-top: -20px;") 
      p Next, each of the three scalar fields A(u, v), B(u, v), C(u, v) is individually smoothed by convolution with a linear Gaussian filter H<sup>G,σ</sup>,
      .center
        img(src='./assets/chap08/p141-eqn8-6.png' height="100px" style="margin-top: -20px;")     

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center(style="margin-top: -50px;") Local structure matrix
      p The eigenvalues of the matrix M, defined as
      .center
        img(src='./assets/chap08/p141-eqn8-8.png' height="150px" style="margin-top: -20px;") 
      p are (because the matrix is symmetric) positive and real.
      p They contain essential information about the local image structure.
      p Within an image region that is uniform (that is, appears flat), M = 0 and therefore λ1 = λ2 = 0.
      p On an ideal ramp, however, the eigenvalues are λ1 > 0 and λ2 = 0, independent of the orientation of the edge.

    //- slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
    //-   .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
    //-   h4.center(style="margin-top: -10px;") Harris Corner Detector
    //-   h5.center(style="margin-top: -50px;") Local structure matrix
    //-   p The eigenvalues thus encode an edge’s strength, and their associated eigenvectors correspond to the local edge orientation.
    //-   p A corner should have a strong edge in the main direction (corresponding to the larger of the two eigenvalues), another edge normal to the first (corresponding to the smaller eigenvalues), and both eigenvalues must be significant. Since 
    //-     |
    //-     img(src='./assets/chap08/p141-math-a.png' height="40px" style="margin: -30px 0 -15px 0;")

    //-   p the two eigenvalues, λ2 = trace(M)/2 − . . . , is relevant when  determining a corner we can assume that trace(M) > 0 and thus |λ1| ≥ |λ2|. Therefore only the smalle

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center(style="margin-top: -50px;") Corner Response Function (CRF)
      p The difference between the two eigenvalues of the local structure matrix is
      .center
        img(src='./assets/chap08/p141-math-e.png' height="70px" style="margin: -30px 0 -15px 0;")
      p At a good corner position, the difference between the two eigenvalues λ1, λ2 should be as small as possible and thus the expression under the root should be a minimum.
      p To avoid the explicit calculation of the eigenvalues (and the square root) the Harris detector defines the function
      .center
        img(src='./assets/chap08/p141-eqn8-9.png' height="90px" style="margin: -30px 0 -15px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center(style="margin-top: -50px;") Corner Response Function (CRF)
      .center
        img(src='./assets/chap08/p141-eqn8-9.png' height="90px" style="margin: -30px 0 -15px 0;")
      p The Harris detector defines the function as a measure of “corner strength”, where the parameter &alpha; determines the sensitivity of the detector. 
      p <b>Q(u, v)</b> is called the “<b>corner response function</b>” and returns maximum values at isolated corners.
      p In practice, <b>&alpha;</b> is assigned a fixed value in the range of 0.04 to 0.06 (max. 0.25 = 1/4 ).
      p The larger the value of α, the less sensitive the detector is and the fewer corners detected.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      h5.center(style="margin-top: -60px;") Determining Corner Points
      p(style="margin: -30px 0 10px 0; line-height: 1.4em;") An image location (u, v) is selected as a potential candidate for a corner point if
      .center
        img(src='./assets/chap08/p142-math-a.png' height="50px" style="margin: -100px 0 0px 0;")
      p(style="margin: 0px 0 10px 0; line-height: 1.4em;") where the threshold t<sub>H</sub> is selected based on image content and typically lies within the range of 10,000 to 1,000,000. Once selected, the corners c  <sub>i</sub> = &#x27E8;ui, vi, qi&#x27E9; are inserted into the sequence
      .center
        img(src='./assets/chap08/p142-math-b.png' height="50px" style="margin: -50px 0 0px 0;")
      p(style="margin: 0px 0 -10px 0; line-height: 1.4em;") which is then sorted in descending order (i.e., q<sub>i</sub> ≥ q<sub>i+1</sub>) according to corner strength q<sub>i</sub> = Q(u<sub>i</sub>, v<sub>i</sub>). To suppress the false corners that tend to arise in densely packed groups around true corners, all except the strongest corner in a specified vicinity are eliminated.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      .center
        img(src='./assets/chap08/p145-fig8-2.png' height="700px" style="margin: -50px 0 0px 0;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Corner detection</sup>
      h4.center(style="margin-top: -10px;") Harris Corner Detector
      .center
        img(src='./assets/chap08/p146-fig8-3.png' height="700px" style="margin: -50px 0 0px 0;")

    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: References: {{ slides.length }}</sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small Slides created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com with use of images from the above referenced book

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: '6.- Corner detection',
    path: 'vision-systems-corner-detection'
  },
  components: {
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
</style>
