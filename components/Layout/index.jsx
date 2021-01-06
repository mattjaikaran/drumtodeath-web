import Header from '../Header'
import { Container } from 'react-bootstrap'
import style from './Layout.module.css'

const Layout = ({children}) => {
  return (
    <div>
      <Header />
      <Container className={style.bodyContainer}>
        {children}
      </Container>
    </div>
  )
}

export default Layout