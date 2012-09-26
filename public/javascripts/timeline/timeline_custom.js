/**
 * This is a custom script to build a timeline object
 * Ben McMahen, RA for LAE, University of Alberta
 * Where code has been snagged, I've tried to add the source before function.
 * 
 *
 */

// bug -> When window is resized, the captions disappear. 
// TO DO: Create a namespace so I don't have global variables!

//global variables
var data;
var vis; // timeline visualizer variable
var startDate = 1850;
var endDate = 2015;
var visiblefirstdate = 1860;
var visiblelastdate = 1880;

// builds a JSON object out of the DOM to populate the timeline. 

var json = [{
  name: "Gregor Mendel Publishes His Paper on Heredity",
  startDate: "1866-2-20",
  description: 'Gregor Mendel, an Augustinian monk, publishes his paper, "Versuche über Pflanzenhybriden" ("Experiments on Plant Hybridization"), containing his findings on heredity in the journal Proceedings of the Natural History Society of Brunn. These findings, which demonstrate that inheritance follows particular laws, emerged from years of observations breeding pea plants at the experimental garden of the Augustinian Abbey of St. Thomas in Brno.',
  type: 'text'
},{
  name: "Francis Galton Publishes <em>Hereditary Genius.</em>",
  startDate: "1869",
  description: 'Francis Galton publishes his influential book Hereditary Genius. Within it, he attempts to understand the heritability of human intelligence from a social sciences perspective. This volume proved a cornerstone of the nascent eugenics movement.',
  type: 'text'
},
{
  name: "Gregor Mendel Publishes His Paper on Heredity",
  startDate: "1866-2-20",
  description: 'Gregor Mendel, an Augustinian monk, publishes his paper, "Versuche über Pflanzenhybriden" ("Experiments on Plant Hybridization"), containing his findings on heredity in the journal Proceedings of the Natural History Society of Brunn. These findings, which demonstrate that inheritance follows particular laws, emerged from years of observations breeding pea plants at the experimental garden of the Augustinian Abbey of St. Thomas in Brno.',
  type: 'text'
},
{
  name: "Gregor Mendel Publishes His Paper on Heredity",
  startDate: "1866-2-20",
  endDate: "1934",
  description: 'Gregor Mendel, an Augustinian monk, publishes his paper, "Versuche über Pflanzenhybriden" ("Experiments on Plant Hybridization"), containing his findings on heredity in the journal Proceedings of the Natural History Society of Brunn. These findings, which demonstrate that inheritance follows particular laws, emerged from years of observations breeding pea plants at the experimental garden of the Augustinian Abbey of St. Thomas in Brno.',
  type: 'text'
},
 {
	name: "Charles Darwin Publishes <em> The Descent of Man </em>",
	type: 'image',
	startDate: "1871",
	image: "/images/timeline/descentofman_large.jpg",
	imageThumb: "/images/timeline/descentofman_thumb.jpg",
	description: 'Charles Darwin expands on evolutionary theory in his book The Descent of Man, and Selection in Relation to Sex to directly follow the concepts introduced in On the Origin of Species. In this volume, he applies his theories to human evolution and discusses concepts related to human "races," sexual differentiation and the relation of his evolutionary theory to human society. Most significantly, he discusses medical advances that allow "the weak" to reproduce, and cautions that reason (ie. disallowing their reproduction) should not replace sympathy.'
},{
	name: "Test Video",
	type: 'video',
	startDate: '1900',
	m4v: "http://www.jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v",
	webm: "http://www.jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm",
	imageThumb: "images/test_video_thumb.png"
}];



