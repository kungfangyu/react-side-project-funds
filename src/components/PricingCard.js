/*
 * @Date: 2021-07-23 17:29:24
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-04 15:33:25
 * @FilePath: /website-funds/src/components/PricingCard.js
 */
import Card from './UI/Card';
import cardImg from '../assets/images/plan_img.jpg';

const PricingCard = (props) => {
  return(
    <Card>
      <img src={cardImg} className="" alt="" />
      <div className="p-4 border-gray-300 flex justify-between">
        <h4>限時優惠</h4>
        <p className="text-right">2 Days 20:05:00</p>
      </div>
      <hr className="w-11/12 mx-auto"></hr>
      <div className="p-4">
        <h2 className="plan-title text-xl font-medium tracking-[1.6px]">買一送一，只有兩組別錯過</h2>
        <h2 className="plan-title text-2xl font-bold font-baloo my-2">NT$ 1600</h2>
        <div className="flex">
          <div className="label py-2 px-2 w-24 mr-2 text-center">限量<span className="text-yellow-300">200</span>個</div>
          <div className="label-light py-2 px-2 w-24">已被贊助88次</div>
        </div>
        <p className="font-light text-justify">受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女。</p>
        <button className="main-btn mt-4">贊助此專案</button>
      </div>      
    </Card>
  )
}

export default PricingCard;