interface TimelineProps {
  title: string;
  description: string;
  content: {
    year: string;
    description: string;
    image: { src: string; alt: string };
  }[];
  lineColor: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  title,
  description,
  content,
  lineColor,
}) => {
  return (
    <section className="timeline-section">
      <div className="timeline-container">
        <div className="timeline-heading">
          <h1 className="timeline-title">{title}</h1>
          <p className="timeline-description">{description}</p>
        </div>

        <div className="timeline-content">
          <div
            className="line"
            style={{
              borderColor: lineColor,
            }}
          >
            <span className="circle"></span>;
          </div>

          <div className="content">
            {content.map((item, index) => {
              return (
                <div
                  className={`content-box ${index % 2 == 0 ? "even" : ""}`}
                  key={index}
                >
                  <div className="content-text">
                    <h2 className="content-year">{item.year}</h2>
                    <p>{item.description}</p>
                  </div>
                  <div className="content-image">
                    <img src={item.image.src} alt={item.image.alt} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
