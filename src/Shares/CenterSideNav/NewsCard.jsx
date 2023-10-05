import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const {_id, title, image_url, details } = news;

  return (
    <div className="card card-compact bg-base-100 rounded-sm shadow-xl">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {
            details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`}   className="text-blue-600 font-bold">Details</Link></p>
            : <p>{details}</p>
        }
      </div>
    </div>
  );
};

export default NewsCard;
NewsCard.propTypes = {
  news: PropTypes.object,
};
