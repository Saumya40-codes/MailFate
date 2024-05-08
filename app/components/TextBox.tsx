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
            const response = await fetch("http://localhost:8000/predict", {
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
                reason: String(data.reason)
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
    <div className="grid w-[800px] gap-1.5">
        <Label htmlFor="message">Your message</Label>
        <Textarea value={message} placeholder="Enter your mail here......" onChange={(e)=> handleChange(e)} />
        <Button onClick={(e) => handleCheck(e)}>Check for Spam!</Button>

        {result.spam !== null && !loading && <Results isspam={result.spam} reason={result.reason} />}

        {!result.spam && loading && <ProgressBar hasloaded={!completeLoading} />}
    </div>
  )
}

export default TextBox
