import TimelineCard from "../components/TimelineCard";

export const TimelineSection = () => {
  return (
    <section className="timeline-section section">
      <div className="timeline-container">
        <h1 className="timeline-heading" id="timeline-heading">
          Check out the timelines
        </h1>
        <div className="timeline-cards">
          <TimelineCard
            title="Broad Street Line"
            image="/images/bsl.jpg"
            link="/bsl-timeline"
          />
          <TimelineCard
            title="Market-Frankford Line"
            image="/images/mfl.jpg"
            link="/mfl-timeline"
          />
          <TimelineCard
            title="Trolleys"
            image="/images/trolley.jpg"
            link="/trolley-timeline"
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
