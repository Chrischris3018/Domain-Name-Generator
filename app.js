let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

function getRandomInt(length) {
    return Math.floor(Math.random() * length);
}

const type1 = function(){
    const pronoun1 = pronoun[ getRandomInt(pronoun.length ) ];
    const adj2 = adj[getRandomInt(adj.length )];
    const noun3 = noun[getRandomInt(noun.length )];

    return `${pronoun1} ${adj2} ${noun3}`;
}

console.log(type1())