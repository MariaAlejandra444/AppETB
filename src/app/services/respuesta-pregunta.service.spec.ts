import { TestBed } from '@angular/core/testing';

import { RespuestaPreguntaService } from './respuesta-pregunta.service';

describe('RespuestaPreguntaService', () => {
  let service: RespuestaPreguntaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RespuestaPreguntaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
