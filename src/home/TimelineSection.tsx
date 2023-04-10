import TimelineCard from "../components/TimelineCard";

export const TimelineSection = () => {
  return (
    <section className="timeline-home-section" id="timeline">
      <div className="timeline-home-container">
        <h1 className="timeline-home-heading" id="timeline-home-heading">
          Timelines
        </h1>
        <div className="timeline-cards">
          <TimelineCard
            title="Broad Street Line"
            image="./images/bsl.jpg"
            link="/bsl-timeline"
          />
          <TimelineCard
            title="Market-Frankford Line"
            image="./images/mfl.jpg"
            link="/mfl-timeline"
          />
          <TimelineCard
            title="Trolleys"
            image="./images/trolley.jpg"
            link="/trolley-timeline"
          />
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
