/**
 * @type {Resource[]}
 */

let resources = [
  {
    name: "Legal Aid",
    number: 1995,
    amount: "Info on resource: how to get in touch etc // any additional updates or recommendations",
    contact: "504-234-2345",
  },
  {
    name: "Mutual Aid",
    number: 2000,
    amount: "Info on resource: how to get in touch etc // any additional updates or recommendations",
    contact: "504-234-2345",
  },
  {
    name: "Monetary Aid",
    number: 2003,
    amount: "Info on resource: how to get in touch etc // any additional updates or recommendations",
    contact: "504-234-2345",
  },
  {
    name: "Moving Support",
    number: 1997,
    amount: "Info on resource: how to get in touch etc // any additional updates or recommendations",
    contact: "504-234-2345",
  },
  {
    name: "Rental Assistance",
    number: 1998,
    amount: "Info on resource: how to get in touch etc // any additional updates or recommendations",
    contact: "504-234-2345",
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