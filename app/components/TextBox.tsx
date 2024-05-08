'use client'

import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { ProgressBar } from "./ProgressBar";

import Results from "./Results";

const TextBox = () => {

    const [message, setMessage] = useState<string>("");
    const [result, setResult] = useState<{
        spam: boolean | null,
        reason?: string
    }>({
        spam: null,
        reason: ""
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [completeLoading, setCompleteLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handleCheck = async ( e: React.MouseEvent ) => {
        e.preventDefault();

        setResult({
            spam: null,
            reason: ""
        });

        setLoading(true);
        setCompleteLoading(true);

        try{
            const response = await fetch("https://mailfate.onrender.com/predict", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    text:message
                })
            });

            const data = await response.json();

            setResult({
                spam: data.prediction == "Spam" ? true : false,
                reason: String(data.reason).includes("spam") ? data.reason : "no reason provided"
            });
        }
        catch(err){
            console.log(err);
        }

        finally{    
            setCompleteLoading(false);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }
    }

  return (
    <div className="flex flex-col justify-center items-center mb-8">
        <div className="grid w-[350px] lg:w-[850px] md:w-[600px] sm:w-[500px] bg-stone-950 p-4 px-7">
            <Label htmlFor="message" className="text-slate-200 mb-3">Your mail</Label>
            <Textarea value={message} placeholder="Enter your mail here......" onChange={(e)=> handleChange(e)} />
            <Button onClick={(e) => handleCheck(e)}>Check for Spam!</Button>

            {result.spam !== null && !loading && <Results isspam={result.spam} reason={result.reason} />}

            {!result.spam && loading && <ProgressBar hasloaded={!completeLoading} />}
        </div>
    </div>
  )
}

export default TextBox
