import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private _TOKEN_KEY = 'Token';

  constructor(private _router: Router) {}

  private _userAuthStatusChange: EventEmitter<boolean> = new EventEmitter();

  emitUserAuthStatusChangeEvent() {
    this._userAuthStatusChange.emit(this.isAuthenticated());
  }

  getUserAuthStatusChangeEmitter() {
    return this._userAuthStatusChange;
  }

  public setToken(value: any): void {
    sessionStorage.setItem(this._TOKEN_KEY, value);
  }

  public getToken(): any {
    return sessionStorage.getItem(this._TOKEN_KEY);
  }

  public clearToken(): void {
    sessionStorage.removeItem(this._TOKEN_KEY);
  }

  private _getTokenData(): any {
    const jwtToken: string | undefined = this.getToken();
    if (!jwtToken) return;
    return JSON.parse(atob(jwtToken.split('.')[1]));
  }

  public getUserInfo(): any {
    const tokenData: any = this._getTokenData();
    if(!tokenData) return;
    return { id: parseInt(tokenData?.id), role: tokenData?.role };
  }

  public isTokenExpired(): boolean {
    const tokenData: any = this._getTokenData();
    if (!tokenData) return true;
    return Date.now() > (tokenData?.exp || 0) * 1000;
  }

  public isAuthenticated(): boolean {
    if (this.isTokenExpired()) return false;
    //if (this._router.url === "/") return true;
    // //const userInfo: any = this.getUserInfo();
    // if(!userInfo) return false;
    // if(this._router.url.split("/").includes((userInfo?.role as string).toLowerCase())) return true;
    // this._router.navigate([(userInfo?.role as string).toLowerCase()]);
     return true;
  }

  public logout(): void {
    this.clearToken();
    this.emitUserAuthStatusChangeEvent();
    this._router.navigate(['/']);
  }

  public handleLoginSuccess(token: string, route: any[]): void {
    this.setToken(token);
    this.emitUserAuthStatusChangeEvent();
    this.navigate(route);
  }

  public navigate(route: any[]) {
    this._router.navigate(route);
  }
}
