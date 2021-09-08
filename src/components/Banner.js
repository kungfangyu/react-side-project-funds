/*
 * @Date: 2021-07-11 13:43:56
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-07-28 19:43:22
 * @FilePath: /website-funds/src/components/Banner.js
 */
import banner from '../../src/assets/images/product_image.jpg';
import icon1 from '../../src/assets/images/icon_good01.svg';
import icon2 from '../../src/assets/images/icon_good02.svg';
import icon3 from '../../src/assets/images/icon_good03.svg';
import icon4 from '../../src/assets/images/icon_good04.svg';

const Banner = () => {
  return (
    <div className="pt-24 md:pt-24 lg:pt-24 lg:pb-12 bg-gray-50">
        <div className="container">
          <div className="label py-2 px-4 w-8">魔法科技</div>
          <h1 className="title">拍出會動的照片｜LivePhotos 魔法拍立得</h1>
          <div className="mt-4 lg:mt-4 grid lg:grid-cols-12 gap-4 lg:gap-6">
            <div className="lg:col-span-7">
              <img src={banner} className="w-full" alt="" />
            </div>
            <div className="lg:col-span-5 pb-12">
              <p className="text-gray-600 text-sm">目標 $1000,000</p>
              <p className="mt-2 title text-gray-600 font-baloo font-semibold">$280,047</p>
              <div className="mt-2 h-5 bg-gray-300 rounded-full overflow-hidden">
                <div className="bg-yellow-300 flex justify-center" style={{width:'41%'}}>
                  <span className="text-sm text-gray-500 font-semibold">40%</span>
                </div>
              </div>
              <div className="mt-2 lg:mt-2 grid grid-cols-12">
                <div className="col-span-6">
                  <p className="text-gray-500 text-sm">贊助人數</p>
                  <p className="text-2xl font-semibold mt-1"><span className="font-baloo mr-2">1500</span>人</p>
                </div>
                <div className="col-span-6 text-left">
                  <p className="text-gray-500 text-sm">招募倒數</p>
                  <p className="text-2xl font-semibold mt-1"><span className="font-baloo mr-2">25</span>天</p>
                </div>
              </div>
              <div className="icon-group flex mt-2">
                <img className="mr-4" src={icon1}></img>
                <img className="mr-4" src={icon2}></img>
                <img className="mr-4" src={icon3}></img>
                <img className="mr-4" src={icon4}></img>
              </div>
              <div className="mt-4 bg-white border-l-2 rounded-md  border-yellow-300 pt-4 pb-4 pl-2">
                <p className="text-gray-500">專案募資中！<br />在2021/06/24 23:59募資結束前，您可以贊助我們！</p>
              </div>
              <button className="main-btn mt-4">贊助專案</button>
              <div className="btn-group flex mt-2">
                <button className="main-outline-btn mr-2"><i className="fas fa-heart mr-2"></i>追蹤專案</button>
                <button className="main-outline-btn"><i class="fas fa-share-alt mr-2"></i>分享</button>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Banner;