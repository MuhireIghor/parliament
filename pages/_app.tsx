import '@/styles/globals.css';
import '@/styles/currency.css';
import '@/styles/AllCategories.css';
import '@/styles/sidebar.css';
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider>
<Component {...pageProps} />
</ChakraProvider>
  ) 
}
