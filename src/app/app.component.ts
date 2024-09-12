import { Component } from '@angular/core';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { ListFilesComponent } from './list-files/list-files.component';
import { RouterOutlet } from '@angular/router';
import { CreateFileComponent } from './create-file/create-file.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListFilesComponent,RouterOutlet,CreateFileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  files: FileItem[] = FILE_LIST;
  title = 'file-management';
}
