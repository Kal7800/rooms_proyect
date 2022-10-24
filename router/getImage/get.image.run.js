const multer = require('multer');

const storage = multer.diskStorage({
<<<<<<< HEAD
    destination: (req,file,cb)=>{
      cb(null,'views/public/imgRoom')
    },
    filename: (req,file,cb)=> {
        const ext = file.originalname.split('.').pop();
         cb(null,`${Date.now()}.${ext}`) 
    }
})
const uploadRoom = multer({storage})

module.exports = uploadRoom;
=======
  destination: (req, file, cb) => {
    cb(null, 'views/public/imgRoom');
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop();
    cb(null, `${Date.now()}.${ext}`);
  },
});
const uploadRoom = multer({ storage });

module.exports = uploadRoom;
>>>>>>> f044811 (commit para front)
