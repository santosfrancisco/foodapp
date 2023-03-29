import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding-top: 16px;
`;

export const StyledFlatList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  horizontal: false,
  columnWrapperStyle: {
    justifyContent: 'space-between',
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: 16,
    rowGap: 24,
  },
})``;

export const HomeCategoryTitle = styled.Text`
  font-weight: 500;
  font-size: 18px;
  color: #1a1a1a;
  margin-bottom: 12px;
`;
