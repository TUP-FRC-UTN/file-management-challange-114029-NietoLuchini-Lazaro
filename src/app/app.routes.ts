import { Routes } from '@angular/router';
import { CreateFileComponent } from './create-file/create-file.component';
import { ListFilesComponent } from './list-files/list-files.component';

export const routes: Routes = [
    {path:'create', component: CreateFileComponent},
    {path:'list', component: ListFilesComponent}
];
