import { useState } from "react";
import './CalpoolCreation.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, StaticDatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import PeopleLogo from '../people.png'

export default function CalpoolCreation() {
    const [depart, setDepart] = useState(dayjs());
    const [arrive, setArrive] = useState(dayjs());
    const [range, setRange] = useState([20, 50])

    const handleChange = (event, newRange) => {
        setRange(newRange);
    };

    return (
        <div className='overall-container'>
            <div className='header-container-2'>
                <h1 className="header">Create New CalPool</h1>
            </div>

            <div className='details-container'>
                <h2>Your Trip is from</h2>
                <div className='date-details'>
                    <div className='pickup date-inner'>
                        {depart.format('ddd, MMM DD, hh:mm A')}
                    </div>
                    <div className='to date-inner'>
                        to
                    </div>
                    <div className='destination date-inner'>
                        {arrive.format('ddd, MMM DD, hh:mm A')}
                    </div>
                </div>
            </div>

            <div className='time-container'>
                <div className='date-picker time-item'>
                    <div>Depart By:</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker orientation="landscape" value={depart} onChange={(newValue) => setDepart(newValue)}/>
                        <TimePicker label="Basic time picker" value={depart} onChange={(newValue) => setDepart(newValue)}/>
                    </LocalizationProvider>
                </div>
                <div className='arrive-picker time-item'>
                    <div>Arrive By:</div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker orientation="landscape" value={arrive} onChange={(newValue) => setArrive(newValue)}/>
                        <TimePicker label="Basic time picker" value={arrive} onChange={(newValue) => setArrive(newValue)}/>
                    </LocalizationProvider>
                </div>
            </div>

            <div className='location-container'>
                <div className='location-item'>
                    <TextField id="filled-textarea" label="Pick-Up"
                        multiline variant="filled" />
                </div>
                <div className='location-item'>
                    <TextField id="filled-textarea" label="Destination"
                        multiline variant="filled" />
                </div>
            </div>

            <div className='price-container'>
                <div className='price-range'>
                    <div className='price'> 
                        Price Range:
                    </div>
                    <div className='lower price'>
                        ${range[0]}
                    </div>
                    <div className='price'>
                        -
                    </div>
                    <div className='higher price'>
                        ${range[1]}
                    </div>
                </div>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={range}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    sx={{width:'80%'}}
                />
            </div>

            <div className='additional-container'>
                
                <div className='pax'>
                    <img src={PeopleLogo} alt="Pax"/>
                    <TextField id="filled-basic" label="pax" variant="filled" sx ={{width:'15%'}} />
                </div>
                <div className='comments'>
                    <TextField
                        id="filled-multiline-static"
                        label="Additional Comments"
                        multiline
                        rows={4}
                        variant="filled"
                        sx = {{width:'80%'}}
                    />
                </div>
            </div>

            <div className='button-container'>
                <Button variant="contained">Create</Button>
            </div>
        </div>
    )
}