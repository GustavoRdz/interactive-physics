<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h1 Vision Systems
        img(src='./assets/U.svg')
        h4 Fourier analysis
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        p.right <sup style="font-size: 10px;"> {{ slides.length }}</sup>
    slide(:steps=4, enter='bounceInRight' leave='bounceOutDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : Topics</sup>
      h6(style="margin-top: 20px;")
        | Topics on Regions in Fourier analysis
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Introduction to Spectral</b><br><span style="font-size: 0.7em;">The Fourier Transform, Sine and Cosine Functions, Fourier Series Representation of Periodic Functions, Fourier Integral, Fourier Spectrum and Transformation, Important Properties of the Fourier Transform </span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Working with Discrete Signals</b><br><span style="font-size: 0.7em;">Sampling, Discrete and Periodic Functions, The Discrete Fourier Transform (DFT)</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>The Discrete Fourier Transform in 2D</b><br><span style="font-size: 0.7em;">Definition of the 2D DFT, 2D Basis Functions, Visualizing the 2D Fourier Transform, Range of Spectral Values, Linear Filter Operations in Frequency Space, Linear Convolution and Correlation, Inverse Filters</span>


    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h2(style="margin: -20px 0 0 0; ").center Spectral analysis
      h5.center The Fourier Transform
      p The frequency and the decomposition of waveforms into elementary “harmonic” functions.
      h6 Sine and Cosine Functions
      .center
        img(src='./assets/clips-13/p300-fig13-1.png' height="200px" style="margin-right: 50px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h4(style="margin: -0px 0 0 0").center Fourier Series Representation of Periodic Functions
      p Sinusoidal functions of arbitrary frequency, amplitude, and phase can be described as the sum of suitably weighted cosine and sine functions.
      p Nonsinusoidal functions can also be decomposed into a sum of cosine and sine functions, that is,
      .center
        img(src='./assets/chap13/p318-eqn13-15.png' height="100px")

      p This is called a Fourier series, and the constant factors <span class="it">A<sub>k</sub>, B<sub>k</sub></span> are the Fourier coefficients of the function g(x).

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin: -0px 0 0 0").center Fourier coeficients
      p Every coefficient <span class="it">A<sub>k</sub></span> and <span class="it">B<sub>k</sub></span> specifies the amplitude of the corresponding cosine or sine function, respectively.
      p The coefficients thus define “how much of each frequency” contributes to a given function or signal g(x).
      p But what are the proper values of these coefficients for a given function g(x)?
      .center
        img(src='./assets/chap13/p318-eqn13-17.png' height="70px")
      .center
        img(src='./assets/chap13/p318-eqn13-18.png' height="70px")

      p The corresponding coefficients A(ω) and B(ω) hold the continuous distribution of frequency components contained in the original signal, which is called a “spectrum”.

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Properties of the Fourier transform
      .center
        img(src='./assets/chap13/p322-fig13-3a.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-3b.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-3c.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-3d.png' height="200px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : {{ theme }}</sup>
      h5(style="margin-top: -30px;").center Properties of the Fourier transform
      .center
        img(src='./assets/chap13/p322-fig13-4a.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-4b.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-4c.png' height="200px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p322-fig13-4d.png' height="200px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Properties of the Fourier transform
      h6(style="margin-top: 30px; margin-bottom: 0;") Linearity
      .center
        img(src='./assets/chap13/p321-eqn13-23.png' height="50px" style="margin: -100px 0 0px 0;")
      .center
        img(src='./assets/chap13/p321-eqn13-24.png' height="50px" style="margin-top: -50px;")
      h6(style="margin-top: 30px; margin-bottom: 0;") Similarity
      .center
        img(src='./assets/chap13/p324-eqn13-25.png' height="50px" style="margin-top: -20px;")
      h6(style="margin-top: 30px; margin-bottom: 0;") Shift property
      .center
        img(src='./assets/chap13/p324-eqn13-26.png' height="50px" style="margin-top: -20px;")
      h6(style="margin-top: 30px; margin-bottom: 0;") Convolution property
      .center
        img(src='./assets/chap13/p324-eqn13-27.png' height="50px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p324-eqn13-28.png' height="50px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Aliasing
      .center
        img(src='./assets/chap13/p335-fig13-11.png' height="30px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p335-fig13-11a.png' height="180px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p335-fig13-11b.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p335-fig13-11c.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p335-fig13-11d.png' height="180px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Aliasing
      .center
        img(src='./assets/chap13/p336-fig13-12.png' height="30px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p336-fig13-12a.png' height="180px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p336-fig13-12b.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p336-fig13-12c.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p336-fig13-12d.png' height="180px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Aliasing
      .center
        img(src='./assets/chap13/p337-fig13-13.png' height="30px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p337-fig13-13a.png' height="180px" style="margin-top: -50px;")
      .center
        img(src='./assets/chap13/p337-fig13-13b.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap13/p337-fig13-13c.png' height="180px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Discrete Fourier transform
      p.center Transform
      .center
        img(src='./assets/chap14/p343-eqn14-1.png' height="180px" style="margin-top: -20px;")
      p.center Inverse
      .center
        img(src='./assets/chap14/p343-eqn14-2.png' height="180px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Fourier transform
      .center
        img(src='./assets/chap14/p346-fig14-1.png' height="30px" style="margin:-50px 0 30px 0;")
      .center
        img(src='./assets/chap14/p346-fig14-1a.png' height="180px" style="margin-top: -40px;")
      .center
        img(src='./assets/chap14/p346-fig14-1b.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap14/p346-fig14-1c.png' height="180px" style="margin-top: -20px;")
      .center
        img(src='./assets/chap14/p346-fig14-1d.png' height="180px" style="margin-top: -20px;")


    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;")  Visualizing the 2d Fourier Transform
      .center
        img(src='./assets/chap14/p349-fig14-3.png' height="550px" style="margin-top: -20px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Visualizing the 2d Fourier Transform
      .center
        img(src='./assets/chap14/p349-fig14-4.png' height="400px" style="margin-top: 50px;")


    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Frequencies and Orientation in 2D
      h6 Effective Frequency
      p As we could see each 2D basis function is an oriented cosine or sine function whose orientation and frequency are determined by its wave numbers m and n for the horizontal and vertical directions, respectively.
      .center
        img(src='./assets/chap14/p350-fig14-5.png' style="margin-top: -10px;")

    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Frequency Limits and Aliasing in 2D
      .center
        img(src='./assets/chap14/p351-fig14-6.png'  style="margin-top: 0px;")


    slide(:steps=1, enter='bounceInDown' )
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h3.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p360-fig14-12.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p360-fig14-13.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p361-fig14-14.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p361-fig14-15.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p362-fig14-16.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p362-fig14-17.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4.center(style="margin-top: -10px;") Examples of FFT
      .center
        img(src='./assets/chap14/p363-fig14-18.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h4(style="margin-top: 0px;").center Convolution
      p
      .center
        img(src='./assets/chap14/p363-eqn14-16.png' height="150px")

    slide(:steps=1, enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }}  : {{ theme }}</sup>
      h5.center Lineal filter operation in frequency space
      .center
        img(src='./assets/chap14/p365-fig14-19.png' height="600px" style="margin-top: 0px;")

    slide(enter='bounceInDown')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}/{{ slides.length }} : References: </sup>
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
    description: 'Frequency domain analysis',
    path: 'vision-systems-fourier'
  },
  components: {
  },
  data: function () {
    return {
      theme: 'Frequency domain analysis'
    }
  },
  methods: {
  }
}
</script>

<style lang='scss'>
@import 'node_modules/eagle.js/dist/themes/agrume/agrume';
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

.mat{
  font-family: Times New Roman;
}
.bd{
  font-family: Times New Roman;
  font-weight: bold;
}
.it{
  font-family: Times New Roman;
  font-style: italic;
}
sub {
  font-size: 0.7em;
}
</style>
