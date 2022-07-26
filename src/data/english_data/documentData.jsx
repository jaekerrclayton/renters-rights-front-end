import vacate1 from '../documents/vacate1.jpeg';
import vacate2 from '../documents/vacate2.jpeg';
import vacate3 from '../documents/vacate3.jpeg';
import order1 from '../documents/order1.jpeg';
import order2 from '../documents/order2.jpeg'; 
import judgment1 from '../documents/judgment1.jpeg';
import judgment2 from '../documents/judgment2.jpeg';
import courtPrep1 from '../documents/courtPrep1.png'; 
import courtPrep2 from '../documents/courtPrep2.png'; 
import cops from '../documents/noIcons/cops.png'; 
import lights from '../documents/noIcons/lights.png'; 
import move from '../documents/noIcons/move.png'; 
import no from '../documents/noIcons/no.png'; 
import lock from '../documents/noIcons/lock.png'; 



const documentData = {

    title:'What is an eviction?',
    introduction:'An Eviction is a legal process in which the landlord petitions the court for an Order of Possession of his or her own home. On this site, we are here to guide you through the legal process of an eviction, so you know your rights by step. If you receive a notice of eviction, it is recommending that you consult with an attorney about your available options.',
    close:'close me',
    browse:'Browse document examples',
    notice:'Do any of these look like your notice?',


    can_ll: "Can my landlord ..? ",
    ll_disclaimer: "It is illegal for your landlord to do any of these things, they must go through the full eviction process in order to remove you from your home ",
    ll_slides: [
        {text: "", image: no}, 
       {text: "call the cops? ", image: cops } , 
       {text: "", image: no}, 
        {text: "shut off my gas / lights/ water? ", image: lights}, 
        {text: "", image: no}, 
        {text: "change the locks or kick me out of the house?", image: lock},
        {text: "", image: no}, 
        {text: "remove my things from my home?", image: move}, 
        {text: "", image: no}, 

 

    ], 


    1 : [
        {   id: vacate1,
            stage_id:  1,
            stage_title: "Notice to Vacate",    
            docInfo : [
                    {info_id: 1,
                    title: "Your name versus your landlord", 
                    sub_title: "Check if this information is accurate. Is this the person you pay your lease to ? Consider contacting your landlord to see if there is a way of preventing your eviction from happening. Check out above 'Causes for Evicion' to learn about potential defenses!" ,  
                    placement: "bottom" 
                }, 
                    {
                    info_id: 2,
                    title: "Court Location", 
                    sub_title: "This might look like an official eviciton - but it is just a warning that a hearing could take place. If you do end up facing eviction, this is likely where the court will be held", 
                    placement: "bottom" 
                }, 
                    {
                    info_id: 3,
                    title: "Cause of Eviction" , 
                    sub_title: "Why you're being evicted - is there something you could do to change the situation ? Consider causes of eviction above, and check out potential defenses." , 
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
                        sub_title: "From the day you have received this notice, the Landlord has given you 5 days to respond. After these five days, the landlord can go to court to request a hearing.", 
                        placement: "top"
    
                        }, 
                        {
                        info_id: 5,
                        title: "Cause for Eviction" , 
                        sub_title: "Your notice should say why you're being evicted. Look above for different defenses for types of evictions.", 
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
                        sub_title:  "five business days after receiving this notice, your landlord can go to court to request a hearing.",
                        placement: "top"  
                    }, 
    
                    {
                        info_id: 7,
                        title: "Cause of Eviction", 
                        sub_title: "Why you're being evicted:  key words to look for are -- NONPAYMENT OF RENT, VIOLATION OF LEASE, TERMINATION OF LEASE, scroll up to see potential defenses.", 
                        placement: "top" 
                    },
                    {   info_id: 8,
                        title: "Your landlord's contact information.", 
                        sub_title: "Depending on your relationship with your landlord, you may consider communicating with your landlord to try to prevent the eviction from happening",
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
                title: "Cause of Eviction",
                sub_title: "The order is required to explain the reason you are being evicted", 
                placement: "top"
                }
                , 
            
                {
                info_id: 18,
                title: "Case Number",
                sub_title: "You can call the court at any time to request a translator in advance, or request an extension. Your case number is important in gathering any additional information you may need to provide to the court",
                placement: "top"
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
        stage_id: 2, 
        stage_title: "Order of Possession",
        
        docInfo:
        
                [
                    {
                        info_id: 21,
                        title: "Case number",
                        sub_title: "You can call the court at any time to request a translator in advance, or request an extension. Your case number is important in gathering any additional information you may need to provide to the court",
                        placement: "top",
                   
                        },
                        {
                        info_id: 22,
                        title: "Cause of Eviction",
                        sub_title: "The order is required to explain the reason you are being evicted", 
                        placement: "bottom"
 
                       
                        },
                        {
                        info_id: 23,
                        title: "Location of Court", 
                        sub_title: "This is the number to call for any questions or continuances",
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
                    title: "Text messages", 
                    sub_title: "Any text messages or written correspondance with your landlord -- ** LOUISIANA IS A RIGHT TO RECORD STATE ** you are legally allowed to record any conversations with your landlord without their knowledge, and can be used in court to support your case", 
                    placement: "top"

                }, 



                {

                    info_id: 27, 
                    title: "All important documents!", 
                    sub_title: "Bring a copy of your lease if you have one, any reciepts from repairs you may have done, or any evidence that may help you", 
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
                    title: "Photographic evidence", 
                    sub_title: "Bring any photos of your unit you may want to show to the judge", 
                    placement: "top"


                }, 


                {

                    info_id: 26, 
                    title: "Witnesses", 
                    sub_title: "Anyone who can support your side of the story - friend, neighbor, family", 
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
                    title: "Case Number", 
                    sub_title:"Here you should find your case number if you have any questions regarding how much time you have to leave your home. If you wish to appeal your case, you may also do so. This process is described on the next slide.",
                    placement: "bottom" 
                }, 
                    {
                    info_id: 10,
                    title: "Court Decision", 
                    sub_title: "If you have received this notice, your eviction is official. This is an example of a judgment in favor of the landlord. From the time of receiving this notice, you have 24 hours to vacate the property.", 
                    placement: "top" 
                }, 
                    {
                    info_id: 11,
                    title: "Time given to vacate" , 
                    sub_title: "Your landlord cannot forcefully remove you or your things from the house, but if you do not leave within 24 hours (weekend not included), the landlord is able to call the court to have you forcefully removed by a constable or sheriff" , 
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
                        title: "Case number",
                        sub_title: "Here you should find your case number if you have any questions regarding how much time you have to leave your home. If you wish to appeal your case, you may also do so. This process is described on the next slide", 
                        placement: "left"
    
                        }, 
                        {
                        info_id: 13,
                        title: "Court decision" , 
                        sub_title: "Your landlord cannot forcefully remove you or your things from the house, but if you do not leave within 24 hours (weekend not included), the landlord is able to call the court to have you forcefully removed by a constable or sheriff", 
                        placement: "bottom"
                    },
                    {
                        info_id: 14, 
                        title: "Appealing your eviction",
                        sub_title: "If you wish to appeal your eviction, this is also possible. Regardless, you should move out in the allotted time and until another hearing occurs.", 
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