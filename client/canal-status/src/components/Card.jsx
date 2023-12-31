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
      return "/assets/bridge-available.svg";
    } else if (stl === 2) {
      return "/assets/bridge-raising.svg";
    } else if (stl === 0) {
      return "/assets/bridge-raised.svg";
    }
  };

  return (
    <div className={customStyle()}>
      <div className="icon">
        <img className="icon" src={customIcon()} alt="Bridge Icon" />
      </div>
      <div className="content">
        <h3>{props.bridge}</h3>
        <h4 className="city">({props.city})</h4>
        <p>
          <span className="bold">Status: </span>
          {props.status}
        </p>
      </div>
    </div>
  );
}

export default Card;
