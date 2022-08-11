import vacate1 from '../documents/vacate1.jpeg';
import vacate2 from '../documents/vacate2.jpeg';
import vacate3 from '../documents/vacate3.jpeg';
import order1 from '../documents/order1.jpeg';
import order2 from '../documents/order2.jpeg'; 
import judgment1 from '../documents/judgment1.jpeg';
import judgment2 from '../documents/judgment2.jpeg';


const documentData = {
    title:'TITLE TILTE',
    introduction:'??????????',
    close:'clos me',
    browse:'Browse document examples',
    notice:'Do any of these look like your notice?',
    1 : [
        {   id: vacate1,
            stage_id:  1,
            stage_title: "Noticia de Vaciar",    
            docInfo : [
                    {info_id: 1,
                    title: "SSDPANISH", 
                    sub_title: "Check if this SSDPANISH",
                    placement: "bottom" 
                }, 
                    {
                    info_id: 2,
                    title: "Court Location", 
                    sub_title: "Thisasdfsdaicial eviciton - but it is just a warning that a hearing could take place. If you do end up facing eviction, this is likely where the court will be held", 
                    placement: "bottom" 
                }, 
                    {
                    info_id: 3,
                    title: "Cause of Eviction" , 
                    sub_title: "Why you're asdfasdfhing you could do to change the situation ? Consider causes of eviction above, and check out potential defenses." , 
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
                        title: "Time given to respond to eviction",
                        sub_title: "From the daasdfasdf the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                        }, 
                        {
                        info_id: 5,
                        title: "Cause for Eviction" , 
                        sub_title: "Your notice asdfasng evicted. Look above for different defenses for types of evictions.", 
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
                        title: "Date of notice", 
                        sub_title:  "five busasdfasfthis notice, your landlord can go to court to request a hearing.",
                        placement: "right"  
                    }, 
    
                    {
                        info_id: 7,
                        title: "Cause of Eviction", 
                        sub_title: "Why youSPANISHAPSNISHook for are -- NONPAYMENT OF RENT, VIOLATION OF LEASE, TERMINATION OF LEASE, scroll up to see potential defenses.", 
                        placement: "top" 
                    },
                    {   info_id: 8,
                        title: "Your landuSPANISHAPSNISHook formation.", 
                        sub_title: "DeuSPANISHAPSNISHook ationship with your landlord, you may consider communicating with your landlord to try to prevent the eviction from happening",
                        placement: "right"  
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
                title: "Cause of Eviction",
                sub_title: "The orduSPANISHAPSNISHook reason you are being evicted", 
                placement: "bottom"
                }
                , 
            
                {
                info_id: 18,
                title: "Case Number",
                sub_title: "You can call theuSPANISHAPSNISHook quest a translator in advance, or request an extension. Your case number is important in gathering any additional information you may need to provide to the court",
                placement: "bottom"
                }
                , 
            
                {
                info_id: 19, 
                title: "Date of Hearing", 
                sub_title: "This isuSPANISHAPSNISHook ring. Check if a room is specified, and prepare to show up early.", 
                placement: "bottom"
                },
            
                {info_id: 20,
                title: "Location of Court", 
                sub_title: "ThisuSPANISHAPSNISHook questions or continuances",
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
    ], 



    5: 
    [
    
        
        {   id: judgment1, 

            stage_id: 5,
            stage_title: "Judgment",  
            docInfo : [
                    {info_id: 9,
                    title: "Your name versus your landlord", 
                    sub_title: "Check if this information is accurate. Is this the person you pay your lease to ? Consider contacting your landlord to see if there is a way of preventing your eviction from happening. Check out above 'Causes for Evicion' to learn about potential defenses!" ,  
                    placement: "bottom" 
                }, 
                    {
                    info_id: 10,
                    title: "Court Location", 
                    sub_title: "This might look like an official eviciton - but it is just a warning that a hearing could take place. If you do end up facing eviction, this is likely where the court will be held", 
                    placement: "top" 
                }, 
                    {
                    info_id: 11,
                    title: "Cause of Eviction" , 
                    sub_title: "Why you're being evicted - is there something you could do to change the situation ? Consider causes of eviction above, and check out potential defenses." , 
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
                        title: "Time given to respond to eviction",
                        sub_title: "From the day you have received this notice, the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                        }, 
                        {
                        info_id: 13,
                        title: "Cause for Eviction" , 
                        sub_title: "Your notice should say why you're being evicted. Look above for different defenses for types of evictions.", 
                        placement: "bottom"
                    },
                    {
                        info_id: 14, 
                        title: "Time given to respond to eviction",
                        sub_title: "From the day you have received this notice, the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                    },
                    {
                        info_id: 15, 
                        title: "Time given to respond to eviction",
                        sub_title: "From the day you have received this notice, the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                    },
                    {
                        info_id: 16, 
                        title: "Time given to respond to eviction",
                        sub_title: "From the day you have received this notice, the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                        },  
                ]   
        
        }, 
        
        
    ]




    



} 






export default documentData;


// export function getJudgmentDocs() {
//     return judgmentData;
  
// };
  
  
  
// export function getOrderData () {
//     return orderData;
  
//   };
  


// export function getvacateDocs() {
//     return vacateDocs;
  
// };