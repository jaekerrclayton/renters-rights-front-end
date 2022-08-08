// import React from "react";
// import vacate1 from './evictionNotices/vacate1.jpeg';
// import vacate2 from './evictionNotices/vacate2.jpeg';
// import vacate3 from './evictionNotices/vacate3.jpeg';
// import order1 from './evictionNotices/order1.jpeg';
// import order2 from './evictionNotices/order2.jpeg';

// // import courtVacate from './evictionNotices/5d-court-vacate.jpg';
// // import informalVacate from './evictionNoices/5d-informal-vacate.jpg';
// // import payVacate from './evictionNotices/5d-vacate.jpg'; 

// import {orderFirst } from './evictionNotices/orderFirst'; 


// let courtPrep = [

//   {

//   courtPrep_id: 1, 
//   title: "What Happens if I don't go to court",
//   info: "if you don't go to court & don't file anything with court, default lose :: look into appealing evic before court date",
//   tips: "Some additional info"


//   }, 
//   {

//     courtPrep_id: 2, 
//     title: "What Happens if I move out before court date",
//     info: "even if you move out before court date, you need to communicate w LL and court that you've left (LINK: how to move out)",
//     tips: "Some additional info"
  
  
//   }, 

//   {

//     courtPrep_id: 3, 
//     title: "How to Prepare for Court",
//     info: "documents to prepare for court/ some graphics about data and info needed",
//     tips: "Some additional info"
  
  
//   }, 
//   {

//     courtPrep_id: 4, 
//     title: "How to Appeal Before Court Date",
//     info: "Instructions on how to appeal (maybe links to specific appeal process)",
//     tips: "Some additional info"
  
  
//   }, 


// ];





// export function getCourtPrep() {
//   return courtPrep;
// }; 


// let stages = [
//   {
//     stage_id: 1, 
//     title: "Notice To Vacate",
//     sub_title: "This is the first notice",
//     info: "This is the first warning -- you are not currently being evicted, but you need to prepare! Read on to understand your eviction and see what the next steps are",
//     photo: vacate1,
//     about_notice: ["about notice div info", "second div info", "third div info"], 
//     next_steps: "link to next",
//     additional_resources: ["where to reach out- maybe hover", "another place to talk to maybe route to other page? ", "aaand another resource"]
//   },

//   {
//     stage_id: 2, 
//     title: "Preparing For Court",
//     sub_title: "Documents to gather & things to do!",
//     info: "Here are some things to consider before your eviction hearing. Here are some tips about what kinds of documents you want to gather, texts you should save to show to a judge, thinking about if you have potential witnesses to come with you & how to try to appeal ur eviction before it even begins",
//     photo: vacate2,
//     about_notice: [ "maybe instead : about_notice is just where  courtPrep data Comes in???"], 
//     next_steps: "link to next",
//     additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

//   },


//   {
//     stage_id: 3, 
//     title: "Possession of Property",
//     sub_title: "You have a court hearing approaching",
//     info: "You have been summoned to court to argue against eviction. It is important that you secure a lawyer if you plan to go to court, read on to figure out how to understand your eviction notice & what you can do to prepare for court",
//     photo: order1,
//     about_notice: ["first div info", "second div info", "third div info"], 
//     next_steps: "link to next",
//     additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

//   },


//   {
//     stage_id: 4, 
//     title: "Writ of Possession",
//     sub_title: "You have lost your case (or didn't go) & here is what to do next",
//     info: "Potential Outcomes (route to if you win / lose etc ): If you've gotten this notice, it is important that you move out as soon as posisble. Here is what to expect within 24 hours of receiving this notice. Some tips on how to move out to avoid losing your deposit or having to deal with the constable/sheriff",
//     photo: vacate3,
//     about_notice: ["first div info", "second div info", "third div info"], 
//     next_steps: "link to next (link to nested route of timeline of post-losing eviction)",
//     additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

//   },

//   {
//     stage_id: 5, 
//     title: "After Court Hearing",
//     sub_title: "Depending on the outcome of your hearing, you have some options",
//     info: "Potential Outcomes ( -- maybe make separte route to if you win / lose / appeal / didn't go) :: If your court date has past and you have lost or did not go, it's important you prepare quickly. But also, there are things your landlord cannot legally do even when you don't leave ",
//     photo: order2,
//     about_notice: ["first div info", "second div info", "third div info"], 
//     next_steps: "link to next",
//     additional_resources: ["where to reach out", "another place to talk to ", "aaand another resource"]

//   },




// ];





// export function getStages() {
//   return stages;

// };


// export function getStage(stage_id) {
//   return stages.find(
//     (stage) => stage.stage_id === stage_id
//   );
// };


// // export function getPhotos(photo) {
// //   return stages.find(
// //     (stage) => stage.map((photo) => )
// // };

// // // some kind of function to loop through 
// // // a list of photos ? return list of photo 
// // // names to map to doc examples

// // {stages
// //   .map((stage) => ( 
// //   <NavLink 
// //       to={`/eviction-map/${stage.stage_id}`}
// //       key={stage.stage_id}
// //   >
// //       {stage.title}                            
// //   </NavLink>
// // ))}
// // </nav>