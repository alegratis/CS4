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

  const customIcon = () => {
    if (stl === 1) {
      return "src/assets/bridge-available.svg";
    } else if (stl === 2) {
      return "src/assets/bridge-raising.svg";
    } else if (stl === 0) {
      return "src/assets/bridge-raised.svg";
    }
  };

  return (
    <div className={customStyle()}>
      <img className="icon" src={customIcon()} alt="" />
      <h3>{props.location}</h3>
      <p>
        <span className="bold">Status: </span>
        {props.status}
      </p>
    </div>
  );
}

export default Card;
