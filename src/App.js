/*
 * @Date: 2021-07-04 18:23:39
 * @LastEditors: Fane Kung
 * @LastEditTime: 2021-09-08 20:23:18
 * @FilePath: /react-side-project/src/App.js
 */
import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import FoundNav from './components/FoundNav';
import PricingCard from './components/PricingCard';
import SponsorForm from './components/SponsorForm';
import Footer from './components/Footer';
import LoginDialog from './components/LoginDialog';

import './App.css';
import '../src/style/base.scss';

import storeImg from '../src/assets/images/store_img.jpg';
import Intro from '../src/components/tab/intro.js';
import Faq from '../src/components/tab/faq.js';
import News from '../src/components/tab/news.js';
import Comments from '../src/components/tab/comments.js';

const App = () => {

  return (
    <div>
      <div className="border-b-2 border-yellow-300 fixed bg-white w-full z-20">
      </div>
      <Header/>
      <Banner /> 
        <FoundNav />
        <div
          id="main"
          className="container pt-8 pb-12 grid lg:grid-cols-3 lg:gap-12"
        >
          <div className="lg:col-span-2">
            <Switch>
              <Route path="/react-side-project-funds">
                <Redirect to="/tab/intro"/>
              </Route>
              <Route path="/tab/intro" exact component={Intro} />
              <Route path="/tab/faq" exact component={Faq} />
              <Route path="/tab/news" exact component={News} />
              <Route path="/tab/comments" exact component={Comments} />
            </Switch>
            <SponsorForm />
          </div>
          <div className="lg:block lg:col-span-1">
            <div className="contact-card border border-gray-200 rounded-lg p-4">
              <div className="flex items-center">
                <div className="w-[100px] h-[100px] border-2 border-yellow-300 rounded-full overflow-hidden">
                  <img src={storeImg} class="" alt="" />
                </div>
                <div className="ml-4">
                  <p className="text-xl">???????????????</p>
                  <p>????????? 1 ?????????</p>
                </div>
              </div>
              <p className="mt-4 font-light">
                ?????????????????????????????????????????????????????????????????????
              </p>
              <div className="mt-4 flex justify-between">
                <a></a>
                <div className="ml-4">
                  <button className="btn btn-secondary w-auto px-4 py-1.5 border text-xs">
                    <i class="fas fa-comment-dots mr-2"></i>????????????
                  </button>
                </div>
              </div>
            </div>

            <div className="my-6 py-2 bg-gray-50 border-l-4 border-r-4 border-yellow-300 rounded-md">
              <h3 className="text-center text-xl font-bold text-gray-600 tracking-[1.6px]">???????????????????????????</h3>
            </div>

            <PricingCard />
            <PricingCard />
            <PricingCard />
          </div>
        </div>
        <Footer />
        
        <LoginDialog />
    </div>
  );
}


export default App;
