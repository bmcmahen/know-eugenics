/**
 * CUSTOM HIGHSLIDE
 */
/* optionally override the settings at the top of the highslide.js file */
    hs.graphicsDir = '/highslide_graphics/';
    hs.outlineType = 'custom3';
    hs.wrapperClassName = 'draggable-header';
    hs.showCredits = false;
    hs.width = 600; 
    hs.headingEval = 'this.a.name'; 
    hs.minHeight = 400; 
    hs.zIndexCounter = 1300; 


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



// displays greeting
//window.onload = function () {
//var heading = document.getElementById("start-info"); 
//return hs.htmlExpand(heading, {maincontentId:'start-content', headingText: 'Living Archives on Eugenics - Timeline', width: '350'}); 
//}
//


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
      title: "Tommy Douglas",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },
       {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    },    {
      title: "Robert Charles Wallace",
      date: "1881-1955",
      description: "President of the University of Alberta, Principal of Queen's University",
      heroQuote: "What does matter is that the human mind is not confined to the things that today are and tomorrow are gone. What does matter is that the sense of the eternal informs our doing and our thinking, that the horizon does not limit our vision, that our mind’s eye can pierce beyond the things of sense into the infinity of time and of space, that we rest in the assurance that underneath are the everlasting arms.",
      heroQuoteSource: "From R.C. Wallace, “As I look back – some random thoughts,” Queen’s Quarterly 61, 490-497.",
      heroParagraph: "R.C. Wallace was a geologist and educator who throughout his career held many distinguished positions, serving as president of the University of Alberta from 1928 to 1936, principal of Queen’s University from 1936 to 1951, and the head of the Arctic Institute of North America (AINA) from 1951 until 1955. Originally from Scotland, Wallace moved to Canada in 1912 and became head of the Department of Geology and Mineralogy at the University of Manitoba, a position he held until he moved to Alberta in 1928. In Manitoba, Wallace also served for a time as Commissioner of Northern Manitoba and made important contributions to geological and resource exploration. In this capacity he held other important responsibilities as superintendent of police, coroner and mining recorder, contributing to various aspects of northern life. Wallace was important in guiding the University of Alberta through the Great Depression, even expanding certain departments, notably the department of nursing. He moved on to Queen’s University in 1936 and oversaw much expansion there, earning an international profile as a world-class administrator and an invitation to the 1945 U.N. conference that resulted in the establishment of UNESCO. Wallace’s last position was as head of the AINA, where he served until his death in 1951.",
      villainParagraph: "R.C. Wallace, despite having no formal background in psychology or biological science, became an ardent and outspoken supporter of eugenics and, while in Alberta, of eugenic legislation in that province, expressing his belief that science had to be applied to matters of ‘human conduct and governance.’ Wallace was concerned that society had become “satisfied with a mediocrity of quality, both physically and mentally,” and that this mediocrity was to blame for “imperfect ideals and limited progress.” Wallace made clear his feeling that children of the professional class made more valuable contributions through intellectual abilities than those of lower classes, and was thus alarmed that birth rates tended to be much higher in those lower classes. He advocated for larger families among the professional class, even suggesting the creation of an economic allowance to make larger families more economically feasible among that class, hoping to instil a “eugenic race consciousness” appreciative of “wider social responsibilities.”  Further, Wallace also advocated for the sexual sterilization of so-called “mental-defectives,” a group that he chided for absorbing a disproportionate amount of valuable state-resources. While at the University of Alberta, Wallace and John M. MacEachran together became a formidable source of support for Alberta eugenics.",
      villainQuote: "Science has done very much to raise the quality of the stock in the domesticated animals which man has reared for his service; it has done virtually nothing to raise the quality of the human stock... The time has come to make eugenics not only a scientific philosophy but in very truth a religion.",
      villainQuoteSource: "From an address delivered by R.C. Wallace to the Canadian Medical Association at the Annual Banquet in Calgary, 20 June 1934, titled “The Quality of the Human Stock” as found in The Canadian Medical Association Journal 31, no. 4 (October 1934): 427-430.",
      imageURL: "/images/heroes/douglas.png",
      category: "educator"
    }
  
  
    // more objects go here. 


  ];

  FlipCard.CardView.prototype.events = {
    'click' : 'showDetail'
  };

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
          boxHeight: 300,
          boxWidth: 200,
          paddingWidth: 35,
          paddingHeight: 10
      });

  $('.front').on('click', function(){
    $(this).parent().addClass('flip');
  });

$('.back').on('click', function() {
    $(this).parent().removeClass('flip');
  });

/**
 * Flip a random card to show the viewer that it's possible
 */

var randomFlip = function() {
  var previousIndex
    , totalCards = $('.card').length;

 this.flip = function(){
   if (previousIndex) {
    $('.card').get(previousIndex).classList.remove('flip')
  }

  var randomIndex = function(){
    var newIndex = Math.floor(Math.random() * totalCards); 
    if (newIndex === previousIndex) {
      randomIndex(); 
      return false;
    } else {
      previousIndex = newIndex; 
      return newIndex;
    }
  }

  var random = randomIndex();
  if (random)  $('.card').get(random).classList.add('flip')
 }

  return this; 
}();


setInterval(function(){
  randomFlip.flip()
}, 10000);

/**
 * Enter full screen mode
 */

$('#fullscreenmode').on('click', function(e){
  var $app = $('#app');
  if ($app.hasClass('fullscreen')) {
      $(e.currentTarget).text('(Full Screen)')
      $app.removeClass('fullscreen');
      $('#modalbackdrop').removeClass('open');
  } else {
      $(e.currentTarget).text('(Exit Full Screen)')
      $app.addClass('fullscreen');
      $('#modalbackdrop').addClass('open');
  }
})
});
