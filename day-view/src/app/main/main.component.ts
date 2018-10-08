import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @ViewChild('id01') id01: ElementRef;
  @ViewChild('starttime') starttime: ElementRef;
  @ViewChild('addEditBtn') addEditBtn: ElementRef;
  public arr = [];
  public str = [];
  public total = 24;
  public fg: FormGroup;
  public map = new Map();
  constructor(  ) {  }

  public rows() {
    for (let i = 0; i < this.total; i++) {
      this.map.set(i, []);
      this.arr.push(i);
      this.str.push('');
    }
    // console.log(this.map.keys());
    // return this.arr;
  }

  private createFormGroup(): void {
    this.fg = new FormGroup({
      label: new FormControl('', Validators.required),
      start_time: new FormControl('', Validators.required),
      end_time: new FormControl('', Validators.required)
    });
  }

  public getKeys() {
    return Array.from(this.map.keys());
  }

  public getValues() {
    return Array.from(this.map.values());
  }

  ngOnInit() {
    this.rows();
    this.createFormGroup();
  }

  private modifyRows(start, end, label): void {
  /*  for (let k = 0; k < this.str.length; k++) {
      this.str[k] = '';
    }*/
    for (let i = start; i <= end; i++) {
      let arr = this.map.get(i);
      arr.push(label);
      this.map.set(i, arr);
      // this.str[i] = label;
    }
  }

  public addDetails(fg: FormGroup) {

     const start_hr = +fg.value.start_time.split(':')[0],
           start_mn = +fg.value.start_time.split(':')[1],
           end_hr =  +fg.value.end_time.split(':')[0],
           end_mn = +fg.value.end_time.split(':')[1];

       if (start_hr > end_hr) {
         alert('end time should be after start time');
       } else if ( start_hr === end_hr) {
         if (start_mn > end_mn) {
           alert('end time should be after start time');
         }
     } else {
         this.modifyRows(start_hr, end_hr, this.fg.value.label);
         this.fg.reset(true);
         this.id01.nativeElement.style.display = 'none';
       }
  }

  public hideDialogBox() {
    this.id01.nativeElement.style.display = 'none';
  }
  public showDialogBox() {
    this.id01.nativeElement.style.display = 'block';
  }
}
