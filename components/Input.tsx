import { Icon, Input, InputGroup, InputLeftElement, Select } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import React from 'react'

const Inputval = () => {
  return (
    <div className='flex flex items-center pt-2 px-12 gap-4'>
        <div className='basis-1/12'>
<Select placeholder='Sort By' className='outline-none' borderRadius={'3xl'} borderColor={'#232341'} w={'100%'} >
<option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>
</Select>
        </div>
        <div className='basis-11/12'>
<InputGroup borderColor={'#232341'} borderRadius={'3xl'} textColor={'#232341'} >
<InputLeftElement
pointerEvents={'none'}
children={<Icon as={Search2Icon} />}
/>
<Input placeholder='Search' textColor={'#232341'} className='placeholder:text-[#232341]'/>
</InputGroup>
        </div>


    </div>
  )
}

export default Inputval;