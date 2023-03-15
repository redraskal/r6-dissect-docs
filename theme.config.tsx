import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>r6-dissect</span>,
  project: {
    link: 'https://github.com/redraskal/r6-dissect',
  },
  chat: {
    link: 'https://discord.gg/XdEXWQZZAa',
  },
  docsRepositoryBase: 'https://github.com/redraskal/r6-dissect-docs/edit/main',
  footer: {
    text: 'Docs powered by Nextra',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s - r6-dissect'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
        'https://dissect.redraskal.dev' +
        (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return <>
      <meta property="og:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'r6-dissect'} />
      <meta property="og:description" content={frontMatter.description || 'A Match Replay API & CLI for Rainbow Six: Siege\'s Dissect (.rec) format.'} />
    </>
  },
}

export default config
