import React from 'react'
import InfiniteList from './InfiniteList'

const GridLayout: React.FC = () => {
  const PER_PAGE = 100
  const [listItems, setListItems] = React.useState([
    ...Array(PER_PAGE).keys(),
  ]);
  const [loadMore, setLoadMore] = React.useState(true)

  return (
    <InfiniteList 
      loadMore={loadMore}
      onLoadMore={() => {
        const newItems = [...listItems, ...Array(PER_PAGE).keys()];
        setLoadMore(newItems.length < 100000);
        setListItems(newItems);
      }}
    >
      {listItems.map((_, i) => (
        <div key={i}>Hello World{i}</div>
      ))}
    </InfiniteList>
  )
}

export default GridLayout