/* eslint-disable react/prop-types */


const Card = ({image}) => {
  return (
    <>
      <div className="card card-compact shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
            className="w-full h-[25rem]"
          />
        </figure>
        
      </div>
    </>
  );
};

export default Card;
