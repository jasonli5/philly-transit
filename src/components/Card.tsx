interface CardProps {
  //   title: string;
  //   description: string;
  //   image: string;
  //   link: string;
}

export const Card: React.FC<CardProps> = (
  {
    //   title,
    //   description,
    //   image,
    //   link,
  }
) => {
  return (
    <div className="card">
      <img src="src/assets/images/cityhall.jpg" alt="" />
      <div className="card-content">
        <h2 className="card-title">Title</h2>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum.
        </p>
        <a href="#" className="card-link">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Card;
