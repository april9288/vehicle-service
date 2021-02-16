import { message } from '../../shared'
import {
    CardWrapper
} from './styles'

const Card = ({ item, setSchedule, customid, schedule }) => {

    const { title, address, phone, availability } = item

    const ServiceCenterSchedule = {
        location: customid,
        title: title,
        date: availability.date[customid % 3],
        time: availability.time[customid % 3]
    }

    return (
        <CardWrapper onClick={() => setSchedule(ServiceCenterSchedule)} selected={schedule.location === customid} >
            <div className="title">
                {title}
            </div>
            <div>
                {address}
            </div>
            <div>
                {phone}
            </div>
            <div>
                {
                    message('schedule-date', { value: availability.date[customid % 3] })
                }
            </div>
            <div>
                {
                    message('schedule-time', { value: availability.time[customid % 3] })
                }
            </div>
        </CardWrapper>
    )

}

export default Card