import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div style={{
      background: 'black', 
      color: 'white', 
    }}>
      {Array(100000).fill(null).map((_, j) => (
        <div 
          key={j} 
          style={{
            contentVisibility: 'auto',
            containIntrinsicSize: '0 10px',
          }}
        >
          Hello World
        </div>
      ))}
    </div>
  )
})