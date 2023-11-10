import React from 'react'
import { TextInput } from '../../components'

const InputUserInfo = () => {
  return (
    <div className="container">
      <h1 className="header">Welcome, {}</h1>
      <form onSubmit={handleSubmit} className="form">
      <TextInput type='text' error={form.email.error} placeholder="Email" name='email' onChange={handleFormChange} value={form.email.value}/>
      <TextInput type='password' error={form.password.error} placeholder="Password" name='password' onChange={handleFormChange} value={form.password.value}/>
      <Button type='submit' color='primary' loading={false}>Sign In</Button>
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