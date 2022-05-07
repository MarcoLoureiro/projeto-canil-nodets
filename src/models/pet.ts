type PetType = "dog" | "cat" | "fish";

type Pet = {
    type: PetType,
    image:string,
    name:string,
    color:string,
    sex: "Masculino" | "Feminino",
    description:string,
}

export const data:Pet[] = [
    {
        type: 'dog',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        description:"Pastor-alemão (em alemão: Deutscher Schäferhund) ou lobo-da-alsácia [a][b] é uma raça canina proveniente da Alemanha.[2] Em sua origem era utilizado como cão de pastoreio de rebanhos. Atualmente é mais utilizado como cão de guarda e cão policial (K9).[3]"
    },
    {
        type: 'dog',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino',
        description:"Labrador retriever é uma raça de cães do tipo retriever originária da província de Terra Nova e Labrador no Canadá, mas desenvolvida na Inglaterra. Utilizada originalmente para a caça de aves aquáticas, a labrador retriever é conhecida como uma raça versátil, inteligente e dócil.[1]"
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
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'dog',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'dog',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino',
        description:""
    },
    {
        type: 'dog',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'cat',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'cat',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'cat',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino',
        description:""
    },
    {
        type: 'cat',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'cat',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'fish',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'fish',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'fish',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'fish',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino',
        description:""
    },
    {
        type: 'fish',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino',
        description:""
    },
];

export const Pet = {
    getAllPets: ():Pet[] => {
        return data;
    },
    getFromType: (type:PetType):Pet[] =>{
        return data.filter(item=>{
            if(item.type==type){
                return true;
            }
            else{
                return false;
            }
        });
    },
    getFromName: (name:string):Pet[] =>{
        return data.filter(item=>{
            if(item.name.toUpperCase().indexOf(name.toUpperCase())> -1){
                return true;
            }else{
                return false;
            }
        });
    },
    separateDetails: (info:string) =>{
        let separeteInfo = info.split(',');
        return separeteInfo;
    }
}