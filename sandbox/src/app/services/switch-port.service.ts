import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Switch } from '../modules/main/switch';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SwitchPortService {
  getSwitches(): Observable<Switch> {
    return of(
        {
          "name": "sw_1",
          "fiber": {
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          },
          "cooper": {
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          }
        },
        {
          "name":"sw_2",
          "fiber": {
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          },
          "cooper": {
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          }
        },
        {
          "name": "sw_3",
          "fiber": {    
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          },
          "cooper": {
            "1G": {
              "total": 20,
              "usage": 12
            },
            "10G": {
              "total": 32,
              "usage": 18
            },
            "100G": {
              "total": 5,
              "usage": 3
            }
          }
        }
    ).pipe(
      map((m)=>{
        let sw:Switch = {
          name:m.name,
          cooper:m.cooper,
          fiber:m.fiber
        }
        return sw as Switch}) 
    );
  }
  constructor() {}
}
