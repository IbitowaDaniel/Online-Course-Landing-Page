import { BannerImage, Brands, BannerTextLine } from "@app/assets";
import Rating from "@app/components/Rating";
import { IoIosSearch } from 'react-icons/io';
import Image from "next/image";



const Hero = () => (
  <section id="home" className="bg-[#ebf9ff]">
    <div className="boxWidth paddingX">
      <div className="py-10 lg:pt-16 md:flex md:gap-x-12 xl:gap-x-20">
        <div className="xs:max-w-md md:max-w-[360px] lg:max-w-md xl:max-w-lg flex-shrink-0">
          <div className="flex gap-x-2">
            <Rating
              rating="4"
              starColor="text-primary"
            />
            <p className="text-sm lg:text-base">Trusted by over 4,332 students</p>
          </div>
          <h1 className="font-bold text-black text-[2rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[2.5rem] lg:text-[3rem] mb-4 md:mb-8 lg:mb-10 max-w-full xs:max-w-sm sm:max-w-md md:max-w-[320px] lg:max-w-md xl:max-w-lg leading-[2.7rem] xs:leading-[3rem] sm:leading-[3.5rem] md:leading-[3.6rem] lg:leading-[4.2rem]">
            Learn Design <br /> with
            <span className="relative"> Nia Matos
              <Image
                src={BannerTextLine}
                className="absolute -right-0 hidden md:block"
                alt=""
                aria-hidden="true" />
            </span>

          </h1>
          <p className="text-text_secondary text-base leading-8 lg:text-[18px] lg:leading-[2.6rem]">
            Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever.
          </p>

          <div className="mt-4 lg:mt-6">
            <form action="#" method="POST">
              <div className="relative">
                <label htmlFor="search" className="sr-only">Search course name</label>
                <input
                  name="courseSearch"
                  id="courseSearch"
                  type="text"
                  placeholder="Search Course Name"
                  required
                  className="w-full block bg-white rounded-[4px] pl-6 py-3 xl:py-5 xl:pl-8 focus:outline-none shadow placeholder:text-sm xl:placeholder:text-base placeholder:text-black"
                />
                <button
                  type="submit"
                  aria-label="search button"
                  className="text-text_secondary absolute top-4 right-8 xl:text-3xl">
                  <IoIosSearch />
                </button>
              </div>
            </form>
          </div>

          <div className='mt-6'>
            <p className='opacity-60 text-[#566272] text-base mb-4'>
              Sponsored by:
            </p>
            <div className='mt-4 sm:mt-0'>
              <Image
                src={Brands}
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-10 w-full max-w-full mx-auto lg:-mt-4 md:mt-0">
          <Image
            src={BannerImage}
            alt="banner image"
            className="" />
        </div>

      </div>
    </div>
  </section>
);

export default Hero