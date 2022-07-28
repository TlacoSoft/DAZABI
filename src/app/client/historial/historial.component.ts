import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent implements OnInit {
  recompensas: any;
  historial: any;
  id: any;
  constructor(private CS: CookieService, private router: Router, private AU: AuthService) { }

  ngOnInit(): void {
    this.id = this.CS.get('idUser');
    this.getRecompensasID();
    this.getHistorialID();
  }

  getRecompensasID(){
    this.AU.recompensasID(this.id).subscribe((data: any)=>{
      console.log(data);
      this.recompensas=data;
    });
  }

  getHistorialID(){
    this.AU.historialID(this.id).subscribe((data: any)=>{
      console.log(data);
      this.historial=data;
    });
  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}
