import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file.item.model';
import { FILE_LIST } from '../../data/file.storage';
import { CommonModule, NgFor } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-files',
  standalone: true,
  imports: [NgFor,CommonModule,RouterOutlet,FormsModule],
  templateUrl: './list-files.component.html',
  styleUrl: './list-files.component.css'
})
export class ListFilesComponent implements OnInit {

  constructor(private router: Router) {}

  listFiles:FileItem[]=[];

  ngOnInit(): void {
    this.listFiles=FILE_LIST.sort((a,b)=>a.name.localeCompare(b.name));
  }

  navegar(){
    this.router.navigate(['/create']);
  }

  selectedFileIds: { [key: string]: boolean } = {};


  processSelectedFiles(): void {
   
    const selectedIds = Object.keys(this.selectedFileIds).filter(id => this.selectedFileIds[id]);

    const confirmation=window.confirm("Are you sure?")
    if(confirmation){
      this.listFiles = this.listFiles.filter(file => !this.selectedFileIds[file.id]);
    
      this.listFiles = this.listFiles; 
    }


    
  

}}
