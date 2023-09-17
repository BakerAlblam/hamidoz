'use client';
import { Image } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';
import React from 'react';

const page = () => {
  interface watchData {
    _id: string;
    title: string;
    year: string;
    desc: string;
    image: string;
  }

  const { data } = useQuery(['allWatchData'], async () => {
    const response = await axios.get('/api/all');
    return response.data.watches;
  });

  return (
    <div className="">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      >
        {data?.map((watch: watchData) => (
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" key={watch._id}>
            <Link href={`/watch/${watch.title}`}>
              <Image
                src={watch.image}
                alt="Product"
                height={"300"}
                width={"220"}
                className="object-cover rounded-t-xl"
              />
              <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  Brand
                </span>
                <p className="text-lg font-bold text-black truncate block capitalize">
                  {watch.title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    $149
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      $199
                    </p>
                  </del>
                  <div className="ml-auto"></div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default page;
