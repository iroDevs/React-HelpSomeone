import React, {useState , useEffect} from 'react'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./css/PrecisoDeAjuda.css"

export default function PrecisoDeAjuda() {
const [nome , setNome] = useState(false)

function NameOrNickName(){
  setNome(!nome);
  console.log("essssee",nome);
}





const type = 'checkbox'
  return (
   <div>
     <div className="Help-form">
      <Form>
        <div className="itens-form">
        <Form.Check 
        type={type}
        id={`default-${type}`}
        label={`Anonimato?`}
        onClick={NameOrNickName}
      />
      {nome ? 
         <label>
         NickName:
           <Form.Control size="lg" type="text" placeholder="Apelido" required />
        </label> 
        :
         <label>
           Nome:
           <Form.Control size="lg" type="text" placeholder="Seu Nome" required />
        </label>
    
    
    }
      <br></br>
         
       
      </div>
          
        <label>
         Meio de pagamento
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
