
import React, { Suspense, use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

// const pricingPromise = fetch()
const MarksChat = ({ markPromese }) => {
    const marksDataRes = use(markPromese)
    const markData = marksDataRes.data;
    // console.log(markData)
    const markChatData = markData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            bangla:studentData.marks.bangla,
            english: studentData.marks.english,
            math: studentData.marks.math
        }
        const avg = (student.bangla + student.english + student.math) / 3;
        student.avg = avg;
        return student
    })
    console.log(markChatData)
    return (
        <div>
        <BarChart width={500}height={300} data={markChatData}>
            <XAxis dataKey={"name"}></XAxis>
            <YAxis></YAxis>
            <Bar dataKey={'avg'} fill='green'></Bar>
            <Bar dataKey={'bangla'} fill='black'></Bar>
        </BarChart>

        </div>
    );
};

export default MarksChat;