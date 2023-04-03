import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    let marks = [
        { id: 1, name: 'John', physics: 85, chemistry: 76, biology: 92 },
        { id: 2, name: 'Jane', physics: 78, chemistry: 82, biology: 80 },
        { id: 3, name: 'Bob', physics: 90, chemistry: 88, biology: 95 },
        { id: 4, name: 'Alice', physics: 86, chemistry: 75, biology: 93 },
        { id: 5, name: 'Tom', physics: 92, chemistry: 83, biology: 88 },
        { id: 6, name: 'Emily', physics: 85, chemistry: 77, biology: 91 },
        { id: 7, name: 'Jack', physics: 89, chemistry: 85, biology: 87 },
        { id: 8, name: 'Lucy', physics: 80, chemistry: 78, biology: 90 },
        { id: 9, name: 'Max', physics: 88, chemistry: 82, biology: 92 },
        { id: 10, name: 'Sophie', physics: 84, chemistry: 79, biology: 89 },
        { id: 11, name: 'David', physics: 91, chemistry: 87, biology: 94 },
        { id: 12, name: 'Linda', physics: 83, chemistry: 81, biology: 87 }
      ];
      

  return (
    <div>

        <LineChart 
         width={500}
         height={300}
         data={marks}
        >  
        <Line dataKey="physics" stroke="#8884d8"></Line>
        <Line dataKey="biology" stroke="#8884d8"></Line>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip/>
        </LineChart>
        
    </div>
  )
}

export default Dashboard