import {Component, OnInit } from '@angular/core';
import {DevelopersService} from '../../developers.service';
import {developer}  from '../../developers';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-get-developers',
  templateUrl: './get-developers.component.html',
  styleUrls: ['./get-developers.component.css']
})
export class GetDevelopersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router,private developerService:DevelopersService) { }

  developers:developer[]=[];
  dataSource = this.developers;
  p:number=1
  limit:number=5
  total:number;

  getDevelopers():void{
    // let offset=(p-1)*this.limit
    this.developerService.getDevelopers().subscribe((info)=>{
      this.developers = info.map((data)=>({
        full_name:data.full_name,
        email:data.email,
        password:data.password,
        group:data.group
      }))
    });
  }

  ngOnInit(): void {
    this.getDevelopers();
  }

  updateDeveloper():void{
    this.router.navigate(['updateDeveloper'],{relativeTo:this.route});
  }

}
