"use client"

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { Video } from '../assets'
import { IoMdClose } from 'react-icons/io'
import { FaPlay } from 'react-icons/fa';
import Image from 'next/image'

const VideoBtn = () => {
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <>
      <button
        type='button'
        className={`absolute top-[45%] left-[50%] translate-x-[-50%] flex items-center justify-center`}
        aria-label="Play video btn"
        onClick={openModal}>
        <FaPlay
          className="text-primary z-50 text-2xl" />
        <span
          className="bg-white opacity-80 hover:opacity-100 transition duration-500 absolute w-[80px] h-[80px] rounded-full">
        </span>
      </button>


      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60 z-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-[100]">
            <div className="flex min-h-full items-center justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative px-5 xs:px-8 transition-all">
                  <div className="w-full md:max-w-3xl lg:max-w-4xl mx-auto">
                    {/*The Video was supposed to be inserted here but I used an Image instead*/}
                    {/*Also note that the Video source was suppossed to be passed as props to input any video*/}
                    {/*But since there's no Video, I just used the same Image for every Video tag*/}
                    <Image
                      src={Video}
                      className='w-full rounded-[10px] md:max-w-3xl lg:max-w-4xl mx-auto'
                      alt
                    />
                  </div>

                  <div className="">
                    <button
                      type="button"
                      className="absolute -top-[3.5rem] right-[1rem] text-white"
                      onClick={closeModal}
                    >
                      <IoMdClose
                        className='w-12 h-12' />
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default VideoBtn