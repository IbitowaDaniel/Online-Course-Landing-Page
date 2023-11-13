import { ProductFunctionData } from "@app/constants";
import { SectionHeader } from "@app/components/SectionHeader";
import Image from "next/image";

const ProductFunction = () => (
  <section className="paddingY">
    <div className="bg-[#ebf9ff]">
      <div className="boxWidth paddingX">
        <div className="py-20 lg:py-28">
          {ProductFunctionData.map((item, index) => (
            <div key={index} className="text-center">

              <SectionHeader
                heading={item.heading}
                headingSecondary={item.headingSecondary}
              />

              <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 text-center sm:grid-cols-2 lg:grid-cols-4">
                {item.features.map((c, i) => (
                  <div key={i} className="flex items-center sm:items-start mx-auto max-w-xs xs:max-w-sm flex-col gap-y-3">
                    <div className="lg:flex lg:gap-x-2">
                      <h4 className="text-heading bg-white font-bold rounded-[15px] sm:rounded-[25px] p-3 md:p-4 sm:text-left text-2xl lg:text-3xl">{`0${c.id}`}</h4>
                      <div className="hidden lg:flex">
                        <Image
                          src={c.img}
                          alt=""
                          classname=""
                        />
                      </div>
                    </div>

                    <h4 className="font-semibold text-lg sm:text-xl text-black sm:text-left">{c.title}</h4>
                    <p className="text-text px-3 leading-8 sm:px-0 sm:text-left">{c.text}</p>

                  </div>

                ))}
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProductFunction