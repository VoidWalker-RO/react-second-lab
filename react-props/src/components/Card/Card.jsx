import "./Card.css";

function Card({ title, description, image }) {
  const handleClick = () => {
    alert(title);
  };

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-btn" onClick={handleClick}>
        Дізнатися більше
      </button>
    </div>
  );
}

export default Card;