
let evictionTypes = [
    {cause: "termination of lease",
    "Description":"The landlord can evict tenant upon exiration of lease term.",
    "Landlord Needs": "The landlord is required to provide the tenant with a Notice to Vacate.",
    "Renter Rights":{
        "Inadequate Notice to Vacate" : "The Notice to Vacate must allow at least five days for the tenant to vacate the property. If a Rule for Possesion is filed before the sixth day after delivery of the Notice to Vacate, the tenant may be able to delay the eviction based on the inadequate notice.",
        "Landlord Accepts Rent After Notice to Vacate" : "If your landlord accepts rent after delivery of the Notice to Vacate and before the judgement of eviction, you may have a defense to eviction--and you may have a reconducted month-to-month lease. If you are in this situation, you may attend the eviction trial and let the judge know that your landlord accepted rent. The landlord still has the right to deliver a Notice to Vacate to evict you for no cause, provided that they do so no later thann 10 days before the end of the current rental month. If you want to stay in your home, ask your landlord about renewing the lease."
        }
    },
    {cause:"lease violation",
    "Description" : "A landlord can start an eviction when a tenant has violated the lease.",
    "Landlord Needs": "The landlord needs to provide evidence that a tenant has violated the lease. Some leases also require the landlord provide a warning and time to correct a lease violation before bringing an eviction.",
    "Renter Rights" : {
        "Res Judicata": "Landlords may not bring a second lawsuit about the same lease violation incident according to the doctrine of res judicata."
        }
    },
    {cause: "nonpayment",
    "Description" : "A landlord can start an eviction when a tenant has failed to pay rent on time.",
    "Landlord Needs" : "",
    "Renter Rights" : {
        "Tenant Paid Rent" : "If you paid rent on time or the landlord accepted rent after the Notice to Vacate, you have a defense to eviction.",
        "Landlord Refused Rent" : "The tenant may have a defense to eviction if the tenant can prove the landlord refused to accept the rent.",
        "Landlord Usually Accepts Late Rent" : "There may be a defense to eviction if the tenant paid late and can show proof that the landlord has previously accepted rent late.",
        "Deductions for Repairs" : "If you paid rent minus the cost of repairs you did to the property, you will need to show proof that you provided repairs, the cost of repairs, and a request for reimbursment from the landlord",
        "Uninhabitable Property" : "If you can provide proof that the unit was uninhabitable at the time of rent due to the landlord, you may have a defense to eviction."
        }
    },
    {cause:"No Cause",
    "Description":"The landlord does not give a cause for eviction.",
    "Landlord Needs" : "",
    "Renter Rights" : {
        "Active Lease" : "A landlord cannot legally evict you before the expiration of your written lease without a cause."
        }
    }
];

export function getTypes() {
    return evictionTypes;
};


export function getType(cause) {
    return evictionTypes.find(
    (evictionType) => evictionType.cause === cause
    );
};