let pronouns = ['the','our'];
let adjs = ['great', 'big' ];
let nouns = ['jogger','racoon'];

//For loop
debugger
for (let pronoun of pronouns){
    console.log(pronoun)
    for (let adj of adjs){
        console.log(adj)
        for (let noun of nouns){
            console.log(noun)
            let domainName = pronoun+adj+noun;
            debugger
        }
    }
}
