
let evictionTypes = [
    {typeId: 1,
    cause: "Termination of Lease",
    description:"The landlord can evict tenant upon exiration of lease term.",
    landlordNeeds: "The landlord is required to provide the tenant with a Notice to Vacate.",
    renterRights:[
        {defense: "Inadequate Notice to Vacate",
        description: "The Notice to Vacate must allow at least five days for the tenant to vacate the property. If a Rule for Possesion is filed before the sixth day after delivery of the Notice to Vacate, the tenant may be able to delay the eviction based on the inadequate notice."},
        {defense: "Landlord Accepts Rent After Notice to Vacate",
        description: "If your landlord accepts rent after delivery of the Notice to Vacate and before the judgement of eviction, you may have a defense to eviction--and you may have a reconducted month-to-month lease. If you are in this situation, you may attend the eviction trial and let the judge know that your landlord accepted rent. The landlord still has the right to deliver a Notice to Vacate to evict you for no cause, provided that they do so no later thann 10 days before the end of the current rental month. If you want to stay in your home, ask your landlord about renewing the lease."
        }
    ]},
    {typeId: 2,
    cause:"Lease Violation",
    description: "A landlord can start an eviction when a tenant has violated the lease.",
    landlordNeeds: "The landlord needs to provide evidence that a tenant has violated the lease. Some leases also require the landlord provide a warning and time to correct a lease violation before bringing an eviction.",
    renterRights: [
        {defense: "Res Judicata",
        description: "Landlords may not bring a second lawsuit about the same lease violation incident according to the doctrine of res judicata."
        }]
    },
    {typeId: 3,
    cause: "Nonpayment",
    description: "A landlord can start an eviction when a tenant has failed to pay rent on time.",
    landlordNeeds: "",
    renterRights: [
        {defense:"Tenant Paid Rent",
        description:"If you paid rent on time or the landlord accepted rent after the Notice to Vacate, you have a defense to eviction."},
        {defense:"Landlord Refused Rent",
        description:"The tenant may have a defense to eviction if the tenant can prove the landlord refused to accept the rent."},
        {defense:"Landlord Usually Accepts Late Rent",
        description:"There may be a defense to eviction if the tenant paid late and can show proof that the landlord has previously accepted rent late."},
        {defense:"Deductions for Repairs",
        description:"If you paid rent minus the cost of repairs you did to the property, you will need to show proof that you provided repairs, the cost of repairs, and a request for reimbursment from the landlord"},
        {defense:"Uninhabitable Property",
        description:"If you can provide proof that the unit was uninhabitable at the time of rent due to the landlord, you may have a defense to eviction."}
        ]
    },
    {typeId: 4,
    cause:"No Cause",
    description:"The landlord does not give a cause for eviction.",
    landlordNeeds: "",
    renterRights: [
        {defense:"Active Lease",
        description:"A landlord cannot legally evict you before the expiration of your written lease without a cause."}
        ]
    }
];

export function getTypes() {
    return evictionTypes;
};


export function getType(type_id) {
    return evictionTypes.find(
        (type) => type.typeId === type_id
    );
};