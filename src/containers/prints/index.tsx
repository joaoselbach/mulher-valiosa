import { Flex } from '@chakra-ui/react'

export const Prints = () => {
  return (
    <Flex
      h="100%"
      minHeight={["2500px", "2200px"]}
      w="100%"
      marginTop={["20rem", "10rem", "1rem"]}
      backgroundImage={["/images/printsMobile.png", "/images/prints.png"]}
      backgroundPosition="center"
      backgroundSize="auto"
      backgroundRepeat="no-repeat"
    />
  )
}
