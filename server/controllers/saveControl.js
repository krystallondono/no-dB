const savedPosts = [
    {
    id: 1,
    name: 'Huxley Barker',
    date: '09/23/1996',
    location: 'Charleston, Oregon',
    description: 'Vexillologist swag etsy woke, knausgaard everyday carry edison bulb anim pug readymade. Post-ironic organic pok pok 3 wolf moon celiac cold-pressed, migas bespoke. Enamel pin aute shaman gochujang. Bespoke roof party marfa dolore put a bird on it. Mixtape cronut banjo nostrud forage chartreuse fixie enamel pin dolore, beard duis.'
    },
];
let id = 1;

function saveSightings(req, res){
    const {report} = req.body;

    sighting.id = id;
    id++;

    savedPosts.push(report)
    res.status(200).send(savedPosts)


}

function deleteSaved(req, res){
    const {id} = req.params;

    const index = savedPosts.findIndex(element => element.id === +id);
    savedPosts.splice(index, 1);
    res.status(200).send(savedPosts)
}

module.exports = {
    getSavedPosts: function (req, res){
        res.status(200).send(savedPosts)
    },

    saveSightings,
    deleteSaved
}