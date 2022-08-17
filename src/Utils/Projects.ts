import findRecipes from "../Assets/images/find-recipes.png";
import ajudeMeuPet from "../Assets/images/ajude-meu-pet.png";
import spot from "../Assets/images/spot.png";
import re_viewers from "../Assets/images/re-viewers.png";

interface IProjects {
  name: string;
  description: string;
  techs: string[];
  github: string;
  image: string;
  demo: string;
}

export const Projects = [
  {
    name: "Re Viewers",
    description:
      "API desenvolvida para realizar o catálogo de Animes. É possível o CRUD dos animes, dar notas e comentar em cada anime, " +
      "busca de determinado anime, ranking de melhores animes baseado através das notas dadas pelos usuários, busca por categorias " +
      "e muito mais! Se você precisa de uma API de animes com certeza já encontrou!",
    techs: ["django", "postgreSQL", "heroku"],
    image: re_viewers,
    github: "https://github.com/brunotetzner/caps-django",
    demo: "https://capstone-group-3-robsonmt.vercel.app/",
  },
  {
    name: "SPOT",
    description:
      "Forma fácil de encontrar pontos de coleta seletiva perto de você! " +
      "Precisando despejar seu óleo de cozinha de forma apropriada? Ou aquelas pilhas usadas? Não sabe o que fazer com aquele " +
      "medicamento vencido e fica com receio de descartá-lo no lixo comum? " +
      "Com esse propósito, de auxiliar a reciclagem destes itens comumentes descartados de forma indevida, " +
      "que a API SPOT (Security Point to Output your Trash) nasceu. " +
      "Ao se cadastrar utilizando seu endereço é realizada uma consulta ao nosso banco de dados e à API do Google " +
      "Distance Matrix afim de calcular a distância da sua posição atual para os pontos de coletas " +
      "retornando todos os pontos de coleta dos mais pertos aos mais distantes. ",
    techs: [
      "nodejs",
      "express",
      "typescript",
      "postgreSQL",
      "docker",
      "heroku",
    ],
    image: spot,
    github: "https://github.com/lcsreiser/pollutants-recycling",
    demo: "https://s-p-o-t.vercel.app/",
  },
  {
    name: "Find my recipe",
    description:
      "Já foi fazer alguma receita e quando estava no meio percebeu que faltava algum ingrediente? " +
      "Ou não sabe o que pode ser feito com os ingredientes à disposição? " +
      "Foi neste intuito que esta aplicação foi desenvolvida, você pesquisa informando os ingredientes " +
      "que estão na dispensa e é retornado apenas as receitas que possuem aqueles ingredientes. " +
      "Neste projeto foram desenvolvidos os endpoint da API RESTful, CRUD do usuário, cadastro das receitas e ingredientes, para servir a aplicação " +
      "que já possuía o frontend implementado anteriormente.",
    techs: ["python", "sqlAlchemy", "flask", "postgreSQL", "heroku"],
    image: findRecipes,
    github: "https://github.com/guztavo-oliveira/capstone-q3-find-my-recipes",
    demo: "https://capstone-dusky.vercel.app/",
  },
  {
    name: "Ajude meu pet",
    description:
      "Aplicação pensada para auxiliar os donos de animais a manter os cuidados de seu companheiro em" +
      "dia. Através do cadastro no site é possível contratar os serviços de passeio, treinamentos e de táxi" +
      "pet, caso seja necessário levá-lo ao veterinário ou a outro local",
    techs: [
      "react",
      "materialUI",
      "styledComponents",
      "jest",
      "cypress",
      "vercel",
    ],
    image: ajudeMeuPet,
    github: "https://github.com/guztavo-oliveira/capstone-q2-ajude-meu-pet",
    demo: "https://capstone-q2-ajude-meu-pet-zeta.vercel.app/",
  },
] as IProjects[];
