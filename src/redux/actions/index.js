import { ADD_SHOW, GET_FORM } from '../constants/action-types';

const formPayload = [
  {
    "title": "Student Name",
    "slug": "student_name",
    "fields": [
      {
        "type": "text",
        "slug": "name",
        "label": "Name",
        "is_required": true,
      },
    ],
  },
]

export const addShow = show => {
  return {
    type: ADD_SHOW,
    payload: show,
  };
};

export const getForm = show => {
  return {
    type: GET_FORM,
    payload: formPayload,
  };
};
