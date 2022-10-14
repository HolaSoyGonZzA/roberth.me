import "./Card.css";

export const Card = ({ name, description, keywords, url }) => {
  return (
    <div className="card">
      <a href={url} target="_blank" rel="nofollow noopener noreferrer">
        <h3 className="card__name">{name}</h3>
        <p className="card__description">{description}</p>
        <p className="card__keywords">
          {keywords.map((keyword) => (
            <small key={keyword}>{keyword}</small>
          ))}
        </p>
      </a>
    </div>
  );
};