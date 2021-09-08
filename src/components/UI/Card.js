/*
 * @Date: 2021-09-04 15:30:25
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-04 15:36:46
 * @FilePath: /website-funds/src/components/UI/Card.js
 */
import React from 'react';

const Card = (props) => {
  return(
    <div className="border rounded-lg border-gray-300 pb-4 mt-4">
      {props.children}
    </div>
  )
}

export default Card;