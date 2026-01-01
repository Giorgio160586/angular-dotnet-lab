import { HttpContextToken, HttpInterceptorFn } from "@angular/common/http";

export const ADD_AUTHOTIZATION = new HttpContextToken(
  () => true
)

export const HttpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const addAuth = req.context.get(ADD_AUTHOTIZATION);
  
  const authRequest = addAuth ? req.clone({
    // setHeaders: {
    //   Authorization: `Bearer ${auth.token()}` 
    // }
  }) : req;
  
  return next(authRequest);
};