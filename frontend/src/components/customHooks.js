// customHooks.js
import { useReducer } from 'react';

const initialState = {
    inputTitle: '',
    inputStart: new Date(),
    inputEnd: new Date(),
    isFormVisible: false,
    selectedColor: '#ff0000',
    calendars: [
        { id: 1, name: 'Red Calendar', color: '#ff0000', events: [], visible: true },
        { id: 2, name: 'Green Calendar', color: '#00ff00', events: [], visible: true },
        { id: 3, name: 'Blue Calendar', color: '#0000ff', events: [], visible: true },
    ]
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_INPUT_TITLE':
            return { ...state, inputTitle: action.payload };
        case 'SET_INPUT_START':
            return { ...state, inputStart: action.payload };
        case 'SET_INPUT_END':
            return { ...state, inputEnd: action.payload };
        case 'TOGGLE_FORM_VISIBILITY':
            return { ...state, isFormVisible: !state.isFormVisible };
        case 'SET_SELECTED_COLOR':
            return { ...state, selectedColor: action.payload };
        case 'SET_CALENDARS':
            return { ...state, calendars: action.payload };
        default:
            throw new Error();
    }
}

export function useCalendarState() {
    const [state, dispatch] = useReducer(reducer, initialState);    
    const setInputTitle = (value) => dispatch({ type: 'SET_INPUT_TITLE', payload: value });
    const setInputStart = (value) => dispatch({ type: 'SET_INPUT_START', payload: value });
    const setInputEnd = (value) => dispatch({ type: 'SET_INPUT_END', payload: value });
    const setIsFormVisible = () => dispatch({ type: 'TOGGLE_FORM_VISIBILITY' });
    const setSelectedColor = (value) => dispatch({ type: 'SET_SELECTED_COLOR', payload: value });
    const setCalendars = (value) => dispatch({ type: 'SET_CALENDARS', payload: value });
    
    return {
        ...state,
        setInputTitle,
        setInputStart,
        setInputEnd,
        setIsFormVisible,
        setSelectedColor,
        setCalendars
    };
}
