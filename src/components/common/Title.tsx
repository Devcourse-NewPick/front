import { styled } from "styled-components";
import { ColorKey, HeadingSize } from "../../styles/theme";

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: ColorKey;
}

const Title = ({ children, size, color }: Props) => {
  return (
    <StyledTitle size={size} color={color}>
      {children}
    </StyledTitle>
  );
};

const StyledTitle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.text};
  transition: color 0.3s ease;
  margin: 0;
`;

export default Title;