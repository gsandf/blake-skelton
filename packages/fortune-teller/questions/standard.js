const inputs = [
  'am I a good person',
  'am I currently pregnant',
  'am I his girlfriend',
  'am I moving back to philly',
  'am I moving',
  'am I pregnant',
  'are airplanes flown inside',
  'are apples red fruit',
  'are aspirin and blah medicines',
  'are bananas and oranges sweet vegetables',
  'are band-aids used for healing',
  'are cars used to drive on the water',
  'are chips and pretzels salty',
  'are clocks and bikes used to tell time',
  'are coffee and hot chocolate cold drinks',
  'are computers used to brush your teeth with',
  'are dogs and cats animals that live in the jungle',
  'are flies and robins small insects',
  'are football and baseball types of food',
  'are fruits and vegetables healthy to eat',
  'are houses more than $50 dollars',
  'are lasagna and spaghetti Chinese dishes',
  'are lizards small',
  'are muscles needed to move our body',
  'are musicians and artists creative',
  'are my parents proud of me',
  'are ovens used to freeze things',
  'are paint and syrup used to take a bath in',
  'are peanuts made into jam',
  'are pencils and markers used to write on a whiteboard',
  'are pillows and mattresses used to sleep on',
  'are rattlesnakes poisonous',
  'are roses tall trees',
  'are scoops of ice cream sweet',
  'are shoes worn over the top of socks',
  'are shovels something you would use to dig a hole with',
  'are Spanish and German different languages',
  'are the last days approaching',
  'are the letters d and s in the word dressing',
  'are there 80 minutes in an hour',
  'are tryouts next week',
  'are umbrellas used to keep you wet',
  'are violins and pianos musical instruments',
  'are we going to be together again',
  'are we really in love',
  'are wild animals dangerous',
  'can a backpack get a cold',
  'can a circle have corners',
  'can a fish live out of water',
  'can a tiger be your pet',
  'can he really know how to love',
  'can I really make this jump',
  'can pigs walk on two feet',
  'can space save our relationship',
  'can the Titans win the next Superbowl',
  'can the world be saved',
  'can this thing really help me',
  'can you brush your teeth with a shoe',
  'can you buy eggs by the dozen',
  'can you drive a car wearing a blindfold',
  'can you drive a car without wearing a seatbelt',
  'can you eat tomato soup with a fork',
  'can you eat without a mouth',
  'can you freeze orange juice',
  'can you fry vegetables in a pan',
  'can you grow a mustache on your foot',
  'can you jump over a puddle',
  'can you keep a horse inside your house',
  'can you make bread without using flour',
  'can you rake leaves with a hammer',
  'can you ride a bike without a helmet',
  'can you ride a camel',
  'can you rip concrete',
  'can you see in the dark without a flashlight',
  'can you sleep in the day time',
  'can you stir something with a spoon',
  'can you stretch a rock',
  'can you teach a cat to talk',
  'can you touch your elbow with your nose',
  'can you use a shovel at the beach',
  'can you wear a tie',
  'Can you wear pajamas to school',
  'could I spend more on clothes',
  'could my mom try and sue me',
  'could she try and leave me',
  'could the Celtics win the NBA title',
  'could this be the last time I see him',
  'did I forget to lock my door',
  'did I really love her',
  'did joe come to confess his love to me',
  'did joe come to see if his feelings are the same for me',
  'did my date really ditch me',
  'did that bad date really matter',
  'did the chicken go bad in the fridge',
  'do astronauts work in grocery stores',
  'do babies need their diapers changed',
  'do baby birds get fed by their mother',
  'do butterflies run fast',
  'do cars have engines',
  'do cats climb trees',
  'do children play with toys',
  'do computers help us find information',
  'do elephants live in the ocean',
  'do erasers remove pencil marks',
  'do fire extinguishers help fireman',
  'do football players use sticks',
  'do horses wear socks',
  'do I have a chance',
  'do I like him enough to be my bf',
  'do I like him',
  'do new clothes get dirty',
  'do pilots fly paper planes',
  'do plants wear glasses',
  'do storms damage homes',
  'do teachers help you learn',
  'do we call a school if we have an emergency',
  'do we have a staff meeting',
  'do we need our hands to play a musical instrument',
  'do we really need each other',
  'do windows need to be cleaned',
  'do you chew soup',
  'do you enjoy travelling',
  'do you get wet when you go swimming',
  'do you still work',
  'do you throw things in the garbage that are broken',
  'do you use roller skates on the grass',
  'does an orange have more juice than a banana',
  'does Domenic want a relationship',
  'does duane want a relationship with me',
  'does he love me to death',
  'does he want me out of his life',
  'does he want to see Fleetwood Mac with me',
  'does it snow during the summer',
  'does john miss me',
  'does my husband understand happy wife happy life',
  'does the sun make things hot',
  'does warren meet Loretta at the store before work',
  'does yogurt go bad if not refrigerated',
  'does your birthday always happen on the same day',
  'has he been cheating on me',
  'has it really been too long to get back together',
  'has mike been on a date already',
  'has the milk spoiled in the fridge',
  'has this trip made joe realize he wants to be with me forever',
  'has this workout really been helping me',
  'have I been cheating on my wife',
  'have I been spending too much on clothes',
  'have I lost my sense of empathy',
  'have I spoken to my soulmate before',
  'have the Predators been practicing hard',
  'have the staff been spreading rumors about me',
  'if it is June, is it hot at the North Pole',
  'if someone smiles, are they sad',
  'if something is light, would it sink',
  'if something is tasty, is it bad',
  'if something smells, does it stink',
  'if there is snow on the ground, is it summer',
  'if you break an egg, can you fix it',
  'if you cut yourself really bad, should you go to the dentist',
  'if you have a ball, can you play catch',
  'if you have a bracelet, do you own jewelry',
  'if you have a pen and paper, can you write your name',
  'if you have boiling water, is it hot',
  'if you rip your shirt, would you staple it back together',
  'if you want to watch a movie, would you go to a bank',
  'if you wanted to get warm, would you drink hot chocolate',
  'if you went to a restaurant, would you see clowns',
  'if you were a bee, could you sing',
  'if you were a bird, would you have fins',
  'if you were a builder, would you use a hammer',
  'if you were a cat, would you have three legs',
  'if you were a caterpillar, would you have legs',
  'if you were a chair, could you swim',
  'if you were a computer, would you be alive',
  'if you were a fish, could you jump',
  'if you were a horse, could you gallup',
  'if you were a shark, would you eat fish',
  'if you were an ant, would you live in dirt',
  'if you were an owner, would you have a pet',
  'if you were rotten, would you smell nice',
  'if your bike has a flat tire, should you ride it',
  'is Domenic a cheater',
  'is everything going to be okay',
  'is he lying to me',
  'is he scared that he may of lose me',
  'is it worth betting on the next game',
  'is john able to drive',
  'is john happy',
  'is john still sick',
  'is Julien seeing someone else',
  'is my wife cheating',
  'is she mad at me',
  'is the person I love in this building',
  'is this all a dream',
  'is your favorite drink coffee',
  'may I have a wish',
  'may I have some extra luck',
  'should I apply for the library manager position',
  'should I buy the dress',
  'should I get a burger for lunch',
  'should I give becky the money for shopping',
  'should I go to see fleetwood mac',
  'should I go to the casino today',
  'should I reach out to him',
  'should I talk to Sanskar',
  'so am I a nice person',
  'was he cheating on me',
  'was I too mean to him',
  'was it okay that I did not help out',
  'was my friend lying about why we couldnt hang out',
  'was the World Series fixed',
  'was this the last time she will talk to me',
  'were the elections rigged',
  'were these earrings really his grandmothers',
  'were they going to beat me up',
  'were we going to kiss',
  'will Andy pick me',
  'will Erick show me that he wants to talk to me all the time again',
  'will George ask me to marry him',
  'will I buy a new bmw convertible this week',
  'will I crack it',
  'will I die after 100',
  'will I find a new and better job',
  'will I get a raise',
  'will I get in trouble',
  'will I retire from my current job',
  'will I still be a lieutenant',
  'will I win powerball',
  'will I win the lotto tonight',
  'will Sam and I ever get back together again',
  'will Sam ever change',
  'will this coffee date between Lindsay fisher and I happen soon',
  'will this coffee date happen',
  'will we make this coffee date happen soon'
];

module.exports = {
  id: 'standard',
  inputs,
  lang: 'en',
  outputs: [
    'It is certain.',
    'It is decidedly so.',
    'Without a doubt.',
    'Yes - definitely.',
    'You may rely on it.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Yes.',
    'Signs point to yes.',
    'Reply hazy, try again',
    'Ask again later.',
    'Better not tell you now.',
    'Cannot predict now.',
    'Concentrate and ask again.',
    "Don't count on it.",
    'My reply is no.',
    'My sources say no.',
    'Outlook not so good.',
    'Very doubtful.'
  ]
};