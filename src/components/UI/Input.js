/*
 * @Date: 2021-09-04 15:12:40
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-04 15:25:57
 * @FilePath: /website-funds/src/components/UI/Input.js
 */

import React from 'react';


const Input = (props) => {

  return (
    <input
      type={props.type}
      class="mt-2 py-2 px-2 block w-full rounded-md bg-gray-100 border-transparent ring-offset-0 focus:ring-4 ring-yellow-500 ring-opacity-50"
      placeholder={props.placeholder}
    />
  );
}

export default Input;