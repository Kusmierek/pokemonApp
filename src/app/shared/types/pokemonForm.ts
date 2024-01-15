import { FormControl } from "@angular/forms";

export interface PokemonForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  imageUrl: FormControl<string | null>;
  attack: FormControl<number | null>;
  defense: FormControl<number | null>;
  intelligence: FormControl<number | null>;
  agility: FormControl<number | null>;
}
