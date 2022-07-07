import React from "react";
import "./ItemList.css";
import Card from "../card/Card";
import Button from "../button/Button";

const ItemList = (props) => {
  const sortCars = (a, b) => {
    if (a.votes > b.votes) return -1;
    if (a.votes === b.votes) return 0;
    return 1;
  };

  return (
    <div className="item-list">
      {props.items
        /*
          sort cards by nr of 
        */
        /*
          .sort(sortCars)
      */
        .map((item) => (
          <Card key={item.id}>
            <p>Votes: {item.votes}</p>
            <div className="row">
              <img src={item.image} />
              <p>{item.cars}</p>
            </div>

            <Button
              onClick={() => props.onVoteClick(item.id)}
              className="primary-button"
            >
              {item.cars}
            </Button>
          </Card>
        ))}
    </div>
  );
};

export default ItemList;
