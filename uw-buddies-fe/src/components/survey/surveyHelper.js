export const getUserPayload = (survey, user) => {
  const { data } = survey;

  const interests = [
    ...data.creativity,
    ...data.food,
    ...data.goingOut,
    ...data.movies,
    ...data.music,
    ...data.pets,
    ...data.sportsFitness,
    ...data.stayingIn,
    ...data.travelling,
    ...data.wellness,
  ];

  const scoringPayload = {
    interests: data.sameInterests,
    personality: data.samePersonality,
    program: data.sameProgram,
    faculty: data.sameFaculty,
    term: data.sameTerm,
    currentCoopStatus: data.sameCurrentCoopStatus,
  };

  const compatibilityPayload = { ...survey.getValue('1'), ...survey.getValue('2') };

  const questionnairePayload = {
    interests: interests.filter((interest) => interest !== 'none'),
    scoring: scoringPayload,
    compatibility: compatibilityPayload,
  };

  const userObj = {
    optedIn: true,
    name: data.name,
    email: user.email,
    education: {
      faculty: data.faculty,
      program: data.program,
      term: data.term,
      currentCoopStatus: data.currentCoopStatus,
    },
    questionnaire: questionnairePayload,
    matches: [],
  };

  return userObj;
};

export default getUserPayload;
