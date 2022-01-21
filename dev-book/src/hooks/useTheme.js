import React from 'react';
import { ThemeContext } from '../context/theme';

export const useTheme = () => React.useContext(ThemeContext);