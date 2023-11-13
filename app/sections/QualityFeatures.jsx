import { SectionHeader } from "@app/components/SectionHeader";
import { QualityFeaturesData } from "@app/constants";
import Rating from "@app/components/Rating";
import { Eye2 } from "@app/assets";
import { IoIosCheckmarkCircle } from 'react-icons/io';
import VideoBtn from "@app/components/VideoBtn";
import Image from "next/image";


const QualityFeatures = () => (
  <section id="courses" className="boxWidth paddingX paddingY">
    {QualityFeaturesData.map((item, index) => (
      <div key={index} className=''>
        <SectionHeader
          heading={item.heading}
          headingSecondary={item.headingSecondary}
        />
        <div className="grid md:grid-cols-2 md:gap-x-6 md:gap-y-12 xl:gap-x-0 xl:gap-y-24">
          {item.courses.map((c, i) => (
            <div key={c.id} index={i} className={`border mt-8 xl:mt-10 ${c.id !== 4 ? "mb-16 md:mb-0" : "mb-20 md:mb-0"} rounded-lg mx-auto max-w-md xl:max-w-lg`}>
              <div className="relative w-full rounded-t-lg overflow-hidden">
                <Image
                  src={c.imgSrc}
                  className="w-full"
                  alt=""
                />
                <VideoBtn />
              </div>

              <div className="py-6 pl-4 pr-6 xs:px-6 xs:py-8">
                <div className="flex gap-x-2">
                  <div className="text-sm">
                    <Rating
                      rating={c.rating}
                      starColor="text-[#FFCE1F]"
                    /></div>
                  <p className="-mt-1 text-[15px] text-black">{c.review}</p>
                </div>

                <div className="flex gap-x-2">
                  <Image
                    src={Eye2}
                    alt=""
                  />
                  <p className="text-text text-base">{c.views}</p>
                </div>

                <h4 className="font-bold text-xl xs:text-2xl lg:text-[26px] lg:leading-10 mb-2 mt-2 text-black">{c.heading}</h4>
                <p className="text-[#5D646D] text-base leading-8">{c.text}</p>


                {c.courseList.map((g, i) => (
                  <ul key={i} className="list-none flex gap-x-2">
                    <button className="w-6 h-12 text-[#3fdbb1] p-0 text-2xl flex-shrink-0" aria-label="List icon"><IoIosCheckmarkCircle /></button>
                    <li className="py-2 text-base text-black">{g.content}</li>
                  </ul>
                ))}

                <div className="text-center">
                  <button
                    className="outline-0 font-bold text-base xl:text-lg text-primary bg-primaryLight hover:text-white hover:bg-primary transition duration-500 py-4 px-5 my-4 rounded-md"
                    aria-label="Number of Classes and hours of the course">
                    {c.btnText}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>


    ))}
  </section>
);

export default QualityFeatures