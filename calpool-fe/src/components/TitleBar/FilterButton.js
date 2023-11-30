import React, { useState } from 'react';
import { Button } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./FilterButton.css"; 

function FilterButton() {
    const [anchorEl, setAnchorEl] = useState(null);

    console.log(anchorEl)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='filter-list'>
            <Button onClick={handleClick} endIcon={<ArrowDropDownIcon />}>
                Most Recent
            </Button>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleClose}>Distance: Closest</MenuItem>
                <MenuItem onClick={handleClose}>Distance: Farthest</MenuItem>

                <MenuItem onClick={handleClose}>Price: High to Low</MenuItem>
                <MenuItem onClick={handleClose}>Price: Low to High</MenuItem>
            </Menu>
        </div>
    );
}

export default FilterButton;
