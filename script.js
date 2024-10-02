//PREPARAR DADOS
const infoEventos = 
[
    [1,"3","Agosto","Sábado","Encontro de casais","Local a definir","Todos os irmãos casados são convidados para participarem deste momento de culto focado no relacionamento a dois.","Horário a definir","Casais"],
    [2,"10","Agosto","Sábado","Intercâmbio juventude","IB Maracanã","Iremos fazer um culto junto dos nossos irmãos da igreja batista do Maracanã. Possivelmente junto de outras igrejas.","18h","Juventude"],
    [3,"11","Agosto","Domingo","Dia dos pais","Em cada congregação","Será feito um culto especial em celebração ao dia dos pais durante os cultos da manhã.","Manhã","Igreja"],
    [4,"17","Agosto","Sábado","Encontro de jovens","Barreirinha","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos jovens.","19h","Jovens (+18)"],
    [5,"23-24","Agosto","Final de semana","Acampamento","Local a definir","Mais informações em breve.","Final de semana","Juventude"],
    [6,"31","Agosto","Sábado","Encontro de adolescentes","Guarujá","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos adolescentes.","15h","Adolescentes (+13)"],
    [7,"31","Agosto","Sábado","Assembleia","Guarujá","Todos os membros estão convocados ao nosso culto administrativo. A igreja somos nós, venha participar das tomadas de decisão.","17h45","Igreja"],
    [8,"31","Agosto","Sábado","Comunhão Ágape","Guarujá","O culto especial em que reunimos todas as congregações num só templo para juntos cultuarmos nosso Deus.","19h","Igreja"],
    [9,"14","Setembro","Sábado","Café colonial","Guarujá","Um momento de comunhão, com muita conversa, louvor, meditação e claro, muita, muita comida. Ótima ocasião para visitantes.","16h","Igreja"],
    [10,"21","Setembro","Sábado","Encontro de adolescentes","Guarujá","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos adolescentes.","15h","Adolescentes (+13)"],
    [11,"21","Setembro","Sábado","Encontro de jovens","Barreirinha","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos jovens.","19h","Jovens (+18)"],
    [12,"28","Setembro","Sábado","Encontro de jovens casados","A definir","Uma reunião daqueles que casaram há poucos anos e estão nesta nova fase da vida. Uma ocasião para compartilhar, aprender e edificar sua família.","12h","Jovens casados"],
    [13,"28","Setembro","Sábado","Conversa pizzológica","Barreirinha","Teologia + pizza = ♥. Conversa sobre os tópicos teológicos em voga acompanhado de muita pizza.","19h","Juventude"],
    [14,"5","Outubro","Sábado","Encontro de adolescentes","Guarujá","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos adolescentes.","15h","Adolescentes (+13)"],
    [15,"5","Outubro","Sábado","Encontro de jovens","Barreirinha","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos jovens.","19h","Jovens (+18)"],
    [16,"12","Outubro","Sábado","Agapíadas","Guarujá","Venha participar deste evento muito especial. A igreja estará repleta de estandes com vários esportes para praticar. Muitas brincadeiras para a criançada, barraquinhas de comida e muito mais.","Dia todo","Igreja"],
    [17,"19","Outubro","Sábado","Assembleia","Guarujá","Todos os membros estão convocados ao nosso culto administrativo. A igreja somos nós, venha participar das tomadas de decisão.","17h45","Igreja"],
    [18,"19","Outubro","Sábado","Comunhão Ágape","Guarujá","O culto especial em que reunimos todas as congregações num só templo para juntos cultuarmos nosso Deus.","19h","Igreja"],
    [19,"25-27","Outubro","Final de semana","Retiro dos casais","Pousada rural SESC Lages","Tire este momento especial para viajar com seu cônjuge junto da igreja. Vamos para um belo lugar ter momentos de comunhão, lazer, descanso e edificação.","Sexta a domingo","Casais"],
    [20,"2","Novembro","Sábado","Encontro de adolescentes","Guarujá","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos adolescentes.","15h","Adolescentes (+13)"],
    [21,"2","Novembro","Sábado","Encontro de jovens casados","A definir","Uma reunião daqueles que casaram há poucos anos e estão nesta nova fase da vida. Uma ocasião para compartilhar, aprender e edificar sua família.","19h","Jovens casados"],
    [22,"9","Novembro","Sábado","Encontro de jovens","Fazenda Rio Grande","Um culto informal: louvor, oração, comunhão e palavra na linguagem dos jovens.","19h","Jovens (+18)"],
    [23,"9","Novembro","Sábado","Encontro de juniores","Local a definir","Uma atividade especial focada nos juniores. Um momento voltado inteiramente para eles.","Horário a definir","Juniores"],
    [24,"9","Novembro","Sábado","Bazar","Guarujá","Tem roupas que não usa mais? Doe para quem precisa! Está precisando de outras? Vem adquirir no nosso famoso bazar.","9h","Igreja"],
    [25,"15-16","Novembro","Final de semana","Tempo em família","","Este final de semana é reservado para que as famílias possam aproveitar e descansar. Não há nenhuma atividade da igreja além dos cultos de domingo.","","Igreja"],
    [26,"23","Novembro","Sábado","Intercâmbio juventude","Barreirinha","Iremos fazer um culto junto dos nossos irmãos de outras igrejas da região.","Horário a definir","Juventude"],
    [27,"30","Novembro","Sábado","Encerramento ministério de esportes","Guarujá","Último dia de prática para nossos atletas antes das férias. Um dia especial celebrando mais um ano de ministério de esportes.","Manhã","Esporte"],
    [28,"30","Novembro","Sábado","Assembleia","Guarujá","Todos os membros estão convocados ao nosso culto administrativo. A igreja somos nós, venha participar das tomadas de decisão.","17h45","Igreja"],
    [29,"30","Novembro","Sábado","Comunhão Ágape","Guarujá","O culto especial em que reunimos todas as congregações num só templo para juntos cultuarmos nosso Deus.","19h","Igreja"],
    [30,"14","Dezembro","Sábado","Encerramento juventude","Local a definir","Última atividade do ano voltada a juventude. Um passeio especial para relembrar o ano que foi e criar espectativas para o próximo.","Horário a definir","Juventude"],
    [31,"22","Dezembro","Domingo","Natal","Em cada congregação","Pela manhã cada congregação celebrará o Natal durante o culto matutino.","Manhã","Igreja"],
    [32,"22","Dezembro","Domingo","Natal","Guarujá","À noite todos nos reunimos no Guarujá para juntos fazermos um grande culto natalino.","Noite","Igreja"],
    [33,"25","Dezembro","Quarta","Tempo em família","","No dia 25 não teremos nenhuma atividade na igreja. Aproveite o feriado para passar com a família, lembrando-se do significado desta data tão importante.","","Igreja"],
    [34,"29","Dezembro","Domingo","Culto de final de ano","Em cada congregação","Pela manhã cada congregação celebrará o ano novo durante o culto matutino.","Manhã","Igreja"],
    [35,"29","Dezembro","Domingo","Culto de final de ano","Barreirinha","À noite todos nos reunimos no Barreirinha para juntos fazermos um grande culto de gratidão pelo ano que se foi e pedindo mais uma vez a benção de Deus para o ano que virá.","Noite","Igreja"],
    [36,"1","Janeiro","Quarta","Tempo em família","","No dia primeiro não teremos nenhuma atividade na igreja. Aproveite o feriado para passar com a família.","","Igreja"],
    
]

