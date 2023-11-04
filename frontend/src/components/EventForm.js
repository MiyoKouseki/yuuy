// EventForm.js
import React from 'react';
import { ja } from 'date-fns/locale';
import {
    FormControl, Select, MenuItem,
    TextField, Button, Grid, InputLabel
} from '@mui/material';
import DatePicker from "react-datepicker";

const EventForm = ({
    selectedColor, setSelectedColor,
    inputTitle, setInputTitle,
    inputStart, setInputStart,
    inputEnd, setInputEnd,
    handleEventAdd
}) => {
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleEventAdd();
        }}>
            <Grid container direction="column" spacing={2}>
		<Grid item container alignItems="center" spacing={2}>
		    <Grid item>
			<InputLabel>予定名</InputLabel>
		    </Grid>
		    <Grid item xs>
			<TextField
			    label="Event Title"
			    value={inputTitle}
			    onChange={(e) => setInputTitle(e.target.value)}
			    fullWidth
			/>
		    </Grid>
		</Grid>
		<Grid item container xs={12} spacing={2}>
		    <Grid item>
			<InputLabel>時刻</InputLabel>
		    </Grid>
		    <Grid item xs={6}>
			<div style={{ display: 'flex', gap: '8px' }}>
			    <DatePicker
				locale={ja}
				selected={inputStart}
				onChange={(date) => setInputStart(date)}
				selectsStart
				startDate={inputStart}
				endDate={inputEnd}
				wrapperClassName="fullWidth"
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={30}
				dateFormat="yyyy/MM/dd, HH:mm"
			    />
			    <DatePicker
				locale={ja}				
				selected={inputEnd}
				onChange={(date) => setInputEnd(date)}
				selectsEnd
				endDate={inputEnd}
				//minDate={inputStart}
				wrapperClassName="fullWidth"
				showTimeSelect
				timeFormat="HH:mm"
				timeIntervals={30}
				dateFormat="yyyy/MM/dd, HH:mm"
			    />
			</div>
		    </Grid>
		</Grid>		
		<Grid item container alignItems="center" spacing={2}>
		    <Grid item>
			<InputLabel>場所名</InputLabel>
		    </Grid>
		    <Grid item xs>
			<FormControl fullWidth>
			    <Select
				value={selectedColor}
				onChange={(e) => setSelectedColor(e.target.value)}
                            >
				<MenuItem value="#ff0000">Red</MenuItem>
				<MenuItem value="#00ff00">Green</MenuItem>
				<MenuItem value="#0000ff">Blue</MenuItem>
                            </Select>
			</FormControl>
                    </Grid>
		</Grid>
		<Grid item xs={12}>
		    <Button
			type="submit"
			fullWidth color="primary"
			variant="contained">
			予定を作成
		    </Button>
		</Grid>
            </Grid>
        </form>
    );
};

export default EventForm;
