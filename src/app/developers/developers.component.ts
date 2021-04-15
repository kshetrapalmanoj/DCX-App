import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }
  addDeveloper():void{
    this.router.navigate(['addDeveloper'],{relativeTo:this.route})
  }
  updateDeveloper():void{
    this.router.navigate(['updateDeveloper'],{relativeTo:this.route});
  }
  getDeveloper():void{
    this.router.navigate(['getDeveloper'],{relativeTo:this.route});
  }
  ngOnInit(): void {
    // this.getDeveloper()
  }

}
