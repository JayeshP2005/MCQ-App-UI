const validationcontrol = {
    Min5char: {
        regex: /.{5,}/,
        errormessage: "More than five characters required"
    },
    Exact10digit: {
        regex: /^\d{10}$/,
        errormessage: "Exactly 10 digits required"
    },
    OnlyAlpha: {
        regex: /^[a-zA-Z]+$/,
        errormessage: "Only alphabets are allowed"
    },
    Emailformate: {
        regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        errormessage: "Should be in a valid email format (e.g. example@domain.com)"
    },
    Passformate: {
        regex: /^(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{6,}$/,
        errormessage: "Password must be at least 6 characters, start with an uppercase letter, include a number, and a special character"
    },
    OnlyDigits: {
        regex: /^\d+$/,
        errormessage: "Only digits are allowed"
    },
    SpecialcharNotrequired: {
        regex: /^[a-zA-Z0-9]*$/,
        errormessage: "Special characters are not allowed"
    },
    SpacesNotAllowed: {
        regex: /^\S*$/,
        errormessage: "Spaces are not allowed"
    },
    Required: {
        regex: /.+/,
        errormessage: "This field is required"
    }
};

export const fnvalidate=(inputobj)=>{
    inputobj.errormessage="";
    const {value,criteria}=inputobj;
    for (let i = 0; i < criteria.length; i++) 
        {
        const regexobj = validationcontrol[criteria[i]];
        if (!regexobj.regex.test(value || '')) {
            inputobj.errormessage=regexobj.errormessage;
            break;
        }   
    }
}
