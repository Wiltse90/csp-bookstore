import React from "react";
import ReactDOM from 'react-dom'
import HomeScreen from "./HomeScreen";


it('renders without chrashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HomeScreen></HomeScreen>, div)
})