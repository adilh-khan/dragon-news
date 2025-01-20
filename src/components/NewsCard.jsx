import React from "react";
import { FaStar } from "react-icons/fa";
import { BiShareAlt } from "react-icons/bi";

const NewsCard = ({ news }) => {
  const {
    _id,
    others_info: { is_todays_pick, is_trending },
    category_id,
    rating: { number, badge },
    total_view,
    title,
    author: { name, published_date, img },
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md">
      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={img} alt="Author" className="w-10 h-10 rounded-full" />
            <div>
              <h2 className="font-bold text-sm">{name}</h2>
              <p className="text-gray-500 text-xs">{published_date}</p>
            </div>
          </div>
          <BiShareAlt className="text-gray-500 text-lg cursor-pointer" />
        </div>

        {/* Title */}
        <div className="mt-4">
          <h2 className="font-bold text-lg">{title}</h2>
        </div>

        {/* Thumbnail */}
        <div className="mt-4">
          <img
            src={thumbnail_url}
            alt="Thumbnail"
            className="rounded-lg w-full h-96  object-cover"
          />
        </div>

        {/* Details */}
        <div className="mt-2 text-gray-500 text-sm">
          {details.slice(0, 150)}...{" "}
          <span className="text-blue-500 cursor-pointer">Read More</span>
        </div>

        {/* Rating and Views */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="flex items-center text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    i < Math.round(number) ? "text-yellow-500" : "text-gray-300"
                  }
                />
              ))}
            </span>
            <span className="text-gray-500 ml-1 text-sm">
              {number} ({badge})
            </span>
          </div>
          <p className="text-gray-500 text-sm">{total_view} Views</p>
        </div>

        {/* Trending and Today's Pick Indicators */}
        <div className="mt-4 flex gap-2">
          {is_todays_pick && (
            <span className="badge badge-primary">Today's Pick</span>
          )}
          {is_trending && (
            <span className="badge bg-red-600 text-white">Trending</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
