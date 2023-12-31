
import Head from 'next/head'

export const getStaticProps = (async () =>  {
  return {
    props: {}, 
  }
})

export default function TopPage() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{__html: `
        * {
          box-sizing: border-box;
          padding: 0;
          margin: 0;
        }
        
        html,
        body {
          max-width: 100vw;
          overflow-x: hidden;
        }
      `}}/>
      </Head>
      <main>
        <div style={{background: 'grey', width: '100vw', height: '100vh'}}>
          <div style={{margin: 'auto'}}>First View</div>
        </div>
        <div style={{background: 'black', color: 'white'}}>
          {Array(100000).fill(null).map((_, i) => (
            <div key={i}>Hello World</div>
          ))}
        </div>
      </main>
    </>
  )
} 