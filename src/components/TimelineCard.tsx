import { Link } from "react-router-dom";

interface TimelineCard {
  title: string;
  image: string;
  link: string;
}

export const TimelineCard: React.FC<TimelineCard> = ({
  title,
  image,
  link,
}) => {
  return (
    <Link to={link} className="timeline-card">
      <div className="timeline-card-image">
        <img src={image} />
      </div>
      <h1>{title}</h1>
    </Link>
  );
};

export default TimelineCard;
