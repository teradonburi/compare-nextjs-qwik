import React, { Suspense } from "react";
const GridLayout = React.lazy(() => import('@/component/GridLayout'));


export default function Home() {
  return (
      <main>
        <div style={{display: 'flex', background: 'grey', width: '100vw', height: '100vh', contain: 'strict'}}>
          <div style={{margin: 'auto', width: 'fit-content'}}>First View</div>
        </div>
        <Suspense fallback={<p>Loading feed...</p>}>
          <div style={{background: 'black', color: 'white'}}>
            <GridLayout />
          </div>
        </Suspense>
      </main>
  );
}
