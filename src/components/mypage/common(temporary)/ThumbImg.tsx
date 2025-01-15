import styled from "styled-components";
import { SyntheticEvent } from "react";
import Image from "next/image";

interface ResponsiveImageStyleProps {
  aspectratio?: number | "auto";
}


interface ThumbImgProps extends ResponsiveImageStyleProps {
  src?: string | null;
  height?: string;
}

function ThumbImg({src, height, aspectratio = "auto"}: ThumbImgProps) {

  const imageOnErrorHandler = (e: SyntheticEvent<HTMLImageElement>) => {
      e.currentTarget.onerror = null;
      e.currentTarget.src = "/img/newpick_default_img.jpg";
  }
  return (
    <ContainerStyled height={height} aspectratio={aspectratio}>
      <SourceStyled />
      {/*  type="image/webp"*/}
      {/*  src={validSrc}*/}

      <ThumbImgStyled
        src={src}
        alt="news-img"
        loading="lazy"
        quality={75}
        sizes="100vw"
        fill
        onError={imageOnErrorHandler}
      />
    </ContainerStyled>
  );
}


const ThumbImgStyled = styled(Image)<ThumbImgProps>`
    position: relative !important;
    display: block;
    height: unset !important;
    width: 100%;

    max-height: 24rem;
    min-height: 2rem;

    object-fit: cover;
    content-visibility: auto;
    object-position: center;
`;

const SourceStyled = styled.source`
`

const ContainerStyled = styled.div<ThumbImgProps>`
    position: relative;
    display: block;

    overflow: hidden;
    border-radius: ${({theme}) => theme.borderRadius.medium};
    margin-bottom: 1.25rem;

    height: ${({height}) => height};

    ${ThumbImgStyled} {
        aspect-ratio: ${({aspectratio}) => aspectratio};
    }
`

export default ThumbImg;