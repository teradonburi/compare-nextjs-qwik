import {PageConfig} from 'next';
export { getStaticProps } from "@/components/TopPage";
import TopPage from "@/components/TopPage";

export const config: PageConfig = {
	unstable_runtimeJS: false,
};

export default TopPage
