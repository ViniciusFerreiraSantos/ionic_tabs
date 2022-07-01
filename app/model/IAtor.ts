export interface IAtor{
  nome: string;
  lancamento: string;
  classificacao: number;
  cartaz: string;
  
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}