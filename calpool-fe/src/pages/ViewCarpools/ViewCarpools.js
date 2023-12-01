import React, { useEffect, useState } from "react";
import "./ViewCarpools.css";
import CarpoolCard from "../../components/CarpoolCard/CarpoolCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import TitleBar from "../../components/TitleBar/TitleBar";
import Button from "@mui/material/Button";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { DialogContent } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { Loading } from "../../components/index.js";
import { useNavigate } from "react-router-dom";
import viewCarpoolsApi from "../../api/viewCarpoolsApi.js";
import createNewCarPoolApi from "../../api/createNewCarPoolApi.js";

function ViewCarpools() {
  const [carpools, setCarpools] = useState({});
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [depart, setDepart] = useState(dayjs());
  const [arrive, setArrive] = useState(dayjs());
  const [range, setRange] = useState([20, 80]);
  const [pickup, setPickUp] = useState("");
  const [destination, setDestination] = useState("");
  const [people, setPeople] = useState();
  const [comments, setComments] = useState("");
  const [filter, setFilter] = useState("Most Recent");
  const navigate = useNavigate();

  const navigateToManagement = () => {
    navigate('/carpool_management');
  };

  useEffect(() => {
    getCarpools();
  }, []);

  useEffect(() => {
    if (carpools.pools) {
      const sortedCarpools = sortCarpools();
      setCarpools({ pools: sortedCarpools });
    }
  }, [filter]);

  const sortCarpools = () => {
    switch (filter) {
      case "Most Recent":
        return [...carpools.pools].sort(
          (a, b) =>
            new Date(a.carpool.start_time.$date) -
            new Date(b.carpool.start_time.$date)
        );
      case "Price: Low to High":
        return [...carpools.pools].sort(
          (a, b) => a.carpool.lower_bound - b.carpool.lower_bound
        );
      case "Price: High to Low":
        return [...carpools.pools].sort(
          (a, b) => b.carpool.lower_bound - a.carpool.lower_bound
        );
    }
  };

  const getCarpools = async () => {
    const { resultJson, resultStatus } = await viewCarpoolsApi();
    if (resultStatus === 401) {
      navigate("/login");
    } else if (resultStatus === 404) {
      setCarpools({ message: "No carpools found" });
    } else {
      setCarpools(resultJson);
    }
  };

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
  };

  const refreshData = () => {
    setDepart(dayjs());
    setArrive(dayjs());
    setRange([20, 80]);
    setPickUp("");
    setDestination("");
    setPeople();
    setComments("");
  };

  console.log(carpools);

  const createNewCarPool = async () => {
    const { resultJson, resultStatus } = await createNewCarPoolApi({
      depart,
      arrive,
      range,
      pickup,
      destination,
      people,
      comments,
    });
    handleClose();
    refreshData();
  };

  const marks = [
    {
      value: 0,
      label: "$0",
    },
    {
      value: 100,
      label: "$100",
    },
  ];

  return (
    <>
      <div className="ViewCarpools">
        <div className="search-bar-container">
          <SearchBar setResults={setResults} />
          <Button
            variant="contained"
            className="new-carpool-btn"
            onClick={handleClickOpen}
          >
            New Carpool
          </Button>
          <Button
            variant="contained"
            className="new-carpool-btn"
            onClick={navigateToManagement}
          >
            Your Carpools
          </Button>
        </div>
        <TitleBar
          BarName="Available Trips"
          filter={filter}
          setFilter={setFilter}
        />
        {!carpools.message && !carpools.pools && <Loading radius="15px" />}
        {carpools.message && (
          <div className="no-carpools">{carpools.message}</div>
        )}
        <div>
          {carpools.pools &&
            carpools.pools.map((carpool) => (
              <CarpoolCard
                dest={carpool.end_location}
                creator={carpool.name}
                date={
                  new Date(carpool.carpool.start_time.$date)
                    .toLocaleString()
                    .split(",")[0]
                }
                puTime={
                  new Date(carpool.carpool.start_time.$date)
                    .toLocaleString()
                    .split(",")[1]
                }
                puLoc={carpool.carpool.start_location}
                eta={
                  new Date(carpool.carpool.end_time.$date)
                    .toLocaleString()
                    .split(",")[1]
                }
              />
            ))}
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <h1 className="create-header">Create New Calpool</h1>
        <DialogContent>
          <div className="overall-container">
            <div className="details-container">
              <div className="date-details">
                <div className="pickup date-inner">
                  {depart.format("ddd, MMM DD, hh:mm A")}
                </div>
                <div className="to date-inner">to</div>
                <div className="destination date-inner">
                  {arrive.format("ddd, MMM DD, hh:mm A")}
                </div>
              </div>
            </div>

            <div className="time-container">
              <div className="date-picker time-item">
                <div className="date-label">Depart By:</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Depart Date"
                    orientation="landscape"
                    value={depart}
                    onChange={(newValue) => setDepart(newValue)}
                  />
                  <TimePicker
                    label="Depart Time"
                    value={depart}
                    onChange={(newValue) => setDepart(newValue)}
                  />
                </LocalizationProvider>
              </div>
              <div className="arrive-picker time-item">
                <div className="date-label">Arrive By:</div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Arrival Date"
                    orientation="landscape"
                    value={arrive}
                    onChange={(newValue) => setArrive(newValue)}
                  />
                  <TimePicker
                    label="Arrival Time"
                    value={arrive}
                    onChange={(newValue) => setArrive(newValue)}
                  />
                </LocalizationProvider>
              </div>
            </div>

            <div className="location-container">
              <div className="location-item">
                <div className="location-label">Pick Up:</div>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Pick Up"
                  multiline
                  value={pickup}
                  onChange={(event) => setPickUp(event.target.value)}
                />
              </div>
              <div className="location-item">
                <div className="location-label">Destination:</div>
                <TextField
                  fullWidth
                  id="outlined-textarea"
                  label="Destination"
                  multiline
                  onChange={(event) => setDestination(event.target.value)}
                />
              </div>
            </div>

            <div className="price-container">
              <div className="price-range">
                <div className="range-label">Price Range:</div>
                <div className="lower-price">
                  <div className="dollar">$</div>
                  <TextField
                    className="bound"
                    size="small"
                    value={range[0]}
                    onChange={(event) =>
                      handleChangeBound(0, event.target.value)
                    }
                  />
                </div>
                <div className="dash">-</div>
                <div className="higher-price">
                  <div className="dollar">$</div>
                  <TextField
                    className="bound"
                    size="small"
                    value={range[1]}
                    onChange={(event) =>
                      handleChangeBound(1, event.target.value)
                    }
                  />
                </div>
              </div>
              <Slider
                value={range}
                fullWidth
                className="slider-object"
                onChange={(event, newValue) => setRange(newValue)}
                marks={marks}
              />
            </div>

            <div className="additional-container">
              <div className="pax">
                <div className="pax-label">Pax:</div>
                <TextField
                  className="pax-form"
                  value={people}
                  label="pax"
                  onChange={(event) => setPeople(event.target.value)}
                  id="filled-basic"
                />
              </div>
              <div className="comments">
                <TextField
                  multiline
                  fullWidth
                  rows={4}
                  value={comments}
                  label="Additional Comments"
                  onChange={(event) => setComments(event.target.value)}
                />
              </div>
            </div>

            <div className="button-container">
              <Button variant="contained" onClick={createNewCarPool}>
                Create
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </>
  );
}

export default ViewCarpools;
