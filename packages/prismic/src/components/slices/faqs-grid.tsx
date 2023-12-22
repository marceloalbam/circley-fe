import { useDocument } from '@wpro/prismic'
import { RichText } from 'prismic-reactjs'
import {
  Container,
  SimpleGrid,
  Box,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import {
  EntityType,
  FaqAccordionSlice,
  FaqsAccordionType,
  FaqsGridSlice,
} from '../../types'

export const FaqsGrid = ({ primary }: FaqsGridSlice) => {
  const { document } = useDocument<FaqsAccordionType>({
    id: primary.accordion.id ?? '',
    types: [EntityType.FaqsAccordions],
  })
  const { body } = document?.data ?? {}

  return (
    <Container
      as={SimpleGrid}
      maxW="container.xl"
      columns={{ base: 1, md: 2, lg: 3 }}
      gap="40px"
    >
      {body?.map((slice, i) => {
        return <AccordionSection key={i} {...slice} />
      })}
    </Container>
  )
}

const AccordionSection = ({ primary, items }: FaqAccordionSlice) => {
  return (
    <div>
      <Text
        as="h2"
        fontSize="lg"
        color="secondary.400"
        fontFamily="body"
        fontWeight="semibold"
        mb="20px"
      >
        {primary.title}
      </Text>

      <Accordion allowMultiple allowToggle>
        {items.map((item, i) => (
          <AccordionItem key={i}>
            <h3>
              <AccordionButton>
                <Box flex="1" textAlign="left">
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h3>
            <AccordionPanel pb={4}>
              {RichText.render(item.content)}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
