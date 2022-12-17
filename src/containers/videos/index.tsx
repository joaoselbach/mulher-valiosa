import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Flex,
  Container,
  Box
} from '@chakra-ui/react'
import { VideoContainer } from './styles'

export const Videos = () => {
  return (
    <Flex flexDirection="column" alignItems="center" py="4rem">
      <Tabs variant="soft-rounded" colorScheme="green" alignSelf="center">
        <TabList justifyContent="center" py="1rem">
          <Tab
            fontSize="1.2rem"
            _active={{ color: 'red' }}
            _focus={{ bgColor: 'pink.500', color: 'gray.800' }}
            _selected={{ bgColor: 'pink.500', color: 'gray.800' }}
          >
            Bianca
          </Tab>
          <Tab
            fontSize="1.2rem"
            _active={{ color: 'red' }}
            _focus={{ bgColor: 'pink.500', color: 'gray.800' }}
            _selected={{ bgColor: 'pink.500', color: 'gray.800' }}
          >
            Taísa
          </Tab>
          <Tab
            fontSize="1.2rem"
            _active={{ color: 'red' }}
            _focus={{ bgColor: 'pink.500', color: 'gray.800' }}
            _selected={{ bgColor: 'pink.500', color: 'gray.800' }}
          >
            Laura
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Flex
              justifyContent="center"
              maxWidth={[300, 400, 700, 1000]}
              maxHeight={[200, 300, 700]}
            >
              <iframe
                width="1200"
                height="600"
                src="https://www.youtube.com/embed/djVn4u-SVHE"
                title="Bianca - Curso Mulher Valiosa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              maxWidth={[300, 400, 700, 1000]}
              maxHeight={[200, 300, 700]}
            >
              <iframe
                width="1200"
                height="600"
                src="https://www.youtube.com/embed/BaW6Xc16rOY"
                title="Taísa"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              justifyContent="center"
              maxWidth={[300, 400, 700, 1000]}
              maxHeight={[200, 300, 500]}
            >
              <iframe
                width="1200"
                height="600"
                src="https://www.youtube.com/embed/ifJn4qLwoJU"
                title="Laura"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  )
}
