import React, { Component, createContext } from 'react';

export const ThemeContext = createContext(); // Consumer and Provider

export class ThemeProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { isDarkMode: false };
		this.toggleTheme = this.toggleTheme.bind(this);
	}

	toggleTheme() {
		this.setState({ isDarkMode: !this.state.isDarkMode });
	}

	render() {
		return (
			// whenever run createContext, get Provider
			// <ThemeContext.Provider value={{isDarkMode: this.state.dark}>{this.props.children}</ThemeContext.Provider>;
			<ThemeContext.Provider
				value={{ ...this.state, toggleTheme: this.toggleTheme }}
			>
				{this.props.children}
			</ThemeContext.Provider>
		);
	}
}
