/*
 * @Date: 2021-07-19 19:16:36
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-08 19:59:39
 * @FilePath: /react-side-project/src/components/tab/faq.js
 */
import React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const DUMMY_FAQS = [
  {
    id: 'Q1',
    title: '影片拍完後可以編輯嗎？',
    content: '可以進行簡易的編輯，內建 5 種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！'
  },
  {
    id: 'Q2',
    title: '有提供保固或維修服務嗎？',
    content: '提供產品售後服務，對產品本體(不含配件、線材)提供二年保固服務。產品因意外或人為不當使用或未經授權維修等非依使用手冊使用而造成產品損壞者，則不在保固範圍之內，得向客戶酌收產品維修服務費用。'
  },
  {
    id: 'Q3',
    title: '補充包底片要去哪裡購買呢？',
    content: '本產品可以兼容 i-type 及 600 相片，各大網路平台皆有販售。'
  },
  {
    id: 'Q4',
    title: '印出來的拍立得照片需要充電嗎？',
    content: '不用，取出後稍微搖晃，相片與空氣接觸數秒後便會產生圖像顏色。'
  },
  {
    id: 'Q5',
    title: '運送方式及付款方式有哪些呢？',
    content: '可以選擇超商取貨及宅配，付款方式有銀行轉帳及信用卡支付。'
  },
]

const Faq = () => {
  return (
    <div className="w-full">
      <div className="w-full mx-auto bg-white">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-4 border border-gray-100 rounded flex justify-between items-center w-full px-4 py-2 text-sm font-normal text-gray-500 bg-light-100 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <div className="flex items-center">
                  <div className="w-8 p-2 bg-yellow-300 font-baloo rounded mr-2">
                    Q1
                  </div>
                  <span className="text-left">影片拍完後可以編輯嗎？</span>
                </div>
                <ChevronDownIcon
                  className={`${
                    open ? "transform -rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-sm text-gray-500 shadow-sm border-t-0 border-l border-r border-b border-gray-100">
                  可以進行簡易的編輯，內建 5
                  種濾鏡，影片秒數有3秒、5秒、10秒可以選擇，拍完的當下可以編輯要印出來的影片範圍哦！
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-4 border border-gray-100 rounded flex justify-between items-center w-full px-4 py-2 text-sm font-normal text-gray-500 bg-light-100 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <div className="flex items-center">
                  <div className="w-8 p-2 bg-yellow-300 font-baloo rounded mr-2">
                    Q2
                  </div>
                  <span className="text-left">有提供保固或維修服務嗎？</span>
                </div>
                <ChevronDownIcon
                  className={`${
                    open ? "transform -rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-sm text-gray-500 shadow-sm border-t-0 border-l border-r border-b border-gray-100">
                  提供產品售後服務，對產品本體(不含配件、線材)提供二年保固服務。產品因意外或人為不當使用或未經授權維修等非依使用手冊使用而造成產品損壞者，則不在保固範圍之內，得向客戶酌收產品維修服務費用。
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="mt-4 border border-gray-100 rounded flex justify-between items-center w-full px-4 py-2 text-sm font-normal text-gray-500 bg-light-100 hover:bg-yellow-200 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus-visible:ring-opacity-75">
                <div className="flex items-center">
                  <div className="w-8 p-2 bg-yellow-300 font-baloo rounded mr-2">
                    Q3
                  </div>
                  <span className="text-left">補充包底片要去哪裡購買呢？</span>
                </div>
                <ChevronDownIcon
                  className={`${
                    open ? "transform -rotate-180" : ""
                  } w-5 h-5 text-gray-500`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="bg-white px-4 pt-4 pb-2 text-sm text-gray-500 shadow-sm border-t-0 border-l border-r border-b border-gray-100">
                本產品可以兼容 i-type 及 600 相片，各大網路平台皆有販售。
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
};

export default Faq;
