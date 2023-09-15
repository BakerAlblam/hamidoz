'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useState } from 'react';


interface Data {
  _id: string;
  title: string;
  body: string
}

export default function Home() {
    const [data, setData] = useState<Data[]>([]);

    useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/watches');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newData = await response.json();
        console.log(newData.watches);
        setData(newData.watches);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Fetch data initially when the component mounts
    fetchData();

    // Set up an interval to fetch data every N seconds (e.g., every 10 seconds)
    
  }, []); // Empty dependency array means this effect runs once on mount



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <div>
        {data.map((watches: Data) => (
          <div key={watches._id}>
            <h1> {watches.title} </h1>
          </div>
        ))}
      </div>
    </main>
  );
}
