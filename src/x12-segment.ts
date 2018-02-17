export class X12Segment {
    private readonly elementDelimiter: string = "*";
    private readonly lineDelimiter: string = "~";
    private readonly elements: string[];

    constructor(...elements: string[]){
        this.elements = elements;
    }

    toString(): string {
        return (this.elements.join(this.elementDelimiter) 
            + this.lineDelimiter)
            .toUpperCase();
    }
}