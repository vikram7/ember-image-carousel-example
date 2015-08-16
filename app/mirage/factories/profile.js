import Mirage/*, {faker} */ from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  name: faker.list.cycle('Fry', 'Bender', 'Leela', 'Zoidberg'),
  imageUrl: faker.list.cycle(
    'http://i.imgur.com/RYSCYTy.jpg',
    'http://i.imgur.com/n0LAiay.jpg',
    'http://i.imgur.com/0j3cEnX.jpg',
    'http://i.imgur.com/P3GptOE.jpg'
  )
});
