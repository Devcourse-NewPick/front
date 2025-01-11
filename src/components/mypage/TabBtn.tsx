import styled from "styled-components";
import { BOOKMARK, SUBSCRIBE, SUMMARYNEWS } from "@/constants/mypageData";

interface TabProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

function TabBtn({activeTab, setActiveTab}: TabProps) {

  return (
    <TabBtnStyled>
      <button
        onClick={() => setActiveTab("subscribe")}
        className={activeTab === "subscribe" ? "active" : ""}
      >
        <p>구독한 뉴스레터 ({SUMMARYNEWS.length})</p>
      </button>
      <button
        onClick={() => setActiveTab("bookmark")}
        className={activeTab === "bookmark" ? "active" : ""}
      >
        <p>북마크한 뉴스레터 ({BOOKMARK.length})</p>
      </button>
      <button
        onClick={() => setActiveTab("newsletterSetting")}
        className={activeTab === "newsletterSetting" ? "active" : ""}
      >
        <p>뉴스레터 설정</p>
      </button>
    </TabBtnStyled>
  );
}

const TabBtnStyled = styled.div`
    height: 100%;
    margin: 60px 0 40px 0;
    border-bottom: 1px solid ${({theme}) => theme.color.line};

    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    button {
        padding: 0.5rem 0;
        width: 12rem;
        background-color: transparent;
        color: ${({theme}) => theme.color.lightGrey};
        font-size: ${({theme}) => theme.fontSize.small};
        margin-bottom: -1px;
        border-bottom: 1px solid transparent;
        transition: border-bottom 0.2s ease, color 0.2s ease;

        p {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
        }

        &.active {
            color: ${({theme}) => theme.color.text};
            border-bottom: 1px solid ${({theme}) => theme.color.text};
        }

        &:hover {
            color: ${({theme}) => theme.color.text};
            border-bottom: 1px solid ${({theme}) => theme.color.text};
        }
    }

`;

export default TabBtn;