import { padStart } from 'lodash';
import { mapAuthor } from './mapAuthor';

let state = {
  count: 0,
};

export function mapBook(objectWithId) {
  state.count++;
  return {
    mappedId: objectWithId.id,
    position: state.count,
    positionStr: padStart(state.count, 10, '0'),
    author: mapAuthor(),
  };
}
