app.factory('decisionTrees', function() {

    let under20tree = { "under20": { "yes": "US RLQ", "no": "CT w Contrast" } }

    let diagnoses = {
        "rlqp": {
            "male": {
                "obese": {
                    "yes": "CT w Contrast",
                    "no": under20tree
                }
            },
            "female": {
                "child bearing age": {
                    "no": under20tree,
                    "yes": {
                        "pregnant": {
                            "yes": "TVUS OB",
                            "no": {
                                "most likely ovarian/adnexal": "TVUS GYN",
                                "most likely appendicitis": {
                                    "obese": {
                                        "yes": "CT w Contrast",
                                        "no": "US RLQ"
                                    }
                                }
                            }
                        }
                    }
                }
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
