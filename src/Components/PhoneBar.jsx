import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PhoneBar = () => {
    const API_URL =  `https://openapi.programming-hero.com/api/phones?search=iphone`
    const [phones,setPhones] = useState([])

    useEffect(()=>{
axios.get(API_URL)
.then(data =>{
    const loadedData = data.data.data;
    const phonesData = loadedData.map(phone => {
        const parts = phone.slug.split('-')
        const price = parseInt(parts[1])
        const phoneInfo = {
            name : phone.phone_name,
            price: price
        }
        // console.log(phoneInfo);
        return phoneInfo;
        
    })
    setPhones(phonesData)
}  )

    }
    ,[])
  return (
    <div>
<BarChart width={1000} height={500} data={phones} >
<Bar dataKey="price" fill="#8884d8" />
<XAxis dataKey="name" />
<YAxis />
</BarChart>
    </div>
  )
}

export default PhoneBar