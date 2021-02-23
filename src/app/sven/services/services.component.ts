import { Component, OnInit } from '@angular/core';
import { ServiceSchedule } from 'src/app/model/service-schedule';
import { ScheduleVisitService } from '../schedule-visit.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  model = new ServiceSchedule();
  error: {
    errorTitle: null,
    errorDesc: null
  };
  days= [];
  time= [];
  
  constructor(private scheduleVisitService: ScheduleVisitService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.model.days = this.days;
    this.model.time = this.time;
    console.log(this.model);
    
    
    return this.scheduleVisitService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  }


  onChangeScheduleDay(day: string, isChecked: boolean) {
    //need mapping to remove not needed data
   if(isChecked){
      this.days.push(day);
      console.log(this.days);
   }
  }

  onChangeScheduleDayTime(time: string, isChecked: boolean){
    if(isChecked){
      this.time.push(time);
    }
  }

  
}
