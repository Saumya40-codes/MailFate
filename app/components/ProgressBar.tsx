"use client"

import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function ProgressBar({hasloaded}:{hasloaded:boolean}) {
  const [progress, setProgress] = React.useState(33)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)

    if (hasloaded) {
      setProgress(100)

      return () => clearTimeout(timer)
    }
  }, [hasloaded])

  return (
    <div className="flex flex-col justify-center items-center mx-5">
        <Progress value={progress} className="w-[60%]" />
    </div>
  )
}