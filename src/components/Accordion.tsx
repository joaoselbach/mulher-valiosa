import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from '@chakra-ui/react'

interface FrequentQuestionsProps {
  title: string
  children: string
}

export const FrequentQuestions = ({
  title,
  children
}: FrequentQuestionsProps) => {
  return (
    <Accordion
      allowToggle
      minWidth={[0, 0, 0, 0, 0, 600]}
      w="100%"
      bgColor="gray.50"
      borderRadius=".5rem"
    >
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box
              flex="1"
              textAlign="left"
              fontWeight={700}
              fontSize="1.2rem"
              p="1rem"
              w="100%"
            >
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel color="gray.700" fontWeight={500} pb={4} maxW={800}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
