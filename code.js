// define likes, comments, update initial values for outputs
var likes = 0;
var comments = "OMG sooo cute!\n";
setProperty("likeCounterOutput", "text", "Likes: " + likes);
setProperty("allCommentsOutput", "text", comments);

// everytime upButton is clicked, likes goes up by 1 and likeCounterOutput is updated
onEvent("upButton", "click", function( ) {
  likes += 1;
  setProperty("likeCounterOutput", "text", "Likes: " + likes);
  playSound("assets/category_app/app_button_click_1.mp3", false);
});

// everytime downButton is clicked, likes goes down by 1 and likeCounterOutput is updated
onEvent("downButton", "click", function( ) {
  likes += -1;
  setProperty("likeCounterOutput", "text", "Likes: " + likes);
  playSound("assets/category_app/app_button_click_1.mp3", false);
});

// everytime commentButton is clicked, grab input from "newCommentInput" and concatenate
// to variable comments, then update allCommentsOutput

 onEvent("commentButton", "click", function( ) {
   comments += getText("newCommentInput") + "\n";
   setProperty("allCommentsOutput", "text", comments);
    playSound("assets/category_app/pause_button.mp3", false);
  });

