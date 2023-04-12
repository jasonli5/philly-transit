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
    <Link reloadDocument to={link} className="timeline-card">
      <div className="timeline-card-image">
        <img src={`philly-transit/${image}`} />
      </div>
      <h2>{title}</h2>
    </Link>
  );
};

export default TimelineCard;
