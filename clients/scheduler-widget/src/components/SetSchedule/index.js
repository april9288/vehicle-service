import Card from './Card'
import { STEPS } from '../../constants'
import { message } from '../../shared'

import {
    Title,
    ListWrapper,
    Button,
} from './styles'

const SetLocationState = ({ data, setSchedule, schedule, setStep }) => {

    const { queryForServiceCenters } = data

    return (
        <section>
            <Title>
                {
                    message("title")
                }
            </Title>
            <ListWrapper>
                {
                    queryForServiceCenters.map((item, i) => <Card key={i} item={item} setSchedule={setSchedule} customid={i} schedule={schedule} />)
                }
            </ListWrapper>
            <Button>
                <button onClick={() => setStep(STEPS.COMPLETE_STATE)}>
                    {
                        message("button-complete")
                    }
                </button>
            </Button>
        </section>
    )
}

export default SetLocationState