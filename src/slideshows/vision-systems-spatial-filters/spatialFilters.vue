<template lang="pug">
#TemperatureHeat.eg-theme-agrume
  .eg-slideshow
    slide(enter='fadeIn' leave='bounceOutLeft')
      .center.frontpage
        h2 Vision Systems
        img(src='./assets/U.svg')
        p Space Domain Filters
        eg-triggered-message(:trigger='slideTimer >= 2',
                            :duration='6', position='top right',
                            enter='bounceInRight', leave='bounceOutRight')
          p Next:
          img.control-schema(src='./assets/controlsNext.svg')
          p Previous:
          img.control-schema(src='./assets/controlsPrev.svg')
        .top <sup style="font-size: 10px;">{{ slides.length }}</sup>

    slide(:steps=6, enter='bounceInRight' leave='bounceOutDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Topics</sup>
      h6(style="margin-top: -20px;")
        | Topics on Space Domain Filters
      .center
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 2")
            <b>What is a Filter?</b>
        eg-transition(enter='bounceInRight' leave='bounceOutRight')
          p(v-if="step >= 3")
            <b>Linear Filters</b><br><span style="font-size: 0.7em;">The Filter Kernel, Applying the Filter, Integer Coefficients, Filters of Arbitrary Size, Types of Linear Filters</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 4")
            <b>Formal Properties of Linear Filters</b><br><span style="font-size: 0.7em;">Linear Convolution, Formal Properties of Linear Convolution, Separability of Linear Filters, Impulse Response of a Filter</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 5")
            <b>Nonlinear Filters</b><br><span style="font-size: 0.7em;">Minimum and Maximum Filters, Median Filter, Weighted Median Filter, Other Nonlinear Filters</span>
        eg-transition(enter='bounceInLeft' leave='bounceOutLeft')
          p(v-if="step >= 6")
            <b>Implementing Filters</b><br><span style="font-size: 0.7em;">Efficiency of Filter Programs, Handling Image Borders, Debugging Filter Programs</span>

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h1(style="margin: -20px 0 0 0; ").center Filters
      p The essential property of point operations is that each new pixel value only depends on the original pixel at the same position. The capabilities of point operations are limited, however.
      p For example, they cannot accomplish the task of sharpening or smoothing an image.
      .center
        img(src='./assets/clips-06/p089-fig6-1.png' height="250px")
      p This is what filters can do. They are similar to point operations in the sense that they also produce a 1:1 mapping of the image

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h3.center What is a Filter?
      p The main difference between filters and point operations is that filters generally use more than one pixel from the source image for computing each new pixel value.
      p Let us first take a closer look at the task of smoothing an image. Images look sharp primarily at places where the local intensity rises or drops sharply. On the other hand, we perceive an image as blurred or fuzzy where the local intensity function is smooth.
      p A first idea for smoothing an image could thus be to simply replace every pixel by the average of its neighboring pixels.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center What is a Filter?
      p To determine the new pixel value in the smoothed image <b>I(u, v)</b>, we use the original pixel <b>I(u, v) = p<sub style="font-size:0.5em;">0</sub></b> at the same position plus its eight neighboring pixels <b>p<sub style="font-size:0.5em;">1</sub>, p<sub style="font-size:0.5em;">2</sub>, . . . , p<sub style="font-size:0.5em;">8</sub></b> to compute the arithmetic mean of these nine values,
      .center
        img(src='./assets/clips-06/p090-eqn6-1.png' style="margin-right: 50px;")
      p(style="margin: -0px 0 0 0;") Expressed in relative image coordinates this is
      .center
        img(src='./assets/clips-06/p090-eqn6-2.png')
      p(style="margin: 0px 0 0 0;") or compactly.
      .center
        img(src='./assets/clips-06/p090-eqn6-3.png')


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5(style="margin-top: -30px;").center What is a Filter?
      p This simple local averaging already exhibits all the important elements of a typical filter. In particular, it is a so-called linear filter, which is a very important class of filters.
      p But how are filters defined in general? First they differ from point operations mainly by using not a single source pixel but a set of them for computing each resulting pixel.
      p The coordinates of the source pixels are fixed relative to the current image position (u, v) and usually form a contiguous region
      .center
        img(src='./assets/filter01.png' height="250px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Linear Filters
      p Linear filters are denoted that way because they combine the pixel values in the support region in a linear fashion, that is, as a weighted summation.
      p The local averaging process discussed in the beginning is a special example, where all nine pixels in the 3 × 3 support region are added with identical weights (1/9).
      p With the same mechanism, a multitude of filters with different properties can be defined by simply modifying the distribution of the individual weights.

      p Note that in this case no clamping is required at all because the function always maps to the original range of values.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h3.center(style="margin-top: -10px;") The Filter Kernel
      p For any linear filter, the size and shape of the support region, as well as the individual pixel weights, are specified by the “filter kernel” or “filter matrix” H(i, j). Every element H(i, j) specifies the weight of the corresponding pixel in the summation.
      p For the 3×3 smoothing filter the kernel is
      .center
        img(src='./assets/clips-06/p091-eqn6-4.png' style="margin-top: 0px;")
      p In principle, the filter kernel H(i, j) is, just like the image itself, a discrete, 2D, real-valued function, H: Z × Z → R.
      p The filter coordinates are generally positive and negative.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Applying the Filter
      p For a linear filter, the result is unambiguously and completely specified by the coefficients of the filter matrix. Applying the filter to an image is a simple process
      .center
        img(src='./assets/applyFilter.png' height="300px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Applying the Filter
      p  The following steps are performed at each image position <b>(u, v)</b>:
      p <b>1.</b> The filter kernel <b>H</b> is moved over the original image, its origin <b>H(0, 0)</b> coincides with the current image position <b>(u, v)</b>.
      p <b>2.</b> All filter coefficients <b>H(i, j)</b> are multiplied with the corresponding image element <b>I(u+i, v+j)</b>, and the results are added up.
      p <b>3</b>. Finally, the resulting sum is stored at the current position in the new image <b>I(u,v)</b>.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Applying the Filter
      p Described formally, the pixel values of the new image I(u, v) are computed by the operation
      .center
        img(src='./assets/clips-06/p093-eqn6-5.png')
      p where RH denotes the set of coordinates covered by the filter H. For a typical 3 × 3 filter with centered origin, this is
      .center
        img(src='./assets/clips-06/p093-eqn6-6.png')
      p for all image coordinates (u, v). Not quite for all coordinates, to be exact.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Implementing the Filter Operation
      p Now that we understand the principal operation of a filter and know that the borders need special attention, we go ahead and program a simple linear filter.
      p But before we do this, we may want to consider one more detail.
      p In a point operation, each new pixel value depends only on the corresponding pixel value in the original image, and it was thus no problem simply to store the results back to the same.
      p In-place computation is generally not possible for a filter since any original pixel contributes to more than one resulting pixel.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Implementing the Filter Operation
      p Thus the complete filter operation can be implemented in two different ways:
      p <b>A</b>. The result of the filter computation is initially stored in a new image whose content is eventually copied back to the original image.
      p <b>B</b>. The original image is first copied to an intermediate image that serves as the source for the actual filter operation. The result replaces the pixels in the original image.
      p The same amount of storage is required for both versions, and thus none of them offers a particular advantage.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Filter Examples
      p The following examples demonstrate the implementation of two very basic filters.
      p Simple 3 × 3 averaging filter (“box” filter)
      .center
        img(src='./assets/clips-06/p091-eqn6-4.png' style="margin-top: 0px;")
      p Another 3 × 3 smoothing filter
      .center
        img(src='./assets/clips-06/p094-eqn6-7.png' style="margin-top: 0px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Integer Coefficients
      p(style="margin-top: -50px;") Instead of using floating-point coefficients, it is often simpler and usually more efficient to work with integer coefficients in combination with some common scale factor s, that is,
      .center
        img(src='./assets/clips-06/p095-eqn6-8.png' style="margin-top: -50px;")
      p If all filter coefficients are positive, then s is usually taken
      .center
        img(src='./assets/clips-06/p096-eqn6-9.png' style="margin-top: 0px;")
      p to obtain a normalized filter matrix. For example,
      .center
        img(src='./assets/clips-06/p096-eqn6-10.png' style="margin-top: 0px;")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Types of Linear Filters
      p Since the effects of a linear filter are solely specified by the filter matrix (which can take on arbitrary values), an infinite number of different linear filters exists, at least in principle.
      h5.center Smoothing filters
      p In fact, any linear filter with positive-only coefficients is a smoothing filter in a sense, because such a filter computes merely a weighted average of the image pixels within a certain image region.
      h6.center Box filter
      p(style="margin-top: -50px;") This simplest of all smoothing filters, whose 3D shape resembles a box, is a well-known friend already.
      p Unfortunately, the box filter is far from an optimal smoothing filter due to its wild behavior in frequency space, which is caused by the sharp cutoff around its sides.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Types of Linear Filters : Gaussian filter
      p The filter matrix (Fig. 5.8(b)) of this smoothing filter corresponds to a 2D Gaussian function,
      .center
        img(src='./assets/clips-06/p100-eqn6-12b.png' style="margin-top: 0px;")
      p where σ denotes the width (standard deviation) of the bell-shaped function and r is the distance (radius) from the center. The pixel at the center receives the maximum weight (1.0, which is scaled to the integer value 9 in the matrix) , and the remaining coefficients drop off smoothly with increasing distance from the center.
      .center
        img(src='./assets/clips-06/p099-fig6-8.png' height="300px")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Types of Linear Filters :Difference filters
      p If some of the filter coefficients are negative, the filter calculation can be interpreted as the difference of two sums: the weighted sum of all pixels with associated positive coefficients minus the weighted sum of pixels with negative coefficients in the filter region RH, that is,
      .center
        img(src='./assets/clips-06/p100-eqn6-13.png')
      .center
        img(src='./assets/clips-06/p099-fig6-8.png' height="300px")

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h4.center(style="margin-top: -10px;") Formal Properties of Linear Filters
      p We have approached the concept of filters in a rather casual manner to quickly get a grasp of how filters are defined and used. While such a level of treatment may be sufficient for most practical purposes, the power of linear filters may not really be apparent yet considering the limited range of (simple) applications seen so far.
      p The real importance of linear filters (and perhaps their formal elegance) only becomes visible when taking a closer look at some of the underlying theoretical details. At this point, it may be surprising to the experienced reader that we have not mentioned the term “convolution” in this context yet. We make up for this in the remaining parts of this section.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center Linear Convolution
      p The operation associated with a linear filter, as described in the previous section, is not an invention of digital image processing but has been known in mathematics for a long time.
      p It is called linear convolution and in general combines two functions of the same dimensionality, either continuous or discrete. For discrete, 2D functions I and H, the convolution operation is defined as
      .center
        img(src='./assets/clips-06/p101-eqn6-14.png' height="70px" style="margin-top: -20px;")
      p(style="margin-top: -20px;") or, expressed with the designated convolution operator (∗) in the
      .center
        img(src='./assets/clips-06/p101-eqn6-15.png' height="50px" style="margin-top: -20px;")


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center Linear Convolution
      p To resolve the coordinate issue, we replace the summation variables i, j to
      .center
        img(src='./assets/clips-06/p101-eqn6-16.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}  : Filters</sup>
      h5.center(style="margin-top: 0px;") Formal Properties of Linear Convolution
      p The importance of linear convolution is based on its simple mathematical properties as well as its multitude of manifestations and applications.
      p Linear convolution is a suitable model for many types of natural phenomena, including mechanical, acoustic, and optical systems.
      p In particular, there are strong formal links to the Fourier representation of signals in the frequency domain that are extremely valuable for understanding complex phenomena, such as sampling and aliasing.
      p In the following, however, we first look at some important properties of linear convolution in the accustomed “signal” or image space.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: 20px;") Commutativity
      p Linear convolution is commutative; that is, for any image I and filter kernel H,
      .center
        img(src='./assets/clips-06/p102-eqn6-17.png')
      p Thus the result is the same if the image and filter kernel are interchanged, and it makes no difference if we convolve the image I with the kernel H or the other way around. The two functions I and H are interchangeable and may assume either role.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: 0px;") Linearity
      p Linear filters are so called because of the linearity properties of the convolution operation. For example, if an image is multiplied by a scalar constant s ∈ R, then the result of the convolution multiplies by the same factor, that is,
      .center
        img(src='./assets/clips-06/p103-eqn6-18.png')
      p if we add two images I1, I2
      .center
        img(src='./assets/clips-06/p103-eqn6-19.png')
      p adding a constant (scalar) value b to the image,
      .center
        img(src='./assets/clips-06/p103-eqn6-20.png')
      p and is thus not part of the linearity property. thus “linear” filters are often only partially linear

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: 0px;") Associativity
      p Linear convolution is associative, meaning that the order of successive filter operations is irrelevant, that is,
      .center
        img(src='./assets/clips-06/p103-eqn6-21.png')
      p (I ∗ H1) ∗ H2 = I ∗ (H1 ∗ H2). (5.25) Thus multiple successive filters can be applied in any order, and multiple filters can be arbitrarily combined into new filters.

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: 0px;") Separability of Linear Filters
      p A direct consequence of associativity is the separability of linear filters. If a convolution kernel H can be expressed as the convolution of multiple kernels Hi in the form
      .center
        img(src='./assets/clips-06/p103-math-a.png')
      p then the filter operation I*H may be performed as a sequence of convolutions with the constituting kernels Hi,
      .center
        img(src='./assets/clips-06/p103-eqn6-22.png')
      p Depending upon the type of decomposition, this may result in significant computational savings.


    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") x/y separability
      p The possibility of separating a 2D kernel H into a pair of 1D kernels hx, hy is of particular relevance and is used in many practical applications. Let us assume, as a simple example, that the filter is composed of the 1D kernels hx and hy, with
      .center
        img(src='./assets/clips-06/p104-eqn6-23a.png' style="margin: 0 30px -15px 0")
        | and
        img(src='./assets/clips-06/p104-eqn6-23b.png' style="margin: 0 0 -40px 30px")
      p respectively. If these filters are applied sequentially to the image I,
      .center
        img(src='./assets/clips-06/p104-eqn6-24.png')
      p then this is equivalent to applying the composite filter
      .center
        img(src='./assets/clips-06/p104-eqn6-25.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Separable Gaussian filters
      p In general, a 2D filter is x/y-separable if (as in the earlier example) the filter function H(i, j) can be expressed as the outer product (⊗) of two 1D functions,
      .center
        img(src='./assets/clips-06/p104-math-a.png')
      p because in this case the resulting function also corresponds to the convolution product H = Hx ∗ Hy. A prominent example is the widely employed 2D Gaussian function Gσ(x, y), which can be expressed as the product
      .center
        img(src='./assets/clips-06/p104-eqn6-26.png')
      p  Thus a 2D Gaussian filter can be implemented by a pair of 1D Gaussian filters
      .center
        img(src='./assets/clips-06/p105-math-a.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center(style="margin-top: -10px;") Impulse Response of a Filter
      p Linear convolution is a binary operation involving two functions as its operands; it also has a “neutral element”, which of course is a function, too. The impulse or Dirac function δ() is neutral under convolution, that is,
      .center
        img(src='./assets/clips-06/p105-eqn6-27.png')
      p In the 2D, discrete case, the impulse function is defined as
      .center
        img(src='./assets/clips-06/p105-eqn6-28.png')
      .center
        img(src='./assets/clips-06/p105-fig6-10.png')

    slide(:steps=1, enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }} : Filters</sup>
      h5.center Impulse Response of a Filter
      p
      .center
          img(src='./assets/clips-06/p106-fig6-11.png' height="300px")
      .center
          img(src='./assets/clips-06/p106-fig6-12.png' height="300px")


    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h3.center Nonlinear Filters
      h5.center Minimum and Maximum Filters
      p Nonlinear filters calculate the result at a given image position <b>(u, v)</b> from the pixels inside the moving region <b>R<sub>u,v</sub></b> of the original image.
      p The filters are called “nonlinear” because the source pixel values are combined by some nonlinear function.
      p The simplest of all nonlinear filters are the minimum and maximum filters, defined as
      .center
          img(src='./assets/clips-06/p107-eqn6-30.png')
      .center
          img(src='./assets/clips-06/p107-eqn6-31.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Minimum and Maximum Filters
      p The effects of a 1D minimum filter on various local signal structures.
      .center
          img(src='./assets/chap06/p105-fig6-14.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Minimum and Maximum Filters
      p The effects of a 1D minimum filter on various local signal structures.
      .center
          img(src='./assets/chap06/p106-fig6-15.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Median Filter
      p It is impossible of course to design a filter that removes any noise but keeps all the important image structures intact, because no filter can discriminate which image content is important to the viewer and which is not.
      p The popular median filter is at least a good step in this direction.
      p The median filter replaces every image pixel by the median of the pixels in the current filter region R, that is,
      .center
          img(src='./assets/chap06/p107-fig6-33.png')
      .center
          img(src='./assets/chap06/p107-fig6-16.png')

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Median Filter
      p
      .center
          img(src='./assets/chap06/p108-fig6-18.png'  height="400px")
      .center
          img(src='./assets/chap06/p108-fig6-17.png' height="200px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Weighted Median Filter
      p In an ordinary median filter, each pixel in the filter region has the same influence, regardless of its distance from the center.
      p The weighted median filter assigns individual weights to the positions in the filter region, which can be interpreted as the “number of votes” for the corresponding pixel values.
      p Similar to the coefficient matrix H of a linear filter, the distribution of weights is specified by a weight matrix <b>W</b>, with <b>W(i, j) ∈ N</b>.
      p To compute the result of the modified filter, each pixel value <b>I(u + i, v + j)</b> involved is inserted <b>W(i, j)</b> times into the extended pixel vector

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Weighted Median Filter
      .center
          img(src='./assets/medianVsWeighted.png', height="500px")
      .center
          img(src='./assets/chap06/p110-eqn6-36.png', height="100px")

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Other Nonlinear Filters
      p Median and weighted median filters are two examples of nonlinear filters that are easy to describe and frequently used.
      p Since “nonlinear” refers to anything that is not linear, there are a multitude of filters that fall into this category, including the morphological filters for binary and grayscale images.
      p Other types of nonlinear filters, such as the corner detector described, are often described algorithmically and thus defy a simple, compact description.
      p In contrast to the linear case, there is usually no “strong theory” for nonlinear filters that could, for example, describe the relationship between the sum of two images and the results of a median filter, as for linear convolution.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Efficiency of Filter Programs
      p Computing the results of filters is computationally expensive in most cases, especially with large images, large filter kernels, or both.
      p Given an image of size <b>M×N</b> and a filter kernel of size <b>(2K+1)×(2L+1)</b>, a direct implementation requires
      p.center <b>2K·2L·M·N = 4KLMN</b>
      p operations, namely multiplications and additions (in the case of a linear filter).
      p Thus if both the image and the filter are simply assumed to be of size <b>N×N</b>, the time complexity of direct filtering is <b>O(N<sup>4</sup>)</b>.
      p Substantial savings are possible when large, 2D filters can be decomposed into smaller, possibly 1D filters.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h4.center Handling Image Borders
      p The image borders require special attention in most filter implementations.
      p We have argued that theoretically no filter results can be computed at positions where the filter matrix is not fully contained in the image array.
      p Thus any filter operation would reduce the size of the resulting image, which is not acceptable in most applications.
      p While no formally correct remedy exists, there are several more or less practical methods for handling the remaining border regions

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Handling Image Borders
      p <b>Method 1</b>:
      p.center Set the unprocessed pixels at the borders to some constant value (e.g., “black”).
      p This is certainly the simplest method, but not acceptable in many situations because the image size is incrementally reduced by every filter operation.
      p <b>Method 2</b>:
      p.center Set the unprocessed pixels to the original (unfiltered) image values.
      p Usually the results are unacceptable, too, due to the noticeable difference between filtered and unprocessed image parts.

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Handling Image Borders
      p <b>Method 3</b>:
      p Expand the image by “padding” additional pixels around it and apply the filter to the border regions as well.
      p <b>A</b>. The pixels outside the image have a constant value.<br> <span style="font-size: 0.7em;">This may produce strong artifacts at the image borders, particularly when large filters are used.</span>
      p <b>B</b>. The border pixels extend beyond the image boundaries.<br> <span style="font-size: 0.7em;">Only minor artifacts can be expected at the borders. The method is also simple to compute and is thus often considered the method of choice.</span>

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Handling Image Borders
      p <b>Method 3</b>:
      p Expand the image by “padding” additional pixels around it and apply the filter to the border regions as well.
      p <b>C</b>. The image is mirrored at each of its four boundaries.<br> <span style="font-size: 0.7em;"> The results will be similar to those of the previous method unless very large filters are used.</span>
      p D. The image repeats periodically in the horizontal and vertical directions.<br> <span style="font-size: 0.7em;"> This may seem strange at first, and the results are generally not satisfactory.</span>

    slide.boredYet(enter='bounceInDown' :mouseNavigation='false')
      .top <sup style="font-size: 10px;">{{ currentSlideIndex }}: Point Operations and Histograms</sup>
      h5.center Handling Image Borders
      .center
          img(src='./assets/chap06/p113-fig6-20.png')

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
    description: '4.- Space domain filters',
    path: 'vision-systems-spatial-filters'
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
