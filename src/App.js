import "./App.css";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { useRef, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function App() {
    const easy = useRef();
    const medium = useRef();
    const hard = useRef();
    const [easydata, setEasyData] = useState([1, 0, 0]);
    const [mediumdata, setMediumData] = useState([0, 1, 0]);
    const [harddata, setHardData] = useState([0, 0, 1]);

    const handleRefresh = () => {
        if (
            easy.current?.value >= 0 &&
            easy.current?.value <= 100 &&
            medium.current?.value >= 0 &&
            medium.current?.value <= 100 &&
            hard.current?.value >= 0 &&
            hard.current?.value <= 100
        ) {
            setEasyData([easy.current?.value, 0, 0]);
            setMediumData([0, medium.current?.value, 0]);
            setHardData([0, 0, hard.current?.value]);
        } else {
            alert("Value should be between 0 to 100!");
        }
    };
    const data = {
        labels: ["Easy", "Medium", "Hard"],
        datasets: [
            {
                label: "Easy",
                backgroundColor: "rgba(0,255,0,0.2)",
                borderColor: "rgba(0,255,0,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(0,255,0,0.4)",
                hoverBorderColor: "rgba(0,255,0,1)",
                data: easydata,
            },
            {
                label: "Medium",
                backgroundColor: "rgba(255,255,0,0.2)",
                borderColor: "rgba(255,255,0,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,255,0,0.4)",
                hoverBorderColor: "rgba(255,255,0,1)",
                data: mediumdata,
            },
            {
                label: "Hard",
                backgroundColor: "rgba(255,0,0,0.2)",
                borderColor: "rgba(255,0,0,1)",
                borderWidth: 1,
                hoverBackgroundColor: "rgba(255,0,0,0.4)",
                hoverBorderColor: "rgba(255,0,0,1)",
                data: harddata,
            },
        ],
        options: {
            responsive: false,
            scales: {
                yAxes: [
                    {
                        display: true,
                        stacked: true,
                        ticks: {
                            min: 0,
                            max: 100,
                        },
                    },
                ],
            },
        },
    };
    return (
        <div className="App">
            <h1>Assignment</h1>
            <div className="barchart">
                <Bar data={data} />
            </div>

            <div className="form">
                <div className="input-list">
                    <label className="labels">Easy</label>
                    <input className="inputs" ref={easy} type="number" />
                </div>
                <div className="input-list">
                    <label className="labels">Medium</label>
                    <input className="inputs" ref={medium} type="number" />
                </div>
                <div className="input-list">
                    <label className="labels">Hard</label>
                    <input className="inputs" ref={hard} type="number" />
                </div>
                <button className="refresh-btn" onClick={() => handleRefresh()}>
                    Refresh
                </button>
            </div>
            <p>Created by Sudhanshu Patel</p>
        </div>
    );
}

export default App;
