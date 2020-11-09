const config = {
    email: {
        name: "email",
        type: "text",
        placeholder: "email",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni email-ën e juaj!',
        }]
    },
    password: {
        name: "password",
        type: "password",
        placeholder: "password",
        rules: [{
            required: true,
            message: 'Ju lutem shënoni fjalëkalimin e juaj!',
        }]
    }
}

export default config;