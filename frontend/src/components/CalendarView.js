// CalendarView.js
import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

import {
    styled
} from '@mui/material';

const CalendarContainer = styled('div')(({ theme }) => ({
    pointerEvents: 'auto',
}));

const CalendarView = ({ visibleEvents, handleDateClick, setInputStart, setInputEnd, setIsFormVisible, getCellClassNames }) => {
    return (	
	<CalendarContainer>
            <FullCalendar
		locale="ja"                    
		plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
		initialView="timeGridWeek"
		headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek'
		}}
		events={visibleEvents}
		dateClick={(arg) => handleDateClick(arg, setInputStart, setInputEnd, setIsFormVisible)}	    
		dayCellClassNames={getCellClassNames}
            />
	</CalendarContainer>
    );
};

export default CalendarView;
