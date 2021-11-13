import Header from '../Header'
import { Outlet } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import style from './Layout.module.css'

const Layout = () => {
  return (
    <div>
      <Header />
      <Container fluid="md" className={style.bodyContainer}>
        <Outlet />
      </Container>
    </div>
  )
}

export default Layout