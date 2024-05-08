import React from 'react'

const Results = ({isspam,reason}:{isspam:boolean, reason:string | undefined}) => {
  const reasonLines = reason ? reason.split('\n').map((line, i) => <p key={i} className='text-slate-50'>{line}</p>) : null;

  return (
    <div>
      {isspam ? (
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-red-500 p-2 rounded-md text-5xl font-bold'>Spam</h1>
            {reasonLines}
        </div>
        ) : (
        <div className='flex flex-col items-center gap-6'>
            <h1 className='text-green-500 p-2 rounded-md text-5xl font-bold'>Not Spam</h1>
            {reasonLines}
        </div>
        )}
    </div>
  )
}

export default Results