import React from 'react'

const Register = () => {
    return (
        <div className="h-screen bg-[rgb(193, 190, 255)] flex items-center justify-center bg-[#d2d1e8]">
            <div className="w-1/2 flex flex-row-reverse bg-white rounded-lg min-h-[600px] overflow-hidden">
                <div className="flex-1 p-12 flex flex-col gap-8 bg-[#1f1c4d] text-white">
                    <h1 className='text-[100px] leading-[100px]'>Lama Social.</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
                        alias totam numquam ipsa exercitationem dignissimos, error nam,
                        consequatur.
                    </p>
                    <span className='text-[14px]'>Do you have an account?</span>

                    <button className='w-1/2 px-4 py-2 border-none bg-white text-rebeccapurple font-bold cursor-pointer text-[#1f1c4d]'>Login</button>

                </div>
                <div className="flex-1 p-12 flex flex-col gap-12 justify-center">
                    <h1 className='text-[#1f1c4d] text-[50px] font-bold'>Register</h1>
                    <form className='flex flex-col gap-8'>
                        <input
                        className='border-b border-gray-300 pb-4 pt-4'
                            type="text"
                            placeholder="Username"
                            name="username"

                        />
                        <input
                        className='border-b border-gray-300 pb-4 pt-4'
                            type="email"
                            placeholder="Email"
                            name="email"

                        />
                        <input
                        className='border-b border-gray-300 pb-4 pt-4'
                            type="password"
                            placeholder="Password"
                            name="password"

                        />
                        <input
                        className='border-b border-gray-300 pb-4 pt-4'
                            type="text"
                            placeholder="Name"
                            name="name"

                        />

                        <button className='w-1/2 px-4 py-2 border-none bg-[#1f1c4d] text-white font-bold cursor-pointer'> Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register