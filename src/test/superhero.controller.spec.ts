import { SuperheroController } from '../superhero.controller';

describe('SuperheroController', () => {
  let controller: SuperheroController;

  beforeEach(() => {
    controller = new SuperheroController();
  });

  it('should return superheroes sorted by humility score', () => {
    // Mock superhero data
    const superheroes = [
      { name: 'Iron Man', superpower: 'Genius-level intellect', humilityScore: 5 },
      { name: 'Captain America', superpower: 'Super Soldier', humilityScore: 9 }
    ];

    // Add superheroes to the controller's internal storage
    (controller as any).superheroes = superheroes;

    // Get sorted superheroes
    const result = controller.getSuperheroes();

    // Validate sorting
    expect(result[0].name).toBe('Captain America');
    expect(result[1].name).toBe('Iron Man');
  });
});
