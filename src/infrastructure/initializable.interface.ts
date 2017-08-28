
export interface IStartup {
    name: string;
    Run(): Promise<any>;
}
