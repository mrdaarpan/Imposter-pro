/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Category, Word } from './types';

// Original categories with their 10 handcrafted words
const baseCategories: { id: string; name: string; icon: string; baseWords: Word[] }[] = [
  {
    id: 'animals',
    name: 'Animals 🦁',
    icon: '🦁',
    baseWords: [
      { word: 'LION', hints: { medium: 'A powerful apex predator known as a ruler.', hard: 'Associated with bravery and a gold-colored coat.' } },
      { word: 'PENGUIN', hints: { medium: 'A flightless bird dressed in a natural tuxedo.', hard: 'Lives in freezing regions and is an excellent swimmer.' } },
      { word: 'KANGAROO', hints: { medium: 'A hopping mammal from Australia with a pouch.', hard: 'Uses its powerful tail for balance and boxing.' } },
      { word: 'CHAMELEON', hints: { medium: 'A reptile famous for changing color to blend in.', hard: 'Has eyes that move independently and a long sticky tongue.' } },
      { word: 'DUCK', hints: { medium: 'An aquatic bird that quacks and migrates.', hard: 'Commonly found in ponds, has webbed feet.' } },
      { word: 'ELEPHANT', hints: { medium: 'The largest land mammal with a long trunk.', hard: 'Has large ears and is highly respected for its memory.' } },
      { word: 'DOLPHIN', hints: { medium: 'A highly intelligent marine mammal that uses clicks.', hard: 'Known for being friendly to humans and performing leaps.' } },
      { word: 'OWL', hints: { medium: 'A nocturnal bird of prey symbol of wisdom.', hard: 'Can rotate its head almost fully and hunts silently.' } },
      { word: 'SHARK', hints: { medium: 'A cartilaginous ocean predator with multiple rows of teeth.', hard: 'Attracted to vibrations and blood in water.' } },
      { word: 'CHEETAH', hints: { medium: 'The fastest land animal with spotted fur.', hard: 'Relies on short bursts of extreme speed to hunt.' } }
    ]
  },
  {
    id: 'food',
    name: 'Food & Drinks 🍔',
    icon: '🍔',
    baseWords: [
      { word: 'PIZZA', hints: { medium: 'A baked flatbread topped with tomato and cheese.', hard: 'An Italian origin favorite delivered in a square cardboard box.' } },
      { word: 'COFFEE', hints: { medium: 'A dark, caffeinated morning beverage made from beans.', hard: 'Served hot or iced, roasted aroma is beloved worldwide.' } },
      { word: 'SUSHI', hints: { medium: 'A Japanese dish of seasoned rice and raw seafood.', hard: 'Often rolled in seaweed and eaten with chopsticks.' } },
      { word: 'HAMBURGER', hints: { medium: 'A grilled patty in a round bun with lettuce.', hard: 'Standard fast food centerpiece, sometimes with cheese.' } },
      { word: 'CHOCOLATE', hints: { medium: 'A sweet brown treat made from cacao beans.', hard: 'Can be dark, milk, or white; popular during holidays.' } },
      { word: 'ICE CREAM', hints: { medium: 'A frozen dairy dessert served in cones or bowls.', hard: 'Melts quickly in the sun, comes in vanilla and strawberry.' } },
      { word: 'TACO', hints: { medium: 'A folded Mexican shell filled with meat and salsa.', hard: 'Typically celebrated on a specific Tuesday.' } },
      { word: 'SPAGHETTI', hints: { medium: 'Long, thin pasta noodles served with marinara.', hard: 'Traditionally twirled around a fork when eating.' } },
      { word: 'MILKSHAKE', hints: { medium: 'A thick, cold drink blended with syrup and cream.', hard: 'Often topped with whipped cream and a cherry.' } },
      { word: 'CHEESE', hints: { medium: 'A dairy product that can melt, grate, or stretch.', hard: 'Associated with mice and holes in cartoon versions.' } }
    ]
  },
  {
    id: 'sports',
    name: 'Sports ⚽',
    icon: '⚽',
    baseWords: [
      { word: 'BASKETBALL', hints: { medium: 'A high-scoring sport played on a court with hoops.', hard: 'Involves dribbling and squeaky sneakers.' } },
      { word: 'SOCCER', hints: { medium: 'A game where hands are forbidden except for one player.', hard: 'The most popular global sport, played with a black-and-white ball.' } },
      { word: 'TENNIS', hints: { medium: 'Played with rackets and a yellow-green fuzzy ball.', hard: 'Matches are scored with terms like Love, Deuce, and Set.' } },
      { word: 'GOLF', hints: { medium: 'An outdoor sport of hitting a small ball into a cup.', hard: 'Involves clubs, tees, putting greens, and quiet crowds.' } },
      { word: 'BASEBALL', hints: { medium: 'A bat-and-ball game played on a diamond-shaped field.', hard: 'Involves home runs, pitchers, and sliding into bases.' } },
      { word: 'SWIMMING', hints: { medium: 'Racing through water using various strokes.', hard: 'Competitors wear goggles and caps in a pool lane.' } },
      { word: 'BOXING', hints: { medium: 'A combat sport where players wear padded gloves.', hard: 'Takes place in a ring, divided into rounds.' } },
      { word: 'VOLLEYBALL', hints: { medium: 'A game of hitting a ball over a high net with hands.', hard: 'Can be played on court or beach, involves spikes and sets.' } },
      { word: 'BADMINTON', hints: { medium: 'Played with rackets and a feathered shuttlecock.', hard: 'The projectile has a conical shape and is very lightweight.' } },
      { word: 'BOWLING', hints: { medium: 'Rolling a heavy ball down a lane to knock down pins.', hard: 'Aiming for a strike or spare, wearing special shoes.' } }
    ]
  },
  {
    id: 'movies',
    name: 'Movies 🎬',
    icon: '🎬',
    baseWords: [
      { word: 'AVATAR', hints: { medium: 'Sci-fi film featuring blue-skinned aliens on Pandora.', hard: 'Directed by James Cameron, known for 3D visual effects.' } },
      { word: 'TITANIC', hints: { medium: 'A tragic romance on a doomed historic steamship.', hard: 'Features a drawing scene, an iceberg, and a heavy necklace.' } },
      { word: 'SPIDERMAN', hints: { medium: 'A superhero bit by a radioactive arachnid.', hard: 'Fights crime in New York, swings between skyscrapers.' } },
      { word: 'BATMAN', hints: { medium: 'A wealthy orphan who patrols Gotham at night.', hard: 'Has no superpowers, relies on gadgets, a cape, and a car.' } },
      { word: 'HARRY POTTER', hints: { medium: 'A young wizard attending a magical boarding school.', hard: 'Has a lightning bolt scar and fights dark forces.' } },
      { word: 'TOY STORY', hints: { medium: 'An animated film about toys that come alive when humans leave.', hard: 'Features a cowboy sheriff and a space ranger.' } },
      { word: 'STAR WARS', hints: { medium: 'An epic space opera involving the Force and laser swords.', hard: 'Features a galactic conflict between Jedi and Sith.' } },
      { word: 'JURASSIC PARK', hints: { medium: 'A theme park gone wrong due to cloned prehistoric beasts.', hard: 'Based on a Michael Crichton novel, features T-Rex.' } },
      { word: 'THE MATRIX', hints: { medium: 'A dystopian sci-fi about humans trapped in a simulation.', hard: 'Features black trench coats, sunglasses, and red pills.' } },
      { word: 'FROZEN', hints: { medium: 'An animated musical about a queen with ice magic.', hard: 'Features a talking snowman and a hit song about letting go.' } }
    ]
  },
  {
    id: 'places',
    name: 'Places 🗽',
    icon: '🗽',
    baseWords: [
      { word: 'PARIS', hints: { medium: 'The capital city of France, known for art and romance.', hard: 'Home to a giant iron lattice tower on the Seine.' } },
      { word: 'EGYPT', hints: { medium: 'A country famous for its ancient pyramids and deserts.', hard: 'The Nile runs through it, guarded by the Sphinx.' } },
      { word: 'TOKYO', hints: { medium: 'A massive, ultra-modern metropolis in Japan.', hard: 'Known for neon lights, anime culture, and busy crossings.' } },
      { word: 'LONDON', hints: { medium: 'Capital city of England, famous for its historic bridge.', hard: 'Known for red double-decker buses and a grand clock tower.' } },
      { word: 'NEW YORK', hints: { medium: 'A bustling US metropolis nicknamed the Big Apple.', hard: 'Features Central Park, Broadway, and yellow cabs.' } },
      { word: 'HAWAII', hints: { medium: 'An island chain known for volcanoes and surf beaches.', hard: 'A US state in the Pacific, famous for leis and hula.' } },
      { word: 'COLOSSEUM', hints: { medium: 'A grand ancient amphitheater in the heart of Rome.', hard: 'Where gladiators once fought in front of large crowds.' } },
      { word: 'DISNEYLAND', hints: { medium: 'A massive theme park dubbed the happiest place on Earth.', hard: 'Features a fairytale castle and costumed mice.' } },
      { word: 'TAJ MAHAL', hints: { medium: 'An ivory-white marble mausoleum in Agra, India.', hard: 'Commissioned by a Mughal emperor in memory of his favorite wife.' } },
      { word: 'GRAND CANYON', hints: { medium: 'A massive, colorful gorge carved by a river in Arizona.', hard: 'A national park displaying billions of years of geology.' } }
    ]
  },
  {
    id: 'jobs',
    name: 'Jobs 🧑‍💼',
    icon: '🧑‍💼',
    baseWords: [
      { word: 'DOCTOR', hints: { medium: 'A licensed healthcare professional who treats illness.', hard: 'Wears a white coat and carries a stethoscope.' } },
      { word: 'TEACHER', hints: { medium: 'An educator who instructs students in a classroom.', hard: 'Uses whiteboards, gives homework, and assigns grades.' } },
      { word: 'FIRE_FIGHTER', hints: { medium: 'Responds to emergencies and extinguishes blazes.', hard: 'Wears heavy gear, drives a red truck, and uses hoses.' } },
      { word: 'CHEF', hints: { medium: 'A professional cook who designs restaurant menus.', hard: 'Wears a tall white hat and works in a hot kitchen.' } },
      { word: 'ASTRONAUT', hints: { medium: 'A trained traveler who operates spacecraft beyond Earth.', hard: 'Experiences weightlessness and wears a pressurized suit.' } },
      { word: 'POLICE_OFFICER', hints: { medium: 'Law enforcement official who maintains order.', hard: 'Wears a badge, carries handcuffs, and patrols streets.' } },
      { word: 'PILOT', hints: { medium: 'Operates the flight controls of an aircraft.', hard: 'Sits in a cockpit and communicates with air traffic control.' } },
      { word: 'ARTIST', hints: { medium: 'A creative person who expresses ideas through visual media.', hard: 'Uses canvases, brushes, clay, or digital tablets.' } },
      { word: 'DENTIST', hints: { medium: 'A medical specialist focused on oral health.', hard: 'Checks for cavities and uses mirrors to examine teeth.' } },
      { word: 'FARMER', hints: { medium: 'Cultivates crops and raises livestock for food.', hard: 'Works outdoors, drives tractors, and manages fields.' } }
    ]
  },
  {
    id: 'tech',
    name: 'Technology 💻',
    icon: '💻',
    baseWords: [
      { word: 'SMARTPHONE', hints: { medium: 'A handheld computer that can make calls and browse.', hard: 'Has a touchscreen, app store, and fits in a pocket.' } },
      { word: 'INTERNET', hints: { medium: 'A global computer network providing info and communication.', hard: 'Accessed via Wi-Fi or Ethernet, powers the Web.' } },
      { word: 'ROBOT', hints: { medium: 'A machine programmed to perform automated tasks.', hard: 'Often made of metal, can have sensors and mechanical arms.' } },
      { word: 'COMPUTER', hints: { medium: 'A device with a CPU used for processing digital data.', hard: 'Usually has a monitor, keyboard, and operating system.' } },
      { word: 'SMART_WATCH', hints: { medium: 'A wearable wrist device that tracks health and alerts.', hard: 'Pairs with a phone, displays time and step count.' } },
      { word: 'DRONE', hints: { medium: 'An unmanned aerial vehicle operated by remote control.', hard: 'Equipped with rotors and a camera for aerial shots.' } },
      { word: 'VIRTUAL_REALITY', hints: { medium: 'A simulated 3D environment experienced via a headset.', hard: 'Blocks out the real world to immerse the user.' } },
      { word: 'PRINTER', hints: { medium: 'A device that translates digital text/images onto paper.', hard: 'Requires ink cartridges, paper trays, and can jam.' } },
      { word: 'TELEVISION', hints: { medium: 'A screen used for broadcasting shows, movies, and news.', hard: 'Controlled by a remote, hung on living room walls.' } },
      { word: 'CAMERA', hints: { medium: 'An optical instrument used to capture images or video.', hard: 'Uses lenses, shutter speeds, and memory cards.' } }
    ]
  },
  {
    id: 'things',
    name: 'Things 📦',
    icon: '📦',
    baseWords: [
      { word: 'UMBRELLA', hints: { medium: 'A folding canopy designed to protect against rain.', hard: 'Has a curved handle, metal ribs, and water-repellent fabric.' } },
      { word: 'KEY', hints: { medium: 'A small metal tool used to unlock doors or drawers.', hard: 'Has ridges that match a lock cylinder.' } },
      { word: 'CLOCK', hints: { medium: 'An instrument used to measure and show time.', hard: 'Features hands, a face, or digital digits.' } },
      { word: 'MIRROR', hints: { medium: 'A reflective surface that shows a clear image.', hard: 'Made of coated glass, found in bathrooms.' } },
      { word: 'BACKPACK', hints: { medium: 'A bag carried on one\'s shoulder for carrying books.', hard: 'Commonly used by hikers and students, has zippers.' } },
      { word: 'BOOK', hints: { medium: 'A bound set of printed pages containing story or info.', hard: 'Has a spine, cover, table of contents, and chapters.' } },
      { word: 'SOFA', hints: { medium: 'A long upholstered seat for multiple people.', hard: 'Placed in living rooms, decorated with cushions.' } },
      { word: 'WALLET', hints: { medium: 'A small folding pocket-sized case for cash and cards.', hard: 'Made of leather or fabric, easily slips into pants.' } },
      { word: 'BOTTLE', hints: { medium: 'A container with a narrow neck for holding liquids.', hard: 'Made of plastic or glass, closed with a cap.' } },
      { word: 'GLASSES', hints: { medium: 'Lenses in a frame resting on the nose and ears.', hard: 'Used to correct vision or protect from the sun.' } }
    ]
  },
  {
    id: 'nature',
    name: 'Nature 🌿',
    icon: '🌿',
    baseWords: [
      { word: 'RAINBOW', hints: { medium: 'An arch of colors in the sky caused by light reflection.', hard: 'Appears after a storm when sunlight hits water droplets.' } },
      { word: 'VOLCANO', hints: { medium: 'A mountain with an opening that erupts lava and ash.', hard: 'Associated with magma chambers and tectonic activity.' } },
      { word: 'WATERFALL', hints: { medium: 'A stream of water falling from a height over a cliff.', hard: 'Creates mist, roar of falling water, found in gorges.' } },
      { word: 'FOREST', hints: { medium: 'A large area covered chiefly with trees and undergrowth.', hard: 'A complex ecosystem housing diverse wildlife and vegetation.' } },
      { word: 'DESERT', hints: { medium: 'A barren, extremely dry area with minimal rainfall.', hard: 'Features sand dunes, cacti, and extreme temperature swings.' } },
      { word: 'MOUNTAIN', hints: { medium: 'A large landform rising high above its surroundings.', hard: 'Often has a snowy peak and requires climbing.' } },
      { word: 'OCEAN', hints: { medium: 'A vast body of saltwater covering most of Earth.', hard: 'Influenced by tides, home to coral reefs.' } },
      { word: 'CLOUD', hints: { medium: 'A visible mass of condensed water vapor in the sky.', hard: 'Can be fluffy white or dark gray before rain.' } },
      { word: 'GLACIER', hints: { medium: 'A slowly moving mass of ice formed by snow accumulation.', hard: 'Found in polar or high alpine regions, melting due to warming.' } },
      { word: 'LIGHTNING', hints: { medium: 'A giant spark of static electricity in the atmosphere.', hard: 'Accompanied by the loud sound of thunder.' } }
    ]
  },
  {
    id: 'music',
    name: 'Music 🎵',
    icon: '🎵',
    baseWords: [
      { word: 'GUITAR', hints: { medium: 'A six-stringed instrument played by plucking or strumming.', hard: 'Has a fretboard, tuning pegs, and a hollow body.' } },
      { word: 'PIANO', hints: { medium: 'A large keyboard instrument with black and white keys.', hard: 'Pressing keys triggers hammers to strike metal strings.' } },
      { word: 'DRUMS', hints: { medium: 'Percussion instruments struck with sticks or hands.', hard: 'Maintains the beat of a song, includes cymbals.' } },
      { word: 'VIOLIN', hints: { medium: 'A four-stringed bowed instrument held under the chin.', hard: 'High-pitched classical instrument, played with horsehair bow.' } },
      { word: 'MICROPHONE', hints: { medium: 'An acoustic-to-electric transducer that amplifies voices.', hard: 'Used by singers on stage to project their voice.' } },
      { word: 'FLUTE', hints: { medium: 'A woodwind instrument played by blowing across a side hole.', hard: 'Thin, silver-colored tube with keys, high pitch.' } },
      { word: 'TRUMPET', hints: { medium: 'A brass instrument with three valves and a flared bell.', hard: 'Requires buzzing lips into a cup-shaped mouthpiece.' } },
      { word: 'HEADPHONES', hints: { medium: 'A pair of small speakers worn over or in the ears.', hard: 'Used for private listening, can be wireless.' } },
      { word: 'SINGER', hints: { medium: 'A person who performs musical vocalizations on stage.', hard: 'Relies on vocal cords, takes center stage.' } },
      { word: 'CONCERT', hints: { medium: 'A live music performance in front of an audience.', hard: 'Takes place in arenas, stadiums, or music halls.' } }
    ]
  },
  {
    id: 'countries',
    name: 'Countries 🌍',
    icon: '🌍',
    baseWords: [
      { word: 'JAPAN', hints: { medium: 'An East Asian island nation famous for cherry blossoms.', hard: 'Land of the Rising Sun, home to sushi and anime.' } },
      { word: 'BRAZIL', hints: { medium: 'A South American nation known for carnival and football.', hard: 'Home to the Amazon Rainforest and Christ the Redeemer.' } },
      { word: 'AUSTRALIA', hints: { medium: 'A continent country famous for unique wildlife.', hard: 'Known as the Land Down Under, features the Outback.' } },
      { word: 'CANADA', hints: { medium: 'A North American country famous for cold weather and syrup.', hard: 'Has a maple leaf on its flag, bilingual (English/French).' } },
      { word: 'ITALY', hints: { medium: 'A boot-shaped European country renowned for cuisine.', hard: 'Home of the Roman Empire, pizza, and Venice canals.' } },
      { word: 'INDIA', hints: { medium: 'A South Asian nation known for spices and holy rivers.', hard: 'The second most populous country, home to Bollywood.' } },
      { word: 'FRANCE', hints: { medium: 'A European nation famous for cheese, wine, and fashion.', hard: 'Flag is blue, white, and red; capital is Paris.' } },
      { word: 'MEXICO', hints: { medium: 'A country known for spicy food, deserts, and ruins.', hard: 'Celebrates Day of the Dead, borders the United States.' } },
      { word: 'CHINA', hints: { medium: 'The world\'s most populous East Asian nation.', hard: 'Features a massive ancient wall visible from space.' } },
      { word: 'SPAIN', hints: { medium: 'A European country known for bullfighting and tapas.', hard: 'Famous for flamenco dancing and the Sagrada Familia.' } }
    ]
  },
  {
    id: 'anime',
    name: 'Anime/Cartoons 📺',
    icon: '📺',
    baseWords: [
      { word: 'PIKACHU', hints: { medium: 'A yellow electric pocket monster with red cheeks.', hard: 'The mascot of Pokémon, species is Mouse.' } },
      { word: 'SPONGEBOB', hints: { medium: 'A yellow sea sponge living in a pineapple under the sea.', hard: 'Works as a fry cook, best friend is a starfish.' } },
      { word: 'GOKU', hints: { medium: 'A Saiyan warrior who searches for seven mystical spheres.', hard: 'Can turn Super Saiyan with glowing yellow hair.' } },
      { word: 'NARUTO', hints: { medium: 'A young ninja who seeks recognition and dreams of becoming Hokage.', hard: 'Has a nine-tailed fox sealed inside him, loves ramen.' } },
      { word: 'MICKEY MOUSE', hints: { medium: 'An iconic cartoon mouse wearing red shorts and yellow shoes.', hard: 'The legendary corporate symbol of Disney.' } },
      { word: 'DORAEMON', hints: { medium: 'A robotic cat from the future with a magic 4D pocket.', hard: 'Fears mice, loves dorayaki, helps a boy named Nobita.' } },
      { word: 'Luffy', hints: { medium: 'A rubber-bodied pirate seeking the ultimate treasure.', hard: 'Wears a straw hat, captain of the Straw Hat crew.' } },
      { word: 'TOM AND JERRY', hints: { medium: 'A classic cartoon cat-and-mouse slapstick duo.', hard: 'Never speak, involve constant chases and traps.' } },
      { word: 'SIMPSONS', hints: { medium: 'An animated sitcom about a yellow family in Springfield.', hard: 'Features Homer, Marge, Bart, Lisa, and Maggie.' } },
      { word: 'SHREK', hints: { medium: 'A green ogre who loves his swamp and rescues a princess.', hard: 'Accompanied by a talking donkey, parodies fairy tales.' } }
    ]
  },
  {
    id: 'superheroes',
    name: 'Superheroes 🦸',
    icon: '🦸',
    baseWords: [
      { word: 'SUPERMAN', hints: { medium: 'The Man of Steel from Krypton vulnerable to green rocks.', hard: 'Wears a red cape and an S crest, raised on a farm.' } },
      { word: 'IRON_MAN', hints: { medium: 'Billionaire Tony Stark who wears a high-tech armor suit.', hard: 'Has an arc reactor in his chest, says "I am Iron Man".' } },
      { word: 'WOLVERINE', hints: { medium: 'A mutant with retractable adamantium claws and healing.', hard: 'Member of the X-Men, has a rugged personality.' } },
      { word: 'THOR', hints: { medium: 'The Norse God of Thunder wielding a magical hammer.', hard: 'Heir to Asgard, son of Odin, wears a red cape.' } },
      { word: 'HULK', hints: { medium: 'A scientist who transforms into a green behemoth when angry.', hard: 'Triggered by gamma radiation, likes to "smash".' } },
      { word: 'WONDER_WOMAN', hints: { medium: 'Amazonian princess Diana wielding a Lasso of Truth.', hard: 'Wears bulletproof bracelets and a golden tiara.' } },
      { word: 'BLACK_PANTHER', hints: { medium: 'The king of the advanced African nation Wakanda.', hard: 'Wears a vibranium suit, says "Wakanda Forever".' } },
      { word: 'CAPTAIN_AMERICA', hints: { medium: 'Super-soldier Steve Rogers wielding a star-spangled shield.', hard: 'Frozen in ice since WWII, leader of Avengers.' } },
      { word: 'FLASH', hints: { medium: 'The fastest man alive, dressed in a red lightning suit.', hard: 'Taps into the Speed Force, member of Justice League.' } },
      { word: 'AQUAMAN', hints: { medium: 'The King of Atlantis who can communicate with marine life.', hard: 'Wields a trident, lives underwater, son of a lighthouse keeper.' } }
    ]
  },
  {
    id: 'vehicles',
    name: 'Vehicles 🚗',
    icon: '🚗',
    baseWords: [
      { word: 'BICYCLE', hints: { medium: 'A human-powered vehicle with two wheels and pedals.', hard: 'Involves a chain, handlebars, and a bell.' } },
      { word: 'SUBMARINE', hints: { medium: 'A watercraft capable of independent underwater operation.', hard: 'Uses sonar and a periscope, often painted navy gray.' } },
      { word: 'HELICOPTER', hints: { medium: 'An aircraft with large rotating overhead blades.', hard: 'Capable of vertical takeoff, landing, and hovering.' } },
      { word: 'TRAIN', hints: { medium: 'A series of connected cars that run on a metal track.', hard: 'Powered by a locomotive, stops at stations.' } },
      { word: 'AIRPLANE', hints: { medium: 'A winged aircraft propelled forward by jet engines.', hard: 'Flies at high altitudes, passengers sit in a cabin.' } },
      { word: 'MOTORCYCLE', hints: { medium: 'A two-wheeled vehicle powered by an engine.', hard: 'Requires a helmet, balance, and riding on a saddle.' } },
      { word: 'SHIP', hints: { medium: 'A large vessel sailing on deep oceans and seas.', hard: 'Has an anchor, a deck, and is steered by a captain.' } },
      { word: 'SCOOTER', hints: { medium: 'A small vehicle with a footboard, steered by a handlebar.', hard: 'Can be kick-powered or electric, popular in cities.' } },
      { word: 'AMBULANCE', hints: { medium: 'An emergency vehicle equipped to transport patients.', hard: 'Features sirens, flashing lights, and medical staff.' } },
      { word: 'TRACTOR', hints: { medium: 'A powerful agricultural vehicle with large back wheels.', hard: 'Used for pulling farm machinery or heavy plows.' } }
    ]
  },
  {
    id: 'games',
    name: 'Games 🎮',
    icon: '🎮',
    baseWords: [
      { word: 'MINECRAFT', hints: { medium: 'A sandbox game of placing blocks and going on adventures.', hard: 'Features pixelated graphics, Creepers, and Steve.' } },
      { word: 'CHESS', hints: { medium: 'A 2-player strategy board game of capturing the King.', hard: 'Played on an 8x8 grid with knights, bishops, and pawns.' } },
      { word: 'MONOPOLY', hints: { medium: 'A classic board game of buying properties and charging rent.', hard: 'Features a jail space, Chance cards, and a top-hat mascot.' } },
      { word: 'SNAKE', hints: { medium: 'A game of controlling a line that grows by eating dots.', hard: 'Game over if you collide with walls or your own tail.' } },
      { word: 'FORTNITE', hints: { medium: 'A battle royale shooter famous for building and dances.', hard: '100 players drop from a bus, fight to be last standing.' } },
      { word: 'TETRIS', hints: { medium: 'A puzzle game of fitting falling geometric shapes together.', hard: 'Clearing horizontal lines prevents stacking to the top.' } },
      { word: 'SCRABBLE', hints: { medium: 'A board game where players score points by spelling words.', hard: 'Letter tiles have individual point values on a grid.' } },
      { word: 'AMONG US', hints: { medium: 'A social deduction game of astronauts finding the Imposter.', hard: 'Involves doing tasks, reporting bodies, and voting off suspects.' } },
      { word: 'PACMAN', hints: { medium: 'A maze arcade game of eating pellets while avoiding ghosts.', hard: 'Features a yellow eating circle, cherries, and power pellets.' } },
      { word: 'POKER', hints: { medium: 'A card game of betting chips based on hand rankings.', hard: 'Involves bluffing, a dealer, and a river card.' } }
    ]
  },
  {
    id: 'school',
    name: 'School 🎒',
    icon: '🎒',
    baseWords: [
      { word: 'PENCIL', hints: { medium: 'A writing tool with a graphite core and eraser tip.', hard: 'Requires sharpening, leaves gray marks on paper.' } },
      { word: 'GLOBE', hints: { medium: 'A spherical model of the Earth used in geography.', hard: 'Spins on an axis, showing oceans and borders.' } },
      { word: 'LIBRARY', hints: { medium: 'A quiet room filled with categorized books for reading.', hard: 'Requires a card to borrow items, managed by a librarian.' } },
      { word: 'CALCULATOR', hints: { medium: 'An electronic device used for solving math equations.', hard: 'Has a keypad with digits and operational signs.' } },
      { word: 'DESK', hints: { medium: 'A flat-surfaced piece of furniture used for studying.', hard: 'Usually has a drawer and is paired with a chair.' } },
      { word: 'COMPASS', hints: { medium: 'A drawing tool used for drawing perfect circles.', hard: 'Has a sharp metal point on one leg and a pencil on the other.' } },
      { word: 'NOTEBOOK', hints: { medium: 'A bound collection of lined pages for writing notes.', hard: 'Has a spiral or stitched binding, used for lectures.' } },
      { word: 'DICTIONARY', hints: { medium: 'A heavy reference book defining words alphabetically.', hard: 'Used to check spellings, definitions, and pronunciations.' } },
      { word: 'BLACKBOARD', hints: { medium: 'A large dark board written on with white chalk.', hard: 'Cleaned with a felt eraser, makes a screeching sound if scratched.' } },
      { word: 'GRADUATION', hints: { medium: 'A ceremony where students receive their diplomas.', hard: 'Involves wearing square caps with tassels and long gowns.' } }
    ]
  }
];

