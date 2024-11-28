'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const data = [
    {
        name: 'Jun',
        ventas:25
    },
    {
        name: 'Jul',
        ventas:30
    },
    {
        name: 'Ago',
        ventas:5
    },
    {
        name: 'Sep',
        ventas:10
    },
    {
        name: 'Oct',
        ventas:2
    },
    {
        name: 'Nov',
        ventas:100
    },
    {
        name: 'Dic',
        ventas:200
    },
];
export const GraficoVentas = () => {
    return (
        <div className='w-full h-[25rem]'>
        <ResponsiveContainer width={'100%'} height={'100%'}>
            <AreaChart
                data={data}
                margin={{
                    top: 0,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="ventas" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    )
}
