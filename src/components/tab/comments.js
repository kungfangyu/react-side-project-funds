/*
 * @Date: 2021-07-19 19:16:57
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-07-25 21:48:56
 * @FilePath: /website-funds/src/components/tab/comments.js
 */
import React from 'react';
import userImg from '../../assets/images/user_img.jpg'

const Comments = () => {
  return (
    <div>
      <div className="bg-gray-50 border-l-2 border-yellow-300 rounded-sm p-4">
        <p className="text-primary text-sm font-light">只有本專案的贊助者才可以留言哦，如果有任何專案相關的問題，歡迎<a href="#" className="text-orange">聯絡提案人</a>！</p>
      </div>
      <div className="comment-card">
          <div className="flex items-center">
            <img src={userImg} className="" alt="" />
            <div className="ml-4">
              <p className="text-primary text-lg font-medium">攝影大哥</p>
              <p className="text-secondary text-sm font-light">2020年5月22日 11:32</p>
            </div>
          </div>
          <p className="mt-6 text-primary font-light">晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！</p>
          <div className="mt-4 bg-gray-50 p-4">
            <p className="text-orange text-sm font-light">提案者回覆</p>
            <p className="mt-2 text-primary">你要嘛起床的時候開燈，要嘛給我們更多錢開發阿</p>
          </div>
      </div>
      <div className="comment-card">
          <div className="flex items-center">
            <img src={userImg} className="" alt="" />
            <div className="ml-4">
              <p className="text-primary text-lg font-medium">攝影大哥</p>
              <p className="text-secondary text-sm font-light">2020年5月22日 11:32</p>
            </div>
          </div>
          <p className="mt-6 text-primary font-light">晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！</p>
      </div>
      <div className="comment-card">
          <div className="flex items-center">
            <img src={userImg} className="" alt="" />
            <div className="ml-4">
              <p className="text-primary text-lg font-medium">攝影大哥</p>
              <p className="text-secondary text-sm font-light">2020年5月22日 11:32</p>
            </div>
          </div>
          <p className="mt-6 text-primary font-light">晚上起床上廁所看到照片裡的人一直動其實有點恐怖，希望可以有暫停或是定時的功能！</p>
          <div className="mt-4 bg-gray-50 p-4">
            <p className="text-orange text-sm font-light">提案者回覆</p>
            <p className="mt-2 text-primary">你要嘛起床的時候開燈，要嘛給我們更多錢開發阿</p>
          </div>
      </div>
    </div>
  );
};

export default Comments;
