import React, { Component } from 'react';

import './firstGallery.css';
import Vidos from '../video/v1.mp4';
import Vidos2 from '../video/v2.mp4';


const Vid=()=>{
  if(document.querySelector('#viv > video:nth-child(2)')){
    console.log("true");
}else{
   const videous=document.createElement('video');
   document.querySelector('#viv').append(videous);
   videous.setAttribute('src',Vidos);
   videous.setAttribute('controls', '');

   let border=document.createElement('p');
   border.style.cssText=`width:100%;`
   document.querySelector('#viv').append(border);

   let one=document.createElement('p');
   document.querySelector('#viv').append(one);
   one.style.cssText=`display:flex;justify-content:center;align-items:center;max-width:100%;width:250px;border-radius:20px;background:#77a677;height:37px;color:#7b7070;`
   one.innerHTML='Первое видео';
   one.setAttribute('id', 'twoVidos');
   let two=document.createElement('p');
   videous.setAttribute('src',Vidos);

   document.querySelector('#viv').append(two);
   two.innerHTML='Второе видео';
   two.setAttribute('id', 'twoVidos2');
   two.style.cssText=`display:flex;justify-content:center;align-items:center;max-width:100%;width:250px;border-radius:20px;background:#a4877d;height:37px;color:#7b7070;`

     document.querySelector('#twoVidos').addEventListener("click",()=>{
        videous.setAttribute('src',Vidos);
     });
     document.querySelector('#twoVidos2').addEventListener('click',()=>{
       videous.setAttribute('src',Vidos2);
     });
   }
}

class Video extends Component {
  render() {
    return (
      <React.Fragment>
      <div id="viv" style={{display:'flex',justifyContent:"center",alignItems:"center",flexWrap:"wrap"}}>
      <h2 style={{textAlign:"center",margin:"3px;",width:"100%"}} onClick={Vid}>Video<span style={{color:"green", fontSize:"15px",borderRadius:"10px",background:"rgba(255,0,0,0.3)",padding:"7px",textShadow:"1px 1px 1px black"}}>"onClick"</span></h2>
      </div>
      </React.Fragment>
    );
  }
}

export default Video;
