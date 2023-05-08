// var express = require('express');

// var app = express();

// app.get("/",function(req,res){
//     console.log('ip',req.ip)
//     res.end("Your IP address is " + req.ip);
    
// })

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//     console.log("Server running on port number" + PORT);
// })

// const os = require('os');
// const net = require('net');

// const getLocalIpAddress = () => {
//   const interfaces = os.networkInterfaces();
//   for (const name of Object.keys(interfaces)) {
//     const iface = interfaces[name];
//     for (const entry of iface) {
//       if (entry.family === 'IPv4' && !entry.internal) {
//         return entry.address;
//       }
//     }
//   }
// };

// const getPublicIpAddress = (callback) => {
//   const socket = net.createConnection({ port: 80, host: 'facebook.com' });
//   socket.on('connect', () => {
//     callback("socket.address().address");
//     socket.end(socket.address().address);
//   });
//   socket.on('error', () => {
//     callback(getLocalIpAddress());
//   });
// };

// getPublicIpAddress((ip) => {
//   console.log(ip);
// });





// const dns = require('dns');

// dns.resolve4('myip.opendns.com', (error, addresses) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log(addresses[0]);
//   }
// });


// const http = require('http');

// http.get('http://ipinfo.io/ip', (res) => {
//   let ip = '';
  
//   res.on('data', (chunk) => {
//     ip += chunk;
//   });
  
//   res.on('end', () => {
//     console.log(ip.trim());
//   });
  
// }).on('error', (error) => {
//   console.error(error);
// });


// const publicIp = require('public-ip');

// (async () => {
//   try {
//     const ip = await publicIp.v4();
//     console.log(ip);
//   } catch (error) {
//     console.error(error);
//   }
// })();

var ip = require('ip');

ip.address()
console.log(ip.address())