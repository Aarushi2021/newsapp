import axios from "axios";
import React, { useEffect, useState } from "react";

function Entertainment() {
  const [news, setNews] = useState([]);

  const [showContent, setShowContent] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://gnews.io/api/v4/top-headlines?category=entertainment&country=in&lang=en&apikey=7ed8d7948f59d29ca9b6d14065a654b8"
      )
      .then((res) => {
        // console.log(res.data.articles); // Log the data here
        setNews(res.data.articles);
      })
      .catch((error) => {
        console.error(error); // Handle errors if any
      });
  }, []);

  const toggleContent = (content) => {
    setShowContent(content === showContent ? null : content);
  };

  return (
    <div className="p-10" id="one">
      {
        news.map((article, index) => (
        <div
          key={index}
          className="max-w-sm rounded overflow-hidden shadow-lg"
          style={{
            display: "inline-block",
            marginRight: "10px",
            marginBottom: "15px",
          }}
        >
          <img className="w-full" src={article.image} alt={article.title} />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{article.title}</div>
            <p className="text-gray-700 text-base">{article.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {article.source.name}
            </span>
            <span className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              <button onClick={() => toggleContent(article.content)}>
                Read More
              </button>
            </span>
            {showContent === article.content && (
              <div className="mt-2">
                <p>{article.content}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Entertainment;
