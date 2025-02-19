import { ArticleDetail as IArticleDetail, ArticleSummary as IArticleSummary } from '@/models/article.model';

import { getFirstImage } from '@/utils/getFirstImage';
import { mapIdToTitle } from '@/utils/mapInterests';
import { dateFormatter } from '@/utils/formatter';
import { stripCodeFence } from '@/utils/stripCodeFence';

/**
 *  `ArticleDetail[]` → `ArticleSummary[]` 변환 함수
 */
export function parseArticles(trends: IArticleDetail[] = []): IArticleSummary[] {
	return trends.map((trend) => ({
		id: trend.id,
		categoryName: mapIdToTitle([trend.categoryId])[0],
		image: getFirstImage(trend.imageUrl!) || '',
		title: stripCodeFence(trend.title),
		summary: stripCodeFence(trend.content),
		date: dateFormatter(trend.createdAt),
		likes: trend.viewcount,
		views: trend.viewcount,
	}));
}

export function parseUrls(urls: unknown, limit: number = 3): string[] {
	if (typeof urls !== 'string') {
		console.warn('parseUrls: Expected string but received:', urls);
		return [];
	}

	return urls
		.split(',')
		.map((url) => url.trim())
		.slice(0, limit);
}
