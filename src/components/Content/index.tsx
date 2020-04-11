import React from 'react'
import { MDXProvider } from '@mdx-js/react'

import components from './Content.styled'

interface Props {
  children: React.ReactNode
}

export const Content = ({ children }: Props) => (
  <MDXProvider components={components}>{children}</MDXProvider>
)
