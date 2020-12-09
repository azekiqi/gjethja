const config = {
    firstName: {
        name: "firstName",
        type: "text",
        label: "Emri",
        placeholder: "Emri",
        rules: [{
            required: false,
            message: 'Ju lutem shënoni emrin e juaj!',
        }]
    },
    lastName: {
        name: "lastName",
        type: "text",
        label: "Mbiemri",
        placeholder: "Mbiemri",
        rules: [{
            required: false,
            message: 'Ju lutem shënoni mbiemrin e juaj!',
        }]
    },
    email: {
        name: "email",
        type: "text",
        label: "E-mail",
        placeholder: "E-mail",
        rules: [{
            required: false,
            message: 'Ju lutem shënoni email-ën e juaj!',
        }, {
            type: 'email',
            message: 'Email-i juaj nuk është valid',
        }]
    },
    password: {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Password",
        rules: [{
            required: false,
            message: 'Ju lutem shënoni fjalëkalimin tuaj!',
        }]
    },
    confirm_password: {
        name: "confirmPassword",
        type: "password",
        label: "Confirm Password",
        placeholder: "Confirm Password",
        rules: [{
            required: false,
            message: 'Ju lutem konfirmoni fjalëkalimin tuaj!',
        }]
    },
    dateOfBirth: {
        name: "dateOfBirth",
        type: "date",
        label: "Data e lindjes",
        placeholder: "Ditëlindja",
        rules: [{
            required: false,
            message: 'Ju lutem vendosni datën e lindjes!',
        }]
    },
    gender: {
        name: "gender",
        label: "Gjinia",
        placeholder: "Përzgjedh gjininë",
        rules: [{
            required: false,
            message: 'Ju lutem përzgjedhni gjininë e juaj',
        }]
    },
    phone: {
        name: "phoneNumber",
        label: "Numri i telefonit",
        placeholder: "Shënoni numrin e telefonit",
        rules: [{
            required: false,
            message: 'Ju lutem shënoni numrin e juaj të telefonit!',
        }]
    },
    city: {
        name: "city",
        label: "Qyteti",
        placeholder: "Përzgjedh qytetin",
        rules:    [{
            required: false,
            message: 'Ju lutem përzgjedheni qytetin!',
        }]
    },
    address: {
        name: "address",
        label: "Adresa",
        placeholder: "Shënoni adresën",
        rules:    [{
                required: false,
                message: 'Ju lutem shënoni adresën e juaj!',
            }]
    },
    education: {
        name: "education",
        label: "Edukimi",
        placeholder: "Përzgjedh edukimin",
        rules:    [{
                required: false,
                message: 'Ju lutem zgjedh edukimin e juaj!',
            }]
    },
    job: {
        name: "job",
        label: "Profesioni",
        placeholder: "Përzgjedh profesionin",
        rules:    [{
            required: false,
            message: 'Ju lutem zgjedheni profesionin e juaj!',
        }]
    },
    bio: {
        name: "bio",
        label: "Biografia",
        placeholder: "Shënoni biografinë e juaj",
        rules:    [{
            required: false,
            message: 'Ju lutem shënoni biografinë e juaj!',
        }]
    },
    agreement: {
        name: "agreement",
        label: "Termet dhe Kushtet",
        rules:    [{
            required: false,
            message: 'Duhet te pajtoheni me Termet dhe Kushtet!',
        }]
    },
}


export default config;