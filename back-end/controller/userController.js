const data = require('../data.json');
const dogData = data.posts;

//===============================
exports.getUsers = (req, res) => {
  res.status(200).json(dogData);
};

//===============================
exports.getUser = (req, res) => {
  const id = req.params.id;

  const user = dogData.find((user) => user.id === id);

  return res.status(200).json(user);
};

//===============================
exports.createUser = (req, res) => {
  return res.status(200).json([
    ...dogData,
    {
      id: '7',
      name: 'Soul Kitchen Party',
      slug: 'soul-kitchen-party',
      venue: 'Onyx Club',
      address: '60 Gramercy Park N #2 New York, New York(NY), 10010',
      performers: 'A-Trak, Nightmares on Wax, Rakim, Jay Electronica',
      date: 'July 2, 2021',
      time: '8:00 PM EST',
      description:
        'Dope party which features Hip Hop legends, emerging artists and world-class turntablists',
      image: '/images/sample/event7.jpg',
    },
  ]);
};

//===============================
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = dogData.find((user) => user.id === id);

  return res.status(200).json({
    ...user,
    likes: '50',
  });
};

exports.deleteUser = (req, res) => {
  return res.status(200);
};
