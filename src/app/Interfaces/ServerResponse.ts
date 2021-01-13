import { Project } from "./Project";

export interface ServerResponseObject{
    status: string,
    results: number,
    data: {
        projects:Array<Project>
    }
}