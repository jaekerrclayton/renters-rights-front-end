/**
 * @type {Resource[]}
 */

let resources = [
  {
    name: "Legal Aid",
    number: 1995,
    amount: "$10,800",
    due: "12/05/1995",
  },
  {
    name: "Mutual Aid",
    number: 2000,
    amount: "$8,000",
    due: "10/31/2000",
  },
  {
    name: "Monetary Aid",
    number: 2003,
    amount: "$9,500",
    due: "07/22/2003",
  },
  {
    name: "Tubthumper",
    number: 1997,
    amount: "$14,000",
    due: "09/01/1997",
  },
  {
    name: "Wide Open Spaces",
    number: 1998,
    amount: "$4,600",
    due: "01/27/1998",
  },
];

export function getResources() {
  return resources;
};


export function getResource(number) {
  return resources.find(
    (resource) => resource.number === number
  );
};


export function deleteResource(number) {
  resources = resources.filter(
    (resource) => resource.number !== number
  );
}