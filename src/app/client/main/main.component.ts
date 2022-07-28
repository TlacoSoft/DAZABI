import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  usuario: any;
  recompensas: any;
  puntos = {
    puntosDisponibles: '',
    puntosUsados: '',
    puntosTotales: ''
  };
  count = {
    recompensa: ''
  };
  id: any;
  constructor(private CS: CookieService, private router: Router, private AU: AuthService) { }

  ngOnInit(): void {
    this.usuario = this.CS.get('usuario');
    this.id = this.CS.get('idUser');
    this.getRecompensas();
    this.getPuntos(this.id);
    this.getRecompensasCountID(this.id);
  }

  getRecompensas(){
    this.AU.recompensa().subscribe((data: any)=>{
      console.log(data);
      this.recompensas=data;
    });
  }

  getRecompensasCountID(id: any){
    this.AU.recompensasCountID(id).subscribe((data: any)=>{
      console.log(data);
      this.count=data;
    });
  }

  getPuntos(id: any){
    this.AU.puntos(id).subscribe((data: any)=>{
      console.log(data);
      this.puntos=data;
    });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}
