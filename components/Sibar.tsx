import { Box, Divider, Flex } from '@chakra-ui/react';
import { defineStyleConfig } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react';
import { buttons } from '@/data/buttons';
export const dividerTheme = defineStyleConfig({
  defaultProps: {
      size: 'xl',
      variant: 'thick',
      colorScheme: 'brand',
  },
})

const Sibar = () => {
  const uppperIcons = buttons.slice(0, 2);
  const midIcons = buttons.slice(2, 6);
  const lowerIcons = buttons.slice(6, 13);
  const midLowerIcons = buttons.slice(13, 14);
  return (
    <Flex flexDir={'column'} justifyContent={'space-between'} h={'90vh'} w={'4%'} background={'#0F0F1B'} className='border-r-[1px] border-[#232341] fixed' py={8} >
      <Flex flexDir={'column'}   >
        <Flex flexDir={'column'} gap={6}  justifyContent={'space-between'} alignItems={'center'} >
          <Flex flexDir={'column'} gap={2}>
            {uppperIcons.map((upperIcon, index) => {
              return (
                <Box as={'div'} className={`${upperIcon.iconColor} w-8 h-8 rounded-full flex items-center justify-center`}   >
                  <Image src={upperIcon.iconUrl} alt={upperIcon.iconLocation} width={20} height={20} />
                </Box>
              )
            })}
          </Flex>
          <Divider className={`w-full `}  borderColor={'#232341'}/>
          <Flex flexDir={'column'} gap={2}>
            {midIcons.map((midIcon, index) => {
              return (
                <Box as={'div'} className={`${midIcon.iconColor} w-8 h-8 rounded-full flex items-center justify-center`}  >
                  <Image src={midIcon.iconUrl} alt={midIcon.iconLocation} width={25} height={25} />
                </Box>

              )
            })}
          </Flex>
<Divider className='w-full' borderColor={'#232341'} />

        </Flex>
      </Flex>
      <Flex flexDir={'column'} justifyContent={'space-between'} alignItems={'center'} gap={6}>
        <Flex flexDir={'column'} gap={2}>
          {lowerIcons.map((lowerIcon, index) => {
            return (

              <Box as={'div'} className={`${lowerIcon.iconColor} w-[8] h-[8] rounded-full bg-[${lowerIcon.iconColor}]`}>
                <Image src={lowerIcon.iconUrl} alt={lowerIcon.iconLocation} width={25} height={25} />
              </Box>

            )
          })}
        </Flex>
<Divider className='w-full color-[#232341]' colorScheme={'red'}/>  
        <Flex flexDir={'column'} gap={2}>
          {
            midLowerIcons.map((midLower, index) => {
              return (
                <Box>
                  <Image src={midLower.iconUrl} alt={midLower.iconLocation} width={25} height={25} />

                </Box> 
              )
            })
          }
        </Flex>
      </Flex>


    </Flex>

    
  )
}

export default Sibar