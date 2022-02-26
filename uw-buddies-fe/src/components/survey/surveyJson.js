const surveyJson = {
//   title: '',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          name: 'year_of_study',
          type: 'checkbox',
          isRequired: false,
          hideNumber: true,
          choices: ['1A/1B', '2A/2B', '3A/3B', '4A/4B', 'Undergraduate Year 4C+ or above', 'Masters', 'Doctorial'],
          title: 'My year of study at UWaterloo is:',
        },
        {
          type: 'text',
          name: 'program',
          isRequired: false,
          hideNumber: true,
          title: 'My Program at UWaterloo is:',
        },
      ],
      navigationTitle: 'Student',
      navigationDescription: "Student's info",
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'rating',
          name: 'similar_interests',
          title: 'Having similar interests matter to me when making a new friend',
          hideNumber: true,
          isRequired: false,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'compatibile_personality_type',
          title: 'Having a compatible personality type matters to me when making a new friend',
          hideNumber: true,
          isRequired: false,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_program',
          title: 'Being in the same program matters to me when making a new friend',
          hideNumber: true,
          isRequired: false,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_faculty',
          title: 'Being in the same faculty matters to me when making a new friend',
          hideNumber: true,
          isRequired: false,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
        {
          type: 'rating',
          name: 'same_term',
          title: 'Being in the same term matters to me when making a new friend',
          hideNumber: true,
          isRequired: false,
          mininumRateDescription: 'Does not matter at all',
          maximumRateDescription: 'Matters a lot',
        },
      ],
      navigationTitle: 'Preferences',
      navigationDescription: 'Scoring Function',
    },
    // {
    //   name: 'page3',
    //   elements: [
    //     {
    //       type: 'tagbox',
    //       name: 'interests',
    //       title: 'Select interests that you\'d like to
    // share with people when you connect with them',
    //       isRequired: true,
    //       hideNumber: true,
    //       choices: ['sports'],
    //     },
    //   ],
    //   navigationTitle: 'Symptoms',
    //   navigationDescription: 'Patient symptoms',
    // },
    {
      name: 'page3',
      elements: [
        {
          type: 'checkbox',
          name: 'similar_interests',
          title: 'Select interests that you\'d like to share with people when you connect with them',
          hideNumber: true,
          isRequired: false,
          choices: ['hi'],
        },
      ],
      navigationTitle: 'Interest',
      navigationDescription: "Person's info",
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'matrix',
          name: '1',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isRequired: false,
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
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 1',
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isRequired: false,
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
      navigationDescription: 'Part 2',
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'matrix',
          name: '2',
          title: 'Please indicate if you agree or disagree with the following statements',
          hideNumber: true,
          isRequired: false,
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
          ],
        },
      ],
      navigationTitle: 'Personality',
      navigationDescription: 'Part 3',
    },
  ],
  showProgressBar: 'top',
  progressBarType: 'buttons',
  completedHtml: 'Thanks for participating in UW Buddies. <br /><br /> Stay tuned for your match results!',
};

export default surveyJson;
