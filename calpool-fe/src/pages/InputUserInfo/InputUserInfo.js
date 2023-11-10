import React, {useState} from 'react'
import { TextInput, Button, RadiosGroup, Dropdown } from '../../components'
import { handleFormChange } from '../../utils/utils'

const InputUserInfo = () => {
    const [form, setForm] = useState({
        number: { value: "", error: "" },
        major: { value: "", error: "" },
        gender: { value: "", error: "" },
        grad_year: { value: 2023, error: "" },
    });
    const genderRadioOptions = ['Female', 'Male', 'Other']
    const gradYearOptions = [2021, 2022, 2023, 2024, 2025]

    const handleSubmit = () => {
        console.log(form)
    }

    console.log(form)
    
  return (
    <div className="container">
      <h1 className="header">Welcome, </h1>
      <form onSubmit={handleSubmit} className="form">
      <TextInput type='text' error={form.number.error} placeholder="Mobile Phone" name='number' onChange={(event) => handleFormChange(event, setForm)} value={form.number.value}/>
      <TextInput type='text' error={form.major.error} placeholder="Major" name='major' onChange={(event) => handleFormChange(event, setForm)} value={form.major.value}/>
      <RadiosGroup radios={genderRadioOptions} label='Gender' name='gender' onChange={(event) => handleFormChange(event, setForm)} value={form.gender.value}/>
      <Dropdown options={gradYearOptions} label='Graduation Year' name='grad_year' value={form.grad_year.value} onChange={(event) => handleFormChange(event, setForm)}/>
      <Button type='submit' color='primary' loading={false}>Next</Button>
      </form>
    </div>
  )
}

export default InputUserInfo