import {Component, OnInit } from '@angular/core';
import {DevelopersService} from '../../developers.service';
import {developer}  from '../../developers';
import {ActivatedRoute,Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-get-developers',
  templateUrl: './get-developers.component.html',
  styleUrls: ['./get-developers.component.css']
})
export class GetDevelopersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private developerService:DevelopersService,private http:HttpClient) { }

  developers:any

  p:number
 totalItems:any
 itemsPerPage:5

  getDevelopers(page):void{
    // let offset=(p-1)*this.limit
    const newurl=`http://localhost:3000/api/developer?page=${page}&size=${this.itemsPerPage}`
    this.http.get<developer[]>(newurl).subscribe((info)=>{
      // console.log(info)
      this.developers = info.map((data)=>({
        full_name:data.full_name,
        email:data.email,
        password:data.password,
        group:data.group
      }))
    });

  }
  getPage(page)
  {
    const newurl=`http://localhost:3000/api/developer?page=${page}&size=${this.itemsPerPage}`

    this.http.get<developer[]>(newurl).subscribe((info)=>{
      this.developers = info.map((data)=>({
        full_name:data.full_name,
        email:data.email,
        password:data.password,
        group:data.group
      }))
    });
  }

  ngOnInit(): void {
    this.getDevelopers(2);
  }

  updateDeveloper():void{
    this.router.navigate(['updateDeveloper'],{relativeTo:this.route});
  }

}
