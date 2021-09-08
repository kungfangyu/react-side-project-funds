/*
 * @Date: 2021-07-11 16:20:39
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-07 20:49:38
 * @FilePath: /website-funds/src/components/FoundNav.js
 */
import React from 'react';
import { NavLink } from 'react-router-dom';

const FoundNav = () => {
  return(
    <div className="border-t border-b border-gray-200">
        <div className="container">
          <nav>
            <ul className="flex lg:space-x-4">
              <li  className="block p-4 lg:px-3 lg:pt-6 text-gray-600 text-sm lg:text-base">
                <NavLink to="/tab/intro" className="py-4" activeClassName="border-b-2 border-yellow-300">專案介紹</NavLink>
              </li>
              <li className="block p-4 lg:px-3 lg:pt-6 text-gray-600 text-sm lg:text-base">
                <NavLink to="/tab/faq" className="py-4" activeClassName="border-b-2 border-yellow-300">常見問答</NavLink>
              </li>
              <li className="block p-4 lg:px-3 lg:pt-6 text-gray-600 text-sm lg:text-base">
                <NavLink to="/tab/news" className="py-4" activeClassName="border-b-2 border-yellow-300">目前進度</NavLink>
              </li>
              <li className="block p-4 lg:px-3 lg:pt-6 text-gray-600 text-sm lg:text-base">
                <NavLink to="/tab/comments" className="py-4" activeClassName="border-b-2 border-yellow-300">留言</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
  )
}

export default FoundNav;