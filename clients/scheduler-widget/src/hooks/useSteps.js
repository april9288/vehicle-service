import { useState } from 'react'

import { STEPS } from '../constants'

const useSteps = (defaultStep = STEPS.LOADING_STATE) => {
    const [currStep, setStep] = useState(defaultStep)

    return {
        currStep,
        setStep,
    }
}

export default useSteps
