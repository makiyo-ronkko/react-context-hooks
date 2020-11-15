import React, { Component, createContext } from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component {
	constructor(props) {
		super(props);
		this.state = { language: 'english' };
		this.changeLanguage = this.changeLanguage.bind(this);
	}

	changeLanguage(e) {
		this.setState({ language: e.target.value });
	}

	render() {
		return (
			<LanguageContext.Provider
				value={{ ...this.state, changeLanguage: this.changeLanguage }}
			>
				{this.props.children}
			</LanguageContext.Provider>
		);
	}
}

// create high order component, which takes different Component as an argument
// and additional props, returns the same Component with all original props
// and injects in languageContext(any names) which is coming from
// LanguageContext.Consumer. Take the value and passing in to Component.
export const withLanguageContext = (Component) => (props) => (
	<LanguageContext.Consumer>
		{(value) => <Component languageContext={value} {...props} />}
	</LanguageContext.Consumer>
);
