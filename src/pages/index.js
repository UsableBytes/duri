import React from 'react';
import { VideoSection } from '../pageComponent/homePage/videoSection';
import { TourSection } from '../pageComponent/homePage/tourSection';
import  { ContentSection } from '../pageComponent/homePage/contentSection';
import { GuideSection } from '../pageComponent/homePage/guideSection';
import { MainSectionContainer } from '../utils/index.style';
import Layout from '../components/Layout';
import SEO from '../components/seo';

export default function IndexPage() {

	return (
		<Layout>
			<SEO title='Home' />
				<VideoSection/>
				<MainSectionContainer>
					<TourSection/>
					<ContentSection/>
					<GuideSection/>
				</MainSectionContainer>
		</Layout>
	);
}
