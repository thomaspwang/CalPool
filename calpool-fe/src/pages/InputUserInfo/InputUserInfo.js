import React, {useState, useEffect} from 'react'
import { TextInput, Button, RadiosGroup, Dropdown } from '../../components'
import { handleFormChange, validateFormUserInfo } from '../../utils/utils'
import './InputUserInfo.css'

const InputUserInfo = ({ form, setForm, setPage }) => {
    const genderRadioOptions = ['Female', 'Male', 'Other']
    const gradYearOptions = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() + i);

    const disabled = (!form.number.value || !form.major.value || !form.gender.value || !form.grad_year.value) ? true : false;
    const handleSubmit = (event) => {
      event.preventDefault();
      const isFormValid = validateFormUserInfo(form, setForm);
      if (isFormValid) {
        setPage('picture')
      }
    }

    useEffect(() => {
      if (!form.firstName.value) {
        setPage('signup')
      }
    })
    
  return (
    <div className="container slide-in-right">
      <h1 className="header-info">Welcome, {form.firstName.value}</h1>
      <form onSubmit={handleSubmit} className="form">
        <TextInput type='text' error={form.number.error} placeholder="Mobile Phone" name='number' onChange={(event) => handleFormChange(event, setForm)} value={form.number.value}/>
        <TextInput type='text' error={form.major.error} placeholder="Major" name='major' onChange={(event) => handleFormChange(event, setForm)} value={form.major.value}/>
        <RadiosGroup radios={genderRadioOptions} error={form.gender.error} label='Gender' name='gender' onChange={(event) => handleFormChange(event, setForm)} value={form.gender.value}/>
        <Dropdown width='140px' options={gradYearOptions} label='Graduation Year' name='grad_year' value={form.grad_year.value} onChange={(event) => handleFormChange(event, setForm)}/>
      <Button type='submit' color='primary' loading={false} disabled={disabled}>Next</Button>
      </form>
    </div>
  )
}

export default InputUserInfo