/* 
  Takes a JSON object and parses it into the correct JSON
  format used by timeline. 
*/
function parseJSON(json){

  var dataLength = json.length
    , processedDatas = [];

  for (var i= 0; i < dataLength; i++){

    var obj = {}
      , compiled, html;

    // compile html given type of document
    switch(json[i].type){
      case "text":
        compiled = _.template($('#timeline-text').html());
        html = compiled(json[i]);
        break;
      case "image":
        compiled = _.template($('#timeline-image').html());
        html = compiled(json[i]);
        break; 
      case "video":
        compiled = _.template($('#timeline-video').html());
        html = compiled(json[i]);
        break; 
      default:
        compiled = _.template($('#timeline-text').html());
        html = compiled(json[i]);
    }

    // if endDate defined, add it.
    if (typeof json[i].endDate !== 'undefined') {
      obj.end = stringToDate(json[i].endDate);
    }

    obj.start = stringToDate(json[i].startDate);
    obj.content = html; 

    processedDatas.push(obj);
  }

  return processedDatas; 

}


function drawVisualization() { // Create and populate a data table.
	data =  parseJSON(json); 
	options = {
		'height': "600px",
		'width': "100%",
		'start': new Date(visiblefirstdate, 0),
		'end': new Date(visiblelastdate, 0),
		'min': new Date(1850, 0, 0),
		'max': new Date(2015, 0, 0),
		'invervalMin': 1000 * 60 * 60 * 24 * 31 * 3,
		'editable': false,
		'animate': true,
		'selectable': false,
		'style': "box",
		'showNavigation': true,
		'showCurrentTime': false
	};

	// Instantiate our timeline object.
	vis = new links.Timeline(document.getElementById('mytimeline'));

	// Attach event listeners
	links.events.addListener(vis, 'rangechange', onrangechange);

	// Draw our timeline with the created data and options 
	vis.draw(data, options);

	//set the divs to the proper starting dates
	document.getElementById('startDate').value = dateToString(vis.start);
	document.getElementById('endDate').value = dateToString(vis.end);
}

//event listeners

// when the dom has loaded, build the timeline and add slider
$(window).ready(function(){
	drawVisualization(); 
	addSlider(); 
});

//when window loaded (including pictures) add caption
$(window).on("load", function() {
	addCaption();
});


// sets the visible date-range on the timeline
function setTime(startdate, enddate) {
	if (!vis) return;

	var newStartDate, newEndDate, sliderSet; 


	if (!startdate) {
		newStartDate = new Date(stringToDate(document.getElementById('startDate').value));
		newEndDate = new Date(stringToDate(document.getElementById('endDate').value));
		sliderSet = false;
	} else {
		newStartDate = new Date(startdate, 0); //0 = working with years. should change this is parse
		newEndDate = new Date(enddate, 0);
		sliderSet = true;
	}


	vis.setVisibleChartRange(newStartDate, newEndDate);
	onrangechange(sliderSet);
}

// on range change, update range fields and, possibly, slider range values	
function onrangechange(sliderSet) {
	var range = vis.getVisibleChartRange();

	var totalStartDate = range.start;
	var totalEndDate = range.end;

	document.getElementById('startDate').value = dateToString(range.start);
	document.getElementById('endDate').value = dateToString(range.end);

	if (sliderSet != true) {
		$("#slider-range").dragslider("option", "values", [dateToString(range.start), dateToString(range.end)]);
	}
}

// Formats date string (either YYYY, or YYYY-MM-DD) to date Object
// Should make this more sophisticated to deal with multiple inputs. 
function stringToDate(input, format) {

	var stringparts = input.split('-');
	if (stringparts.length == 1) {
		return new Date(input, 0);
	} else {
		format = format || 'yyyy-mm-dd'; // default format
		var parts = input.match(/(\d+)/g),
			i = 0,
			fmt = {};
		// extract date-part indexes from the format
		format.replace(/(yyyy|dd|mm)/g, function(part) {
			fmt[part] = i++;
		});
		return new Date(parts[fmt['yyyy']], parts[fmt['mm']] - 1, parts[fmt['dd']]);
	}
}

// Formats a date-object as a year string
function dateToString(date) {
	datetime = date.getFullYear();
	return datetime;
}

// moves the timeline either left or right
function moveTimeline(degree) {
	vis.move(degree);
	onrangechange();
}


// adds caption to images
function addCaption() {
  $("div.timeline-event-content img").each(function() {
    var title = $(this).attr('alt');
    $(this).after('<span class="caption">' + title + '</span>');
  }); //Adds the dynamic captions.
}


