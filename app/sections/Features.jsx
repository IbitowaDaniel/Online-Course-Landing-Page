import { FeaturesData } from "@app/constants";
import Rating from "@app/components/Rating";
import { Eye2 } from "@app/assets";
import VideoBtn from "@app/components/VideoBtn";
import { SectionHeader } from "@app/components/SectionHeader";
import Image from "next/image";


const Features = () => (
  <section className="boxWidth paddingX paddingY">
    {FeaturesData.map((item, index) => (
      <div key={index} className=''>
        <SectionHeader
          heading={item.heading}
          headingSecondary={item.headingSecondary}
        />
        <div className="mt-8 xs:mt-12 grid md:grid-cols-2 lg:grid-cols-3">
          {item.items.map((c, i) => (
            <div key={c.id} index={i} className={`${c.id !== 3 ? "mb-16 lg:mb-0" : "mb-0"} border rounded-lg hover:shadow-lg transition duration-200 ease-in-out max-w-[360px] mx-auto xs:max-w-sm md:max-w-[340px] lg:max-w-[300px] xl:max-w-[340px]`}>

              <div className="relative w-full rounded-t-lg overflow-hidden">
                <Image
                  src={c.imgSrc}
                  alt={c.altText}
                  className="w-full"
                />
                <VideoBtn />
              </div>

              <div className="pt-5 px-5 pb-10">

                <div className="flex gap-x-2">
                  <div className="text-sm">
                    <Rating
                      rating={c.rating}
                      starColor="text-[#FFCE1F]"
                    />
                  </div>
                  <p className="-mt-1 text-base text-text opacity-80">{c.review}</p>
                </div>

                <h4 className="font-bold text-lg mb-2 text-black">{c.heading}</h4>
                <div className="flex gap-x-2">
                  <Image
                    src={Eye2}
                    alt=""
                  />
                  <p className="text-text opacity-80 text-base">{c.views}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </section>
);

export default Features