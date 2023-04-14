import { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { shallow } from 'zustand/shallow';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useStore } from 'stores/store';

type HeaderType = {
  prevRoute?: string;
  navigate: () => void;
  title: string;
};

const Header: FC<HeaderType> = ({ prevRoute, navigate, title }) => {
  const theme = useTheme();

  const { onLogout } = useStore(
    (state) => ({
      currentTheme: state.theme,
      toggleTheme: state.toggleTheme,
      onLogout: state.logoutUser,
    }),
    shallow
  );

  return (
    <View
      style={{
        width: '100%',
        padding: 16,
        marginBottom: 32,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: theme.colors.BACKGROUND_COLOR,
        shadowColor: theme.colors.TITLE_COLOR,
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
      }}>
      {prevRoute && (
        <TouchableOpacity
          onPress={navigate}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicons name="chevron-back" size={30} color={theme.colors.SECONDARY_COLOR} />
          <Text style={{ color: theme.colors.SECONDARY_COLOR, fontWeight: '500' }}>
            {prevRoute}
          </Text>
        </TouchableOpacity>
      )}
      <Text style={{ fontSize: 24, fontWeight: '500', color: theme.colors.TITLE_COLOR }}>
        {title}
      </Text>
      <TouchableOpacity style={{ width: 40 }} onPress={onLogout}>
        <Feather name="log-out" size={26} color={theme.colors.SECONDARY_COLOR} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
