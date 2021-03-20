export class CvMessage {
    constructor(public sentMessage: string, public responseMessage: string, public dateSent: Date) {
    }
}

export interface CvMessageApi {
    items: CvMessage[];
    total_count: number;
}
