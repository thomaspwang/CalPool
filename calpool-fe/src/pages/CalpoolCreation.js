import { useState } from "react";
import './CalpoolCreation.css';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import { DialogContent } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';

export default function CalpoolCreation() {
    const [open, setOpen] = useState(false);
    const [depart, setDepart] = useState(dayjs());
    const [arrive, setArrive] = useState(dayjs());
    const [range, setRange] = useState([20, 80]);
    const [pickup, setPickUp] = useState('');
    const [destination, setDestination] = useState('');
    const [people, setPeople] = useState();
    const [comments, setComments] = useState('');
    

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeBound = (index, newValue) => {
        const newRange = range.slice();
        newRange[index] = newValue;
        setRange(newRange);
        console.log(range);
    };

    const createNewCarPool = async () => {
        const backendUrl = process.env.REACT_APP_BACKEND_URL;
        fetch(backendUrl + 'create_trip', {
            method: 'POST',
            headers: {
              Accept: 'application.json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                depart: depart.format('MM/DD/YY HH:mm'),
                arrive: arrive.format('MM/DD/YY HH:mm'),
                lower_bound: range[0],
                upper_bound: range[1],
                pickup: pickup,
                destination: destination,
                people: people,
                comments: comments,
            }),
        })
        .then(response => {
            response.json();
        })
        .then(data => {
            console.log(data);
            handleClose();
        })
        .catch(error => {
            console.log('Error: ', error);
        });
    };

    const marks = [
        {
            value: 0,
            label: '$0',
        },
        {
        value: 100,
        label: '$100',
        },
    ]

    return (
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
                Create New Calpool
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <h1 className='create-header'>Create New Calpool</h1>
                <DialogContent>
                    <div className='overall-container'>

                        <div className='details-container'>
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
                                <div className='date-label'>Depart By:</div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Depart Date" orientation="landscape" value={depart} onChange={(newValue) => setDepart(newValue)}/>
                                    <TimePicker label="Depart Time" value={depart} onChange={(newValue) => setDepart(newValue)}/>
                                </LocalizationProvider>
                            </div>
                            <div className='arrive-picker time-item'>
                                <div className='date-label'>Arrive By:</div>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker label="Arrival Date" orientation="landscape" value={arrive} onChange={(newValue) => setArrive(newValue)}/>
                                    <TimePicker label="Arrival Time" value={arrive} onChange={(newValue) => setArrive(newValue)}/>
                                </LocalizationProvider>
                            </div>
                        </div>

                        <div className='location-container'>
                            <div className='location-item'>
                                <div className='location-label'>Pick Up:</div>
                                <TextField fullWidth id="outlined-textarea" label="Pick Up"
                                    multiline value={pickup} onChange={event => setPickUp(event.target.value)} />
                            </div>
                            <div className='location-item'>
                                <div className='location-label'>Destination:</div>
                                <TextField fullWidth id="outlined-textarea" label="Destination"
                                    multiline onChange={event => setDestination(event.target.value)} />
                            </div>
                        </div>

                        <div className='price-container'>
                            <div className='price-range'>
                                <div className='range-label'> 
                                    Price Range:
                                </div>
                                <div className='lower-price'>
                                    <div className='dollar'>$</div>
                                    <TextField className='bound' size='small' value={range[0]} onChange={event => handleChangeBound(0, event.target.value)}/>
                                </div>
                                <div className='dash'>
                                    -
                                </div>
                                <div className='higher-price'>
                                    <div className='dollar'>$</div>
                                    <TextField className = 'bound' size='small' value={range[1]} onChange={event => handleChangeBound(1, event.target.value)}/>
                                </div>
                            </div>
                            <Slider
                                value={range}
                                fullWidth
                                className='slider-object'
                                onChange={(event, newValue) => setRange(newValue)}
                                marks = {marks}
                            />
                        </div>

                        <div className='additional-container'>
                            
                            <div className='pax'>
                                <div className='pax-label'>Pax:</div>
                                <TextField className='pax-form' value={people} label="pax" 
                                onChange={event => setPeople(event.target.value)} id="filled-basic" />
                            </div>
                            <div className='comments'>
                                <TextField
                                    multiline
                                    fullWidth
                                    rows={4}
                                    value = {comments}
                                    label="Additional Comments"
                                    onChange={event => setComments(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className='button-container'>
                            <Button variant="contained" onClick={createNewCarPool}>Create</Button>
                        </div>
                    </div>
                </DialogContent>
                <DialogActions>

                </DialogActions>
            </Dialog>
        </>
    )
}