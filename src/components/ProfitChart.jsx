import { LineChart, Line, XAxis, Tooltip } from "recharts";

<LineChart width={300} height={150} data={chartData}>
  <Line type="monotone" dataKey="profit" stroke="#22c55e" />
  <XAxis dataKey="time" />
  <Tooltip />
</LineChart>
