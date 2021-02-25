import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportDataService {



  constructor(private http:HttpClient) { }

  // public categoryReport() {
  //  return this.http.get("http://devourin-api-qa.chain-expert.com/report/generatecategorybreakupreport?report_type=report&tenant_id=23&branch_id=-1&branchBrand_id=-1&search_text=undefined&start_date=2020-6-15&end_date=2020-6-30&sort_order=asc"); 
  // }
  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNCwicm9sZV9pZCI6MzUsImlhdCI6MTYxNDIzNTExMCwiZXhwIjoxNjE0MjQ1MTEwfQ.p65Yi9szlk5s9W7c27U2JguNZQiyAT7RaKhsDh_1pbw'


  categoryReport() {
    const url = 'http://devourin-api-qa.chain-expert.com/report/generatecategorybreakupreport?report_type=report&tenant_id=23&branch_id=-1&branchBrand_id=-1&search_text=undefined&start_date=2020-6-15&end_date=2020-6-30&sort_order=asc'


    
    var reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.token
    });
    return this.http.get<any[]>(url, { headers: reqHeader });
    }
}
