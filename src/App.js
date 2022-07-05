import React, { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import ItemList from "./components/item-list/ItemList";

const MOCK = [
  {
    id: 1,
    image: "https://robohash.org/voluptatemdolorest.png?size=50x50&set=set1",
    ip_address: "7.154.174.21",
    contry: "Indonesia",
  },
  {
    id: 2,
    image:
      "https://robohash.org/voluptatemquasidebitis.png?size=50x50&set=set1",
    ip_address: "225.80.140.35",
    contry: "Argentina",
  },
  {
    id: 3,
    image: "https://robohash.org/aistequaerat.png?size=50x50&set=set1",
    ip_address: "137.82.197.119",
    contry: "Sweden",
  },
  {
    id: 4,
    image: "https://robohash.org/quisquiavel.png?size=50x50&set=set1",
    ip_address: "52.153.2.111",
    contry: "Portugal",
  },
  {
    id: 5,
    image: "https://robohash.org/autfacerepraesentium.png?size=50x50&set=set1",
    ip_address: "17.155.79.48",
    contry: "Poland",
  },
  {
    id: 6,
    image: "https://robohash.org/cumutut.png?size=50x50&set=set1",
    ip_address: "134.227.108.151",
    contry: "France",
  },
  {
    id: 7,
    image: "https://robohash.org/temporeinaut.png?size=50x50&set=set1",
    ip_address: "39.4.87.19",
    contry: "Panama",
  },
  {
    id: 8,
    image: "https://robohash.org/aquiserror.png?size=50x50&set=set1",
    ip_address: "251.178.153.236",
    contry: "Canada",
  },
  {
    id: 9,
    image: "https://robohash.org/liberoquirem.png?size=50x50&set=set1",
    ip_address: "128.73.183.173",
    contry: "Russia",
  },
  {
    id: 10,
    image: "https://robohash.org/iustoaliasquia.png?size=50x50&set=set1",
    ip_address: "137.4.28.118",
    contry: "Colombia",
  },
  {
    id: 11,
    image: "https://robohash.org/laborevitaearchitecto.png?size=50x50&set=set1",
    ip_address: "131.204.71.246",
    contry: "Norway",
  },
  {
    id: 12,
    image:
      "https://robohash.org/magnilaudantiumaperiam.png?size=50x50&set=set1",
    ip_address: "95.96.162.59",
    contry: "China",
  },
  {
    id: 13,
    image: "https://robohash.org/debitisabcumque.png?size=50x50&set=set1",
    ip_address: "113.196.242.174",
    contry: "China",
  },
  {
    id: 14,
    image: "https://robohash.org/quialiquamqui.png?size=50x50&set=set1",
    ip_address: "168.193.91.143",
    contry: "Portugal",
  },
  {
    id: 15,
    image: "https://robohash.org/enimetrerum.png?size=50x50&set=set1",
    ip_address: "173.158.18.32",
    contry: "Indonesia",
  },
  {
    id: 16,
    image: "https://robohash.org/estrecusandaedebitis.png?size=50x50&set=set1",
    ip_address: "241.108.61.122",
    contry: "Peru",
  },
  {
    id: 17,
    image:
      "https://robohash.org/asperioreslaboriosamest.png?size=50x50&set=set1",
    ip_address: "56.113.184.213",
    contry: "Kiribati",
  },
  {
    id: 18,
    image: "https://robohash.org/quiaeaoptio.png?size=50x50&set=set1",
    ip_address: "130.110.77.15",
    contry: "France",
  },
  {
    id: 19,
    image: "https://robohash.org/numquamquiin.png?size=50x50&set=set1",
    ip_address: "58.11.185.44",
    contry: "Poland",
  },
  {
    id: 20,
    image: "https://robohash.org/hicautemperferendis.png?size=50x50&set=set1",
    ip_address: "49.167.232.220",
    contry: "Nauru",
  },
  {
    id: 21,
    image: "https://robohash.org/etsitnam.png?size=50x50&set=set1",
    ip_address: "60.150.113.209",
    contry: "Philippines",
  },
  {
    id: 22,
    image: "https://robohash.org/inventoremagnisaepe.png?size=50x50&set=set1",
    ip_address: "60.70.191.113",
    contry: "Indonesia",
  },
  {
    id: 23,
    image: "https://robohash.org/rerumquasisit.png?size=50x50&set=set1",
    ip_address: "245.87.232.35",
    contry: "Indonesia",
  },
  {
    id: 24,
    image: "https://robohash.org/veroquirepudiandae.png?size=50x50&set=set1",
    ip_address: "255.54.51.16",
    contry: "China",
  },
  {
    id: 25,
    image:
      "https://robohash.org/veniamreprehenderitquo.png?size=50x50&set=set1",
    ip_address: "79.187.63.209",
    contry: "China",
  },
  {
    id: 26,
    image:
      "https://robohash.org/laudantiumconsequaturodio.png?size=50x50&set=set1",
    ip_address: "239.4.217.151",
    contry: "Indonesia",
  },
  {
    id: 27,
    image: "https://robohash.org/optionamomnis.png?size=50x50&set=set1",
    ip_address: "41.80.97.253",
    contry: "Portugal",
  },
  {
    id: 28,
    image:
      "https://robohash.org/autsuscipitrepellendus.png?size=50x50&set=set1",
    ip_address: "152.89.227.138",
    contry: "Indonesia",
  },
  {
    id: 29,
    image: "https://robohash.org/autdelectusex.png?size=50x50&set=set1",
    ip_address: "159.186.126.13",
    contry: "Democratic Republic of the Congo",
  },
  {
    id: 30,
    image: "https://robohash.org/nullailloodio.png?size=50x50&set=set1",
    ip_address: "44.60.42.118",
    contry: "China",
  },
  {
    id: 31,
    image:
      "https://robohash.org/cupiditaterepudiandaevoluptatem.png?size=50x50&set=set1",
    ip_address: "232.206.53.76",
    contry: "Chad",
  },
  {
    id: 32,
    image:
      "https://robohash.org/doloremquedolorsuscipit.png?size=50x50&set=set1",
    ip_address: "175.39.171.208",
    contry: "France",
  },
  {
    id: 33,
    image:
      "https://robohash.org/ducimuspossimusmolestias.png?size=50x50&set=set1",
    ip_address: "185.244.124.204",
    contry: "Belarus",
  },
  {
    id: 34,
    image:
      "https://robohash.org/exercitationemomnisneque.png?size=50x50&set=set1",
    ip_address: "126.9.160.75",
    contry: "South Korea",
  },
  {
    id: 35,
    image: "https://robohash.org/aliquidnonet.png?size=50x50&set=set1",
    ip_address: "187.49.244.78",
    contry: "Latvia",
  },
  {
    id: 36,
    image: "https://robohash.org/iureomnisnumquam.png?size=50x50&set=set1",
    ip_address: "216.4.97.34",
    contry: "Pakistan",
  },
  {
    id: 37,
    image: "https://robohash.org/quaemaximeet.png?size=50x50&set=set1",
    ip_address: "149.53.215.13",
    contry: "Russia",
  },
  {
    id: 38,
    image: "https://robohash.org/ullamnisiducimus.png?size=50x50&set=set1",
    ip_address: "75.63.62.91",
    contry: "Slovenia",
  },
  {
    id: 39,
    image:
      "https://robohash.org/voluptatemvoluptatenulla.png?size=50x50&set=set1",
    ip_address: "53.55.35.157",
    contry: "Spain",
  },
  {
    id: 40,
    image: "https://robohash.org/quisistevero.png?size=50x50&set=set1",
    ip_address: "128.250.215.118",
    contry: "China",
  },
];

function App() {
  const [country, setCountry] = useState("Press the button");
  const onButtonClick = (param) => {
    setCountry(param);
  };

  return (
    <div className="App">
      <div className="App-header">
        <Card>
          <h3>{country}</h3>
          <form>
            {/* <Input onChange={() => {}} placeholder="Title" type="text" />
            <TextArea onChange={() => {}} placeholder="Description" />
            <Button type="submit">Create</Button> */}
          </form>
        </Card>

        <ItemList items={MOCK} adi={onButtonClick} />
      </div>
    </div>
  );
}

export default App;
