import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap, catchError, of } from "rxjs";
import { environment } from "src/app/environment/environment.prod";
import { IRegister } from "../../types/registration";

@Injectable({
  providedIn: "root",
})
export class UserService {
  baseUrl = environment.baseUrl;
  private registerLink = "/api/User/register";

  constructor(private http: HttpClient) {}
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
    responseType: "text" as "json",
  };

  register(user: IRegister): Observable<IRegister> {
    const body = JSON.stringify(user);

    console.log(body);

    return this.http
      .post<IRegister>(
        "https://localhost:7171/api/User/register",
        body,
        this.httpOptions
      )
      .pipe(
        tap((registerUser: IRegister) =>
          console.log(`added hero w/ id=${registerUser.name}`)
        ),
        catchError(this.handleError<IRegister>("ADD"))
      );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
