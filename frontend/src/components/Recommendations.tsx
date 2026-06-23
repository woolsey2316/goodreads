import styled from 'styled-components'

const Section = styled.section`
  margin-top: 12px;
  padding-bottom: 24px;
  border-bottom: 1px solid #D8D8D8;
`
const Heading = styled.h3`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.15;
  margin: 12px 0;
  text-transform: uppercase;
`
export const Recommendations = () => {
  return <Section>
    <Heading>Recommendations</Heading>
  </Section>
}