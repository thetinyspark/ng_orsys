import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  fit('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  fit('should contain a valid menu', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const list = compiled.querySelectorAll('li a');

  
    expect(list[0].textContent).toContain('Accueil');
    expect(list[1].textContent).toContain('Catalogue');
    expect(list[2].textContent).toContain('Panier');
    expect(list[3].textContent).toContain('Mon compte');
    expect(list[4].textContent).toContain('Random Stagiaire');
  });
});
