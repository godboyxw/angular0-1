import { Component, OnInit , Inject} from '@angular/core';
//引入AuthService
// import { AuthService } from '../core/auth.service';

@Component({
  selector: 'app-login',
  // template: `
  //   <div>
  //     <input #userNameRef type="text"/> <br/>
  //     <input #passwordRef type="password"/> <br/>
  //     <button (click)="onClick(userNameRef.value,passwordRef.value)">login</button>
  //   </div>
  // `,
  template:`
      <div>
        <form #formRef="ngForm" (ngSubmit)="onSubmit(formRef.value)">
          <fieldset ngModelGroup="login">
            <input type="text" placeholder="请输入用户名"
              name="username"
              [(ngModel)]="username"
              #usernameRef="ngModel"
              (focus)="onFocus1()"
              required
              minlength="3"
              />
              <div *ngIf="usernameRef.errors?.required">this is required</div>
              <div *ngIf="usernameRef.errors?.minlength">should be at least 3 charactors</div>
            <input type="password" placeholder="请输入密码"
              name="password"
              [(ngModel)]="password"
              #passwordRef="ngModel"
              (focus)="onFocus2()"
              required
              />
              <div *ngIf="passwordRef.errors?.required">this is required</div><br/>
            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>

  `,
  styles: [`
    p{
      color:pink;font-size:30px
    }
    input.ng-invalid{
      border:1px solid red;
      color:red;
    }
    input.ng-valid{
      border:1px solid green;
      color:#000;
    }
    ::-webkit-input-placeholder{
      color:#ccc;
    }
    :-moz-placeholder{
      color:#ccc;
    }
    ::-moz-placeholder{
      color:#ccc;
    }
  `],

  //在providers中配置AuthService
  // providers:[AuthService]
})
export class LoginComponent implements OnInit {
  username:string = ''
  password:string = ''

  //声明成员变量，其类型为AuthService
  // service : AuthService

  // constructor() {
  //   // this.service = new AuthService();
  // }

  //在构造函数中将AuthService示例注入到成员变量service中
  //而且我们不需要显式声明成员变量service了
  // constructor(private service: AuthService) {
  // }

  constructor(@Inject('auth') private service) {
  }

  ngOnInit() {
  }

  // onClick(userName,password){
  //   // console.log(userName,password)
  //   // console.log('username:' + userName + "\n\r" + "password:" + password);

  //   //调用service的方法
  //   console.log('auth result is: ' + this.service.loginWithCredentials(userName, password));
  // }

  // onClick() {
  //   console.log(this.username,this.password)
  //   console.log('auth result is: '
  //     + this.service.loginWithCredentials(this.username, this.password));
  // }

  onSubmit(formValue){
    console.log(formValue);
    console.log('auth result is: ' + this.service.loginWithCredentials(formValue.login.username,formValue.login.password))
  }
  onFocus1(){
    this.username = ""
  }
  onFocus2(){
    this.password = ""
  }
}
