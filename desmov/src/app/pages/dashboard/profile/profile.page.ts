import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  imports: [CommonModule, ReactiveFormsModule, 
    IonHeader,IonToolbar,IonTitle,IonContent,IonItem,IonLabel,IonInput,IonButton,IonIcon],
})
export class ProfilePage implements OnInit {

  profileForm!: FormGroup;
  avatarBase64: string | null = '';

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      Telefono: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  ngOnInit() {
    addIcons({ 'person-outline': personOutline });

    const sessionData = localStorage.getItem('session');

    if (sessionData) {
      const session = JSON.parse(sessionData);

      this.profileForm.patchValue({
        Nombre: session.first_name,
        Apellido: session.last_name,
        email: session.email,
        Telefono: session.phone
      });

      if (session.avatar && session.avatar !== '') {
        this.avatarBase64 = session.avatar;
      }
    }
  }

  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulario enviado', this.profileForm.value);
    }
  }

  async takePhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });  
    this.avatarBase64 = image.base64String || null;
  }
}
