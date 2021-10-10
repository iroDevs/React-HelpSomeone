import React, {useState , useEffect} from 'react'
import Footer from '../Components/Footer'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
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
     {nome ?
     <Alert variant='warning'>
    Se ativar a opção anonimo seu nome não aparecerá na lista e sim seu apelido!
  </Alert>
    :
    undefined 
     }
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
        numero do pix
           <Form.Control size="lg" type="text" placeholder="Sobrenome" required />
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
