import React from "react";
import "./ItemList.css";
import Card from "../card/Card";
import Button from "../button/Button";

const ItemList = (props) => {
  const sortContries = (a, b) => {
    if (a.contry > b.contry) return 1;
    if (a.contry === b.contry) return 0;
    return -1;
  };

  return (
    <div className="item-list">
      {props.items
        .sort(sortContries)
        .filter((item) => item.contry !== "Russia")
        .map((item) => (
          <Card key={item.id}>
            <p>{item.contry}</p>
            <div className="row">
              <img src={item.image} />
              <p>{item.ip_address}</p>
            </div>

            <Button
              onClick={() => props.adi(item.contry)}
              className="primary-button"
            >
              {item.contry}
            </Button>
          </Card>
        ))}
    </div>
  );
};
export default ItemList;
