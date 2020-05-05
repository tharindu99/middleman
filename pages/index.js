import Head from 'next/head'

import {Container,Header, Grid, Segment,Icon } from 'semantic-ui-react'
import MainMenu from '../components/mainmenu/mainmenu'
import Testcase_registry from '../components/testcase_registry/testcase_registry'

export default function Home() {
  return (
    <div>
      <Container style={{ padding: '2em 0em' }}>
      <Head>
        <title>CTAF-MiddleMan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header as='h2' textAlign='center'>CTAF : MiddleMan</Header>

      <Grid columns={2}>
        <Grid.Column width={4}>
          <Header as='h5' icon='database' content='Test case Registry' />
          
          <Segment attached='top'>
            <Testcase_registry></Testcase_registry>
          </Segment>
        </Grid.Column>
        <Grid.Column width={12}> 
          <MainMenu></MainMenu>
          <Segment attached='top'>Segment 1</Segment>
        </Grid.Column>
      </Grid>

      </Container>
     
    
    
      
      

       

      {/* <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer> */}
     </div>
  )
}
