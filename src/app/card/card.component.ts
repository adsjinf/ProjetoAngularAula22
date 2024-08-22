import { Component } from '@angular/core';

interface IPlano {
  infos: IInfos;
}

interface IInfos {
  tipo: string;
  preco: number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  //@ts-ignore
  plano: IPlano = {
    infos: {
      tipo: 'simples',
      preco: 100,
    },
  };

    // Exemplo de acesso sem encadeamento opcional
    obterPreco(): number {
      // Como o objeto 'plano' e 'infos' sempre são definidos, podemos acessar diretamente
      return this.plano.infos.preco;
    }
  
    obterTipo(): string {
      return this.plano.infos.tipo;
    }

}
