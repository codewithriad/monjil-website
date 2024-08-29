/* eslint-disable react/prop-types */
import './CardComponent.css';

const CardComponent = ({src,title,description}) => {
  return (
    <>
      <div className="card">
        <div className="box">
          <img src={src} alt="card-image" />
        </div>
        <div className="details">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
