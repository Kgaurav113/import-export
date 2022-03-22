const getdata= async (url) =>{
  try{
   let res=await fetch(url)
   let data=await res.json()
   return data;
  }
  catch(error)
  {
      console.log("error:",error);
  }
};
const append = (data,parent) =>{
    parent.innerHTML=null;
    data.forEach(({title,image,price}) =>{
  
      let div=document.createElement('div')
      let tit=document.createElement('p')
      tit.innerText=title;
      let img=document.createElement('img')
      img.src=image;
      let pri=document.createElement('price')
      pri.innerText=price;
      div.append(img,tit,pri);
      parent.append(div);
    });
};

export {getdata,append}