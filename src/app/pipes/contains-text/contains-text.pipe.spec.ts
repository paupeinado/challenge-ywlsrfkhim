import { ContainsTextPipe } from './contains-text.pipe';
import {Post} from "../../services/post/post";

describe('ContainsTextPipe', () => {
  it('create an instance', () => {
    const pipe = new ContainsTextPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty array', () => {
    const search = 'foo';
    const items = [
      new Post({id: 1, title: 'Fake', content: 'Post', image_url: 'Item', lat: 1, long: 2}),
      new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4}),
    ];

    const pipe = new ContainsTextPipe();
    const result = pipe.transform(items, search);
    expect(result).toEqual([]);
  });

  it('should find 2 posts', () => {
    const search = 'fake';
    const items = [
      new Post({id: 1, title: 'Fake', content: 'Post', image_url: 'Item', lat: 1, long: 2}),
      new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4}),
    ];

    const pipe = new ContainsTextPipe();
    const result = pipe.transform(items, search);
    expect(result.length).toEqual(2);
  });
});
