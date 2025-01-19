import styled from "styled-components";
import SubscribeStateToggle from "@/components/common/subscribe/SubscribeStateToggle";
import { USER1 } from "@/lib/mypageData";

function MyProfile() {
  
  return (
    <ProfileStyled>
      <div className="profile">
        <img src="/icons/profile_dummy.jpg" alt="prifile-img" />
        <div className="profile-text">
          <h4>{USER1.name}</h4>
          <p>{USER1.email}</p>
          <ul>
            {USER1.keyword.map((keyword, i) => (
              <li key={i}>{keyword.keyword}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="subscribe">
        <SubscribeStateToggle />
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 2rem;

    .profile {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;

        img {
            height: 100px;
            width: 100px;
            border: 1px solid ${({theme}) => theme.color.border};
            border-radius: ${({theme}) => theme.borderRadius.circle};
        }

        .profile-text {
            h4 {
                font-size: ${({theme}) => theme.fontSize.medium};
            }

            p {
                color: ${({theme}) => theme.color.lightGrey};
                padding: 0.25rem 0;
            }

            ul {
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 0.125rem 0.875rem;
                color: ${({theme}) => theme.color.mediumGrey};
                font-size: ${({theme}) => theme.fontSize.extraSmall};
            }
        }

        @media screen and ${({theme}) => theme.mediaQuery.mobile} {
            flex-direction: column;
        };
    }

    @media screen and ${({theme}) => theme.mediaQuery.tablet} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
    }
`;

export default MyProfile;