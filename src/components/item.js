import { ImPriceTag } from "react-icons/im";

const Item = ({ title, imageSrc, price }) => {
  return (
    <div className="item-card">
      <img src={imageSrc} alt="img" className="item" />
      <h4>{title}</h4>

      <p>
        <ImPriceTag /> {price}
      </p>
    </div>
  );
};

export default Item;
