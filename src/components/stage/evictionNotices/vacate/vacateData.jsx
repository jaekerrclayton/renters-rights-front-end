import vacate1 from '../vacate1.jpeg';
import vacate2 from '../vacate2.jpeg';
import vacate3 from '../vacate3.jpeg';





const vacateDocs = [

    
    {   id: vacate1, 
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
        docInfo : [ 
                {
                    info_id: 6,
                    title: "Date of notice", 
                    sub_title:  "five business days after receiving this notice, your landlord can go to court to request a hearing.",
                    placement: "right"  
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
                    placement: "right"  
                } 
            ]
        }
]



export function getvacateDocs() {
    return vacateDocs;
  
};