function Evento(id, dia, mes, diaSemana, atividade, local, descricao, horario, publico)
{
    this.id = id
    this.dia = dia
    this.mes = mes
    this.diaSemana = diaSemana
    this.atividade = atividade
    this.local = local
    this.descricao = descricao
    this.horario = horario
    this.publico = publico
}

var eventos = [];
for (var i = 0; i < infoEventos.length; i++)
{
    eventos[i] = new Evento
    (
        infoEventos[i][0],
        infoEventos[i][1],
        infoEventos[i][2],
        infoEventos[i][3],
        infoEventos[i][4],
        infoEventos[i][5],
        infoEventos[i][6],
        infoEventos[i][7],
        infoEventos[i][8],
    )
}

//FILTRO
//Definir opções
var opcoesFiltro = []
for (var i = 0; i < eventos.length; i++)
{
    if (!opcoesFiltro.includes(eventos[i].publico)) opcoesFiltro.push(eventos[i].publico)
}
opcoesFiltro.sort()

//Criar botões de filtro e seus eventos
for (var i = 0; i < opcoesFiltro.length; i++)
{
    var botao = document.createElement("button")
    botao.id = `botao${opcoesFiltro[i]}`
    botao.textContent = opcoesFiltro[i]
    document.getElementById("filtro").appendChild(botao)

    document.getElementById(`botao${opcoesFiltro[i]}`).addEventListener("click", e =>
    {
        filtrarPublico(e.target.innerText)
    })
}

//Criar botões de mostrar nenhum/todos e seus eventos
var botaoEsconderTodos = document.createElement("button")
botaoEsconderTodos.class = "botaoEsconderMostrarTodos"
botaoEsconderTodos.id = "botaoEsconderTodos"
botaoEsconderTodos.textContent = "Selecionar nenhum"
document.getElementById("filtroEsconderMostrarTodos").appendChild(botaoEsconderTodos)
document.getElementById("botaoEsconderTodos").addEventListener("click", e =>
    {
        filtrarNenhum()
    })

