import { HttpParameterCodec, HttpParams } from "@angular/common/http";

export function getHttpParams(reqObj: any) : HttpParams {
    let httpParams = new HttpParams();
    if(!!reqObj){
        Object.keys(reqObj).forEach(key => {
            if(!!reqObj[key]){
                httpParams = httpParams.append(key, reqObj[key]);
            }
        });
    }
    return httpParams;
}