import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import setting from 'src/setting';

type Language = {
  name: string;
  is_static: boolean;
  on_trending: boolean;
  birth_year: number;
};

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.scss']
})
export class AjaxComponent {

  show = false;
  languages: Language[] = [];

  constructor(private http: HttpClient) {}

  getLanguages() {
    const params = new HttpParams().set('is_static', 'true');
    this.http.get<Language[]>(`${setting.subdirectory}/assets/languages.json`, { params }).subscribe(response => {
      this.show = true;
      this.languages = response.sort((a, b) => b.birth_year - a.birth_year);
    });
  }

}
