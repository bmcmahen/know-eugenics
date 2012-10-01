jQuery(document).ready(function() {

/* this is the JSON object which will contain all of the data for the Heroes/Villains
  modele. It's basically an array of dictionaries. The square bracket represents the 
  array, while the curly bracket denotes the dictionary. 'title' represents the key, while
  'Alexander Graham Bell' represents the value. 

  One weird quirk -- IE 8 doesn't like a trailing comma on the last key/value pair
  of a dictionary. Weird, I know. So you can see that it's omitted after 'category'.

  Another thing -- the imageURL represents the relative URL to the image file. We need to
  select one image size and stick with it. The Bell picture I was using was 183 x 282. 
  But we should probably just round that to an even number. 

  p.s. You can validate JSON here: http://jsonlint.com/

*/
  var data = [
    {
      title: "Artwork Title Here",
      artist: 'Artist name',
      description: "Description of the art",
      imageThumbURL: '/images/artistic/face_thumb.png',
      imageURL: '/images/artistic/face.jpg'
    },
    {
      title: "Artwork Title Here",
      artist: 'Artist name',
      description: "Description of the art",
      imageThumbURL: '/images/artistic/man_thumb.png',
      imageURL: '/images/artistic/man.jpg'
    },
    {
      title: "Artwork Title Here",
      artist: 'Artist name',
      description: "Description of the art",
      imageThumbURL: '/images/artistic/tongue_face_thumb.png',
      imageURL: '/images/artistic/tongue_face.jpg'
    } 
  
  
    // more objects go here. 


  ];


  // This instantiates a new "FlipCard" view, passing in the relevant settings, including
  // the data JSON we created above. When paired with the proper HTML and Javascript files
  // it will basically run the grid-view. 

  var flipcard = new FlipCard.AppView(data, {
          wrapper: "#flipcard-wrapper",
          toolbar: "#flipcard-toolbar",
          detailView: "#flipcard-detail",
          searchField: "#flipcard-search",
          toolbarTemplate: _.template($('#toolbar-template').html()),
          cardViewTemplate: _.template($('#card-view-template').html()),
          detailViewTemplate: _.template($('#detail-view-template').html()),
          boxHeight: 3600,
          boxWidth: 220,
          paddingWidth: 10,
          paddingHeight: 10
      });

/* optionally override the settings at the top of the highslide.js file */
    hs.graphicsDir = '/highslide_graphics/';
    hs.outlineType = 'custom3';
    hs.wrapperClassName = 'draggable-header';
    hs.showCredits = false;
    hs.minWidth = 500; 
    hs.headingEval = 'this.a.name'; 
    hs.minHeight = 250; 


  // Manages proper focusing for use with screenreaders. 
  hs.Expander.prototype.onAfterExpand = function() {

  //if paragraph exists, focus on first paragraph. Else read unformatted text. 
  if ($(this.content).find('.highslide-maincontent p').length > 0) {
    var firstparagraph = $(this.content).find('.highslide-maincontent p').get(0); 
    $(firstparagraph).attr('tabindex', -1).focus(); 
  } else {
    $(this.content).find('.highslide-maincontent').attr('tabindex', -1).focus(); 
  };

  //if paragraph exists, focus on first paragraph. Else, read unformatted text.
  if ($(this.wrapper).find('.highslide-caption p').length > 0) {
    var captionparagraph = $(this.wrapper).find('.highslide-caption p').get(0); 
    $(captionparagraph).attr('tabindex', -1).focus(); 
  } else {
    $(this.wrapper).find('.highslide-caption').attr('tabindex', -1).focus(); 
  };

  };  

  // Returns focus to proper element on close of highslide window. 
  hs.Expander.prototype.onAfterClose = function () {
    $(this.a).focus(); 
  };


});






//
