import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {AlertController} from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
  user = {
    name: 'user',
    pw: 'user'
  };
 
  constructor(private authService : AuthService, private router: Router, private alertCtrl: AlertController, private dataService: DataService) { }

  ngOnInit() {
  }

  loginUser(){
    this.authService.login(this.user.name, this.user.pw)
        .then(success => {
          if (success) {
            console.log(`le role newsPage est:${this.authService.currentUser.role}`);
            let data = this.authService.currentUser.role;
                      
            this.dataService.setData('role', data );
            this.router.navigateByUrl('/tabs/tab1/role');
          } 
        }).catch(err =>{
          this.presentAlert();
        });
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my custom-class',
      header: 'Erreur de Login',
      message: 'Veuillez vérifier vos informations de connexion',
      buttons: ['OK']
    });
    alert.present();
   
  }
}
