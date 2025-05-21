import LoginForm from './components/LoginForm.jsx'
import SignUpForm from './components/SignUpForm.jsx/index.js'

// const schema = Yup.object({
//   email: Yup.string().email("Invalid email format")
//     .required("Email is required"),
//   password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required")
// })


function App() {

  return (
    <>
      <SignUpForm />


    </>
  )
}

export default App
