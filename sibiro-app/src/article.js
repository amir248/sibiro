import React, { Component } from 'react';

import './article.css';

// import Cart from '../images/boxOne.png';
import CartOne from '../imgCart/livingRoom.png';
import CartTwo from '../imgCart/bTwo.png';
import CartThre from '../imgCart/bThree.png';
import CartFour from '../imgCart/boxThree2.png';
import CartFive from '../imgCart/boxTwo2.png';


const windOne=()=>{
  if(window.innerWidth>1210){
    let append= document.querySelector('div.cart:nth-child(2) > img:nth-child(1)');
    document.querySelector('.cart').append(append);
  }
}

const windTwo=()=>{
  if(window.innerWidth>1210){
    let append2= document.querySelector('div.cart:nth-child(4) > img:nth-child(1)');
    document.querySelector('div.cart:nth-child(4)').append(append2);
  }
}

const windThre=()=>{
  if(window.innerWidth>1210){
    let append8= document.querySelector('div.cart:nth-child(6) > img:nth-child(1)');
    document.querySelector('div.cart:nth-child(6)').append(append8);
  }
}


class Article extends Component {
  constructor(props){
    super(props);
    this.state={
      count:0
    };
  }
  render() {
    return (
      <React.Fragment>
      <h2 id="first" style={{color:"white"}}>Планируемые решения:</h2>
      <div className="cart" id="kitchen">
        <img src={CartTwo} alt="catr" title="cart" />
        <div className="boxCart">
          <h3>Кухни под заказ</h3>
          <span style={{color:"green",fontSize:"15px"}}>Примерная стоимость</span>
          <strong>~73 000 - 130 000 руб.</strong>
          <p>Для кухни важно ежедневный комфорт. Вместительная и функциональная кухня по неповторимому дизайну.</p>
          <strong style={{padding:"3%",background:"rgba(255,255,255,0.3)",borderRadius:"10px",fontSize:"14px",marginTop:"30%",marginBottom:"15%"}}>Позвонить: <a href="tel:+79528807647" style={{color:"darkred"}}>8952 880 76 47</a></strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartThre} alt="catr" title="cart" onLoad={windTwo}/>
        <div className="boxCart">
        <h3>Модули с уникальными размерами.</h3>
          <p>Корпусная мебель по индивидуальным размерам: кухни, шкафы купе, прихожие, гостиные, детские и многое другое...</p>
          <strong style={{padding:"3%",background:"rgba(255,255,255,0.3)",borderRadius:"10px",fontSize:"14px",marginTop:"30%",marginBottom:"15%"}}>Позвонить: <a href="tel:+79528807647" style={{color:"darkred"}}>8952 880 76 47</a></strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartFour} alt="catr" title="cart" />
        <div className="boxCart">
          <h3>Торговое оборудование</h3>
          <p>Барные стойки, ресепшины, витрины.</p>
          <strong style={{padding:"3%",background:"rgba(255,255,255,0.3)",borderRadius:"10px",fontSize:"14px",marginTop:"30%",marginBottom:"15%"}}>Позвонить: <a href="tel:+79528807647" style={{color:"darkred"}}>8952 880 76 47</a></strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartFive} alt="catr" title="cart" onLoad={windThre}/>
        <div className="boxCart">
          <h3>Прихожие</h3>
          <p>Современные модели оригинальных, эргономичных, максимально лаконичных гарнитуров для прихожей. По персональным размерам.</p>
          <strong style={{padding:"3%",background:"rgba(255,255,255,0.3)",borderRadius:"10px",fontSize:"14px",marginTop:"30%",marginBottom:"15%"}}>Позвонить: <a href="tel:+79528807647" style={{color:"darkred"}}>8952 880 76 47</a></strong>
        </div>
      </div>
      <div className="cart">
        <img src={CartOne} alt="catr" title="cart" onLoad={windOne}/>
        <div className="boxCart">
          <h3>Гостиные</h3>
            <strong>От: 19 000 руб.</strong>
            <p>Мебель по индивидуальным размерам, авторский дизайн разработаный в гармонии интерьера. Пространство квартиры используется максимально эффиктивно.</p>
            <strong style={{padding:"3%",background:"rgba(255,255,255,0.3)",borderRadius:"10px",fontSize:"14px",marginTop:"30%",marginBottom:"15%"}}>Позвонить: <a href="tel:+79528807647" style={{color:"darkred"}}>8952 880 76 47</a></strong>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default Article;
