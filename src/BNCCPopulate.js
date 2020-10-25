const axios = require('axios');
const { add } = require('winston');
const baseUrl = 'http://localhost:3001/bncc'

const login = async () => {
    try {
        const response = await axios.post("http://[::1]:3001/signin", {
            "email": "teste@teste.com",
            "password": "12345"
        })
        console.log(response.data);
    } catch (err) {
        console.log(err.message);
    }
}

const addBNCC = async (bncc) => {
    try {
        for(var i=0; i<bncc.length; i++){
            const response = await axios.post(baseUrl, bncc[i])
            console.log(response.data);
        }
    } catch (err) {
        console.log(err.message);
    }
}
const BNCC = [
    {
        "code": "EM13LGG101",
        "description": "Compreender e analisar processos de produção e circulação de discursos, nas diferentes linguagens, para fazer escolhas fundamentadas em função de interesses pessoais e coletivos."
    },
    {
        "code": "EM13LGG102",
        "description": " Analisar visões de mundo, conflitos de interesse, preconceitos e ideologias presentes nos discursos veiculados nas diferentes mídias como forma de ampliar suas as possibilidades de explicação e interpretação crítica da realidade."
    },
    {
        "code": "EM13LGG103",
        "description": "Analisar, de maneira cada vez mais aprofundada, o funcionamento das linguagens, para interpretar e produzir criticamente discursos em textos de diversas semioses."
    },
    {
        "code": "EM13LGG104",
        "description": "Utilizar as diferentes linguagens, levando em conta seus funcionamentos, para a compreensão e produção de textos e discursos em diversos campos de atuação social."
    },
    {
        "code": "EM13LGG105",
        "description": " Analisar e experimentar diversos processos de remidiação de produções multissemióticas, multimídia e transmídia, como forma de fomentar diferentes modos de participação e intervenção social."
    },
    {
        "code":"EM13LGG201",
        "description": " Utilizar adequadamente as diversas linguagens (artísticas, corporais e verbais) em diferentes contextos, valorizando-as como fenômeno social, cultural, histórico, variável, heterogêneo e sensível aos contextos de uso. "
    },
    {
        "code":"EM13LGG202",
        "description": "Analisar interesses, relações de poder e perspectivas de mundo nos discursos das diversas práticas de linguagem (artísticas, corporais e verbais), para compreender o modo como circulam, constituem-se e (re)produzem significação e ideologias."
    },
    {
        "code":"EM13LGG203",
        "description": " Analisar os diálogos e conflitos entre diversidades e os processos de disputa por legitimidade nas práticas de linguagem e suas produções (artísticas, corporais e verbais), presentes na cultura local e em outras culturas."
    },
    {
        "code":"EM13LGG204",
        "description": "Negociar sentidos e produzir entendimento mútuo, nas diversas linguagens (artísticas, corporais e verbais), com vistas ao interesse comum pautado em princípios e valores de equidade assentados na democracia e nos Direitos Humanos."
    },
    {
        "code":"EM13LGG301",
        "description": "Participar de processos de produção individual e colaborativa em diferentes linguagens (artísticas, corporais e verbais), levando em conta seus funcionamentos, para produzir sentidos em diferentes contextos."
    },
    {
        "code":"EM13LGG302",
        "description": " Compreender e posicionar-se criticamente diante de diversas visões de mundo presentes nos discursos em diferentes linguagens, levando em conta seus contextos de produção e de circulação."
    },
    {
        "code":"EM13LGG303",
        "description": "Debater questões polêmicas de relevância social, analisando diferentes argumentos e opiniões manifestados, para negociar e sustentar posições, formular propostas, e intervir e tomar decisões democraticamente sustentadas, que levem em conta o bem comum e os Direitos Humanos, a consciência socioambiental e o consumo responsável em âmbito local, regional e global."
    },
    {
        "code":"EM13LGG304",
        "description": "Mapear e criar, por meio de práticas de linguagem, possibilidades de atuação social, política, artística e cultural para enfrentar desafios contemporâneos, discutindo seus princípios e objetivos de maneira crítica, criativa, solidária e ética."
    },
    {
        "code":"EM13LGG401",
        "description": "Analisar textos de modo a caracterizar as línguas como fenômeno (geo)político, histórico, social, variável, heterogêneo e sensível aos contextos de uso. "
    },
    {
        "code":"EM13LGG402",
        "description": "Empregar, nas interações sociais, a variedade e o estilo de língua adequados à situação comunicativa, ao(s) interlocutor(es) e ao gênero do discurso, respeitando os usos das línguas por esse(s) interlocutor(es) e combatendo situações de preconceito linguístico."
    },
    {
        "code":"EM13LGG403",
        "description": "Fazer uso do inglês como língua do mundo global, levando em conta a multiplicidade e variedade de usos, usuários e funções dessa língua no mundo contemporâneo."
    },
    {
        "code":"EM13LGG501",
        "description": "Selecionar e utilizar movimentos corporais de forma consciente e intencional para interagir socialmente em práticas da cultura corporal, de modo a estabelecer relações construtivas, éticas e de respeito às diferenças."
    },
    {
        "code":"EM13LGG502",
        "description": "Analisar criticamente preconceitos, estereótipos e relações de poder subjacentes às práticas e discursos verbais e imagéticos na apreciação e produção das práticas da cultura corporal de movimento."
    },
    {
        "code":"EM13LGG503",
        "description": "Praticar, significar e valorizar a cultura corporal de movimento como forma de autoconhecimento, autocuidado e construção de laços sociais em seus projetos de vida."
    },
]
console.log("Running");
login()
addBNCC(BNCC)
console.log("Finished running");