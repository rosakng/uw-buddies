const surveyJson = {
  pages: [
    {
      name: 'page1',
      title: 'Academic Identity',
      elements: [
        {
          name: 'year_of_study',
          type: 'checkbox',
          isRequired: true,
          hideNumber: true,
          choices: ['1A/1B', '2A/2B', '3A/3B', '4A/4B', 'Undergraduate Year 4C+ or above', 'Masters', 'Doctorial'],
          title: 'My year of study at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'program',
          choices: ['Accounting and Financial Management', 'Actuarial Science', 'Anthropology', 'Applied Mathematics', 'Architectural Engineering', 'Architecture', 'Bachelor of Arts', 'Bachelor of Science', 'Biochemistry', 'Biology', 'Biomedical Engineering', 'Biomedical Sciences', 'Biostatistics', 'Biotechnology/Chartered Professional Accountancy', 'Business Administration (Laurier) and Computer Science (Waterloo) Double Degree', 'Business Administration (Laurier) and Mathematics (Waterloo) Double Degree', 'Business programs', 'Chemical Engineering', 'Chemistry', 'Civil Engineering', 'Classical Studies (2 majors available)', 'Climate and Environmental Change', 'Co-op programs', 'Combinatorics and Optimization', 'Communication Studies', 'Computational Mathematics', 'Computer Engineering', 'Computer Science', 'Computing and Financial Management', 'Data Science', 'Earth Sciences', 'Economics', 'Education (teaching)', 'Electrical Engineering', 'English (3 majors available)', 'Environment and Business', 'Environment, Resources and Sustainability', 'Environmental Engineering', 'Environmental programs at a glance', 'Environmental Science', 'Fine Arts (2 majors available)', 'French', 'Gender and Social Justice', 'Geography and Aviation', 'Geography and Environmental Management', 'Geological Engineering', 'Geomatics', 'German', 'Global Business and Digital Arts', 'Health Sciences', 'History', 'Honours Arts (29 majors available)', 'Honours Arts and Business (29 majors available)', 'Honours Science', 'Information Technology Management', 'International Development', 'Kinesiology', 'Knowledge Integration', 'Legal Studies', 'Liberal Studies', 'Life Physics', 'Life Sciences (4 majors available)', 'Management Engineering', 'Materials and Nanosciences', 'Mathematical Economics', 'Mathematical Finance', 'Mathematical Optimization', 'Mathematical Physics', 'Mathematics (14 majors available)', 'Mathematics/Business Administration', 'Mathematics/Chartered Professional Accountancy', 'Mathematics/Financial Analysis and Risk Management', 'Mathematics/Teaching', 'Mechanical Engineering', 'Mechatronics Engineering', 'Medicinal Chemistry', 'Medieval Studies', 'Minors and specializations', 'Music', 'Nanotechnology Engineering', 'Nursing', 'Optometry', 'Pathways to medical school and other health professions', 'Peace and Conflict Studies', 'Pharmacy', 'Philosophy', 'Physical Sciences (8 majors available)', 'Physics', 'Physics and Astronomy', 'Planning', 'Political Science', 'Pre-law', 'Psychology – Bachelor of Arts', 'Psychology – Bachelor of Science', 'Public Health', 'Pure Mathematics', 'Recreation and Leisure Studies', 'Recreation and Sport Business', 'Religious Studies', 'Science and Aviation', 'Science and Business', 'Sexuality, Marriage, and Family Studies', 'Social Development Studies', 'Social Work', 'Sociology', 'Software Engineering', 'Spanish', 'Statistics', 'Sustainability and Financial Management', 'Systems Design Engineering', 'Teaching', 'Theatre and Performance', 'Therapeutic Recreation'],
          isRequired: true,
          hideNumber: true,
          title: 'My Program at UWaterloo is:',
        },
      ],
      navigationTitle: 'Student',
      navigationDescription: "Student's info",
    },
    {
      name: 'page2',
      title: 'Buddy Preferences',
      elements: [
        {
          type: 'rating',
          name: 'similar_interests',
          title: 'Having similar interests matter to me when making a new friend',
          hideNumber: true,
          isRequired: true,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'compatibile_personality_type',
          title: 'Having a compatible personality type matters to me when making a new friend',
          hideNumber: true,
          isRequired: true,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_program',
          title: 'Being in the same program matters to me when making a new friend',
          hideNumber: true,
          isRequired: true,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_faculty',
          title: 'Being in the same faculty matters to me when making a new friend',
          hideNumber: true,
          isRequired: true,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_term',
          title: 'Being in the same term matters to me when making a new friend',
          hideNumber: true,
          isRequired: true,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
      ],
      navigationTitle: 'Preferences',
      navigationDescription: 'Scoring Function',
    },
    {
      name: 'page3',
      title: 'Interests',
      elements: [
        {
          type: 'panel',
          name: 'similar_interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'Creativity',
              type: 'checkbox',
              title: 'Creativity',
              colCount: 5,
              choices: ['Art', 'Design', 'Make-up', 'Photography', 'Writing', 'Singing', 'Dancing', 'Crafts', 'Making Content'],
              isRequired: true,
            },
            {
              name: 'Fitness',
              type: 'checkbox',
              title: 'Fitness',
              colCount: 5,
              choices: ['Badminton', 'Cycling', 'Gym', 'HIIT', 'Hiking', 'Horse riding', 'Pilates', 'Rock climbing', 'Roller blading', 'Running', 'Skateboarding', 'Skiing', 'Snowboarding', 'Spin', 'Surfing', 'Swimming', 'Walking', 'Yoga'],
              isRequired: true,
            },
            {
              name: 'Food',
              type: 'checkbox',
              title: 'Food',
              colCount: 5,
              choices: ['Vegan', 'Pizza', 'Vegetarian', 'Foodie', 'Sweet tooth', 'Baking', 'Brunch', 'Cooking', 'Eating out', 'Health foods', 'Sushi'],
              isRequired: true,
            },
          ],
        },
      ],
      navigationTitle: 'Interest',
      navigationDescription: 'Part 1',
    },
    {
      name: 'page4',
      title: 'Interests',
      elements: [
        {
          type: 'panel',
          name: 'similar_interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'Going Out',
              type: 'checkbox',
              title: 'Going Out',
              colCount: 5,
              choices: ['Concerts', 'Stand up', 'Festivals', 'Museums & galleries', 'Theatre', 'Nightclubs', 'Bars', 'Book clubs', 'Cinema', 'Nature', 'Picnics', 'Coffee chats', 'Karaoke'],
              isRequired: true,
            },
            {
              name: 'Movies',
              type: 'checkbox',
              title: 'Movies',
              colCount: 5,
              choices: ['Comedy', 'Drama', 'Horror', 'Fantasy', 'Sci-fi', 'Rom-com', 'Bollywood', 'Indie', 'Action', 'K-drama'],
              isRequired: true,
            },
            {
              name: 'Music',
              type: 'checkbox',
              title: 'Music',
              colCount: 5,
              choices: ['Hip hop', 'Rock', 'Electronic', 'R&B', 'Classical', 'Country', 'Jazz', 'Soul', 'Folk & acoustic', 'Afro', 'Arab', 'Reggae', 'Metal', 'Blues', 'Punk', 'Latin', 'Funk', 'Pop', 'Techno', 'House', 'Rap', 'Indie', '80s', '90s', '00s'],
              isRequired: true,
            },
          ],
        },
      ],
      navigationTitle: 'Interest',
      navigationDescription: 'Part 2',
    },
    {
      name: 'page5',
      title: 'Interests',
      elements: [
        {
          type: 'panel',
          name: 'similar_interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'Pets',
              type: 'checkbox',
              title: 'Pets',
              colCount: 5,
              choices: ['Dogs', 'Cats', 'Rabbits', 'Birds', 'Snakes', 'Lizards', 'Turtles', 'Fish', 'Hamsters', 'Horses', 'Turtles'],
              isRequired: true,
            },
            {
              name: 'Sports',
              type: 'checkbox',
              title: 'Sports',
              colCount: 5,
              choices: ['Soccer', 'Tennis', 'Basketball', 'Hockey', 'Volleyball', 'Ping pong', 'Golf', 'Rugby', 'Boxing', 'Rowing', 'Martial arts', 'Gymnastics', 'Bowling', 'Go karting', 'Football', 'Athletics', 'Baseball', 'Handball', 'Curling'],
              isRequired: true,
            },
            {
              name: 'Staying In',
              type: 'checkbox',
              title: 'Staying In',
              colCount: 5,
              choices: ['Board games', 'Gardening', 'Cooking', 'Takeout', 'Gaming', 'TV', 'Movie nights', 'Reading'],
              isRequired: true,
            },
          ],
        },
      ],
      navigationTitle: 'Interest',
      navigationDescription: 'Part 3',
    },
    {
      name: 'page6',
      title: 'Interests',
      elements: [
        {
          type: 'panel',
          name: 'similar_interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'Travelling',
              type: 'checkbox',
              title: 'Travelling',
              colCount: 5,
              choices: ['Beaches', 'Winter sports', 'Camping', 'Backpacking', 'Hiking trips', 'Road trips', 'City breaks', 'Staycations', 'Fishing trips'],
              isRequired: true,
            },
            {
              name: 'Wellness',
              type: 'checkbox',
              title: 'Wellness',
              colCount: 5,
              choices: ['Aromatherapy', 'ASMR', 'Meditation', 'Nature', 'Organic', 'Plants', 'Self care', 'Spa weekends', 'Yoga', 'Journaling'],
              isRequired: true,
            },
          ],
        },
      ],
      navigationTitle: 'Interest',
      navigationDescription: 'Part 3',
    },
    {
      name: 'page7',
      title: 'Personality',
      elements: [
        {
          type: 'matrix',
          name: '1',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: false,
          isAllRowRequired: true,
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            }, {
              value: 2,
              text: 'Disagree',
            }, {
              value: 3,
              text: 'Neutral',
            }, {
              value: 4,
              text: 'Agree',
            }, {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'p1',
              text: 'Am the life of the party',
            },
            {
              value: 'p2',
              text: 'Feel little concern for others',
            },
            {
              value: 'p3',
              text: 'Am always prepared',
            },
            {
              value: 'p4',
              text: 'Get stressed out easily',
            },
            {
              value: 'p5',
              text: 'Have a rich vocabulary',
            },
            {
              value: 'p6',
              text: 'Don\'t talk a lot',
            },
            {
              value: 'p7',
              text: 'Am interested in people',
            },
            {
              value: 'p8',
              text: 'Leave my belongings around',
            },
            {
              value: 'p9',
              text: 'Am relaxed most of the time',
            },
            {
              value: 'p10',
              text: 'Have difficulty understanding abstract ideas',
            },
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 1',
    },
    {
      name: 'page8',
      title: 'Personality',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isAllRowRequired: true,
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            }, {
              value: 2,
              text: 'Disagree',
            }, {
              value: 3,
              text: 'Neutral',
            }, {
              value: 4,
              text: 'Agree',
            }, {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'p11',
              text: 'Feel comfortable around people',
            },
            {
              value: 'p12',
              text: 'Insult people',
            },
            {
              value: 'p13',
              text: 'Pay attention to details',
            },
            {
              value: 'p14',
              text: 'Worry about things',
            },
            {
              value: 'p15',
              text: 'Have a vivid imagination',
            },
            {
              value: 'p16',
              text: 'Keep in the background',
            },
            {
              value: 'p17',
              text: 'Sympathize with others\' feelings',
            },
            {
              value: 'p18',
              text: 'Make a mess of things',
            },
            {
              value: 'p19',
              text: 'Seldom feel blue',
            },
            {
              value: 'p20',
              text: 'Am not interested in abstract ideas',
            },
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 2',
    },
    {
      name: 'page9',
      title: 'Personality',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isAllRowRequired: true,
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            }, {
              value: 2,
              text: 'Disagree',
            }, {
              value: 3,
              text: 'Neutral',
            }, {
              value: 4,
              text: 'Agree',
            }, {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'p21',
              text: 'Start conversations',
            },
            {
              value: 'p22',
              text: 'Am not interested in other people\'s problems',
            },
            {
              value: 'p23',
              text: 'Get chores done right away',
            },
            {
              value: 'p24',
              text: 'Am easily disturbed',
            },
            {
              value: 'p25',
              text: 'Have excellent ideas',
            },
            {
              value: 'p26',
              text: 'Have little to say',
            },
            {
              value: 'p27',
              text: 'Have a soft heart',
            },
            {
              value: 'p28',
              text: 'Often forget to put things back in their proper place',
            },
            {
              value: 'p29',
              text: 'Get upset easily',
            },
            {
              value: 'p30',
              text: 'Do not have a good imagination',
            },
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 3',
    },
    {
      name: 'page10',
      title: 'Personality',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isAllRowRequired: true,
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            }, {
              value: 2,
              text: 'Disagree',
            }, {
              value: 3,
              text: 'Neutral',
            }, {
              value: 4,
              text: 'Agree',
            }, {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'p31',
              text: 'Talk to a lot of different people at parties',
            },
            {
              value: 'p32',
              text: 'Am not really interested in others',
            },
            {
              value: 'p33',
              text: 'Like order',
            },
            {
              value: 'p34',
              text: 'Change my mood a lot',
            },
            {
              value: 'p35',
              text: 'Am quick to understand things',
            },
            {
              value: 'p36',
              text: 'Don\'t like to draw attention to myself',
            },
            {
              value: 'p37',
              text: 'Take time out for others',
            },
            {
              value: 'p38',
              text: 'Shirk my duties',
            },
            {
              value: 'p39',
              text: 'Have frequent mood swings',
            },
            {
              value: 'p40',
              text: 'Use difficult words',
            },
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 4',
    },
    {
      name: 'page11',
      title: 'Personality',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isAllRowRequired: true,
          columns: [
            {
              value: 1,
              text: 'Strongly Disagree',
            }, {
              value: 2,
              text: 'Disagree',
            }, {
              value: 3,
              text: 'Neutral',
            }, {
              value: 4,
              text: 'Agree',
            }, {
              value: 5,
              text: 'Strongly Agree',
            },
          ],
          rows: [
            {
              value: 'p41',
              text: 'Don\'t mind being the center of attention',
            },
            {
              value: 'p42',
              text: 'Feel others\' emotions',
            },
            {
              value: 'p43',
              text: 'Follow a schedule',
            },
            {
              value: 'p44',
              text: 'Get irritated easily',
            },
            {
              value: 'p45',
              text: 'Spend time reflecting on things',
            },
            {
              value: 'p46',
              text: 'Am quiet around strangers',
            },
            {
              value: 'p47',
              text: 'Make people feel at ease',
            },
            {
              value: 'p48',
              text: 'Am exacting in my work',
            },
            {
              value: 'p49',
              text: 'Often feel blue',
            },
            {
              value: 'p50',
              text: 'Am full of ideas',
            },
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 6',
    },
  ],
  showProgressBar: 'top',
  completedHtml: 'Thanks for participating in UW Buddies. <br /><br /> Stay tuned for your match results!',
};

export default surveyJson;
