import React, { useState } from 'react'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

const conversionRate = 0.83
const usdAtom = atom({
    key: 'usd',
    default: 1
})

const eurSelector = selector({
    key: "eur",
    get: ({ get }) => get(usdAtom) * conversionRate
})

const CurrencyConverter = () => {


    // const [usd, setUsd] = useState<number>(0)
    // const [eur, setEur] = useState<number>(0)

    const [usd, setUsd] = useRecoilState(usdAtom)
    const eur = useRecoilValue(eurSelector)


    console.log(eur)
    return (
        <div className=''>
            <div>
                <input type="text" value={usd} onChange={(e) => setUsd(e.target.value as unknown as number)} placeholder='Enter amount' />
                <input type="text" placeholder='Enter Amount' value={usd * conversionRate} />
            </div>
            <div><button>Calculate</button></div>
        </div>
    )
}

export default CurrencyConverter