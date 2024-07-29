import { Bar, BarChart, CartesianGrid, Cell, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import { data, data1, data2, dataLine, lastData, reallyLastData } from '../../../data';
import './HomeRightbar.css';

const HomeRightbar = () => {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (<>
    <div className='mainHomeRightbar'>
        <div>
            <div className='ItemContainer'>
                <div className='ItemContainer1'>
                    <div className='subItemContainer'>
                        <p className='taskProgress'>Task Progress</p>
                        <p className='taskCounter'>212</p>
                        <p className='currentMonth1'>Current Month</p>
                    </div>
                    <div className='barchartContainer'>
                        <BarChart width={155} height={100} data={data}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            {/* <Legend /> */}
                            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                            <Bar dataKey="uv" fill="fill" />
                        </BarChart>
                    </div>
                </div>
                <div className='ItemContainer1'>
                <div className='subItemContainer'>
                        <p className='taskProgress'>Task Completed</p>
                        <p className='taskCounter'>301</p>
                        <p className='currentMonth1'>Current Month</p>
                    </div>
                    <div className='barchartContainer'>
                        <BarChart width={155} height={100} data={data1}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            {/* <Legend /> */}
                            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                            <Bar dataKey="uv" fill="fill" />
                        </BarChart>
                    </div>
                </div>
                <div className='ItemContainer1'>
                <div className='subItemContainer1'>
                        <p className='taskProgress'>Monthly Task Summary</p>
                        <p className='taskCounter'>1342</p>
                        <p className='currentMonth1'>Current Month</p>
                    </div>
                    <div className='barchartContainer'>
                        <BarChart width={155} height={100} data={data2}>
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            {/* <XAxis dataKey="name" />
                            <YAxis /> */}
                            <Tooltip />
                            {/* <Legend /> */}
                            {/* <Bar dataKey="pv" fill="#8884d8" /> */}
                            <Bar dataKey="uv" fill="fill" />
                        </BarChart>
                    </div>
                </div>
            </div>
            <div className='middleTaskChart'>
                <p className='taskCreatedvsCompleted'>Task Created vs Task Completed</p>
                <LineChart width={1010} height={150} data={dataLine}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    {/* <XAxis dataKey="name" /> */}
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="task_created" stroke="#8884d8" />
                    <Line type="monotone" dataKey="task_completed" stroke="#82ca9d" />
                </LineChart>
            </div>
            <div className='tasksContainer'>
                <div className='taskChart'>
                    <p className='taskContainerText'>your team performance this week</p>
                    <PieChart width={250} height={120}>
                        {/* <Pie
                            data={data}
                            cx={120}
                            cy={200}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie> */}
                        <Pie
                            data={reallyLastData}
                            cx={125}
                            cy={120}
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <div className='MonthlyEarning'>
                    <p className='taskContainerText'>monthly earning performance</p>
                    <ComposedChart
                        width={750}
                        height={180}
                        data={lastData}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                        >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default HomeRightbar