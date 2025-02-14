export const inputcantrols = [
    {
        lbl : "Question",
        name : "que",
        tag : "textarea",
        Required : true,
        criteria : ["Required","Min5char"],
    },
    {
        lbl : "Option 1",
        name : "opt1",
        type : "text",
        tag : "input",
        Required : true,
        criteria : ["Required"],
    },
    {
        lbl : "Option 2",
        name : "opt2",
        type : "text",
        tag : "input",
        Required : true,
        criteria : ["Required"],
    },
    {
        lbl : "Option 3",
        name : "opt3",
        type : "text",
        tag : "input"
    },
    {
        lbl : "Option 4",
        name : "opt4",
        type : "text",
        tag : "input"
    },
    {
        lbl : "Type",
        name : "type",
        type : "radio",
        tag : "input",
        options :["Single","Multiple"],
        Required : true,
        criteria : ["Required"],
    },
    {
        lbl : "Answer",
        name : "ans",
        tag : "select",
        options : ["1","2","3","4","12","13","14","23","24","34","123","124","134","234","1234"],
        Required : true,
        criteria : ["Required"],
    },
]