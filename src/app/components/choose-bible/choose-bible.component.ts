import { BiblesService } from './../../services/bibles.service';
import { Component, OnInit } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-choose-bible',
  templateUrl: './choose-bible.component.html',
  styleUrls: ['./choose-bible.component.css'],
})
export class ChooseBibleComponent implements OnInit {
  currentYear: number = new Date().getFullYear();
  Bibles: any = [];
  selectedbibleV: any;
  selectedbibleB: any;
  selectedbibleC: any;
  modifiedSelect: any;
  Books: any = [];
  Chapters: any = [];
  hide: boolean = true;
  hideB: boolean = true;
  Cont: boolean = false;
  Content: any = {};
  BibleVersion: any;

  constructor(
    private formbulider: FormBuilder,
    private rest: BiblesService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit(): void {
    this.BibleVersion = this.formbulider.group({
      Bibleversion: ['', [Validators.required]],
      Book: ['', [Validators.required]],
      Chapter: ['', [Validators.required]],
    });
    this.getFullBible();
  }

  getFullBible() {
    this.ngxService.start();
    this.Bibles = [];
    this.rest.get_full_bibles().subscribe((data: {}) => {
      console.log(data);
      this.Bibles = data;

      this.selectedbibleV = data[0].id;
      this.ngxService.stop();
    });
  }
  onBibleSelected(val: any) {
    this.getbibleId(val);
  }
  getbibleId(val: any) {
    this.Books = [];
    this.ngxService.start();
    this.rest.get_books(val).subscribe((data: {}) => {
      console.log(data);
      this.Books = data;

      this.selectedbibleB = data[0].id;
      this.ngxService.stop();
    });
  }
  getBookId(bid: any, blid: any) {
    this.Chapters = [];
    this.ngxService.start();
    this.rest.get_book(bid, blid).subscribe((data: {}) => {
      console.log(data);
      this.Chapters = data;

      this.hide = false;
      this.ngxService.stop();
    });
    console.log('clicked books' + '----' + bid + '----' + blid);
  }

  getChapter(blid: any, chid: any) {
    this.Content = {};
    this.ngxService.start();
    this.rest.get_chapter(blid, chid).subscribe((data: {}) => {
      console.log(data);
      this.Content = data;

      this.Cont = true;
      this.hideB = false;
    });
    this.selectedbibleC = this.Content;
    this.ngxService.stop();
    console.log('clicked Chapter' + '----' + blid + '----' + chid);
  }
  back() {
    this.hideB = true;
    this.hide = true;
    this.Cont = false;
  }
}
