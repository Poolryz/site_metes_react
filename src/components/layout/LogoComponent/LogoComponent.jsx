import { Link } from 'react-router-dom'
import imageSrc from '../../assets/image.png'

function LogoComponent() {
  return (
    <Link to={"/"}>
      <img src={imageSrc} alt="logo" className='logo' />
    </Link>

  )
}

export default LogoComponent