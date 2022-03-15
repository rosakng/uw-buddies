const requiredVal = true;
const surveyJson = {
  pages: [
    {
      name: 'page1',
      title: 'Academic Identity',
      elements: [
        {
          type: 'text',
          name: 'name',
          isRequired: requiredVal,
          hideNumber: false,
          title: 'My full name is:',
        },
        {
          name: 'term',
          type: 'radiogroup',
          isRequired: requiredVal,
          hideNumber: false,
          hasNone: false,
          colCount: 2,
          choices: ['1A', '1B', '2A', '2B', '3A', '3B', '4A', '4B', 'Undergraduate Year 4C+ or above', 'Masters', 'Doctorial'],
          title: 'My year of study at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'faculty',
          choices: ['Arts', 'Engineering', 'Environment', 'Health', 'Mathematics', 'Science'],
          isRequired: requiredVal,
          hideNumber: false,
          title: 'My Faculty at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Accounting and Financial Management', 'Anthropology', 'Classical Studies', 'Communication Studies', 'Computing and Financial Management', 'Economics', 'English', 'Fine Arts', 'French', 'Gender and Social Justice', 'German', 'Global Business and Digital Arts', 'History', 'Honours Arts', 'Honours Arts and Business', 'Legal Studies', 'Liberal Studies', 'Medieval Studies', 'Music', 'Peace and Conflict Studies', 'Philosophy', 'Political Science', 'Psychology', 'Religious Studies', 'Sexuality, Marriage, and Family Studies', 'Social Development Studies', 'Social Work', 'Sociology', 'Spanish', 'Sustainability and Financial Management', 'Theatre and Performance'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Arts'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Architectural Engineering', 'Architecture', 'Biomedical Engineering', 'Chemical Engineering', 'Civil Engineering', 'Computer Engineering', 'Electrical Engineering', 'Environmental Engineering', 'Geological Engineering', 'Management Engineering', 'Mechanical Engineering', 'Mechatronics Engineering', 'Nanotechnology Engineering', 'Software Engineering', 'Systems Design Engineering'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Engineering'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Climate and Environmental Change', 'Environment and Business', 'Environment, Resources and Sustainability', 'Geography and Aviation', 'Geography and Environmental Management', 'Geomatics', 'International Development', 'Knowledge Integration', 'Planning', 'Sustainability and Financial Management'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Environment'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Health Sciences', 'Kinesiology', 'Public Health', 'Recreation and Leisure Studies', 'Recreation and Sport Business', 'Therapeutic Recreation'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Health'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Actuarial Science', 'Applied Mathematics', 'Biostatistics', 'Business Administration (Laurier) and Computer Science (Waterloo) Double Degree', 'Business Administration (Laurier) and Mathematics (Waterloo) Double Degree', 'Combinatorics and Optimization', 'Computational Mathematics', 'Computer Science', 'Computing and Financial Management', 'Data Science', 'Information Technology Management', 'Mathematical Economics', 'Mathematical Finance', 'Mathematical Optimization', 'Mathematical Physics', 'Mathematical Studies', 'Mathematics', 'Mathematics/Business Administration', 'Mathematics/Chartered Professional Accountancy', 'Mathematics/Financial Analysis and Risk Management', 'Mathematics Teaching', 'Pure Mathematics', 'Statistics'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Mathematics'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'studentProgram',
          choices: ['Biochemistry', 'Biology', 'Biomedical Sciences', 'Biotechnology/Chartered Professional Accountancy', 'Chemistry', 'Earth Sciences', 'Environmental Science', 'Honours Science', 'Life Physics', 'Life Sciences', 'Physical Sciences', 'Psychology', 'Materials and Nanosciences', 'Mathematical Physics', 'Medicinal Chemistry', 'Optometry', 'Pharmacy', 'Physics', 'Physics and Astronomy', 'Science and Aviation', 'Science and Business'],
          isRequired: requiredVal,
          visibleIf: "{faculty}='Science'",
          valueName: 'program',
          hideNumber: false,
          title: 'My Program at UWaterloo is:',
        },
        {
          type: 'dropdown',
          name: 'currentCoopStatus',
          choices: ['I\'m on co-op right now', 'I\'m on a study term right now', 'I\'m not in a co-op program'],
          isRequired: requiredVal,
          hideNumber: false,
          title: 'My co-op status at UWaterloo is:',
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
          name: 'sameInterests',
          title: 'Having similar interests matter to me when making a new friend',
          hideNumber: false,
          isRequired: requiredVal,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'samePersonality',
          title: 'Having a compatible personality type matters to me when making a new friend',
          hideNumber: false,
          isRequired: requiredVal,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'sameProgram',
          title: 'Being in the same program matters to me when making a new friend',
          hideNumber: false,
          isRequired: requiredVal,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'sameFaculty',
          title: 'Being in the same faculty matters to me when making a new friend',
          hideNumber: false,
          isRequired: requiredVal,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'sameTerm',
          title: 'Being in the same academic year matters to me when making a new friend',
          hideNumber: false,
          isRequired: requiredVal,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'sameCurrentCoopStatus',
          title: 'Being on the same type of academic term matters to me when making a new friend (i.e. work term or study term)',
          hideNumber: false,
          isRequired: requiredVal,
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
          name: 'interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'creativity',
              type: 'checkbox',
              title: 'Creativity',
              hasNone: true,
              colCount: 5,
              choices: ['Art', 'Design', 'Make-up', 'Photography', 'Writing', 'Singing', 'Dancing', 'Crafts', 'Making content'],
              isRequired: requiredVal,
            },
            {
              name: 'food',
              type: 'checkbox',
              title: 'Food',
              hasNone: true,
              colCount: 5,
              choices: ['Vegan', 'Pizza', 'Vegetarian', 'Foodie', 'Sweet tooth', 'Baking', 'Brunch', 'Cooking', 'Eating out', 'Health foods', 'Sushi'],
              isRequired: requiredVal,
            },
            {
              name: 'goingOut',
              type: 'checkbox',
              title: 'Going Out',
              hasNone: true,
              colCount: 5,
              choices: ['Concerts', 'Stand up', 'Festivals', 'Museums & galleries', 'Theatre', 'Nightclubs', 'Bars', 'Book clubs', 'Cinema', 'Nature', 'Picnics', 'Coffee chats', 'Karaoke'],
              isRequired: requiredVal,
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
          name: 'interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'movies',
              type: 'checkbox',
              title: 'Movies',
              hasNone: true,
              colCount: 5,
              choices: ['Comedy', 'Drama', 'Horror', 'Fantasy', 'Sci-fi', 'Rom-com', 'Bollywood', 'Indie', 'Action', 'K-drama'],
              isRequired: requiredVal,
            },
            {
              name: 'music',
              type: 'checkbox',
              title: 'Music',
              hasNone: true,
              colCount: 5,
              choices: ['Hip hop', 'Rock', 'Electronic', 'R&B', 'Classical', 'Country', 'Jazz', 'Soul', 'Folk & acoustic', 'Afro', 'Arab', 'Reggae', 'Metal', 'Blues', 'Punk', 'Latin', 'Funk', 'Pop', 'Techno', 'House', 'Rap', 'Indie', '80s', '90s', '00s'],
              isRequired: requiredVal,
            },
            {
              name: 'pets',
              type: 'checkbox',
              title: 'Pets',
              hasNone: true,
              colCount: 5,
              choices: ['Dogs', 'Cats', 'Rabbits', 'Birds', 'Snakes', 'Lizards', 'Turtles', 'Fish', 'Hamsters', 'Horses'],
              isRequired: requiredVal,
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
          name: 'interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'sportsFitness',
              type: 'checkbox',
              title: 'Sports & Fitness',
              hasNone: true,
              colCount: 5,
              choices: ['Gym', 'HIIT', 'Hiking', 'Pilates', 'Running', 'Spin', 'Walking', 'Yoga', 'Badminton', 'Baseball', 'Basketball', 'Bowling', 'Boxing', 'Curling', 'Cycling', 'Football', 'Go karting', 'Golf', 'Gymnastics', 'Handball', 'Hockey', 'Horse riding', 'Martial arts', 'Ping pong', 'Rock climbing', 'Roller blading', 'Rowing', 'Rugby', 'Skateboarding', 'Skiing', 'Snowboarding', 'Soccer', 'Surfing', 'Swimming', 'Tennis', 'Ultimate'],
              isRequired: requiredVal,
            },
            {
              name: 'stayingIn',
              type: 'checkbox',
              title: 'Staying In',
              hasNone: true,
              colCount: 5,
              choices: ['Board games', 'Gardening', 'Cooking', 'Takeout', 'Gaming', 'TV', 'Movie nights', 'Reading'],
              isRequired: requiredVal,
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
          name: 'interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          elements: [
            {
              name: 'travelling',
              type: 'checkbox',
              title: 'Travelling',
              hasNone: true,
              colCount: 5,
              choices: ['Beaches', 'Winter sports', 'Camping', 'Backpacking', 'Hiking trips', 'Road trips', 'City breaks', 'Staycations', 'Fishing trips'],
              isRequired: requiredVal,
            },
            {
              name: 'wellness',
              type: 'checkbox',
              title: 'Wellness',
              hasNone: true,
              colCount: 5,
              choices: ['Aromatherapy', 'ASMR', 'Meditation', 'Nature', 'Organic', 'Plants', 'Self care', 'Spa weekends', 'Yoga', 'Journaling'],
              isRequired: requiredVal,
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
          isAllRowRequired: requiredVal,
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
              value: 'lifeOfTheParty',
              text: 'Am the life of the party',
            },
            {
              value: 'littleConcernForOthers',
              text: 'Feel little concern for others',
            },
            {
              value: 'alwaysPrepared',
              text: 'Am always prepared',
            },
            {
              value: 'stressedOutEasily',
              text: 'Get stressed out easily',
            },
            {
              value: 'richVocabulary',
              text: 'Have a rich vocabulary',
            },
            {
              value: 'notTalkAlot',
              text: 'Don\'t talk a lot',
            },
            {
              value: 'interestedInPeople',
              text: 'Am interested in people',
            },
            {
              value: 'leaveBelongingsAround',
              text: 'Leave my belongings around',
            },
            {
              value: 'relaxedMostOfTheTime',
              text: 'Am relaxed most of the time',
            },
            {
              value: 'difficultyUnderstandingAbstractIdeas',
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
          hideNumber: false,
          isAllRowRequired: requiredVal,
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
              value: 'comfortableAroundPeople',
              text: 'Feel comfortable around people',
            },
            {
              value: 'insultPeople',
              text: 'Insult people',
            },
            {
              value: 'attentionToDetails',
              text: 'Pay attention to details',
            },
            {
              value: 'worryAboutThings',
              text: 'Worry about things',
            },
            {
              value: 'vividImagination',
              text: 'Have a vivid imagination',
            },
            {
              value: 'keepInBackground',
              text: 'Keep in the background',
            },
            {
              value: 'sympathizeWithFeelings',
              text: 'Sympathize with others\' feelings',
            },
            {
              value: 'makeMessOfThings',
              text: 'Make a mess of things',
            },
            {
              value: 'seldomFeelBlue',
              text: 'Seldom feel blue',
            },
            {
              value: 'notInterestedInAbstractIdeas',
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
          hideNumber: false,
          isAllRowRequired: requiredVal,
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
              value: 'startConversations',
              text: 'Start conversations',
            },
            {
              value: 'notInterestedInOtherPeoplesProblems',
              text: 'Am not interested in other people\'s problems',
            },
            {
              value: 'getChoresDoneRightAway',
              text: 'Get chores done right away',
            },
            {
              value: 'easilyDisturbed',
              text: 'Am easily disturbed',
            },
            {
              value: 'excellentIdeas',
              text: 'Have excellent ideas',
            },
            {
              value: 'littleToSay',
              text: 'Have little to say',
            },
            {
              value: 'softHeart',
              text: 'Have a soft heart',
            },
            {
              value: 'forgetToPutThingsBack',
              text: 'Often forget to put things back in their proper place',
            },
            {
              value: 'upsetEasily',
              text: 'Get upset easily',
            },
            {
              value: 'doNotHaveGoodImagination',
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
          hideNumber: false,
          isAllRowRequired: requiredVal,
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
              value: 'talkToDifferentPeopleAtParties',
              text: 'Talk to a lot of different people at parties',
            },
            {
              value: 'notInterestedInOthers',
              text: 'Am not really interested in others',
            },
            {
              value: 'likeOrder',
              text: 'Like order',
            },
            {
              value: 'changeMoodAlot',
              text: 'Change my mood a lot',
            },
            {
              value: 'quickToUnderstandThings',
              text: 'Am quick to understand things',
            },
            {
              value: 'dontDrawAttentionToMyself',
              text: 'Don\'t like to draw attention to myself',
            },
            {
              value: 'takeTimeOutForOthers',
              text: 'Take time out for others',
            },
            {
              value: 'shirkDuties',
              text: 'Shirk my duties',
            },
            {
              value: 'frequentMoodSwings',
              text: 'Have frequent mood swings',
            },
            {
              value: 'difficultWords',
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
          hideNumber: false,
          isAllRowRequired: requiredVal,
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
              value: 'dontMindBeingCenterOfAttention',
              text: 'Don\'t mind being the center of attention',
            },
            {
              value: 'feelOthersEmotions',
              text: 'Feel others\' emotions',
            },
            {
              value: 'followSchedule',
              text: 'Follow a schedule',
            },
            {
              value: 'irritatedEasily',
              text: 'Get irritated easily',
            },
            {
              value: 'spendTimeReflecting',
              text: 'Spend time reflecting on things',
            },
            {
              value: 'quietAroundStrangers',
              text: 'Am quiet around strangers',
            },
            {
              value: 'makePeopleFeelAtEase',
              text: 'Make people feel at ease',
            },
            {
              value: 'exactingInMyWork',
              text: 'Am exacting in my work',
            },
            {
              value: 'oftenFeelBlue',
              text: 'Often feel blue',
            },
            {
              value: 'fullOfIdeas',
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
