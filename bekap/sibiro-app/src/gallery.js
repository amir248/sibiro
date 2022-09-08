import React, { Component } from 'react';
import './gallery.css';
import Img1 from '../gallery/oneDa.png';
import Img2 from '../gallery/oneDan.png';
import Img3 from '../gallery/oneDs.png';
import Img4 from '../gallery/oneDsa.png';
import Img5 from '../gallery/oneDt.png';
import Img6 from '../gallery/oneKuh.png';
import Img7 from '../gallery/oneTwon.png';
import Img8 from '../gallery/oneUs.png';
import Img9 from '../gallery/oneUY.png';
import Img10 from '../gallery/oneUs.png';
import Img11 from '../gallery/oneYt.png';
import Img12 from '../gallery/oneSgib.png';

import Img13 from '../gallery/aprl.jpg';
import Img14 from '../gallery/aprl2.jpg';
import Img15 from '../gallery/aprl3.jpg';
import Img16 from '../gallery/aprl4.jpg';
import Img17 from '../gallery/aprl7.jpg';
import Img18 from '../gallery/aprl8.jpg';
import Img19 from '../gallery/aprl9.jpg';
import Img20 from '../gallery/aprl10.jpg';
import Img21 from '../gallery/aprl11.jpg';
import Img22 from '../gallery/aprl12.jpg';
import Img23 from '../gallery/aprl13.jpg';
import Img24 from '../gallery/aprl14.jpg';
import Img25 from '../gallery/aprl15.jpg';
import Img26 from '../gallery/aprl16.jpg';
import Img27 from '../gallery/aprl17.jpg';
import Img28 from '../gallery/yr1.jpg';
import Img29 from '../gallery/yr2.jpg';
import Img30 from '../gallery/yr3.jpg';
import Img31 from '../gallery/yr4.jpg';
import Img32 from '../gallery/yr5.jpg';
import Img33 from '../gallery/yr6.jpg';
import Img34 from '../gallery/yr7.jpg';
import Img35 from '../gallery/yr8.jpg';

import Img36 from '../gallery/tulaKitchen/image0007.jpg';
import Img37 from '../gallery/tulaKitchen/image0010.jpg';
import Img38 from '../gallery/tulaKitchen/image0011.jpg';
import Img39 from '../gallery/tulaKitchen/image0012.jpg';
import Img40 from '../gallery/tulaKitchen/image0014.jpg';
import Img41 from '../gallery/tulaKitchen/image0015.jpg';
import Img42 from '../gallery/tulaKitchen/image0018.jpg';
import Img43 from '../gallery/tulaKitchen/image0019.jpg';
import Img44 from '../gallery/tulaKitchen/image0027.jpg';
import Img45 from '../gallery/tulaKitchen/image0028.jpg';
import Img46 from '../gallery/tulaKitchen/image0029.jpg';

import Img47 from '../gallery/newPic/skaf_01.jpg';
import Img48 from '../gallery/newPic/skaF_02.jpg';
import Img49 from '../gallery/newPic/skaS_03.jpg';
import Img50 from '../gallery/newPic/skaV_04.jpg';

