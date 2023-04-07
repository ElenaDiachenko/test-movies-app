import { Dimensions, FlatList } from 'react-native';
import styled, { css } from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.BACKGROUND_COLOR};
    align-items: center;
    justify-content: center;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.TITLE_COLOR};
    font-weight: 600;
    font-size: 18px;
  `}
`;

export const RowContainerStyled = styled(FlatList)`
  ${({ theme }) => css`
    color: ${theme.colors.TITLE_COLOR};
  `}
`;

export const ScreenWidth = Dimensions.get('screen').width;
export const ScreenHeight = Dimensions.get('screen').height;
