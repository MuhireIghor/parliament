import { Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <div className='flex w-full justify-between items-center py-2 px-4'>
            <div className='flex gap-4'>
                <Image src={'/Symbol.svg'} alt={'parliament'} width={32} height={32} />
                <Text color={'white'}>Parliament</Text>
            </div>
            <div className='flex justify-space-evenly gap-4'>
                <div className='bg-[#19192E] flex items-center justify-center px-4 gap-4 rounded-md'>
                    <Image src={'/avatar dm(1).svg'} alt={'ellipse'} width={20} height={20} />
                    <Text textColor={'white'}>maxxthedesigner.eth</Text>
                </div>
                <div className='w-8 h-8 bg-[#19192E] rounded-full flex items-center justify-center'>
                    <Image src={'/Icon.svg'} width={20} height={20} alt={'dots'} />
                </div>
                <div className='w-8 h-8 bg-[#19192E] rounded-full flex items-center justify-center'>
                    <Image src={'/Icon(1).svg'} width={20} height={20} alt={'dots'} />
                </div>
            </div>
        </div>
    )
}

export default Navbar