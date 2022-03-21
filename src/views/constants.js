import { useState } from 'react'
import { getResultFirst, getResultSecond, getResultThird, getResultFourth, getResultFifth } from './utils'

const formulas = {
    'Стоимость компании': {
        'title': 'Стоимость компании',
        'subtitle': 'PV=T•KD•DPV=T•Kd•D/Kd=T•D/Kd=T•D',
        'vars': [
            { name: 'var1', value: 0 },
            { name: 'var2', value: 0 }
        ],
        'callback': (args) => getResultFirst(...args),
    },
    'Капитализация': {
        'title': 'Капитализация',
        'subtitle': 'Pl=Vu+TD',
        'vars': [
            { name: 'var1', value: 0 },
            { name: 'var2', value: 0 },
            { name: 'var3', value: 0 }
        ],
        'callback': (args) => getResultSecond(...args),
    },
    'Общая стоимость капитала': {
        'title': 'Общая стоимость капитала',
        'subtitle': 'Ksl=Ksu+(Ksu-Kd)*(1-T)*Dl/Sl',
        'vars': [
            { name: 'var1', value: 0 },
            { name: 'var2', value: 0 },
            { name: 'var3', value: 0 },
            { name: 'var4', value: 0 },
            { name: 'var5', value: 0 }
        ],
        'callback': (args) => getResultThird(...args),
    },
    'Стоимость банковского кредита': {
        'title': 'Стоимость банковского кредита',
        'subtitle': 'Pc=Rc*(1-T)/(1-C)',
        'vars': [
            { name: 'var1', value: 0 },
            { name: 'var2', value: 0 },
            { name: 'var3', value: 0 }
        ],
        'callback': (args) => getResultFourth(...args),
    },
    'Стоимость заемного капитала': {
        'title': 'Стоимость заемного капитала',
        'subtitle': 'Pb=Disc*(1-T)*100/((N-Disc)*(1-C)',
        'vars': [
            { name: 'var1', value: 0 },
            { name: 'var2', value: 0 },
            { name: 'var3', value: 0 },
            { name: 'var4', value: 0 }
        ],
        'callback': (args) => getResultFifth(...args),
    },
}

export default formulas