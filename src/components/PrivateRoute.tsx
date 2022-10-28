import { useKeycloak } from '@react-keycloak/web'
import Error403Page from './403'

type PrivateRoute = {
  children: JSX.Element 
}

const PrivateRoute = ({ children }: PrivateRoute)=> {
  const { keycloak } = useKeycloak()
  return keycloak.authenticated ? children : <Error403Page />
}

export default PrivateRoute
