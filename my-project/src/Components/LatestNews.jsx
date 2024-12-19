import React from 'react';

const LatestNews = () => {
  const newsData = [
    { id: 1, title: 'News Title 1', description: 'good', image: 'https://www.y-axis.com/assets/cms/2023-09/Counseling.webp' },
    { id: 2, title: 'News Title 2', description: 'Brief 1', image: 'https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp' },
    { id: 3, title: 'News Title 3', description: 'news 3', image: 'https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp' },
    { id: 4, title: 'News Title 4', description: 'news 4', image: 'https://www.y-axis.com/assets/cms/2024-12/Can%20I%20get%20Canadian%20citizenship%20after%20completing%20my%20studies.webp' },
    { id: 5, title: 'News Title 5', description: 'news 5', image: 'https://www.y-axis.com/assets/cms/2023-09/Counseling.webp' },
    { id: 6, title: 'News Title 6', description: ' 6', image: 'https://www.y-axis.com/assets/cms/2023-09/Counseling.webp' },
  ];

  return (
    <div className=" container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white border hover:border-red-500 overflow-hidden transition-shadow duration-300"
          >
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-96 bg-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{news.title}</h3>
              <p className="text-gray-600 text-sm">{news.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
