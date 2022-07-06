const questions = [
    "Qual o seu nome?",
    "o que você aprendeu hoje?",
    "O que te deixou aborrecido? E o que você poderia fazer para melhorar?",
    "O que te deixou feliz hoje?",
    "Quantas pessoas ajudou hoje?",
]

const ask = (index = 0) => {
    process.stdout.write("\n\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    } else{
        console.log(answers)
        process.exit()
    }
})
process.on('exit', () => {
    console.log(`
        Bacana ${answers[0]}!

        O que você aprendeu hoje foi:
        ${answers[1]}

        O que te deixou aborrecido foi:
        ${answers[2]}

        O que te deixou feliz foi:
        ${answers[3]}

        A quantidade de pessoas que você ajudou foi:
        ${answers[4]}
    
        Muito bem! Volte amanhã para mais reflexões!
        `)
})