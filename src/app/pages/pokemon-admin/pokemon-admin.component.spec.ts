import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAdminComponent } from './pokemon-admin.component';

describe('PokemonAdminComponent', () => {
  let component: PokemonAdminComponent;
  let fixture: ComponentFixture<PokemonAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonAdminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PokemonAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
