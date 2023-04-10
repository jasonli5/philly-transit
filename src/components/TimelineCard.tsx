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
    <a className="timeline-card" href={link}>
      <div className="timeline-card-image">
        <img src={image} />
      </div>
      <h1>{title}</h1>
    </a>
  );
};

export default TimelineCard;
