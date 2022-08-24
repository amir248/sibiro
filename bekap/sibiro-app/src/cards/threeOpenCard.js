import React, { Component } from 'react';
import './openCard.css';
import ThreeImg from './images/torg.JPG';


class ThreeOpenCard extends Component {

  handleClickThree(){
    // console.log("Клил this: ", this);
    let New = document.createElement('div');
    // New.innerHTML="oooK";
    document.querySelector('#threeEl').append(New);
    document.querySelector('#threeEl').style.cssText=`
      display:flex;
      justify-content:center;
      align-items:center;
      position:fixed;
      top:1px;
      flex-direction:column;
      width:100%;
      max-width:100%;`

    document.querySelector('#ClosedThree').style.cssText=`
      color:firebrick;
      font-size:30px;
    `;
    document.querySelector('body').style.cssText=`overflow:hidden`;
    document.querySelectorAll('.boxCart')[2].style.cssText=`width:100%;

    `
    // document.querySelector('#newEl').setAttribute('id','Closed');
        document.querySelector('#ClosedThree').addEventListener('click',()=>{
          New.remove();
          document.querySelector('body').style.cssText=`overflow:auto;`
          document.querySelector('#threeEl').style.cssText=`display:none;
        `;
        document.querySelectorAll('.boxCart')[2].style.cssText=`
        width:240px;
        display: flex;
            -ms-flex-pack: center;
            justify-content: center;
            -ms-flex-align: center;
            align-items: center;
            width: 240px;
            max-width: 100%;
            -ms-flex-direction: column;
            flex-direction: column;
            color: white;
            text-shadow: 1px 1px black;
        `
      });
    // document.querySelector('#newEl').addEventListener('click',()=>{
    //   New.remove();
    //   document.querySelector('body').style.cssText=`overflow:auto;`
    //   document.querySelector('#newEl').style.cssText=`display:none;
    // `;
    // });
  }
  render() {
    return (
      <React.Fragment>
      <p id="threeEl">
        <img src={ThreeImg} alt="img"/>
        <p style={{margin:'3%',fontSize:"20px"}}>Торговое оборудование</p>
        <p style={{margin:'3%',fontSize:"20px"}}>Ресепшены, барные стойки, выставочные стелажи.</p>
        <span id='ClosedThree'>X</span>
      </p>
        <button onClick={()=>this.handleClickThree()}>Описание</button>

      </React.Fragment>
    );
  }
}

export default ThreeOpenCard;
