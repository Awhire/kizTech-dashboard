import { useEffect, useState } from "react";
import "./Performance.css";
import { ThemeContext } from "../../ThemeContext";
import {
  XAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Legend,
  Bar,
  PieChart,
  Pie,
  LineChart,
  YAxis,
  Line,
  AreaChart,
  Area,
} from "recharts";
import CircularProgress from "../../Components/CircularProgress/CircularProgress";

const Performance = () => {
  const [username, setUsername] = useState();
  const { DarkTheme } = useState(ThemeContext);

  useEffect(() => {
    setUsername(localStorage.getItem("username"));
  });

  const data = [
    {
      name: "01",
      pv: 2400,
      uv: 4000,
      amt: 2400,
    },
    {
      name: "02",
      pv: 1398,
      uv: 3000,
      amt: 2210,
    },
    {
      name: "03",
      pv: 9800,
      uv: 2000,
      amt: 2290,
    },
    {
      name: "04",
      pv: 3908,
      uv: 2780,
      amt: 2000,
    },
    {
      name: "05",
      pv: 4800,
      uv: 1890,
      amt: 2181,
    },
    {
      name: "06",
      pv: 3800,
      uv: 2390,
      amt: 500,
    },
    {
      name: "07",
      pv: 4300,
      uv: 3490,
      amt: 2100,
    },
  ];

  const rangeData = [
    {
      day: "05-01",
      temperature: [-1, 10],
    },
    {
      day: "05-02",
      temperature: [2, 15],
    },
    {
      day: "05-03",
      temperature: [3, 12],
    },
    {
      day: "05-04",
      temperature: [4, 12],
    },
    {
      day: "05-05",
      temperature: [12, 16],
    },
    {
      day: "05-06",
      temperature: [5, 16],
    },
    {
      day: "05-07",
      temperature: [3, 12],
    },
    {
      day: "05-08",
      temperature: [0, 8],
    },
    {
      day: "05-09",
      temperature: [-3, 5],
    },
  ];

  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset] = useState(315 - (value_i / 100) * 315);

  const [value_ii] = useState(Math.floor(Math.random() * 100));
  const [value_ii_offset] = useState(315 - (value_ii / 100) * 315);

  return (
    <div className={`performance ${DarkTheme && "dark"}`}>
      <div className="header">
        <h1 className="text-head">Hello, {username}</h1>
        <p>Track team progress here. You almost reach a goal!</p>

        <svg
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#ffffff",
            width: "100%",
            height: 50,
            transform: "rotate(360deg)",
          }}
          className="bg-wave"
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
      </div>

      <div className="content">
        <span className="section-title">Performance</span>

        <div className="row">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 70, bottom: 0 }}
            className="area-chart"
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#810551" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#810551" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
             <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#810551"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
           
          </AreaChart>
        </div>

        <div className="row">
          <AreaChart
            width={730}
            height={250}
            data={rangeData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 60,
            }}
            className="area-chart"
          >
            <XAxis dataKey="day" />
            <YAxis />
            <Area dataKey="temperature" stroke="#8884d8" fill="#8884d8" />
            <Tooltip />
          </AreaChart>
        </div>

        <div className="row side-rect">
          <section>
            <CircularProgress
              color="#810551"
              value={value_i}
              offset={value_i_offset}
            />

            <div className="summary">
              <h2 className="summary-title">Performance</h2>
              <span className="summary-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptas esse mollitia dolores iure{" "}
              </span>
            </div>

            <CircularProgress
              color="#00464e"
              value={value_ii}
              offset={value_ii_offset}
            />
          </section>
        </div>

        <div className="row side-rect">
          <section>
            <CircularProgress
              color="#810551"
              value={value_i}
              offset={value_i_offset}
            />

            <div className="more-details">
              <h1 className="title">Detailed Analysis</h1>
              <span className="txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae quidem accusamus corrupti quas iure Lorem.
                Repudiandae quidem accusamus corrupti quas iure.
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Performance;
