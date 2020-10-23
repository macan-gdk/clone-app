import React from 'react'
import RouteComponent from './routes/RouteComponent'
import Apollo from './contexts/context'
import RouteUser from './routes/RouteUser'

const App = () => {

    return (
        <Apollo>
            <RouteComponent />
            <RouteUser />
        </Apollo >
    )
}

export default App;
