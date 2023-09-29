import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Usuario } from '../models/Usuario.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  //Variavel que irá guardar o retorno da API
  listaUsuarios: Usuario[] = [];
  usuario?: Usuario;
  id = 0;

  /**
   * Para consumir a Api devemos instanciar o serviço que foi criado
   */
  constructor(private userService: UsuarioService) {

  }

  // CRIAR OS MÉTODOS DE TRABALHO

  // Primeiro chamamos o serviço através da sua variavel
  // Depois chamamos o método que desejamos usar
  // Utilizamos o subscribe para guardar o retorno da API
  // Criar uma variavel para guardar o retorno
  // Enviamos essa variavel para uma função anônima
  // Dentro da função trabalhamos com o retorno
  buscarUsuarios(){
    this.userService.getAll().subscribe(retorno =>{
      // "as Usuario[]" tenta converter o retorno
      this.listaUsuarios = retorno as Usuario[];
      console.log(this.listaUsuarios);
      this.usuario = undefined; //Limpa o Usuario
    });
  }

  buscarPorID(){
    this.userService.getOne(this.id).subscribe(retorno =>{
      console.log(retorno);
      this.usuario = retorno as Usuario;
      this.listaUsuarios = []; // Limpa a lista
    })
  }

  ngOnInit(){
    this.buscarUsuarios();
  }
}
