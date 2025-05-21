import { useState, useRef } from "react";
import { signUpSchema } from "../schemas/signUpSchema.js";
import { yupToFormErrors } from "../utils/yupToFormErrors.js";

export default function SignUpForm() {
  const style = {
    divInput: "flex gap-2",
    input: "border-2 border-gray-300 rounded-md p-2",
    textError: "text-red-500 text-sm",
  }

  const refs = {
    username: useRef(null),
    nickname: useRef(null),
    password: useRef(null),
    confirmPassword: useRef(null),
    age: useRef(null),
    termsAndConditions: useRef(null)
  }


  const [form, setForm] = useState({
    username: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    age: "",
    termsAndConditions: false,
  })


  const [error, setError] = useState({})

  const handleChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.value
    })
  }

  const handleCheckboxChange = (e) => {
    setForm({
      ...form, [e.target.name]: e.target.checked
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {

      await signUpSchema.validate(form, { abortEarly: false })
      alert("Created account successfully");



      setError({})
    } catch (err) {
      const errorObj = yupToFormErrors(err, refs)
      setError(errorObj)
    }
  }


  return (
    <>
      <p className='text-2xl font-bold pb-10'>CC20</p>
      <form className="space-y-2" onSubmit={handleSubmit}>
        <div className={style.divInput}>
          <label>Username</label>
          <input className={style.input}
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            ref={refs.username}
          />
          <p className={style.textError}>{error.username}</p>
        </div>

        <div className={style.divInput}>
          <label>Nickname</label>
          <input className={style.input}
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            ref={refs.nickname}
          />
          <p className={style.textError}>{error.nickname}</p>
        </div>

        <div className={style.divInput}>
          <label>Password</label>
          <input className={style.input}
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            ref={refs.password}
          />
          <p className={style.textError}>{error.password}</p>
        </div>

        <div className={style.divInput}>
          <label>Confirm Password</label>
          <input className={style.input}
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            ref={refs.confirmPassword}
          />
          <p className={style.textError}>{error.confirmPassword}</p>
        </div>

        <div className={style.divInput}>
          <label>Age</label>
          <input className={style.input}
            type="text"
            name="age"
            value={form.age}
            onChange={handleChange}
            ref={refs.age}

          />
          <p className={style.textError}>{error.age}</p>
        </div>

        <div className={style.divInput}>
          <label>Terms and Conditions</label>
          <input className={style.input}
            type="checkbox"
            name="termsAndConditions"
            checked={form.termsAndConditions}
            onChange={handleCheckboxChange}
            ref={refs.termsAndConditions}
          />
          <p className={style.textError}>{error.termsAndConditions}</p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  )
}
