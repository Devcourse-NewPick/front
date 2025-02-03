'use client';

import { useSearchParams } from 'next/navigation';
import { ArticleSummary as IArticleSummary } from '@/models/article.model';

import { styled } from 'styled-components';
import Title from '@/components/common/Title';
import Text from '@/components/common/Text';
import CardSlider from '@/components/common/slider/CardSlider';
import BookmarkIcon from '@/components/common/icons/BookmarkIcon';
import { mapIdToTitle } from '@/utils/mapInterests';

interface Props {
	trends?: IArticleSummary[];
}

export default function HotSection({ trends = [] }: Props) {
	const searchParams = useSearchParams();
	const categoryId = searchParams.get('categoryId'); // Query Parameter 가져오기
	const categoryName = mapIdToTitle([Number(categoryId)])[0]; // Query Parameter를 카테고리 이름으로 변환

	console.log('searchParams: ', searchParams);

	return (
		<StyledHotSection>
			<div className="title">
				<Title size="extraSmall" color="primary" weight="bold" className="tag">
					{searchParams ? 'TODAY' : 'HOT'}
				</Title>
				<Title size="extraSmall" weight="semiBold">
					{categoryName} 뉴스레터
				</Title>
			</div>
			<hr />

			<CardSlider
				type="main"
				data={trends.map((trend) => ({
					id: trend.id,
					image: trend.image,
					header: trend.categoryName,
					main: {
						title: trend.title,
						description: trend.summary,
					},
					footer: (
						<>
							<Text color="subText">{trend.date}</Text>
							<div className="right">
								<BookmarkIcon newsId={trend.id} newsletterId={trend.id} />
							</div>
						</>
					),
					url: `/articles/detail/${trend.id}`,
				}))}
			/>
		</StyledHotSection>
	);
}

const StyledHotSection = styled.section`
	width: 100%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	gap: 1rem;
	padding: 3rem 0;

	.title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		gap: 1rem;

		.tag {
			border-radius: ${({ theme }) => theme.borderRadius.capsule};
			background: ${({ theme }) => theme.color.tertiary};
			color: ${({ theme }) => theme.color.primary};
			padding: 0.25rem 1rem;
		}
	}

	hr {
		width: 100%;
		border-bottom: 1px solid ${({ theme }) => theme.color.border};
		margin: 0.25rem 0;
		padding: 0;
	}

	@media ${({ theme }) => theme.mediaQuery.mobile} {
		flex-wrap: wrap;
	}
`;
