import Item from "./item";

const Items = () => {
  return (
    <section className="items-container">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            title={item.name}
            imageSrc={item.img}
            price={item.price}
          />
        );
      })}
    </section>
  );
};

export default Items;

const items = [
  {
    id: 1,
    img: "../../images/A73.webp",
    name: "GALAXY A73",
    price: 24999,
  },
  {
    id: 2,
    img: "../images/Galaxy-S20.jpg",
    name: "GALAXY S20",
    price: 37600,
  },
  {
    id: 3,
    img: "../images/s21 ultra.webp",
    name: "S21 ULTRA",
    price: 49000,
  },
  {
    id: 4,
    img: "../images/S22Ultra.webp",
    name: "S22 ULTRA",
    price: 52000,
  },
  {
    id: 5,
    img: "../images/flip.webp",
    name: "GALAXY Z Flip",
    price: 114000,
  },
  {
    id: 6,
    img: "../images/samsung fold.webp",
    name: "GALAXY Fold",
    price: 125000,
  },
  {
    id: 7,
    img: "../images/F22.webp",
    name: "F22",
    price: 14000,
  },
  {
    id: 8,
    img: "../images/samsung-M53.webp",
    name: "GM53",
    price: 24000,
  },
  {
    id: 9,
    img: "../images/Galaxy S10.webp",
    name: "GALAXY S10 Lite",
    price: 41000,
  },
];
