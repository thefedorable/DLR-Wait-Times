class Ride {
    private id: number;
    private name: string;
    private last_updated: string;
    private is_open: boolean;
    private wait_time: number;

    constructor(id: number, name: string, lastUpdated: string, isOpen: boolean, waitTime: number) {
        this.id = id || 0;
        this.name = name || '';
        this.last_updated = lastUpdated || '';
        this.is_open = isOpen || false;
        this.wait_time = waitTime || 0;
    }

    public getId(): number {
        return this.id
    }

    public sedId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getLast_updated(): string {
        return this.last_updated
    }

    public setLast_updated(last_updated: string): void {
        this.last_updated = last_updated
    }

    public getIsOpen(): boolean {
        return this.is_open
    }

    public setIsOpen(isOpen: boolean): void {
        this.is_open = isOpen
    }

    public getWaitTime(): number {
        return this.wait_time
    }

    public setWaitTime(wait_time: number): void {
        this.wait_time = wait_time
    }

    toString(): string {
        let result = '';
        if (this.is_open) {
            result += `     ${this.name}\n`;
            result += `            Wait: ${this.wait_time}`;
        } else {
            result += `     ${this.name}\n`;
            result += `            Status: Closed`;
        }

        return result;
    }

}
