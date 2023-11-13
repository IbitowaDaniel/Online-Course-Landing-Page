import { CoreFeaturesData } from "@app/constants";
import { SectionHeaderLeft } from "@app/components/SectionHeaderLeft";


const CoreFeatures = () => (
  <section className="boxWidth paddingX paddingY">
    {CoreFeaturesData.map((item, index) => (
      <div key={index} className='text-center lg:flex lg:flex-row-reverse gap-x-12 xl:gap-x-14'>
        <div className="mx-auto sm:max-w-xl lg:text-left lg:max-w-sm xl:max-w-md">
          <SectionHeaderLeft
            heading={item.heading}
            headingSecondary={item.headingSecondary}
          />
          <p className="text-[1rem] xl:text-lg text-text_secondary px-3 pt-2 pb-6 lg:px-0 leading-8 xl:leading-10">{item.text}</p>
          <button className="mb-12 text-sm xs:text-base font-bold bg-primaryLight text-primary hover:bg-primary hover:text-white rounded-md outline-none transition duration-500 py-4 px-5">{item.btnText}</button>
        </div>

        <div className="grid grid-cols-2 gap-x-5">
          {item.stats.map((c, i) => (
            <div key={i} className={`mt-6 py-10 sm:py-14 xl:py-20 sm:px-14 md:px-20 lg:px-4 xl:px-10 ${c.statTranslate} border rounded-lg`}>
              <h4 className={`text-4xl xl:text-6xl ${c.statColor} font-bold drop-shadow tracking-[-1.5px] mb-1`}>{c.statNo}</h4>
              <p className="text-black text-[15px] xs:text-[18px] xl:text-[20px] drop-shadow">{c.statText}</p>
            </div>
          ))}
        </div>
      </div>
    ))}

  </section>
);

export default CoreFeatures