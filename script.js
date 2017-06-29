$(document).ready(function () {

  var $form = $('form');
  var $input = $('input[name="username"]');
  
  var $resultsList = $('#results-list');

  $form.submit(function (event) {
    event.preventDefault();
    var term = $input.val();
    var $type = $('input[name="search_type"]:checked');
    var type = $type.val();
    console.log(type);
    getUserRepos(term, type, $resultsList);
  });
  
});

function getUserRepos (searchName, type ,$ul) {
  $.getJSON( "https://api.github.com/"+ type +'/'+ searchName + "/repos", function( repos ) {
    // Loop Through Repos
    var avatar = repos[0].owner.avatar_url;
    $ul.append('<li><img src="' + avatar + '" alt="avatar"></li>');
    for (var i = 0; i < repos.length; i+=1) {
      // Console Log Each Key We Want
      var repo = repos[i];
      // console.log(repo.name);
      // console.log(repo.description);
      // console.log(repo.pushed_at);
      // console.log(repo.html_url);
      // console.log('-----------');
      var anchor = '<a href="' + repo.html_url + '">' + repo.name + '</a>';
      var desc = '<p>'+ repo.description+'</p>';
      var li = '<li>' + anchor + '<br>'+ repo.pushed_at + desc +'</li>';
      console.log("THE LIST ITEM STRING WE'VE MADE", li)
      $ul.append(li);
     // $ul.append('<li>'repo.pushed_at'</li>');

    }
  });
}