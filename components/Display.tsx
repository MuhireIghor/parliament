import { currencies } from '@/data/currencies';
import { Divider, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react';
import TrendCurrencies from './TrendCurrencies';
import Inputval from './Input';
import { allCategories } from '@/data/AllCategories';
import AllCategories from './AllCategories';


const Display = () => {
    return (
        <div className='flex flex-col ml-16'>
            <div className='w-full pl-12 font-semibold pt-2 text-[#AAAABF] '>
                <Text fontSize='md'>Trending Communities</Text>
            </div>
            <div className='grid grid-cols-3 gap-2 pb-4 pt-12 px-12' >
                {
                    currencies.map((currency, index) => {
                        return (
                            <TrendCurrencies icon={currency.icon} color={currency.color} title={currency.title} description={currency.description} buttons={currency.buttons} />
                        )
                    })
                }
            </div>
            <Divider borderColor={'#232341'} w={'100%'} />
            <Inputval />
            <div className='grid grid-cols-3 gap-4 w-full py-8 flex flex-col items-center justify-center px-12 py-4'>
                {
                    allCategories.map((category, index) => {
                        return (
                            <AllCategories color={category.color} icon={category.icon} title={category.title} description={category.description} buttons={category.buttons} />
                        )
                    })
                }

            </div>

        </div>
    )
}

export default Display