import Link from 'next/link'
import Item from '../components/Item'


export default function Home({events}) {
  return (
    <div>
      <Link href='/about'>About Page</Link>
      {events.map(evt=>(
        <Item key={evt.id} evt={evt} />
      ))}
     <div className="container">
     {/* <div className={styles.container}> */}
        <div className="box1">Box 1</div>
        <div className="box1">Box 2</div>
        <div className="box1">Box 3</div>
        <div className="box1">Box 4</div>
        <div className="box1">Box 5</div>
        <div className="box1">Box 6</div>
        </div>
        {/* </div> */}
     </div>
  )
}
export async function getServerSideProps(){
const res = await fetch('http://localhost:1337/api/events')
const json = await res.json()

const events = json.data

// console.log(events)
return{
  props:{events}
}
}
