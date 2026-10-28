// Tells kit components whether they sit inside a dark <CaseSection dark>, so they
// can swap hairline and secondary-text colours without extra props.
import { createContext, useContext } from 'react';

export const DarkContext = createContext(false);
export const useDark = () => useContext(DarkContext);
