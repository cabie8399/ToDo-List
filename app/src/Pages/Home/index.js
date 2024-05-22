import { useState } from "react";

import Edit from "./component/Edit";
import List from "./component/List";
import "./index.css";

const Home = () => {
  const [data, setData] = useState([]);

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;
