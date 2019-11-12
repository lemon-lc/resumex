const initialState = {
  baseInfo: [
    { key: 'name', value: '' },
    { key: 'birthday', value: '' },
    { key: 'sex', value: '' },
    { key: 'city', value: '' },
    { key: 'address', value: '' },
    { key: 'phone', value: '' },
    { key: 'email', value: '' },
    { key: 'birthPlace', value: '' },
    { key: 'nationality', value: '' },
    { key: 'drivingLicense', value: '' }
  ],

  jobIntention: [
    { key: 'status', value: '' },
    { key: 'workplace', value: '' },
    { key: 'jobTitle', value: '' },
    { key: 'expectedSalary', value: '' }
  ],

  jobInfos: [
    { key: 'status', value: '' },
    { key: 'workplace', value: '' },
    { key: 'jobTitle', value: '' },
    { key: 'expectedSalary', value: '' }
  ],

  websites: [{ key: 'label', value: '' }, { key: 'link', value: '' }],

  skills: [{ key: 'skill', value: '' }, { key: 'level', value: '' }]
};

interface ActionType {
  type: string;
  payload?: any;
}

function reducer(state = initialState, action: ActionType) {
  switch (action.type) {
  default:
    return state;
  }
}

export default reducer;
