import Patients from "./Patients"
import Services from "./Services"

const PFiles = [
    {
        id: 0,
        patient: Patients[0],
        services: Services.slice(0,3),
        teeth_pic: []
    },
    {
        id: 1,
        patient: Patients[1],
        services: Services.slice(0,2),
        teeth_pic: []
    },
    {
        id: 2,
        patient: Patients[2],
        services: Services.slice(1,3),
        teeth_pic: []
    },
    {
        id: 3,
        patient: Patients[3],
        services: Services.slice(0,1),
        teeth_pic: []
    },
    {
        id: 4,
        patient: Patients[4],
        services: Services.slice(2,3),
        teeth_pic: []
    },
    {
        id: 5,
        patient: Patients[5],
        services: Services.slice(0,3),
        teeth_pic: []
    },
    {
        id: 6,
        patient: Patients[6],
        services: Services.slice(1,3),
        teeth_pic: []
    },
    {
        id: 7,
        patient: Patients[7],
        services: Services.slice(0,2),
        teeth_pic: []
    },
    {
        id: 8,
        patient: Patients[8],
        services: Services.slice(2,3),
        teeth_pic: []
    }
]

export default PFiles