import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-recompensa',
  templateUrl: './recompensa.component.html',
  styleUrls: ['./recompensa.component.scss']
})
export class RecompensaComponent implements OnInit {
  id: any;
  iduser: any;
  recompensas = {
    recompensa: '',
    img: '',
    precio: ''
  };
  qrData = '';
  elementType: any;
  pedidoFinalizado = false;
  encriptar = {
    recompensa: '',
    user: ''
  };
  constructor(private AR: ActivatedRoute, private AU: AuthService, private CS: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.AR.snapshot.params['id'];
    this.iduser = this.CS.get('idUser');
    this.AU.recompensas(this.id).subscribe((data: any)=>{
      console.log(data);
      this.recompensas=data;
      this.pedidoFinalizado = false;
    });
    this.AU.encriptar(this.id,this.iduser).subscribe((data: any)=>{
      console.log(data);
      this.encriptar = data;
    });
  }

  finalizar(){
    this.qrData+=this.encriptar.recompensa;
    this.qrData+=', ' + this.encriptar.user;
    this.pedidoFinalizado = true;

  }

  salir(){
    this.CS.deleteAll();
    this.router.navigate(['/login']);
  }

}
