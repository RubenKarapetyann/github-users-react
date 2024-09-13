export interface UserOfList {
    login: string,
    id: number,
    avatar_url: string,
} 

export interface User extends UserOfList {
    name: string,
    followers: number,
    following: number,
    bio: string
}
