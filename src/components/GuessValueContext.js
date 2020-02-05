import React from "react";

const GuessValueContext = React.createContext({});
// const ObjectValueContext = React.createContext({});

export const ContextProvider = GuessValueContext.Provider;
export const ContextConsumer = GuessValueContext.Consumer;
export default GuessValueContext;

// export const CombinedContextProvider = ({
// 	guessValue,
// 	updateGameStatusContext,
// 	objectArray,
// 	children
// }) => (
// 	<GuessValueContext.Provider value={(guessValue, updateGameStatusContext)}>
// 		<ObjectValueContext.Provider value={objectArray}>
// 			{children}
// 		</ObjectValueContext.Provider>
// 	</GuessValueContext.Provider>
// );

// export const CombinedContextConsumer = ({ children }) => (
// 	<GuessValueContext.Consumer>
// 		{(guessValue, updateGameStatusContext) => (
// 			<ObjectValueContext.Consumer>
// 				{objectArray =>
// 					children({ guessValue, updateGameStatusContext, objectArray })
// 				}
// 			</ObjectValueContext.Consumer>
// 		)}
// 	</GuessValueContext.Consumer>
// );
