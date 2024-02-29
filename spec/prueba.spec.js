describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
});

const { Repository } = require('../scripts/index.js')

describe('La clase Repository', () => {
  it('Debe ser una clase', () => {
    expect(typeof Repository.prototype).toBe('object')
  })

  it('Debe tener el metodo getAllActivities()', () => {
    const repository = new Repository
    expect(repository.getAllActivities).toBeDefined();
  })

  it('Debe tener el metodo createActivity()', () => {
    const repository = new Repository
    expect(repository.createActivity).toBeDefined();
  })

  it('Debe tener el metodo deleteActivity(id)', () => {
    const repository = new Repository
    expect(repository.deleteActivity).toBeDefined();
  })
})
