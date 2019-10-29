import Link from 'next/link'

import styled, { css } from 'styled-components'

import colors from '@/styles/colors'

const Wrapper = styled.main`
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.5;

  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`

const AWrapper = styled.a`
  color: #0094FF !important; 
`

const a = (props) => (
  <Link href={props.href}>
    <AWrapper {...props} target='_blank' />
  </Link>
)

const img = styled.img`
  max-width: 100%;
`

const pre = styled.pre`
  overflow: scroll;
  max-height: 300px;
  padding: 10px;
  font-size: 1.6rem;
  border: 1px solid #ddd;
  border-radius: 3px;
`

const code = styled.code`
  display: block;
`

const h = css`
  color: #333;
  font-weight: 500;
  letter-spacing: -0.0125rem;
  margin-top: 20px;
  margin-bottom: 10px;
`

const h1 = styled.h1`
  ${h}
  color: ${colors.header};
  font-size: 4rem;
`

const h2 = styled.h2`
  ${h}
  font-size: 2.6rem;
`

const p = styled.p`
  margin: 25px 0;
`

const list = css`
  margin: 0 10px;
  padding: 0 10px;
  list-style-position: inside;
`

const ul = styled.ul`
  ${list}
`

const ol = styled.ol`
  ${list}
`

export default {
  wrapper: Wrapper,
  a,
  img,
  pre,
  code,
  h1,
  h2,
  p,
  ul,
  ol
}