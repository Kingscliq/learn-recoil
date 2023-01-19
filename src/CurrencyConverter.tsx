import React from 'react'
import { atom, selector, useRecoilState } from 'recoil'

const conversionRate = 0.83
const usdAtom = atom({
    key: 'usd',
    default: 1
})

const eurSelector = selector<number>({
    key: "eur",
    get: ({ get }) => get(usdAtom) * conversionRate,
    set: ({ set }, newEuroValue) => {
        // @ts-ignore
        const newUsd = newEuroValue / conversionRate
        // @ts-ignore
        set(usdAtom, newUsd)
    }

})

const CurrencyConverter = () => {

    const [usd, setUsd] = useRecoilState(usdAtom)
    const [eur, setEuro] = useRecoilState(eurSelector)

    return (
        <div className=''>
            <div>
                <input type="text" value={usd} onChange={(e) => setUsd(e.target.value as unknown as number)} placeholder='Enter amount' />
                <input type="text" placeholder='Enter Amount' value={eur} onChange={(e) => setEuro(e.target.value as unknown as number)} />
            </div>
            <div><button>Calculate</button></div>
        </div>
    )
}

export default CurrencyConverter