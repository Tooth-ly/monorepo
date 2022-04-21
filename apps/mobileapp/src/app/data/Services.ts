import { Stage } from "../Types"
import ali_al_zaart_pp from "./DRALIZAART"

const Services = [{
    id: 0,
    name: "Service of Honors",
    tasks: [{
        id: 3,
        stage: Stage.New,
        name: "task of Honors",
        description: "open honors and do stuff."
    }],
    assignee: {
        id: 0,
        name: 'DR. Ali Zaart',
        profile_pic: ali_al_zaart_pp
    }
},
{
    id: 1,
    name: "Venom Teeth",
    tasks: [{
        id: 0,
        stage: Stage.New,
        name: "Teeth Of Venom",
        description: "open honors and do stuff."
    },{
        id: 8,
        name: "whitening",
        description: "insert Tube and clean the upper lip. then go clean the down clip!"
    }],
    assignee: {
        id: 0,
        name: 'DR. Ali Zaart',
        profile_pic: ali_al_zaart_pp
    }
},
{
    id: 2,
    name: "Ecchi Fixes",
    tasks: [{
        id: 1,
        stage: Stage.New,
        name: "Wrappers",
        description: "make him suffer until he gets over his girlfriend!"
    },{
        id: 2,
        name: "cleaning",
        description: "simply clean the office after he's gone. And i mean GONE gone!"
    },
    {
        id: 4,
        name: "Hofstand",
        description: "2roto sa7sou7 nassee 7aleeb emmo la2anno he said comics are better than Manga."
    }],
    assignee: {
        id: 0,
        name: 'DR. Ali Zaart',
        profile_pic: ali_al_zaart_pp
    }
},
{
    id: 3,
    name: "Service 3attalab",
    tasks: [{
        id: 1,
        stage: Stage.New,
        name: "Wrappers",
        description: "make him suffer until he gets over his girlfriend!"
    },{
        id: 2,
        name: "cleaning",
        description: "simply clean the office after he's gone. And i mean GONE gone!"
    },
    {
        id: 4,
        name: "Hofstand",
        description: "2roto sa7sou7 nassee 7aleeb emmo la2anno he said comics are better than Manga."
    }],
    assignee: {
        id: 0,
        name: 'DR. Ali Zaart',
        profile_pic: ali_al_zaart_pp
    }
}]

export default Services