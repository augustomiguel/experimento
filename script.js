// create form
var form = {
    type: "survey-html-form",
    preamble: "<strong>Bem vind@ ao Teste de Memorização! Por favor, preencha os dados abaixo.</strong>",
    html: "<p>Nome: <input name='name' type='text' required/></p>" +
    "<p>Idade: <input name='age' type='number' required/></p>" +
    "<p>E-mail: <input name='email' type='email' required/></p>",
    button_label: "Ok",
    data: {type: "form"}
};

// create instructions
var instructions = {
type: "html-button-response",
stimulus:	"<p><strong>Instruções do Experimento</strong></p><br>" +
            "<p>Este é o teste de memorização.</p>" +
            "<p>Uma série de frases aparecerá na tela do computador.</p>" +
            "<p>Leia as frases em voz alta à medida em que elas forem sendo exibidas.</p><br>" +
            "<p>Você deve memorizar a última palavra de cada sequência e recordá-la quando solicitado(a).</p>" +
            "<p>Pressione a tecla 'p' para passar as frases.</p>" +
            "<p>Escreva na caixa de resposta as palavras recordadas separadas por espaço.</p><br>" +
            "<p>Pressione o botão 'Ok' ou a tecla 'ENTER' para submeter sua resposta.</p>" +
            "<p>As primeiras sequências serão usadas como treinamento.</p>" +
            "<p>Pressione o botão 'Ok' para treinar.</p>",
choices: ["Ok"]
};

// create end_pratice
var end_pratice = {
type: "html-button-response",
stimulus:	"<p><strong>Fim do Treino</strong></p><br>" +
            "<p>Caso você ainda tenha alguma dúvida, pergunte ao experimentador.</p><br>" +
            "<p>Pronto(a) para iniciar?</p><br>" +
            "<p>Pressione o botão 'Ok' para começar.</p>",			
choices: ["Ok"]
}; 

// create the_end
var the_end = {
type: "html-button-response",
stimulus:	"<p><strong>Fim do Teste</strong></p><br>" +
            "<p>Obrigada pela sua participação!</p><br>" +
            "<p>Pressione o botão 'Ok' para finalizar.</p>",			
trial_duration: 5000,
choices: ["Ok"]
};

// answer
var answer = {
    type: "survey-text",
    button_label: "Ok",
    questions: [{prompt: "Digite a última palavra de cada frase que você leu."}] ,
};

// TRAINING
// training1
var training1 = {
    type: "html-keyboard-response",
    stimulus: "As câmeras de segurança da agência bancária gravaram a ação do bandido.",
    trial_duration: 8000,
    choices: ["p"]
};

// training2
var training2 = {
    type: "html-keyboard-response",
    stimulus: "Ele mesmo foi atrás e agora possui o registro profissional de locutor.",
    trial_duration: 8000,
    choices: ["p"]
};
// training3
var training3 = {
    type: "html-keyboard-response",
    stimulus: "A polícia quer saber o que o veículo estava fazendo parado próximo ao bosque.",
    trial_duration: 8000,
    choices: ["p"]
};
// training4
var training4 = {
    type: "html-keyboard-response",
    stimulus: "Ele lutou bravamente e escapou por um triz de ser morto pelo fogo do dragão.",
    trial_duration: 8000,
    choices: ["p"]
};
// training5
var training5 = {
    type: "html-keyboard-response",
    stimulus: "Devem-se evitar caixas e livros no quarto, pois podem ser um acúmulo de poeira.",
    trial_duration: 8000,
    choices: ["p"]
};
// training6
var training6 = {
    type: "html-keyboard-response",
    stimulus: "A música foi divulgada nos registros digitais antes do lancamento do clipe.",
    trial_duration: 8000,
    choices: ["p"]
};
// training7
var training7 = {
    type: "html-keyboard-response",
    stimulus: "Maria fez suspense quanto ao nome da bebida, que inclusive ainda não tem rótulo.",
    trial_duration: 8000,
    choices: ["p"]
};
// training8
var training8 = {
    type: "html-keyboard-response",
    stimulus: "Helena disse que pretende fazer teste de DNA para saber se Pedro é seu sobrinho.",
    trial_duration: 8000,
    choices: ["p"]
};
// training9
var training9 = {
    type: "html-keyboard-response",
    stimulus: "No tempo de rádio havia um futebol imaginário, visto só pelo narrador.",
    trial_duration: 8000,
    choices: ["p"]
};

