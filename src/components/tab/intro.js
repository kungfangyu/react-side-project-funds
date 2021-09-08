/*
 * @Date: 2021-07-19 19:16:08
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-07 20:40:04
 * @FilePath: /website-funds/src/components/tab/intro.js
 */
import React from 'react';
import { useParams } from 'react-router';
import pic01 from '../../assets/images/p1.jpg';
import pic02 from '../../assets/images/p2.jpg';

const Intro = () => {
  const params = useParams();
  return (
      <article>
        <section>
          <img src={pic01} className="w-full" alt="施了魔法的照片" />
          <h2 class="border-l-4 border-yellow-300 pl-5 mt-4 lg:mt-6 text-xl lg:text-2xl tracking-[1.6px] font-bold">
            施了魔法的照片
          </h2>
          <p class="mt-2 lg:mt-1.5 text-justify leading-8 font-light">
            受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
          </p>
        </section>
        <section>
          <img className="mt-8 lg:mt-6" className="w-full" src={pic02} alt="施了魔法的照片" />
          <h2 class="border-l-4 border-yellow-300 pl-5 mt-4 lg:mt-6 text-xl lg:text-2xl tracking-[1.6px] font-bold">
            留下當下的美好
          </h2>
          <p class="mt-2 lg:mt-1.5 text-justify leading-8 font-light">
            受就相法大夠局來畫師我只這然以放灣得的後人心年我物我年，或人有動與次出女親構算帶年行著所間女，外成認心香吸工並知日成展源大超時動為生葉衣致長山對精做英密差家他微熱建取示濟定心一，品定把別銀動，深青輪一物加，生明果。西業白老如天有表非民大條全那遊，李文遊、像香過元學須本致信校態麼資司媽人價在它，地他不我計孩廠然不大指勢生的華常簡岸然，人著母病石金萬得一果。
          </p>
        </section>
      </article>
  );
};

export default Intro;
