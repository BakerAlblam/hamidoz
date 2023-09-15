'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';


interface Data {
  _id: string;
  title: string;
  body: string
}

export default function Home() {
  const { data } = useQuery(["data"], async () => {
    const res = await axios.get("http://localhost:3000/api/watches")
    return res.data.watches
    
  })


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      {data?.map((watches: Data) => (
          <div key={watches._id}>
            <h1>Watch tite: {watches.title} </h1>
          </div>
        ))}
          </div>
    </main>
  );
}
