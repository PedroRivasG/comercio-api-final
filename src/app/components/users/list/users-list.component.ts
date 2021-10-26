import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUserResponse, UsersService } from '../../../services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  usuarios: IUserResponse[] = [];
  errorMessage: string = '';
  constructor(public userService: UsersService, public router: Router) {}

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.errorMessage = '';
    this.userService.getUsers().subscribe(
      (data: IUserResponse[]) => {
        this.usuarios = data;
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
      }
    );
  }

  verUsuario(userId: string) {
    this.router.navigateByUrl(`/users/${userId}`);
  }

  editarUser(userId: string) {
    this.router.navigateByUrl(`/users/edit/${userId}`);
  }

  eliminarUser(userId: string) {
    this.userService.eliminarUser(userId).subscribe(
      (data: any) => {
        location.reload();
      },
      (error: any) => {
        this.errorMessage = error.error.mensaje;
        if (error.status === 401) {
          this.router.navigateByUrl(`/error/unauthorized`);
        } else {
          this.router.navigateByUrl(`/error`);
        }
      }
    );
  }
}
