import React, {useContext,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import Footer from '../Components/Footer'
import './css/inicial.css'



export default function Inicial() {
  const [profile , setProfile] = useState('')
  return (
    <div className="principal-page ">
     
      <div className="left-side">
        <h1 className="left-side-text">Precisa de ajuda?</h1>
        <div className="left-button">
          <Button variant="outline-primary" size="lg">Preciso de ajuda</Button>
      </div>
      </div>
        <div className="right-side">
          <h1 className="right-side-text">Quer Ajudar?</h1>
        <div className="right-button">

        <Button variant="outline-light" size="lg">Eu Posso Ajudar</Button>

            </div>
          </div>
          <Footer />
        </div>
        
  )
}
