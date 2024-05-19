import React from 'react'

const Login = () => {
    return (
        <div className="h-screen bg-[#d2d1e8] flex items-center justify-center" >
            <div className="w-1/2 flex bg-white rounded-lg min-h-[600px] overflow-hidden">
                <div className="flex-1  p-12 flex flex-col gap-8 text-white bg-[#1f1c4d]">
                    <h1 className='text-[100px] leading-[100px]'>Hello <br /> World</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span className='text-[14px]'>Don't you have an account?</span>

                    <button className='w-1/2 px-4 py-2 border-none bg-white text-rebeccapurple font-bold cursor-pointer text-[#1f1c4d]'>Register</button>

                </div>
                <div className="right flex-1 p-12 flex flex-col gap-12 justify-center">
                    <h1 className='text-gray-600 text-[50px]'>Login</h1>
                    <form className='flex flex-col gap-8'>
                         <input className='border-b border-gray-300 pb-4 pt-4' type="text" placeholder='Username'/>
                         <input className='border-b border-gray-300 pb-4 pt-4' type="password" placeholder='Password'/>
                        <button className='w-1/2 px-4 py-2 border-none bg-[#1f1c4d]   text-white font-bold cursor-pointer'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login