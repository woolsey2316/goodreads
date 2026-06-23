import styled from 'styled-components'
const Section = styled.section`
  margin-top: 12px;
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
const Text = styled.p`
  color: #333333;
  font-family: "Lato", "Helvetica Neue", "Helvetica", sans-serif;
  font-size: 14px;
  line-height: 1.15;
  margin: 12px 0;
`
export const Updates = () => {
  return <Section>
    <Heading>Updates</Heading>
    <Text>No More Updates</Text>
  </Section>
}