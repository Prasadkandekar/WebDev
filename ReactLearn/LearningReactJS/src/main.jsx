import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ReactForms from './forms.jsx'
import Navbar from './components/Navbar.jsx'
import Card from './components/Card.jsx'

const users = [
  {
    "photo": "https://picsum.photos/200/300?random=1",
    "name": "John Doe",
    "profession": "Software Engineer",
    "age": 30,
    "city": "New York"
  },
  {
    "photo": "https://picsum.photos/200/300?random=2",
    "name": "Jane Smith",
    "profession": "Graphic Designer",
    "age": 25,
    "city": "Los Angeles"
  },
  {
    "photo": "https://picsum.photos/200/300?random=3",
    "name": "Ali Khan",
    "profession": "Data Scientist",
    "age": 28,
    "city": "San Francisco"
  },
  {
    "photo": "https://picsum.photos/200/300?random=4",
    "name": "Emily Clark",
    "profession": "Content Writer",
    "age": 32,
    "city": "Chicago"
  },
  {
    "photo": "https://picsum.photos/200/300?random=5",
    "name": "Michael Brown",
    "profession": "Mechanical Engineer",
    "age": 35,
    "city": "Houston"
  }
]


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Navbar />
  { users.map(function(e){
    return <Card photo = {e.photo} name = {e.name} profession = {e.profession} city = {e.city} age = {e.age} />
   })}
    <ReactForms />
  
  </StrictMode>,
)
