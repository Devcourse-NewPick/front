'use client'

import styled from "styled-components";
import Button from "@/components/common/Button";
import { CATEGORY, SUBSCRIBECATEGORY } from "@/constants/mypageData";
import Modal from "@/components/common/Modal";
import ModalContents from "@/components/common/ModalContents";
import { LuMailCheck } from "react-icons/lu";
import useMypage from "@/hooks/useMypage";
import { useModal } from "@/hooks/useModal";
import { useLayoutEffect } from "react";

function NewsletterSubscribe() {
  const {handleSelectCate, handleSelectAll, allSelectCate, selectCate, setSelectCate} = useMypage();
  const {isOpen, modalType, openModal, closeModal} = useModal();

  // 유저가 구독 중인 카테고리 초기화면
  useLayoutEffect(() => {
    const subscribedNames = SUBSCRIBECATEGORY.map((item) => item.category);
    const uniqueSubscribed = Array.from(new Set(subscribedNames));
    setSelectCate(uniqueSubscribed);
  }, [ SUBSCRIBECATEGORY ]);

  return (
    <NewsletterSubscribeStyled>
      <div className="text">
        <h3>뉴스레터 설정</h3>
        <p>
          선택된 카테고리를 설정 해주신 후 완료 버튼을 눌러주세요.
          <br />
          내일 보내드리는 뉴스레터부터 적용됩니다.
        </p>
      </div>
      <div className="category-section">
        <div className="all-category">
          <Button
            type="button"
            scheme="default"
            className={allSelectCate ? "active category-btn" : "category-btn"}
            onClick={() => handleSelectAll()}
          >
            전체
          </Button>
        </div>
        <div className="bar" />
        <ul className="categories">
          {CATEGORY.map((cate, index) =>
            <li key={index}>
              <Button
                type="button"
                scheme="default"
                onClick={() => {handleSelectCate(cate)}}
                className={selectCate.includes(cate.category) ? "category-btn active" : "category-btn"}
              >
                {cate.category}
              </Button>
            </li>,
          )}
        </ul>
      </div>
      <div className="btn">
        <Button type="submit" scheme="primary" size="large" onClick={() => openModal("submit")}>완료</Button>
      </div>
      {/*모달*/}
      {isOpen && modalType === "submit" && (
        <Modal isOpen={isOpen} onClose={closeModal}>
          <ModalContents
            icon={<LuMailCheck />}
            title="구독 설정이 완료되었습니다"
            content={`내일부터 새로운 뉴스레터를 보내드려요.`}
            filledButton="확인"
            onConfirmClick={closeModal}
          />
        </Modal>
      )}
    </NewsletterSubscribeStyled>
  );
}

const NewsletterSubscribeStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .text {
        h3 {
            font-size: ${({theme}) => theme.fontSize.large};
            margin-bottom: 0.5rem;
        }

        p {
            color: ${({theme}) => theme.color.subtext};
        }
    }

    .category-section {
        display: flex;
        flex-direction: row;
        gap: 0.875rem;
        background-color: ${({theme}) => theme.color.surface};
        padding: 2rem;
        border-top: 1px solid ${({theme}) => theme.color.text};
        border-bottom: 1px solid ${({theme}) => theme.color.text};


        .bar {
            border-left: 1px solid ${({theme}) => theme.color.lightGrey};
            height: auto;
        }

        .categories {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 0.5rem;
        }

        .category-btn {
            width: max-content;
            color: ${({theme}) => theme.color.primary};
            border-radius: ${({theme}) => theme.borderRadius.capsule};
            border: 1px solid ${({theme}) => theme.color.primary};
        }

        .active {
            color: ${({theme}) => theme.color.background};
            background-color: ${({theme}) => theme.color.primary};
            border-radius: ${({theme}) => theme.borderRadius.capsule};
        }

    }

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 14rem;
        }
    }
`;

export default NewsletterSubscribe;