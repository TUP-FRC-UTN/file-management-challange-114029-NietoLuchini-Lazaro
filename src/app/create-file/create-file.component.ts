import { Component, OnInit } from '@angular/core';
import { FileOwner, FileType,FileItem } from '../../models/file.item.model';
import { FILE_LIST, OWNERS } from '../../data/file.storage';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-file',
  standalone: true,
  imports: [FormsModule,NgFor,RouterOutlet,CommonModule],
  templateUrl: './create-file.component.html',
  styleUrl: './create-file.component.css'
})
export class CreateFileComponent implements OnInit{


  listType:string[]=[];
  listOwner:FileOwner[]=[]

  ngOnInit(): void {
    this.listType.push(FileType[FileType.FILE]); 
    this.listType.push(FileType[FileType.FOLDER]); 


    this.listOwner=OWNERS;
    console.log(this.listOwner);
  }

  name:String="";
  date!:Date;
  type:string="";
  owner!:FileOwner;


  saveFile(form:any):void{



    if(form.valid){

      const newFile : FileItem={
        id: (Math.random() * 1000).toString(), // Genera un id único
        name: form.value.name,
        creation: new Date(form.value.date),
        type: form.value.type,
        owners: [form.value.owner]
      }

      console.log(newFile);

      FILE_LIST.push(newFile);


    }
  }
}
