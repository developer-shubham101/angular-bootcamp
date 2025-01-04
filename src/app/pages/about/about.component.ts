import { Component, OnInit } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { UserService  } from '../../service/user.service';
import { User } from '../../store/models/user.model';

@Component({
  selector: 'app-about', 
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent implements OnInit {
  user: User | null = null;
  editMode = false;
  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    const id = '6778f3b4d43aa7b2251626ce'; //this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(id).subscribe(
        (user) => {
          this.user = user;
        },
        (error) => {
          console.error('Error fetching user details', error);
        }
      );
    }
  }
  enableEditMode(): void {
    this.editMode = true;
  }
  disableEditMode(): void {
    this.editMode = false;
  }
  onSubmit(): void {
    if (this.user) {
      this.userService.updateUser(this.user._id, this.user).subscribe(
        (updatedUser) => {
          this.user = updatedUser;
          this.disableEditMode();
        },
        (error) => {
          console.error('Error updating user details', error);
        }
      );
    }
  }
}
