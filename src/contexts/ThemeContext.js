import React, { createContext } from 'react';
import useToggleState from '../hooks/useToggleState';

export const ThemeContext = createContext(); // Consumer and Provider

export function ThemeProvider(props) {
	const [isDarkMode, toggleTheme] = useToggleState(false);

	return (
		// whenever run createContext, get Provider
		// <ThemeContext.Provider value={{isDarkMode: this.state.dark}>{this.props.children}</ThemeContext.Provider>;
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{props.children}
		</ThemeContext.Provider>
	);
}
