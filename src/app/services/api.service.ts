import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  constructor(private http: Http){
    console.log('PostsService Initialized ...');
  }

  uploadFile(url: string, params: Array<string>, files: Array<File>){
    return new Promise((resolve, reject) => {
        var formData: any = new FormData();
        var xhr = new XMLHttpRequest();
        for(var i = 0; i < files.length; i++) {
            formData.append("uploads[]", files[i], files[i].name);
            console.log(formData[i]);
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    resolve(JSON.parse(xhr.response));
                } else {
                    reject(xhr.response);
                }
            }
        }
        xhr.open("POST", url, true);
        xhr.send(formData);
    });
  }

  getService(url){
    return this.http.get(url)
            .map(res => res.json());
  }

  postService(url, body){
    return this.http.post(url, body)
            .map(res => res.json());
  }
}
