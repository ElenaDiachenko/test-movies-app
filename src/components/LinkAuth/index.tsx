import { FC } from 'react';

import { LinkBox, StyledText } from './styles';

type LinkAuthProps = {
  title: string;
  navigate: () => void;
};

const LinkAuth: FC<LinkAuthProps> = ({ navigate, title }) => {
  return (
    <LinkBox activeOpacity={0.8} onPress={navigate}>
      <StyledText>{title}</StyledText>
    </LinkBox>
  );
};

export default LinkAuth;
