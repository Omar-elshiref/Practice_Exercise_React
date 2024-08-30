import './App.css'
// import ReactHookForm from './components/auth/reactHookForm'
// import Login from './components/auth/login'
// import Login1 from './components/auth/login1'
// import Login2 from './components/auth/login2'
// import Login3 from './components/auth/login3'
// import CustomHookForm from './components/auth/customHookForm'
// import FormikForm from './components/auth/formikForm'
// import SWRExample from './components/auth/sWRExample'
// import ReactQueryExample from './components/auth/reactQueryExample'
// import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
// import ExpensiveComponent from './components/auth/expensiveComponent'
import VirtualizedList from './components/auth/virtualizedList'

// const queryClient = new QueryClient()

function App() {

  return (
    <>
    {/* <Login /> */}
    {/* <Login1 /> */}
    {/* <Login2 /> */}
    {/* <Login3 /> */}
    {/* <CustomHookForm /> */}
    {/* <FormikForm /> */}
    {/* <ReactHookForm /> */}
    {/* <SWRExample /> */}
    {/* ============================================================================== */}
    {/* <QueryClientProvider client={queryClient}>
    <ReactQueryExample />
    </QueryClientProvider> */}
    {/* ============================================================================== */}
    {/* <ExpensiveComponent /> */}
    <VirtualizedList />

    


    </>
  )
}

export default App
