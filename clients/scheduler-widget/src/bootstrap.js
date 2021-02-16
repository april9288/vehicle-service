import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from "react-intl"
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { ContextProvider } from './contexts'
import messages from './i18n'
import { LOCALES } from './constants'
import { GlobalStyle } from './globalStyle'

import App from './App'

const client = new ApolloClient({
    uri: 'http://localhost:4000',
    cache: new InMemoryCache()
})

const { locale = LOCALES.ENGLISH } = {}

ReactDOM.render(
    <ApolloProvider client={client}>
        <ContextProvider>
            <IntlProvider locale={locale} messages={messages[locale]}>
                <GlobalStyle />
                <App />
            </IntlProvider>
        </ContextProvider>
    </ApolloProvider>,
    document.getElementById("root"))