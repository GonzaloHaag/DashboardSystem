'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jun',
        Activos:5,
        Inactivos:2
    },
    {
        name: 'Jul',
        Activos:20,
        Inactivos:0
    },
    {
        name: 'Ago',
        Activos:10,
        Inactivos:5
    },
    {
        name: 'Sep',
        Activos:55,
        Inactivos:7
    },
    {
        name: 'Oct',
        Activos:22,
        Inactivos:1
    },
    {
        name:'Nov',
        Activos:2,
        Inactivos:0
    },
    {
        name: 'Dic',
        Activos:8,
        Inactivos:0
    },
];
export const GraficoClientes = () => {
    return (
        <div className='w-full h-[27rem]'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
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
                    <Legend />
                    <Bar dataKey="Activos" stackId="a" fill="#fb923c" />
                    <Bar dataKey="Inactivos" stackId="a" fill="#94a3b8" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
