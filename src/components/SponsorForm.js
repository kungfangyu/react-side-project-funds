/*
 * @Date: 2021-07-23 18:22:20
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-08 19:08:28
 * @FilePath: /website-funds/src/components/SponsorForm.js
 */
import heart from '../assets/images/icon_heart.svg'
import Input from './UI/Input';
// import useInput from '../hooks/use-input';


const SponsorForm = (props) => {
  // const isNotEmpty = value => value.trim() !== '';
  // const isNotPhoneNum = (value) => {
  //   const phoneReg = /^(09)[0-9]{8}$/;
  //   value.trim().match(phoneReg) ? true : false
  // }
  // const isNotEmail = value => value.trim() !== '' && value.includes('@');


  // let formIsValid = false;

  // const onSubmitHandler = event => {
  //   event.preventDefault();
  //   if(!formIsValid){
  //     return;
  //   }
  // }

  return (
    <div className="mt-8 pb-12">
      <div className="text-center">
        <img className="mx-auto" src={heart} alt="" />
        <div className="relative h-20">
          <div className="h-1 w-full bg-yellow-300 absolute top-12"></div>
          <h2 className="sponsor-title">贊助專案</h2>
        </div>

        <form>
          <div class="grid grid-cols-1 gap-6">
            <label class="grid">
              <span class="text-left text-gray-700">贊助方案</span>
              <select class="block w-full mt-2 py-2 px-2 rounded-md bg-gray-100 border-transparent ring-offset-0 focus:ring-4 ring-yellow-500 ring-opacity-50">
                <option value="">請選擇一個方案</option>
                <option value="1" selected>方案1</option>
                <option value="2">方案2</option>
              </select>
            </label>
            <label class="grid">
              <span class="text-left text-gray-700">收件人姓名</span>
              <Input type='text' placeholder='請輸入姓名'/>
            </label>
            <label class="grid">
              <span class="text-left text-gray-700">聯絡電話</span>
              <Input type='tel' placeholder='請輸入聯絡電話'/>
            </label>
            <label class="grid">
              <span class="text-left text-gray-700">連絡信箱</span>
              <Input type='email' placeholder='請輸入e-mail'/>
            </label>
            <label class="grid">
              <span class="text-left text-gray-700">付款方式</span>
              <select class="block w-full mt-2 py-2 px-2 rounded-md bg-gray-100 border-transparent ring-offset-0 focus:ring-4 ring-yellow-500 ring-opacity-50">
                <option>信用卡付款</option>
                <option>ATM 轉帳</option>
                <option>現金</option>
              </select>
            </label>
            <button class="mt-6 mx-auto btn btn-yellow btn-lg  w-60 lg:w-auto lg:px-12 lg:py-3 text-base lg:text-xl" type="submit">
              贊助專案
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SponsorForm; 