export class Post {
    title: string;
    content: string;
    lat: string;
    long: string;
    imageUrl: string;

    constructor(data: any) {
        this.title = data.title;
        this.content = data.content;
        this.lat = data.lat;
        this.long = data.long;
        this.imageUrl = data.image_url ? data.image_url : data.imageUrl;
    }

    toJson() {
        return {
            "title": this.title,
            "content": this.content,
            "lat": this.lat,
            "long": this.long,
            "image_url": this.imageUrl
        };
    }
}
