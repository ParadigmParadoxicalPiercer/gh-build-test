import { useState } from "react";
import { loginSchema } from "../schemas/loginSchema.js";
import { yupToFormErrors } from "../utils/yupToFormErrors.js";

export default function LoginForm() {
  const style = {
    divInput: "flex gap-2",
    input: "border-2 border-gray-300 rounded-md p-2",
    textError: "text-red-500 text-sm",
  }


  const [form, setForm] = useState({
    email: "",
    password: "",
    day: "",
    age: "",
  })


  const [error, setError] = useState({})


  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await loginSchema.validate(form, { abortEarly: false })
      alert("Form is valid");
      setError({})
    } catch (err) {
      const errorObj = yupToFormErrors(err)
      setError(errorObj)
    }

  }


  return (
    <>
      <p className='text-2xl font-bold pb-10'>CC 20</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className={style.divInput}>
          <label>Email</label>
          <input className={style.input}
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          <p className={style.textError}>{error.email}</p>
        </div>

        <div className={style.divInput}>
          <label>Password</label>
          <input className={style.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
          <p className={style.textError}>{error.password}</p>
        </div>

        <div className={style.divInput}>
          <label>Day</label>
          <input className={style.input}
            type="number"
            name="day"
            value={form.day}
            onChange={handleChange}
          />
          <p className={style.textError}>{error.day}</p>
        </div>

        <div className={style.divInput}>
          <label>Age</label>
          <input className={style.input}
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
          />
          <p className={style.textError}>{error.age}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}