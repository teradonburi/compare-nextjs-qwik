import {
	Slot,
	component$,
	useSignal,
	useVisibleTask$,
	type PropFunction,
} from '@builder.io/qwik';

type InfiniteListProps = {
	loadMore: boolean;
	onLoadMore$: PropFunction<() => void>;
};

export default component$<InfiniteListProps>(({ loadMore, onLoadMore$ }) => {
	const ref = useSignal<Element>();

	// eslint-disable-next-line qwik/no-use-visible-task
	useVisibleTask$(() => {
		if (ref.value) {
			const intersectionObserver = new IntersectionObserver(
				([{ isIntersecting }]) => isIntersecting && onLoadMore$(),
				{ rootMargin: '150%' }
			);
			intersectionObserver.observe(ref.value);
		}
	});

	return (
		<>
			<Slot />
			{loadMore && (
				<div ref={ref}>
					<Slot name='loading' />
				</div>
			)}
		</>
	);
});
