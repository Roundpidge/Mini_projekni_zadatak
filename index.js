const express = require('express');
const app = express();
const { cvijece, oprema, posude } = require('./data'); //importa podatke iz drugog data.js 
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
res.json('Hello, world!');
res.json({cvijece, oprema, posude});
});

//CVIJECE METODE
app.get('/cvijece', (req, res) => {
res.json(cvijece);
});

app.get('/cvijece/:id', (req, res) => {

    for(cvijet of cvijece){
    const id_cvijet = req.params.id;

        if (isNaN(id_pizza)) {
        res.json({ message: 'Proslijedili ste parametar id koji nije broj!' });
        }

    const cvijet = cvijece.find(cvijet => cvijet.id == id_cvijet);
        if(cvijet){
        res.json(cvijece);
        }else{
            res.json({message: 'Cvijet s traženim id-om ne postoji'})
        }
    }
});

//OPREMA METODE
app.get('/oprema_i_posude', (req, res)=> {
    res.json({oprema, posude});
})

app.get('/oprema/:id', (req, res) => {
    for(alat of oprema){
        const id_alat=req.params.id;
        if(isNaN(id_alat)){
            res.json({message: 'Proslijedili ste parametar id koji nije broj!'})
        }
        const alat=oprema.find(alat=>alat.id==id_alat);
        if(alat){
            res.json(oprema)
        }else{
            res.json({message: 'Oprema s traženim id-om ne postoji!'})
        }
    }

});

app.get('/posude/:id', (req, res) => {
    for(posuda of posude){
        const id_posuda=req.params.id;
        if(isNaN(id_posuda)){
            res.json({message: 'Proslijedili ste parametar id koji nije broj!'})
        }
        const posuda=posude.find(posuda=>posuda.id==id_posuda);
        if(posuda){
            res.json(posude)
        }else{
            res.json({message: 'Posuda s traženim id-om ne postoji!'})
        }
    }

});

//POST
app.post('/naruci', (req, res) => {
const narudzba = req.body;
console.log('Primljeni podaci:', narudzba);
res.send(`Vaša narudžba za ${cvijece.naziv} po cijeni ${cvijece.cijena} uspješno zaprimljena!`);
});

app.listen(PORT, error => {
if (error) {
console.error(`Greška prilikom pokretanja poslužitelja: ${error.message}`);
} else {
console.log(`Server je pokrenut na http://localhost:${PORT}`);
}
});
