import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "capitalize" })
export class capitalizePipe implements PipeTransform {
  transform(value: string): string {
    value = value.toLowerCase();

    let names = value.split(" ");
    for (let i in names) {
      names[i] = names[i][0].toUpperCase() + names[i].substr(1);
    }

    return names.join(" ");
  }
}
