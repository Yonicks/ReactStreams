

export class Stream {
    constructor(public title: string, public description: string, public id?: string, public userId?: string) {

    }
}

export interface RouteParams {
    id: string;
}