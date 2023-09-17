"use client"
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react'
import { Box, Grid, Text } from '@radix-ui/themes'
import React from 'react'

const About = () => {
  return (
    <div className="w-full app">
    <Text
    className="text-white"
    size={'8'}
    my={'6'}
  >
    About Us
  </Text>
    <form
    className="mt-10 mb-12 w-full sm:w-1/2 md:w-2/3  text-white"
   
  >
    <Grid
      columns="2"
      gap="4"
      className='w-full'
    >
      <Box height="max-content" width={"100%"}>
        <Input
          type="text"
          id="title"
          size="md"
          isClearable
          variant="bordered"
          color="warning"
          fullWidth
          isRequired
          label="Titel..."
         
        />
      </Box>

      <Box height="max-content">
      <Input
        size="md"
        label="Yrke"
        isClearable
        variant="bordered"
        color="warning"
        fullWidth
        isRequired
        id="yrke"
       
      />
      </Box>



<Box height="max-content">
      <Input
        label="Address"
        size="md"
        isClearable
        variant="bordered"
        color="warning"
        fullWidth
        isRequired
        id="address"
       
      />
       </Box>


       <Box height="max-content">
      <Select
        
        id="stad"
        name="stad"
        color="warning"
        variant="bordered"
        fullWidth
        label="Välj stad"
        isRequired
      >
        <SelectItem
          key={'Stockholm'}
          value={'stockholm'}
        >
          Stockholm
        </SelectItem>
        <SelectItem key={'Göteborg'}>Göteborg</SelectItem>
        <SelectItem key={'Malmö'}>Malmö</SelectItem>
        <SelectItem key={'Uppsala'}>Uppsala</SelectItem>
        <SelectItem key={'Jönköping'}>Jönköping</SelectItem>
      </Select>
      </Box>

      <Box height="max-content">
      <Select
       
        id="anstallningsform"
        name="anstallningsform"
        color="warning"
        variant="bordered"
        fullWidth
        label="Anställningsform"
        className="w-full"
        isRequired
      >
        <SelectItem key={'Tillsvidare'}>Tillsvidare</SelectItem>
        <SelectItem key={'Vid behov'}>Vid behov</SelectItem>
        <SelectItem key={'Sommarjobb'}>Sommarjobb</SelectItem>
      </Select>
      </Box>

      <Box height="max-content">
      <Select
       
        id="varaktighet"
        name="varaktighet"
        color="warning"
        variant="bordered"
        fullWidth
        label="Varaktighet"
        className="w-full"
        isRequired
      >
        <SelectItem key={'Heltid'} value={"Heltid"}>Heltid</SelectItem>
        <SelectItem
          key={'Deltid'}
          value={'Deltid'}
        >
          Deltid
        </SelectItem>
      </Select>
      </Box>
    </Grid>


    <Textarea
        labelPlacement="outside"
        placeholder="Arbetsbeskrivning"
        className="my-4"
        variant="bordered"
        color="warning"
        fullWidth
        isRequired
        id="mainBody"
        label="Arbetsbeskrivning..."
       
      />

    <Button
      className="mt-6"
      type="submit"
      color="warning"
      variant="bordered"
      fullWidth
    >
      Publicera
    </Button>
   
  </form>
  </div>
  )
}

export default About
