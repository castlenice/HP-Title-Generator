const names = ["Harry Potter", "Ron Weasley", "Hermione Granger"];
const adjectives = ["misogynist", "white", "racist", "annoying", "incompetent", "cishet"];
const nouns = ["teacher", "TERF", "uncle", "mansplainer", "leader"]


const randomSentence = () => {
    const randomNames = names[Math.floor(Math.random() * names.length)];
    const randomAdjectives= adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNouns = nouns[Math.floor(Math.random() * nouns.length)];
    console.log(`${randomNames} and the ${randomAdjectives} ${randomNouns}`)
}

randomSentence()
