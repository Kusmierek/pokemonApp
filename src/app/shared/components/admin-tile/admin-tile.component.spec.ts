import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AdminTileComponent } from "./admin-tile.component";
import { Pokemon } from "../../types/pokemon";

describe("AdminTileComponent", () => {
  let component: AdminTileComponent<Pokemon>;
  let fixture: ComponentFixture<AdminTileComponent<Pokemon>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminTileComponent<Pokemon>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
