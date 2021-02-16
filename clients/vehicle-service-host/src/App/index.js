import React from "react";
import ReactDOM from "react-dom";

const Widget = React.lazy(() => import("widget/Widget"));

import {
    AppContainer
} from './styles'

class WidgetWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch() { }

    render() {
        if (this.state.hasError) {
            return (
                <React.Suspense fallback={<div>Loading fallback Widget</div>}>
                    <section>Fallback</section>
                </React.Suspense>
            )
        }

        return (
            <React.Suspense fallback={<div>Widget loading</div>}>
                <Widget xprops={{ locale: 'en' }} />
            </React.Suspense>
        )
    }
}



const App = () => {
    return (
        <AppContainer>
            <div className="text">Vehicle Service Host</div>
            <WidgetWrapper />
        </AppContainer>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
