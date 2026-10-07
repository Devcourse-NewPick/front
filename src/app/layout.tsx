export const dynamic = 'force-dynamic';
export const revalidate = 0;

import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { ArticleDetail as IArticleDetail, ArticleSummary as IArticleSummary } from '@/models/article.model';
import { fetchUserWithSubscription } from '@/api/user';
import { fetchTrendList } from '@/api/article';
import { parseArticles } from '@/utils/parseArticles';

import '@/styles/global';
import StyledComponentsRegistry from '@/lib/registry';
import Providers from '@/components/providers/Providers';
import Layout from '@/components/layout/MainLayout';
import ToastContainer from '@/components/common/toast/ToastContainer';
import ModalContainer from '@/components/common/modal/ModalContainer';

export const metadata: Metadata = {
	title: '뉴픽: NewPick',
	description: '뉴스를 새롭게 고르다',
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const user = await fetchUserWithSubscription();
	// console.log('✅ layout.tsx(user): ', user);

	let parsedTrends: IArticleSummary[] = [];
	try {
		const trends: IArticleDetail[] = await fetchTrendList();
		parsedTrends = parseArticles(trends);
	} catch (error) {
		console.error(error);
	}

	return (
		<html lang="ko">
			<head>
				<link rel="icon" href="/icons/favicon.svg" />
			</head>
			<body>
				<StyledComponentsRegistry>
					<Providers initialUser={user} initialTrends={parsedTrends}>
						<Layout>{children}</Layout>
						<ToastContainer />
						<ModalContainer />
						<SpeedInsights />
					</Providers>
				</StyledComponentsRegistry>
				{/* MacFolio 휴대폰 화면 안(iframe)에서 열릴 때 맨 위 색을 알려 준다. 혼자 열면 아무것도 하지 않는다 (public/macfolio-bar-color.js) */}
				<Script src="/macfolio-bar-color.js" strategy="afterInteractive" />
			</body>
		</html>
	);
}
