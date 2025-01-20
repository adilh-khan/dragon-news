import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";

const CategoryNews = () => {
    const {data: news} = useLoaderData();
    console.log(news);
    return (
      <div className="">
        <h2 className="font-semibold">Dragon News Home</h2>
            {/* <p>{news.length} News found in this category!</p> */}
            <div className="grid gap-2 mt-2">
                {
                    news.map(singleNews => <NewsCard key={singleNews._id} news={singleNews}></NewsCard>)
                }
            </div>
      </div>
    );
};

export default CategoryNews;