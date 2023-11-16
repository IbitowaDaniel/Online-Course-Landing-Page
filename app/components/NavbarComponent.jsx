"use client";

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import { Logo } from '@app/assets';
import { Link } from "react-scroll";
import { Navigation } from '@app/constants';
import Image from 'next/image';



const NavbarComponent = ({ headerId, headerStyles, }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex max-w-xs flex-col overflow-y-auto bg-white pb-12 px-4 shadow-xl w-80">
                <div className="flex px-4 pb-2 pt-5 justify-end">
                  <button
                    type="button"
                    className="-m-2 inline-flex items-center rounded-md outline-none p-2 text-black justify-center"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <IoMdClose className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <div className="space-y-6 px-4 py-6">
                  <ul className="list-none space-y-2 py-6">
                    {Navigation.map((item, i) => (
                      <li>
                        <Link
                          to={item.path}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          key={i}
                          className={`block cursor-pointer py-3 text-base font-semibold leading-7 text-text border-b border-[#e8e5e5]`}
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>


                <div className='absolute w-[18rem] bottom-0'>
                  <div className='flex justify-center items-center mb-[10vh]'>
                    <Link to="#" className="transition duration-500 text-lg font-medium text-white bg-black hover:bg-primary rounded-[5px] px-5 py-2">
                      Try For Free
                    </Link>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header id={`${headerId}`} className={`${headerStyles}`}>
        <nav aria-label="Top" className="md:py-1 boxWidth paddingX">

          <div className="flex h-16 py-9 items-center">
            {/* Logo */}
            <div className="ml-0 flex">
              <span className="sr-only">Logo</span>
              <a href="https://daniel-ibitowa.vercel.app" target="_blank">
                <Image
                  className="w-28 xs:w-36 md:w-40 xl:w-48"
                  src={Logo}
                  alt=""
                />
              </a>
            </div>

            <ul className="hidden list-none lg:flex lg:flex-1 lg:gap-x-12 lg:justify-center">
              {Navigation.map((item, i) => (
                <li>
                  <Link
                    activeClass='active'
                    spy={true}
                    to={item.path}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    key={i}
                    className={`text-sm lg:text-base leading-6 text-text_secondary`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to="#" className="transition duration-500 text-lg font-medium text-white bg-black hover:bg-primary rounded-[5px] px-6 py-2.5">
                  Try For Free
                </Link>
              </div>

              <div className="flex lg:ml-6">
                <button
                  type="button"
                  className="rounded-md p-2 lg:hidden -m-2.5  outline-none text-gray-900"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <IoMdMenu className="h-6 w-6 text-text" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default NavbarComponent