import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ReportDataService } from '../report-data.service';


@Component({
  selector: 'app-category-breakup-report',
  templateUrl: './category-breakup-report.component.html',
  styleUrls: ['./category-breakup-report.component.scss']
})
export class CategoryBreakupReportComponent implements OnInit {

  data: any = [];
  totalRecords: number;
  page:number = 1;
  searchValue: any;

  constructor(private service: ReportDataService) {

  }


  
  // ELEMENT_DATA: CategoryBreakupReport[] = [];

  // displayedColumns: Number[] = ['totalRecord', 'recordCount'];
  // dataSource = new MatTableDataSource<CategoryBreakupReport>(this.ELEMENT_DATA)

  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  // dataSource = ELEMENT_DATA;


  ngOnInit() {
    //this.getReport();


      this.service.categoryReport().subscribe((result:any) => {
      // console.log(result['data'])
      let data = result['data'];
      let data1 = data['recordList'];
      let data2 = data1['Bund Garden'];
      let data3 = data2['Orchid'];

      this.data = data3
      
      this.totalRecords = data.length;
      //this.response = response.data.roleList[0]
      // this.data = data.recor
      console.log(data3)
      //this.totalRecords = data.recordList.length
      })

  

  }



  // public getReport(){
  //   let resp = this.service.categoryReport();
  //   resp.subscribe(report=>this.dataSource.data=report as CategoryBreakupReport[]);
  // }

}
