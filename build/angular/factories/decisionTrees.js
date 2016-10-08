const Bluebird = require('bluebird');
const fs = Bluebird.promisifyAll(require('fs'));

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

        },
        "chest pain": {
            prompt: {
                text: "Has chest X-ray been ordered",
                choices: ['yes', 'no']
            },
            yes: {
                prompt: {
                    text: "Clinical concern for PE",
                    choices: ['yes', 'no']
                },
                yes: "CTA chest PE protocol",
                no: {
                    prompt: {
                        text: "Clinical concern for dissection",
                        choices: ['yes', 'no']
                    },
                    yes: "CTA chest dissection protocol",
                    no: {
                        prompt: {
                            text: "Clinical concern for neoplasm",
                            choices: ['yes', 'no']
                        },
                        yes: "CT chest with IV contrast",
                        no: "CT chest without IV contrast"
                    }
                }
            },
            no: "PA and lateral chest X-ray"
        }
    }

    let ruleOuts = {
        "appendicitis": {
            prompt: {
                text: "Obese",
                choices: ['yes', 'no']
            },
            "yes": "CT w Contrast",
            "no": "US RLQ"
        },
        "tachycardia": {
            prompt: {
                text: "Has chest X-ray been ordered",
                choices: ['yes', 'no']
            },
            yes: {
                prompt: {
                    text: "Clinical concern for PE",
                    choices: ['yes', 'no']
                },
                yes: "CTA chest PE protocol",
                no: {
                    prompt: {
                        text: "Clinical concern for dissection",
                        choices: ['yes', 'no']
                    },
                    yes: "CTA chest dissection protocol",
                    no: {
                        prompt: {
                            text: "Clinical concern for neoplasm",
                            choices: ['yes', 'no']
                        },
                        yes: "CT chest with IV contrast",
                        no: "CT chest without IV contrast"
                    }
                }
            },
            no: "PA and lateral chest X-ray"
        }
    }

    return {
        diagnoses: diagnoses,
        ruleOuts: ruleOuts
    }


});
