'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Carsel from './components/Carsel';
import JustArrives from './components/JustArrives';




export default function Home() {
    
  const { data } = useQuery(["data"], async () => {
    const res = await axios.get("/api/watches")
    console.log(res.data.watches);
    return res.data.watches
    
  })


  return (
    <main className="bgg">
        <Carsel />
        <div className="app">
        <JustArrives />
        </div>
    </main>
  );
}
