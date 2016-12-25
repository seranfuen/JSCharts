What is Serfuen Pie Chart Widget

It's a Javascript library that uses HTML 5 canvas to draw a pie chart representing the data passed to it.

I wrote this library to develop my JavaScript skills and it's not to be considered complete or throughly tested. However, those who need a quick and simple library to show pie charts may find it useful, as well as a starting point for those who wish to build functionality on top of this base..

The Serfuen Pie Chart has the following features:

Automated creation of pie charts by giving the individual data
Possibility to display a legend that details each of the data
Automated scaling to try to fit as much of the canvas space as possible
Allows changing the data or options of the Pie Chart dynamically to create animations or interactivity
The library uses the canvas element of HTML 5 and has no other dependencies. It's licensed

Adding a Serfuen Pie Chart Widget to your website

I will assume basic knowledge of HTML and JavaScript. We need to include the library serfuen.js in the page and add a =canvas= where you want to display the pie chart. You must give the canvas an id. Using CSS the desired size of the pie chart must be given to the canvas

The steps are:

You need to create an array with each of the data that will feed the Pie Chart. Each piece of data will be an object with the following fields
name: The name that describes the Pie Chart sector (required, eg. Price of steel)

value: A numerical value for the sector (required, eg. 223.50032)

formattedValue: A string with the numerical value in the correct format (eg. 223,50 €) (Not required, if missing no value will be shown in the chart legend box)

Example:

var data = [{ value: 46, valueFormatted: "46 million", name: "Spain" },
   { value: 80, valueFormatted: "80 million", name: "Germany" },
   { value: 66, valueFormatted: "66 million", name: "France" },
   { value: 64, valueFormatted: "64 million", name: "United Kingdom" },
   { value: 38, valueFormatted: "38 million", name: "Poland" },
   { value: 17, valueFormatted: "17 million", name: "Netherlands" },
   { value: 11, valueFormatted: "11 million", name: "Belgium" },
   { value: 10, valueFormatted: "10 million", name: "Portugal" }]
We create an object with pairs key - value that will represent the options passed to the program. See next section for the options that can be passed
Example:

var options = {
  data: data,
  font: 14
};
Now we create a Pie Chart object passing the id of the canvas where we want to draw the pie chart and the options that we have populated in the previous section. This operation will return an object that allows us to manipulate the pie chart after it's drawn (see next section)

var pie = SERFUEN.pieChart("pieChart", options);
Pie Chart Options

As described, the options are key - value pairs that allow us to customize the chart. The following fields are available:

data — an array of objects as described in the previous section that populate the Pie Chart with data. It may be empty to show an empty Pie Chart

showPercentageInSectors — a Boolean that sets wheteher the percentage each sector represents should be shown outside the pie, next to the sector. True by default

showCaptionLocation — the expected values are "Left", "Right" or null. Determines the position of the legend box (right or left of the pie) or does not display it. The size of the pie will be affected and when showing a legend box, the canvas should be wider. When not showing, the canvas should be a square

minimumCaption — When the pie chart data can change dynamically, the width of the legend box may change as the data changes, causing the pie to shrink or expand to fill the remaining space. In order to avoid this, we can pass a string with the expected minimum width that the box should occupy regardless of actual length of its captions. If left null or undefined, the legend box will be resized dynamically based on current data

colorPalette — an array of strings representing an HTML color (it can be "black" or "#000000"). At least three colors should be given and they should be distinct from each other to make the pie easier to read

sectorLineColor — the HTML name of the color to be used to divide the pie in sectors. It's "LightGray" by default

sectorLineWidth — width in pixels of the line dividing the pie in sectors

circleLineColor — color of the pie circle

circleLineWidth — width in pixels of the pie circle

font — size in pixels of the font to be used. If left null or undefined, it will be resized dynamically based on the size of the pie. Otherwise, setting this value will force a font size and the library will try its best to fit the contents in the canvas

Pie Chart object API

The object returned by the function pieChart exposes an API that allows manipulating the pie chart dynamically at any point

show() — displays the pie

hide() — hides the pie content

setData(data) — changes the data that's feeding the pie. Equivalent to option("data", data)

option(key) — returns the current value of the option whose key is provided (see previous section for keys)

option(key, value) — changes the current value of the option whose key is provided (see previous section for keys) to the new value. It also returns the new value

Version history

Version 0.0.1 – initial version with basic functionality
To do

The library is still not mature and as it was born to test my JavaScript skills, and considering that there are probably hundreds of similar, better libraries, I may not continue developing this, so it is provided as it is

However, should a developer find this library useful and think that he/she can expand it, I'm detailing some of the more pressing issues that should be addressed

Better dynamic sizing. The font size only takes into account the width/height of the canvas to prevent a small canvas having a desproportionally large font. The size should also take into account the size of the captions and other factors. More testing is necessary to get the sizes right
Better legend box sizing. Right now each entry takes only one line. For very long lines, it means it will be buggy. It should try to fit as much as possible for a given height by wrapping words where possible
More otpions. Right now some options, such as the background color of the legend box, are hard-coded. It should become an option
Contact

You are free to use this library or to modify it as you wish. However if you decided to use this library for your website I'd be happy if you'd give me feedback (seranfuen@gmail.com): just a comment, information on bugs or improvements, etc.