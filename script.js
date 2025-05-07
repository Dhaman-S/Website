const plants = [
  {
    name: 'Fiddle Leaf Fig',
    price: '$25',
    image: 'images/fiddle-leaf.jpg'
  },
  {
    name: 'Snake Plant',
    price: '$18',
    image: 'images/snake-plant.jpg'
  },
  {
    name: 'Monstera Deliciosa',
    price: '$30',
    image: 'images/monstera.jpg'
  }
];

const container = document.getElementById('plants-container');

plants.forEach(plant => {
  const card = document.createElement('div');
  card.className = 'plant-card';
  card.innerHTML = `
    <img src="${plant.image}" alt="${plant.name}">
    <h3>${plant.name}</h3>
    <p>Price: ${plant.price}</p>
  `;
  container.appendChild(card);
});