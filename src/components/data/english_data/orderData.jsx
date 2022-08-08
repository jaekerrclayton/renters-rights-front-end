import order1 from '../documents/order1.jpeg';
import order2 from '../documents/order2.jpeg'; 



const orderData = [
    {   id: order1, 
        docInfo: [

      {info_id: 17, 
      title: "Cause of Eviction",
      sub_title: "The order is required to explain the reason you are being evicted", 
      placement: "bottom"
    }
    , 
  
    {
      info_id: 18,
      title: "Case Number",
      sub_title: "You can call the court at any time to request a translator in advance, or request an extension. Your case number is important in gathering any additional information you may need to provide to the court",
      placement: "bottom"
    }
    , 
  
    {
      info_id: 19, 
      title: "Date of Hearing", 
      sub_title: "This is the location and time of your hearing. Check if a room is specified, and prepare to show up early.", 
      placement: "bottom"
    },
  
    {info_id: 20,
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
                    info_id: 21,
                    title: "asdfasd",
                    sub_title: "asdfasd",
                    placement: "top",
                
                    },
                    {
                    info_id: 22,
                    title: "asdf", 
                    sub_title: "asdfasdf",
                    placement: "bottom",
                    
                    },
                    {
                    info_id: 23,
                    title: "asdfad",
                    sub_title: "asdf",
                    placement: "top",
                    
                    }
            
        
                ] 
            }
]
  
  
  
export function getOrderData () {
    return orderData;
  
  };
  
