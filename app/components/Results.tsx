import React from 'react'

const Results = ({isspam,reason}:{isspam:boolean, reason:string | undefined}) => {
  const reasonLines = reason ? reason.split('\n').map((line, i) => <span key={i} className='text-slate-50 text-left font-semibold text-lg mb-1'>{line}</span>) : "";

  return (
    <div className='w-full'>
      {isspam ? (
        <div className='flex flex-col gap-4'>
            <h1 className='text-red-500 p-2 rounded-md text-5xl text-center font-bold'>Spam</h1>
            {reasonLines}
        </div>
        ) : (
        <div className='flex flex-col gap-4'>
            <h1 className='text-green-500 p-2 rounded-md text-5xl text-center font-bold'>Not Spam</h1>
            {reasonLines}
        </div>
        )}
    </div>
  )
}

export default Results