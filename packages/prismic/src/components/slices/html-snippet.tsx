import Head from 'next/head'
import { HTMLSnippetSlice } from '../../types'
import { Box } from '@chakra-ui/react'
import Script from 'next/script'
import parse from 'html-react-parser'
import React, { useRef } from 'react'
import { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

const ScriptComponent = ({ src }: { src: string }) => {
  const id = useMemo(() => uuidv4(), [])
  const containerRef = useRef<HTMLDivElement>(null)

  const moveScript = () => {
    const iframe = document.querySelector('iframe._lpSurveyEmbed')
    if (iframe) {
      containerRef?.current?.appendChild(iframe)
    }
  }

  return (
    <Box ref={containerRef} id={`script-container${id}`}>
      <Script
        id="script"
        type="text/javascript"
        src={src}
        async
        onLoad={moveScript}
      />
    </Box>
  )
}

const useHtmlSnippet = ({ html }: { html: string }) => {
  const getScriptTagRegExp = RegExp(/<script src="(.*)<\/script>/gi)

  const scriptsWithSrc = html?.match(getScriptTagRegExp)
  const getScriptUrlsRegex = RegExp(/src="(.*)"><\/script>/)

  const scriptUrls = scriptsWithSrc?.map(
    (script) => script.match(getScriptUrlsRegex)?.[1]
  )

  const finalHtml = html?.replace(getScriptTagRegExp, '')

  return {
    finalHtml,
    scriptUrls,
  }
}

export const HtmlSnippet = ({ primary }: HTMLSnippetSlice) => {
  const { html, scripts } = primary

  const { finalHtml, scriptUrls } = useHtmlSnippet({ html: html ?? '' })

  return (
    <Box w={'100%'}>
      {scripts && <Head>{parse(scripts)}</Head>}
      {html && (
        <Box
          pt={5}
          w="100%"
          dangerouslySetInnerHTML={{
            __html: finalHtml ?? '',
          }}
        />
      )}
      {scriptUrls?.map((nextScriptUrl, i) => {
        if (!nextScriptUrl) {
          return null
        }
        return (
          <Box key={`${nextScriptUrl}${i}`}>
            <ScriptComponent src={nextScriptUrl} />
          </Box>
        )
      })}
    </Box>
  )
}
