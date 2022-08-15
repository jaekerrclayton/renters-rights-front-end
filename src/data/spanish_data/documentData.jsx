import vacate1 from '../documents/vacate1.jpeg';
import vacate2 from '../documents/vacate2.jpeg';
import vacate3 from '../documents/vacate3.jpeg';
import order1 from '../documents/order1.jpeg';
import order2 from '../documents/order2.jpeg';
import judgment1 from '../documents/judgment1.jpeg';
import judgment2 from '../documents/judgment2.jpeg';
import courtPrep1 from '../documents/courtPrep1.png'; 
import courtPrep2 from '../documents/courtPrep2.png'; 
 
 
const documentData = {
 
 
   title:'Que es un desalojo?',
   introduction:'El desalojo es un proceso legal en el cual el propietario solicita a la corte una Orden de Posesión de su propia casa. En este sitio, estamos para guiarle sobre el proceso legal de un desalojo, para que usted sepa sus derechos paso a paso. Si usted recibe un aviso de desahucio, es recomandable que se consulta con un abogado sobre las opciones disponibles.',
   close:'clos me',
   browse:'Haz click para ver ejemplos de documentos:',
   notice:'Usted ha recibido un documento aparecido? Se puede seleccionarlo para ver más información',
   1 : [
       {   id: vacate1,
           stage_id:  1,
           stage_title: "Noticia de Vaciar",   
           docInfo : [
                   {info_id: 1,
                   title: "Su nombre versus el nombre de su propietario",
                   sub_title: "Verifique si esta información es precisa. ¿Es esta la persona a la que le paga su contrato de arrendamiento? Considere ponerse en contacto con su arrendador para ver si hay una manera de evitar que ocurra su desalojo. ¡Echa un vistazo a 'Causas para el desalojo' para aprender sobre posibles defensas!",
                   placement: "bottom"
               },
                   {
                   info_id: 2,
                   title: "Ubicación de la corte",
                   sub_title:"Esto podría parecer un desalojo oficial, pero es solo una advertencia de que podría tener lugar una audiencia. Si termina enfrentando el desalojo, es probable que aquí sea donde se llevará a cabo el tribunal.",
                   placement: "bottom"
               },
                   {
                   info_id: 3,
                   title: "Causa de desalojo" ,
                   sub_title: "¿Por qué estás siendo desalojado, hay algo que puedas hacer para cambiar la situación? Considere las causas de desalojo anteriores y verifique las posibles defensas",
                   placement: "top"
               }
                   ]
       } ,
       {   id: vacate2,
           stage_id: 1,
           stage_title: "Notice to Vacate",
           docInfo: [
                       {
                       info_id: 4,
                       title: "Tiempo dado para responder al desalojo",
                       sub_title: "Desde el día en que ha recibido este aviso (excluyendo fines de semana), el propietario le ha dado 5 días para responder. Después de estos cinco días, el propietario puede ir a la corte para solicitar una audiencia",
                       placement: "top"
  
                       },
                       {
                       info_id: 5,
                       title: "Causa de desalojo"  ,
                       sub_title: "Haga clic en el botón para ver las causas comunes de desalojo y las defensas posibles. Si usted planea luchar por su caso en la corte, debe consultar con un abogado",
                       placement: "bottom"
                   }
               ]  
      
       },
      
       {   id: vacate3,
           stage_id: 1,
           stage_title: "Notice to Vacate",
           docInfo : [
                   {
                       info_id: 6,
                       title: "Fecha de la noticia",
                       sub_title:  "Desde el día en que ha recibido este aviso (excluyendo fines de semana), el propietario le ha dado 5 días para responder. Después de estos cinco días, el propietario puede ir a la corte para solicitar una audiencia",
                       placement: "top" 
                   },
  
                   {
                       info_id: 7,
                       title: "Causa de desalojo",
                       sub_title:"Haga clic en el botón para ver las causas de desalojo Haga clic en el botón para conocer las causas de desalojo y las defensas posibles",
                       placement: "top"
                   },
                   {   info_id: 8,
                       title: "Como contactarse con su propietario",
                       sub_title: "Dependiendo de su relación con su propietario, puede considerar tratar de evitar que ocurra el desalojo. Si usted intenta llegar a un acuerdo, toma pruebas y hablar por escrito",
                       placement: "top" 
                   }
               ]
           }
   ],
 
 
 
   2:
   [
       {   id: order1,
           stage_id: 2,
           stage_title: "Order of Possession",
           docInfo: [
  
               {info_id: 17,
               title: "Motivo de Desalojo",
               sub_title: "Debe estar en el orden, y por el mismo motivo que figura en la Notificación de Desalojo, se puede explorar en la sección de ‘Causas de desalojo’ para ver ejemplos de causas frecuentes y defensas comunes ",
               placement: "top"
               }
               ,
          
               {
               info_id: 18,
               title: "El Número de su Caso",
               sub_title: "Se puede llamar a la corte para pedir ayuda de interpretación antes de su caso, y para averiguar la fecha y hora de su caso. Si usted decide mudarse antes de la fecha de su caso, todavía tiene que notificar a la corte para que se cancelan su caso.",
               placement: "top"
               }
               ,
          
               {
               info_id: 19,
               title: "Fecha del Caso",
               sub_title: "Este es el lugar y la hora de su audiencia. Verifique si se especifica una habitación y prepárese para presentarse temprano.",
               placement: "bottom"
               },
          
               {info_id: 20,
               title: "Ubicación de la Corte",
               sub_title: "La ubicación del Corte: Aunque si usted desaloja antes que la fecha de su caso, AUN SI debe comunicarse con la corte antes que la fecha de su caso -- podría expedir un aviso de desahucio en su contra que quedaría registrado en su expediente",
               placement: "top"
          
           }
  
  
  
  
           ]
   },
  
   {   id: order2,
       stage_id: 2,
       stage_title: "Order of Possession",
      
       docInfo:
      
               [
                       {
                       info_id: 21,
                       title: "El Número de su Caso",
               sub_title: "Se puede llamar a la corte para pedir ayuda de interpretación antes de su caso, y para averiguar la fecha y hora de su caso. Si usted decide mudarse antes de la fecha de su caso, todavía tiene que notificar a la corte para que se cancelan su caso.",
                       placement: "top",
                  
                       },
                       {
                       info_id: 22,
                       title: "Motivo de Desalojo",
               sub_title: "Debe estar en el orden, y por el mismo motivo que figura en la Notificación de Desalojo, se puede explorar en la sección de ‘Causas de desalojo’ para ver ejemplos de causas frecuentes y defensas comunes ",
               placement: "bottom"

                      
                       },
                       {
                       info_id: 23,
                        title: "Ubicación del Corte",
               sub_title: "La ubicación del Corte: Aunque si usted desaloja antes que la fecha de su caso, AUN SI debe comunicarse con la corte antes que la fecha de su caso -- podría expedir un aviso de desahucio en su contra que quedaría registrado en su expediente",
 
                       placement: "top",
                      
                       }
              
          
                   ]
               }
   ],
   3: [
 
       {
           id: courtPrep1,
           stage_id: 3,
           docInfo: [
 

               {
 
                   info_id: 25,
                   title: "Mensajes de Texto o de Correo Electrónico",
                   sub_title: "Cualquier mensaje de texto o correspondencia escrita con su arrendador, también, LOUISIANA ES UN ESTADO EN CUAL TENEMOS EL DERECHO A GRABAR ** usted está legalmente autorizado a grabar cualquier conversación con su arrendador sin su conocimiento, y puede ser utilizado en la corte para apoyar su caso",
                   placement: "left"
 
               },
 
 
               {
 
                   info_id: 27,
                   title: "¡Todos los documentos importantes!",
                   sub_title: "Traiga una copia de su contrato de arrendamiento si tiene uno, cualquier recibo de reparaciones, facturas de pago de renta..o cualquier evidencia que pueda ayudarle",
                   placement: "top"
 
               },
 
 
 
           ]
       },
       {
        id: courtPrep2,
        stage_id: 3,
        docInfo: [

            {

                info_id: 24,
                title: "Evidencia fotográfica",
                sub_title: "Traiga cualquier foto de su apartamento que desee mostrar al juez",
                placement: "top"


            },

            {

                info_id: 26,
                title: "Testigos",
                sub_title: "Cualquiera que pueda apoyar su versión de la historia: amigo, vecino, familiar - le puede acompañar a su caso para hablar en su favor",
                placement: "top"

            },


        ]
    }
 
 
 
 
   ],
 
 
 
   5:
   [
  
      
       {   id: judgment1,
 
           stage_id: 5,
           stage_title: "Judgment", 
           docInfo : [
                   {info_id: 9,
                   title: "Número de su Caso",
                   sub_title: "Aquí debe encontrar su número de caso si tiene alguna pregunta sobre cuánto tiempo tiene para salir de su casa. Si desea apelar su caso, también puede hacerlo. Este proceso se describe en la siguiente diapositiva.", 
                   placement: "bottom"
               },
                   {
                   info_id: 10,
                   title: "Decisión de su caso",
                   sub_title: "Si ha recibido este aviso, su desalojo es oficial. Este es un ejemplo de una sentencia a favor del propietario. Desde el momento de recibir este aviso, tiene 24 horas para desalojar la propiedad.",
                   placement: "top"
               },
                   {
                   info_id: 11,
                   title: "Tiempo dado de desalojar" ,
                   sub_title:"Su arrendador no puede sacarlo por la fuerza a usted o a sus cosas de la casa, pero si no se va dentro de las 24 horas (fin de semana no incluido), el propietario puede llamar a la corte para que un agente o sheriff lo retire por la fuerza",
                   placement: "top"
               }
                   ]
       } ,
       {   id: judgment2,
           stage_id: 5,
           stage_title: "Judgment", 
           docInfo: [
                       {
                       info_id: 12,
                   title: "Número de su Caso",
                   sub_title: "Aquí debe encontrar su número de caso si tiene alguna pregunta sobre cuánto tiempo tiene para salir de su casa. Si desea apelar su caso, también puede hacerlo. Este proceso se describe en la siguiente pagina." , 
                       placement: "left"
  
                       },
                       {
                       info_id: 13,
                       title: "Court decision" ,
                       sub_title: "Su arrendador no puede sacarlo por la fuerza a usted o a sus cosas de la casa, pero usted no salga de casa dentro de las 24 horas (fin de semana no estan incluido), el propietario puede pedir a la corte para que un agente o sheriff lo retire por la fuerza",
                       placement: "bottom"
 
                   },
                   {
                       info_id: 14,
                       title: "Apelando su desalojo" , 
                       sub_title:"Si desea apelar su desalojo, esto también es posible. De todos modos, debe mudarse en el tiempo asignado y hasta que ocurra otra audiencia." ,
                       placement: "top"
 
                    },


                ]   
        
        }, 
        
        
    ]




    



} 






export default documentData;