import { getAreas } from '../../lib/sanity';

export function load() {
  return {
    streamed: {
      areas: getAreas()
    }
  };
}