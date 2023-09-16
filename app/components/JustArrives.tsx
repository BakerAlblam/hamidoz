'use client';
import { Box, Flex, Grid, Text } from '@radix-ui/themes';
import React from 'react';
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react';
import { Carousel } from "@material-tailwind/react";
import {Image} from "@nextui-org/react";



const JustArrives = () => {
  return (
    <Box
      
      className="app rounded-none"
    >
      <Text
        className="text-white"
        size={'8'}
        my={"6"}
      >
        JUST ARRIVED
      </Text>

      <Tabs aria-label="Options" fullWidth>
        <Tab
        className=''
          key="photos"
          title="Photos"
        >
          <Card className='bg-transparent my-8 rounded-none'>
       
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-3 lg:grid-cols-5">

<div className="">
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      <h1 className='text-white text-center'> kek</h1>
      </div>
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      <Image
        src="https://www.luxurybazaar.com/media/catalog/product/cache/5bc2e0a9046b8d49b188697811d44e1e/r/o/rolex_14060_304470_9286.jpg"
        alt="image 1"
        isZoomed
        width={240}
        height={200}
        radius='md'
      />
      


    
      </div>
  
          </Card>
        </Tab>
        <Tab
          key="music"
          title="Music"
        >
          <Card>
            <CardBody>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>

      <Box py="9" />
    </Box>
  );
};

export default JustArrives;
