'use client';
import { Box, Text } from '@radix-ui/themes';
import React from 'react';
import { Button, Card, } from '@nextui-org/react';
import { Image } from '@nextui-org/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Link from 'next/link';

const JustArrives = () => {

    interface watchData {
        _id: string,
        title: string,
        year: string,
        desc: string,
        image: string
    }

    const { data } = useQuery(["watchData"], async () => {
        const res = await axios.get("/api/watches")
        return res.data.watches
    } ) 

  return (
    <Box className="app rounded-none bg-transparent">
      <Text
        className="text-white"
        size={'8'}
        my={'6'}
      >
        JUST ARRIVED
      </Text>

      <Card className="bg-transparent my-8 rounded-none">
        <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 lg:gap-4  xl:gap-3 md:gap-3 ">
        {data?.map((watch: watchData) => (
  <div className="image-container mb-5" key={watch._id}>
    <Link href={`/watch/${watch.title}`}>
      <div className="image-wrapper">
        <Image
          src={watch.image}
          alt={watch.title}
          isZoomed
          width={200}
          height={280}
          radius="md"
        />
      </div>
    </Link>
    <h1 className="text-white text-center my-3">{watch.title}</h1>
  </div>
))}

            
        </div>
      </Card>

      <Box py="9" />
      <Button
      className='mb-3'
      href="/allwatches"
      as={Link}
      color="warning"
      
      variant="bordered"
    >
     View All
    </Button>
  
    </Box>
  );
};

export default JustArrives;
