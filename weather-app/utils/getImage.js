const images ={
    'Initial': require('../assets/Initial.jpeg'),
    'Heavy Rain': require('../assets/Rain.jpeg'),
    'Light Cloud': require('../assets/LightCloud.jpeg'),
    'Heavy Cloud': require('../assets/HeavyCloud.jpeg'),
    'Clear': require('../assets/Clear.jpg'),
    'Thunderstorm': require('../assets/Thunderstorm.jpeg'),
    'Showers': require('../assets/Showers.jpeg'),
    'Light Rain': require('../assets/LightRain.png'),
};

export default weather => images[weather];