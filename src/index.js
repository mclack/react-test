import Bugsnag from '@bugsnag/js'
import BugsnagPluginReact from '@bugsnag/plugin-react'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import Primary from './components/Primary'
import Secondary from './components/Secondary'
import ErrorView from './components/ErrorView'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

Bugsnag.start({
  apiKey: 'e0ec97c1a2149f7864db694fdad1f8ce',
  plugins: [new BugsnagPluginReact(React)],
  appVersion: '1.2.3'
})


// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     // logErrorToMyService(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return this.props.children; 
//   }
// }

const ErrorBoundary = Bugsnag.getPlugin('react')


// const ErrorScreen = ({ clearError }) =>
//   <div>
//     <h1> Error </h1>
//     <p><strong>Uh oh, there was an error in the component tree!</strong></p>
//     <p>This <code>FallbackComponent</code> prop can be used to show something useful to your users when such errors occur.</p>
//     <button onClick={clearError}>Reset</button>
//   </div>

// const onError = event => {
//   // You can also provide an onError callback to run just on errors caught by
//   // the error boundary. Maybe you want to attach some of the current state from
//   // whatever model/store you're using (e.g redux)
//   console.log('about to send this event', { event })
// }

const router = createBrowserRouter([
  {
    path: '/primary',
    element: <Primary />,
    errorElement: <ErrorBoundary FallbackComponent={ErrorView} />
  },
  {
    path: '/secondary',
    element: <Secondary />,
    errorElement: <ErrorBoundary FallbackComponent={ErrorView} />
  }
])

ReactDOM.render(
  <React.StrictMode>
    {/* <ErrorBoundary FallbackComponent={ErrorView}> */}
      <RouterProvider router={router} />
    {/* </ErrorBoundary>, */}
  </React.StrictMode>,
  document.getElementById('root')
)