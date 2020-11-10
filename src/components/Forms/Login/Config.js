const config = {
    firstName: {
        name: "firstname",
        type: "text",
        label: "Emri",
        placeholder: "Emri",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni emrin e juaj!',
        }]
    },
    lastName: {
        name: "lastname",
        type: "text",
        label: "Mbiemri",
        placeholder: "Mbiemri",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni mbiemrin e juaj!',
        }]
    },
    email: {
        name: "email",
        type: "text",
        label: "E-mail",
        placeholder: "E-mail",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni email-ën e juaj!',
        }]
    },
    password: {
        name: "password",
        type: "password",
        label: "Password",
        placeholder: "Password",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni fjalëkalimin e juaj!',
        }]
    },
    dateOfBirth: {
        name: "date",
        type: "date",
        label: "Data e lindjes",
        placeholder: "Ditëlindja",
        rules: [{
            required: true,
            message: 'Ju lutem vendosni datën e lindjes!',
        }]
    },
    gender: {
        name: "gender",
        label: "Gjinia",
        placeholder: "Përzgjedh gjininë",
        rules: [{
            required: true,
            message: 'Ju lutem përzgjedhni gjininë e juaj',
        }]
    },
    phone: {
        name: "phone",
        label: "Numri i telefonit",
        placeholder: "Shënoni numrin e telefonit",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni numrin e juaj të telefonit!',
        }]
    },
    city: {
        name: "city",
        label: "Qyteti",
        placeholder: "Përzgjedh qytetin",
        rules:    [{
            required: true,
            message: 'Ju lutem përzgjedheni qytetin!',
        }]
    },
    address: {
        name: "address",
        label: "Adresa",
        placeholder: "Shënoni adresën",
        rules:    [{
                required: true,
                message: 'Ju lutem shënoni adresën e juaj!',
            }]
    },
    education: {
        name: "education",
        label: "Edukimi",
        placeholder: "Përzgjedh edukimin",
        rules:    [{
                required: true,
                message: 'Ju lutem zgjedh edukimin e juaj!',
            }]
    },
    job: {
        name: "job",
        label: "Profesioni",
        placeholder: "Përzgjedh profesionin",
        rules:    [{
            required: true,
            message: 'Ju lutem zgjedheni profesionin e juaj!',
        }]
    },
    bio: {
        name: "bio",
        label: "Biografia",
        placeholder: "Shënoni biografinë e juaj",
        rules:    [{
            required: true,
            message: 'Ju lutem shënoni biografinë e juaj!',
        }]
    },

}


export default config;