import { useState } from 'react'
import ReactPlayer from 'react-player'
import { RichText } from 'prismic-reactjs'
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  Icon,
  VStack,
} from '@chakra-ui/react'
import { FaPlayCircle } from 'react-icons/fa'
import { VideoSlice } from '../../types'

export const Video = ({ primary }: VideoSlice) => {
  const [playing, setPlaying] = useState(false)
  const { video_url: videoUrl, content, image, title } = primary
  if (!videoUrl.embed_url) return null

  return (
    <AspectRatio w="100%" ratio={16 / 9} h="590px">
      <>
        <ReactPlayer
          url={videoUrl.embed_url}
          width="100%"
          height="100%"
          playing={playing}
        />
        <Center
          bg={`url(${image.url}) no-repeat center / cover`}
          opacity={playing ? '0' : '1'}
          onClick={() => setPlaying(!playing)}
          transition="all ease-in-out 0.3s"
          cursor="pointer"
          _hover={{
            svg: {
              fill: 'circley.300',
              opacity: '0.8',
            },
          }}
        >
          <VStack spacing="20px" color="white">
            {title && (
              <Heading
                as="h3"
                fontSize={{ base: '. 8rem', md: 'md', lg: '3xl' }}
                textAlign="center"
                margin={{ base: '0 22.5%', lg: '0 12.5%' }}
              >
                {title}
              </Heading>
            )}
            {Boolean(content.length) && (
              <Box
                sx={{
                  p: {
                    fontSize: { base: 'sm', lg: 'lg' },
                    textAlign: 'center',
                    margin: { base: '0 22.5%', lg: '0 12.5%' },
                  },
                }}
              >
                {RichText.render(content)}
              </Box>
            )}
            <Icon
              as={FaPlayCircle}
              w={{ base: '50px', lg: '70px' }}
              h={{ base: '50px', lg: '70px' }}
              fill="white"
              transition="all ease-in-out 0.3s"
            />
          </VStack>
        </Center>
      </>
    </AspectRatio>
  )
}
