import { Project } from "./Project";

export interface ServerResponseObject{
    status: string,
    results: number,
    data: {
        projects:Array<Project>
    }
}

export interface ServerResponseSingleObject{
    status: string,
    results: number,
    data: {
        project:Project
    }
}