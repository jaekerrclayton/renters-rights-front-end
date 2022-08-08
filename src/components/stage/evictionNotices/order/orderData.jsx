import order1 from '../order1.jpeg';
import order2 from './order2.jpeg'; 



const orderData = [
    {   id: order1, 
        docInfo: [

      {order_id: 1, 
      title: "Cause of Eviction",
      sub_title: "The order is required to explain the reason you are being evicted", 
      placement: "bottom"
    }
    , 
  
    {
      order_id: 2,
      title: "Case Number",
      sub_title: "You can call the court at any time to request a translator in advance, or request an extension. Your case number is important in gathering any additional information you may need to provide to the court",
      placement: "bottom"
    }
    , 
  
    {
      order_id: 3, 
      title: "Date of Hearing", 
      sub_title: "This is the location and time of your hearing. Check if a room is specified, and prepare to show up early.", 
      placement: "bottom"
    },
  
    {order_id: 4,
    title: "Location of Court", 
    sub_title: "This is the number to call for any questions or continuances",
    placement: "top"
  
  } 




        ]
}, 

{   id: order2, 
    docInfo:
    
            [
                    {
                    order_id: "",
                    title: "",
                    sub_title: "",
                    placement: "",
                
                    },
                    {
                    order_id: "",
                    title: "", 
                    sub_title: "",
                    placement: "",
                    
                    },
                    {
                    order_id: "",
                    title: "",
                    sub_title: "",
                    placement: "",
                    
                    }
        
                ] 
]
  
  
  
  export function getorderData () {
    return orderData;
  
  };
  
