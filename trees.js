let under20tree = {"under20":{ "yes":"US RLQ", "no": "CT w Contrast"}}

let symptomTree = {
    "rlqp": {
        "male":{
            "obese": {
                "yes":"CT w Contrast",
                "no": under20tree
            }
        },
        "female": {
            "child bearing age":{
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

let ruleOutTree = {
    "appendicitis": {
        "obese": {
            "yes": "CT w Contrast",
            "no": "US RLQ"
        }
    }
}