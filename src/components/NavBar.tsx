import {Link} from 'react-router-dom'
import { useKeycloak } from '@react-keycloak/web'
import { useTranslation } from 'react-i18next'

export default function NavBar() {
  const { t } = useTranslation()
  const { keycloak } = useKeycloak()
  return (
    <>
    <div className='flex justify-around items-center py-5 bg-[#234] text-white'>
      <h1 className='font-semibold font-2xl'>{t('navbar.title') as string}</h1>
      <ul className='flex'>

        <li className='mx-1'>
          <Link to='/'>{t('navbar.lien1') as string}</Link>
        </li>
        <li className='mx-1'>
          {keycloak.authenticated ? <div onClick={() => {keycloak.logout()}}>Logout</div> : <div onClick={() => [keycloak.login()]}>Login</div>}
        </li>
        <li className='mx-1'>
          {keycloak.authenticated ? <Link to ='/resource'>{t('navbar.lien3') as string}</Link> : null}
        </li>
      </ul>
    </div>
    </>
  )
}