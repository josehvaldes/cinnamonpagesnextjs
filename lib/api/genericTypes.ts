interface LinkResponse{
    href: string;
    rel: string;
    method: string;
}



interface UserResponse{
    username: string;
    email: string;
    firstName: string;
    lastName: string;
}


export type { LinkResponse, UserResponse };