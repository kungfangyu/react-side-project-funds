/*
 * @Date: 2021-07-08 10:53:57
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-04 17:30:43
 * @FilePath: /website-funds/src/components/Header.js
 */
import { useState } from 'react'
import logo from '../assets/images/logo.jpg';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(true)

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div className="border-b-2 border-yellow-300 fixed bg-white w-full z-20">
      <header className="container flex items-center justify-between py-4 ">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-28" />
          <ul className="menu ml-16 hidden md:hidden lg:flex">
            <li className="text-base text-gray-400 mr-8">關於</li>
            <li className="text-base text-gray-400 mr-8">挖寶</li>
            <li className="text-base text-gray-400 mr-8">我有個大膽的想法</li>
          </ul>
        </div>
        <ul className="hidden ml-16 md:flex lg:flex">
          <li className="mr-4">
            <button className="btn btn-yellow" onClick={openModal}>登入</button>
          </li>
          <li className="mr-4">
            <button className="btn btn-outline-gray">註冊</button>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Header;