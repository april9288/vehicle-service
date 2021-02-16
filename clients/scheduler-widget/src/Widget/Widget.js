import { gql, useQuery } from '@apollo/client'

import Loading from '../components/Loading'
import Error from '../components/Error'
import StateManager from './StateManager'
import {
    WidgetContainer
} from './styles'


const SERVICE_CENTERS = gql`
    query ExampleQuery {
    queryForServiceCenters {
        id
        title
        address
        phone
        availability {
        id
        date
        time
        }
    }
}
`

const ConditionalRendering = (Comp, data = null) => (
    <WidgetContainer>
        <Comp data={data} />
    </WidgetContainer>
)

const Widget = () => {
    const { loading, error, data } = useQuery(SERVICE_CENTERS)

    if (loading) return ConditionalRendering(Loading)

    else if (error) return ConditionalRendering(Error)

    else return ConditionalRendering(StateManager, data)
}

export default Widget
