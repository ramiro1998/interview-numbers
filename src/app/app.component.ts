import { Component, OnInit } from '@angular/core';
import { Numero } from './array.interface';
import { NumeroModified } from './arrayModified.interface';
import { ResultadoLabel } from './resultadoLabel.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {


  array: Numero[] = [
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


  getCriteria(array: Numero[]): void {
    array.forEach((element: NumeroModified) => {
      const value = element.number
      let label = ''

      if (typeof (value) !== 'number') {
        label = ResultadoLabel.IDK
      } else {

        const isNegative = value < 0
        let tag = ''

        if (value % 3 !== 0 || value % 5 !== 0) tag = ResultadoLabel.IDK
        if (value % 3 === 0) tag = ResultadoLabel.FIZZ
        if (value % 5 === 0) tag = ResultadoLabel.BUZZ
        if (value % 3 === 0 && value % 5 === 0) tag = ResultadoLabel.FIZZBUZZ
        if (isNegative) tag = 'minus' + tag

        label = tag
      }

      element.newProperty = label

      console.log(`elemento con n° ${element.number}: ${label}`)

    })

    console.log('nuevos elementos', array)
  }

}
