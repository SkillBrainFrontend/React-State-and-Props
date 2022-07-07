import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import ItemList from "./components/item-list/ItemList";

const MOCK = [
  {
    id: 1,
    cars: "911",
    image: "https://robohash.org/repellatinventoreiste.png?size=50x50&set=set1",
    votes: 7,
  },
  {
    id: 2,
    cars: "Truck",
    image: "https://robohash.org/fugiatfugitomnis.png?size=50x50&set=set1",
    votes: 11,
  },
  {
    id: 3,
    cars: "62",
    image: "https://robohash.org/sitrecusandaeexpedita.png?size=50x50&set=set1",
    votes: 10,
  },
  {
    id: 4,
    cars: "300E",
    image: "https://robohash.org/etquasducimus.png?size=50x50&set=set1",
    votes: 8,
  },
  {
    id: 5,
    cars: "Civic",
    image:
      "https://robohash.org/quasimolestiaeaccusamus.png?size=50x50&set=set1",
    votes: 7,
  },
  {
    id: 6,
    cars: "Ipsum",
    image: "https://robohash.org/velanimilaboriosam.png?size=50x50&set=set1",
    votes: 15,
  },
  {
    id: 7,
    cars: "Town & Country",
    image: "https://robohash.org/utofficiisnemo.png?size=50x50&set=set1",
    votes: 4,
  },
  {
    id: 8,
    cars: "Ram Van 2500",
    image: "https://robohash.org/ametomnismaxime.png?size=50x50&set=set1",
    votes: 10,
  },
  {
    id: 9,
    cars: "Cooper",
    image:
      "https://robohash.org/voluptatesquisquamodio.png?size=50x50&set=set1",
    votes: 11,
  },
  {
    id: 10,
    cars: "Daewoo Kalos",
    image: "https://robohash.org/corporistotamanimi.png?size=50x50&set=set1",
    votes: 10,
  },
  {
    id: 11,
    cars: "98",
    image:
      "https://robohash.org/voluptatesaccusamuspraesentium.png?size=50x50&set=set1",
    votes: 13,
  },
  {
    id: 12,
    cars: "3 Series",
    image: "https://robohash.org/idetveniam.png?size=50x50&set=set1",
    votes: 7,
  },
  {
    id: 13,
    cars: "Torrent",
    image: "https://robohash.org/hicdelectusamet.png?size=50x50&set=set1",
    votes: 15,
  },
  {
    id: 14,
    cars: "Accord",
    image: "https://robohash.org/fugiatassumendaquam.png?size=50x50&set=set1",
    votes: 11,
  },
  {
    id: 15,
    cars: "Toronado",
    image: "https://robohash.org/rationeutpraesentium.png?size=50x50&set=set1",
    votes: 15,
  },
  {
    id: 16,
    cars: "Bronco",
    image: "https://robohash.org/rerumcupiditateet.png?size=50x50&set=set1",
    votes: 14,
  },
  {
    id: 17,
    cars: "Topaz",
    image: "https://robohash.org/totamutin.png?size=50x50&set=set1",
    votes: 18,
  },
  {
    id: 18,
    cars: "Town & Country",
    image:
      "https://robohash.org/estexercitationemblanditiis.png?size=50x50&set=set1",
    votes: 12,
  },
  {
    id: 19,
    cars: "TrailBlazer",
    image: "https://robohash.org/harumevenietsunt.png?size=50x50&set=set1",
    votes: 5,
  },
  {
    id: 20,
    cars: "Sierra 2500",
    image: "https://robohash.org/aipsamut.png?size=50x50&set=set1",
    votes: 18,
  },
  {
    id: 21,
    cars: "IS F",
    image: "https://robohash.org/aperiamsuntdolores.png?size=50x50&set=set1",
    votes: 12,
  },
  {
    id: 22,
    cars: "CLK-Class",
    image:
      "https://robohash.org/voluptatumrecusandaerepellat.png?size=50x50&set=set1",
    votes: 15,
  },
  {
    id: 23,
    cars: "Grand Prix",
    image: "https://robohash.org/nesciuntomnisenim.png?size=50x50&set=set1",
    votes: 1,
  },
  {
    id: 24,
    cars: "4Runner",
    image:
      "https://robohash.org/beataerecusandaereiciendis.png?size=50x50&set=set1",
    votes: 15,
  },
  {
    id: 25,
    cars: "Mustang",
    image: "https://robohash.org/exveniamminima.png?size=50x50&set=set1",
    votes: 14,
  },
  {
    id: 26,
    cars: "Cooper",
    image: "https://robohash.org/officiisquasifugiat.png?size=50x50&set=set1",
    votes: 18,
  },
  {
    id: 27,
    cars: "Stratus",
    image: "https://robohash.org/doloremomnisoptio.png?size=50x50&set=set1",
    votes: 13,
  },
  {
    id: 28,
    cars: "Prius",
    image: "https://robohash.org/saepequiet.png?size=50x50&set=set1",
    votes: 8,
  },
  {
    id: 29,
    cars: "Town & Country",
    image: "https://robohash.org/voluptatesitrerum.png?size=50x50&set=set1",
    votes: 20,
  },
  {
    id: 30,
    cars: "Sierra 1500",
    image:
      "https://robohash.org/officiisomnissimilique.png?size=50x50&set=set1",
    votes: 3,
  },
];

function App() {
  const [cars, setCars] = useState(MOCK);

  const getTopCar = () => {
    let maxVotes = 0;
    let bestCar = {};

    cars.forEach((item) => {
      if (item.votes > maxVotes) {
        maxVotes = item.votes;
        bestCar = item;
      }
    });

    return bestCar;
  };
  let a = 1;
  const topCar = getTopCar();

  // const topCar = cars.reduce(
  //   (acumulator, currentItem) => {
  //     if (currentItem.votes > acumulator.votes) {
  //       return currentItem;
  //     }
  //     return acumulator;
  //   },
  //   { votes: 0 }
  // );

  const onButtonClick = (id) => {
    const newArr = cars.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          votes: item.votes + 1,
        };
      }
      return item;
    });
    a += 1;
    console.log("AAA", a);
    setCars(newArr);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Card value={10}>
          <h3>{topCar.cars + " " + topCar.votes}</h3>
          <form>
            {/* <Input onChange={() => {}} placeholder="Title" type="text" />
            <TextArea onChange={() => {}} placeholder="Description" />
            <Button type="submit">Create</Button> */}
          </form>
        </Card>

        <ItemList items={cars} onVoteClick={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
