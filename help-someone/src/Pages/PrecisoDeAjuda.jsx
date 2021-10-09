import React from 'react'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./css/PrecisoDeAjuda.css"

export default function PrecisoDeAjuda() {
  return (
   <div>
     <div className="Help-form">
      <Form>
        <div className="itens-form">
        <label>
          Nome:
           <Form.Control size="lg" type="text" placeholder="Nome" required />
           
        </label>
      </div>
          
        <label>
          Sobrenome:
           <Form.Control size="lg" type="text" placeholder="Sobrenome" required />
        </label>

        <br />
        <label>
          Aviso Da ajuda:
           <Form.Control size="lg" type="text" placeholder="isso vai ser oque irá aparecer" required />
        </label>
        <br />
      <Form.Label>Pedido De Ajuda</Form.Label>
      <Form.Control as="textarea" rows={3} />

      </Form>
      
     </div>
    <Footer></Footer>
   </div>
  )
}
