import { FreeTutorialData } from "@app/constants";
import { SectionHeaderLeft } from "@app/components/SectionHeaderLeft";
import Image from "next/image";

const FreeTutorial = () => (
  <section className="boxWidth paddingX paddingY">
    {FreeTutorialData.map((item, index) => (
      <div key={index} className='text-center lg:flex lg:flex-row-reverse gap-x-12 xl:gap-x-14'>

        <div className="mx-auto sm:max-w-xl lg:text-left lg:max-w-sm xl:max-w-md">
          <SectionHeaderLeft
            heading={item.heading}
            headingSecondary={item.headingSecondary}
          />
          <p className="text-[1rem] xl:text-lg text-text_secondary px-3 pt-2 pb-6 lg:px-0 leading-8 xl:leading-10">{item.text}</p>
          <button className="mb-12 text-sm xs:text-base font-bold bg-primaryLight text-primary hover:bg-primary hover:text-white rounded-md outline-none transition duration-500 py-4 px-5">{item.btnText}</button>
        </div>

        <div className="">
          <Image
            src={item.imgSrc}
            alt={item.imgAlt}
          />
        </div>

      </div>
    ))}
  </section>
);

export default FreeTutorial