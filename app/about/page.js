'use client'
// import {useRouter, usePathname, useSearchParams} from 'next/navigation';
// import Link from 'next/link';
export default function About() {

    // const router = useRouter();
    // const pathName = usePathname();
    // const searchParams = useSearchParams();
    
    // console.log('hello in browser console...');
    // console.log('queryparams: ', searchParams);

    return (
<div className="p-2 lg:p-5 bg-gradient-to-tr from-gray-500 to-gray-800" data-theme="dark" >
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 bg-gradient-to-tr from-gray-600 to-gray-900">
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="w-full lg:w-5/12 flex flex-col justify-center text-white">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4">About Us</h1>
              <p className="font-normal text-base leading-6 text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12">
              <img className="w-full h-full" src="/img/Rectangle-116.png" alt="A group of People" />
            </div>
          </div>

          <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-white pb-4">Our Story</h1>
              <p className="font-normal text-base leading-6 text-gray-300">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from</p>
            </div>
            <div className="w-full lg:w-8/12 lg:pt-8">
              <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md bg-base-100">
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="/img/Rectangle-118-2.png" alt="Alexa featured Image" />
                  <img className="md:hidden block" src="/img/Rectangle-118.png" alt="Alexa featured Image" />
                  <p className="font-medium text-xl leading-5 text-gray-100 mt-4">Alexa</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="/img/Rectangle-119.png" alt="Olivia featured Image" />
                  <img className="md:hidden block" src="/img/Rectangle-119.png" alt="Olivia featured Image" />
                  <p className="font-medium text-xl leading-5 text-gray-100 mt-4">Olivia</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="/img/Rectangle-120.png" alt="Liam featued Image" />
                  <img className="md:hidden block" src="/img/Rectangle-120.png" alt="Liam featued Image" />
                  <p className="font-medium text-xl leading-5 text-gray-100 mt-4">Liam</p>
                </div>
                <div className="p-4 pb-6 flex justify-center flex-col items-center">
                  <img className="md:block hidden" src="/img/Rectangle-121.png" alt="Elijah featured image" />
                  <img className="md:hidden block" src="/img/Rectangle-121.png" alt="Elijah featured image" />
                  <p className="font-medium text-xl leading-5 text-gray-100 mt-4">Elijah</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-purple-300 to-blue-200 px-10 pt-10 rounded-2xl">
          <div className="flex justify-center mx-auto bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl">
            <div className="pb-10">
              <p className="text-lg text-center font-normal pb-3 text-white">BUILDING TEAM</p>
              <h1 className="xl:text-3xl text-2xl text-center text-gray-100 font-extrabold pb-4 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
            </div>
          </div>
          <div className="container mx-auto">
            <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5 ">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/photo-1564061170517-d3907caa96ea.jfif" alt="Display Picture of Andres Berlin" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                  <h1 className="font-bold text-3xl text-center mb-1 text-white">Andres Berlin</h1>
                    <p className="text-sm text-center text-gray-100">Chief Executive Officer</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/photo-1530577197743-7adf14294584.jfif" alt="Display Picture of Silene Tokyo" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">Silene Tokyo</h1>
                    <p className="text-sm text-center text-gray-100">Product Design Head</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/photo-1566753323558-f4e0952af115.jfif" alt="Display Picture of Johnson Stone" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">Johnson Stone</h1>
                    <p className="text-sm text-center text-gray-100">Manager Development</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/boy-smiling_23-2148155640.jpg" alt="Display Picture of Dean Jones" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">Dean Jones</h1>
                    <p className="text-sm text-center text-gray-100">Principal Software Engineer</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/blond-man-happy-expression_1194-2873.jpg" alt="Display Picture of Rachel Adams" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">Rachel Adams</h1>
                    <p className="text-sm text-center text-gray-100">Product Design Head</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                <div className="rounded-2xl overflow-hidden shadow-md bg-neutral-focus ">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img src="/img/photo-1570211776045-af3a51026f4a.jfif" alt="Display Picture of Charles Keith" role="img" className="rounded-full object-cover h-full w-full shadow-md" />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <h1 className="font-bold text-3xl text-center mb-1 text-white">Charles Keith</h1>
                    <p className="text-sm text-center text-gray-100">UX Designer</p>
                    <p className="text-center text-gray-500 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href="#" className="mx-5">
                        <div aria-label="Github" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg1.svg" alt="github" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Twitter" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg2.svg" alt="twitter" />
                        </div>
                      </a>
                      <a href="#" className="mx-5">
                        <div aria-label="Instagram" role="img">
                          <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/gray-bg-with-description-svg3.svg" alt="instagram" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}