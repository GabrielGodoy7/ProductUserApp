import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';



@Component({
  selector: 'app-cadastro-produto',
  templateUrl: './cadastro-produto.page.html',
  styleUrls: ['./cadastro-produto.page.scss'],
})
export class CadastroProdutoPage implements OnInit {

  produto: Produto = {
    nome: '',
    descricao: '',
    validade: '',
    valor: 0
  };

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
  }

  salvarProduto(){
    if(this.produto.nome.trim() && this.produto.valor){
      this.produtoService.salvar(this.produto).subscribe(retorno => {
        this.produto = retorno;
        alert("SUCESSO! O Produto [" + this.produto.id + "] foi salvo!")
      });
    }else {
      alert("Os campos de nome e valor são obrigatórios");
    }
  }
}
