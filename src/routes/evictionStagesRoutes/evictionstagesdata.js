let courtPrep = [

  {

  courtPrep_id: 1, 
  title: "What Happens if I don't go to court",
  info: "if you don't go to court & don't file anything with court, default lose :: look into appealing evic before court date",
  tips: "Some additional info"


  }, 
  {

    courtPrep_id: 2, 
    title: "What Happens if I move out before court date",
    info: "even if you move out before court date, you need to communicate w LL and court that you've left (LINK: how to move out)",
    tips: "Some additional info"
  
  
  }, 

  {

    courtPrep_id: 3, 
    title: "How to Prepare for Court",
    info: "documents to prepare for court/ some graphics about data and info needed",
    tips: "Some additional info"
  
  
  }, 
  {

    courtPrep_id: 4, 
    title: "How to Appeal Before Court Date",
    info: "Instructions on how to appeal (maybe links to specific appeal process)",
    tips: "Some additional info"
  
  
  }, 


];





export function getCourtPrep() {
  return courtPrep;
}; 


let evictionStages = [
  {
    stage_id: 1, 
    title: "Notice To Vacate",
    sub_title: "This is the first notice",
    info: "This is the first warning -- you are not currently being evicted, but you need to prepare! Read on to understand your eviction and see what the next steps are",
    photo: "Link to photo",
    about_notice: ["about notice div info", "second div info", "third div info"], 
    next_steps: "link to next",
    additional_resources: ["where to reach out- maybe hover", "another place to talk to maybe route to other page? ", "aaand another resource"]
  },

  {
    stage_id: 2, 
    title: "Possession of Property",
    sub_title: "You have a court hearing approaching",
    info: "You have been summoned to court to argue against eviction",
    photo: "Link to photo",
    about_notice: ["first div info", "second div info", "third div info"], 
    next_steps: "link to next",
    additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

  },
  {
    stage_id: 3, 
    title: "Preparing For Court",
    sub_title: "Documents to gather & things to do!",
    info: "Here are some things to consider before your eviction hearing",
    photo: "NO PHOTO (maybe just import janes place info on what to bring to court?? ) --- link to other (nested) route :: what happens if (i go to court / don't go / appeal before court)",
    about_notice: [ "maybe instead : about_notice is just where  courtPrep data Comes in???"], 
    next_steps: "link to next",
    additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

  },
  {
    stage_id: 4, 
    title: "After Court Hearing",
    sub_title: "Depending on the outcome of your hearing, you have some options",
    info: "Potential Outcomes ( -- maybe make separte route to if you win / lose / appeal / didn't go)",
    photo: "NO PHOTO --- link to other route :: what happens if (i go to court / don't go / appeal before court)",
    about_notice: ["first div info", "second div info", "third div info"], 
    next_steps: "link to next",
    additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

  },

  {
    stage_id: 5, 
    title: "Writ of Possession",
    sub_title: "You have lost your case (or didn't go) & here is what to do next",
    info: "Potential Outcomes (route to if you win / lose etc )",
    photo: "NO PHOTO --- link to other route :: what happens if (i go to court / don't go / appeal before court)",
    about_notice: ["first div info", "second div info", "third div info"], 
    next_steps: "link to next (link to nested route of timeline of post-losing eviction)",
    additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

  },



];





export function getEvictionStages() {
  return evictionStages;

};


export function getStage(stage_id) {
  return evictionStages.find(
    (stage) => stage.stage_id === stage_id
  );
};

