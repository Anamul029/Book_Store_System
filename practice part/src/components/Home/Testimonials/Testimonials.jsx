

import { useRef, useEffect } from 'react';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

const Testimonials = () => {
  const sliderRef = useRef(null);
  const keenSliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      keenSliderRef.current = new KeenSlider(sliderRef.current, {
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 2.5,
              spacing: 32,
            },
          },
        },
      });
    }
    return () => {
      if (keenSliderRef.current) keenSliderRef.current.destroy();
    };
  }, []);

  return (
    <section className=" font-inter  mx-auto px-[7%]">
      <div className="mx-auto  px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:ps-8 lg:pe-0 xl:py-24">
        <div className=" items-end justify-between sm:flex sm:pe-6 lg:pe-8">
          <h2 className=" text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 flex gap-4 lg:mt-0">
            <button
              aria-label="Previous slide"
              onClick={() =>
                keenSliderRef.current && keenSliderRef.current.prev()
              }
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>

            <button
              aria-label="Next slide"
              onClick={() =>
                keenSliderRef.current && keenSliderRef.current.next()
              }
              className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            >
              <svg
                className="size-5 rtl:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 5l7 7-7 7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className=" mt-8 lg:col-span-2 lg:mx-0">
          <div ref={sliderRef} className="keen-slider">
            {/* Slide 1 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-2xl  sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>

            {/* Slide 2 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white shadow-2xl  p-6  sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>

            {/* Slide 3 */}
            <div className="keen-slider__slide">
              <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-2xl sm:p-8 lg:p-12">
                <div>
                  <div className="flex gap-0.5 text-green-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="size-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mt-4">
                    <p className="text-2xl font-bold text-rose-600 sm:text-3xl">
                      Stayin' Alive
                    </p>
                    <p className="mt-4 leading-relaxed text-gray-700">
                      No, Rose, they are not breathing. And they have no arms or legs … Where are they? You know what? If we come across somebody with no arms or legs, do we bother resuscitating them? I mean, what quality of life do we have there?
                    </p>
                  </div>
                </div>
                <footer className="mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                  &mdash; Michael Scott
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Testimonials;