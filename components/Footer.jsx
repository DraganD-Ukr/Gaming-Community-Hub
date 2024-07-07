import React from 'react';

export default function Footer() {
    return (
        <div className="bg-gray-950 text-slate-400 text-center text-sm tracking-wide">
            Gaming Hub Community. Developed by{' '}
            <a href="https://github.com/DraganD-Ukr" className="text-indigo-500 hover:text-indigo-400 tracking-normal hover:tracking-wider duration-300 inline-block mr-2">
                Dmytro Drahan
            </a>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 inline-block">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
            </svg>
        </div>
    );
}