var botaoMostrarTodos = document.createElement("button")
botaoMostrarTodos.class = "botaoEsconderMostrarTodos"
botaoMostrarTodos.id = "botaoMostrarTodos"
botaoMostrarTodos.textContent = "Selecionar todos"
document.getElementById("filtroEsconderMostrarTodos").appendChild(botaoMostrarTodos)
document.getElementById("botaoMostrarTodos").addEventListener("click", e =>
    {
        filtrarTodos()
    })


function filtrarPublico(publico)
{
    for (var i = 0; i < eventos.length; i++)
    {
        if (eventos[i].publico == publico)
        {
            var ev = document.getElementById(eventos[i].id)
            var bt = document.getElementById(`botao${publico}`)

            if (ev.style.display != "none")
            {
                ev.style.display = "none"
                bt.style.backgroundColor = "white"
                bt.style.borderColor = "rgb(182, 182, 182)"

            }

            else
            {
                ev.style.display = "flex"
                bt.style.backgroundColor = "rgb(182, 182, 182)"
                bt.style.borderColor = "grey"
            }
        }
    }
}

function filtrarNenhum()
{
    for (var i = 0; i < eventos.length; i++)
    {
        document.getElementById(eventos[i].id).style.display = "none"
    }

    for (var i = 0; i < opcoesFiltro.length; i++)
    {
        document.getElementById(`botao${opcoesFiltro[i]}`).style.backgroundColor = "white"
        document.getElementById(`botao${opcoesFiltro[i]}`).style.borderColor = "rgb(182, 182, 182)"
    }
}

function filtrarTodos()
{
    for (var i = 0; i < eventos.length; i++)
    {
        document.getElementById(eventos[i].id).style.display = "flex"
    }

    for (var i = 0; i < opcoesFiltro.length; i++)
    {
        document.getElementById(`botao${opcoesFiltro[i]}`).style.backgroundColor = "rgb(182, 182, 182)"
        document.getElementById(`botao${opcoesFiltro[i]}`).style.borderColor = "grey"
    }
}

//CRIAR DIVS MESES
var meses = []
for (var i = 0; i < eventos.length; i++)
{
    if (!meses.includes(eventos[i].mes))
    {
        meses.push(eventos[i].mes)
        var mes = document.createElement("div")
        mes.id = eventos[i].mes
        mes.className = "mes"
        document.body.appendChild(mes)

        var titulo = document.createElement("div")
        titulo.className = "mesTitulo"
        titulo.textContent = eventos[i].mes
        document.getElementById(eventos[i].mes).appendChild(titulo)
    }
}

//CRIAR DIVS EVENTOS
for (var i = 0; i < eventos.length; i++)
{
    // Div evento
    var evento = document.createElement("div")
    evento.id = eventos[i].id
    evento.className = `eventos ${eventos[i].publico}`
    document.getElementById(eventos[i].mes).appendChild(evento)

    //Div dia
    var dia = document.createElement("div")
    dia.id = eventos[i].id + "dia"
    dia.className = "dia dadosEventos"
    document.getElementById(eventos[i].id).appendChild(dia)

    var diaNum = document.createElement("div")
    if (eventos[i].dia.length <= 2) diaNum.className = "diaNum"
    else diaNum.className = "diaNumDuasDatas"
    diaNum.textContent = eventos[i].dia
    document.getElementById(dia.id).appendChild(diaNum)

    var diaSem = document.createElement("div")
    diaSem.className = "diaSem"
    diaSem.textContent = eventos[i].diaSemana
    document.getElementById(dia.id).appendChild(diaSem)
    
    //Div info
    var info = document.createElement("div")
    info.id = eventos[i].id + "info"
    info.className = "info dadosEventos"
    document.getElementById(eventos[i].id).appendChild(info)

    var infoAtividade = document.createElement("div")
    infoAtividade.className = "infoAtividade"
    infoAtividade.textContent = eventos[i].atividade
    document.getElementById(info.id).appendChild(infoAtividade)
    
    var infoLocalHora = document.createElement("div")
    infoLocalHora.className = "infoLocalHora"
    infoLocalHora.textContent = eventos[i].local + " - " + eventos[i].horario
    if (infoLocalHora.textContent != " - ") document.getElementById(info.id).appendChild(infoLocalHora)
    
    var infoDescricao = document.createElement("div")
    infoDescricao.className = "infoDescricao"
    infoDescricao.textContent = eventos[i].descricao
    document.getElementById(info.id).appendChild(infoDescricao)
    
    //Div publico
    var publico = document.createElement("div")
    publico.id = eventos[i].id + "publico"
    publico.className = "publico dadosEventos"
    publico.textContent = eventos[i].publico
    document.getElementById(eventos[i].id).appendChild(publico)
}