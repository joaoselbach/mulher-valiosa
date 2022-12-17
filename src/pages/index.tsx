import Head from 'next/head'

import { Box } from '@chakra-ui/react'
import { Banner } from '~/containers/banner'

import Header from '~/components/Header'
import { Notebook } from '~/containers/notebook'
import { BlackCard } from '~/containers/blackCard/blackCard'
import { Content } from '~/containers/content/content'
import { Depoimentos } from '~/containers/depoimentos/depoimentos'
import { Videos } from '~/containers/videos'
import { Prints } from '~/containers/prints'
import { Sell } from '~/containers/sell/Sell'
import { About } from '~/containers/about'
import { Faq } from '~/containers/faq/faq'
import { Copyright } from '~/components/Copyright'
import Caroussel from '~/components/Caroussel'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Mulher Valiosa</title>
      </Head>
      <Header />
      <Box as="main" overflow="hidden">
        <Box
          backgroundImage="/images/bg.png"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Banner />
        </Box>
        <Notebook />
        <BlackCard />
        <Content />
        <Depoimentos />
        <Caroussel />
        
        <Box
          backgroundImage="/images/video.png"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        >
          <Videos />
        </Box>
        <Prints />
        <Sell />
        <About />
        {/* <Box
          height="100%"
          backgroundImage="/images/footer.png"
          backgroundPosition="center"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
        > */}
        <Faq />
        {/* </Box> */}
        <Copyright />
      </Box>
    </>
  )
}

export default Home
