import formConfig from "../components/Forms/Config";


export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const CONFIRMED = "CONFIRMED";

export const GET_POSTS = "GET_POSTS";
export const GET_PROFILES = "GET_PROFILES";

export const SET_FILTERS = "SET_FILTERS";


export const SAVE_FEEDBACK = "SAVE_FEEDBACK";


export const HomeTabs = {
    "Profiles": "profiles",
    "Posts": "posts"
}

export const ProfileTabs = {
    "Profile": "profile",
    "Posts": "posts"
}

export const options = [
    { label: "Kujdes për fëmijë", value: "babysitter" },
    { label: "Kujdes për të moshuar", value: "eldercare" },
    { label: "Kujdes për kafshët shtëpiake", value: "petcare" },
    { label: "Mirëmbajtës i shtëpisë", value: "housekeeper" },
];

export const GetPosts = {
    "Posts": "posts",
};

export const initialRegisterDataObject = {
    [formConfig.firstName.name]: "",
    [formConfig.lastName.name]: "",
    [formConfig.email.name]: "",
    [formConfig.password.name]: "",
    [formConfig.confirm_password.name]: "",
    [formConfig.dateOfBirth.name]: "",
    [formConfig.gender.name]: "",
    [formConfig.phone.name]: "",
    [formConfig.city.name]: "",
    [formConfig.address.name]: "",
    [formConfig.education.name]: "",
    [formConfig.bio.name]: "",
    [formConfig.job.name]: "",
    "url": process.env.REACT_APP_CONFIRM_URL
}

export const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':-webkit-autofill': {color: '#fce883'},
            '::placeholder': {color: '#87bbfd'},
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee',
        },
    },
};

