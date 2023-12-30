function Card(props) {
  const stl = props.stl;
  const customStyle = () => {
    if (stl === 1) {
      return "card";
    } else if (stl === 2) {
      return "card raising";
    } else if (stl === 0) {
      return "card raised";
    }
  };

  return (
    <div className={customStyle()}>
      <h3>{props.location}</h3>
      <p>
        <span className="bold">Status: </span>
        {props.status}
      </p>
    </div>
  );
}

export default Card;
