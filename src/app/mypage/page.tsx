'use client';

import styled from 'styled-components';
import Profile from '@/components/mypage/profile/Profile';
import TapBtn from '@/components/mypage/TapBtn';

function Page() {


  return (
    <PageStyled>
      <p className='title'>마이페이지</p>
      <Profile />
      <TapBtn/>

    </PageStyled>
  );
}

const PageStyled = styled.div`
    margin: 40px 0;
    
    .title {
        font-size: ${({ theme }) => theme.fontSize.large};
        margin-bottom: 1.25rem;
        font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
`;

export default Page;