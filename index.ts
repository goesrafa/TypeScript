//types - define uma estrutura de dados
//interfaces - contratos para implementação das classes

interface Ianimal{
    nome: string;
    tipo: 'terrestre' | 'Aquatico';
    domestico :boolean;
}

interface Ifelinos extends Ianimal {
    visaoNoturna: boolean,
}

interface Icanino extends Ianimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type Idomestico = Ifelinos | Icanino;

const animal: Idomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: "terrestre",
}



