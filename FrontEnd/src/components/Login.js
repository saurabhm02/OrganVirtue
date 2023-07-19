import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import OrganAngel from "../assets/OrganAngel.png"
import donar from "../assets/donar.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [data,setData]=useState({
    email:'',
    password:'',
  })
  const [loading,setLoading] = useState(false)
  const navigateTo=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault()
    console.log(data)
    setLoading(true)
    const response = await fetch(`https://organangel.onrender.com/api/user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
     const logindata = await response.json()
    //  console.log(logindata)
    setLoading(false)
    if(logindata.success)
    {
      navigateTo('/home')
      localStorage.setItem("authtoken",logindata.authtoken)
    }
    else
    {
      toast.error(logindata.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }


  }
  return (
  <div>
        <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10 ">
    <div
      className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
            <div className="px-4 md:px-0 lg:w-6/12 bg-slate-100 text-black">
              <div className="md:mx-6 md:p-12">
                <div className="text-center">
                  <img className="mx-auto w-60 h-50 mt-8" src={OrganAngel}alt="logo"/>
                  <h4 className="mb-12 mt-9 pb-1 text-xl font-semibold">We are The OrganAngel Team</h4>
                </div>

                <form className='h-80' onSubmit={(e)=>{handleSubmit(e)}}>
                  <p className="mb-4">Please login to your account</p>
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    Username
                    <input type="email" value={data.email} onChange={(e)=>{setData(prev=>{return {...prev,email:e.target.value}})}}  required
                      className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput1" placeholder="Username" />
                    <label for="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary"></label>
                  </div>

                  <div className="relative mb-4 " data-te-input-wrapper-init>
                    Password
                    <input type="password" value={data.password} onChange={(e)=>{setData(prev=>{return {...prev,password:e.target.value}})}} required
                      className=" border-2 border-black peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all placeholder:text-black duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-black [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0" id="exampleFormControlInput11" placeholder="Password" />
                    <label for="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[1rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black dark:peer-focus:text-primary" ></label>
                  </div>

                  <div className="mb-12 pb-1 pt-1 text-center">

                    <button
                    type="submit"
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] bg-gradient-to-r from-pink-500 to-yellow-500"  data-te-ripple-init
                      data-te-ripple-color="light" style={{}} >{loading && <div
                      class="inline-block h-4 w-4 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-danger motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status">
                      
                    </div> } Login</button>

                    <a href="#!">Forgot password?</a>
                  </div>

                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <Link to="/register">
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10 bg-gradient-to-r from-pink-500 to-yellow-500"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Register
                    </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            <div
              class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none bg-gradient-to-r from-pink-500 to-yellow-500"
              style={{}}>
              <div class="px-4 py-6 text-white md:mx-6 md:p-12">
              <img src={donar} alt='donar' className='h-[20%] w-[40%] ml-[30%] mt-[-34%]' ></img>
                <h4 class="mb-6 text-3xl font-mono text-center">You're just not a donar</h4>
                <p class="text-2xl text-center font-serif italic">
                You are a piece of the puzzle of someone else’s life. You may never know where you fit, but others will fill the holes in their lives with pieces of you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</div>
  )
}

export default Login