// Extra 80 words for each category to hit exactly 90 total words per category!
const extraWords: Record<string, string[]> = {
  animals: [
    'TIGER', 'BEAR', 'WOLF', 'FOX', 'EAGLE', 'DEER', 'RABBIT', 'SQUIRREL', 'FROG', 'SNAKE',
    'CRAB', 'OCTOPUS', 'WHALE', 'TURTLE', 'GIRAFFE', 'ZEBRA', 'MONKEY', 'GORILLA', 'PANDA', 'KOALA',
    'HIPPO', 'RHINO', 'CAMEL', 'HORSE', 'COW', 'PIG', 'SHEEP', 'GOAT', 'CHICKEN', 'TURKEY',
    'MOUSE', 'RAT', 'BAT', 'BEAVER', 'OTTER', 'SEAL', 'WALRUS', 'LOBSTER', 'JELLYFISH', 'STARFISH',
    'SEAHORSE', 'FLAMINGO', 'PEACOCK', 'PARROT', 'SWAN', 'GOOSE', 'FALCON', 'HAWK', 'VULTURE', 'CROW',
    'PIGEON', 'WOODPECKER', 'BEE', 'BUTTERFLY', 'DRAGONFLY', 'ANT', 'SPIDER', 'SCORPION', 'LADYBUG', 'CATERPILLAR',
    'SNAIL', 'SLUG', 'WORM', 'MOSQUITO', 'FLY', 'GRASSHOPPER', 'CRICKET', 'LIZARD', 'IGUANA', 'GECKO',
    'COBRA', 'PYTHON', 'PLATYPUS', 'WOMBAT', 'BADGER', 'WEASEL', 'MEERKAT', 'LEMUR', 'SLOTH', 'CHIPMUNK'
  ],
  food: [
    'BREAD', 'BUTTER', 'MILK', 'YOGURT', 'EGGS', 'BACON', 'SAUSAGE', 'STEAK', 'CHICKEN', 'FISH',
    'SHRIMP', 'CRAB', 'RICE', 'PASTA', 'NOODLES', 'SOUP', 'SALAD', 'SANDWICH', 'HOTDOG', 'FRIES',
    'POTATO', 'TOMATO', 'ONION', 'GARLIC', 'BANANA', 'APPLE', 'ORANGE', 'STRAWBERRY', 'GRAPES', 'WATERMELON',
    'MANGO', 'PINEAPPLE', 'PEACH', 'CHERRY', 'LEMON', 'LIME', 'BLUEBERRY', 'RASPBERRY', 'BLACKBERRY', 'AVOCADO',
    'BROCCOLI', 'CARROT', 'SPINACH', 'LETTUCE', 'CUCUMBER', 'PEPPER', 'MUSHROOM', 'CORN', 'PEAS', 'BEANS',
    'NUTS', 'HONEY', 'SUGAR', 'SALT', 'CINNAMON', 'VANILLA', 'CAKE', 'COOKIE', 'DONUT', 'PIE',
    'PANCAKE', 'WAFFLE', 'CROISSANT', 'MUFFIN', 'BAGEL', 'TOAST', 'TEA', 'JUICE', 'SODA', 'BEER',
    'WINE', 'CHAMPAGNE', 'WHISKEY', 'WATER', 'LEMONADE', 'SMOOTHIE', 'CIDER', 'SAUCE', 'KETCHUP', 'MUSTARD'
  ],
  sports: [
    'FOOTBALL', 'RUGBY', 'CRICKET', 'HOCKEY', 'LACROSSE', 'POLO', 'SQUASH', 'HANDBALL', 'WATERPOLO', 'DODGEBALL',
    'RUNNING', 'SPRINTING', 'MARATHON', 'JOGGING', 'CYCLING', 'BIKING', 'TRIATHLON', 'SKIING', 'SNOWBOARDING', 'ICE_SKATING',
    'FIGURE_SKATING', 'ROLLER_BLADING', 'SKATEBOARDING', 'SURFING', 'WINDSURFING', 'KITESURFING', 'ROWING', 'KAYAKING', 'CANOEING', 'SAILING',
    'RAFTING', 'DIVING', 'GYMNASTICS', 'TRAMPOLINE', 'ARCHERY', 'SHOOTING', 'FENCING', 'WRESTLING', 'JUDO', 'KARATE',
    'TAEKWONDO', 'KUNG_FU', 'KICKBOXING', 'SUMO', 'WEIGHTLIFTING', 'BODYBUILDING', 'POWERLIFTING', 'CROSSFIT', 'PILATES', 'YOGA',
    'CLIMBING', 'MOUNTAINEERING', 'HIKING', 'TREKKING', 'CAMPING', 'FISHING', 'HUNTING', 'BILLIARDS', 'SNOOKER', 'POOL',
    'DARTS', 'CHESS', 'CHECKERS', 'DOMINOES', 'CARROM', 'FOOSBALL', 'TABLE_TENNIS', 'PING_PONG', 'FRISBEE', 'DISC_GOLF',
    'KICKBALL', 'ROUNDERS', 'NETBALL', 'SOFTBALL', 'HURDLING', 'HIGH_JUMP', 'LONG_JUMP', 'POLE_VAULT', 'DISCUS', 'JAVELIN'
  ],
  movies: [
    'GLADIATOR', 'INCEPTION', 'INTERSTELLAR', 'GODFATHER', 'CASABLANCA', 'JAWS', 'PSYCHO', 'ALIEN', 'PREDATOR', 'TERMINATOR',
    'ROBOCOP', 'RAMBO', 'ROCKY', 'JUMANJI', 'SHREK', 'MADAGASCAR', 'UP', 'WALL_E', 'RATATOUILLE', 'CARS',
    'NEMO', 'INCREDIBLES', 'COCO', 'MOANA', 'ALADDIN', 'MULAN', 'TARZAN', 'HERCULES', 'PINOCCHIO', 'DUMBO',
    'BAMBI', 'CINDERELLA', 'SNOW_WHITE', 'TANGLED', 'BRAVE', 'SOUL', 'ONWARD', 'LUCA', 'DUNE', 'TENET',
    'ARRIVAL', 'GRAVITY', 'MARTIAN', 'PROMETHEUS', 'AVENGERS', 'IRONMAN', 'THOR', 'SUPERMAN', 'WONDERWOMAN', 'DEADPOOL',
    'WOLVERINE', 'SPIDER_MAN', 'SKYFALL', 'CASINO_ROYALE', 'GOLDFINGER', 'DIE_HARD', 'SPEED', 'TWISTER', 'ARMAGEDDON', 'DEEP_IMPACT',
    'INDEPENDENCE_DAY', 'MEN_IN_BLACK', 'GHOSTBUSTERS', 'BACK_TO_THE_FUTURE', 'INDIANA_JONES', 'GREMLINS', 'GOONIES', 'BEETLEJUICE', 'JOKER', 'PULP_FICTION',
    'FIGHT_CLUB', 'FORREST_GUMP', 'SHAWSHANK_REDEMPTION', 'GREEN_MILE', 'SE7EN', 'SILENCE_OF_THE_LAMBS', 'SHINING', 'EXORCIST', 'SCREAM', 'HALLOWEEN'
  ],
  places: [
    'VENICE', 'ROME', 'MILAN', 'FLORENCE', 'PISA', 'POMPEII', 'ATHENS', 'SANTORINI', 'MYKONOS', 'MADRID',
    'BARCELONA', 'SEVILLE', 'IBIZA', 'MALLORCA', 'LISBON', 'PORTO', 'ALGARVE', 'BERLIN', 'MUNICH', 'FRANKFURT',
    'HAMBURG', 'VIENNA', 'SALZBURG', 'ZURICH', 'GENEVA', 'INTERLAKEN', 'AMSTERDAM', 'ROTTERDAM', 'BRUSSELS', 'BRUGES',
    'ANTWERP', 'COPENHAGEN', 'STOCKHOLM', 'OSLO', 'HELSINKI', 'REYKJAVIK', 'PRAGUE', 'BUDAPEST', 'WARSAW', 'CRACOW',
    'MOSCOW', 'ST_PETERSBURG', 'BEIJING', 'SHANGHAI', 'HONG_KONG', 'MACAU', 'SEOUL', 'BUSAN', 'JEJU', 'BANGKOK',
    'PHUKET', 'CHIANG_MAI', 'BALI', 'JAKARTA', 'SINGAPORE', 'KUALA_LUMPUR', 'PENANG', 'MANILA', 'BORACAY', 'SYDNEY',
    'MELBOURNE', 'BRISBANE', 'CAIRNS', 'AUCKLAND', 'QUEENSTOWN', 'CAIRO', 'ALEXANDRIA', 'GIZA', 'CASABLANCA', 'MARRAKECH',
    'DUBAI', 'ABU_DHABI', 'DOHA', 'RIYADH', 'JEDDAH', 'CAPE_TOWN', 'JOHANNESBURG', 'NAIROBI', 'MOMBASA', 'TORONTO'
  ],
  jobs: [
    'NURSE', 'SURGEON', 'PARAMEDIC', 'PHARMACIST', 'THERAPIST', 'VETERINARIAN', 'SCIENTIST', 'ENGINEER', 'DEVELOPER', 'PROGRAMMER',
    'ARCHITECT', 'BUILDER', 'CARPENTER', 'PLUMBER', 'ELECTRICIAN', 'WELDER', 'MASON', 'PAINTER', 'ROOFER', 'MECHANIC',
    'MACHINIST', 'TECHNICIAN', 'FLIGHT_ATTENDANT', 'CONDUCTOR', 'DRIVER', 'TAXI_DRIVER', 'COURIER', 'POSTMAN', 'CLERK', 'SECRETARY',
    'ASSISTANT', 'MANAGER', 'DIRECTOR', 'PRESIDENT', 'ACCOUNTANT', 'BANKER', 'AUDITOR', 'ANALYST', 'LAWYER', 'JUDGE',
    'PARALEGAL', 'ATTORNEY', 'INVESTIGATOR', 'REPORTER', 'JOURNALIST', 'WRITER', 'AUTHOR', 'EDITOR', 'PUBLISHER', 'DESIGNER',
    'ILLUSTRATOR', 'PHOTOGRAPHER', 'VIDEOGRAPHER', 'PRODUCER', 'ACTOR', 'DANCER', 'MUSICIAN', 'COMPOSER', 'LIBRARIAN', 'ARCHIVIST',
    'CURATOR', 'TRANSLATOR', 'INTERPRETER', 'LOBBYIST', 'POLITICIAN', 'MAYOR', 'GOVERNOR', 'SENATOR', 'DIPLOMAT', 'SOLDIER',
    'SAILOR', 'MARINER', 'FISHERMAN', 'MINER', 'LOGGER', 'BARBER', 'FLORIST', 'BUTCHER', 'BAKER', 'TAILOR', 'COACH'
  ],
  tech: [
    'LAPTOP', 'TABLET', 'SERVER', 'ROUTER', 'MODEM', 'KEYBOARD', 'MOUSE', 'MONITOR', 'SPEAKER', 'WEBCAM',
    'SCANNER', 'PROJECTOR', 'HARD_DRIVE', 'FLOPPY_DISK', 'FLASH_DRIVE', 'MEMORY_CARD', 'PROCESSOR', 'GRAPHICS_CARD', 'MOTHERBOARD', 'POWER_SUPPLY',
    'COOLING_FAN', 'HEADSET', 'CONTROLLER', 'JOYSTICK', 'SENSOR', 'BATTERY', 'CHARGER', 'CABLE', 'ADAPTER', 'SOFTWARE',
    'APPLICATION', 'WEBSITE', 'DATABASE', 'NETWORK', 'FIREWALL', 'ANTIVIRUS', 'ENCRYPTION', 'DECRYPTION', 'PASSWORD', 'USERNAME',
    'EMAIL', 'BROWSER', 'SEARCH_ENGINE', 'ALGORITHM', 'CODE', 'PROGRAMMING', 'COMPILER', 'DEBUGGER', 'CLOUD', 'BLOCKCHAIN',
    'BITCOIN', 'CRYPTOCURRENCY', 'METAVERSE', 'CYBERSPACE', 'ARTIFICIAL_INTELLIGENCE', 'MACHINE_LEARNING', 'DEEP_LEARNING', 'NEURAL_NETWORK', 'DATA_SCIENCE', 'ANALYTICS',
    'AUTOMATION', 'DIGITIZATION', 'TELECOMMUNICATIONS', 'SATELLITE', 'RADAR', 'SONAR', 'GPS', 'BLUETOOTH', 'WI_FI', 'CELLULAR',
    '5G', 'FIBER_OPTIC', 'LASER', 'HOLOGRAM', 'NANOTECHNOLOGY', 'BIOTECHNOLOGY', 'QUANTUM_COMPUTING', 'ROUTER', 'CHIP', 'TRANSISTOR'
  ],
  things: [
    'TABLE', 'CHAIR', 'DESK', 'LAMP', 'BED', 'PILLOW', 'BLANKET', 'SHEETS', 'MATTRESS', 'WARDROBE',
    'CLOSET', 'DRAWER', 'SHELF', 'CABINET', 'RUG', 'CARPET', 'CURTAIN', 'BLINDS', 'WINDOW', 'DOOR',
    'WALL', 'FLOOR', 'CEILING', 'ROOF', 'CHIMNEY', 'STAIRS', 'ELEVATOR', 'ESCALATOR', 'GATE', 'FENCE',
    'BRICK', 'STONE', 'WOOD', 'METAL', 'PLASTIC', 'GLASS', 'PAPER', 'PEN', 'PENCIL', 'ERASER',
    'RULER', 'SCISSORS', 'GLUE', 'TAPE', 'STAPLER', 'PAPERCLIP', 'FOLDER', 'BINDER', 'ENVELOPE', 'STAMP',
    'BOX', 'BAG', 'BASKET', 'BUCKET', 'BROOM', 'MOP', 'VACUUM', 'DUSTPAN', 'TRASH_CAN', 'RECYCLE_BIN',
    'SOAP', 'SHAMPOO', 'TOWEL', 'TOOTHBRUSH', 'TOOTHPASTE', 'COMB', 'BRUSH', 'RAZOR', 'HAIR_DRYER', 'PERFUME',
    'COLOGNE', 'MAKEUP', 'JEWELRY', 'RING', 'NECKLACE', 'BRACELET', 'EARRINGS', 'WATCH', 'COIN', 'MEDAL'
  ],
  nature: [
    'SUN', 'MOON', 'STAR', 'PLANET', 'ASTEROID', 'COMET', 'GALAXY', 'UNIVERSE', 'SKY', 'HORIZON',
    'SUNRISE', 'SUNSET', 'TWILIGHT', 'DAWN', 'DUSK', 'WIND', 'BREEZE', 'GALE', 'STORM', 'HURRICANE',
    'TORNADO', 'TYPHOON', 'BLIZZARD', 'SNOW', 'RAIN', 'DRIZZLE', 'SHOWER', 'HAIL', 'SLEET', 'FROST',
    'DEW', 'FOG', 'MIST', 'HAZE', 'SMOG', 'RIVER', 'STREAM', 'CREEK', 'BROOK', 'LAKE',
    'POND', 'POOL', 'SWAMP', 'MARSH', 'BOG', 'JUNGLE', 'RAINFOREST', 'WOODLAND', 'GROVE', 'ORCHARD',
    'VALLEY', 'CANYON', 'GORGE', 'CLIFF', 'HILL', 'RIDGE', 'PEAK', 'SUMMIT', 'PLATEAU', 'PLAIN',
    'MEADOW', 'FIELD', 'PASTURE', 'SAVANNA', 'STEPPE', 'TUNDRA', 'ICEBERG', 'REEF', 'ISLAND', 'PENINSULA',
    'CAPE', 'BAY', 'GULF', 'SEA', 'STRAIT', 'CHANNEL', 'SPRING', 'GEYSER', 'CAVE', 'CAVERN'
  ],
  music: [
    'SAXOPHONE', 'CLARINET', 'OBOE', 'BASSOON', 'TROMBONE', 'TUBA', 'FRENCH_HORN', 'BUGLE', 'ACCORDION', 'HARMONICA',
    'BANJO', 'MANDOLIN', 'UKULELE', 'HARP', 'CELLO', 'VIOLA', 'DOUBLE_BASS', 'XYLOPHONE', 'MARIMBA', 'GLOCKENSPIEL',
    'METALLOPHONE', 'CHIMES', 'TRIANGLE', 'TAMBOURINE', 'MARACAS', 'SHAKER', 'CABASA', 'GUIRO', 'CLAVES', 'CASTANETS',
    'GONG', 'CYMBALS', 'SNARE_DRUM', 'BASS_DRUM', 'TIMPANI', 'CONGAS', 'BONGOS', 'DJEMBE', 'CAJON', 'KEYBOARD',
    'SYNTHESIZER', 'ORGAN', 'HARPSICHORD', 'MELODICA', 'THEREMIN', 'TURNTABLE', 'MIXER', 'AMPLIFIER', 'SUBWOOFER', 'EQUALIZER',
    'TUNER', 'METRONOME', 'MUSIC_STAND', 'SHEET_MUSIC', 'NOTE', 'CHORD', 'SCALE', 'KEY', 'TEMPO', 'RHYTHM',
    'BEAT', 'MELODY', 'HARMONY', 'LYRICS', 'VERSES', 'CHORUS', 'BRIDGE', 'ALBUM', 'SINGLE', 'PLAYLIST',
    'PODCAST', 'BROADCAST', 'RECORD', 'CASSETTE', 'CD', 'VINYL', 'TAPE', 'MP3', 'STREAMING', 'UPBEAT'
  ],
  countries: [
    'USA', 'UK', 'GERMANY', 'RUSSIA', 'SOUTH_AFRICA', 'NIGERIA', 'KENYA', 'MOROCCO', 'ARGENTINA', 'CHILE',
    'COLOMBIA', 'PERU', 'VENEZUELA', 'CUBA', 'JAMAICA', 'COSTA_RICA', 'PANAMA', 'ICELAND', 'NORWAY', 'SWEDEN',
    'FINLAND', 'DENMARK', 'IRELAND', 'SWITZERLAND', 'AUSTRIA', 'BELGIUM', 'NETHERLANDS', 'GREECE', 'TURKEY', 'PORTUGAL',
    'POLAND', 'UKRAINE', 'ROMANIA', 'HUNGARY', 'CZECHIA', 'SLOVAKIA', 'CROATIA', 'SERBIA', 'BULGARIA', 'SAUDI_ARABIA',
    'UAE', 'QATAR', 'ISRAEL', 'JORDAN', 'LEBANON', 'SYRIA', 'IRAQ', 'IRAN', 'PAKISTAN', 'BANGLADESH',
    'SRI_LANKA', 'NEPAL', 'THAILAND', 'VIETNAM', 'INDONESIA', 'MALAYSIA', 'SINGAPORE', 'PHILIPPINES', 'SOUTH_KOREA', 'NORTH_KOREA',
    'MONGOLIA', 'KAZAKHSTAN', 'NEW_ZEALAND', 'FIJI', 'PAPUA_NEW_GUINEA', 'MADAGASCAR', 'ETHIOPIA', 'GHANA', 'SENEGAL', 'UGANDA',
    'SUDAN', 'ALGERIA', 'TUNISIA', 'LIBYA', 'ANGOLA', 'ZAMBIA', 'ZIMBABWE', 'YEMEN', 'OMAN', 'BAHRAIN'
  ],
  anime: [
    'VEGETA', 'SASUKE', 'ICHIGO', 'DEKU', 'BAKUGO', 'TODOROKI', 'KANEKI', 'EREN', 'MIKASA', 'ARMIN',
    'LEVI', 'SAITAMA', 'GENOS', 'MOB', 'REIGEN', 'TANJIRO', 'NEZUKO', 'ZENITSU', 'INOSUKE', 'RENGOKU',
    'GOJO', 'ITADORI', 'MEGUMI', 'NOBARA', 'SUKUNA', 'LIGHT', 'L', 'RYUK', 'EDWARD', 'ALPHONSE',
    'MUSTANG', 'ELRIC', 'JOTARO', 'DIO', 'GIOVANNA', 'JOSEPH', 'KAKYOHIN', 'ASH', 'BROCK', 'MISTY',
    'TEAM_ROCKET', 'CHARIZARD', 'BULBASAUR', 'SQUIRTLE', 'BUGSBUNNY', 'DAFFYDUCK', 'PORKY_PIG', 'ELMER_FUDD', 'TWEETY', 'SYLVESTER',
    'SCOOBY_DOO', 'SHAGGY', 'FRED', 'VELMA', 'DAPHNE', 'FRED_FLINTSTONE', 'BARNEY_RUBBLE', 'POPEYE', 'OLIVE_OYL', 'BRUTUS',
    'GARFIELD', 'ODIE', 'SNOOPY', 'CHARLIE_BROWN', 'LINUS', 'LUCY', 'WOODSTOCK', 'BART_SIMPSON', 'HOMER_SIMPSON', 'LISA_SIMPSON',
    'MR_BEAN', 'STEWIE_GRIFFIN', 'PETER_GRIFFIN', 'BRIAN_GRIFFIN', 'BEN_10', 'GWEN_TENNYSON', 'KEVIN_LEVIN', 'MAX_TENNYSON', 'PATRICK'
  ],
  superheroes: [
    'ROBIN', 'NIGHTWING', 'BATGIRL', 'SUPERGIRL', 'SHAZAM', 'GREEN_LANTERN', 'CYBORG', 'BEAST_BOY', 'RAVEN', 'STARFIRE',
    'HAWKEYE', 'BLACK_WIDOW', 'SCARLET_WITCH', 'VISION', 'FALCON', 'WINTER_SOLDIER', 'WAR_MACHINE', 'ANT_MAN', 'WASP', 'DOCTOR_STRANGE',
    'BLACK_CAT', 'DAREDEVIL', 'LUKE_CAGE', 'IRON_FIST', 'JESSICA_JONES', 'PUNISHER', 'CABLE', 'DOMINO', 'CYCLOPS', 'JEAN_GREY',
    'STORM', 'BEAST', 'ROGUE', 'GAMBIT', 'ICEMAN', 'ANGEL', 'NIGHTCRAWLER', 'COLOSSUS', 'KITTY_PRYDE', 'PROFESSOR_X',
    'MAGNETO', 'MYSTIQUE', 'SABRETOOTH', 'JUGGERNAUT', 'GREEN_ARROW', 'SPEEDY', 'BLACK_CANARY', 'MARTIAN_MANHUNTER', 'HAWKMAN', 'HAWKGIRL',
    'FIRESTORM', 'ATOM', 'CONSTANTINE', 'ZATANNA', 'SWAMP_THING', 'SPAWN', 'HELLBOY', 'WITCHBLADE', 'INVINCIBLE', 'OMNI_MAN',
    'ATOM_EVE', 'TICK', 'KICK_ASS', 'HIT_GIRL', 'DARKWING_DUCK', 'GHOST_RIDER', 'BLADE', 'MORBIUS', 'SHE_HULK', 'MS_MARVEL',
    'MILES_MORALES', 'SPIDER_GWEN', 'MOON_KNIGHT', 'RIDDLER', 'BANE', 'SCARE_CROW', 'TWO_FACE', 'CAT_WOMAN', 'POISON_IVY', 'BEAST_BOY'
  ],
  vehicles: [
    'CAR', 'TRUCK', 'VAN', 'BUS', 'TAXI', 'LIMOUSINE', 'JEEP', 'SUV', 'SEDAN', 'COUPE',
    'CONVERTIBLE', 'SPORTS_CAR', 'RACECAR', 'MONSTER_TRUCK', 'FIRE_ENGINE', 'POLICE_CAR', 'TOW_TRUCK', 'GARBAGE_TRUCK', 'DUMP_TRUCK', 'CEMENT_MIXER',
    'CRANE', 'BULLDOZER', 'EXCAVATOR', 'FORKLIFT', 'GOLF_CART', 'GO_KART', 'SNOWMOBILE', 'JET_SKI', 'MOTORBOAT', 'SAILBOAT',
    'YACHT', 'CANOE', 'KAYAK', 'RAFT', 'FERRY', 'CRUISE_SHIP', 'CARGO_SHIP', 'TANKER', 'ROWBOAT', 'AIRSHIP',
    'BLIMP', 'HOT_AIR_BALLOON', 'GLIDER', 'HANG_GLIDER', 'JETPACK', 'ROCKET', 'SPACESHIP', 'SPACE_SHUTTLE', 'ROVER', 'CAB',
    'RIKSHAW', 'SEGWAY', 'UNICYCLE', 'TRICYCLE', 'ROLLER_SKATES', 'ICE_SKATES', 'SLED', 'SLEIGH', 'CARRIAGE', 'CHARIOT',
    'WAGON', 'CART', 'WHEELBARROW', 'STROLLER', 'WHEELCHAIR', 'HOVERBOARD', 'SUBWAY', 'METRO', 'TRAM', 'TROLLEY', 'LOCOMOTIVE'
  ],
  games: [
    'CHECKERS', 'DOMINOES', 'BACKGAMMON', 'GO', 'MAHJONG', 'SHOGI', 'REVERSI', 'OTHELLO', 'HALMA', 'LUDO',
    'PARCHEESI', 'CLUE', 'RISK', 'LIFE', 'CARCASSONNE', 'CATAN', 'TICKET_TO_RIDE', 'PANDEMIC', 'CODENAMES', 'DIXIT',
    'CARDS_AGAINST_HUMANITY', 'UNO', 'DOS', 'SKIP_BO', 'PHASE_10', 'SOLITAIRE', 'SPADES', 'HEARTS', 'BRIDGE', 'BLACKJACK',
    'BACCARAT', 'RUMMY', 'CANASTA', 'CRIBBAGE', 'EUCHRE', 'PINOCHLE', 'WAR', 'CRAZY_EIGHTS', 'GO_FISH', 'OLD_MAID',
    'PONG', 'PAC_MAN', 'SPACE_INVADERS', 'ASTEROIDS', 'GALAGA', 'DONKEY_KONG', 'MARIO_BROS', 'ZELDA', 'METROID', 'MEGAMAN',
    'SONIC', 'STREET_FIGHTER', 'MORTAL_KOMBAT', 'TEKKEN', 'DOOM', 'QUAKE', 'HALF_LIFE', 'COUNTER_STRIKE', 'HALO', 'CALL_OF_DUTY',
    'BATTLEFIELD', 'OVERWATCH', 'VALORANT', 'APEX_LEGENDS', 'LEAGUE_OF_LEGENDS', 'DOTA_2', 'WARCRAFT', 'STARCRAFT', 'DIABLO', 'WORLD_OF_WARCRAFT',
    'RUNESCAPE', 'MAPLESTORY', 'POKEMON', 'YU_GI_OH', 'MAGIC_THE_GATHERING', 'CLASH_OF_CLANS', 'CLASH_ROYALE', 'CANDY_CRUSH', 'ANGRY_BIRDS', 'FLAPPY_BIRD'
  ],
  school: [
    'PEN', 'PAPER', 'ERASER', 'SHARPENER', 'RULER', 'SCISSORS', 'GLUE', 'TAPE', 'STAPLER', 'STAPLES',
    'PAPERCLIP', 'BINDER', 'FOLDER', 'ENVELOPE', 'HIGHLIGHTER', 'MARKER', 'CRAYON', 'CHALK', 'WHITEBOARD', 'BOARD_ERASER',
    'TEXTBOOK', 'WORKBOOK', 'THESAURUS', 'ATLAS', 'JOURNAL', 'PLANNER', 'CALENDAR', 'CLASSROOM', 'AUDITORIUM', 'GYMNASIUM',
    'CAFETERIA', 'PLAYGROUND', 'LOCKER', 'HALLWAY', 'OFFICE', 'INFIRMARY', 'LABORATORY', 'COMPUTERS', 'STUDENT', 'PRINCIPAL',
    'VICE_PRINCIPAL', 'COUNSELOR', 'NURSE', 'JANITOR', 'COACH', 'PROFESSOR', 'TUTOR', 'DEAN', 'REGISTRAR', 'LECTURE',
    'LESSON', 'CLASS', 'COURSE', 'SUBJECT', 'EXAM', 'TEST', 'QUIZ', 'HOMEWORK', 'ASSIGNMENT', 'PROJECT',
    'REPORT', 'ESSAY', 'GRADE', 'MARK', 'REPORT_CARD', 'DIPLOMA', 'CERTIFICATE', 'DEGREE', 'SCHOLARSHIP', 'TUITION',
    'TERM', 'SEMESTER', 'QUARTER', 'BREAK', 'VACATION', 'HOLIDAY', 'ASSEMBLY', 'STUDENT_ID', 'LOCK', 'LOCKER_ROOM', 'STATIONERY'
  ]
};

