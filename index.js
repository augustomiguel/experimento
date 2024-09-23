import express from "express";
import bodyParser from "body-parser";

//// receber audio 
import multer from 'multer';
import path from "path";


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static("public"));

const upload = multer({ dest: 'uploads/',
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'audio/wav' || file.mimetype === 'audio/mpeg') {
            cb(null, true);
        } else {
            cb(new Error('Formato de arquivo inválido'));
        }
    }
 });

// * Get Routes
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// * Post Routes
// app.post("/upload", (req, res) =>{
//     console.log(req.body);
//     res.redirect("/");
// });


app.listen(port, () =>{
    console.log(`Executando na porta ${port}`);
 });


app.post('/upload',   
    upload.single('audio'), async (req, res) => {
        
        try{
            const originalname = req.file.originalname;
            //const file = req.file;
            const filename = req.file.filename;
            const filepath = path.join(__dirname, 'uploads', filename);

            // Aqui você pode salvar o arquivo em um banco de dados, processá-lo, etc.
            console.log(`Arquivo ${originalname} salvo como ${filepath}`);

            res.json({ message: 'Arquivo enviado com sucesso' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Erro ao processar o arquivo' });
          }
   });
   


