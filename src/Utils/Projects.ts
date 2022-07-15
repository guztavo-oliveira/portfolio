import findRecipes from "../Assets/images/find-recipes.png";
import ajudeMeuPet from "../Assets/images/ajude-meu-pet.png";

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
    name: "Find my recipe",
    description:
      "Desenvolver os endpoint da API REST, CRUD do usuário e cadastro de itens, para servir a aplicação" +
      "que já possuía o frontend implementado.",
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
