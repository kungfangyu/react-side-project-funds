/*
 * @Date: 2021-07-19 19:16:46
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-04 17:16:49
 * @FilePath: /website-funds/src/components/tab/news.js
 */
import React from 'react';
import NewsImg01 from '../../assets/images/news01.jpg';
import NewsImg02 from '../../assets/images/news02.jpg';
import NewsImg03 from '../../assets/images/news03.jpg';

const News = () => {
  return (
    <div>
      <ul>
        <li className="mb-4 border rounded-md border-gray-200 lg:flex">
          <img src={NewsImg01} className="w-full md:w-auto lg:w-auto" alt="" />
          <div className="p-4">
            <h2 className="text-primary text-lg font-semibold tracking-[0.7px] lg:tracking-[0.8px]">高雄體驗會｜免費參加送帆布袋</h2>
            <p className="text-secondary text-sm font-light font-baloo tracking-[0.49px] leading-[24px]">2021-6-20</p>
            <p className="text-secondary text-sm font-light mt-2">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
            <a href="#" className="text-orange text-md font-baloo mt-4">More</a>
          </div>
        </li>
        <li className="mb-4 border rounded-md border-gray-200 lg:flex">
          <img src={NewsImg02} className="w-full md:w-auto lg:w-auto" alt="" />
          <div className="p-4">
            <h2 className="text-primary text-lg font-semibold tracking-[0.7px] lg:tracking-[0.8px]">高雄體驗會｜免費參加送帆布袋</h2>
            <p className="text-secondary text-sm font-light font-baloo tracking-[0.49px] leading-[24px]">2021-6-20</p>
            <p className="text-secondary text-sm font-light mt-2">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
            <a href="#" className="text-orange text-md font-baloo mt-4">More</a>
          </div>
        </li>
        <li className="mb-4 border rounded-md border-gray-200 lg:flex">
          <img src={NewsImg03} className="w-full md:w-auto lg:w-auto"  alt="" />
          <div className="p-4">
            <h2 className="text-primary text-lg font-semibold tracking-[0.7px] lg:tracking-[0.8px]">高雄體驗會｜免費參加送帆布袋</h2>
            <p className="text-secondary text-sm font-light font-baloo tracking-[0.49px] leading-[24px]">2021-6-20</p>
            <p className="text-secondary text-sm font-light mt-2">大家安安！謝謝每位贊助者的熱情支持，讓我們離夢想更進一步，我們將於下個月舉辦體驗會，歡迎各位踴躍參與！</p>
            <a href="#" className="text-orange text-md font-baloo mt-4">More</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default News;