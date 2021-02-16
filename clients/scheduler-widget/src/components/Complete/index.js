import { message } from '../../shared'

import {
    CompleteWrapper,
    Title,
    InfoWrapper
} from './styles'

const CompleteState = ({ schedule }) => (
    <CompleteWrapper>
        <Title>
            {
                message("schedule-success")
            }
        </Title>
        <InfoWrapper>
            <div>
                {
                    message('schedule-location', { value: schedule.title })
                }
            </div>
            <div>
                {
                    message('schedule-date', { value: schedule.date })
                }
            </div>
            <div>
                {
                    message('schedule-time', { value: schedule.time })
                }
            </div>
        </InfoWrapper>
    </CompleteWrapper>
)

export default CompleteState