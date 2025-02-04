import React from 'react'
import { useState } from 'react'
import { User, Mail, Lock, UserCircle2, Stethoscope, Building2, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';


const ParentSignUp = () => {
    // const [userType, setUserType] = useState<'select' | 'patient' | 'doctor'>('select');
    const [userType, setUserType] = useState('select');

    const ProfileSelection = () => (
        <div className="selectprofile space-y-6">
            <div className='text-center'>
                <h3 className='text-lg font-medium'>Choose your profile type</h3>
                <p className="mt-1 text-sm text-gray-600">Select how you want to join CareCircle</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                    onClick={() => setUserType('patient')}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                    <UserCircle2 className="h-8 w-8 text-blue-600 mx-auto" />
                    <h4 className="mt-2 font-medium">Join as User</h4>
                    <p className="mt-1 text-sm text-gray-600">
                        Connect with healthcare providers and support communities
                    </p>
                </button>
                <button
                    onClick={() => setUserType('doctor')}
                    className="p-6 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
                >
                    <Stethoscope className="h-8 w-8 text-blue-600 mx-auto" />
                    <h4 className="mt-2 font-medium">Join as Doctor</h4>
                    <p className="mt-1 text-sm text-gray-600">
                        Provide care and support to differently abled individuals
                    </p>
                </button>
            </div>
        </div>
    );



    const PatientSignUp = () => (
        <form className='space-y-6'>
            <div className="userprofile rounded-md shadow-sm -space-y-px">
                <div className="enteremail">
                    <label htmlFor="email" className="sr-only">Email address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            placeholder="Email address"
                        />
                    </div>
                </div>
                <div className="enterpassword">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="Password"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create User Account
                    </button>
                </div>
            </div>
        </form>
    );


    const DoctorSignUp = () => (
        <form className='space-y-6'>
            <div className="userprofile rounded-md shadow-sm -space-y-px">
                <div className="enteremail">
                    <label htmlFor="email" className="sr-only">Enter Email address</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                            placeholder="Enter Email address"
                        />
                    </div>
                </div>
                <div className="enterpassword">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        className="appearance-none rounded-none relative block w-full px-3 py-2 pl-10 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                        placeholder="Enter Password"
                    />
                </div>

                <div>
                    <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create Doctor Account
                    </button>
                </div>
            </div>
        </form>

    );

    return (
        <div className='flex-1 flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
            <div className="createacc text-center max-w-md w-full space-y-8">
                <div>
                    <h1 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>Create your account</h1>
                    <p>Already have an account?{" "}
                        <Link to="/login" className='font-medium text-blue-600 hover:text-blue-500'>
                            SignIn
                        </Link>
                    </p>
                </div>


                {userType === 'select' && <ProfileSelection />}
                {userType === 'patient' && <PatientSignUp />}
                {userType === 'doctor' && <DoctorSignUp />}

                {userType !== 'select' && (
                    <button
                        onClick={() => setUserType('select')}
                        className="mt-4 w-full text-sm text-gray-600 hover:text-blue-500"
                    >
                        ← Change profile type
                    </button>
                )}

                <div className="mt-6">
                    <p className="text-center text-sm text-gray-600">
                        By signing up, you agree to our{' '}
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Terms of Service
                        </a>{' '}
                        and{' '}
                        <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ParentSignUp


