import React, { useState } from 'react'

const CurrencyConverter = () => {

    const conversionRate = 0.83
    const [usd, setUsd] = useState<number>(0)
    const [eur, setEur] = useState<number>(0)


    console.log(eur)
    return (
        <div className=''>
            <div>
                <input type="text" value={usd} onChange={(e) => setUsd(e.target.value as unknown as number)} placeholder='Enter amount' />
                <input type="text" placeholder='Enter Amount' value={usd * conversionRate} onChange={(e) => setEur(e.target.value as unknown as number)} />
            </div>
            <div><button>Calculate</button></div>
        </div>
    )
}

export default CurrencyConverter