import { Stage } from "../Types"

const Task_List = [
    {
        id: 0,
        name: 'First Visit Preparation',
        stage: Stage.New,
        sids: [0],
        description: 'Prepare the teeth on both sides of the gap, The bridge will attach to those teeth.',
        notes: "",
        date: new Date()
    },
    {
        id: 1,
        name: 'Laboratory Instructions',
        stage: Stage.New,
        sids: [0],
        description: 'Send information about the image of the patient’s teeth to the dental lab to follow the instructions and make the bridge.',
        notes: "",
        date: new Date()
    },
    {
        id: 2,
        name: 'Temporary Bridge',
        stage: Stage.New,
        sids: [0],
        description: 'Place a temporary bridge to protect the patient’s teeth until the permanent bridge is made.',
        notes: "",
        date: new Date()
    },
    {
        id: 3,
        name: 'Permanent Bridge',
        stage: Stage.New,
        sids: [0],
        description: 'Fit, adjust, and cement the bridge to the prepared teeth.',
        notes: "",
        date: new Date()
    },
    {
        id: 4,
        name: 'Patient Review',
        stage: Stage.New,
        sids: [1],
        description: 'A review of the patient\'s medical history.',
        notes: "",
        date: new Date()
    },
    {
        id: 5,
        name: 'Checkup with patient',
        stage: Stage.New,
        sids: [1],
        description: 'A conversation with the patient about any concerns they have regarding their teeth, mouth, or overall health.',
        notes: "",
        date: new Date()
    },
    {
        id: 6,
        name: 'Oral Exam',
        stage: Stage.New,
        sids: [1],
        description: 'An oral exam, that includes a visual gum tissue check and visual oral cancer scan.',
        notes: "",
        date: new Date()
    },
    {
        id: 7,
        name: 'X-RAY',
        stage: Stage.New,
        sids: [1],
        description: 'X-rays, if necessary, to see the patient’s teeth below the gum line.',
        notes: "",
        date: new Date()
    },
    {
        id: 8,
        name: 'Treatment Plan',
        stage: Stage.New,
        sids: [1],
        description: 'A comprehensive treatment plan, with recommended treatment and ongoing care from the dentist.',
        notes: "",
        date: new Date()
    },
    {
        id: 9,
        name: 'Implant',
        stage: Stage.New,
        sids: [4,5],
        description: 'Surgically place titanium rods to fuse with the bone, serving as anchors to support the bridge.',
        notes: "",
        date: new Date()
    },
    {
        id: 10,
        name: 'Abutment',
        stage: Stage.New,
        sids: [3,4,5],
        description: 'Screw in a gold, titanium, or porcelain cylinder to the implant.',
        notes: "",
        date: new Date()
    },
    {
        id: 11,
        name: 'Restoration',
        stage: Stage.New,
        sids: [3,4,5,6],
        description: 'Attach and fuse a series of porcelain crowns to the abutment structures.',
        notes: "",
        date: new Date()
    },
    {
        id: 12,
        name: 'Remove Tooth',
        stage: Stage.New,
        sids: [3,6,8],
        description: 'Removal of the damaged or decayed tooth, if necessary. Test the area to determine if all the decay has been removed.',
        notes: "",
        date: new Date()
    },
    {
        id: 13,
        name: 'Jawbone Preparation',
        stage: Stage.New,
        sids: [3],
        description: 'Jawbone Preparation and bone grafting in case of poor bone quantity.',
        notes: "",
        date: new Date()
    },
    {
        id: 14,
        name: 'Implant Area Healing',
        stage: Stage.New,
        sids: [3],
        description: 'Healing and bone growth around the implant.',
        notes: "",
        date: new Date()
    },
    {
        id: 15,
        name: 'Topical Anesthetic',
        stage: Stage.New,
        sids: [6],
        description: 'Topical anesthetic to numb the area of treatment.',
        notes: "",
        date: new Date()
    },
    {
        id: 16,
        name: 'Bite Check',
        stage: Stage.New,
        sids: [6],
        description: 'Bite checks to make sure the teeth align comfortably.',
        notes: "",
        date: new Date()
    },
    {
        id: 17,
        name: 'Simple Extraction',
        stage: Stage.New,
        sids: [7],
        description: 'Remove the tooth with an elevator, and remove the tooth using forceps.',
        notes: "",
        date: new Date()
    },
    {
        id: 18,
        name: 'Surgical Extraction',
        stage: Stage.New,
        sids: [7],
        description: '•Apply a shot of anesthetic for the tooth, gum and bone tissue surrounding it. •Use Forceps or Dental Elevators to extract the tooth. •Close the space vacated by the tooth. •Control the bleeding by placing a folded gauze over the site of tooth extraction, the patient bites down on it to create firm pressure. •Minimize the swelling. •Post extraction care.',
        notes: "",
        date: new Date()
    },
    {
        id: 19,
        name: 'Local Anesthetic',
        stage: Stage.New,
        sids: [8],
        description: 'Use a local anesthetic to numb the area around the tooth to be filled.',
        notes: "",
        date: new Date()
    },
    {
        id: 20,
        name: 'Clean Cavity',
        stage: Stage.New,
        sids: [8,14],
        description: 'Prepare the space by cleaning the cavity of bacteria and debris.',
        notes: "",
        date: new Date()
    },
    {
        id: 21,
        name: 'Tooth-Colored Material',
        stage: Stage.New,
        sids: [8],
        description: 'Apply the tooth-colored material in layers.',
        notes: "",
        date: new Date()
    },
    {
        id: 22,
        name: 'Special Light',
        stage: Stage.New,
        sids: [8],
        description: 'Apply a special light to harden each layer.',
        notes: "",
        date: new Date()
    },
    {
        id: 23,
        name: 'Finalize Tooth Filling',
        stage: Stage.New,
        sids: [8],
        description: 'Shape the composite material to the desired result. •Trim off any excess material. •Polish the final restoration.',
        notes: "",
        date: new Date()
    },
    {
        id: 24,
        name: 'Check The Shade',
        stage: Stage.New,
        sids: [9],
        description: 'Record the shade of the teeth to get an idea about the degree to which the teeth must be whitened.',
        notes: "",
        date: new Date()
    },
    {
        id: 25,
        name: 'Cleaning',
        stage: Stage.New,
        sids: [9,12],
        description: 'Clean and polish the teeth.',
        notes: "",
        date: new Date()
    },
    {
        id: 26,
        name: 'Retractors',
        stage: Stage.New,
        sids: [9],
        description: 'Use retractors to keep the gums, tongue, and lips from interfering with the whitening agent.',
        notes: "",
        date: new Date()
    },
    {
        id: 27,
        name: 'Coating',
        stage: Stage.New,
        sids: [9],
        description: ' •Coat the teeth with a whitening solution, such as hydrogen peroxide.',
        notes: "",
        date: new Date()
    },
    {
        id: 28,
        name: 'Rinsing',
        stage: Stage.New,
        sids: [9,11],
        description: 'Rinse the mouth thoroughly.',
        date: new Date()
    },
    {
        id: 29,
        name: 'Floride Treatment',
        stage: Stage.New,
        sids: [9],
        description: 'Brush the teeth with floride varnish.',
        date: new Date()
    },
    {
        id: 30,
        name: 'Veneers Examination',
        stage: Stage.New,
        sids: [10],
        description: 'Take intraoral photographs, dental X-Rays, and perform a complete examination to determine the patient is a proper candidate for veneers.',
        date: new Date()
    },
    {
        id: 31,
        name: 'Tooth Preparation for Veneers',
        stage: Stage.New,
        sids: [10],
        description: ' •A small amount of tooth enamel removed to make room for the veneer. •Administer local anesthetic.',
        date: new Date()
    },
    {
        id: 32,
        name: 'Mold',
        stage: Stage.New,
        sids: [10],
        description: ' •Create a mold in the teeth using a traditional putty impression or intraoral scanner.',
        date: new Date()
    },
    {
        id: 33,
        name: 'Shade Guide',
        stage: Stage.New,
        sids: [10],
        description: 'Use a shade guide with the patient to look at the adjacent teeth and choose a natural color for the veneers.',
        date: new Date()
    },
    {
        id: 34,
        name: 'Veneer Fabricating',
        stage: Stage.New,
        sids: [10],
        description: 'Send the impression and shade to the laboratory to create a custom porcelain veneer that fits precisely in the teeth.',
        date: new Date()
    },
    {
        id: 35,
        name: 'Temporary Veneer',
        stage: Stage.New,
        sids: [10],
        description: 'Create a temporary veneer chairside to give the patient a restoration to wear until the veneers are ready.',
        date: new Date()
    },
    {
        id: 36,
        name: 'Metal Brackets',
        stage: Stage.New,
        sids: [11],
        description: 'Attach metal brackets to each tooth using bonding glue. •Place a wire through the brackets. •Secure the wire by rubber bands.',
        date: new Date()
    },
    {
        id: 37,
        name: 'Tooth Enamel Removal',
        stage: Stage.New,
        sids: [12],
        description: 'Use sandpaper strips to gradually remove small amount of tooth enamel, shaping and smoothing areas where needed.',
        date: new Date()
    },
    {
        id: 38,
        name: 'Dental Arch Check',
        stage: Stage.New,
        sids: [13],
        description: 'Impressions are taken from the upper and lower dental arches.',
        date: new Date()
    },
    {
        id: 39,
        name: 'Temporary Appliance',
        stage: Stage.New,
        sids: [13],
        description: 'Place temporary appliance on the treated tooth to keep it protected while waiting for the cementation of the permanent crown.',
        date: new Date()
    },
    {
        id: 40,
        name: 'Crown Preparation',
        stage: Stage.New,
        sids: [13],
        description: 'Remove some of the problem tooth’s enamel to make way for the hollow portion of the prosthesis, to place the crown over the tooth.',
        date: new Date()
    },
    {
        id: 41,
        name: 'Temporary Crown',
        stage: Stage.New,
        sids: [13],
        description: 'Clean the tooth, check the proper placement of the crown and it’s adjacent structures to avoid possible issues. •Apply the crown.',
        date: new Date()
    },
    {
        id: 42,
        name: 'Local Anesthesia',
        stage: Stage.New,
        sids: [14],
        description: 'Administer local anesthesia with one or more injections near the site of each extraction.',
        date: new Date()
    },
    {
        id: 43,
        name: 'Sedation Anesthesia',
        stage: Stage.New,
        sids: [14],
        description: 'Apply sedation anesthesia through an intravenous line in the arm of the patient.',
        date: new Date()
    },
    {
        id: 44,
        name: 'General Anesthesia',
        stage: Stage.New,
        sids: [14],
        description: 'Patient inhales medication through the nose or have an IV line in the arm.',
        date: new Date()
    },
    {
        id: 45,
        name: 'Gum Tissue Incision',
        stage: Stage.New,
        sids: [14],
        description: 'Make an incision in the gum tissue to expose the tooth and bone.',
        date: new Date()
    },
    {
        id: 46,
        name: 'Tooth Root Bone Removal',
        stage: Stage.New,
        sids: [14],
        description: 'Remove the bone that blocks access to the tooth root.',
        date: new Date()
    },
    {
        id: 47,
        name: 'Dividing Tooth to Sections',
        stage: Stage.New,
        sids: [14],
        description: '•	Divide the tooth into sections to remove the pieces. •Remove the tooth.',
        date: new Date()
    },
    {
        id: 48,
        name: 'Dividing Tooth to Sections',
        stage: Stage.New,
        sids: [14],
        description: '•	Divide the tooth into sections to remove the pieces. •Remove the tooth.',
        date: new Date()
    },
    {
        id: 49,
        name: 'Stitch Wound',
        stage: Stage.New,
        sids: [14],
        description: 'Stitch the wound closed to promote healing.',
        date: new Date()
    },
    {
        id: 49,
        name: 'Gauze',
        stage: Stage.New,
        sids: [14],
        description: 'Place gauze over the extraction site to control bleeding and help a blood clot form.',
        date: new Date()
    },
    {
        id:50,
        name: 'Dental Dam',
        stage: Stage.New,
        sids: [15],
        description: 'Place a flexible sheet of latex or non-latex material called a dental dam over the tooth to keep it dry.',
        date: new Date()
    },
    {
        id:51,
        name: 'Pulp Chamber and Canal Removal',
        stage: Stage.New,
        sids: [15],
        description: 'Remove the tooth’s pulp chamber and the canal of each root of the tooth.',
        date: new Date()
    },
    {
        id:52,
        name: 'Clean Root Canals',
        stage: Stage.New,
        sids: [15],
        description: 'Clean, shape, and disinfect all root canals so that they can be filled.',
        date: new Date()
    },
    {
        id:53,
        name: 'Seal Root Canals',
        stage: Stage.New,
        sids: [15],
        description: 'Fill the treated root canals with rubber-like material to seal them.',
        date: new Date()
    },
    {
        id:54,
        name: 'Temporary Filling',
        stage: Stage.New,
        sids: [15],
        description: 'Place a temporary filing in the tooth to prevent infection of the root canals.',
        date: new Date()
    },
    {
        id:55,
        name: 'Permanent Filling',
        stage: Stage.New,
        sids: [15],
        description: 'Remove the temporary filling and restore the tooth with a crown or a permanent filling to recover its function and shape.',
        date: new Date()
    },
]

export default Task_List