import React, { useState, useEffect } from 'react'

import { Selector, Wrapper } from './styled'
import constants from './constants'

const update = (arr, idx, itm) => {
    arr[idx] = itm;
    return arr
}

export default function Main () {
    const [activeFormula, setActiveFormula] = useState('Стоимость компании')

    const [formula, setFormula] = useState(constants[activeFormula])

    const {
        title,
        subtitle,
        callback,
    } = constants[activeFormula] || {}

    useEffect(() => {
        setFormula(constants[activeFormula])
    }, [activeFormula])

    return (
        <Wrapper>
            <Selector>
                {Object.keys(constants).map((val, i) => (
                    <div
                        key={i}
                        onClick={() => setActiveFormula(val)}
                        style={{
                            border: activeFormula === val
                                && '1px solid black'
                        }}
                    >
                        {val}
                    </div>
                ))}
            </Selector>
            <h1>{title}</h1>
            <h3>{subtitle || 'No formula for this one'}</h3>
            <div>Result: {callback(formula.vars
                .map(({ value }) => Number(value)))}</div>
            {formula?.vars?.map((val, i) => (
                <input
                    type='number'
                    key={i}
                    value={val.value}
                    onChange={e => {
                        setFormula(prev => ({
                            ...prev,
                            vars: update(formula.vars, i, {
                                name: formula.vars[i].name,
                                value: e.target.value
                            })
                        }))
                    }}
                />
            ))}
        </Wrapper>
    )
}
