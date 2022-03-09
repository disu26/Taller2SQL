import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { CrearContactoComponent } from './components/crear-contacto/crear-contacto.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';

const appRoutes: Routes = [
  {path:'Listar',component:IndexComponent   },
  {path:'Crear',component: CrearContactoComponent  },
  {path:'Actualizar/:id', component:ActualizarComponent}
];

export const appRoutingProviders : any[]=[];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
export class AppRoutingModule { }
