import { Component, OnInit, Input } from '@angular/core';
import { UserPost } from 'src/models/UserPost.model'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.scss']
})
export class SocialPostsComponent implements OnInit {


  constructor() { }

  socialPostList: UserPost [] = [{postTitle: "Placeholder Post Title", 
  postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
  postDate: new Date("2015-03-25"), 
  postVoteScore: 0 }];
  showPostFormBool: boolean = false;
  newPost : UserPost; 

  createPost(newPostTitle: string, newPostText : string){
    var currentDate = new Date();
    this.newPost = {
      postTitle: newPostTitle, 
      postText: newPostText, 
      postDate: currentDate, 
      postVoteScore: 0 };
    this.socialPostList.unshift(this.newPost);
    this.showPostFormBool = false;
  }


  showPostForm() {
      this.showPostFormBool = true;
  }

  hidePostForm(){
    this.showPostFormBool = false;

  }


  addToPostScore(i : number){
    this.socialPostList[i].postVoteScore = this.socialPostList[i].postVoteScore + 1;
  }

  subtractFromPostScore(i : number){
    this.socialPostList[i].postVoteScore = this.socialPostList[i].postVoteScore - 1;
  }

  ngOnInit() {
  }

}