const IMG=[{
    "count":"0",
    "alt":"Встраиваемая кухня",
    "src":Img1,
    "hash": "kitchen",
    "title": "заказать кухню"
    },{
    "count":'1',
    "alt":"Модульная кухня",
    "src":Img2,
    "hash": "kitchenNew",
    "title": "Кухня на заказ"
    },{
    "count":'2',
    "alt":"Кхня на заказ",
    "src":Img3,
    "hash": "kitchenTwo",
    "title": "Good things Are going to Happen"
  },{
  "count":'3',
  "alt":"встраиваемая кухня",
  "src":Img4,
  "hash": "kitchenThree",
  "title": "Good things Are going to Happen"
  },{
  "count":'4',
  "alt":"встраиваемая кухня",
  "src":Img5,
  "hash": "kitchenThre",
  "title": "Good things Are going to Happen"
  },{
  "count":'5',
  "alt":"встраиваемая кухня",
  "src":Img6,
  "hash": "kitchenN",
  "title": "Good things Are going to Happen"
  },{
  "count":'6',
  "alt":"встраиваемая кухня",
  "src":Img7,
  "hash": "kitchen-",
  "title": "встраиваемая кухняn"
  },{
  "count":'7',
  "alt":"встраиваемая кухня",
  "src":Img8,
  "hash": "kitchenU",
  "title": "встраиваемая кухня"
  },{
  "count":'8',
  "alt":"встраиваемая кухня",
  "src":Img9,
  "hash": "kitchenh",
  "title": "Good things Are going to Happen"
  },{
  "count":'9',
  "alt":"встраиваемая кухня",
  "src":Img10,
  "hash": "kitchenhee",
  "title": "встраиваемая кухня"
  },{
  "count":'10',
  "alt":"встраиваемая кухня",
  "src":Img11,
  "hash": "kitchenhe",
  "title": "Good things Are going to Happen"
  },{
  "count":'11',
  "alt":"встраиваемая кухня",
  "src":Img12,
  "hash": "kitchenT",
  "title": "Good things Are going to Happen"
},{
"count":'12',
"alt":"встраиваемая кухня",
"src":Img13,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'13',
"alt":"встраиваемая кухня",
"src":Img14,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'14',
"alt":"встраиваемая кухня",
"src":Img15,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'15',
"alt":"встраиваемая кухня",
"src":Img16,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'16',
"alt":"встраиваемая кухня",
"src":Img17,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'17',
"alt":"Кухня под заказ",
"src":Img18,
"hash": "kitchenT",
"title": "Встраиваемые кухни"
},{
"count":'18',
"alt":"Шкафы, для балкона",
"src":Img19,
"hash": "kitchenT",
"title": "мебель на балкон"
},{
"count":'19',
"alt":"книжные полки, стелажи",
"src":Img20,
"hash": "kitchenT",
"title": "книжные полки"
},{
"count":'20',
"alt":"мебель на балкон",
"src":Img21,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'21',
"alt":"рабочий стол",
"src":Img22,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'22',
"alt":"встраиваемая планировка",
"src":Img23,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'23',
"alt":"рабочий стол на балконе",
"src":Img24,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'24',
"alt":"большая кухня",
"src":Img25,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'25',
"alt":"Удобная кухня",
"src":Img26,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'26',
"alt":"встраиваемая кухня",
"src":Img27,
"hash": "kitchenT",
"title": "Good things Are going to Happen"
},{
"count":'27',
"alt":"Удобная кухня",  // Re
"src":Img28,
"hash": "mebel",
"title": "Корпусная мебель под заказ"
},{
"count":'28',
"alt":"Удобная кухня",
"src":Img29,
"hash": "mebel_Kitchen",
"title": "Заказать кухню"
},{
"count":'29',
"alt":"Удобная кухня",
"src":Img30,
"hash": "mebel_ri",
"title": "Кухни под заказ"
},{
"count":'30',
"alt":"Удобная кухня",
"src":Img31,
"hash": "mebel_ro",
"title": "Корпусная мебель под заказ"
},{
"count":'31',
"alt":"Удобная кухня",
"src":Img32,
"hash": "mebel_meb",
"title": "Корпусная мебель под заказ"
},{
"count":'32',
"alt":"Удобная кухня",
"src":Img33,
"hash": "mebel_kyhni",
"title": "Корпусная мебель под заказ"
},{
"count":'33',
"alt":"Удобная кухня",
"src":Img34,
"hash": "mebel_kitcheN",
"title": "Корпусная мебель под заказ"
},{
"count":'34',
"alt":"Удобная кухня",
"src":Img35,
"hash": "mebel_7",
"title": "Корпусная мебель под заказ"
},{
"count":'35',
"alt":"Тульская кухня",
"src":Img36,
"hash": "tulaKitchen",
"title": "Тульская Кухня под заказ"
},{
"count":'36',
"alt":"Тульская кухня",
"src":Img37,
"hash": "tulaKitchen_1",
"title": "Тульская кухня под заказ"
},{
"count":'37',
"alt":"Тульская кухня",
"src":Img38,
"hash": "tulaKitchen_2",
"title": "Тульская кухня под заказ"
},{
"count":'38',
"alt":"Тульская кухня",
"src":Img39,
"hash": "tulaKitchen_3",
"title": "Тульская кухня под заказ"
},{
"count":'39',
"alt":"Тульская кухня",
"src":Img40,
"hash": "tulaKitchen_4",
"title": "Тульская кухня под заказ"
},{
"count":'40',
"alt":"Тульская кухня",
"src":Img41,
"hash": "tulaKitchen_5",
"title": "Тульская кухня под заказ"
},{
"count":'41',
"alt":"Тульская кухня",
"src":Img42,
"hash": "tulaKitchen_6",
"title": "Тульская кухня под заказ"
},{
"count":'42',
"alt":"Тульская кухня",
"src":Img43,
"hash": "tulaKitchen_7",
"title": "Тульская кухня под заказ"
},{
"count":'43',
"alt":"Тульская кухня",
"src":Img44,
"hash": "tulaKitchen_8",
"title": "Тульская кухня под заказ"
},{
"count":'44',
"alt":"Тульская кухня",
"src":Img45,
"hash": "tulaKitchen_9",
"title": "Тульская кухня под заказ"
},{
"count":'45',
"alt":"Тульская кухня",
"src":Img46,
"hash": "tulaKitchen_10",
"title": "Тульская кухня под заказ"
},{
"count":'46',
"alt":"Shkaf",
"src":Img47,
"hash": "shkaf",
"title": "Встраиваемые шакафы"
},{
"count":'47',
"alt":"Shkaf",
"src":Img48,
"hash": "shkaF",
"title": "Встраиваемые шакафы"
},{
"count":'48',
"alt":"Shkaf",
"src":Img49,
"hash": "shkaS",
"title": "Встраиваемые шакафы"
},{
"count":'49',
"alt":"Shkaf",
"src":Img50,
"hash": "shkaV",
"title": "Встраиваемые шакафы"

}];


