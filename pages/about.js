import Link from 'next/link'
import { Box } from '../components/styles/Box.styled'
import { Header } from '../components/styles/Header.styled'


export default function Home() {
    return (
      <div>
          <Link href='/'>Home Page</Link>
          <Header>Naslov
             <ul>
                <li>
                   Lista 1
                </li>
                <li>
                   Lista 2
                </li>
             </ul>
          </Header>
          <Box>
       <div className="container" >
           
          <div className="box">Box 1</div>
          <div className="box">Box 2</div>
          <div className="box">Box 3</div>
          <div className="box">Box 4</div>
          <div className="box">Box 5</div>
          <div className="box">Box 6</div>
          
          </div>
          </Box>
       </div>
       
    )
  }
  