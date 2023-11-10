import React, {useState} from 'react'
import { TextInput } from '../../components'
import { handleFormChange } from '../../utils/utils'

const InputUserInfo = () => {
    const [form, setForm] = useState({
        phone: { value: "", error: "" },
        major: { value: "", error: "" },
        gender: { value: "", error: "" },
        grad_year: { value: 2023, error: "" },
    });    
  return (
    <div className="container">
      <h1 className="header">Welcome, {}</h1>
      <form onSubmit={handleSubmit} className="form">
      <TextInput type='text' error={form.phone.error} placeholder="Mobile Phone" name='phone' onChange={(event) => handleFormChange(event, setForm)} value={form.phone.value}/>
      <TextInput type='password' error={form.password.error} placeholder="Password" name='password' onChange={(event) => handleFormChange(event, setForm)} value={form.major.value}/>
      <Button type='submit' color='primary' loading={false}>Next</Button>
      </form>
      <Link
          href=""
          underline="hover"
          variant="body2"
          color="secondary"
          sx={{ fontWeight: "bold" }}
        >
          Forgot Password?
        </Link>
    </div>
  )
}

export default InputUserInfo