/* eslint-disable react/prop-types */
import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import '../stylesheet/home.css';
import { BiWorld } from 'react-icons/bi';

const Home = (props) => {
  const { datas } = props;

  return (
    <div className="main-container">
      <div className="header">
        <div className="header-left">
          <BiWorld className="header-icon" />
        </div>
        <div className="header-right">
          <h1 className="header-h1">WorldWide</h1>
          <h4 className="header-h4">341235 cases</h4>
        </div>
      </div>

      <h5 className="home-title">STATS BY COUNTRY</h5>

      <div className="container-grid">
        {datas.map((data) => {
          const test = `/detail/${data.id}`;
          return (
            <div key={data.id} className={datas.indexOf(data) % 2 === 0 ? 'inside-flex' : 'inside-flex-bolder'}>
              <NavLink className="nav-icon" to={{ pathname: test, data }} exact>
                <AiOutlineRightCircle className="inside-up" />
              </NavLink>
              <div className="inside-down">
                <h3 className="inside-h3">{data.name}</h3>
                <div className="confirmed">
                  <h4 className="inside-h4">{data.today_confirmed}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line max-len
// eslint-disable-next-line no-lone-blocks
{ /* {datas.length % 2 == 0 ? className = 'container-grid' : className = 'y'} */ }

// const test = `/detail/${data.id}`;

// eslint-disable-next-line no-lone-blocks
{ /* <div key={data.id} className={datas.indexOf(data) % 2 === 0 ? 'inside-flex' : 'y'}> */ }

// console.log('here is my HOME data', datas);

// const onLink = () => {
//   console.log('the icon is clickable');
// };

// function isEven(n) {
//   return n % 2 === 0;
// }

// function isOdd(n) {
//   return Math.abs(n % 2) === 1;
// }
