import { NewsInfo as INewsInfo } from '@/models/article.model';
import {
	fetchArticle,
	fetchArticleByCategory,
	fetchArticleList,
	fetchPopularArticle,
	fetchRelatedNews,
	fetchTrendList,
} from '@/api/article';
import { ArticleInfo as IArticleInfo, ArticleDetail as IArticleDetail } from '@/models/article.model';
import { useQuery } from '@tanstack/react-query';

/**
 * 특정 기사(slug) 내용을 가져오는 함수
 */
export const getArticleContent = async (slug: string): Promise<IArticleInfo> => {
	return await fetchArticle(slug);
};
export function useArticleContentQuery(slug: string) {
	return useQuery<IArticleInfo, Error>({
		queryKey: ['articleContent', slug],
		queryFn: () => getArticleContent(slug),
	});
}

/**
 * 인기 기사 목록을 가져오는 함수 (조회수 기준 정렬)
 */
export const getPopularArticles = async (
	limit: number = 5,
	offset: number = 0,
	trend: boolean = true
): Promise<IArticleDetail[]> => {
	const { data }: { data: IArticleDetail[] } = await fetchPopularArticle(limit, offset, trend);
	return data;
};
export function usePopularArticlesQuery(limit: number = 5, offset: number = 0, trend: boolean = true) {
	return useQuery<IArticleDetail[], Error>({
		queryKey: ['popularArticles', limit, offset, trend],
		queryFn: () => getPopularArticles(limit, offset, trend),
	});
}

/**
 * 최신 기사 목록을 가져오는 함수
 */
export const getArticleList = async (limit: number = 5, offset: number = 0): Promise<IArticleDetail[]> => {
	const { data }: { data: IArticleDetail[] } = await fetchArticleList(limit, offset);
	return data;
};
export function useArticleListQuery(limit: number = 5, offset: number = 0) {
	return useQuery<IArticleDetail[], Error>({
		queryKey: ['articleList', limit, offset],
		queryFn: () => getArticleList(limit, offset),
	});
}

/**
 * 트렌드 목록을 가져오는 함수
 */
export const getTrendList = async (categoryId?: number): Promise<IArticleDetail[]> => {
	const { data }: { data: IArticleDetail[] } = await fetchTrendList(categoryId);
	return data;
};

/**
 * 특정 카테고리의 기사 목록을 가져오는 함수
 */
export const getCategoryList = async (
	category: number,
	limit: number = 10,
	offset: number = 0
): Promise<IArticleDetail[]> => {
	const { data }: { data: IArticleDetail[] } = await fetchArticleByCategory(category, limit, offset);
	return data;
};

export const getRelatedNews = async (links: string[]): Promise<INewsInfo[]> => {
	const relatedNews: INewsInfo[] = await Promise.all(
		links.map(async (link) => {
			return await fetchRelatedNews(link);
		})
	);

	return relatedNews;
};
