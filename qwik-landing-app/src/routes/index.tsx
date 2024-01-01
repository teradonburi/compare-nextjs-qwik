import { $, component$, useOnWindow, useSignal, useStyles$, Slot, useVisibleTask$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import styles from './styles.css?inline';

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};


function useInLoad() {
  const onload = useSignal(false);
  useOnWindow(
    'load',
    $(() => {
      onload.value = true;
    })
  );
  return onload.value;
}

export default component$(() => {
  useStyles$(styles);
  const onload = useInLoad()
  
  return (
    <main 
      style={{height: '100vh'}}
    >
      <div style={{display: 'flex', background: 'grey', width: '100vw', height: '100vh', contain: 'strict'}}>
        <div style={{margin: 'auto', width: 'fit-content'}}>First View</div>
      </div>
      {onload && <List />}
    </main>
  );
});

const Container = component$(() => {
  const ref = useSignal<Element>();
  const signal = useSignal(false);
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      signal.value = true;
      // debug
      // console.log('Container', signal.value)
    });
    observer.observe(ref.value!);
    return () => observer.disconnect();
  }, {
    strategy: 'intersection-observer',
  })
  return (
    <div ref={ref} style={{ minHeight: 100 }}>
      {signal.value ? <Slot /> : null}
    </div>
  )
})

const List = component$(() => {
  return (
    <div 
      style={{
        background: 'black', 
        color: 'white', 
      }}
    >
      {Array(100).fill(null).map((_, i) => ( 
        <Container key={i}>
          <Item />
        </Container>
      ))}
    </div>
  )
})

const Item = component$(() => {
  return <>
    {Array(1000).fill(null).map((_, j) => (
      <div 
        key={j} 
        style={{
          contentVisibility: 'auto',
          containIntrinsicSize: '0 10px',
        }}
      >
        Hello World{j}
      </div>
    ))}
  </>
})

export const head: DocumentHead = {
  title: "Create Qwik App",
  meta: [
    {
      name: "description",
      content: "Generated by create next app",
    },
  ],
};
