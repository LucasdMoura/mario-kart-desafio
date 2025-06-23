const player1 = {
    NOME: "Mário",
    VELOCIDADE: 4,
    MANOBRABILIDADE: 3,
    PODER: 3,
    PONTOS: 0,
};

const player2 = {
    NOME: "Peach",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

const player3 = {
    NOME: "Yoshi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 5,
    PODER: 2,
    PONTOS: 0,
};

const player4 = {
    NOME: "Bowser",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 3,
    PODER: 5,
    PONTOS: 0,
};

const player5 = {
    NOME: "Luigi",
    VELOCIDADE: 3,
    MANOBRABILIDADE: 4,
    PODER: 2,
    PONTOS: 0,
};

const player6 = {
    NOME: "Donk Kong",
    VELOCIDADE: 2,
    MANOBRABILIDADE: 4,
    PODER: 4,
    PONTOS: 0,
};

async function getRandomBlock() {
    let randow = Math.random()
    let result

    switch (true) {
    
    }
}
async function rollDice() {
    return Math.floor(Math.random * 6) + 1;
};

async function playRaceEngine(character1, character2) {
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);

        let block = await getRandomBlock();
    }
}

(async function main() {
    console.log(`🏁 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`);

    await playRaceEngine(player1, player2);
})()