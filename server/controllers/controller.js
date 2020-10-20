
const bigFootSightings = [
    {
        id: 1,
        name: 'Huxley Barker',
        date: '09/23/1996',
        location: 'Charleston, Oregon',
        description: 'It was so huge and hairy!!! I was walking out back of my house from the garage one night when I heard the most frightening thing I ever did hear. It was like the loudest roar you could possibly imagine and then I looked up and there was something there that looked like a bear but it wasn’t no bear!! It was an ape man! Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'
    },
    {
        id: 2,
        name: 'Teddy Rose Belt',
        date: '01/02/2004',
        location: 'Twin Falls, Idaho',
        description: 'So I was driving long haul one evening nothing out of the ordinary just me my eight wheeler and long stretches of tarmac. Dense forests on all sides usually not broken up by anything. So I start getting drowsy and I’m considering pulling over when all of the sudden WHAM something hits the side of my truck! Scared the hell outta me that’s for sure. Well I of course have to stop and look to see what the hell that was. Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'


    },
    {
        id: 3,
        name: 'Marcus Sparks',
        date: '10/30/2011',
        location: 'Reno, Nevada',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    },
    {
        id: 4,
        name: 'Austin Ballet',
        date: '06/21/2002',
        location: 'Rayado, New Mexico',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    },
    {
        id: 5,
        name: 'Daniel Leonono',
        date: '03/05/2012',
        location: 'Cripple Creek, Colorado',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'


    },
    {
        id: 6,
        name: 'Shelby Brezzell',
        date: '04/11/2013',
        location: 'Beavercreek, Oregon',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    },
    {
        id: 7,
        name: 'Doll E. Pardon',
        date: '10/22/2000',
        location: 'Union, Washington',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    },
    {
        id: 8,
        name: 'Jimmy Pelo',
        date: '06/02/2003',
        location: 'Willits, California',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    },
    {
        id: 9,
        name: 'Annie Belle',
        date: '12/11/2007',
        location: 'Kissimmee, Florida',
        description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.',
        comments: 'There are no comments on this post'

    }
    
];

let id = 10;


function getSightings(req, res){
    res.status(200).send(bigFootSightings);

}



function addSightings(req, res){
    let newSighting = {
        id, 
        name: req.body.name,
        date: req.body.date,
        location: req.body.location,
        description: req.body.description,
        comments: 'There are no comments on this post'

    }

    bigFootSightings.push(newSighting);

    id++;

    res.status(200).send(bigFootSightings);

}

function updateSighting(req, res){
    const {id} = req.params;
    const {comments} = req.body

    const report = bigFootSightings.find(element => element.id === +id);
    report.comments = comments;
    res.status(200).send(bigFootSightings)

}

function deleteSighting(req, res){
    const {id} = req.params;

    let index = bigFootSightings.find(element => element.id === +id);
    bigFootSightings.splice(index, 1);
    res.status(200).send(bigFootSightings);
}


module.exports = {
    getSightings,
    addSightings, 
    updateSighting,
    deleteSighting

}