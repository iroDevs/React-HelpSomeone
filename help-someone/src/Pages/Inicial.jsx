import React, {useContext,useEffect,useState} from 'react'
import Button from 'react-bootstrap/Button';
import './css/inicial.css'



export default function Inicial() {
  const [profile , setProfile] = useState('')
  return (
    <div className="principal-page">
      <div className="left-side">

        <div className="left-button">
          <Button variant="outline-primary" size="lg">Preciso de ajuda</Button>
      </div>
      </div>
        <div className="right-side">

        <div className="right-button">

        <Button variant="outline-dark" size="lg">Eu Posso Ajudar</Button>

            </div>
          </div>
        </div>
  )
}
