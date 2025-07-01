import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject} from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public db!: SQLiteObject;

  // observable
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toastController: ToastController) {
    this.initDatabase();
  }

  // Método público para inicializar la base de datos desde fuera
  public init() {
    this.initDatabase();
  }

  private initDatabase() {
    this.sqlite.create({
      name: 'resqfood.db',
      location: 'default'
    }).then ((db: SQLiteObject) => {
      this.db = db;
      this.createTables();
      this.isDBReady.next(true); // true cuando la base de datos esté lista
      this.presentToast ('Base de datos y tabla creadas con éxito');
    }).catch(error => console.log(error));
  }

  private createTables() {
    this.db.executeSql(
      `CREATE TABLE IF NOT EXIST usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        usuario TEXT,
        password TEXT,
        nombre TEXT,
        correo TEXT
      )`,[])
    .then (() => this.presentToast ('Table created'))
    .catch(error => this.presentToast('Error creating table' + error));
  }

  validarUsuario(usuario: string, password: string) {
    return this.db.executeSql('SELECT * FROM usuarios WHERE usuario = ? AND password = ?', [usuario, password])
     .then ((res) => {
       if (res.rows.length > 0) {
          return res.rows.item(0); // retornar el primer usuario que coincide
       } else {
        return null; // retorna null si no se encontró ningun usuario
       }
     })
     .catch(error => this.presentToast('Error al obtener usuario por credenciales:' + error));
  }

  insertUsuario(nombre: string, apellido: string, usuario: string, password: string, selectedOption: string, selectedDate: string, correo: string){
    return this.db.executeSql(`
      INSERT INTO usuarios (nombre, usuario, password, correo) VALUES (?,?,?,?,?,?);
    `, [nombre, usuario, password, selectedOption, selectedDate, correo])
    .then(() => this.presentToast('Usuario insertado correctamente'))
    .catch(error => this.presentToast('Error al insertar usuario:'+ error));
  }

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  getIsDBReady() {
    return this.isDBReady.asObservable();
  }

}
