import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../app/globals.css'
const checksvg = './icon-list.svg'

const ConfirmPage = () => {

    const router = useRouter()
    
    async function handleDismiss(e){
        e.preventDefault()
        router.push('/')
        return
    }

    return (
    <div className="premaincontent">
        <div className="mainmaincontent2">
        <div className="subcontentone2">
            <img src={checksvg} width={60} />
            <h1 className="headertitle">Thanks for subscribing!</h1>
            <p>
            A confirmation email has been sent to <b>ash@loremcompany.com</b>. Please
            open it and click the button inside to confirm your subscription.
            </p>
        </div>
            <button onClick={handleDismiss}>Dismiss message</button>
        </div>
    </div>
    );
}

export default ConfirmPage;