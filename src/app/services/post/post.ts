export class Post {
    id: any
    title: string;
    content: string;
    lat: number;
    long: number;
    imageUrl: string;

    constructor(data: any) {
        this.id = data.id ? data.id : null;
        this.title = data.title;
        this.content = data.content;
        this.lat = parseFloat(data.lat);
        this.long = parseFloat(data.long);
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
