'use client';

import { useAuth } from '@/hooks/useAuth';
import styled from 'styled-components';
import Image from '@/components/common/Image';
import SubscribeToggle from '@/app/(protected)/mypage/_components/profile/SubscribeToggle';

function Profile() {
	const { user } = useAuth();

	return (
		<ProfileStyled>
			{user && (
				<>
					<div className="profile">
						<Image src={user.profileImg || '/img/profile.jpg'} alt="prifile-img" ratio="square" />
						<div className="profile-text">
							<h4>{user.username}</h4>
							<p>{user.email}</p>
						</div>
					</div>
					<div className="subscribe">
						<SubscribeToggle />
					</div>
				</>
			)}
		</ProfileStyled>
	);
}

const ProfileStyled = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	width: 100%;
	gap: 2rem;

	.profile {
		display: flex;
		flex-direction: row;
		gap: 2rem;
		justify-content: space-between;
		align-items: flex-start;

		img {
			height: 100px;
			width: 100px;
			border: 1px solid ${({ theme }) => theme.color.neutral};
			border-radius: ${({ theme }) => theme.borderRadius.circle};
		}

		.profile-text {
			h4 {
				font-size: ${({ theme }) => theme.fontSize.medium};
			}

			p {
				color: ${({ theme }) => theme.color.subText};
				padding: 0.25rem 0;
			}

			ul {
				display: flex;
				flex-wrap: wrap;
				flex-direction: row;
				gap: 0.125rem 0.875rem;
				color: ${({ theme }) => theme.color.subText};
				font-size: ${({ theme }) => theme.fontSize.extraSmall};
			}
		}
	}
`;

export default Profile;
