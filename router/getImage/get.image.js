const multer = require('multer');

const storage = multer.diskStorage({
<<<<<<< HEAD
    destination: (req,file,cb)=>{
      cb(null,'views/public/imgUser')
    },
    filename: (req,file,cb)=> {
        const ext = file.originalname.split('.').pop();
         cb(null,`${Date.now()}.${ext}`) 
    }
})
const uploadUser = multer({storage})

module.exports = uploadUser;
=======
  destination: (req, file, cb) => {
    cb(null, 'views/public/imgUser');
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});
const uploadUser = multer({ storage });

module.exports = uploadUser;
>>>>>>> f044811 (commit para front)
