const jwt = require('jsonwebtoken')
const User = require ('../Models/User')



const midelware = (req, res, next) =>{
    //from the corrent session
  const token = req.cookies.jwt;

  // cckeck json wen token existe and valid
  if (token){
        jwt.verify(token, 'net secret', (err, detectedToken)=> {
            if( err )   {
                console.log(err.message);
                res.redirect('/login');
            }else{
                console.log(detectedToken);
                next()
            }
        })

  }else{
    res.redirect('/login')
  }
}


// check user 

const checkUser = (req, res, next)=>{
  const token = req.cookies.jwt;

  if (token)  {
    jwt.verify(token, 'net secret', async (err, detectedToken)=> {
      if( err )   {
          console.log(err.message);
          res.locals.user = null;
          next();
      }else{
          console.log(detectedToken);
          let user = await User.findById(detectedToken.id);
          res.locals.user = user;
          next();
      }
  })

  }else{
    res.locals.user = null;
    console.log('null')
    next()

  }
}


module.exports = {midelware, checkUser};


// const jwt = require('jsonwebtoken');

// const middleware = (req, res, next) => {
//   // Assuming 'jwt' should be provided in the request headers
//   const token = req.cookies.jwt; // Extract token from headers
//   if (token) {
//     const decodedToken = jwt.verify(token, 'your-secret-key');
//     req.jwt = decodedToken;
//     next();
//   } else {
//     res.status(401).json({ error: 'Unauthorized' });
//   }
// };

// module.exports = middleware;