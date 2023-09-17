'use client';

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Carsel from './components/Carsel';
import JustArrives from './components/JustArrives';
import About from './components/About';


export default function Home() {
    


  return (
    <main className="bgg">
        <Carsel />
        <div className="app">
        <JustArrives />
        <hr className="h-0.5  mx-auto rounded border-1 bg-white w-full"  />
        <About />
        </div>
    </main>
  );
}
