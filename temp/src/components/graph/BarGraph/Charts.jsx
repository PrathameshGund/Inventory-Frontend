import { useState } from "react";
import "./Chart.css";
import BarChart from "./BarChart";

import { UserData } from "./Data";

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label:"Profit",
        data: UserData.map((data) => data.Profit),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="Bar">
      <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div>
      
    </div>
  );
}

export default App;