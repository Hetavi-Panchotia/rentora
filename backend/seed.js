require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');
const Property = require('./src/models/Property');

const properties = [
  {
    title: 'Modern Downtown Loft',
    description: 'A beautiful loft in the heart of the city. Perfect for professionals.',
    price: '$2,400/mo',
    location: 'Downtown, NYC',
    rating: 4.8,
    reviewsCount: 128,
    tags: ['Safe', 'Quiet', 'Pet-friendly'],
    images: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Cozy Studio Apartment',
    description: 'Compact and cozy studio in Brooklyn. Lots of natural light.',
    price: '$1,800/mo',
    location: 'Brooklyn, NYC',
    rating: 4.6,
    reviewsCount: 89,
    tags: ['Renovated', 'Natural Light'],
    images: ['https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80']
  },
  {
    title: 'Spacious 2BR with View',
    description: 'High floor apartment with amazing Manhattan views.',
    price: '$3,200/mo',
    location: 'Manhattan, NYC',
    rating: 4.9,
    reviewsCount: 156,
    tags: ['City View', 'Modern'],
    images: ['https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=80']
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/rentora');
    console.log('MongoDB Connected for seeding...');

    // Clear existing
    await Property.deleteMany({});
    
    // Get a user to own the properties
    let user = await User.findOne();
    if (!user) {
      console.log('No user found, creating a seed user...');
      user = new User({
        username: 'admin',
        email: 'admin@rentora.com',
        password: 'password123'
      });
      await user.save();
    }

    const propertiesWithUser = properties.map(p => ({ ...p, owner: user._id }));
    await Property.insertMany(propertiesWithUser);

    console.log('Database Seeded! 🚀');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();
