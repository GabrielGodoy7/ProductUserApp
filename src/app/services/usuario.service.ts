import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/Usuario.model';
import { EMPTY, Observable, catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public listaUsuarios: Usuario[] = [];
  private url = 'http://localhost:3000/usuarios';

  // Criar um instância do HttpClient
  constructor(private http: HttpClient) { }

  //AQUI VAI OS MÉTODOS DO CRUD

  //O Read é sempre composto por 2 métodos:

  //1º Traz todos os registros do banco de dados
  public getAll(): Observable<Usuario[]>{
    //retorna o resultado da coneção com a URL da API
    return this.http.get<Usuario[]>(this.url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //2º trás os dados de apenas 1 registro
  public getOne(id: number){
    return this.http.get<Usuario[]>(`${this.url}/${id}`).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  exibeErro(erro: any): Observable<any>{
    console.log(erro);
    alert('não foi possivel atender a solicitação!');
    return EMPTY;
  }

  salvar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.url, usuario).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }
}
