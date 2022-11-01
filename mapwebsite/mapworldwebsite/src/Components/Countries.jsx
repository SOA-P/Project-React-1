import React from 'react';
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all").then((res) => setData(res.data));
    }, [])

    return (
        <div className='countries'>
            <h1>COUNTRIES</h1>
            <ul>
                {
                    data.map((country, index) => (
                        <Card key={index} country={country} />
                    ))
                }
            </ul>
        </div>
    );
};

export default Countries;