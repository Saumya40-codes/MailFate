import React from 'react'

const Results = ({isspam,reason}:{isspam:boolean, reason:string | undefined}) => {
  return (
    <div>
      {isspam ? (
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-red-500 p-2 rounded-md text-5xl font-bold'>Spam</h1>
            <p className='text-slate-50'>{reason}</p>
        </div>
        ) : (
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-green-500 p-2 rounded-md text-5xl font-bold'>Not Spam</h1>
            <p className='text-slate-50'>{reason}</p>
        </div>
        )}
    </div>
  )
}

export default Results
