import React from "react";

const GuessValueContext = React.createContext({});

export const ContextProvider = GuessValueContext.Provider;
export const ContextConsumer = GuessValueContext.Consumer;
export default GuessValueContext;
