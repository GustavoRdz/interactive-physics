<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft' :mouseNavigation='false')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Point operations
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=8, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Topics</sup>
      h6(style="margin-top: -20px;")
        | Topics on Point Operations
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>Modifying Image Intensity</b><br><span style="font-size: 0.5em;">Contrast and Brightness, Limiting Values by Clamping, Inverting Images, Threshold Operation</span>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Point Operations and Histograms</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Automatic Contrast Adjustment</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 5")
            <b>Modified Auto-Contrast Operation</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Histogram Equalization</b>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
            <b>Histogram Specification</b><br><span style="font-size: 0.5em;">Frequencies and Probabilities, Principle of Histogram Specification, Adjusting to a Piecewise Linear Distribution, Adjusting to a Given Histogram</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 7")
              <b>Gamma Correction</b><br><span style="font-size: 0.5em;">Mathematical Definition, Real Gamma Values, Applications of Gamma Correction, Implementation, Modified Gamma Correction</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h5.center Point operations
      p Point operations perform a modification of the pixel values without changing the size, geometry, or local structure of the image. Each new pixel value I'(u, v) depends exclusively on the previous value I(u, v) at the same position and is thus independent from any other pixel value, The original pixel values a are mapped to the new values b by some given function f, i.e.,
      .center
        img(src='./assets/clips-05/p055-eqn5-1a.png')

      p If, as in this case, the function f() is independent of the image coordinates (i.e., the same throughout the image), the operation is called “global” or “homogeneous”.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h5.center Point operations
      p Typical examples of homogeneous point operations include, among others:
      ul
        li modifying image brightness or contrast,
        li applying arbitrary intensity transformations (“curves”),
        li inverting images,
        li quantizing (or “posterizing”) images,
        li global thresholding,
        li gamma correction,
        li color transformations
      p A typical nonhomogeneous operation is the local adjustment of contrast or brightness used, for example, to compensate for uneven lighting during image acquisition.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h5.center Modifying Image Intensity
      p <b>Contrast and Brightness</b>
      p Let us start with a simple example. Increasing the image’s contrast by 50% (i.e., by the factor 1.5) or raising the brightness by 10 units can be expressed by the mapping functions
      .center
        img(src='./assets/clips-05/p056-eqn5-3a.png' style="margin-right: 50px;")
        img(src='./assets/clips-05/p056-eqn5-3b.png')
      p respectively.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h4.center Limiting Values by Clamping
      p When implementing arithmetic operations on pixel values, we must keep in mind that the calculated results must not exceed the admissible range of pixel values for the given image type (e.g., [0, 255] in the case of 8-bit grayscale images). This is commonly called “clamping” and can be expressed in the form
      .center
        img(src='./assets/clamping.png' style="margin-right: 50px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h4.center(style="margin-top: -10px;") Inverting Images
      p Inverting an intensity image is a simple point operation that reverses the ordering of pixel values (by multiplying by −1) and adds a constant value to map the result to the admissible range again. Thus for a pixel value <b>a = I(u, v)</b> in the range <b>[0, amax]</b>, the corresponding point operation is
      .center
        img(src='./assets/clips-05/p057-eqn5-4.png')

      p Note that in this case no clamping is required at all because the function always maps to the original range of values.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations</sup>
      h3.center(style="margin-top: -10px;") Threshold Operation
      p Thresholding an image is a special type of quantization that separates the pixel values in two classes, depending upon a given threshold value q that is usually constant. The threshold operation maps all pixels to one of two fixed intensity values a0 or a1, that is,
      .center
        img(src='./assets/clips-05/p057-eqn5-5.png' style="margin-top: -30px;")
      .center
        img(src='./assets/chap05/p056-fig5-2.png' height="200px" style="margin-bottom: -30px;")
      p with <b>0 < a<sub>th</sub> ≤ a<sub>max</sub></b>. A common application is binarizing an intensity image with the values <b>a<sub>0</sub> = 0</b> and <b>a<sub>1</sub> = 1</b>. Thresholding affects the histogram by separating the distribution into two entries at positions <b>a<sub>0</sub></b> and <b>a<sub>1</sub></b>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Point Operations and Histograms
      p We have already seen that the effects of a point operation on the image’s histogram are quite easy to predict in some cases.
      p For example, increasing the brightness of an image by a constant value shifts the entire histogram to the right, raising the contrast widens it, and inverting the image flips the histogram.
      p Although this appears rather simple, it may be useful to look a bit more closely at the relationship between point operations and the resulting changes in the histogram.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Point Operations and Histograms
      .center
        img(src='./assets/chap05/p057-fig5-3.png' height="300px")
      p If a particular histogram line is shifted as a result of some point operation, then of course all pixels in the corresponding set are equally modified and vice versa. So what happens when a point operation (e.g., reducing image contrast) causes two previously separated histogram lines to fall together at the same position i? The answer is that the corresponding pixel sets are merged and the new common histogram entry is the sum of the two (or more) contributing entries.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Automatic Contrast Adjustment
      p(style="margin-top: -30px;") Automatic contrast adjustment (auto-contrast) is a point operation whose task is to modify the pixels such that the vailable range of values is fully covered. This is done by mapping the current darkest and brightest pixels to the minimum and maximum intensity values, respectively, and linearly distributing the intermediate values. Let us assume that <b>a<sub>lo</sub></b> and <b>a<sub>hi</sub></b> are the lowest and highest pixel values found in the current image, whose full intensity range is <b>[a<sub>min</sub>, a<sub>max</sub>]</b>. The mapping function for the auto-contrast operation is thus defined as
      .center
        img(src='./assets/chap05/p057-eqn5-6.png' height="100px")
      p For an 8-bit image with amin = 0 and amax = 255, the function simplifies to
      .center
        img(src='./assets/chap05/p057-eqn5-7.png' height="100px" style="margin-top: -40px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Automatic Contrast Adjustment
      p(style="margin-top: -30px;")
      .center
        img(src='./assets/chap05/p058-fig5-4.png' height="200px")
      .center
        img(src='./assets/chap05/p058-fig5-5.png' style="margin-top: -0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Histogram Equalization
      p A frequent task is to adjust two different images in such a way that their resulting intensity distributions are similar, for example, to use them in a print publication or to make them easier to compare.
      p The goal of histogram equalization is to find and apply a point operation such that the histogram of the modified image approximates a uniform distribution.
      p Since the histogram is a discrete distribution and homogeneous point operations can only shift and merge (but never split) histogram entries, we can only obtain an approximate solution in general.
      p In particular, there is no way to eliminate or decrease individual peaks in a histogram, and a truly uniform distribution is thus impossible to reach.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: -10px;") Histogram Equalization
      p Based on point operations, we can thus modify the image only to the extent that the resulting histogram is approximately uniform.
      p The question is how good this approximation can be and exactly which point operation (which clearly depends on the image content) we must apply to achieve this goal.
      .center
        img(src='./assets/chap05/p060-fig5-8.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h3.center(style="margin-top: -10px;") Histogram Equalization
      p We may get a first idea by observing that the cumulative histogram of a uniformly distributed image is a linear ramp. So we can reformulate the goal as finding a point operation that shifts the histogram lines such that the resulting cumulative histogram is approximately linear
      .center
        img(src='./assets/chap05/p061-fig5-9.png' height="200px")
      p The desired point operation feq() is simply obtained from the cumulative histogram H of the original image as
      .center
        img(src='./assets/chap05/p061-eqn5-11.png' height="100px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h3.center(style="margin-top: -10px;") Histogram Equalization
      .center
        img(src='./assets/chap05/p062-fig5-10.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h4.center(style="margin-top: -10px;") Histogram Specification
      p In most real images, the distribution of the pixel values is not even remotely uniform but is usually more similar, if at all, to perhaps a Gaussian distribution.
      p The images produced by linear equalization thus usually appear quite unnatural, which renders the technique practically useless.
      p Histogram specification is a more general technique that modifies the image to match an arbitrary intensity distribution, including the histogram of a given image.
      p This is particularly useful, for example, for adjusting a set of images taken by different cameras or under varying exposure or lighting conditions to give a similar impression in print production or when displayed.
      p Similar to histogram equalization, this process relies on the alignment of the cumulative histograms by applying a homogeneous point operation.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center Frequencies and Probabilities
      p The value in each histogram cell describes the observed frequency of the corresponding intensity value, i.e., the histogram is a discrete <em>frequency distribution</em>. For a given image <b>I</b> of size <b>M × N</b>, the sum of all histogram entries <b>h(i)</b> equals the number of image pixels,
      .center
        img(src='./assets/chap05/p063-eqn5-13.png' height="70px" style="margin-top: -20px;")
      p(style="margin-top: -20px;") The associated normalized histogram,
      .center
        img(src='./assets/chap05/p063-eqn5-14.png' height="70px" style="margin-top: -20px;")
      p(style="margin-top: -0px;") is usually interpreted as the probability distribution or probability density function (pdf) of a random process, where <b>p(i)</b> is the probability for the occurrence of the pixel value <b>i</b>.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center Frequencies and Probabilities
      p The cumulative probability of <b>i</b> being any possible value is <b>1</b>, and the distribution <b>p</b> must thus satisfy
      .center
        img(src='./assets/chap05/p064-eqn5-15.png' height="70px")
      p The statistical counterpart to the cumulative histogram <b>H</b> is the discrete distribution function <b>P()</b> (also called the cumulative distribution function or cdf),
      .center
        img(src='./assets/chap05/p064-eqn5-16.png' height="140px")
      p The resulting function <b>P(i)</b> is (as the cumulative histogram) monotonically increasing and

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: 0px;") Frequencies and Probabilities
      p in particular,
      .center
          img(src='./assets/chap05/p064-eqn5-17.png' height="100px")
      p This statistical formulation implicitly treats the generation of images as a random process whose exact properties are mostly unknown.
      p However, the process is usually assumed to be homogeneous (independent of the image position); that is, each pixel value is the result of a “random experiment” on a single random variable <b>i</b>.
      p The observed frequency distribution given by the histogram <b>h(i)</b> serves as a (coarse) estimate of the probability distribution <b>p(i)</b> of this random variable.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: 0px;") Principle of Histogram Specification
      p The goal of histogram specification is to modify a given image <b>I<sub>A</sub></b> by some point operation such that its distribution function <b>P<sub>A</sub></b> matches a reference distribution <b>P<sub>R</sub></b> as closely as possible. We thus look for a mapping function
      .center
          img(src='./assets/chap05/p065-eqn5-18.png' height="70px" style="margin-top:-10px;")
      p(style="margin-top:-0px;") to convert the original image <b>I<sub>A</sub></b> by a point operation to a new image <b>I<sub>A'</sub></b> with pixel values <b>a'</b>, such that its distribution function <b>P'<sub>A</sub></b> matches <b>P<sub>R</sub></b>, that is,
      .center
          img(src='./assets/chap05/p065-eqn5-19.png' height="70px" style="margin-top:-10px;")
      p(style="margin-top:-0px;") The desired mapping <b>f<sub>hs</sub></b> is found by combining the two distribution functions <b>P<sub>R</sub></b> and <b>P<sub>A</sub></b>.
      .center
          img(src='./assets/chap05/p065-fig5-11.png' height="200px" style="margin-top:-50px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: 0px;") Principle of Histogram Specification
      p For a given pixel value a in the original image, we obtain the new pixel value <b>a'</b> as
      .center
          img(src='./assets/chap05/p065-eqn5-20.png' height="70px")
      p and thus the mapping <b>f<sub>hs</sub></b> is defined as
      .center
          img(src='./assets/chap05/p065-eqn5-21.png' height="70px")
      p This of course assumes that <b>P<sub>R</sub>(i)</b> is invertible, that is, that the function <b>P<sub>R</sub><sup>−1</sup>(b)</b> exists for <b>b ∈ [0, 1]</b>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: 0px;") Adjusting to a Piecewise Linear Distribution
      p If the reference distribution <b>P<sub>R</sub></b> is given as a continuous, invertible function, then the mapping function <b>f<sub>hs</sub></b> can be obtained from
        img(src='./assets/chap05/p065-eqn5-21.png' height="60px" style="margin-bottom: -20px;")
      p(style="margin-top: -30px;") without any difficulty. In practice, it is convenient to specify the (synthetic) reference distribution as a piecewise linear function <b>P<sub>L</sub>(i)</b>; that is, as a sequence of <b>N+1</b> coordinate pairs
      .center
          img(src='./assets/chap05/p065-math-a.png' height="70px")
      .center
          img(src='./assets/chap05/p066-fig5-12.png' height="250px")
      p(style="margin-top:-10px;") each consisting of an intensity value <b>a<sub>k</sub></b> and the corresponding cumulative probability <b>P<sub>k</sub></b>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: 0px;") Adjusting to a Piecewise Linear Distribution
      p We assert that <b>0 ≤ a<sub>k</sub> < K, a<sub>k</sub> < a<sub>k+1</sub></b>, and <b>0 ≤ P<sub>k</sub> < 1</b>. Also, the two endpoints <b>(a<sub>0</sub>, P<sub>0</sub>)</b> and <b>(a<sub>N</sub>, P<sub>N</sub>)</b> are fixed at
      .center
          img(src='./assets/chap05/p065-math-b.png' height="70px" style="margin-top: -30px")
      p(style="margin-top: -30px") respectively.
      p To be invertible, the function must also be strictly monotonic, that is, <b>P<sub>k</sub> < P<sub>k+1</sub></b> for <b>0 ≤ k < N</b>. Figure shows an example of such a function, which is specified by <b>N = 5</b> variable points <b>(P<sub>0</sub>, . . ., P<sub>4</sub>)</b> and a fixed end point <b>P<sub>5</sub></b> and thus consists of <b>N = 5</b> linear segments. The reference distribution can of course be specified at an arbitrary accuracy by inserting additional control points.
      .center
          img(src='./assets/chap05/p066-fig5-12.png' height="200px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: -10px;") Adjusting to a Piecewise Linear Distribution
      p The intermediate values of <b>P<sub>L</sub>(i)</b> are obtained by linear interpolation between the control points as
      .center
          img(src='./assets/chap05/p066-eqn5-22.png' height="100px" style="margin-top: -30px")
      p where <b>m = max {j ∈ [0,N −1] | aj ≤ i}</b> is the index of the line segment <b>(a<sub>m</sub>, P<sub>m</sub>) → (a<sub>m+1</sub>, P<sub>m+1</sub>)</b>, which overlaps the position i.
      p For the histogram specification, we also need the inverse distribution function <b>P<sub>L</sub><sup>−1</sup> (b)</b> for <b>b ∈ [0, 1]</b>. The function <b>P<sub>L</sub>(i)</b> is in general not invertible for values <b>b < P<sub>L</sub>(0)</b>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center(style="margin-top: -10px;") Adjusting to a Piecewise Linear Distribution
      p We can fix this problem by mapping all values <b>b < P<sub>L</sub>(0)</b> to zero and thus obtain a “semi-inverse” of the reference distribution as
      .center
          img(src='./assets/chap05/p066-eqn5-23.png' height="120px" style="margin-top: -30px")
      p Here <b>n = max{ j ∈ {0, . . .N−1} | P<sub>j</sub> ≤ b}</b> is the index of the line segment <b>(a<sub>n</sub>, P<sub>n</sub>) → (a<sub>n+1</sub>, P<sub>n+1</sub>)</b>, which overlaps the argument value b. The required mapping function <b>f<sub>hs</sub></b> for adapting a given image with intensity distribution <b>P<sub>A</sub></b> is finally specified as
      .center
          img(src='./assets/chap05/p066-eqn5-24.png' height="60px" style="margin-top: -50px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center Algorithm
      p
      .center
          img(src='./assets/chap05/p067-alg5-2.png' height="600px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Adjusting to a Given Histogram (Histogram Matching)
      p If we want to adjust one image to the histogram of another image, the reference distribution function <b>P<sub>R</sub>(i)</b> is not continuous and thus, in general, cannot be inverted.
      p  For example, if the reference distribution contains zero entries (i.e., pixel values <b>k</b> with probability <b>p(k) = 0</b>), the corresponding cumulative distribution function P (just like the cumulative histogram) has intervals of constant value on which no inverse function value can be determined.
      p In the following, we describe a simple method for histogram matching that works with discrete reference distributions.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px;").center Adjusting to a Given Histogram (Histogram Matching)
      .center
          img(src='./assets/chap05/p068-fig5-13.png' height="250px")
      p The mapping function <b>f<sub>hs</sub></b> is not obtained by inverting but by “<b>filling in</b>” the reference distribution function <b>P<sub>R</sub>(i)</b>.
      p For each possible pixel value <b>a</b>, starting with <b>a = 0</b>, the corresponding probability <b>p<sub>A</sub>(a)</b> is stacked layer by layer “under” the reference distribution <b>P<sub>R</sub></b>.
      p The thickness of each horizontal bar for <b>a</b> equals the corresponding probability <b>p<sub>A</sub>(a)</b>. The bar for a particular intensity value a with thickness <b>p<sub>A</sub>(a)</b> runs from right to left, down to position <b>a'</b>, where it hits the reference distribution <b>P<sub>R</sub></b>.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center  Adjusting to a Given Histogram (Histogram Matching)
      p
      .center
          img(src='./assets/chap05/p068-fig5-13.png' height="150px")
      p(style="margin-top: -20px") This position a corresponds to the new pixel value to which <b>a</b> should be mapped.
      p Since the sum of all probabilities <b>p<sub>A</sub></b> and the maximum of the distribution function <b>P<sub>R</sub></b> are both <b>1</b>, all horizontal bars will exactly fit underneath the function <b>P<sub>R</sub></b>.
      p Given some intensity value <b>a</b>, it is therefore sufficient to find the minimum value a, where the reference distribution <b>P<sub>R</sub>(a)</b> is greater than or equal to the cumulative probability <b>P<sub>A</sub>(a)</b>, that is,
      .center
          img(src='./assets/chap05/p068-eqn5-25.png' height="60px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Algorithm for Matching Histograms
      .center
          img(src='./assets/chap05/p069-alg5-3.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Matching Histograms
      p
      .center
          img(src='./assets/chap05/p069-fig5-14.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Matching Histograms
      p
      .center
          img(src='./assets/chap05/p071-fig5-15.png' height="700px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Matching Histograms
      p
      .center
          img(src='./assets/chap05/p072-fig5-16.png' height="700px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5(style="margin-top: -10px").center Gamma Correction
      p When applied to digital intensity images, the ideal is to have some kind of “calibrated intensity space” that optimally matches the human perception of intensity and requires a minimum number of bits to represent the required intensity range.
      p Gamma correction denotes a simple point operation to compensate for the transfer characteristics of different input and output devices and to map them to a unified intensity space.
      p The term “gamma” originates from analog photography, where the relationship between the light energy and the resulting film density is approximately logarithmic.


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center Gamma correction
      p The “exposure function”, specifying the relationship between the logarithmic light intensity and the resulting film density, is therefore approximately linear over a wide range of light intensities.
      .center
          img(src='./assets/chap05/p073-fig5-17.png' height="200px")
      p The slope of this function within this linear range is traditionally referred to as the “gamma” of the photographic material.
      p The same term was adopted later in television broadcasting to describe the nonlinearities of the cathode ray tubes used in TV receivers, that is, to model the relationship between the amplitude (voltage) of the video signal and the emitted light intensity.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Point Operations and Histograms</sup>
      h5.center Mathematical Definition
      p Gamma correction is based on the exponential function fγ(a) = aγ, (4.27)
      .center
          img(src='./assets/chap05/p074-eqn5-26.png' height="60px")
      p where the parameter <b>γ ∈ R</b> is called the gamma value. If a is constrained to the interval [0, 1], then—independent of γ—the value of <b>f<sub>γ</sub>(a)</b> also stays within [0, 1], and the function always runs through the points (0, 0) and (1, 1).
      .center
          img(src='./assets/chap05/p074-fig5-18.png' height="300px")


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Real Gamma Values
      p The actual gamma values of individual devices are usually specified by the manufacturers based on real measurements. For example, common gamma values for CRT monitors are in the range 1.8 to 2.8, with 2.4 as a typical value.
      p Most LCD monitors are internally adjusted to similar values. Digital video and still cameras also emulate the transfer characteristics of analog film and photographic cameras by making internal corrections to give the resulting images an accustomed “look”.
      .center
          img(src='./assets/chap05/p076-fig5-19.png' height="200px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Real gamma values
      .center
          img(src='./assets/chap05/p077-fig5-20.png' height="500px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Fun Soon!



    slide(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: References</sup>
        h3 References
        ul
          li <b>Digital Image Processing</b><br> <span class="small">An Algorithmic Introduction Using Java</span> <br>Wilhelm Burger and Mark J. Burge<br> Springer
        p.small created by G. Rodríguez-Morales and spheroidGames, gustavo.rodriguezml@gmail.com, spheroidgames@gmail.com

</template>

<script>
import eagle from 'eagle.js'

export default {
  mixins: [eagle.slideshow],
  infos: {
    title: 'Vision Systems',
    description: '3.- Point operations',
    path: 'vision-systems-point'
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
