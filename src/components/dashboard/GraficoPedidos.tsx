'use client';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jun',
        completados: 4,
        cancelados: 1,
    },
    {
        name: 'Jul',
        completados: 20,
        cancelados: 0,
    },
    {
        name: 'Ago',
        completados: 100,
        cancelados: 52,
    },
    {
        name: 'Sep',
        completados: 22,
        cancelados: 2,
    },
    {
        name: 'Oct',
        completados: 100,
        cancelados: 42,
    },
    {
        name:'Nov',
        completados: 100,
        cancelados: 22,
    },
    {
        name: 'Dic',
        completados: 40,
        cancelados: 0,
    },
];
export const GraficoPedidos = () => {
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
                    <Bar dataKey="completados" fill="#4ade80" activeBar={<Rectangle fill="#86efac" stroke="#475569" />} />
                    <Bar dataKey="cancelados" fill="#f87171" activeBar={<Rectangle fill="#fca5a5" stroke="#475569" />} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}
