import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props) {
	const [language, setLanguage] = useState('english');
	const changeLanguage = (e) => setLanguage(e.target.value);

	return (
		<LanguageContext.Provider value={{ language, changeLanguage }}>
			{props.children}
		</LanguageContext.Provider>
	);
}

// create high order component, which takes different Component as an argument
// and additional props, returns the same Component with all original props
// and injects in languageContext(any names) which is coming from
// LanguageContext.Consumer. Take the value and passing in to Component.

// export const withLanguageContext = (Component) => (props) => (
// 	<LanguageContext.Consumer>
// 		{(value) => <Component languageContext={value} {...props} />}
// 	</LanguageContext.Consumer>
// );
