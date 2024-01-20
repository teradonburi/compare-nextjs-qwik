'use client'

import React from 'react';

interface Props {
  children: React.ReactNode;
  loadMore: boolean;
  onLoadMore: () => void;
}

 const InfiniteList: React.FC<Props> = (props) => {
  const { children, loadMore, onLoadMore } = props; 
  const [page, setPage] = React.useState(0)
  const ref = React.useRef(null)

  React.useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if(isIntersecting) {
          setPage(page + 1)
        }
      },
      { rootMargin: '150%' }
    );
    if (ref.current) {
      intersectionObserver.observe(ref.current);
    }
  }, [page, onLoadMore]);

  React.useEffect(() => {
    if (page > 0) {
      onLoadMore()
    }
  }, [onLoadMore, page])

  return (
    <>
      {children}
      {loadMore && <div ref={ref} >Loading...</div>}
    </>
  );
};

export default InfiniteList