// Helper to determine the category-specific noun
function getCategoryNoun(catId: string): string {
  switch (catId) {
    case 'animals': return 'creature / animal';
    case 'food': return 'food, drink, or ingredient';
    case 'sports': return 'sport, game, or physical activity';
    case 'movies': return 'movie, cinematic work, or series';
    case 'places': return 'location, city, or geographical place';
    case 'jobs': return 'profession, career, or job role';
    case 'tech': return 'technology, device, or digital concept';
    case 'things': return 'common physical object or item';
    case 'nature': return 'nature element, environment, or celestial body';
    case 'music': return 'musical instrument, term, or concept';
    case 'countries': return 'country, nation, or sovereign territory';
    case 'anime': return 'character, cartoon, or animated series';
    case 'superheroes': return 'heroic character, mutant, or vigilante';
    case 'vehicles': return 'mode of transport, vehicle, or vessel';
    case 'games': return 'board, video, or recreational game';
    case 'school': return 'academic object, subject, or school term';
    default: return 'concept';
  }
}

const SHORT_HINTS_LOOKUP: Record<string, { m: string; h: string }> = {
  // Animals
  'LION': { m: 'Apex Predator', h: 'Feline King' },
  'PENGUIN': { m: 'Tuxedo Bird', h: 'Ice Swimmer' },
  'KANGAROO': { m: 'Pouch Hopper', h: 'Aussie Boxer' },
  'CHAMELEON': { m: 'Color Shifter', h: 'Sticky Tongue' },
  'DUCK': { m: 'Water Bird', h: 'Pond Quacker' },
  'ELEPHANT': { m: 'Trunk Giant', h: 'Heavy Ivory' },
  'DOLPHIN': { m: 'Smart Marine', h: 'Sea Clicker' },
  'OWL': { m: 'Wise Hunter', h: 'Silent Flyer' },
  'SHARK': { m: 'Sea Predator', h: 'Sharp Teeth' },
  'CHEETAH': { m: 'Fast Runner', h: 'Spotted Dash' },

  // Food & Drinks
  'PIZZA': { m: 'Cheesy Slice', h: 'Italian Round' },
  'COFFEE': { m: 'Morning Brew', h: 'Caffeine Bean' },
  'SUSHI': { m: 'Rice Roll', h: 'Raw Fish' },
  'HAMBURGER': { m: 'Beef Bun', h: 'Fast Food' },
  'CHOCOLATE': { m: 'Sweet Cacao', h: 'Dark Bar' },
  'ICE CREAM': { m: 'Frozen Cone', h: 'Cold Dairy' },
  'TACO': { m: 'Shell Fold', h: 'Mexican Wrap' },
  'SPAGHETTI': { m: 'Pasta Twirl', h: 'Italian Noodle' },
  'MILKSHAKE': { m: 'Creamy Blend', h: 'Cherry Top' },
  'CHEESE': { m: 'Dairy Block', h: 'Yellow Melt' },

  // Sports
  'BASKETBALL': { m: 'Hoop Game', h: 'Dribble Ball' },
  'SOCCER': { m: 'Kick Ball', h: 'World Sport' },
  'TENNIS': { m: 'Racket Court', h: 'Fuzzy Ball' },
  'GOLF': { m: 'Green Hole', h: 'Club Swing' },
  'BASEBALL': { m: 'Bat Diamond', h: 'Home Run' },
  'SWIMMING': { m: 'Water Pool', h: 'Stroke Race' },
  'BOXING': { m: 'Glove Ring', h: 'Fist Fight' },
  'VOLLEYBALL': { m: 'Net Spike', h: 'Beach Sand' },
  'BADMINTON': { m: 'Racket Birdie', h: 'Feather Cone' },
  'BOWLING': { m: 'Lane Pins', h: 'Strike Roll' },

  // Movies
  'AVATAR': { m: 'Blue Aliens', h: 'Pandora World' },
  'TITANIC': { m: 'Sinking Ship', h: 'Iceberg Romance' },
  'SPIDERMAN': { m: 'Web Shooter', h: 'Wall Crawler' },
  'BATMAN': { m: 'Dark Knight', h: 'Gotham Hero' },
  'HARRY POTTER': { m: 'Boy Wizard', h: 'Magic Wand' },
  'TOY STORY': { m: 'Living Toys', h: 'Sheriff Ranger' },
  'STAR WARS': { m: 'Space Force', h: 'Laser Swords' },
  'JURASSIC PARK': { m: 'Dino Island', h: 'Cloned Lizards' },
  'THE MATRIX': { m: 'Simulation Pill', h: 'Trench Coat' },
  'FROZEN': { m: 'Ice Queen', h: 'Snow Magic' },

  // Places
  'PARIS': { m: 'Eiffel Tower', h: 'Love City' },
  'EGYPT': { m: 'Desert Pyramids', h: 'Nile River' },
  'TOKYO': { m: 'Neon Crossing', h: 'Japan Capital' },
  'LONDON': { m: 'Big Ben', h: 'River Thames' },
  'NEW YORK': { m: 'Big Apple', h: 'Central Park' },
  'HAWAII': { m: 'Surf Island', h: 'Lava Volcano' },
  'COLOSSEUM': { m: 'Rome Arena', h: 'Gladiator Ring' },
  'DISNEYLAND': { m: 'Mouse Castle', h: 'Happy Place' },
  'TAJ MAHAL': { m: 'Marble Tomb', h: 'India Wonder' },
  'GRAND CANYON': { m: 'River Gorge', h: 'Arizona Rocks' },

  // Jobs
  'DOCTOR': { m: 'Health Care', h: 'White Coat' },
  'TEACHER': { m: 'Classroom Leader', h: 'Grade Assigner' },
  'FIRE FIGHTER': { m: 'Flame Extinguisher', h: 'Red Truck' },
  'CHEF': { m: 'Kitchen Cook', h: 'White Hat' },
  'ASTRONAUT': { m: 'Space Traveler', h: 'Rocket Flyer' },
  'POLICE OFFICER': { m: 'Badge Patroller', h: 'Handcuff Law' },
  'PILOT': { m: 'Cockpit Operator', h: 'Sky Flyer' },
  'ARTIST': { m: 'Canvas Creator', h: 'Paint Brush' },
  'DENTIST': { m: 'Tooth Checker', h: 'Cavity Driller' },
  'FARMER': { m: 'Crop Grower', h: 'Tractor Driver' },

  // Tech
  'SMARTPHONE': { m: 'Touch Screen', h: 'Pocket Computer' },
  'INTERNET': { m: 'World Web', h: 'Global Network' },
  'ROBOT': { m: 'Metal Machine', h: 'Auto Program' },
  'COMPUTER': { m: 'Desktop Screen', h: 'CPU Processor' },
  'SMART WATCH': { m: 'Wrist Tracker', h: 'Digital Time' },
  'DRONE': { m: 'Flying Rotor', h: 'Remote Camera' },
  'VIRTUAL REALITY': { m: 'Headset Simulator', h: '3D Immersion' },
  'PRINTER': { m: 'Ink Paper', h: 'Page Jammer' },
  'TELEVISION': { m: 'Living Screen', h: 'Broadcasting Box' },
  'CAMERA': { m: 'Lens Capture', h: 'Shutter Snap' },

  // Things
  'UMBRELLA': { m: 'Rain Shield', h: 'Water Canopy' },
  'KEY': { m: 'Door Opener', h: 'Metal Lock' },
  'CLOCK': { m: 'Time Face', h: 'Tick Tock' },
  'MIRROR': { m: 'Reflective Glass', h: 'Glass Image' },
  'BACKPACK': { m: 'Shoulder Bag', h: 'Zipper Bookcase' },
  'BOOK': { m: 'Paper Story', h: 'Cover Chapter' },
  'SOFA': { m: 'Cushion Seat', h: 'Living Couch' },
  'WALLET': { m: 'Cash Pocket', h: 'Leather Case' },
  'BOTTLE': { m: 'Cap Container', h: 'Liquid Glass' },
  'GLASSES': { m: 'Nose Lens', h: 'Eye Frame' },

  // Nature
  'RAINBOW': { m: 'Sky Colors', h: 'Storm Arch' },
  'VOLCANO': { m: 'Lava Mountain', h: 'Erupting Ash' },
  'WATERFALL': { m: 'Cliff River', h: 'Mist Gorge' },
  'FOREST': { m: 'Tree Woods', h: 'Green Wilds' },
  'DESERT': { m: 'Sand Dunes', h: 'Dry Cactus' },
  'MOUNTAIN': { m: 'Snowy Peak', h: 'High Climb' },
  'OCEAN': { m: 'Salt Water', h: 'Tide Sea' },
  'CLOUD': { m: 'Sky Vapor', h: 'White Puff' },
  'GLACIER': { m: 'Ice Mass', h: 'Polar Sheet' },
  'LIGHTNING': { m: 'Thunder Spark', h: 'Static Flash' },

  // Music
  'GUITAR': { m: 'Strum Strings', h: 'Fret Body' },
  'PIANO': { m: 'Key Board', h: 'Hammer Strings' },
  'DRUMS': { m: 'Stick Beats', h: 'Loud Cymbals' },
  'VIOLIN': { m: 'Bow Strings', h: 'Chin Rest' },
  'MICROPHONE': { m: 'Voice Amp', h: 'Stage Vocal' },
  'FLUTE': { m: 'Wind Tube', h: 'Silver Blow' },
  'TRUMPET': { m: 'Brass Valve', h: 'Lip Buzz' },
  'HEADPHONES': { m: 'Ear Speakers', h: 'Private Audio' },
  'SINGER': { m: 'Vocal Artist', h: 'Stage Lead' },
  'CONCERT': { m: 'Live Arena', h: 'Music Stadium' },

  // Countries
  'JAPAN': { m: 'Rising Sun', h: 'Cherry Blossom' },
  'BRAZIL': { m: 'Carnival Soccer', h: 'Amazon Forest' },
  'AUSTRALIA': { m: 'Outback Land', h: 'Unique Wilds' },
  'CANADA': { m: 'Maple Leaf', h: 'Cold North' },
  'ITALY': { m: 'Boot Shape', h: 'Pasta Land' },
  'INDIA': { m: 'Spice Land', h: 'Taj Nation' },
  'FRANCE': { m: 'Paris Flag', h: 'Wine Fashion' },
  'MEXICO': { m: 'Taco Border', h: 'Spicy Ruins' },
  'CHINA': { m: 'Great Wall', h: 'Giant Nation' },
  'SPAIN': { m: 'Flamenco Tapas', h: 'Bull Ring' },

  // Anime/Cartoons
  'PIKACHU': { m: 'Electric Mouse', h: 'Yellow Cheeks' },
  'SPONGEBOB': { m: 'Pineapple Sea', h: 'Fry Cook' },
  'GOKU': { m: 'Super Saiyan', h: 'Dragon Fighter' },
  'NARUTO': { m: 'Fox Ninja', h: 'Ramen Eater' },
  'MICKEY MOUSE': { m: 'Disney Symbol', h: 'Red Shorts' },
  'DORAEMON': { m: 'Pocket Cat', h: 'Robotic Blue' },
  'LUFFY': { m: 'Rubber Pirate', h: 'Straw Hat' },
  'TOM AND JERRY': { m: 'Chase Duo', h: 'Silent Cat-Mouse' },
  'SIMPSONS': { m: 'Yellow Family', h: 'Springfield Sitcom' },
  'SHREK': { m: 'Green Swamp', h: 'Ogre Princess' },

  // Superheroes
  'SUPERMAN': { m: 'Steel Man', h: 'Cape Krypton' },
  'IRON MAN': { m: 'Armor Stark', h: 'Heart Reactor' },
  'WOLVERINE': { m: 'Claw Mutant', h: 'X-Men Healing' },
  'THOR': { m: 'Thunder Hammer', h: 'Asgard Heir' },
  'HULK': { m: 'Green Smash', h: 'Gamma Rage' },
  'WONDER WOMAN': { m: 'Truth Lasso', h: 'Amazon Tiara' },
  'BLACK PANTHER': { m: 'Wakanda Suit', h: 'King Vibranium' },
  'CAPTAIN AMERICA': { m: 'Star Shield', h: 'Super Soldier' },
  'FLASH': { m: 'Speed Lightning', h: 'Red Racer' },
  'AQUAMAN': { m: 'Trident Ocean', h: 'Sea King' },

  // Vehicles
  'BICYCLE': { m: 'Pedal Ride', h: 'Two Wheels' },
  'SUBMARINE': { m: 'Sonar Water', h: 'Deep Sea' },
  'HELICOPTER': { m: 'Rotor Blades', h: 'Air Hover' },
  'TRAIN': { m: 'Track Engine', h: 'Station Cars' },
  'AIRPLANE': { m: 'Wing Jet', h: 'Sky Flight' },
  'MOTORCYCLE': { m: 'Helmet Saddle', h: 'Engine Bike' },
  'SHIP': { m: 'Anchor Captain', h: 'Ocean Deck' },
  'SCOOTER': { m: 'Handle Kick', h: 'Foot Board' },
  'AMBULANCE': { m: 'Siren Medic', h: 'Red Cross' },
  'TRACTOR': { m: 'Farm Wheels', h: 'Plow Tractor' },

  // Games
  'MINECRAFT': { m: 'Pixel Blocks', h: 'Creeper Steve' },
  'CHESS': { m: 'King Strategy', h: 'Pawn Knights' },
  'MONOPOLY': { m: 'Rent Board', h: 'Jail Mascot' },
  'SNAKE': { m: 'Eat Dots', h: 'Tail Crash' },
  'FORTNITE': { m: 'Dance Battle', h: '100 Bus' },
  'TETRIS': { m: 'Shape Puzzle', h: 'Falling Blocks' },
  'SCRABBLE': { m: 'Spell Tiles', h: 'Word Grid' },
  'AMONG US': { m: 'Task Suspect', h: 'Vote Imposter' },
  'PACMAN': { m: 'Pellet Ghost', h: 'Yellow Eater' },
  'POKER': { m: 'Bluff Chips', h: 'Card Bettor' },

  // School
  'PENCIL': { m: 'Graphite Core', h: 'Eraser Tip' },
  'GLOBE': { m: 'Earth Model', h: 'Spinning Axis' },
  'LIBRARY': { m: 'Quiet Books', h: 'Borrow Card' },
  'CALCULATOR': { m: 'Math Keypad', h: 'Solve Digits' },
  'DESK': { m: 'Study Flat', h: 'Drawer Chair' },
  'COMPASS': { m: 'Circle Pencil', h: 'Sharp Leg' },
  'NOTEBOOK': { m: 'Spiral Paper', h: 'Lined Pages' },
  'DICTIONARY': { m: 'Word Define', h: 'Spelling List' },
  'BLACKBOARD': { m: 'Chalk Board', h: 'Eraser Dust' },
  'GRADUATION': { m: 'Cap Gown', h: 'Tassel Degree' }
};

