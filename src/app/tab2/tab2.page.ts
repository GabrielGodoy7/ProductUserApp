import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  listaProdutos: Produto[] = [];
  produto?: Produto;
  id = 0;

  constructor(private produtoService: ProdutoService) { }

  buscarProdutos(){
    this.produtoService.getAll().subscribe(retorno =>{
      // "as Usuario[]" tenta converter o retorno
      this.listaProdutos = retorno as Produto[];
      console.log(this.listaProdutos);
      this.produto = undefined; //Limpa o Usuario
    });
  }

  buscarPorID(){
    this.produtoService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.produto = retorno as Produto;
      this.listaProdutos = []; // Limpa a lista
    });
  }

  ngOnInit(){
    this.buscarProdutos();
  }
}