const WIW=window.innerWidth<800;
const onLd=()=>{
  if(WIW){
    document.querySelector('#Phot2').style.cssText=`display:none;`
    document.querySelector('#Phot3').style.cssText=`display:none;`
  }
}

  let Cl=11; // Вторая фотка
  const Clicker=()=>{
    // console.log("FC Click"+Cl);
    Cl++;
    // body > main > gallery > img:nth-child(5)
    if(WIW){
      for(let Oj=0;Oj<IMG.length;Oj++){
      if(Cl===Oj){
          document.querySelector('#Photo').setAttribute('src', IMG[Oj].src);
          document.querySelector('#Photo').setAttribute('alt', IMG[Oj].alt);
          document.querySelector('#Photo').setAttribute('title', IMG[Oj].title);
      }else{
          if(Cl===IMG.length){
            Cl=0;
          }
        }
      }
    }
  }


const Cocl={
  one:0,
  two:1,
  three:2
}

  const buttonS=()=>{
    if(!WIW){
      document.querySelector('#butL').innerHTML=`<`;
      document.querySelector('#butR').innerHTML=`>`;
    }
  }
  const butL=()=>{
    Cocl.one--;
    Cocl.two--;
    Cocl.three--;
    if(Cocl.one===0||Cocl.one===-1){
      Cocl.one=IMG.length-1;
    }else if(Cocl.two===0||Cocl.two===-1){
      Cocl.two=IMG.length-1;
    }else if(Cocl.three===0||Cocl.three===-1){
      Cocl.three=IMG.length-1;
    }
    // console.log(Cocl.one+" "+Cocl.two+" "+Cocl.three+" "+IMG.length);
    document.querySelector('#Photo').setAttribute('src', IMG[Cocl.one].src);
    document.querySelector('#Photo').setAttribute('alt', IMG[Cocl.one].alt);
    document.querySelector('#Photo').setAttribute('title', IMG[Cocl.one].title);

    document.querySelector('#Phot2').setAttribute('src', IMG[Cocl.two].src);
    document.querySelector('#Phot2').setAttribute('alt', IMG[Cocl.two].alt);
    document.querySelector('#Phot2').setAttribute('title', IMG[Cocl.two].title);

    document.querySelector('#Phot3').setAttribute('src', IMG[Cocl.three].src);
    document.querySelector('#Phot3').setAttribute('alt', IMG[Cocl.three].alt);
    document.querySelector('#Phot3').setAttribute('title', IMG[Cocl.three].title);
  }
  const butR=()=>{
    Cocl.one++;
    Cocl.two++;
    Cocl.three++;
    // console.log(Cocl.one+" "+Cocl.two+" "+Cocl.three+" "+IMG.length);

    if(Cocl.three===IMG.length||Cocl.three>IMG.length){
      Cocl.three=0;
    }else if(Cocl.two===IMG.length||Cocl.two>IMG.length){
      Cocl.two=0;
    }else if(Cocl.one===IMG.length||Cocl.one>IMG.length){
      Cocl.one=0;
    }
    document.querySelector('#Photo').setAttribute('src', IMG[Cocl.one].src);
    document.querySelector('#Photo').setAttribute('alt', IMG[Cocl.one].alt);
    document.querySelector('#Photo').setAttribute('title', IMG[Cocl.one].title);

    document.querySelector('#Phot2').setAttribute('src', IMG[Cocl.two].src);
    document.querySelector('#Phot2').setAttribute('alt', IMG[Cocl.two].alt);
    document.querySelector('#Phot2').setAttribute('title', IMG[Cocl.two].title);

    document.querySelector('#Phot3').setAttribute('src', IMG[Cocl.three].src);
    document.querySelector('#Phot3').setAttribute('alt', IMG[Cocl.three].alt);
    document.querySelector('#Phot3').setAttribute('title', IMG[Cocl.three].title);
  }
class Gallery extends Component {

  render() {
    return (
      <React.Fragment>
      <h1 id="gallery" style={{width:"100%",textAlign:"center"}}>Фотографии</h1>
      <p style={{width:"100%",textAlign:"center"}}>Установленной корпусной мебели на заказ, в домах довольных заказчиков.</p>
      <span id="butL" onClick={butL}></span>
      <img src={IMG[Cocl.one].src} alt={IMG[Cocl.one].alt} title={IMG[Cocl.one].title} onLoad={onLd} onClick={Clicker} id="Photo"/>
      <img src={IMG[Cocl.two].src} alt={IMG[Cocl.two].alt} title={IMG[Cocl.two].title} id="Phot2"onLoad={buttonS}/>
      <img src={IMG[Cocl.three].src} alt={IMG[Cocl.three].alt} title={IMG[Cocl.three].title} id="Phot3"/>
      <span id="butR" onClick={butR}></span>
      </React.Fragment>
    );
  }
}

export default Gallery;
