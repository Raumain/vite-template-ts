import Keycloak from 'keycloak-js'

const keycloak = Keycloak({
  realm: 'myRealmDemo',
  url: 'http://localhost:8081/auth',
  clientId: 'react-client'
})

export default keycloak
