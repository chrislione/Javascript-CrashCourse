const game = {
	title: 'Call fo duty',
	platform: 'playstation',
	year: 2022
};

//-------------using the dot method----------------------------------
let Title = game.title;
console.log(Title);

// using key value
// let platform=game[platform] // your  key have to be in a string format to work. hence this will give you an error

//------------correction--------------
let Platform = game['platform'];
console.log(Platform);

// Destructor
let{title}=game
console.log(title)
