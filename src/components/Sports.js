import axios from 'axios';
import React, { useState,useEffect } from 'react'

function Sports() {
   const[news,setNews]=useState([]);
   const[showContent,setShowContent]=useState(null);
   
useEffect(() => {
    axios.get("https://gnews.io/api/v4/top-headlines?category=sports&country=in&lang=en&apikey=7ed8d7948f59d29ca9b6d14065a654b8")
    .then((res)=>{
        setNews(res.data.articles);
    })
    .catch((error) => {
        console.error(error); // Handle errors if any
      });
},[]);
 
const toggleContent=(content)=>{
setShowContent(content===showContent ?null : content);
}


  return (
    <div class="p-10">  
    {news.map((article,index) =>(
        <div key={index} class="max-w-sm rounded overflow-hidden shadow-lg" style={{ display: 'inline-block', marginRight: '10px', marginBottom: '15px' }}>
      <img class="w-full" src={article.image} alt={article.title}/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{article.title}</div>
        <p class="text-gray-700 text-base">
          {article.description}
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{article.source.name}</span>
        <span class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            <button onClick={()=>toggleContent(article.content)}>Read More</button>
        </span>

{showContent===article.content && (
    <div className="mt-2">
        <p>{article.content}</p>
    </div>
)}

      </div>
    </div>
    ))}
    
  </div>
  )
}

export default Sports
