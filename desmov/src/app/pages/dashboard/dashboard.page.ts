import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { homeOutline, personOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, RouterLink]
})
export class DashboardPage implements OnInit {

  constructor() { 
    addIcons({ 'person-outline': personOutline, 'settings-outline': settingsOutline, 'home-outline': homeOutline });
  }

  ngOnInit() {
  }

}
