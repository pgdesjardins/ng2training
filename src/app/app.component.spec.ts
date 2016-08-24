import {AppComponent} from './app.component';
import {TestBed} from '@angular/core/testing';

describe('App', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({declarations: [AppComponent]});
    });

    it('should work', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
    });
});
