export interface Micropost {
  id:number;
  content:string;
  user:User;
  createdAt:number;
  isMyPost?:boolean;
}

export interface User {
  id:string|number;
  email?:string;
  name?:string;
  userStats?:UserStats;
  isFollowedByMe?:boolean;
  avatarHash?:string;
  role?:string;
}

export interface RelatedUser extends User {
  relationshipId:number;
}

export interface UserStats {
  micropostCnt:number;
  followingCnt:number;
  followerCnt:number;
}