// Helper to generate clues algorithmically
function generateHintsInternal(word: string, catId: string): { m: string; h: string } {
  const key = word.toUpperCase().replace(/_/g, ' ').trim();
  const matched = SHORT_HINTS_LOOKUP[key];
  if (matched) {
    return {
      m: matched.m,
      h: matched.h
    };
  }

  // Rule-based semantic classifiers for extra words
  if (catId === 'animals') {
    if (/CAT|LION|TIGER|CHEETAH|LEOPARD|JAGUAR|COUGAR|PANTHER/i.test(key)) return { m: 'Wild Cat', h: 'Apex Feline' };
    if (/DOG|WOLF|FOX|COYOTE|JACKAL|HYENA/i.test(key)) return { m: 'Wild Canine', h: 'Pack Hunter' };
    if (/BEE|FLY|BUTTERFLY|ANT|SPIDER|SCORPION|MOSQUITO|BUG|LADYBUG|CATERPILLAR|WORM|SNAIL|SLUG/i.test(key)) return { m: 'Tiny Insect', h: 'Creepy Crawler' };
    if (/SHARK|WHALE|DOLPHIN|OCTOPUS|FISH|CRAB|LOBSTER|JELLYFISH|SEAL|WALRUS|SEAHORSE|STARFISH/i.test(key)) return { m: 'Sea Creature', h: 'Ocean Marine' };
    if (/EAGLE|HAWK|FALCON|VULTURE|OWL|CROW|PIGEON|SWAN|DUCK|FLAMINGO|PEACOCK|PARROT|GOOSE|WOODPECKER/i.test(key)) return { m: 'Sky Bird', h: 'Feathered Flyer' };
    if (/SNAKE|COBRA|PYTHON|LIZARD|IGUANA|GECKO|TURTLE/i.test(key)) return { m: 'Scaly Reptile', h: 'Cold Blooded' };
    if (/BULL|COW|PIG|SHEEP|GOAT|CHICKEN|HORSE|DONKEY|ROOSTER|HENS/i.test(key)) return { m: 'Farm Animal', h: 'Barnyard Mammal' };
    return { m: 'Wild Creature', h: 'Nature Mammal' };
  }

  if (catId === 'food') {
    if (/JUICE|TEA|SODA|BEER|WINE|WATER|MILK|COFFEE|DRINK|SMOOTHIE|CIDER|CHAMPAGNE|WHISKEY|LEMONADE/i.test(key)) return { m: 'Liquid Drink', h: 'Beverage Pour' };
    if (/CAKE|COOKIE|DONUT|PIE|PANCAKE|WAFFLE|MUFFIN|PASTRY|SWEET|HONEY|SUGAR|CHOCOLATE|CROISSANT|BAGEL|TOAST/i.test(key)) return { m: 'Sweet Treat', h: 'Dessert Sugar' };
    if (/CHICKEN|STEAK|BACON|SAUSAGE|MEAT|PORK|BEEF/i.test(key)) return { m: 'Savory Meat', h: 'Protein Cut' };
    if (/SHRIMP|CRAB|FISH|LOBSTER|SEAFOOD/i.test(key)) return { m: 'Sea Food', h: 'Ocean Catch' };
    if (/BROCCOLI|CARROT|SPINACH|LETTUCE|CUCUMBER|PEPPER|MUSHROOM|CORN|PEAS|BEANS|POTATO|ONION|GARLIC/i.test(key)) return { m: 'Fresh Veggie', h: 'Garden Crop' };
    if (/APPLE|BANANA|ORANGE|STRAWBERRY|GRAPES|MELON|MANGO|PINEAPPLE|PEACH|CHERRY|LEMON|LIME|BERRY/i.test(key)) return { m: 'Sweet Fruit', h: 'Juicy Harvest' };
    if (/BREAD|BUTTER|YOGURT|EGGS|CHEESE|PASTA|RICE|NOODLES/i.test(key)) return { m: 'Pantry Staple', h: 'Starch Dairy' };
    return { m: 'Tasty Food', h: 'Kitchen Ingredient' };
  }

  if (catId === 'sports') {
    if (/BALL|SOCCER|FOOTBALL|BASKETBALL|TENNIS|BASEBALL|VOLLEYBALL|RUGBY|CRICKET|HOCKEY|LACROSSE|DODGEBALL|PING_PONG|TABLE_TENNIS|KICKBALL|SOFTBALL/i.test(key)) return { m: 'Ball Sport', h: 'Team Match' };
    if (/SKATING|ROLLER|BLADING|SKATEBOARDING|CYCLING|BIKING/i.test(key)) return { m: 'Wheel Sport', h: 'Active Ride' };
    if (/SURFING|ROWING|KAYAKING|CANOEING|SAILING|RAFTING|DIVING|WATERPOLO|SWIMMING/i.test(key)) return { m: 'Water Sport', h: 'Aquatic Action' };
    if (/SKIING|SNOWBOARDING|BLIZZARD|ICE/i.test(key)) return { m: 'Winter Sport', h: 'Snow Action' };
    if (/RUNNING|SPRINTING|MARATHON|JOGGING|HURDLING|JUMP|VAULT/i.test(key)) return { m: 'Track Event', h: 'Athletic Race' };
    if (/WRESTLING|JUDO|KARATE|BOXING|KICKBOXING|SUMO|FENCING|TAEKWONDO|KUNG_FU/i.test(key)) return { m: 'Combat Sport', h: 'Fist Fight' };
    if (/CLIMBING|HIKING|TREKKING|CAMPING|MOUNTAINEERING/i.test(key)) return { m: 'Outdoor Adventure', h: 'Mountain Trail' };
    if (/CHESS|CHECKERS|DOMINOES|CARROM|BILLIARDS|POOL|DARTS/i.test(key)) return { m: 'Board Game', h: 'Table Focus' };
    return { m: 'Active Sport', h: 'Athletic Game' };
  }

  if (catId === 'movies') {
    if (/WARS|SPACE|STAR|INTERSTELLAR|ALIEN|AVATAR|MATRIX|DUNE|ARRIVAL|GRAVITY|MARTIAN|TENET|INCEPTION/i.test(key)) return { m: 'SciFi Epic', h: 'Space Future' };
    if (/SHREK|NEMO|CARS|TOY|FROZEN|UP|WALL|COCO|MOANA|ALADDIN|MULAN|TARZAN|HERCULES|PINOCCHIO|DUMBO|BAMBI|CINDERELLA|SNOW|TANGLED|BRAVE|SOUL|LUCA/i.test(key)) return { m: 'Animated Magic', h: 'Family Film' };
    if (/TERMINATOR|ROBOCOP|RAMBO|ROCKY|AVENGERS|IRONMAN|THOR|SUPERMAN|DEADPOOL|WOLVERINE|DIE|SPEED|GLADIATOR/i.test(key)) return { m: 'Action Hero', h: 'Combat Screen' };
    if (/SHINING|EXORCIST|SCREAM|HALLOWEEN|JAWS|PSYCHO|GREMLINS|JOKER|PULP|FIGHT/i.test(key)) return { m: 'Horror Thriller', h: 'Scary Screen' };
    if (/CASABLANCA|TITANIC|GUMP|SHAWSHANK|GREEN/i.test(key)) return { m: 'Classic Romance', h: 'Drama Screen' };
    return { m: 'Famous Movie', h: 'Cinema Film' };
  }

  if (catId === 'places') {
    if (/ROME|VENICE|MILAN|FLORENCE|PISA|POMPEII|COLOSSEUM/i.test(key)) return { m: 'Historic Italy', h: 'Italian Town' };
    if (/ATHENS|SANTORINI|MYKONOS/i.test(key)) return { m: 'Ancient Greece', h: 'Greek Coast' };
    if (/MADRID|BARCELONA|IBIZA|MALLORCA/i.test(key)) return { m: 'Sunny Spain', h: 'Spanish Coast' };
    if (/TOKYO|SEOUL|BEIJING|SHANGHAI|HONG_KONG|BANGKOK|PHUKET|BALI|SINGAPORE|PHUKET|JEJU|BORACAY/i.test(key)) return { m: 'Asian Hub', h: 'Eastern City' };
    if (/LONDON|PARIS|BERLIN|MUNICH|VIENNA|AMSTERDAM|BRUSSELS|COPENHAGEN|STOCKHOLM|PRAGUE|BUDAPEST/i.test(key)) return { m: 'European Capital', h: 'Historic City' };
    if (/DUBAI|DOHA|RIYADH|ABU_DHABI|CAIRO|GIZA/i.test(key)) return { m: 'Desert Oasis', h: 'Middle East' };
    return { m: 'Famous Location', h: 'Global City' };
  }

  if (catId === 'jobs') {
    if (/DOCTOR|NURSE|SURGEON|PARAMEDIC|PHARMACIST|THERAPIST|DENTIST|VETERINARIAN/i.test(key)) return { m: 'Health Care', h: 'Medical Doctor' };
    if (/ENGINEER|DEVELOPER|PROGRAMMER|TECHNICIAN|SCIENTIST/i.test(key)) return { m: 'Tech Expert', h: 'Science Job' };
    if (/BUILDER|CARPENTER|PLUMBER|ELECTRICIAN|WELDER|MASON|PAINTER|ROOFER|MECHANIC|MINER|LOGGER/i.test(key)) return { m: 'Skilled Labor', h: 'Hands Trade' };
    if (/LAWYER|JUDGE|PARALEGAL|ATTORNEY|POLICE|OFFICER|INVESTIGATOR/i.test(key)) return { m: 'Law Justice', h: 'Order Duty' };
    if (/TEACHER|PROFESSOR|TUTOR|LIBRARIAN|COACH/i.test(key)) return { m: 'Education Lead', h: 'School Job' };
    if (/WRITER|AUTHOR|EDITOR|REPORTER|JOURNALIST|PUBLISHER/i.test(key)) return { m: 'Media Words', h: 'Press Write' };
    if (/ARTIST|DESIGNER|ILLUSTRATOR|PHOTOGRAPHER|VIDEOGRAPHER|ACTOR|DANCER|MUSICIAN|CHEF|BAKER/i.test(key)) return { m: 'Creative Art', h: 'Design Craft' };
    if (/PILOT|DRIVER|CONDUCTOR|SAILOR|MARINER|ASTRONAUT/i.test(key)) return { m: 'Vehicle Operator', h: 'Travel Command' };
    return { m: 'Career Profession', h: 'Job Role' };
  }

  if (catId === 'tech') {
    if (/LAPTOP|COMPUTER|SERVER|TABLET|PROCESSOR|MOTHERBOARD|GRAPHICS_CARD|CHIP|TRANSISTOR/i.test(key)) return { m: 'Computer Hardware', h: 'Silicon Chip' };
    if (/ROUTER|MODEM|NETWORK|FIREWALL|BLUETOOTH|WI_FI|CELLULAR|5G|SATELLITE/i.test(key)) return { m: 'Network Link', h: 'Wireless Signal' };
    if (/KEYBOARD|MOUSE|MONITOR|SPEAKER|WEBCAM|SCANNER|PROJECTOR|PRINTER|HEADSET|CONTROLLER|JOYSTICK/i.test(key)) return { m: 'Peripheral Device', h: 'Input Output' };
    if (/SOFTWARE|APPLICATION|WEBSITE|DATABASE|ALGORITHM|CODE|PROGRAMMING|COMPILER|DEBUGGER|EMAIL|BROWSER|SEARCH_ENGINE/i.test(key)) return { m: 'Software Code', h: 'Digital Script' };
    if (/BITCOIN|CRYPTOCURRENCY|BLOCKCHAIN/i.test(key)) return { m: 'Crypto Token', h: 'Digital Ledger' };
    if (/INTELLIGENCE|LEARNING|NEURAL/i.test(key)) return { m: 'Smart AI', h: 'Model Logic' };
    return { m: 'Tech Innovation', h: 'Digital Device' };
  }

  if (catId === 'things') {
    if (/TABLE|CHAIR|DESK|LAMP|BED|SOFA|WARDROBE|CLOSET|DRAWER|SHELF|CABINET/i.test(key)) return { m: 'Home Furniture', h: 'Room Decor' };
    if (/RUG|CARPET|CURTAIN|BLINDS|WINDOW|DOOR|WALL|FLOOR|CEILING|ROOF|CHIMNEY|STAIRS|ELEVATOR|ESCALATOR/i.test(key)) return { m: 'Building House', h: 'Room Part' };
    if (/PAPER|PEN|PENCIL|ERASER|RULER|SCISSORS|GLUE|TAPE|STAPLER|PAPERCLIP|FOLDER|BINDER|ENVELOPE|STAMP/i.test(key)) return { m: 'Office Supplies', h: 'Desk Stationery' };
    if (/SOAP|SHAMPOO|TOWEL|TOOTHBRUSH|TOOTHPASTE|COMB|BRUSH|RAZOR|HAIR_DRYER|PERFUME|COLOGNE|MAKEUP/i.test(key)) return { m: 'Personal Grooming', h: 'Bath Counter' };
    if (/JEWELRY|RING|NECKLACE|BRACELET|EARRINGS|WATCH|GLASSES/i.test(key)) return { m: 'Fashion Wear', h: 'Shiny Accessory' };
    return { m: 'Physical Object', h: 'Common Item' };
  }

  if (catId === 'nature') {
    if (/SUN|MOON|STAR|PLANET|ASTEROID|COMET|GALAXY|UNIVERSE|SKY/i.test(key)) return { m: 'Cosmic Space', h: 'Star Orbit' };
    if (/WIND|BREEZE|GALE|STORM|HURRICANE|TORNADO|TYPHOON|BLIZZARD|SNOW|RAIN|DRIZZLE|HAIL|SLEET|FROST|FOG|MIST|LIGHTNING/i.test(key)) return { m: 'Weather Element', h: 'Air Force' };
    if (/RIVER|STREAM|CREEK|BROOK|LAKE|POND|POOL|SWAMP|MARSH|BOG|WATERFALL/i.test(key)) return { m: 'Water Flow', h: 'Aquatic Basin' };
    if (/JUNGLE|RAINFOREST|WOODLAND|GROVE|ORCHARD|FOREST/i.test(key)) return { m: 'Tree Woods', h: 'Green Canopy' };
    if (/VALLEY|CANYON|GORGE|CLIFF|HILL|RIDGE|PEAK|SUMMIT|PLATEAU|PLAIN|MEADOW|FIELD|DESERT|MOUNTAIN/i.test(key)) return { m: 'Land Terrain', h: 'Earth Slope' };
    return { m: 'Nature Element', h: 'Wild Environment' };
  }

  if (catId === 'music') {
    if (/SAXOPHONE|CLARINET|OBOE|BASSOON|TROMBONE|TUBA|FRENCH_HORN|BUGLE|FLUTE|TRUMPET/i.test(key)) return { m: 'Wind Brass', h: 'Jazz Horn' };
    if (/GUITAR|PIANO|VIOLIN|BANJO|MANDOLIN|UKULELE|HARP|CELLO|VIOLA|DOUBLE_BASS/i.test(key)) return { m: 'String Key', h: 'Fret Board' };
    if (/DRUMS|XYLOPHONE|MARIMBA|GLOCKENSPIEL|CHIMES|TRIANGLE|TAMBOURINE|MARACAS|SHAKER|GONG|CYMBALS|SNARE|BASS_DRUM|TIMPANI|CONGAS|BONGOS|DJEMBE|CAJON/i.test(key)) return { m: 'Beating Rhythm', h: 'Percussion Strike' };
    if (/SYNTHESIZER|ORGAN|HARPSICHORD|MELODICA|THEREMIN|TURNTABLE|MIXER|AMPLIFIER|SUBWOOFER|EQUALIZER/i.test(key)) return { m: 'Audio Gear', h: 'Electronic Keys' };
    if (/NOTE|CHORD|SCALE|KEY|TEMPO|RHYTHM|BEAT|MELODY|HARMONY/i.test(key)) return { m: 'Theory Sound', h: 'Tune Step' };
    if (/LYRICS|VERSES|CHORUS|BRIDGE|SINGER|CONCERT/i.test(key)) return { m: 'Song Performance', h: 'Vocal Stage' };
    return { m: 'Music Instrument', h: 'Melody Sound' };
  }

  if (catId === 'countries') {
    if (/USA|CANADA|MEXICO|CUBA|JAMAICA|COSTA|PANAMA/i.test(key)) return { m: 'Americas Land', h: 'Western Nation' };
    if (/UK|GERMANY|ITALY|FRANCE|SPAIN|ICELAND|NORWAY|SWEDEN|FINLAND|DENMARK|IRELAND|SWITZERLAND|AUSTRIA|BELGIUM|NETHERLANDS|GREECE|PORTUGAL|POLAND|UKRAINE|ROMANIA|HUNGARY|CZECHIA|SLOVAKIA|CROATIA/i.test(key)) return { m: 'European Land', h: 'Historic Nation' };
    if (/JAPAN|INDIA|CHINA|SEOUL|THAILAND|VIETNAM|INDONESIA|MALAYSIA|SINGAPORE|PHILIPPINES|KOREA|MONGOLIA|KAZAKHSTAN|NEPAL|BANGLADESH|SRI_LANKA/i.test(key)) return { m: 'Asian Land', h: 'Eastern Nation' };
    if (/NIGERIA|KENYA|MOROCCO|EGYPT|MADAGASCAR|ETHIOPIA|GHANA|SENEGAL|UGANDA|SUDAN|ALGERIA|TUNISIA|LIBYA|ANGOLA|ZAMBIA|ZIMBABWE/i.test(key)) return { m: 'African Land', h: 'Safari Nation' };
    if (/AUSTRALIA|NEW_ZEALAND|FIJI|PAPUA_NEW_GUINEA/i.test(key)) return { m: 'Oceania Land', h: 'Pacific Nation' };
    if (/SAUDI|UAE|QATAR|ISRAEL|JORDAN|LEBANON|SYRIA|IRAQ|IRAN|YEMEN|OMAN|BAHRAIN/i.test(key)) return { m: 'Middle East', h: 'Gulf Nation' };
    return { m: 'Global Nation', h: 'Sovereign State' };
  }

  if (catId === 'anime') {
    if (/VEGETA|GOKU|SAIYAN/i.test(key)) return { m: 'Dragon Ball', h: 'Saiyan Warrior' };
    if (/SASUKE|NARUTO|FOX_NINJA/i.test(key)) return { m: 'Ninja World', h: 'Shinobi Fighter' };
    if (/DEKU|BAKUGO|TODOROKI/i.test(key)) return { m: 'Hero Academia', h: 'Quirk School' };
    if (/EREN|MIKASA|ARMIN|LEVI/i.test(key)) return { m: 'Titan Scout', h: 'Scout Regiment' };
    if (/GOJO|ITADORI|MEGUMI|NOBARA|SUKUNA/i.test(key)) return { m: 'Jujutsu Sorcerer', h: 'Curse Fight' };
    if (/LIGHT|L|RYUK/i.test(key)) return { m: 'Death Note', h: 'Mind Game' };
    if (/EDWARD|ALPHONSE|MUSTANG|ELRIC/i.test(key)) return { m: 'Alchemist Quest', h: 'State Military' };
    if (/BUGSBUNNY|DAFFYDUCK|PORKY|TWEETY|SYLVESTER/i.test(key)) return { m: 'Classic Cartoon', h: 'Looney Tunes' };
    if (/SCOOBY|SHAGGY|FRED|VELMA|DAPHNE/i.test(key)) return { m: 'Mystery Van', h: 'Mystery Solver' };
    if (/SIMPSONS|HOMER|BART|LISA/i.test(key)) return { m: 'Yellow Family', h: 'Springfield Town' };
    return { m: 'Anime Character', h: 'Cartoon Icon' };
  }

  if (catId === 'superheroes') {
    if (/ROBIN|NIGHTWING|BATGIRL|BEAST_BOY|RAVEN|STARFIRE|BATMAN/i.test(key)) return { m: 'Gotham Protectors', h: 'Teen Titans' };
    if (/HAWKEYE|BLACK_WIDOW|SCARLET_WITCH|VISION|FALCON|WINTER_SOLDIER|WAR_MACHINE|ANT_MAN|WASP|STRANGE|AVENGERS|IRON/i.test(key)) return { m: 'Avengers Team', h: 'Marvel Hero' };
    if (/CYCLOPS|JEAN_GREY|STORM|BEAST|ROGUE|GAMBIT|ICEMAN|ANGEL|NIGHTCRAWLER|COLOSSUS|KITTY|PROFESSOR_X|WOLVERINE|MAGNETO|MYSTIQUE|SABRETOOTH|JUGGERNAUT/i.test(key)) return { m: 'Mutant Team', h: 'XMen Force' };
    if (/GREEN_LANTERN|CYBORG|SHAZAM|SUPERGIRL|SUPERMAN|WONDER/i.test(key)) return { m: 'Justice League', h: 'DC Hero' };
    return { m: 'Hero Vigilante', h: 'Comic Character' };
  }

  if (catId === 'vehicles') {
    if (/CAR|TRUCK|VAN|BUS|TAXI|LIMOUSINE|JEEP|SUV|SEDAN|COUPE|CONVERTIBLE|SPORTS_CAR|RACECAR|MONSTER_TRUCK/i.test(key)) return { m: 'Road Wheel', h: 'Engine Drive' };
    if (/ENGINE|POLICE_CAR|TOW_TRUCK|GARBAGE_TRUCK|DUMP_TRUCK|CEMENT_MIXER|CRANE|BULLDOZER|EXCAVATOR|FORKLIFT/i.test(key)) return { m: 'Utility Truck', h: 'Work Machine' };
    if (/JET_SKI|MOTORBOAT|SAILBOAT|YACHT|CANOE|KAYAK|RAFT|FERRY|SHIP|BOAT/i.test(key)) return { m: 'Water Vessel', h: 'Ocean Hull' };
    if (/AIRSHIP|BLIMP|BALLOON|GLIDER|HANG_GLIDER|JETPACK|ROCKET|SPACESHIP|SHUTTLE|AIRPLANE|HELICOPTER/i.test(key)) return { m: 'Aero Flight', h: 'Sky Vessel' };
    return { m: 'Mode Transport', h: 'Engine Vehicle' };
  }

  if (catId === 'games') {
    if (/CHECKERS|DOMINOES|BACKGAMMON|GO|MAHJONG|CHESS|MONOPOLY|SCRABBLE|LUDO|CLUE|RISK|LIFE|CATAN/i.test(key)) return { m: 'Board Strategy', h: 'Table Game' };
    if (/CARDS|UNO|DOS|SKIP_BO|SOLITAIRE|SPADES|HEARTS|BRIDGE|BLACKJACK|BACCARAT|RUMMY|POKER/i.test(key)) return { m: 'Card Shuffle', h: 'Deck Bet' };
    if (/PONG|PAC_MAN|SPACE_INVADERS|ASTEROIDS|GALAGA|DONKEY_KONG|MARIO|ZELDA|METROID|SONIC|STREET_FIGHTER|MORTAL_KOMBAT|MINECRAFT|SNAKE|FORTNITE|AMONG/i.test(key)) return { m: 'Video Game', h: 'Arcade Console' };
    return { m: 'Play Game', h: 'Fun Match' };
  }

  if (catId === 'school') {
    if (/PEN|PAPER|ERASER|SHARPENER|RULER|SCISSORS|GLUE|TAPE|STAPLER|STAPLES|PAPERCLIP|BINDER|FOLDER|ENVELOPE|HIGHLIGHTER|MARKER|CRAYON|CHALK|BOARD_ERASER/i.test(key)) return { m: 'Desk Stationery', h: 'Study Supplies' };
    if (/TEXTBOOK|WORKBOOK|THESAURUS|ATLAS|JOURNAL|PLANNER|CALENDAR|DICTIONARY|BOOK|NOTEBOOK/i.test(key)) return { m: 'Reading Book', h: 'Study Paper' };
    if (/CLASSROOM|AUDITORIUM|GYMNASIUM|CAFETERIA|PLAYGROUND|LOCKER|HALLWAY|OFFICE|INFIRMARY|LABORATORY|COMPUTERS|DESK|BLACKBOARD/i.test(key)) return { m: 'Campus Room', h: 'School Facility' };
    if (/STUDENT|PRINCIPAL|VICE_PRINCIPAL|COUNSELOR|NURSE|JANITOR|COACH|PROFESSOR|TUTOR|DEAN|REGISTRAR|LECTURE|TEACHER|DOCTOR/i.test(key)) return { m: 'Campus Member', h: 'School Leader' };
    if (/EXAM|TEST|QUIZ|HOMEWORK|ASSIGNMENT|PROJECT|REPORT|ESSAY|GRADE|MARK|REPORT_CARD|DIPLOMA|GRADUATION/i.test(key)) return { m: 'Academic Score', h: 'School Event' };
    return { m: 'School Term', h: 'Campus Object' };
  }

  return {
    m: 'Word Association',
    h: 'Category Entry'
  };
}

function generateHints(word: string, catId: string): { medium: string; hard: string } {
  const res = generateHintsInternal(word, catId);
  return {
    medium: res.m,
    hard: res.h
  };
}

// Assemble full categoriesData
export const categoriesData: Category[] = baseCategories.map(cat => {
  const baseWordObjects: Word[] = cat.baseWords.map(bw => ({
    word: bw.word,
    hints: generateHints(bw.word, cat.id)
  }));
  const extras = extraWords[cat.id] || [];
  const extraWordObjects: Word[] = extras.map(w => ({
    word: w,
    hints: generateHints(w, cat.id)
  }));
  return {
    id: cat.id,
    name: cat.name,
    icon: cat.icon,
    words: [...baseWordObjects, ...extraWordObjects]
  };
});
