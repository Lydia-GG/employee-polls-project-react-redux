export const RECEIVE_USERS = 'RECEIVE_USERS';
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION';
export const USER_ADD_ANSWER = 'USER_ADD_ANSWER';

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function userAddQuestion({ authedUser, qid }) {
  return {
    type: USER_ADD_QUESTION,
    authedUser,
    qid,
  };
}
export function userAddAnswer({ authedUser, qid, answer }) {
  return {
    type: USER_ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}
