import Head from 'next/head'
import Nav from './nav'
import Footer from './footer'
import Styles from '../styles/index.scss'

export default ({ children, title='This is a default title' }) => (
  <div>
    <Head>
      <title>{ title }</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <style dangerouslySetInnerHTML={{__html: Styles}}/>
    </Head>
    <header>
      <Nav />
    </header>
    <main className="main-content">
      { children }
    </main>
    <Footer>
    </Footer>
  </div>
)
