
export interface objectProjectsProps {
    name: string
    url: string
    img: string
    description: string
    github: string
    tecnology: {
        vue: boolean
        react: boolean
        angular: boolean
        tailwind: boolean
        typescript: boolean
        html: boolean
        css: boolean
        javascript: boolean
    }

}

    export const object: objectProjectsProps[] = [{
        name: 'planner',
        url: 'https://nlw-plann-er.vercel.app/',
        img: './planner.jpg',
        description: 'Trata-se de uma aplicação voltada para a organização de viagens. Nela, o usuário pode selecionar o destino, definir as datas e escolher quem deseja convidar, além de registrar seus próprios dados. Na página principal, é possível cadastrar atividades planejadas, salvar links importantes relacionados à viagem e adicionar novos convidados a qualquer momento.',
        github: 'https://github.com/AugustoAumond/NLW---plann.er',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: true,
            typescript: true,
            html: true,
            css: true,
            javascript: false
        }, 
    },
    {
        name: 'Forms Angular',
        url: 'https://forms-angular-smoky.vercel.app/',
        img: './forms-angular.jpg',
        description: "Esta aplicação consiste em um formulário que o usuário preenche para gerar automaticamente um cartão de visita personalizado.",
        github: 'https://github.com/AugustoAumond/Forms_angular',
        tecnology: {
            vue: false,
            react: false,
            angular: true,
            tailwind: true,
            typescript: true,
            html: true,
            css: true,
            javascript: false
        },
    },
    {
        name: 'Weather Aplication',
        url: 'https://climate-weather-two.vercel.app/',
        img: 'weather.jpg',
        description: "Esta aplicação apresenta uma página onde o usuário pode inserir o local desejado e obter informações detalhadas sobre a temperatura, clima, umidade e sensação térmica. Observação: Para visualizar o projeto em pleno funcionamento, é necessário baixá-lo do GitHub, pois a API hospedada no Vercel está enfrentando problemas de CORS.",
        github: 'https://github.com/AugustoAumond/climate_weather',
        tecnology: {
            vue: false,
            react: false,
            angular: true,
            tailwind: true,
            typescript: true,
            html: true,
            css: true,
            javascript: false
        },
    },
    {
        name: 'Hilca',
        url: 'https://hilca.vercel.app/',
        img: 'hilca.jpg',
        description: "Esta aplicação oferece uma página dedicada a diversos projetos da Lei Rouanet. O usuário pode filtrar os projetos, paginar a exibição para controlar a quantidade de itens na página e acessar mais informações detalhadas sobre cada projeto ao clicar nele.",
        github: 'https://github.com/AugustoAumond/hilca',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: false,
            typescript: false,
            html: true,
            css: true,
            javascript: true
        },
    },
    {
        name: 'Frexco',
        url: 'https://frexco-beta.vercel.app/',
        img: './frexco.jpg',
        description: "A aplicação consiste em uma lista de produtos onde os usuários podem adicionar itens ao carrinho. Dentro do carrinho, é possível ajustar a quantidade de cada produto ou removê-los completamente.",
        github: 'https://github.com/AugustoAumond/back-end-frexco',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: false,
            typescript: false,
            html: true,
            css: true,
            javascript: true
        },
    },
    {
        name: 'Begin One',
        url: 'https://begin-one.vercel.app/',
        img: 'begin-one.jpg',
        description: "A aplicação consiste em uma página totalmente responsiva, com o grande destaque sendo o desenvolvimento cuidadoso e detalhado do layout.",
        github: 'https://github.com/AugustoAumond/begin',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: false,
            typescript: true,
            html: true,
            css: true,
            javascript: false
        },
    },
    {
        name: 'BDTI',
        url: 'https://bdti.vercel.app/',
        img: './bdti.jpg',
        description: "A aplicação consiste em uma página onde o usuário pode criar tarefas, marcá-las como concluídas ou pendentes, e também excluir tarefas conforme necessário.",
        github: 'https://github.com/AugustoAumond/BDTI',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: false,
            typescript: false,
            html: true,
            css: true,
            javascript: true
        },
    },
    {
        name: 'Beautiful',
        url: 'https://layout-beautify.vercel.app/',
        img: './beautifull.jpg',
        description: "A aplicação consiste em uma página totalmente responsiva, com o grande destaque sendo o desenvolvimento cuidadoso e detalhado do layout.",
        github: 'https://github.com/AugustoAumond/layout_beautify',
        tecnology: {
            vue: false,
            react: true,
            angular: false,
            tailwind: false,
            typescript: false,
            html: true,
            css: true,
            javascript: true
        },
    }]

