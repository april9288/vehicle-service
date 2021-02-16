import { IntlProvider } from "react-intl"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { ContextProvider } from './contexts'
import messages from './i18n'
import { LOCALES } from './constants'
import { GlobalStyle } from './globalStyle'

import Widget from './Widget'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
})

const WidgetExport = ({ xprops }) => {

    const { locale = LOCALES.ENGLISH } = xprops

    return (
        <ApolloProvider client={client}>
            <ContextProvider>
                <IntlProvider locale={locale} messages={messages[locale]}>
                    <GlobalStyle />
                    <Widget />
                </IntlProvider>
            </ContextProvider>
        </ApolloProvider>
    )
}

export default WidgetExport