import {inject, TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { PostService } from './post.service';
import { Post } from "./post";

describe('PostService', () => {
  beforeEach(() => TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule
        ]
      }));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('expects service to fetch Array of Post', inject([HttpTestingController, PostService],
    (httpMock: HttpTestingController, service: PostService) => {
        // Call the service
        service.ListPost().subscribe(data => {
            expect(data.length).toBe(2);
            expect(data[0]).toEqual(jasmine.any(Post));
        });

        // Set expectations for the HttpClient Mock
        const req = httpMock.expectOne('https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts');
        expect(req.request.method).toEqual('GET');

        // Fake data to be returned by the mock
        const response = [
            new Post({id: 1, title: 'Fake', content: 'Post', image_url: 'Item', lat: 1, long: 2}),
            new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4}),
        ];
        req.flush(response);
    }));

  it('expects service to GET Post', inject([HttpTestingController, PostService],
      (httpMock: HttpTestingController, service: PostService) => {
        const id = 1;
        // Call the service
        service.GetPost(id).subscribe(data => {
          expect(data).toEqual(jasmine.any(Post));
          expect(data.id).toBe(id);
        });

        // Set expectations for the HttpClient Mock
        const req = httpMock.expectOne('https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts/' + id);
        expect(req.request.method).toEqual('GET');

          // Fake data to be returned by the mock
        const response = new Post({id: 1, title: 'Fake', content: 'Post', image_url: 'Item', lat: 1, long: 2});
        req.flush(response);
  }));

  it('expects service to CREATE Post', inject([HttpTestingController, PostService],
      (httpMock: HttpTestingController, service: PostService) => {
    const newPost = new Post({title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4});
    // Call the service
    service.CreatePost(newPost).subscribe(data => {
        expect(data).toEqual(jasmine.any(Post));
        expect(data.title).toBe(newPost.title);
        expect(data.content).toBe(newPost.content);
        expect(data.imageUrl).toBe(newPost.imageUrl);
        expect(data.lat).toBe(newPost.lat);
        expect(data.long).toBe(newPost.long);
        expect(data.id).toBeGreaterThan(0);
    });

    // Set expectations for the HttpClient Mock
    const req = httpMock.expectOne('https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts');
    expect(req.request.method).toEqual('POST');

    // Fake data to be returned by the mock
    const response = new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4});
    req.flush(response);
  }));

  it('expects service to UPDATE Post', inject([HttpTestingController, PostService],
  (httpMock: HttpTestingController, service: PostService) => {
    const id = 2;
    const post = new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4});
    // Call the service
    service.UpdatePost(id, post).subscribe(data => {
        expect(data).toEqual(jasmine.any(Post));
        expect(data.title).toBe(post.title);
        expect(data.content).toBe(post.content);
        expect(data.imageUrl).toBe(post.imageUrl);
        expect(data.lat).toBe(post.lat);
        expect(data.long).toBe(post.long);
        expect(data.id).toBe(id);
    });

    // Set expectations for the HttpClient Mock
    const req = httpMock.expectOne('https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts/' + id);
    expect(req.request.method).toEqual('PUT');

    // Fake data to be returned by the mock
    const response = new Post({id: 2, title: 'Fake2', content: 'Post2', image_url: 'Item2', lat: 3, long: 4});
    req.flush(response);
  }));

  it('expects service to REMOVE Post', inject([HttpTestingController, PostService],
      (httpMock: HttpTestingController, service: PostService) => {
    const id = 2;
    // Call the service
    service.DeletePost(id).subscribe(data => {
        expect(data).toBe(null);
    });

    // Set expectations for the HttpClient Mock
    const req = httpMock.expectOne('https://wf-challenge-jrpygindrv.herokuapp.com/api/v1/posts/' + id);
    expect(req.request.method).toEqual('DELETE');

    // Fake data to be returned by the mock
    req.flush(null);
  }));
});
