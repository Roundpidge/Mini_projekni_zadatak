const express = require('express');
const app = express();
const { cvijece, oprema, posude } = require('./data'); //importa podatke iz drugog data.js 
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    res.json('Hello, world!');
    res.json({ cvijece, oprema, posude });
});

//CVIJECE METODE
app.get('/cvijece', (req, res) => {
    res.json(cvijece);
});

app.get('/cvijece/:id', (req, res) => {

    for (cvijet of cvijece) {
        const id_cvijet = req.params.id;

        if (isNaN(id_pizza)) {
            res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        }

        const cvijet = cvijece.find(cvijet => cvijet.id == id_cvijet);
        if (cvijet) {
            res.json(cvijece);
        } else {
            res.json({ message: 'Cvijet s traženim id-om ne postoji' })
        }
    }
});

//OPREMA METODE
app.get('/oprema_i_posude', (req, res) => {
    res.json({ oprema, posude });
})

app.get('/oprema/:id', (req, res) => {
    for (alat of oprema) {
        const id_alat = req.params.id;
        if (isNaN(id_alat)) {
            res.json({ message: 'Proslijedili ste parametar id koji nije broj!' })
        }
        const alat = oprema.find(alat => alat.id == id_alat);
        if (alat) {
            res.json(oprema)
        } else {
            res.json({ message: 'Oprema s traženim id-om ne postoji!' })
        }
    }

});

app.get('/posude/:id', (req, res) => {
    for (posuda of posude) {
        const id_posuda = req.params.id;
        if (isNaN(id_posuda)) {
            res.json({ message: 'Proslijedili ste parametar id koji nije broj!' })
        }
        const posuda = posude.find(posuda => posuda.id == id_posuda);
        if (posuda) {
            res.json(posude)
        } else {
            res.json({ message: 'Posuda s traženim id-om ne postoji!' })
        }
    }

});

//POST
app.post('/naruci/:lista', (req, res) => {
    const { lista } = req.params;
    const { naziv, kolicina } = req.body;
    const baze = { cvijece, oprema, posude }

    if (!baze[lista]) {

        return res.status(400).send("Ta lista ne postoji!")
    }

    if (!naziv || !kolicina) {
        return res.status(400).send("Nedostaje naziv ili kolicina! ")
    }

    const kolekcija = baze[lista]

    const artikl = kolekcija.find(a => a.naziv.toLowerCase() === naziv.toLowerCase())
    if (!artikl) {
        res.status(400).send("Traženi artikl ne postoji")
    }

    if (artikl.kolicina < 1) {
        return res.status(400).send("Nema dovoljno artikla na zalihama!")
    }

    console.log('Primljeni podaci:', narudzba);
    res.send(`Vaša narudžba za ${narudzba.naziv} po cijeni ${narudzba.cijena} uspješno zaprimljena!`);
});

//PUT
app.put('/:lista/:id', (req, res) => {
    const { lista, id } = req.params;
    const baze = { cvijece, oprema, posude }

    const kolekcija = baze[lista]
    if (!baze[lista]) {
        return res.status(400).send("Ta lista ne postoji!")
    }

    const trazen = kolekcija.findIndex(t => t.id === id)
    if (trazen === -1) {
    return res.json({ message: 'lista s traženim id-om ne postoji' })
    } 

    const stara=kolekcija[trazen]

    const nova={
        ...stara,
        ...req.body,
        id: stara.id
    }
})

//DELETE
app.delete('/:lista/:id', (req, res) => {
    const { lista, id } = req.params;

    const baze = { cvijece, oprema, posude };
    const kolekcija = baze[lista];

    if (!kolekcija) {
        return res.status(400).json({ message: 'Ta lista ne postoji!' });
    }

    const idNum = Number(id);
    const indeks = kolekcija.findIndex(item => item.id === idNum);

    if (indeks === -1) {
        return res.status(404).json({ message: 'Artikl s traženim ID-em ne postoji.' });
    }

    kolekcija.splice(indeks, 1);

    res.json({ message: 'Uspješno obrisano.' });
});



app.listen(PORT, error => {
    if (error) {
        console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
    } else {
        console.log(`Server je pokrenut na http://localhost:${PORT}`);
    }
});


