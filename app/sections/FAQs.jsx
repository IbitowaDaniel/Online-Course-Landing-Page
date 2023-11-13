"use client"


import { SectionHeader } from "@app/components/SectionHeader";
import { FAQsData } from "@app/constants";
import { Disclosure, Transition } from '@headlessui/react'
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/20/solid'


const FAQs = () => (
  <section id="faqs" className="boxWidth paddingX paddingY">
    {FAQsData.map((item, index) => (
      <>
        <div key={item.id} index={index}>
          <SectionHeader
            heading={item.subTitle}
            headingSecondary={item.mainTitle} /></div>

        <div className='md:flex flex-row-reverse gap-x-6 lg:gap-x-0 md:max-w-3xl lg:max-w-full xl:max-w-5xl mx-auto'>
          <div className='flex-shrink-0'>
            {item.features.map((c, index) => (
              <div key={c.id} index={index}>
                <div className="w-full mt-8">
                  <div className="mx-auto w-full sm:max-w-lg md:max-w-sm lg:max-w-md">
                    <Disclosure>
                      {({ open }) => (
                        <>

                          <Disclosure.Button className={`flex relative py-4 pl-8 w-full text-left text-base sm:text-lg md:text-base lg:text-lg font-medium text-black focus:outline-none`}>
                            <span> {c.title}</span>
                            <PlusCircleIcon
                              className={`${open ? 'opacity-0' : ''
                                } absolute left-0 top-[30%] h-6 w-6 text-[#25CB9E] opacity-100`}
                            />
                            <MinusCircleIcon
                              className={`${open ? 'opacity-100' : ''
                                } absolute left-0 top-[30%] h-6 w-6 text-[#25CB9E] opacity-0`}
                            />
                          </Disclosure.Button>
                          <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                          >
                            <Disclosure.Panel className={`pb-2 pl-8 text-base leading-8 text-text ${index !== 3 ? " border-b" : " border-b-0"}`}>
                              {c.contents}
                            </Disclosure.Panel>
                          </Transition>
                        </>
                      )}
                    </Disclosure>

                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className='text-center md:text-left mt-20 md:mt-12 sm:max-w-xl mx-auto lg:max-w-md'>
            <h4 className="text-2xl font-semibold md:font-light leading-[2.2rem] xs:text-3xl xs:leading-[2.6rem] md:text-[22px] md:leading-[2rem] lg:text-3xl lg:leading-[2.8rem] md:mb-0 mb-3 text-text_secondary">{item.CTAtitle}</h4>
            <p className='text-[1rem] lg:text-lg text-text px-3 pt-2 pb-6 md:px-0 leading-8 lg:leading-10'>{item.CtAtext}</p>
            <button className='mb-12 text-sm xs:text-base font-bold bg-primaryLight text-primary hover:bg-primary hover:text-white rounded-md outline-none transition duration-500 py-4 px-5'>{item.CTAbtn}</button>
          </div>

        </div>
      </>
    ))}
  </section>
);

export default FAQs