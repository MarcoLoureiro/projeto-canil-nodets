import { Pet,data } from "../models/pet";

let dataFishes = [
    {
      type: 'fish',
      image: 'neon.jpg',
      name: 'Tetra Neon',
      color: 'Vermelho e Azul',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'fish',
      image: 'matogrosso.jpg',
      name: 'Mato Grosso',
      color: 'Laranja',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'fish',
      image: 'limpavidro.jpg',
      name: 'Limpa Vidro',
      color: 'Verde e Branco',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'fish',
      image: 'tanictis.jpg',
      name: 'Tanictis',
      color: 'Vermelho',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'fish',
      image: 'acara.jpg',
      name: 'Acará Bandeira',
      color: 'Preto',
      sex: 'Masculino',
      description: ''
    }
  ];

  let dataByNameP = [
    {
      type: 'dog',
      image: 'pastor-alemao.jpg',
      name: 'Pastor-alemão',
      color: 'Amarelo e Preto',
      sex: 'Masculino',
      description: 'Pastor-alemão (em alemão: Deutscher Schäferhund) ou lobo-da-alsácia [a][b] é uma raça canina proveniente da Alemanha.[2] Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial (K9).[3]'
    },
    {
      type: 'dog',
      image: 'zwergspitz.jpg',
      name: 'Zwergspitz',
      color: 'Amarelo',
      sex: 'Feminino',
      description: "Spitz-alemão-anão[a] (em alemão: Zwergspitz), também conhecida como lulu-da-pomerânia, é a menor variedade da raça spitz alemão.[1] É nativa da Pomerânia, uma região que engloba parte da Alemanha e Polônia na Europa Central.Classificado como uma raça toy por causa do seu pequeno tamanho, o lulu-da-pomerânia é um cão de companhia descendente de cães maiores do tipo Spitz, especificamente do spitz alemão. Foi determinado pela Federação Cinológica Internacional (FCI) como sendo parte da raça spitz alemão; e, em muitos países, eles são conhecidos como Zwergspitz ('spitz-anão')."
    },
    {
      type: 'dog',
      image: 'poodle.jpg',
      name: 'Poodle',
      color: 'Branco',
      sex: 'Feminino',
      description: ''
    },
    {
      type: 'cat',
      image: 'persa.jpg',
      name: 'Persa',
      color: 'Amarelo',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'cat',
      image: 'sphynx.jpg',
      name: 'Sphynx',
      color: 'Branco',
      sex: 'Masculino',
      description: ''
    },
    {
      type: 'fish',
      image: 'limpavidro.jpg',
      name: 'Limpa Vidro',
      color: 'Verde e Branco',
      sex: 'Masculino',
      description: ''
    }
  ];

describe('Testando Pet model',() =>{
    test('getAllPets function',()=>{
        expect(Pet.getAllPets()).toEqual(data);
    });


    test('getByType function',()=>{
        expect(Pet.getFromType('fish')).toEqual(dataFishes);
    });

    test('getByName function', ()=>{
        expect(Pet.getFromName('P')).toEqual(dataByNameP);
    });
});