// Adds dragging feature to the jQuery UI Slider.
(function($, undefined) {

	$.widget("ui.dragslider", $.ui.slider, {

		options: $.extend({}, $.ui.slider.prototype.options, {
			rangeDrag: false
		}),

		_create: function() {
			$.ui.slider.prototype._create.apply(this, arguments);
			this._rangeCapture = false;
		},

		_mouseCapture: function(event) {
			var o = this.options;

			if (o.disabled) return false;

			if (event.target == this.range.get(0) && o.rangeDrag == true && o.range == true) {
				this._rangeCapture = true;
				this._rangeStart = null;
			} else {
				this._rangeCapture = false;
			}

			$.ui.slider.prototype._mouseCapture.apply(this, arguments);

			if (this._rangeCapture == true) {
				this.handles.removeClass("ui-state-active").blur();
			}

			return true;
		},

		_mouseStop: function(event) {
			this._rangeStart = null;
			return $.ui.slider.prototype._mouseStop.apply(this, arguments);
		},

		_slide: function(event, index, newVal) {
			if (!this._rangeCapture) {
				return $.ui.slider.prototype._slide.apply(this, arguments);
			}

			if (this._rangeStart == null) {
				this._rangeStart = newVal;
			}

			var oldValLeft = this.options.values[0],
				oldValRight = this.options.values[1],
				slideDist = newVal - this._rangeStart,
				newValueLeft = oldValLeft + slideDist,
				newValueRight = oldValRight + slideDist,
				allowed;

			if (this.options.values && this.options.values.length) {
				if (newValueRight > this._valueMax() && slideDist > 0) {
					slideDist -= (newValueRight - this._valueMax());
					newValueLeft = oldValLeft + slideDist;
					newValueRight = oldValRight + slideDist;
				}

				if (newValueLeft < this._valueMin()) {
					slideDist += (this._valueMin() - newValueLeft);
					newValueLeft = oldValLeft + slideDist;
					newValueRight = oldValRight + slideDist;
				}

				if (slideDist != 0) {
					newValues = this.values();
					newValues[0] = newValueLeft;
					newValues[1] = newValueRight;

					// A slide can be canceled by returning false from the slide callback
					allowed = this._trigger("slide", event, {
						handle: this.handles[index],
						value: slideDist,
						values: newValues
					});

					if (allowed !== false) {
						this.values(0, newValueLeft, true);
						this.values(1, newValueRight, true);
					}
					this._rangeStart = newVal;
				}
			}

		},
	});
})(jQuery);

// does some math to draw the slider background
function drawSliderBackground() {
	var wrapperWidth = $('#mytimelinewrapper').width();
	$('#slider-range').css('width', wrapperWidth);

	var numDivisions = 8;

	var pixelBlockSize = wrapperWidth / numDivisions;
	var yearBlockSize = ((endDate - startDate) / (numDivisions));
	if ($('.slider-date').length > 0) {
		$('.slider-date').remove();
	}
	var i;
	for (i = 1; i < numDivisions; i++) {
		var pixelTick = pixelBlockSize * i;
		var yearTickDecimal = (yearBlockSize * i) + startDate;
		var yearTick = yearTickDecimal.toPrecision(4);

		var element = document.createElement('div');
		element.className = "slider-date";

		element.style.position = "absolute";
		element.style.left = pixelTick + 'px';

		document.getElementById("slider").appendChild(element);
		element.innerHTML = yearTick;
	}
};

// Initializes the dragslider for #slider-range div on html page. 
function addSlider() {
	drawSliderBackground();
	$("#slider-range").dragslider({
		range: true,
		min: startDate,
		max: endDate,
		animate: true,
		rangeDrag: true,
		values: [visiblefirstdate, visiblelastdate],
		slide: function(event, ui) {
			var startingDate = ui.values[0];
			var endingDate = ui.values[1];
			setTime(startingDate, endingDate);
		}
	});
};
