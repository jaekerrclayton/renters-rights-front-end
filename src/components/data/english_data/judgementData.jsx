import judgment1 from '../documents/judgment1.jpeg';
import judgment2 from '../documents/judgment2.jpeg';






const judgmentData = [

    
    {   id: judgment1, 
        stage_id: 4, 
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
        stage_id: 4,  
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
    


export function getJudgmentDocs() {
    return judgmentData;
  
};