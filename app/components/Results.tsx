import React from 'react'

const Results = ({isspam,reason}:{isspam:boolean, reason:string | undefined}) => {
  const reasonLines = reason ? reason.split('\n').map((line, i) => <span key={i} className='text-slate-50 text-left font-semibold text-lg mb-1'>{line}</span>) : "";

  return (
    <div className='w-full'>
      {isspam ? (
        <div className='flex flex-col gap-4 mb-4'>
            <h1 className='text-red-500 p-2 rounded-md text-5xl text-center font-bold'>Spam</h1>
            {reasonLines}
        </div>
        ) : (
        <div className='flex flex-col gap-4 mb-4'>
            <h1 className='text-green-500 p-2 rounded-md text-5xl text-center font-bold'>Not Spam</h1>
            {reasonLines}
        </div>
        )}

        <span className='text-slate-600 text-base font-bold text-center mt-6'>The responses are generated by a model and may not be accurate and might be bit sketchy sometimes. Please do not rely much on the results for any critical decisions.</span>
    </div>
  )
}

export default Results