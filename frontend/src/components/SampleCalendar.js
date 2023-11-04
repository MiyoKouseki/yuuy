// SampleCalendar.js
import React from 'react';
import "react-datepicker/dist/react-datepicker.css";
import Modal from './Modal'; 
import EventForm from './EventForm';
import CalendarView from './CalendarView';
import { useCalendarState } from './customHooks';
import {
    getCellClassNames,
    handleDateClick,
    handleEventAdd,
    toggleCalendarVisibility   
} from './utils';
import {
    Checkbox,
    Box,
} from '@mui/material';



const SampleCalendar = () => {
    const {
        inputTitle, setInputTitle,
        inputStart, setInputStart,
        inputEnd, setInputEnd,
        isFormVisible, setIsFormVisible,
        selectedColor, setSelectedColor,
        calendars, setCalendars
    } = useCalendarState();
    
    const visibleEvents = calendars
	  .filter(calendar => calendar.visible)
	  .flatMap(calendar => calendar.events.map(event => ({ ...event, color: calendar.color })));
        
    return (
        <div>
	    <Box sx={{ margin: 2 }}>
		{calendars.map(calendar => (
                    <div key={calendar.id}>
			<Checkbox
                            checked={calendar.visible}
			    onChange={(arg) => toggleCalendarVisibility(calendar.id, calendars, setCalendars)}
                            sx={{ color: calendar.color }}
			/>
			<span sx={{ color: calendar.color }}>{calendar.name}</span>
                    </div>
		))}
            </Box>	    
            <Modal
                isFormVisible={isFormVisible}
                onClose={() => setIsFormVisible(false)}
            >
		<EventForm
		    selectedColor={selectedColor}
		    setSelectedColor={setSelectedColor}
		    inputTitle={inputTitle}
		    setInputTitle={setInputTitle}
		    inputStart={inputStart}
		    setInputStart={setInputStart}
		    setInputEnd={setInputEnd}
		    handleEventAdd={(arg) => handleEventAdd(inputTitle, inputStart, inputEnd, selectedColor, calendars, setCalendars, setIsFormVisible)}
		/>
            </Modal>
	    <CalendarView
		visibleEvents={visibleEvents}
		handleDateClick={(arg) => handleDateClick(arg, setInputStart, setInputEnd, setIsFormVisible)}
		setInputStart={setInputStart}
		setInputEnd={setInputEnd}
		setIsFormVisible={setIsFormVisible}
		getCellClassNames={getCellClassNames}
	    />	    
        </div>  
    );
};

export default SampleCalendar;
