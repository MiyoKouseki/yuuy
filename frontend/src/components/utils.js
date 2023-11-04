// utils.js

export const getCellClassNames = (arg) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    const clickedDate = new Date(arg.date);
    clickedDate.setHours(0, 0, 0, 0);
    
    const threeMonthsFromNow = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
    threeMonthsFromNow.setHours(0, 0, 0, 0);
    
    if (clickedDate > threeMonthsFromNow || clickedDate < today) {
        return ['dimmed-date'];
    }
    
    return [];
};


export const handleDateClick = (arg, setInputStart, setInputEnd, setIsFormVisible) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const clickedDate = new Date(arg.date);
    clickedDate.setHours(0, 0, 0, 0);
    const threeMonthsFromNow = new Date(today.getFullYear(), today.getMonth() + 3, today.getDate());
    threeMonthsFromNow.setHours(0, 0, 0, 0);
    
    if (clickedDate <= threeMonthsFromNow && clickedDate >= today) {
	console.log(arg.date); // remove me
        setInputStart(arg.date);
        setInputEnd(arg.date);
        setIsFormVisible(true);
    } else {
        alert('You can only select dates within the next three months.');
    }
};


export const handleEventAdd = (inputTitle, inputStart, inputEnd, selectedColor, calendars, setCalendars, setIsFormVisible) => {
    const selectedCalendar = calendars.find(calendar => calendar.color === selectedColor);
    if (!selectedCalendar) return;
    const updatedCalendars = calendars.map(calendar =>
        calendar.id === selectedCalendar.id
	    ? { ...calendar, events: [...calendar.events, { title: inputTitle, start: inputStart, end: inputEnd }] }
        : calendar
    );
    setCalendars(updatedCalendars);
    setIsFormVisible(false);
};


export const toggleCalendarVisibility = (id, calendars, setCalendars) => {
    setCalendars(calendars.map(calendar =>
        calendar.id === id ? { ...calendar, visible: !calendar.visible } : calendar
	));   
};
