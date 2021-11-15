let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];

//For loop
debugger
for (let pronoun of pronouns){
    for (let adj of adjs){
        for (let noun of nouns){
            let domainName = pronoun+adj+noun+".com";
            console.log(domainName)
        }
    }
}
