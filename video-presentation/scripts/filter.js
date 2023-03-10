let recipeList =[
    Empanada = {
      title: "Empanada Pastry",
      prepTime: '30 min',
      ingredients: "2 1/2 c Flour|1 ts Sugar|1/2 ts Salt|2 Eggs|2 tb Lard; at room temperature|2 tb Butter; at room temperature|1/2 c Dry white wine",
      servings: "1 Servings",
      instructions: "On a cutting board, form a well of the dry ingredients. In the center of the well, put the eggs, lard, butter, and white wine. First, mix the wet ingredients to a paste with your hands. Then mix the dry ingredients with the wet to form a dough. Knead one minute, wrap in plastic and refrigerate. Yield: 4 servings as main course"
    },
    recipe =  {
      title: "Good Bbq Slaw Recipe",
      prepTime: '5 min',
      ingredients: "2 tb Salad Oil|3 tb Apple Cider Vinegar|3 tb Sugar|1 ts Black Pepper|1/2 ts Salt|1/4 ts Crushed Garlic",
      servings: "1 servings",
      instructions: "If you don't want a creamy slaw with mayo, but one that is damn good, try this one. This is NOT my \"Garlic Slaw\" recipe, since you need something different. As a matter of fact, this is probably my favorite, and is what I always got in the backwoods (the best) bbq joints and seafood restaurants in Louisiana, as a youngster. It is tart and sweet with no mayo. Simple but delicious. Think this is what you are looking for. We make it a lot here at home. This will only make enough dressing for about 2 servings of slaw, so use you math to make enough for a large crowd. The nice thing about it is that you can't \"over sauce\" the slaw and make it too soupy. This recipe simply coats the slaw and the rest of the dressing falls to the bottom of the dish. Fool proof for making a sloppy slaw. Simply toss slaw around in bowl after mixing dressing with cabbage, carrots, etc., then again before serving. This dressing will stay crisp on slaw for a couple of days and not cause it to become limp.",
      bool: true
    },
    {
      title: "Master Recipe for Pizza Dough",
      prepTime: '10 min',
      ingredients: "1/2 c Milk; room temperature|2 tb Dry yeast|(or 1 1/2 ounces fresh yeast)|3 c Sifted cake flour; plus|More flour for kneading|3/4 ts Fine table salt|Cornmeal; for sprinkling",
      servings: "1 servings",
      instructions: "In a small bowl or cup combine milk with 3/4 cup water that is warm to the touch (about 125 degrees). Sprinkle dry yeast or crumble fresh yeast over. Stir once and let sit in a warm spot until it foams, 10 to 20 minutes. In a large bowl combine 3 cups flour with salt. Pour yeast mixture over flour, stirring with a wooden spoon to mix well. Dough will be very wet. Generously flour a work surface and turn out dough. Begin kneading, adding extra cake flour a handful at a time or less, scraping up and turning dough with a dough scraper. You will need about 10 minutes to knead and add flour. Dough is ready when it is smooth, silky and just past stickiness. Do not add too much flour or dough will be very dry. Gather up dough in a ball. Lightly oil a large bowl, add dough and cover tightly with plastic wrap. Let rise at room temperature about 2 hours or until doubled. Turn out dough onto a lightly floured surface and cut into 4 even pieces. Shape into rough rounds, about 7 inches in diameter, 1/4-inch thick with a 3/8-inch-thick rim. Transfer to pizza peels or baking sheets sprinkled lightly with cornmeal. Cover loosely with towels and let rise 10 to 60 minutes. Top and bake according to pizza recipe instructions. This recipe yields four 7-inch pizza rounds.",
      bool: true
    },
    {
      title: "Milk Mustache Recipes",
      prepTime: '5 min',
      ingredients: "Vanilla ice cream|Whole milk",
      servings: "1 servings",
      instructions: "Put ice cream in the fridge (not freezer) 1 day before you want to use it and let it melt down all day. Combine 2 cups of ice cream and 1 cup milk in a blender slowly until you get the consistency of melted ice cream. TIP: Plain yogurt can also be added to the mixture for more thickness.",
      bool: true
    },
    {
      title: "Horchata De Almendra Recipe",
      prepTime: '10 min',
      ingredients: "1 lb Almonds|1 lb Sugar|1 Lemon|1 Cinnamon Stick|1 pn Salt|2 1/2 l Water (warm)",
      servings: "1 Servings",
      instructions: "Real Horchata from Valencia is made with Chufa (Tiger Nut). Unfortuantely, Chufa is not available (that I know of) in America. A suitable substitute for the Chufas are Almonds, which give the Horchata the same texture and similiar taste. Horchata in not a dairy product and contains little fat, so it is often refered to as \"the drink of the gods.\" ~ The first step is to remove the skins from the almonds. The best way to do this is to simply buy them already skinless. If none are available, you will have to boil the skins off. Put the almonds in a pot of boiling water and let sit until the skins become very soft. With time, the skins will dissolve or slide off easily when stirred. Boiling the almonds is a pain. It is much easier to just buy them without skins. ~ Crush or otherwise pulverise the almonds into a coarse powder. If you boiled your almonds to get the skins off, then smash them (or put them in a strong blender while adding some water) into a mush. ~ In a large bowl/container add the 2.5 liters of water with a pinch of salt. Slice and add the lemon. ~ Now mix in the almond powder (or mush). Cover the container and let it sit at room temperature for 2 hours. ~ When the two hours are up, add the sugar and cinnamon stick. Stir until sugar is completely dissovled. ~ Strain the liquid with a fine cloth. This removes all of the larger particles of almond. Strain until texture is smooth (twice should do it). Keep the drink in your fridge and it will stay good for at least six days. For a truly divine experience, put some in your freezer until it is an icey slush!",
      bool: true
    },
    {
      title: "Hospital Recipe",
      prepTime: '5 min',
      ingredients: "3 tb Parsley|2 1/2 ts Rosemary|2 1/2 ts Paprika|4 1/2 ts Chives|2 1/2 ts Onion powder|3 tb Marjoram|3 tb Basil|3 tb Thyme",
      servings: "1 Servings",
      instructions: "Grind in a morat and pestle and bottle. : The Rosemary House",
      bool: true
    },
    {
      title: "Chile 'n' Cheese Spirals (Ortega Recipe)",
      prepTime: '15 min',
      ingredients: "4 oz Cream cheese; softened|1 c (4-ounces) shredded Cheddar cheese|1/2 c (4-ounce can) ORTEGA diced green chiles|1/2 c (about 6) sliced green onions|1/2 c Chopped ripe olives|4 Soft taco-size; (8-inch) flour tortillas|ORTEGA Garden Style Salsa; medium or mild",
      servings: "24 Servings",
      instructions: "Combine cream cheese, Cheddar cheese, chiles, green onions and olives in medium bowl. Spread 1/2 cup cheese mixture on each tortilla. Roll up. wrap each roll in plastic wrap; chill for 1 hour. Remove plastic wrap; slice each roll into six 3/4-inch pieces. Serve with salsa for dipping. Tip: Spirals can be made ahead and kept in the refrigerator for 1 to 2 days. For added variety, add diced red bell pepper or use whole green chiles instead of diced."
    },
    {
      title: "Chile Pancake Syrup Recipe",
      prepTime: '25 min',
      ingredients: "15 Green New Mexico pods|5 Green Jalapeno pods|Hot peppers to taste|1 c Cider vinegar|1 c Grapefruit juice (reconstituted)|3 Cloves garlic; crushed|6 c Granulated sugar|1 Packet (dry) pectin (I used Sure-Jell; 1.75oz.)",
      servings: "1 Servings",
      instructions: "Split the jalapenos and clean as above. Chop the jalapenos into small pieces. No need to skin these. Put the NM chile, the jalapeno, and the crushed garlic together with 1/2 cup cider vinegar into a blender. Rev it up until it is liquified. Heat the sugar and 1/2 cup vinegar together and bring to a boil. Boil for about two minutes. Add the blended chile mix, and continue to boil for three or four minutes. Remove from heat. Stir the pectin together with 3/4 cup water in a separate pan. Bring to a boil, stirring constantly. Boil for one minute. Start this process before the sugar mixture is done, so you can put it in quickly. That is what your third hand is for. Add the pectin to the chile-sugar mixture. Add also the grapefruit juice. Stir it thoroughly, and allow it to cool enough for judicious tasting. Because of the way the chile pods were eviscerated, this syrup will have virtually no chile heat, but it will have a very pronounced chile flavor. It should be of a suitable consistency. If not, maybe you could boil it down or water it down until it is, although I do not know anything about boiling pectin after it is added."
    },
    {
      title: "Betty Turpin's \"Secret\" Hotpot Recipe",
      prepTime: '5 min',
      ingredients: "2 oz Dripping|Four x 6 oz lamb chump chops|Six large onions; chopped|One pint lightly thickened stock|2 oz Melted butter|Chopped parsley|Potatoes",
      servings: "4 servings",
      instructions: "1. In a large frying pan, colour lamb quickly on both sides in dripping and take out of pan. Slice onions thinly and saute to colour, stirring regularly. Take out and put aside. 2. Cut potatoes into a cylindrical shape and slice. Place a layer of potatoes on the buttered bottom of the casserole dish and put half the onions on top. 3. Lay chops on top and season well. Pour the rest of the onions on top. Lay potatoes on top to cover and pour on stock. Cook in oven at 180C (gas mark six) for 10 minutes. 4. Take out and press down the potatoes to squeeze out air. Brush with melted butter and cook for another 90 minutes, pushing down quite regularly. Serve sprinkled with chopped parsley and braised pickled red cabbage.",
        bool: true
    },
    {
      title: "Challah, Favorite Recipe",
      prepTime: '15 min',
      ingredients: "1 1/4 c Cold water|2 pk Dry yeast|2 ts Salt|6 tb Butter or Margarine|1/2 c Sugar (+ 1 T if desired)|3 Eggs|7 c Unbleached flour (approx.)|1 Egg yold mixed w/ 1 T water|1 1/2 c Golden raising (optional)",
      servings: "12 Servings",
      instructions: "In large bowl of electric mixer, thoroughly mix undissolved yeast with 1/3 of the flour and all other dry ingredients. In a 2 to 4 cup measure, start with 1 1/4 cups cold water. Add margarine, then add enough water to make 2 cups liquid. Heat liquids with margarine over low heat unitl very warm, 110 to 120 degrees. Margarine does not need to melt. Add liquids to dry ingredients. Beat for 2 minutes at medium speed of electric mixer, scraping bowl occasionally. Add about 1/2 cup flour, or enough flour to make a thick batter. Add the 3 eggs one at a time. Beat on high speed for 2 minutes, scraping bowl occasionally. Use dough hook or wooden spoon to stir, adding all but one cup of flour or as much as is needed to make elastic dough. Amount will vary according to temperature and humidity of room. If raisins are used, add here and stir thoroughly. Turn dough out on floured surface, kneading until it becomes smooth and satiny to the touch. Add more flour if needed. Place dough in well-greased bowl, turning to grease top of dough. Cover with plastic wrap and let rise until doubled in bulk, about 1 to 1 1/2 hours. Punch down. Return to lightly floured board. Cut into desired amount of loaves. This recipe makes 1 very large, 2 large or 3 medium loaves. Cut amount of dough desired. Stretch into one strand and twist to form a crown.\u0014 Paint egg mixture. Repeat with remaining dough. Tops may be sprinkled with sesame or poppy seeds. After bread has risen for about an hour, brush any dry areas with egg wash. Prick any air bubbles. Bake in 375-degree oven for 25 to 30 minutes, until browned. A flick of finger should produce a hollow sound. Remove to rack to cool. Challah freezes well but should be thoroughly cooled before wrapping in heavy foil.",
      
    }
]
const output = function(recipeList){
    recipeList.forEach(recipe => {
        let article = document.createElement('article')
        let recipeTitle = document.createElement('h3')
        //recipeTitle.innerHTML = recipeList;
        let title = document.createElement('h3')
        title.innerHTML = recipe.title
        let prepTime = document.createElement('h4')
        prepTime.innerHTML = recipe.prepTime
        let ingredients = document.createElement('h4')
        ingredients.innerHTML = recipe.ingredients
        let servings = document.createElement('h4')
        servings.innerHTML = recipe.servings
        let instructions = document.createElement('p')
        instructions.innerHTML = recipe.instructions
        article.appendChild(recipeTitle);
        article.appendChild(title)
        article.appendChild(prepTime)
        article.appendChild(ingredients);
        article.appendChild(servings)
        article.appendChild(instructions);
        document.querySelector('#recipes').append(article);
    });
}; 
output(recipeList)

function reset(){
  document.querySelector('#recipes').textContent = ''
}

const results = function(){
  reset()
    const filterObj = recipeList.filter(item => item.bool);
    output(filterObj)
    
}
const allButton = document.querySelector('#all.btn')
if(allButton.value === 'click'){
  reset()
  output(recipeList)
  console.log('all')
}
const completeList = function(){
  reset()
  output(recipeList)
  console.log('Finally done')
}
document.querySelector('#less.btn').addEventListener('click', results)



const currentDate = new Date
document.querySelector('#date').innerHTML = currentDate;
console.log('Thanks for watching!')