// TRIAL
// phrase1
var phrase1 = {
    type: "html-keyboard-response",
    stimulus: "Todas as pessoas começaram a contar os minutos para passar pelo viaduto.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase2
var phrase2 = {
    type: "html-keyboard-response",
    stimulus: "Depois de coletar uma boa quantia, é preciso levar o dinheiro até um cofre.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase3
var phrase3 = {
    type: "html-keyboard-response",
    stimulus: "Os pais do menino foram à reunião e discutiram sobre as atividades no pátio.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase4
var phrase4 = {
    type: "html-keyboard-response",
    stimulus: "Tinha uma menina tocando um tecladinho e um menino tocando uma flauta.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase5
var phrase5 = {
    type: "html-keyboard-response",
    stimulus: "Não é possível ver se os torcedores cariocas também perderam o cordão.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase6
var phrase6 = {
    type: "html-keyboard-response",
    stimulus: "Eu devo deixar claro que não conhecia o desembargador, tampouco o garçom.",
    trial_duration: 8000,
    choices: ["p"]
};

// phrase7
var phrase7 = {
    type: "html-keyboard-response",
    stimulus: "O problema atinge aqueles que andam de bicicleta e precisam usar a rampa.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase8
var phrase8 = {
    type: "html-keyboard-response",
    stimulus: "O carro foi parar na água depois que a barra de direção quebrou no semáforo.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase9
var phrase9 = {
    type: "html-keyboard-response",
    stimulus: "Foi com as próprias mãos que Antônio Ribeiro construiu a sua primeira guitarra.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase10
var phrase10 = {
    type: "html-keyboard-response",
    stimulus: "O jornal português divulgou que o atleta tem uma suspeita de fratura no nariz.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase11
var phrase11 = {
    type: "html-keyboard-response",
    stimulus: "Os visitantes acessarão o local por duas escadas rolantes e um elevador.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase12
var phrase12 = {
    type: "html-keyboard-response",
    stimulus: "Eles puderam também acompanhar a reunião do lado de fora por meio de um telão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase13
var phrase13 = {
    type: "html-keyboard-response",
    stimulus: "Na verdade, ele estava trabalhando há mais tempo do que marcava o relógio.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase14
var phrase14 = {
    type: "html-keyboard-response",
    stimulus: "O aplicativo calcula peso, vida útil e valor de descarte de cada touro.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase15
var phrase15 = {
    type: "html-keyboard-response",
    stimulus: "É preciso levar algo que não impeça a mobilidade, como short e camiseta.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase16
var phrase16 = {
    type: "html-keyboard-response",
    stimulus: "O vinho passa por um período de mais três anos de envelhecimento na garrafa.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase17
var phrase17 = {
    type: "html-keyboard-response",
    stimulus: "A opção é comer bacalhau regado no azeite, com cheiro verde, alho e pimenta.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase18
var phrase18 = {
    type: "html-keyboard-response",
    stimulus: "Com alguns sons sintetizados, a base da música sertaneja ainda é o violão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase19
var phrase19 = {
    type: "html-keyboard-response",
    stimulus: "Há vários critérios que apontam a maneira correta de conservar o frango.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase20
var phrase20 = {
    type: "html-keyboard-response",
    stimulus: "Havia passado cinco anos desde que entrara no mar ou em uma piscina.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase21
var phrase21 = {
    type: "html-keyboard-response",
    stimulus: "De acordo com pesquisas, as crianças devem ser estimuladas ainda na barriga.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase22
var phrase22 = {
    type: "html-keyboard-response",
    stimulus: "O detalhe mais fofo do perfume fica por conta do frasco inspirado em uma nuvem.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase23
var phrase23 = {
    type: "html-keyboard-response",
    stimulus: "Esse é um fenômeno de baixa pressão que passa entre o litoral e o oceano.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase24
var phrase24 = {
    type: "html-keyboard-response",
    stimulus: "É preciso arrumar uma maneira, com elástico ou cordão, para fixar bem o chapéu.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase25
var phrase25 = {
    type: "html-keyboard-response",
    stimulus: "Ele elaborou um projeto para restaurar parte da fachada e do telhado.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase26
var phrase26 = {
    type: "html-keyboard-response",
    stimulus: "Ele deixou a esposa no trabalho, voltou para casa e limpou o quintal.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase27
var phrase27 = {
    type: "html-keyboard-response",
    stimulus: "A reação alérgica começou na testa e foi se espalhando para o pescoço.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase28
var phrase28 = {
    type: "html-keyboard-response",
    stimulus: "Após a saída de João, muitas pessoas ficaram com a pulga atrás da orelha.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase29
var phrase29 = {
    type: "html-keyboard-response",
    stimulus: "Use muita água e sabão para evitar manchas e depois seque com uma toalha.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase30
var phrase30 = {
    type: "html-keyboard-response",
    stimulus: "Não é possível dizer também se houve alguma falha de segurança na balsa.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase31
var phrase31 = {
    type: "html-keyboard-response",
    stimulus: "A marca já coleciona hoje novos sabores, com mais de cem opções de sorvete.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase32
var phrase32 = {
    type: "html-keyboard-response",
    stimulus: "Muita gente saiu de casa, outros nem conseguiram tirar o carro da garagem.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase33
var phrase33 = {
    type: "html-keyboard-response",
    stimulus: "As árvores mais resistentes foram cortadas uma a uma com um machado.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase34
var phrase34 = {
    type: "html-keyboard-response",
    stimulus: "O caminhão saiu da pista e derrubou a carga de suco concentrado do barril.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase35
var phrase35 = {
    type: "html-keyboard-response",
    stimulus: "Muitos clientes querem saber se estão levando a quantia informada no rótulo.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase36
var phrase36 = {
    type: "html-keyboard-response",
    stimulus: "Os jovens estavam alojados em condições precárias no próprio galpão da oficina.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase37
var phrase37 = {
    type: "html-keyboard-response",
    stimulus: "Quando João Marcelo entrou na sala foi que se deu conta que esqueceu da caneta.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase38
var phrase38 = {
    type: "html-keyboard-response",
    stimulus: "Se você for manteiga derretida que nem eu, não se esqueça de levar o lenço.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase39
var phrase39 = {
    type: "html-keyboard-response",
    stimulus: "Apenas três pessoas disseram que faziam a higienização com água e sabão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase40
var phrase40 = {
    type: "html-keyboard-response",
    stimulus: "O cardápio servido foi arroz, feijão, salada e carne cozida com mandioca.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase41
var phrase41 = {
    type: "html-keyboard-response",
    stimulus: "Em particular, a ideia foi de trabalhar com um novo material como o cristal.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase42
var phrase42 = {
    type: "html-keyboard-response",
    stimulus: "O Governo abriu um novo mercado para os produtores nacionais de batata.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase43
var phrase43 = {
    type: "html-keyboard-response",
    stimulus: "Cuidados simples e práticos já podem evitar que o veículo pare na estrada.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase44
var phrase44 = {
    type: "html-keyboard-response",
    stimulus: "Eles estacionaram o veículo na frente da residência e fecharam o portão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase45
var phrase45 = {
    type: "html-keyboard-response",
    stimulus: "Foram necessários apenas dez segundos para o meu bebê cair do berço.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase46
var phrase46 = {
    type: "html-keyboard-response",
    stimulus: "Eva voltou, guardou as roupas que ela tinha passado e entrou no banheiro.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase47
var phrase47 = {
    type: "html-keyboard-response",
    stimulus: "Eu tenho o desenho do piloto Ayrton Senna na parte de trás do meu capacete.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase48
var phrase48 = {
    type: "html-keyboard-response",
    stimulus: "Ele tentava salvar os pertences que tinha, como televisão, geladeira e fogão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase49
var phrase49 = {
    type: "html-keyboard-response",
    stimulus: "Acho que ele estava descalço, pois deixou os chinelos no depósito da padaria.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase50
var phrase50 = {
    type: "html-keyboard-response",
    stimulus: "Todos viram o projeto de João, até as crianças matriculadas na creche.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase51
var phrase51 = {
    type: "html-keyboard-response",
    stimulus: "Deixaram a porta de casa destrancada à noite e a luz acesa na varanda.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase52
var phrase52 = {
    type: "html-keyboard-response",
    stimulus: "É impossível dizer se esse é o despertar ou o nascer de um novo vulcão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase53
var phrase53 = {
    type: "html-keyboard-response",
    stimulus: "Quando o seu amigo saiu, José pediu que Marta preparasse uma feijoada.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase54
var phrase54 = {
    type: "html-keyboard-response",
    stimulus: "Ela cumpriu a promessa ao trazer para dentro de casa um novo cachorro.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase55
var phrase55 = {
    type: "html-keyboard-response",
    stimulus: "Nos últimos anos, muitos homens acima de trinta e um anos decidiram usar barba.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase56
var phrase56 = {
    type: "html-keyboard-response",
    stimulus: "Ela menciona que foi com os amigos ver a queima dos fogos no castelo.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase57
var phrase57 = {
    type: "html-keyboard-response",
    stimulus: "Eu nunca consegui fazer uma dieta, mas evito comer açúcar e macarrão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase58
var phrase58 = {
    type: "html-keyboard-response",
    stimulus: "Há possibilidade de receber novas espécies como o marreco e o pavão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase59
var phrase59 = {
    type: "html-keyboard-response",
    stimulus: "No começo do programa, Mariana falou sobre como era sua vida no circo.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase60
var phrase60 = {
    type: "html-keyboard-response",
    stimulus: "Foi consequência de um problema congênito em uma das veias perto de seu pulmão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase61
var phrase61 = {
    type: "html-keyboard-response",
    stimulus: "No caminho, eles não marcaram as árvores e se perderam pela montanha.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase62
var phrase62 = {
    type: "html-keyboard-response",
    stimulus: "Junte duas colheres de açúcar mascavo para tirar a acidez da fruta.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase63
var phrase63 = {
    type: "html-keyboard-response",
    stimulus: "Nos primeiros jogos, a disputa revelou ainda mais o caráter da jogadora.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase64
var phrase64 = {
    type: "html-keyboard-response",
    stimulus: "Barney corria em direção ao seu dono quando ouvia o som do saco de ração.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase65
var phrase65 = {
    type: "html-keyboard-response",
    stimulus: "Romeu pediu uma licença para cuidar do pai que fez um transplante de fígado.",
    trial_duration: 8000,
    choices: ["p"]
};
        // phrase66
var phrase66 = {
    type: "html-keyboard-response",
    stimulus: "A Defesa Civil já monitorava o local e percebeu um deslocamento na rocha.",
    trial_duration: 8000,
    choices: ["p"]
};
        // phrase67
var phrase67 = {
    type: "html-keyboard-response",
    stimulus: "É que eu e minha esposa optamos pelo básico: tomate, presunto e cebola.",
    trial_duration: 8000,
    choices: ["p"]
};
        // phrase68
var phrase68 = {
    type: "html-keyboard-response",
    stimulus: "Os raios de sol que entram pela janela fazem brilhar o bronze polido da luneta.",
    trial_duration: 8000,
    choices: ["p"]
};
        // phrase69
var phrase69 = {
    type: "html-keyboard-response",
    stimulus: "Os depósitos também poderão ser feitos sem a necessidade de um envelope.",
    trial_duration: 8000,
    choices: ["p"]
};
        // phrase70
var phrase70 = {
    type: "html-keyboard-response",
    stimulus: "As orelhas grandes de Dumbo garantiram a maior aventura da vida do elefante.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase71
var phrase71 = {
    type: "html-keyboard-response",
    stimulus: "Nesse contexto, não se imaginava que seria possível alguém adestrar um tigre.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase72
var phrase72 = {
    type: "html-keyboard-response",
    stimulus: "Cristiana estaria de folga hoje e amanhã por conta da obra na farmácia.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase73
var phrase73 = {
    type: "html-keyboard-response",
    stimulus: "Pedro cercou o terreno para evitar qualquer tipo de depredação ao sítio.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase74
var phrase74 = {
    type: "html-keyboard-response",
    stimulus: "Ela estava com seus pequenos brincos e a tiara maravilhosa, tipo diadema.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase75
var phrase75 = {
    type: "html-keyboard-response",
    stimulus: "Ainda não chegou a hora de guardar a roupa da época de frio no  armário.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase76
var phrase76 = {
    type: "html-keyboard-response",
    stimulus: "Criaram ciclovias na cidade da mesma forma que se joga orégano em pizza.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase77
var phrase77 = {
    type: "html-keyboard-response",
    stimulus: "O filme mostra a chegada de naves espaciais em vários pontos do globo.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase78
var phrase78 = {
    type: "html-keyboard-response",
    stimulus: "Existe uma dificuldade de capturar a imagem da tela sem a tal tecla.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase79
var phrase79 = {
    type: "html-keyboard-response",
    stimulus: "Embora estivesse sem prática, consegui colocar o carro em ponto morto no farol.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase80
var phrase80 = {
    type: "html-keyboard-response",
    stimulus: "O cardápio dos quiosques reúne doze opções de comida, todas servidas no balcão.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase81
var phrase81 = {
    type: "html-keyboard-response",
    stimulus: "Os torcedores organizados se enfrentaram em um bairro bem próximo ao estádio.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase82
var phrase82 = {
    type: "html-keyboard-response",
    stimulus: "Só faltaram dizer que o rapaz se jogou propositalmente de cabeça no degrau.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase83
var phrase83 = {
    type: "html-keyboard-response",
    stimulus: "O Governo tomou medidas para eliminar os focos de poluição na lagoa.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase84
var phrase84 = {
    type: "html-keyboard-response",
    stimulus: "O centroavante segue em tratamento por causa de um problema no ombro.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase85
var phrase85 = {
    type: "html-keyboard-response",
    stimulus: "A maior parte do piso e das paredes estava revestida apenas com cimento.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase86
var phrase86 = {
    type: "html-keyboard-response",
    stimulus: "As paredes externas da casa eram enfeitadas pelos grandes frutos do pinheiro.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase87
var phrase87 = {
    type: "html-keyboard-response",
    stimulus: "Coloque também na panela a carne, as folhas de louro e o molho de tomate.",
    trial_duration: 8000,
    choices: ["p"]
};

    // phrase88
var phrase88 = {
    type: "html-keyboard-response",
    stimulus: "A previsão para os próximos meses é que esteja pronto o novo quartel.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase89
var phrase89 = {
    type: "html-keyboard-response",
    stimulus: "O criador do texto se aproximou um momento e pediu para ver o bilhete.",
    trial_duration: 8000,
    choices: ["p"]
};
    // phrase90
var phrase90 = {
    type: "html-keyboard-response",
    stimulus: "Os doces mais saudáveis são os que apontam a maior quantidade possível de cacau.",
    trial_duration: 8000,
    choices: ["p"]
};
 // phrase91
var phrase91 = {
    type: "html-keyboard-response",
    stimulus: "O time comemorou a vitória com desfile em carro aberto ostentando o troféu.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase92
var phrase92 = {
    type: "html-keyboard-response",
    stimulus: "Com uma escada, eles conseguiram resgatar o filhote e devolver ao ninho.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase93
var phrase93 = {
    type: "html-keyboard-response",
    stimulus: "Os homens cuidam bem da plantação de mandioca e da produção da farinha.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase94
var phrase94 = {
    type: "html-keyboard-response",
    stimulus: "Vanio Ferreira dos Santos estava em uma pescaria quando caiu da canoa.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase95
var phrase95 = {
    type: "html-keyboard-response",
    stimulus: "Há quatro réplicas dessa estátua de bronze em uma estrutura de pirâmide.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase96
var phrase96 = {
    type: "html-keyboard-response",
    stimulus: "Foi o Departamento de Biologia da UFC que participou da criação da cartilha.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase97
var phrase97 = {
    type: "html-keyboard-response",
    stimulus: "Agora, eles passaram a usar tênis combinando com o terno e a gravata.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase98
var phrase98 = {
    type: "html-keyboard-response",
    stimulus: "O sul de Minas Gerais tem hoje dois prêmios importantes de produção do queijo.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase99
var phrase99 = {
    type: "html-keyboard-response",
    stimulus: "Os motoristas devem buscar outras rotas de desvio até a retirada do tronco.",
    trial_duration: 8000,
    choices: ["p"]
};
// phrase100
var phrase100 = {
    type: "html-keyboard-response",
    stimulus: "De terça para quinta, ela conseguiu o dinheiro que queria para comprar carvão.",
    trial_duration: 8000,
    choices: ["p"]
};
// run experiment
jsPsych.init({
    timeline: [form, instructions, training1, training2, answer, training3, training4, training5, answer, training6, training7, training8, training9, answer, end_pratice, phrase1, phrase2, answer, phrase3, phrase4, phrase5, phrase6, phrase7, phrase8, answer, phrase9, phrase10, phrase11, phrase12, answer, phrase13, phrase14, phrase15, phrase16, phrase17, answer, phrase18, phrase19, phrase20, answer, phrase21, phrase22, phrase23, phrase24, phrase25, answer, phrase26, phrase27, answer, phrase28, phrase29, phrase30, phrase31, phrase32, phrase33, answer, phrase34, phrase35, phrase36, answer, phrase37, phrase38, phrase39, phrase40, answer, phrase41, phrase42, phrase43, phrase44, phrase45, answer, phrase46, phrase47, phrase48, answer, phrase49, phrase50, phrase51, phrase52, phrase53, phrase54, answer, phrase55, phrase56, phrase57, phrase58, answer, phrase59, phrase60, answer, phrase61, phrase62, phrase63, phrase64, answer, phrase65, phrase66, phrase67, phrase68, phrase69, phrase70, answer, phrase71, phrase72, phrase73, answer, phrase74, phrase75, answer, phrase76, phrase77, phrase78, phrase79, phrase80, answer, phrase81, phrase82, phrase83, phrase84, phrase85, phrase86, answer, phrase87, phrase88, phrase89, phrase90, answer, phrase91, phrase92, phrase93, phrase94, phrase95, answer, phrase96, phrase97, phrase98, answer, phrase99, phrase100, answer, the_end],
    on_finish: function(){
  //jsPsych.data.displayData();
    }
});