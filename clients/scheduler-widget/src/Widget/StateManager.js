import useSteps from '../hooks/useSteps'
import SetSchedule from '../components/SetSchedule'
import Complete from '../components/Complete'
import { STEPS } from '../constants'
import { useState } from 'react'

const defaultSchedule = {
    location: undefined,
    title: undefined,
    date: undefined,
    time: undefined
}

const StateManager = ({ data }) => {
    const { currStep, setStep } = useSteps(STEPS.SET_LOCATION_STATE)

    const [schedule, setSchedule] = useState(defaultSchedule)

    const Steps = {
        [STEPS.SET_LOCATION_STATE]: <SetSchedule data={data} setStep={setStep} schedule={schedule} setSchedule={setSchedule} />,
        [STEPS.COMPLETE_STATE]: <Complete schedule={schedule} />
    }

    return Steps[currStep]
}

export default StateManager
