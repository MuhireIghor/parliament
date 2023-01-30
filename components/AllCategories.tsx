import { Box, Flex, Text, Icon } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const AllCategories = ({ color, icon, title, description, buttons }: Currencies) => {
    return (
        <div className='flex flex-col  border-2 h-full  border-[#232341] bg-[#0F0F1B]/30 rounded-3xl gap-2'>
            <div className='flex justify-center items-center gap-2  h-4/6 py-6'>
                <div className='basis-4/12 flex items-center justify-center'>
                    <Image src={icon} alt={color} width={25} height={25} />
                </div>
                <div className=''>
                    <Text textColor={'white'} fontSize={'xl'}>{title}</Text>
                    <Text>{description}</Text>
                </div>
            </div>
            <div className='h-2/6 color rounded-b-2xl'>
                <div className='gap-2 flex  h-full pl-4 gap-2 items-center'>
                    {
                        buttons.map((button, index) => {
                            return (
                                <Box as={'button'} className={`flex items-baseline ${button.color} rounded items-center justify-center  px-3 py-[2px]`}>
                                    {button.icon && (
                                        <Icon as={button.icon} color={'rgba(255, 255, 255, 0.08)'} />
                                    )}
                                    <Text noOfLines={2}>{button.content}</Text>
                                </Box>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default AllCategories;