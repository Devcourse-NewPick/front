import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import BookmarkIcon from '@/components/common/icons/BookmarkIcon';
import LinkCopyIcon from '@/components/common/icons/LinkCopyIcon';
import BarWidth from '@/components/common/BarWidth';
import SummaryTextBox from '@/components/common/article/SummaryTextBox';
import HeightAutoImg from '@/components/common/HeightAutoImg';
import { useAuthStore } from '@/stores/useAuthStore';
import Spinner from '@/components/common/loader/Spinner';
import NoContentsPage from '@/components/common/NoContentsPage';
import { useTrends } from '@/hooks/useTrends';
import { mapIdToTitle, mapTitleToId } from '@/utils/mapInterests';
import { filterByCategories } from '@/utils/queryNewsletters';

function MySummaryCategory() {
	const { user } = useAuthStore();
	const { trends, isLoading, isError } = useTrends();
	const userInterests = mapIdToTitle(user?.interests ?? []);
	const userArticles = filterByCategories(trends, userInterests);

	if (isLoading) return <Spinner />;
	if (isError) return <div>Error: {'뉴스레터 테이터를 불러오는데 실패했습니다.'}</div>;

	return (
		<>
			<MySummaryCategoryStyled>
				{userArticles.length > 0 ? (
					userArticles.map((article) => (
						<div
							key={article.id}
							className="my-subs-content"
							id={`section-${article.id}`}
							data-categoryid={article.categoryName}
						>
							<div className="top">
								<Link
									href={`/articles?categoryId=${mapTitleToId([article.categoryName])}`}
									className="category-name"
								>
									{article.categoryName}
									<IoIosArrowForward />
								</Link>
								<Link href={`/articles/detail/${article.id}`} className="title-section">
									<h3 className="title-text">{article.title}</h3>
								</Link>
							</div>
							<div className="bottom">
								<div className="img-section">
									<HeightAutoImg src={article.image || null} height={'auto'} />
									<div className="etc">
										<BookmarkIcon newsId={article.id} newsletterId={article.id} />
										<LinkCopyIcon id={article.id} />
										{/*<OrigLinkIcon />*/}
									</div>
								</div>
								<SummaryTextBox flex={3}>{article.summary}</SummaryTextBox>
							</div>
							<BarWidth width={'100%'} className="bar" />
						</div>
					))
				) : (
					<>
						<NoContentsPage text={'오늘의 뉴스레터가 없습니다'} btnText={'메인으로'} moveTo={'/'} />
					</>
				)}
			</MySummaryCategoryStyled>
		</>
	);
}

const MySummaryCategoryStyled = styled.div`
    @keyframes moveForward {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(0.375rem);
        }
    }

    .my-subs-content {
        height: 100%;
        max-width: 100%;
        margin-top: 5rem;
        scroll-margin-top: 7.4rem;

        .top {
            margin-top: 3.75rem;
            margin-bottom: 1.875rem;

            .category-name {
                font-size: ${({ theme }) => theme.fontSize.medium};
                font-weight: ${({ theme }) => theme.fontWeight.medium};
                margin-bottom: 1.25rem;
                color: ${({ theme }) => theme.color.primary};

                &:hover {
                    svg {
                        animation: moveForward .7s linear infinite;
                    }
                }
            }

            .title-section {
                display: flex;
                flex-direction: row;
                gap: 0.5rem;

                .title-text {
                    font-size: ${({ theme }) => theme.fontSize.large};
                    flex: 1;
                }
            }
        }

        .bottom {
            height: 100%;
            display: flex;
            flex-direction: row;
            gap: 1.25rem;

            .img-section {
                flex: 1;

                .etc {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    gap: 1rem;
                    margin-top: 1rem;
                }
            }

            @media (max-width: 768px) {
                flex-direction: column;
                .text, .img-section {
                    flex: none; /* flex 비율 대신 각자 100% 너비 (혹은 auto) */
                    width: 100%;
                }

            }
        }
    }
}
`;

export default MySummaryCategory;
