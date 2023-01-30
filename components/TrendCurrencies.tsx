import { Box, Center, Flex, Icon, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';


const TrendCurrencies = ({ icon, color, title, description, buttons }: Currencies) => {
    return (
        <div className=' w-10/12 flex flex-col items-center justify-center bg-[#0F0F1B]/30 relative rounded-xl gap-2 border-2 border-[#232341]   ' >
            <div className={`absolute flex flex-col w-28 h-28  -top-12 rounded-3xl border-2 border-dashed  border-[#232341] flex flex-col items-center justify-center `}>
                <div className={`w-24 h-24  colorStyle rounded-3xl flex flex-col items-center justify-center bg-[#0F0F1B] shadow-md shadow-[#232341]`}>
                    <div className={`w-20 h-20 rounded-3xl color flex flex-col items-center justify-center `}>
                        <Image src={icon} alt={description} width={40} height={40} />
                    </div>
                </div>
            </div>
            <div className='flex-col items-center justify-center  mt-20 text-white font-semibold '>
                {title}
            </div>
            
       <Center className='text-[#AAAABF] px-12' alignContent={'center'} w={'100%'} >
                {description}
        </Center>
            
            <Flex gap={6} className={'py-4'}>
                {
                    buttons.map((button, index) => {
                        return (
                            <Box as={'button'} className={`flex items-baseline ${button.color} rounded items-center justify-center px-3 py-[2px]`}>
                                {button.icon && (
                                    <Icon as={button.icon} color={'rgba(255, 255, 255, 0.08)'}  />
                                )}
                                <Text>{button.content}</Text>
                            </Box>
                        )
                    })
                }

            </Flex>

        </div>
    )
}

export default TrendCurrencies;