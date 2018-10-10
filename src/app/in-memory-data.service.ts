import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const exhibitors = [
      { id: 11, companyname: 'Mr. Nice' },
      { id: 12, companyname: 'Narco' },
      { id: 13, companyname: 'Bombasto' },
      { id: 14, companyname: 'Celeritas' },
      { id: 15, companyname: 'Magneta' },
      { id: 16, companyname: 'RubberMan' },
      { id: 17, companyname: 'Dynama' },
      { id: 18, companyname: 'Dr IQ' },
      { id: 19, companyname: 'Magma' },
      { id: 20, companyname: 'Tornado' }
    ];
    return {exhibitors};
  }
}