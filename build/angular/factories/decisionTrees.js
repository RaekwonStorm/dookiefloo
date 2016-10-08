app.factory('decisionTrees', function() {

    let under20tree = {
        prompt: {
            text: 'Under 20 years old?',
            choices: ["yes", "no"],
            yes: 'US RLQ',
            no: "CT w Contrast"
        }
    }

    diagnoses = {
        "rlqp": {
            prompt: {
                text: "Gender",
                choices: ['male', "female"],
            },
            male: {
                prompt: {
                    text: 'Obeast?',
                    choices: ['yes', 'no'],
                },
                yes: 'CT w Contrast',
                no: under20tree
            },
            female: {
                prompt: {
                    text: 'Child bearing age?',
                    choices: ['yes', 'no'],
                },
                yes: {
                    prompt: {
                        text: 'Pregnert?',
                        choices: ['yes', 'no, most likely ovarian/adnexal', 'no, most likely appendicitis'],
                    },
                    yes: 'TVUS OB',
                    "No, most likely ovarian/adnexal": "TVUS GYN",
                    "No, most likely appendicitis": {
                        prompt: {
                            text: 'Obeast?',
                            choices: ['yes', 'no'],
                            yes: 'CT w Contrast',
                            no: 'US RLQ'
                        }
                    }
                },
                no: under20tree
            }

        }
    }

    let ruleOuts = {
        "appendicitis": {
            "obese": {
                "yes": "CT w Contrast",
                "no": "US RLQ"
            }
        }
    }

    return {
        diagnoses: diagnoses,
        ruleOuts: ruleOuts
    }


});
