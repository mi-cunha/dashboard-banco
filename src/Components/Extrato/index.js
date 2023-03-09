import React from "react";
import { Box } from "../UI";
import {extratoLista} from "../../info"
import { Button } from "../UI";
import Items from "../Items";

const Extrato = () => {

  return (
    <Box>
      {
        extratoLista.updates.map(({id, type, from, value, date}) => {
          return(            

            <Items key={id} type={type} from={from} value={value} date={date}/>
            
          )
        })
      }
      <Button>Ver Mais</Button>
    </Box>
    )

  }

  export default Extrato;
