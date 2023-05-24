import React from 'react'
import Home from './Pages/Home'
import Section from './components/Section/Section'
import { Layout } from 'antd'
import Header from './components/Header/Header'

const { Footer } = Layout
const App = () => {
  return (
    <>
      <Section background={'#3f559394'}>
        <Header>CoolShop React calculator (adder) </Header>
        <Home />
      </Section>
      <Footer className='footer'>
        CoolShop Task ©2023 (
        <a
          style={{
            color: 'black',
            textDecoration: 'underline'
          }}
          href='https://www.linkedin.com/in/taha-chaghtai/'
          target='_blank'
          rel='noreferrer'
        >
          Taha Chaghtai
        </a>
        )
      </Footer>
    </>
  )
}

export default App
