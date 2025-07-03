import { Component, OnInit } from '@angular/core';
import { numero } from './array.interface';
import { numeroModified } from './arrayModified.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {


  array: numero[] = [
    {
      name: "Object 1",
      number: 7
    },
    {
      name: "Object 2",
      number: 3
    },
    {
      name: "Object 3",
      number: 5
    },
    {
      name: "Object 4",
      number: 15
    },
    {
      name: "Object 5"
    },
    {
      name: "Object 6",
      number: -12
    },
    {
      name: "Object 6.5",
      number: -30
    },
    {
      name: "Object 7",
      number: -7
    }]

  ngOnInit(): void {
    console.log('Hola mundo')
    this.getCriteria(this.array)
  }


  getCriteria(array: numero[]) {
    array.forEach((element: numeroModified) => {
      const idk = 'idk'
      const number3 = 'fizz'
      const number5 = 'buzz'

      const elemento = element.number

      if (elemento) {
        if (elemento < 0) {
          console.log('minus' + idk, element.number)
          element.newProperty = 'minus' + idk
        } else if (elemento % 3 === 0 && elemento % 5 === 0) {
          console.log(number3 + number5, element.number)
          element.newProperty = number3 + number5
        } else if (elemento % 3 === 0) {
          console.log(number3, element.number)
          element.newProperty = number3
        } else if (elemento % 5 === 0) {
          console.log(number5, element.number)
          element.newProperty = number5
        } else {
          console.log(idk, element.number)
          element.newProperty = idk
        }
        return
      }

      console.log(`el elemento ${element.name} no tiene numero`)
    });
    console.log('element now', array)
  }

}
