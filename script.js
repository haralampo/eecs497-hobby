document.getElementById('questionnaireForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const pastJob = document.getElementById('pastJob').value;
    const activityLevel = document.getElementById('activityLevel').value;
    const socialLevel = document.getElementById('socialLevel').value;
    const commitment = document.getElementById('commitment').value;
    const weatherFactor = document.getElementById('weatherFactor').value;

    // Define associations between answers and hobbies
    const hobbies = [
        { name: 'Acrylic Painting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Acting', criteria: ['creative', 'moderate', 'extrovert', 'high', 'no'] },
        { name: 'Aerobics', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Archery', criteria: ['physical', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Badminton', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Barre', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Baseball', criteria: ['physical', 'high', 'extrovert', 'high', 'warm'] },
        { name: 'Basketball', criteria: ['physical', 'high', 'extrovert', 'high', 'warm'] },
        { name: 'Baking', criteria: ['food/drink', 'moderate', 'introvert', 'moderate', 'no'] },
        { name: 'Bbq/Grilling', criteria: ['food/drink', 'moderate', 'introvert', 'low', 'warm'] },
        { name: 'Blogging', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Book Club', criteria: ['mental', 'low', 'extrovert', 'low', 'no'] },
        { name: 'Bowling', criteria: ['physical', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Boxing', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Brain Teasers', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Building Model Kits (Cars, Airplanes, Trains, Etc)', criteria: ['woodworking', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Building Wooden Toys', criteria: ['woodworking', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Bullet Journaling', criteria: ['creative', 'low', 'introvert', 'low', 'no'] },
        { name: 'Calligraphy', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Candle Making', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Canvas Art', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Card Making', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Carving', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Cheerleading', criteria: ['physical', 'high', 'extrovert', 'high', 'no'] },
        { name: 'Clay Crafts', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Cocktail Making', criteria: ['food/drink', 'moderate', 'introvert', 'moderate', 'no'] },
        { name: 'Collage Making', criteria: ['creative', 'low', 'introvert', 'low', 'no'] },
        { name: 'Collecting', criteria: ['mental', 'moderate', 'introvert', 'extremely high', 'no'] },
        { name: 'Coloring', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Concert Or Choir Photography', criteria: ['musical', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Cooking', criteria: ['food/drink', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Creating a Podcast', criteria: ['mental', 'low', 'extrovert', 'high', 'no'] },
        { name: 'Cross Country', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Cross Stitch', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Cricut Crafts', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Crochet', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Crossword Puzzles', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Cycling', criteria: ['physical', 'high', 'ambivert', 'moderate', 'no'] },
        { name: 'Dancing', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Darts', criteria: ['physical', 'moderate', 'ambivert', 'moderate', 'no'] },
        { name: 'Designing Graphics', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Diamond Painting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Doodling', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Drawing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Embroidery', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Elaborate Desserts', criteria: ['food/drink', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Fashion Design', criteria: ['creative', 'low', 'ambivert', 'high', 'no'] },
        { name: 'Fashion Photography', criteria: ['creative', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Felt Arts', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Fencing', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Figure Skating', criteria: ['physical', 'high', 'ambivert', 'high', 'cold'] },
        { name: 'Fishing', criteria: ['physical', 'moderate', 'ambivert', 'moderate', 'warm'] },
        { name: 'Flower Pressing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Football', criteria: ['physical', 'high', 'extrovert', 'high', 'warm'] },
        { name: 'Furniture Building', criteria: ['woodworking', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Gardening', criteria: ['physical', 'moderate', 'introvert', 'moderate', 'warm'] },
        { name: 'Glass Blowing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Glass Painting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Going To Museums', criteria: ['creative', 'moderate', 'introvert', 'low', 'no'] },
        { name: 'Golf', criteria: ['physical', 'moderate', 'ambivert', 'high', 'warm'] },
        { name: 'Gymnastics', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Hair Styling', criteria: ['creative', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Hiking', criteria: ['physical', 'high', 'ambivert', 'moderate', 'no'] },
        { name: 'Home Decorating', criteria: ['creative', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Horse Racing', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Ice Hockey', criteria: ['physical', 'high', 'extrovert', 'high', 'cold'] },
        { name: 'Ice Skating', criteria: ['physical', 'high', 'ambivert', 'high', 'cold'] },
        { name: 'Jewelry Making', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Jet Skiing', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Joining A Band', criteria: ['musical', 'moderate', 'extrovert', 'high', 'no'] },
        { name: 'Joining A Choir', criteria: ['musical', 'moderate', 'extrovert', 'high', 'no'] },
        { name: 'Journaling', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Juggling', criteria: ['physical', 'moderate', 'introvert', 'moderate', 'no'] },
        { name: 'Karate', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Kickboxing', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Knitting', criteria: ['ofcreativefice', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Learning A New Language', criteria: ['mental', 'low', 'extrovert', 'extremely high', 'no'] },
        { name: 'Learning About Various Musicians/Music Genres', criteria: ['musical', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Learning How To Read Music', criteria: ['musical', 'low', 'introvert', 'high', 'no'] },
        { name: 'Learning To Play An Instrument', criteria: ['musical', 'low', 'introvert', 'extremely high', 'no'] },
        { name: 'Learning To Write Lyrics', criteria: ['musical', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Leather Crafts', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Listening To Podcasts', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Magic', criteria: ['creative', 'low', 'ambivert', 'moderate', 'no'] },
        { name: 'Makeup Art', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Making Dream Catchers', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Memorizing Music Lyrics', criteria: ['musical', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Metal Detecting', criteria: ['creative', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Mod Podge Crafts', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Nail Art', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Note Taking/Researching', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Oil Painting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Origami', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Paint By Number', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Painting Rocks', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Party Planning', criteria: ['creative', 'moderate', 'introvert', 'high', 'no'] },
        { name: 'Pastel Art', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Photography', criteria: ['creative', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Pilates', criteria: ['physical', 'high', 'ambivert', 'moderate', 'no'] },
        { name: 'Poetry Writing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Pottery/Ceramics', criteria: ['creative', 'low', 'introvert', 'high', 'no'] },
        { name: 'Preserving Florals', criteria: ['creative', 'low', 'introvert', 'lmoderateow', 'no'] },
        { name: 'Prose Writing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Quilling', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Quilting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Reading', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Rock Climbing', criteria: ['physical', 'high', 'introvert', 'high', 'no'] },
        { name: 'Rock Tumbling', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Roller Skating', criteria: ['physical', 'high', 'introvert', 'high', 'warm'] },
        { name: 'Rugby', criteria: ['physical', 'high', 'extrovert', 'high', 'warm'] },
        { name: 'Running', criteria: ['physical', 'high', 'introvert', 'high', 'warm'] },
        { name: 'Running Track', criteria: ['physical', 'high', 'introvert', 'high', 'warm'] },
        { name: 'Sculpture', criteria: ['creative', 'low', 'introvert', 'high', 'no'] },
        { name: 'Scrapbooking', criteria: ['creative', 'low', 'introvert', 'low', 'no'] },
        { name: 'Scuba Diving', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Sewing', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Skateboarding', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Sketching', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Singing (Solo)', criteria: ['musical', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Skiing', criteria: ['physical', 'high', 'ambivert', 'high', 'cold'] },
        { name: 'Sky Diving', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Snowboarding', criteria: ['physical', 'high', 'ambivert', 'high', 'cold'] },
        { name: 'Soap Making', criteria: ['creative', 'low', 'introvert', 'low', 'no'] },
        { name: 'Soccer', criteria: ['physical', 'high', 'extrovert', 'high', 'warm'] },
        { name: 'Stained Glass', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Star Gazing', criteria: ['creative', 'low', 'introvert', 'low', 'no'] },
        { name: 'Starting A Music Blog', criteria: ['musical', 'low', 'introvert', 'low', 'no'] },
        { name: 'Starting A Youtube Channel', criteria: ['creative', 'low', 'ambivert', 'low', 'no'] },
        { name: 'String Art', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Sudoku', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Surfing', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Swimming', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Table Tennis', criteria: ['physical', 'moderate', 'ambivert', 'moderate', 'no'] },
        { name: 'Taekwondo', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Tai Chi', criteria: ['physical', 'high', 'ambivert', 'high', 'no'] },
        { name: 'Take A Cooking Class', criteria: ['food/drink', 'moderate', 'ambivert', 'high', 'no'] },
        { name: 'Taking Online Classes', criteria: ['mental', 'low', 'ambivert', 'high', 'no'] },
        { name: 'Tennis', criteria: ['physical', 'high', 'extrovert', 'high', 'no'] },
        { name: 'Tie Dye', criteria: ['creative', 'moderate', 'introvert', 'low', 'no'] },
        { name: 'Travel Planning', criteria: ['mental', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Volleyball', criteria: ['physical', 'high', 'extrovert', 'high', 'no'] },
        { name: 'Volunteering', criteria: ['mental', 'moderate', 'extrovert', 'low', 'no'] },
        { name: 'Walking', criteria: ['physical', 'high', 'introvert', 'low', 'no'] },
        { name: 'Water Skiing', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Watercolor Painting', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Weight Lifting', criteria: ['physical', 'high', 'introvert', 'high', 'no'] },
        { name: 'Wine, Beer Or Spirits Tasting', criteria: ['food/drink', 'low', 'ambivert', 'low', 'no'] },
        { name: 'Wind Surfing', criteria: ['physical', 'high', 'ambivert', 'high', 'warm'] },
        { name: 'Wood Burning', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Wood Carving', criteria: ['woodworking', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Wood Turning', criteria: ['woodworking', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Word Scrambles', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Wreath Making', criteria: ['creative', 'low', 'introvert', 'moderate', 'no'] },
        { name: 'Writing', criteria: ['mental', 'low', 'introvert', 'low', 'no'] },
        { name: 'Yoga', criteria: ['physical', 'high', 'introvert', 'moderate', 'no'] },

        // Add more hobbies and criteria as needed
    ];

    // Calculate scores for each hobby based on user answers
    const scores = hobbies.map(hobby => {
        let score = 0;
        for (let i = 0; i < hobby.criteria.length; i++) {
            if (hobby.criteria[i] === [pastJob, activityLevel, socialLevel, commitment, weatherFactor][i]) {
                score++;
            }
        }
        return { name: hobby.name, score: score };
    });

    // Sort hobbies by score (descending)
    scores.sort((a, b) => b.score - a.score);

    // Display the top 5 recommended hobbies
    const recommendedHobbiesList = document.getElementById('recommendedHobbies');
    recommendedHobbiesList.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const hobby = scores[i];
        const listItem = document.createElement('li');
        listItem.textContent = hobby.name;
        recommendedHobbiesList.appendChild(listItem);
    }

    // Show recommendations section
    const recommendationsSection = document.getElementById('recommendations');
    recommendationsSection.classList.remove('hidden');
});